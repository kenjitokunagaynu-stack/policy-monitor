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
  "targetDate": "2026-10-18",
  "fetchedAt": "2026-10-18T11:08:15+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 22.0,
        "priceAvg30d": 20.52
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 22.25,
        "priceAvg30d": 19.0
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 22.0,
        "priceAvg30d": 18.19
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 22.01,
        "priceAvg30d": 17.68
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 22.01,
        "priceAvg30d": 17.45
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 23.18,
        "priceAvg30d": 18.25
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 23.86,
        "priceAvg30d": 18.98
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 23.95,
        "priceAvg30d": 19.86
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 24.07,
        "priceAvg30d": 20.56
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 24.65,
        "priceAvg30d": 21.48
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 25.66,
        "priceAvg30d": 22.09
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 25.66,
        "priceAvg30d": 21.85
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 24.33,
        "priceAvg30d": 20.93
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 22.8,
        "priceAvg30d": 18.19
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 11.67,
        "priceAvg30d": 15.08
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 5.0,
        "priceAvg30d": 13.37
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 8.5,
        "priceAvg30d": 13.02
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 2.5,
        "priceAvg30d": 12.81
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 1.0,
        "priceAvg30d": 12.25
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 0.02,
        "priceAvg30d": 11.5
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 0.01,
        "priceAvg30d": 10.59
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 0.01,
        "priceAvg30d": 9.98
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 0.01,
        "priceAvg30d": 9.8
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 0.01,
        "priceAvg30d": 9.5
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 0.02,
        "priceAvg30d": 7.34
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 1.0,
        "priceAvg30d": 8.13
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 1.0,
        "priceAvg30d": 10.42
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 3.01,
        "priceAvg30d": 12.83
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 3.5,
        "priceAvg30d": 13.86
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 10.4,
        "priceAvg30d": 17.42
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 11.19,
        "priceAvg30d": 18.63
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 19.87,
        "priceAvg30d": 22.71
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 23.69,
        "priceAvg30d": 25.89
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 25.81,
        "priceAvg30d": 28.69
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 27.25,
        "priceAvg30d": 28.43
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 28.13,
        "priceAvg30d": 29.03
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 26.79,
        "priceAvg30d": 28.25
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 26.64,
        "priceAvg30d": 27.5
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 25.82,
        "priceAvg30d": 26.45
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 25.82,
        "priceAvg30d": 25.03
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 26.13,
        "priceAvg30d": 24.28
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 25.76,
        "priceAvg30d": 23.59
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 25.51,
        "priceAvg30d": 22.99
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 24.87,
        "priceAvg30d": 23.19
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 25.91,
        "priceAvg30d": 23.3
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 25.0,
        "priceAvg30d": 22.22
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 24.95,
        "priceAvg30d": 22.14
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 23.68,
        "priceAvg30d": 20.38
      }
    ],
    "avg": 17.06,
    "max": 28.13,
    "maxBlock": 36,
    "min": 0.01,
    "minBlock": 21,
    "spread3h": 25.41,
    "spreadLowAvg": 0.59,
    "spreadHighAvg": 26.0,
    "avg30d": 18.87,
    "spread30dAvg": 18.23,
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
          "price": 27.58,
          "priceAvg30d": 16.87
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.25,
          "priceAvg30d": 14.7
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.25,
          "priceAvg30d": 15.11
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.25,
          "priceAvg30d": 15.12
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.25,
          "priceAvg30d": 15.99
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.1,
          "priceAvg30d": 17.55
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.1,
          "priceAvg30d": 18.63
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.1,
          "priceAvg30d": 18.91
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.1,
          "priceAvg30d": 18.75
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.1,
          "priceAvg30d": 18.75
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.53,
          "priceAvg30d": 19.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.7,
          "priceAvg30d": 19.45
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 28.25,
          "priceAvg30d": 16.91
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.09,
          "priceAvg30d": 15.17
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.72,
          "priceAvg30d": 12.53
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.71,
          "priceAvg30d": 10.27
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.6,
          "priceAvg30d": 8.94
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 3.0,
          "priceAvg30d": 8.36
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 6.77
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 6.04
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 5.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 5.27
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.54
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.44
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.16
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.07
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.1,
          "priceAvg30d": 5.95
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.01,
          "priceAvg30d": 7.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.72,
          "priceAvg30d": 8.75
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.0,
          "priceAvg30d": 11.14
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.0,
          "priceAvg30d": 13.9
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.04,
          "priceAvg30d": 19.08
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 28.25,
          "priceAvg30d": 25.45
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 29.01,
          "priceAvg30d": 29.21
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.18,
          "priceAvg30d": 27.92
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.18,
          "priceAvg30d": 28.62
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.0,
          "priceAvg30d": 26.97
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.13,
          "priceAvg30d": 27.61
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.25,
          "priceAvg30d": 26.86
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.25,
          "priceAvg30d": 25.87
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.25,
          "priceAvg30d": 24.32
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.13,
          "priceAvg30d": 23.45
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.25,
          "priceAvg30d": 22.56
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.21,
          "priceAvg30d": 23.1
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.95,
          "priceAvg30d": 22.06
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.77,
          "priceAvg30d": 20.89
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.75,
          "priceAvg30d": 20.25
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.76,
          "priceAvg30d": 18.2
        }
      ],
      "avg": 18.35,
      "max": 31.7,
      "maxBlock": 12,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 20.41,
      "spreadLowAvg": 3.72,
      "spreadHighAvg": 24.13,
      "avg30d": 16.37,
      "spread30dAvg": 20.32,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.58,
          "priceAvg30d": 22.34
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.25,
          "priceAvg30d": 21.25
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.25,
          "priceAvg30d": 20.99
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.25,
          "priceAvg30d": 20.8
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.25,
          "priceAvg30d": 20.67
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.25,
          "priceAvg30d": 20.69
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.1,
          "priceAvg30d": 21.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.25,
          "priceAvg30d": 21.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.5,
          "priceAvg30d": 21.61
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.5,
          "priceAvg30d": 21.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.53,
          "priceAvg30d": 21.91
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.58,
          "priceAvg30d": 21.93
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 28.25,
          "priceAvg30d": 21.02
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.91,
          "priceAvg30d": 19.29
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.9,
          "priceAvg30d": 16.02
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.71,
          "priceAvg30d": 12.85
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.6,
          "priceAvg30d": 10.87
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 3.0,
          "priceAvg30d": 8.71
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 7.99
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 6.73
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 5.91
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 5.42
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.3
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.28
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.19
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.59
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.1,
          "priceAvg30d": 7.03
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 8.74
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 3.0,
          "priceAvg30d": 10.69
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.6,
          "priceAvg30d": 13.99
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.0,
          "priceAvg30d": 17.6
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.04,
          "priceAvg30d": 23.59
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 28.25,
          "priceAvg30d": 28.3
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 29.01,
          "priceAvg30d": 32.12
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.18,
          "priceAvg30d": 31.51
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.18,
          "priceAvg30d": 32.13
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.0,
          "priceAvg30d": 30.57
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.13,
          "priceAvg30d": 30.24
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.25,
          "priceAvg30d": 29.32
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.25,
          "priceAvg30d": 27.38
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.25,
          "priceAvg30d": 25.96
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.13,
          "priceAvg30d": 25.07
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.25,
          "priceAvg30d": 24.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.21,
          "priceAvg30d": 26.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.69,
          "priceAvg30d": 24.8
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.77,
          "priceAvg30d": 23.9
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.64,
          "priceAvg30d": 23.34
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.32,
          "priceAvg30d": 21.62
        }
      ],
      "avg": 19.39,
      "max": 30.18,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 24.71,
      "spreadLowAvg": 3.72,
      "spreadHighAvg": 28.44,
      "avg30d": 18.99,
      "spread30dAvg": 22.28,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.58,
          "priceAvg30d": 24.34
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.25,
          "priceAvg30d": 23.48
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.25,
          "priceAvg30d": 23.24
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.25,
          "priceAvg30d": 23.09
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.25,
          "priceAvg30d": 22.97
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.25,
          "priceAvg30d": 23.19
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.1,
          "priceAvg30d": 23.63
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.25,
          "priceAvg30d": 23.97
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.5,
          "priceAvg30d": 24.14
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.5,
          "priceAvg30d": 24.35
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.53,
          "priceAvg30d": 24.41
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.58,
          "priceAvg30d": 24.43
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 28.25,
          "priceAvg30d": 23.98
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.91,
          "priceAvg30d": 22.84
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.02,
          "priceAvg30d": 21.79
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 19.68,
          "priceAvg30d": 21.51
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 17.5,
          "priceAvg30d": 20.39
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.38,
          "priceAvg30d": 20.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.9,
          "priceAvg30d": 20.59
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.0,
          "priceAvg30d": 20.24
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.04,
          "priceAvg30d": 18.44
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 18.07
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.05,
          "priceAvg30d": 18.2
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.0,
          "priceAvg30d": 18.17
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.63,
          "priceAvg30d": 16.77
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.38,
          "priceAvg30d": 17.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.02,
          "priceAvg30d": 18.87
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.38,
          "priceAvg30d": 21.5
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 5.1,
          "priceAvg30d": 23.37
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.68,
          "priceAvg30d": 25.44
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.51,
          "priceAvg30d": 24.77
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.04,
          "priceAvg30d": 28.53
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 28.25,
          "priceAvg30d": 31.91
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 29.01,
          "priceAvg30d": 34.55
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.18,
          "priceAvg30d": 33.48
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.18,
          "priceAvg30d": 34.18
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.0,
          "priceAvg30d": 32.95
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.13,
          "priceAvg30d": 32.63
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.25,
          "priceAvg30d": 31.22
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.25,
          "priceAvg30d": 29.19
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.25,
          "priceAvg30d": 27.62
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.13,
          "priceAvg30d": 26.76
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.25,
          "priceAvg30d": 26.08
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.21,
          "priceAvg30d": 27.05
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.69,
          "priceAvg30d": 27.51
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.77,
          "priceAvg30d": 26.7
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.64,
          "priceAvg30d": 26.46
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.32,
          "priceAvg30d": 24.84
        }
      ],
      "avg": 21.34,
      "max": 30.18,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 22,
      "spread3h": 26.5,
      "spreadLowAvg": 1.94,
      "spreadHighAvg": 28.44,
      "avg30d": 24.6,
      "spread30dAvg": 14.43,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.01,
          "priceAvg30d": 24.12
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.01,
          "priceAvg30d": 23.21
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.01,
          "priceAvg30d": 22.97
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.5,
          "priceAvg30d": 22.7
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.59,
          "priceAvg30d": 22.63
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.86,
          "priceAvg30d": 22.83
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.95,
          "priceAvg30d": 23.31
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.22,
          "priceAvg30d": 23.61
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.31,
          "priceAvg30d": 23.8
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.4,
          "priceAvg30d": 24.1
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.4,
          "priceAvg30d": 24.26
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.31,
          "priceAvg30d": 24.27
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.04,
          "priceAvg30d": 23.86
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.0,
          "priceAvg30d": 22.48
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.79,
          "priceAvg30d": 21.07
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 19.48
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.6,
          "priceAvg30d": 18.38
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.01,
          "priceAvg30d": 18.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 18.64
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 17.86
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 16.41
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 15.98
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 15.86
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 15.73
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 13.45
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 14.21
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 16.95
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 20.18
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 3.0,
          "priceAvg30d": 21.44
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.71,
          "priceAvg30d": 23.07
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.59,
          "priceAvg30d": 24.15
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.99,
          "priceAvg30d": 27.88
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.6,
          "priceAvg30d": 30.73
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.87,
          "priceAvg30d": 33.04
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.89,
          "priceAvg30d": 32.48
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.24,
          "priceAvg30d": 32.77
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.24,
          "priceAvg30d": 31.75
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.89,
          "priceAvg30d": 30.84
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.76,
          "priceAvg30d": 29.89
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.18,
          "priceAvg30d": 28.74
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.03,
          "priceAvg30d": 27.55
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.03,
          "priceAvg30d": 26.65
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.27,
          "priceAvg30d": 26.2
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.43,
          "priceAvg30d": 26.66
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.88,
          "priceAvg30d": 27.16
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.77,
          "priceAvg30d": 26.43
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.64,
          "priceAvg30d": 26.55
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.32,
          "priceAvg30d": 24.94
        }
      ],
      "avg": 15.85,
      "max": 26.88,
      "maxBlock": 45,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 24.73,
      "spreadLowAvg": 0.34,
      "spreadHighAvg": 25.08,
      "avg30d": 23.54,
      "spread30dAvg": 16.28,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.81,
          "priceAvg30d": 11.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.68,
          "priceAvg30d": 11.89
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.81,
          "priceAvg30d": 12.0
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.19,
          "priceAvg30d": 11.74
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.81,
          "priceAvg30d": 12.23
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.42,
          "priceAvg30d": 13.0
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.6,
          "priceAvg30d": 13.77
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.22,
          "priceAvg30d": 14.69
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.31,
          "priceAvg30d": 14.53
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.4,
          "priceAvg30d": 15.79
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.4,
          "priceAvg30d": 15.69
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.31,
          "priceAvg30d": 15.71
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.8,
          "priceAvg30d": 16.34
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.18,
          "priceAvg30d": 13.61
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.77,
          "priceAvg30d": 11.96
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 10.09
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.6,
          "priceAvg30d": 11.95
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.01,
          "priceAvg30d": 12.8
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 14.31
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 13.68
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 12.76
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 12.42
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 12.55
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 12.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 9.13
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 9.63
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 12.2
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 15.39
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 3.0,
          "priceAvg30d": 14.97
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.71,
          "priceAvg30d": 16.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.59,
          "priceAvg30d": 16.96
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.0,
          "priceAvg30d": 19.2
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.88,
          "priceAvg30d": 19.67
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.87,
          "priceAvg30d": 21.45
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.89,
          "priceAvg30d": 20.24
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.24,
          "priceAvg30d": 21.52
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.24,
          "priceAvg30d": 20.33
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.89,
          "priceAvg30d": 20.82
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.76,
          "priceAvg30d": 19.75
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.18,
          "priceAvg30d": 18.51
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.52,
          "priceAvg30d": 18.95
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.56,
          "priceAvg30d": 18.2
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.7,
          "priceAvg30d": 18.2
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.7,
          "priceAvg30d": 17.14
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.18,
          "priceAvg30d": 17.12
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.1,
          "priceAvg30d": 15.3
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.7,
          "priceAvg30d": 15.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.18,
          "priceAvg30d": 11.74
        }
      ],
      "avg": 13.37,
      "max": 24.52,
      "maxBlock": 41,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 20.95,
      "spreadLowAvg": 0.34,
      "spreadHighAvg": 21.3,
      "avg30d": 15.12,
      "spread30dAvg": 10.17,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.81,
          "priceAvg30d": 11.66
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.68,
          "priceAvg30d": 11.78
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.81,
          "priceAvg30d": 11.9
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.19,
          "priceAvg30d": 11.65
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.81,
          "priceAvg30d": 11.66
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.42,
          "priceAvg30d": 12.63
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.6,
          "priceAvg30d": 13.43
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.18,
          "priceAvg30d": 14.42
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.11,
          "priceAvg30d": 14.28
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.5,
          "priceAvg30d": 15.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.18,
          "priceAvg30d": 15.46
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.11,
          "priceAvg30d": 15.44
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.8,
          "priceAvg30d": 16.27
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.18,
          "priceAvg30d": 13.5
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.66,
          "priceAvg30d": 11.52
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 9.33
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.6,
          "priceAvg30d": 11.29
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.01,
          "priceAvg30d": 12.07
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 13.76
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 13.24
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 12.35
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 12.05
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 12.21
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 12.08
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 8.7
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 9.23
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 11.86
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 15.29
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 3.0,
          "priceAvg30d": 14.39
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.71,
          "priceAvg30d": 16.27
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.59,
          "priceAvg30d": 16.61
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.0,
          "priceAvg30d": 19.09
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.88,
          "priceAvg30d": 19.67
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.87,
          "priceAvg30d": 21.45
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.89,
          "priceAvg30d": 20.24
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.24,
          "priceAvg30d": 21.18
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.24,
          "priceAvg30d": 20.33
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.89,
          "priceAvg30d": 20.38
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.76,
          "priceAvg30d": 19.41
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.18,
          "priceAvg30d": 18.33
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.52,
          "priceAvg30d": 18.76
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.56,
          "priceAvg30d": 18.04
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.7,
          "priceAvg30d": 18.04
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.7,
          "priceAvg30d": 16.89
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.18,
          "priceAvg30d": 16.88
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.1,
          "priceAvg30d": 15.06
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.7,
          "priceAvg30d": 14.9
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.18,
          "priceAvg30d": 11.62
        }
      ],
      "avg": 12.73,
      "max": 24.52,
      "maxBlock": 41,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 20.95,
      "spreadLowAvg": 0.34,
      "spreadHighAvg": 21.3,
      "avg30d": 14.84,
      "spread30dAvg": 10.29,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.81,
          "priceAvg30d": 11.66
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.68,
          "priceAvg30d": 11.78
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.81,
          "priceAvg30d": 11.74
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.19,
          "priceAvg30d": 11.47
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.81,
          "priceAvg30d": 11.17
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.42,
          "priceAvg30d": 12.1
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.6,
          "priceAvg30d": 12.69
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.18,
          "priceAvg30d": 13.9
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.11,
          "priceAvg30d": 14.09
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.5,
          "priceAvg30d": 15.35
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.18,
          "priceAvg30d": 15.46
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.11,
          "priceAvg30d": 15.4
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.8,
          "priceAvg30d": 16.27
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.18,
          "priceAvg30d": 13.38
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.66,
          "priceAvg30d": 10.64
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 8.76
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.6,
          "priceAvg30d": 8.75
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.01,
          "priceAvg30d": 8.7
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 7.87
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 7.12
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.7
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 7.21
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.22
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.84
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.95
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 5.89
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 7.36
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 8.38
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 3.0,
          "priceAvg30d": 8.85
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.71,
          "priceAvg30d": 9.72
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.59,
          "priceAvg30d": 11.03
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.0,
          "priceAvg30d": 13.28
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.88,
          "priceAvg30d": 14.63
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.87,
          "priceAvg30d": 18.6
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.89,
          "priceAvg30d": 19.76
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.24,
          "priceAvg30d": 20.76
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.24,
          "priceAvg30d": 19.87
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.89,
          "priceAvg30d": 19.9
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.76,
          "priceAvg30d": 19.29
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.18,
          "priceAvg30d": 18.33
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.52,
          "priceAvg30d": 18.62
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.56,
          "priceAvg30d": 17.96
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.7,
          "priceAvg30d": 18.0
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.7,
          "priceAvg30d": 16.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.18,
          "priceAvg30d": 16.8
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.1,
          "priceAvg30d": 15.06
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.7,
          "priceAvg30d": 14.9
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.18,
          "priceAvg30d": 11.62
        }
      ],
      "avg": 12.73,
      "max": 24.52,
      "maxBlock": 41,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 20.95,
      "spreadLowAvg": 0.34,
      "spreadHighAvg": 21.3,
      "avg30d": 12.89,
      "spread30dAvg": 12.27,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.22,
          "priceAvg30d": 11.2
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.22,
          "priceAvg30d": 11.08
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 8.2,
          "priceAvg30d": 11.09
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 8.22,
          "priceAvg30d": 10.84
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.23,
          "priceAvg30d": 10.43
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 8.22,
          "priceAvg30d": 11.08
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 8.18,
          "priceAvg30d": 11.31
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 8.23,
          "priceAvg30d": 12.53
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.26,
          "priceAvg30d": 12.37
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.31,
          "priceAvg30d": 13.79
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.33,
          "priceAvg30d": 13.95
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.3,
          "priceAvg30d": 13.75
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.27,
          "priceAvg30d": 14.34
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 5.6,
          "priceAvg30d": 11.67
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 6.0,
          "priceAvg30d": 9.2
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 7.82
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.6,
          "priceAvg30d": 7.75
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.01,
          "priceAvg30d": 7.93
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 7.13
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 6.15
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.73
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.32
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.88
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.14
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.74
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 5.77
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 6.88
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 7.49
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 3.0,
          "priceAvg30d": 7.87
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.29,
          "priceAvg30d": 8.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.34,
          "priceAvg30d": 9.18
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 0.01,
          "priceAvg30d": 11.64
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 0.01,
          "priceAvg30d": 12.23
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 3.5,
          "priceAvg30d": 15.1
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 8.23,
          "priceAvg30d": 16.0
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 8.32,
          "priceAvg30d": 17.43
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 8.43,
          "priceAvg30d": 17.04
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 8.39,
          "priceAvg30d": 16.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 8.38,
          "priceAvg30d": 15.99
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.35,
          "priceAvg30d": 14.64
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 8.34,
          "priceAvg30d": 15.11
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.34,
          "priceAvg30d": 14.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.34,
          "priceAvg30d": 14.56
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.29,
          "priceAvg30d": 13.64
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 7.0,
          "priceAvg30d": 13.73
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 8.29,
          "priceAvg30d": 12.54
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 8.21,
          "priceAvg30d": 12.85
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.19,
          "priceAvg30d": 10.13
        }
      ],
      "avg": 5.65,
      "max": 8.43,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 7.18,
      "spreadLowAvg": 0.34,
      "spreadHighAvg": 7.53,
      "avg30d": 11.16,
      "spread30dAvg": 10.57,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.81,
          "priceAvg30d": 11.66
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.68,
          "priceAvg30d": 11.78
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.81,
          "priceAvg30d": 11.74
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.19,
          "priceAvg30d": 11.47
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.81,
          "priceAvg30d": 11.17
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.42,
          "priceAvg30d": 12.1
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.6,
          "priceAvg30d": 12.69
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.18,
          "priceAvg30d": 13.9
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.11,
          "priceAvg30d": 14.09
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.5,
          "priceAvg30d": 15.35
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.18,
          "priceAvg30d": 15.42
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.11,
          "priceAvg30d": 15.4
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.8,
          "priceAvg30d": 16.27
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.18,
          "priceAvg30d": 13.38
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.66,
          "priceAvg30d": 10.64
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 8.76
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.6,
          "priceAvg30d": 8.58
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.01,
          "priceAvg30d": 8.05
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 6.92
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 6.22
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 5.65
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.45
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.28
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 4.92
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 5.01
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 5.88
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 6.85
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 3.0,
          "priceAvg30d": 7.83
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.71,
          "priceAvg30d": 8.93
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.59,
          "priceAvg30d": 10.59
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.0,
          "priceAvg30d": 12.77
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.88,
          "priceAvg30d": 14.63
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.87,
          "priceAvg30d": 18.6
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.89,
          "priceAvg30d": 19.76
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.24,
          "priceAvg30d": 20.76
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.24,
          "priceAvg30d": 19.87
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.89,
          "priceAvg30d": 19.9
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.76,
          "priceAvg30d": 19.29
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.18,
          "priceAvg30d": 18.33
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.52,
          "priceAvg30d": 18.62
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.56,
          "priceAvg30d": 17.96
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.7,
          "priceAvg30d": 18.0
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.7,
          "priceAvg30d": 16.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.18,
          "priceAvg30d": 16.8
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.1,
          "priceAvg30d": 15.06
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.7,
          "priceAvg30d": 14.9
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.18,
          "priceAvg30d": 11.62
        }
      ],
      "avg": 12.73,
      "max": 24.52,
      "maxBlock": 41,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 20.95,
      "spreadLowAvg": 0.34,
      "spreadHighAvg": 21.3,
      "avg30d": 12.54,
      "spread30dAvg": 12.74,
      "historyDays": 30
    }
  }
};
