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
  "targetDate": "2026-11-03",
  "fetchedAt": "2026-11-03T13:35:46+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 25.59,
        "priceAvg30d": 24.02
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 25.0,
        "priceAvg30d": 22.88
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 22.0,
        "priceAvg30d": 22.53
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 21.59,
        "priceAvg30d": 22.42
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 21.95,
        "priceAvg30d": 22.61
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 24.31,
        "priceAvg30d": 23.19
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 25.82,
        "priceAvg30d": 23.82
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 27.3,
        "priceAvg30d": 24.6
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 27.57,
        "priceAvg30d": 24.93
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 27.82,
        "priceAvg30d": 25.33
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 27.58,
        "priceAvg30d": 25.64
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 27.62,
        "priceAvg30d": 25.69
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 27.62,
        "priceAvg30d": 25.56
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 27.3,
        "priceAvg30d": 24.5
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 25.16,
        "priceAvg30d": 21.97
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 19.5,
        "priceAvg30d": 19.33
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 15.15,
        "priceAvg30d": 18.28
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 12.16,
        "priceAvg30d": 17.66
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 9.36,
        "priceAvg30d": 15.95
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 7.06,
        "priceAvg30d": 15.14
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 8.14,
        "priceAvg30d": 14.25
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 2.5,
        "priceAvg30d": 13.97
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 1.02,
        "priceAvg30d": 13.64
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 1.01,
        "priceAvg30d": 13.56
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 1.01,
        "priceAvg30d": 11.48
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 2.5,
        "priceAvg30d": 12.01
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 8.62,
        "priceAvg30d": 15.32
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 10.57,
        "priceAvg30d": 18.02
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 10.95,
        "priceAvg30d": 19.27
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 13.83,
        "priceAvg30d": 22.91
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 24.54,
        "priceAvg30d": 24.57
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 27.9,
        "priceAvg30d": 28.37
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 30.29,
        "priceAvg30d": 32.07
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 31.61,
        "priceAvg30d": 34.22
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 30.9,
        "priceAvg30d": 33.52
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 30.37,
        "priceAvg30d": 33.5
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 30.17,
        "priceAvg30d": 31.88
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 31.26,
        "priceAvg30d": 31.1
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 30.37,
        "priceAvg30d": 30.08
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 30.37,
        "priceAvg30d": 28.17
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 30.37,
        "priceAvg30d": 27.48
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 30.03,
        "priceAvg30d": 26.66
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 29.55,
        "priceAvg30d": 26.17
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 28.59,
        "priceAvg30d": 26.05
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 28.23,
        "priceAvg30d": 26.37
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 26.57,
        "priceAvg30d": 25.67
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 25.18,
        "priceAvg30d": 25.48
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 21.95,
        "priceAvg30d": 24.06
      }
    ],
    "avg": 21.37,
    "max": 31.61,
    "maxBlock": 34,
    "min": 1.01,
    "minBlock": 24,
    "spread3h": 25.06,
    "spreadLowAvg": 3.96,
    "spreadHighAvg": 29.03,
    "avg30d": 23.25,
    "spread30dAvg": 18.91,
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
          "price": 29.95,
          "priceAvg30d": 20.88
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.0,
          "priceAvg30d": 17.89
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.14,
          "priceAvg30d": 18.85
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.15,
          "priceAvg30d": 19.58
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.64,
          "priceAvg30d": 20.35
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.61,
          "priceAvg30d": 22.03
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.0,
          "priceAvg30d": 23.22
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.08,
          "priceAvg30d": 24.23
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.17,
          "priceAvg30d": 24.77
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.53,
          "priceAvg30d": 24.69
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.09,
          "priceAvg30d": 26.75
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.29,
          "priceAvg30d": 27.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.9,
          "priceAvg30d": 24.04
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 21.39
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 18.64,
          "priceAvg30d": 18.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.24,
          "priceAvg30d": 15.4
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 13.59,
          "priceAvg30d": 14.18
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.93,
          "priceAvg30d": 11.96
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.93,
          "priceAvg30d": 11.24
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.93,
          "priceAvg30d": 10.18
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.93,
          "priceAvg30d": 9.47
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.93,
          "priceAvg30d": 8.41
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.93,
          "priceAvg30d": 8.92
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.4,
          "priceAvg30d": 9.11
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.93,
          "priceAvg30d": 7.33
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.93,
          "priceAvg30d": 7.07
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.14,
          "priceAvg30d": 9.15
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.93,
          "priceAvg30d": 11.78
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.93,
          "priceAvg30d": 15.17
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.22,
          "priceAvg30d": 18.71
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 24.12,
          "priceAvg30d": 20.87
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.03,
          "priceAvg30d": 26.24
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.63,
          "priceAvg30d": 33.37
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.13,
          "priceAvg30d": 35.8
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.45,
          "priceAvg30d": 33.85
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.45,
          "priceAvg30d": 33.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.45,
          "priceAvg30d": 32.12
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.11,
          "priceAvg30d": 32.43
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.11,
          "priceAvg30d": 33.06
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.11,
          "priceAvg30d": 31.91
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.11,
          "priceAvg30d": 31.16
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 33.11,
          "priceAvg30d": 28.86
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.47,
          "priceAvg30d": 27.84
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 34.77,
          "priceAvg30d": 26.89
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.47,
          "priceAvg30d": 27.03
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.54,
          "priceAvg30d": 25.82
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.22,
          "priceAvg30d": 25.62
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.24,
          "priceAvg30d": 23.33
        }
      ],
      "avg": 24.05,
      "max": 38.13,
      "maxBlock": 34,
      "min": 8.14,
      "minBlock": 27,
      "spread3h": 22.13,
      "spreadLowAvg": 10.22,
      "spreadHighAvg": 32.36,
      "avg30d": 21.51,
      "spread30dAvg": 24.35,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.95,
          "priceAvg30d": 25.52
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.0,
          "priceAvg30d": 24.82
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.14,
          "priceAvg30d": 24.88
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.15,
          "priceAvg30d": 24.69
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.64,
          "priceAvg30d": 25.12
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.61,
          "priceAvg30d": 25.42
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.0,
          "priceAvg30d": 26.01
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.08,
          "priceAvg30d": 26.06
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.17,
          "priceAvg30d": 26.41
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.53,
          "priceAvg30d": 26.51
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.09,
          "priceAvg30d": 26.9
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.29,
          "priceAvg30d": 27.32
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.9,
          "priceAvg30d": 26.92
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 25.25
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 18.64,
          "priceAvg30d": 22.25
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.24,
          "priceAvg30d": 19.63
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 13.59,
          "priceAvg30d": 18.24
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.93,
          "priceAvg30d": 16.53
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.16,
          "priceAvg30d": 15.67
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.33,
          "priceAvg30d": 14.72
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.01,
          "priceAvg30d": 13.43
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 3.0,
          "priceAvg30d": 13.17
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.5,
          "priceAvg30d": 12.68
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 2.5,
          "priceAvg30d": 12.75
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.01,
          "priceAvg30d": 11.78
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 11.92
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.14,
          "priceAvg30d": 14.98
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.33,
          "priceAvg30d": 17.57
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.43,
          "priceAvg30d": 20.8
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.82,
          "priceAvg30d": 23.75
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.59,
          "priceAvg30d": 26.1
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.03,
          "priceAvg30d": 30.98
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.63,
          "priceAvg30d": 34.73
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.13,
          "priceAvg30d": 37.18
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.45,
          "priceAvg30d": 36.44
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.45,
          "priceAvg30d": 36.44
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.45,
          "priceAvg30d": 34.42
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.01,
          "priceAvg30d": 34.02
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 38.75,
          "priceAvg30d": 32.86
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 37.0,
          "priceAvg30d": 31.25
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.45,
          "priceAvg30d": 29.78
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.45,
          "priceAvg30d": 28.62
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 36.04,
          "priceAvg30d": 28.24
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 34.77,
          "priceAvg30d": 28.96
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 33.02,
          "priceAvg30d": 29.36
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.54,
          "priceAvg30d": 27.82
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.22,
          "priceAvg30d": 27.24
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.24,
          "priceAvg30d": 25.29
        }
      ],
      "avg": 23.64,
      "max": 38.75,
      "maxBlock": 39,
      "min": 1.01,
      "minBlock": 25,
      "spread3h": 32.31,
      "spreadLowAvg": 4.5,
      "spreadHighAvg": 36.8,
      "avg30d": 24.61,
      "spread30dAvg": 21.31,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.54,
          "priceAvg30d": 27.1
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.08,
          "priceAvg30d": 26.51
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.55,
          "priceAvg30d": 26.81
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.8,
          "priceAvg30d": 26.54
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.54,
          "priceAvg30d": 26.63
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.17,
          "priceAvg30d": 26.65
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.0,
          "priceAvg30d": 26.88
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.08,
          "priceAvg30d": 26.92
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.17,
          "priceAvg30d": 27.14
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.53,
          "priceAvg30d": 27.2
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.09,
          "priceAvg30d": 27.51
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.29,
          "priceAvg30d": 27.94
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.9,
          "priceAvg30d": 27.79
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.11,
          "priceAvg30d": 26.77
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.47,
          "priceAvg30d": 26.16
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 28.71,
          "priceAvg30d": 25.71
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.57,
          "priceAvg30d": 24.62
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.57,
          "priceAvg30d": 24.34
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 27.12,
          "priceAvg30d": 23.42
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.12,
          "priceAvg30d": 22.59
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.59,
          "priceAvg30d": 21.13
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 25.0,
          "priceAvg30d": 20.79
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.9,
          "priceAvg30d": 20.97
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.0,
          "priceAvg30d": 21.37
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 25.0,
          "priceAvg30d": 20.7
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 25.59,
          "priceAvg30d": 21.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.57,
          "priceAvg30d": 23.34
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.82,
          "priceAvg30d": 25.93
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 27.69
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 31.25,
          "priceAvg30d": 29.73
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.62,
          "priceAvg30d": 29.92
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.18,
          "priceAvg30d": 33.31
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.0,
          "priceAvg30d": 36.03
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 39.9,
          "priceAvg30d": 37.89
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.45,
          "priceAvg30d": 37.12
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.45,
          "priceAvg30d": 37.21
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.45,
          "priceAvg30d": 35.12
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.01,
          "priceAvg30d": 34.82
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 38.75,
          "priceAvg30d": 33.44
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 40.0,
          "priceAvg30d": 31.81
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.45,
          "priceAvg30d": 30.35
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.45,
          "priceAvg30d": 29.05
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 36.04,
          "priceAvg30d": 28.63
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 34.77,
          "priceAvg30d": 29.46
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 33.02,
          "priceAvg30d": 30.68
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.54,
          "priceAvg30d": 29.24
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.22,
          "priceAvg30d": 28.27
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.07,
          "priceAvg30d": 26.81
        }
      ],
      "avg": 31.11,
      "max": 40.0,
      "maxBlock": 40,
      "min": 21.9,
      "minBlock": 23,
      "spread3h": 11.64,
      "spreadLowAvg": 25.38,
      "spreadHighAvg": 37.02,
      "avg30d": 27.87,
      "spread30dAvg": 14.71,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.54,
          "priceAvg30d": 26.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.08,
          "priceAvg30d": 25.34
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.79,
          "priceAvg30d": 25.04
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.8,
          "priceAvg30d": 24.97
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.77,
          "priceAvg30d": 25.45
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.74,
          "priceAvg30d": 25.83
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.81,
          "priceAvg30d": 26.19
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.08,
          "priceAvg30d": 26.41
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.07,
          "priceAvg30d": 26.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.46,
          "priceAvg30d": 26.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.48,
          "priceAvg30d": 27.04
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.49,
          "priceAvg30d": 27.34
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.51,
          "priceAvg30d": 27.08
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.52,
          "priceAvg30d": 25.99
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.31,
          "priceAvg30d": 24.06
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 28.71,
          "priceAvg30d": 21.97
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.6,
          "priceAvg30d": 21.12
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.09,
          "priceAvg30d": 21.54
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.92,
          "priceAvg30d": 21.23
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.78,
          "priceAvg30d": 20.54
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.93,
          "priceAvg30d": 18.7
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.35,
          "priceAvg30d": 18.39
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.34,
          "priceAvg30d": 18.09
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.05,
          "priceAvg30d": 18.07
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.28,
          "priceAvg30d": 15.77
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.9,
          "priceAvg30d": 16.33
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.63,
          "priceAvg30d": 19.47
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.29,
          "priceAvg30d": 22.75
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.29,
          "priceAvg30d": 24.4
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 28.3,
          "priceAvg30d": 26.27
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.79,
          "priceAvg30d": 27.8
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.99,
          "priceAvg30d": 31.96
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.0,
          "priceAvg30d": 34.52
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 39.9,
          "priceAvg30d": 35.62
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.0,
          "priceAvg30d": 35.53
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.99,
          "priceAvg30d": 35.59
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.02,
          "priceAvg30d": 34.11
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.01,
          "priceAvg30d": 33.37
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.0,
          "priceAvg30d": 32.58
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 42.0,
          "priceAvg30d": 30.82
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.01,
          "priceAvg30d": 29.24
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.23,
          "priceAvg30d": 28.24
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 36.04,
          "priceAvg30d": 27.74
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 34.77,
          "priceAvg30d": 27.7
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 33.02,
          "priceAvg30d": 28.71
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.78,
          "priceAvg30d": 28.04
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.49,
          "priceAvg30d": 27.85
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.33,
          "priceAvg30d": 26.73
        }
      ],
      "avg": 28.61,
      "max": 42.0,
      "maxBlock": 39,
      "min": 5.28,
      "minBlock": 25,
      "spread3h": 25.45,
      "spreadLowAvg": 12.59,
      "spreadHighAvg": 38.04,
      "avg30d": 26.06,
      "spread30dAvg": 18.02,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.36,
          "priceAvg30d": 15.4
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.36,
          "priceAvg30d": 15.22
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.38,
          "priceAvg30d": 14.62
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.19,
          "priceAvg30d": 13.84
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.48,
          "priceAvg30d": 15.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 16.27
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 17.47
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.07,
          "priceAvg30d": 19.06
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 18.9
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.62,
          "priceAvg30d": 20.42
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.47,
          "priceAvg30d": 19.82
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.62,
          "priceAvg30d": 19.23
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.62,
          "priceAvg30d": 18.82
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.62,
          "priceAvg30d": 17.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.0,
          "priceAvg30d": 17.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.77,
          "priceAvg30d": 15.67
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.57,
          "priceAvg30d": 17.72
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 19.12
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.03,
          "priceAvg30d": 19.2
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.9,
          "priceAvg30d": 19.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.93,
          "priceAvg30d": 17.44
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.35,
          "priceAvg30d": 17.06
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.34,
          "priceAvg30d": 17.46
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.05,
          "priceAvg30d": 17.61
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.28,
          "priceAvg30d": 14.3
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.9,
          "priceAvg30d": 14.45
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.63,
          "priceAvg30d": 18.17
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.29,
          "priceAvg30d": 20.98
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 22.13,
          "priceAvg30d": 22.02
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.95,
          "priceAvg30d": 23.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.0,
          "priceAvg30d": 24.2
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 23.62,
          "priceAvg30d": 27.59
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 21.95,
          "priceAvg30d": 28.07
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.29,
          "priceAvg30d": 29.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.0,
          "priceAvg30d": 27.96
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.29,
          "priceAvg30d": 28.31
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.29,
          "priceAvg30d": 27.29
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.0,
          "priceAvg30d": 27.31
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.6,
          "priceAvg30d": 26.82
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.71,
          "priceAvg30d": 24.84
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.0,
          "priceAvg30d": 24.96
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.76,
          "priceAvg30d": 23.48
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.28,
          "priceAvg30d": 22.81
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.29,
          "priceAvg30d": 22.17
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.76,
          "priceAvg30d": 21.46
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.0,
          "priceAvg30d": 19.43
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.62,
          "priceAvg30d": 19.31
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.37,
          "priceAvg30d": 15.15
        }
      ],
      "avg": 14.34,
      "max": 30.0,
      "maxBlock": 31,
      "min": 0.03,
      "minBlock": 19,
      "spread3h": 11.87,
      "spreadLowAvg": 9.84,
      "spreadHighAvg": 21.7,
      "avg30d": 20.29,
      "spread30dAvg": 15.25,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.36,
          "priceAvg30d": 15.15
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.36,
          "priceAvg30d": 15.11
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.38,
          "priceAvg30d": 14.52
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.19,
          "priceAvg30d": 13.75
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.48,
          "priceAvg30d": 14.45
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 15.91
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 17.13
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.07,
          "priceAvg30d": 18.63
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 18.44
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.62,
          "priceAvg30d": 19.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.47,
          "priceAvg30d": 19.25
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.62,
          "priceAvg30d": 18.76
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.62,
          "priceAvg30d": 18.75
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.62,
          "priceAvg30d": 17.81
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.0,
          "priceAvg30d": 16.85
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.77,
          "priceAvg30d": 15.34
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.57,
          "priceAvg30d": 17.62
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 19.12
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.03,
          "priceAvg30d": 19.2
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.9,
          "priceAvg30d": 19.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.93,
          "priceAvg30d": 17.39
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.35,
          "priceAvg30d": 17.0
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.34,
          "priceAvg30d": 17.4
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.05,
          "priceAvg30d": 17.56
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.28,
          "priceAvg30d": 14.3
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.9,
          "priceAvg30d": 14.45
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.63,
          "priceAvg30d": 18.17
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.29,
          "priceAvg30d": 20.98
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 22.13,
          "priceAvg30d": 21.7
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.95,
          "priceAvg30d": 23.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.0,
          "priceAvg30d": 24.18
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 23.62,
          "priceAvg30d": 27.56
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 21.95,
          "priceAvg30d": 28.07
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.29,
          "priceAvg30d": 29.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.0,
          "priceAvg30d": 27.96
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.29,
          "priceAvg30d": 27.97
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.29,
          "priceAvg30d": 27.29
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.0,
          "priceAvg30d": 26.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.6,
          "priceAvg30d": 26.48
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.71,
          "priceAvg30d": 24.66
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.0,
          "priceAvg30d": 24.77
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.76,
          "priceAvg30d": 23.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.28,
          "priceAvg30d": 22.65
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.29,
          "priceAvg30d": 21.92
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.76,
          "priceAvg30d": 21.23
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.0,
          "priceAvg30d": 19.18
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.62,
          "priceAvg30d": 19.14
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.37,
          "priceAvg30d": 15.02
        }
      ],
      "avg": 14.34,
      "max": 30.0,
      "maxBlock": 31,
      "min": 0.03,
      "minBlock": 19,
      "spread3h": 11.87,
      "spreadLowAvg": 9.84,
      "spreadHighAvg": 21.7,
      "avg30d": 20.1,
      "spread30dAvg": 15.01,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.36,
          "priceAvg30d": 14.57
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.36,
          "priceAvg30d": 15.11
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.38,
          "priceAvg30d": 14.11
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.19,
          "priceAvg30d": 13.29
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.48,
          "priceAvg30d": 13.55
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 14.83
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 15.68
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.07,
          "priceAvg30d": 17.54
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 18.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.62,
          "priceAvg30d": 19.56
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.47,
          "priceAvg30d": 19.23
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.62,
          "priceAvg30d": 18.75
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.62,
          "priceAvg30d": 18.68
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.62,
          "priceAvg30d": 17.71
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.95,
          "priceAvg30d": 13.64
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.57,
          "priceAvg30d": 11.86
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.57,
          "priceAvg30d": 12.01
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 12.04
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 10.9
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 10.07
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.36
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 8.16
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.41
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 7.07
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.99
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 8.5
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 9.49
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 11.42
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.2,
          "priceAvg30d": 12.77
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.19,
          "priceAvg30d": 13.86
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.19,
          "priceAvg30d": 16.72
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.19,
          "priceAvg30d": 20.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 12.49,
          "priceAvg30d": 24.34
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.27,
          "priceAvg30d": 24.03
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.01,
          "priceAvg30d": 24.65
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.26,
          "priceAvg30d": 23.74
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.26,
          "priceAvg30d": 23.05
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.26,
          "priceAvg30d": 22.97
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.71,
          "priceAvg30d": 21.89
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.27,
          "priceAvg30d": 22.34
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.76,
          "priceAvg30d": 21.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.28,
          "priceAvg30d": 21.03
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.27,
          "priceAvg30d": 20.16
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.7,
          "priceAvg30d": 19.72
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.49,
          "priceAvg30d": 17.83
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.62,
          "priceAvg30d": 17.85
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.37,
          "priceAvg30d": 13.99
        }
      ],
      "avg": 9.34,
      "max": 18.01,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 10.68,
      "spreadLowAvg": 3.95,
      "spreadHighAvg": 14.62,
      "avg30d": 15.87,
      "spread30dAvg": 14.57,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.36,
          "priceAvg30d": 11.61
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.36,
          "priceAvg30d": 11.14
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.38,
          "priceAvg30d": 10.68
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.19,
          "priceAvg30d": 10.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.48,
          "priceAvg30d": 10.36
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 10.51
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 10.83
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.07,
          "priceAvg30d": 12.87
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 13.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.62,
          "priceAvg30d": 14.76
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.47,
          "priceAvg30d": 14.99
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.62,
          "priceAvg30d": 14.73
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.62,
          "priceAvg30d": 14.32
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.62,
          "priceAvg30d": 12.54
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.51,
          "priceAvg30d": 9.76
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.34,
          "priceAvg30d": 9.51
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.5,
          "priceAvg30d": 10.33
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 10.12
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 8.98
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 8.05
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 5.82
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.63
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.85
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 4.83
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.02
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 7.01
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 7.48
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 9.18
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 10.17
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.01,
          "priceAvg30d": 10.2
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.34,
          "priceAvg30d": 11.15
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.47,
          "priceAvg30d": 12.73
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 12.49,
          "priceAvg30d": 16.79
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.27,
          "priceAvg30d": 18.01
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.01,
          "priceAvg30d": 18.49
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.26,
          "priceAvg30d": 18.04
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.26,
          "priceAvg30d": 17.52
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.26,
          "priceAvg30d": 16.53
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 13.47,
          "priceAvg30d": 15.57
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.47,
          "priceAvg30d": 16.04
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.47,
          "priceAvg30d": 15.04
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.28,
          "priceAvg30d": 15.47
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.14,
          "priceAvg30d": 14.06
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.47,
          "priceAvg30d": 13.37
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.49,
          "priceAvg30d": 12.39
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.62,
          "priceAvg30d": 12.88
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.37,
          "priceAvg30d": 10.57
        }
      ],
      "avg": 8.56,
      "max": 18.01,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 12.11,
      "spreadLowAvg": 2.23,
      "spreadHighAvg": 14.34,
      "avg30d": 11.72,
      "spread30dAvg": 12.66,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.36,
          "priceAvg30d": 14.57
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.36,
          "priceAvg30d": 14.68
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.38,
          "priceAvg30d": 13.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.19,
          "priceAvg30d": 13.07
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.48,
          "priceAvg30d": 13.25
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 14.6
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 15.62
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.62,
          "priceAvg30d": 17.52
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 18.27
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.62,
          "priceAvg30d": 19.42
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.47,
          "priceAvg30d": 19.07
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.62,
          "priceAvg30d": 18.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.62,
          "priceAvg30d": 18.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.62,
          "priceAvg30d": 17.7
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.95,
          "priceAvg30d": 13.57
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.57,
          "priceAvg30d": 11.86
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.57,
          "priceAvg30d": 11.46
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 10.53
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 8.87
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 7.76
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.9
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.5
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.26
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.07
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.42
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.51
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 6.33
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 7.79
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 9.39
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.2,
          "priceAvg30d": 11.52
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.19,
          "priceAvg30d": 13.43
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.19,
          "priceAvg30d": 16.14
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.19,
          "priceAvg30d": 20.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 12.49,
          "priceAvg30d": 24.34
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.27,
          "priceAvg30d": 24.03
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.01,
          "priceAvg30d": 24.65
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.26,
          "priceAvg30d": 23.74
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.26,
          "priceAvg30d": 23.05
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.26,
          "priceAvg30d": 22.97
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.71,
          "priceAvg30d": 21.89
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.27,
          "priceAvg30d": 22.34
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.76,
          "priceAvg30d": 21.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.28,
          "priceAvg30d": 21.03
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.27,
          "priceAvg30d": 20.16
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.7,
          "priceAvg30d": 19.72
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.49,
          "priceAvg30d": 17.83
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.62,
          "priceAvg30d": 17.85
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.37,
          "priceAvg30d": 13.99
        }
      ],
      "avg": 9.33,
      "max": 18.01,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 10.68,
      "spreadLowAvg": 3.95,
      "spreadHighAvg": 14.62,
      "avg30d": 15.28,
      "spread30dAvg": 15.63,
      "historyDays": 30
    }
  }
};
