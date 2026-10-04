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
  "targetDate": "2026-10-04",
  "fetchedAt": "2026-10-04T12:24:50+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 17.49,
        "priceAvg30d": 17.46
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 11.74,
        "priceAvg30d": 15.89
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 11.21,
        "priceAvg30d": 14.79
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 11.21,
        "priceAvg30d": 14.36
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 11.21,
        "priceAvg30d": 13.98
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 12.03,
        "priceAvg30d": 14.57
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 13.06,
        "priceAvg30d": 15.29
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 16.96,
        "priceAvg30d": 15.95
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 17.49,
        "priceAvg30d": 16.75
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 17.49,
        "priceAvg30d": 17.9
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 19.81,
        "priceAvg30d": 18.88
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 17.81,
        "priceAvg30d": 18.45
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 17.78,
        "priceAvg30d": 17.45
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 11.33,
        "priceAvg30d": 15.4
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 9.44,
        "priceAvg30d": 13.64
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 5.5,
        "priceAvg30d": 13.48
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 2.0,
        "priceAvg30d": 14.07
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 0.5,
        "priceAvg30d": 14.99
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 0.01,
        "priceAvg30d": 15.82
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 0.01,
        "priceAvg30d": 15.44
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 0.01,
        "priceAvg30d": 14.56
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 0.01,
        "priceAvg30d": 14.14
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 0.01,
        "priceAvg30d": 14.0
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 0.01,
        "priceAvg30d": 13.63
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 0.01,
        "priceAvg30d": 11.9
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 0.04,
        "priceAvg30d": 12.47
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 0.3,
        "priceAvg30d": 14.32
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 2.0,
        "priceAvg30d": 16.28
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 6.0,
        "priceAvg30d": 17.17
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 9.81,
        "priceAvg30d": 18.98
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 10.63,
        "priceAvg30d": 19.15
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 14.0,
        "priceAvg30d": 22.23
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 16.53,
        "priceAvg30d": 23.63
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 19.94,
        "priceAvg30d": 25.94
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 22.0,
        "priceAvg30d": 26.19
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 22.42,
        "priceAvg30d": 26.66
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 22.42,
        "priceAvg30d": 26.65
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 22.3,
        "priceAvg30d": 26.23
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 22.3,
        "priceAvg30d": 25.07
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 22.13,
        "priceAvg30d": 23.7
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 22.1,
        "priceAvg30d": 22.79
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 21.36,
        "priceAvg30d": 22.17
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 20.64,
        "priceAvg30d": 21.28
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 19.94,
        "priceAvg30d": 21.14
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 20.01,
        "priceAvg30d": 20.97
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 19.95,
        "priceAvg30d": 19.45
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 20.0,
        "priceAvg30d": 19.14
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 16.95,
        "priceAvg30d": 17.04
      }
    ],
    "avg": 12.46,
    "max": 22.42,
    "maxBlock": 36,
    "min": 0.01,
    "minBlock": 19,
    "spread3h": 19.58,
    "spreadLowAvg": 1.34,
    "spreadHighAvg": 20.92,
    "avg30d": 18.15,
    "spread30dAvg": 14.64,
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
          "price": 22.72,
          "priceAvg30d": 13.86
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 21.73,
          "priceAvg30d": 12.78
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.0,
          "priceAvg30d": 12.48
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 20.0,
          "priceAvg30d": 12.34
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.0,
          "priceAvg30d": 13.25
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.0,
          "priceAvg30d": 14.15
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.46,
          "priceAvg30d": 15.15
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.55,
          "priceAvg30d": 15.63
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.98,
          "priceAvg30d": 15.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.13,
          "priceAvg30d": 15.92
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.13,
          "priceAvg30d": 16.0
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.13,
          "priceAvg30d": 14.94
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.01,
          "priceAvg30d": 13.37
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.8,
          "priceAvg30d": 11.73
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.73,
          "priceAvg30d": 10.65
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.93,
          "priceAvg30d": 9.6
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 8.65
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 9.41
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 8.5
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 7.66
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.99
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.86
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.17
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.53
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.0
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.5,
          "priceAvg30d": 6.04
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 7.33
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.0,
          "priceAvg30d": 9.37
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 6.1,
          "priceAvg30d": 9.73
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 11.28
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.04,
          "priceAvg30d": 13.43
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 22.01,
          "priceAvg30d": 16.38
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.21,
          "priceAvg30d": 19.49
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.62,
          "priceAvg30d": 22.29
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.91,
          "priceAvg30d": 22.23
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.8,
          "priceAvg30d": 22.28
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.14,
          "priceAvg30d": 21.62
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.19,
          "priceAvg30d": 22.89
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.91,
          "priceAvg30d": 21.91
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.62,
          "priceAvg30d": 20.39
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.99,
          "priceAvg30d": 19.43
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.62,
          "priceAvg30d": 19.26
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.41,
          "priceAvg30d": 17.94
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.39,
          "priceAvg30d": 18.14
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.01,
          "priceAvg30d": 17.56
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.63,
          "priceAvg30d": 16.1
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 23.91,
          "priceAvg30d": 15.34
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.72,
          "priceAvg30d": 14.34
        }
      ],
      "avg": 16.2,
      "max": 29.99,
      "maxBlock": 41,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 23.71,
      "spreadLowAvg": 1.98,
      "spreadHighAvg": 25.69,
      "avg30d": 13.96,
      "spread30dAvg": 13.77,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.72,
          "priceAvg30d": 19.04
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 21.73,
          "priceAvg30d": 17.89
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.0,
          "priceAvg30d": 16.93
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 20.0,
          "priceAvg30d": 16.74
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.0,
          "priceAvg30d": 16.62
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.0,
          "priceAvg30d": 16.76
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.46,
          "priceAvg30d": 17.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.55,
          "priceAvg30d": 18.12
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.98,
          "priceAvg30d": 18.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.13,
          "priceAvg30d": 18.54
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.13,
          "priceAvg30d": 18.91
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.13,
          "priceAvg30d": 18.49
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.01,
          "priceAvg30d": 17.18
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.8,
          "priceAvg30d": 15.66
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.73,
          "priceAvg30d": 13.88
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.93,
          "priceAvg30d": 12.44
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 10.1
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 10.03
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 10.28
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 9.76
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.93
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.74
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 8.6
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 7.73
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.69
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.5,
          "priceAvg30d": 7.35
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 8.76
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.0,
          "priceAvg30d": 10.31
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 6.1,
          "priceAvg30d": 10.98
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 13.28
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.04,
          "priceAvg30d": 15.44
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 22.01,
          "priceAvg30d": 20.17
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.21,
          "priceAvg30d": 23.2
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.62,
          "priceAvg30d": 27.18
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.91,
          "priceAvg30d": 27.1
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.8,
          "priceAvg30d": 27.58
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.14,
          "priceAvg30d": 27.51
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.19,
          "priceAvg30d": 27.09
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.91,
          "priceAvg30d": 26.49
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.62,
          "priceAvg30d": 24.68
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.62,
          "priceAvg30d": 23.66
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.62,
          "priceAvg30d": 22.82
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.41,
          "priceAvg30d": 21.8
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.39,
          "priceAvg30d": 21.63
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.01,
          "priceAvg30d": 21.76
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.63,
          "priceAvg30d": 20.81
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 23.91,
          "priceAvg30d": 20.33
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.72,
          "priceAvg30d": 19.06
        }
      ],
      "avg": 16.13,
      "max": 27.8,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 24.02,
      "spreadLowAvg": 1.98,
      "spreadHighAvg": 26.0,
      "avg30d": 17.15,
      "spread30dAvg": 17.4,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.72,
          "priceAvg30d": 21.03
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 21.73,
          "priceAvg30d": 20.45
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.0,
          "priceAvg30d": 19.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 20.0,
          "priceAvg30d": 19.76
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.0,
          "priceAvg30d": 19.41
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.0,
          "priceAvg30d": 19.63
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.46,
          "priceAvg30d": 20.26
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.55,
          "priceAvg30d": 20.5
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.98,
          "priceAvg30d": 20.9
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.13,
          "priceAvg30d": 21.21
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.13,
          "priceAvg30d": 21.46
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.13,
          "priceAvg30d": 21.11
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.01,
          "priceAvg30d": 20.4
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.8,
          "priceAvg30d": 20.25
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.73,
          "priceAvg30d": 20.23
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.93,
          "priceAvg30d": 20.36
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 20.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 22.29
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 22.82
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 22.98
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 22.09
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 22.33
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 22.45
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 22.22
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 20.55
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.5,
          "priceAvg30d": 21.19
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 22.22
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.0,
          "priceAvg30d": 23.57
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 6.1,
          "priceAvg30d": 24.45
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 25.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.04,
          "priceAvg30d": 24.24
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 22.01,
          "priceAvg30d": 26.83
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.21,
          "priceAvg30d": 28.63
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.62,
          "priceAvg30d": 30.38
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.91,
          "priceAvg30d": 29.8
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.8,
          "priceAvg30d": 30.06
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.14,
          "priceAvg30d": 30.0
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.19,
          "priceAvg30d": 29.82
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.91,
          "priceAvg30d": 28.68
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.62,
          "priceAvg30d": 26.83
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.62,
          "priceAvg30d": 25.58
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.62,
          "priceAvg30d": 24.96
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.41,
          "priceAvg30d": 24.04
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.39,
          "priceAvg30d": 24.71
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.01,
          "priceAvg30d": 24.95
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.63,
          "priceAvg30d": 24.0
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 23.91,
          "priceAvg30d": 23.69
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.72,
          "priceAvg30d": 21.92
        }
      ],
      "avg": 16.13,
      "max": 27.8,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 24.02,
      "spreadLowAvg": 1.98,
      "spreadHighAvg": 26.0,
      "avg30d": 23.36,
      "spread30dAvg": 11.67,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.72,
          "priceAvg30d": 21.01
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 21.73,
          "priceAvg30d": 20.52
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.0,
          "priceAvg30d": 19.51
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 20.0,
          "priceAvg30d": 19.44
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.0,
          "priceAvg30d": 19.14
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.0,
          "priceAvg30d": 19.34
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.46,
          "priceAvg30d": 19.88
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.55,
          "priceAvg30d": 20.34
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.98,
          "priceAvg30d": 20.74
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.13,
          "priceAvg30d": 21.14
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.13,
          "priceAvg30d": 21.44
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.13,
          "priceAvg30d": 21.24
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.01,
          "priceAvg30d": 20.97
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.8,
          "priceAvg30d": 20.46
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.73,
          "priceAvg30d": 19.81
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.93,
          "priceAvg30d": 19.54
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 20.5
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 21.93
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.5,
          "priceAvg30d": 22.33
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 22.13
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 21.33
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 21.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 21.22
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 20.95
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.1,
          "priceAvg30d": 19.2
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.5,
          "priceAvg30d": 19.79
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 22.0
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.0,
          "priceAvg30d": 23.68
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 6.1,
          "priceAvg30d": 24.55
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 25.51
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.04,
          "priceAvg30d": 25.2
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 22.01,
          "priceAvg30d": 27.04
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.21,
          "priceAvg30d": 27.77
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.53,
          "priceAvg30d": 29.55
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.91,
          "priceAvg30d": 29.65
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.32,
          "priceAvg30d": 29.9
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.3,
          "priceAvg30d": 29.65
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.3,
          "priceAvg30d": 29.08
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.91,
          "priceAvg30d": 28.13
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.62,
          "priceAvg30d": 26.63
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.5,
          "priceAvg30d": 25.67
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.51,
          "priceAvg30d": 25.09
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.3,
          "priceAvg30d": 24.19
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.39,
          "priceAvg30d": 24.71
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.01,
          "priceAvg30d": 24.84
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.63,
          "priceAvg30d": 23.82
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 23.91,
          "priceAvg30d": 23.77
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.72,
          "priceAvg30d": 22.11
        }
      ],
      "avg": 16.07,
      "max": 26.32,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 25.43,
      "spreadLowAvg": 0.26,
      "spreadHighAvg": 25.69,
      "avg30d": 23.08,
      "spread30dAvg": 12.8,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.55,
          "priceAvg30d": 11.22
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.75,
          "priceAvg30d": 11.39
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.75,
          "priceAvg30d": 11.64
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.75,
          "priceAvg30d": 11.41
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.95,
          "priceAvg30d": 11.29
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.95,
          "priceAvg30d": 11.83
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.95,
          "priceAvg30d": 12.38
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.95,
          "priceAvg30d": 12.6
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.95,
          "priceAvg30d": 12.46
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.14,
          "priceAvg30d": 13.44
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.14,
          "priceAvg30d": 14.25
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.95,
          "priceAvg30d": 14.32
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.95,
          "priceAvg30d": 15.22
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.8,
          "priceAvg30d": 12.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.73,
          "priceAvg30d": 12.0
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.93,
          "priceAvg30d": 10.9
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 11.18
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 13.81
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.5,
          "priceAvg30d": 16.45
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 16.81
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 16.35
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 16.08
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 15.98
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 15.86
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.1,
          "priceAvg30d": 13.25
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.5,
          "priceAvg30d": 14.02
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 16.02
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.0,
          "priceAvg30d": 17.81
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 6.1,
          "priceAvg30d": 17.89
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 18.96
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.97,
          "priceAvg30d": 18.66
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.46,
          "priceAvg30d": 19.75
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 9.21,
          "priceAvg30d": 19.55
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.81,
          "priceAvg30d": 20.73
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 10.33,
          "priceAvg30d": 20.76
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 12.61,
          "priceAvg30d": 22.02
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 11.62,
          "priceAvg30d": 21.41
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 11.62,
          "priceAvg30d": 21.37
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.75,
          "priceAvg30d": 20.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 10.81,
          "priceAvg30d": 18.53
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.06,
          "priceAvg30d": 17.77
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.07,
          "priceAvg30d": 17.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 11.62,
          "priceAvg30d": 17.09
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 9.98,
          "priceAvg30d": 15.91
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.9,
          "priceAvg30d": 15.96
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.36,
          "priceAvg30d": 14.43
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.97,
          "priceAvg30d": 14.14
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 11.59
        }
      ],
      "avg": 8.79,
      "max": 13.14,
      "maxBlock": 10,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 12.72,
      "spreadLowAvg": 0.26,
      "spreadHighAvg": 12.98,
      "avg30d": 15.56,
      "spread30dAvg": 10.35,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.46,
          "priceAvg30d": 11.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.41,
          "priceAvg30d": 11.39
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.97,
          "priceAvg30d": 11.64
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.97,
          "priceAvg30d": 11.41
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.71,
          "priceAvg30d": 11.29
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.98,
          "priceAvg30d": 11.83
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.46,
          "priceAvg30d": 12.38
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.81,
          "priceAvg30d": 12.6
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.81,
          "priceAvg30d": 12.46
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.14,
          "priceAvg30d": 13.44
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.61,
          "priceAvg30d": 14.25
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.81,
          "priceAvg30d": 14.31
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.81,
          "priceAvg30d": 15.22
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.63,
          "priceAvg30d": 12.85
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.73,
          "priceAvg30d": 11.97
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.93,
          "priceAvg30d": 10.47
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 10.61
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 12.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.5,
          "priceAvg30d": 15.11
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 15.18
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 14.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 14.7
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 15.11
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 14.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.1,
          "priceAvg30d": 12.3
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.5,
          "priceAvg30d": 12.86
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 14.95
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.0,
          "priceAvg30d": 17.18
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 6.1,
          "priceAvg30d": 16.96
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 17.88
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.97,
          "priceAvg30d": 17.33
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.46,
          "priceAvg30d": 18.56
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 9.21,
          "priceAvg30d": 19.04
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.81,
          "priceAvg30d": 20.37
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 10.33,
          "priceAvg30d": 20.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 12.61,
          "priceAvg30d": 21.89
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 11.62,
          "priceAvg30d": 21.29
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 11.62,
          "priceAvg30d": 21.24
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.75,
          "priceAvg30d": 19.96
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 10.81,
          "priceAvg30d": 18.4
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.06,
          "priceAvg30d": 17.77
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.07,
          "priceAvg30d": 17.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 11.62,
          "priceAvg30d": 17.09
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 9.98,
          "priceAvg30d": 15.91
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.9,
          "priceAvg30d": 15.96
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.36,
          "priceAvg30d": 14.43
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.97,
          "priceAvg30d": 14.14
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 11.59
        }
      ],
      "avg": 8.17,
      "max": 13.14,
      "maxBlock": 10,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 10.79,
      "spreadLowAvg": 0.26,
      "spreadHighAvg": 11.05,
      "avg30d": 15.12,
      "spread30dAvg": 10.11,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.46,
          "priceAvg30d": 11.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.41,
          "priceAvg30d": 11.39
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.97,
          "priceAvg30d": 11.64
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.97,
          "priceAvg30d": 11.41
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.71,
          "priceAvg30d": 11.27
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.98,
          "priceAvg30d": 11.7
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.46,
          "priceAvg30d": 12.12
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.81,
          "priceAvg30d": 12.6
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.81,
          "priceAvg30d": 12.35
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.14,
          "priceAvg30d": 13.37
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.61,
          "priceAvg30d": 14.24
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.81,
          "priceAvg30d": 14.27
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.81,
          "priceAvg30d": 15.14
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.63,
          "priceAvg30d": 12.59
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.73,
          "priceAvg30d": 11.64
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.93,
          "priceAvg30d": 10.1
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 10.0
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 10.44
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.5,
          "priceAvg30d": 10.96
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 10.72
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 11.05
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 10.83
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 10.47
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 10.15
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.1,
          "priceAvg30d": 9.34
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.5,
          "priceAvg30d": 9.51
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 11.02
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.0,
          "priceAvg30d": 12.04
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 6.1,
          "priceAvg30d": 11.39
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 12.08
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.97,
          "priceAvg30d": 13.04
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.46,
          "priceAvg30d": 15.18
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 9.21,
          "priceAvg30d": 16.1
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.81,
          "priceAvg30d": 18.7
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 10.33,
          "priceAvg30d": 20.13
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 12.61,
          "priceAvg30d": 21.48
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 11.62,
          "priceAvg30d": 20.89
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 11.62,
          "priceAvg30d": 20.76
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.75,
          "priceAvg30d": 19.84
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 10.81,
          "priceAvg30d": 18.4
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.06,
          "priceAvg30d": 17.77
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.07,
          "priceAvg30d": 17.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 11.62,
          "priceAvg30d": 17.09
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 9.98,
          "priceAvg30d": 15.91
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.9,
          "priceAvg30d": 15.93
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.36,
          "priceAvg30d": 14.43
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.97,
          "priceAvg30d": 14.14
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 11.59
        }
      ],
      "avg": 8.17,
      "max": 13.14,
      "maxBlock": 10,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 10.79,
      "spreadLowAvg": 0.26,
      "spreadHighAvg": 11.05,
      "avg30d": 13.66,
      "spread30dAvg": 10.56,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.51,
          "priceAvg30d": 10.63
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.41,
          "priceAvg30d": 10.47
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.97,
          "priceAvg30d": 10.62
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.97,
          "priceAvg30d": 10.45
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.71,
          "priceAvg30d": 10.22
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.98,
          "priceAvg30d": 10.69
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.46,
          "priceAvg30d": 10.87
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.81,
          "priceAvg30d": 11.35
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.81,
          "priceAvg30d": 10.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.14,
          "priceAvg30d": 11.85
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.61,
          "priceAvg30d": 12.81
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.81,
          "priceAvg30d": 12.82
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.81,
          "priceAvg30d": 13.23
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.37,
          "priceAvg30d": 10.81
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 2.0,
          "priceAvg30d": 9.86
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 0.01,
          "priceAvg30d": 8.85
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 0.01,
          "priceAvg30d": 8.65
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 9.26
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 8.99
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 8.3
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.57
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.42
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 8.28
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.23
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 7.91
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 7.93
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 9.2
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 10.54
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 10.03
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 10.15
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.01,
          "priceAvg30d": 10.76
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 2.9,
          "priceAvg30d": 12.39
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 9.09,
          "priceAvg30d": 12.56
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 9.09,
          "priceAvg30d": 14.7
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 9.27,
          "priceAvg30d": 15.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 11.97,
          "priceAvg30d": 17.74
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 11.62,
          "priceAvg30d": 18.07
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 11.62,
          "priceAvg30d": 17.73
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.75,
          "priceAvg30d": 16.05
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 10.36,
          "priceAvg30d": 13.46
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 9.55,
          "priceAvg30d": 13.58
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 9.44,
          "priceAvg30d": 12.88
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.36,
          "priceAvg30d": 12.72
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 9.98,
          "priceAvg30d": 11.85
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.9,
          "priceAvg30d": 12.12
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.36,
          "priceAvg30d": 11.4
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.97,
          "priceAvg30d": 11.62
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 10.09
        }
      ],
      "avg": 6.68,
      "max": 13.14,
      "maxBlock": 10,
      "min": 0.01,
      "minBlock": 16,
      "spread3h": 7.35,
      "spreadLowAvg": 3.7,
      "spreadHighAvg": 11.05,
      "avg30d": 11.37,
      "spread30dAvg": 9.64,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.46,
          "priceAvg30d": 10.68
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.41,
          "priceAvg30d": 10.88
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.97,
          "priceAvg30d": 10.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.97,
          "priceAvg30d": 10.46
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.71,
          "priceAvg30d": 10.26
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.98,
          "priceAvg30d": 10.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.46,
          "priceAvg30d": 10.78
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.81,
          "priceAvg30d": 11.38
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.81,
          "priceAvg30d": 11.32
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.14,
          "priceAvg30d": 12.41
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.61,
          "priceAvg30d": 13.41
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.81,
          "priceAvg30d": 13.63
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.81,
          "priceAvg30d": 14.65
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.63,
          "priceAvg30d": 11.72
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.73,
          "priceAvg30d": 10.59
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.93,
          "priceAvg30d": 9.14
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 9.41
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 9.56
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.5,
          "priceAvg30d": 9.73
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 9.21
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 9.12
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.81
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 8.57
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.46
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.1,
          "priceAvg30d": 7.99
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.5,
          "priceAvg30d": 8.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 9.02
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.0,
          "priceAvg30d": 9.64
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 6.1,
          "priceAvg30d": 10.17
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 11.31
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.97,
          "priceAvg30d": 12.89
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.46,
          "priceAvg30d": 14.98
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 9.21,
          "priceAvg30d": 16.1
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.81,
          "priceAvg30d": 18.7
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 10.33,
          "priceAvg30d": 20.13
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 12.61,
          "priceAvg30d": 21.48
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 11.62,
          "priceAvg30d": 20.89
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 11.62,
          "priceAvg30d": 20.76
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.75,
          "priceAvg30d": 19.84
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 10.81,
          "priceAvg30d": 18.4
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.06,
          "priceAvg30d": 17.77
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.07,
          "priceAvg30d": 17.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 11.62,
          "priceAvg30d": 17.09
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 9.98,
          "priceAvg30d": 15.91
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.9,
          "priceAvg30d": 15.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.36,
          "priceAvg30d": 14.31
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.97,
          "priceAvg30d": 14.02
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 11.18
        }
      ],
      "avg": 8.17,
      "max": 13.14,
      "maxBlock": 10,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 10.79,
      "spreadLowAvg": 0.26,
      "spreadHighAvg": 11.05,
      "avg30d": 12.9,
      "spread30dAvg": 11.4,
      "historyDays": 30
    }
  }
};
