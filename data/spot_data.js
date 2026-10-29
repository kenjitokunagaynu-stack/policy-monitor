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
  "targetDate": "2026-10-29",
  "fetchedAt": "2026-10-29T12:29:45+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 28.13,
        "priceAvg30d": 23.26
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 26.88,
        "priceAvg30d": 22.05
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 26.93,
        "priceAvg30d": 21.56
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 26.78,
        "priceAvg30d": 21.36
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 26.93,
        "priceAvg30d": 21.42
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 27.93,
        "priceAvg30d": 21.91
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 28.42,
        "priceAvg30d": 22.5
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 29.21,
        "priceAvg30d": 23.08
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 29.51,
        "priceAvg30d": 23.67
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 29.51,
        "priceAvg30d": 24.25
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 29.51,
        "priceAvg30d": 24.58
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 29.51,
        "priceAvg30d": 24.59
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 30.09,
        "priceAvg30d": 24.33
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 29.89,
        "priceAvg30d": 22.49
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 29.51,
        "priceAvg30d": 19.62
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 26.64,
        "priceAvg30d": 17.39
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 25.5,
        "priceAvg30d": 16.48
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 23.0,
        "priceAvg30d": 16.13
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 14.3,
        "priceAvg30d": 15.02
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 12.02,
        "priceAvg30d": 14.15
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 10.4,
        "priceAvg30d": 13.35
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 10.15,
        "priceAvg30d": 12.79
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 10.15,
        "priceAvg30d": 12.52
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 10.26,
        "priceAvg30d": 12.45
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 9.98,
        "priceAvg30d": 10.0
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 10.7,
        "priceAvg30d": 10.7
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 20.0,
        "priceAvg30d": 13.9
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 24.62,
        "priceAvg30d": 16.58
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 26.05,
        "priceAvg30d": 17.5
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 28.53,
        "priceAvg30d": 21.08
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 29.78,
        "priceAvg30d": 22.84
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 38.3,
        "priceAvg30d": 27.1
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 38.37,
        "priceAvg30d": 30.53
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 38.37,
        "priceAvg30d": 33.03
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 38.3,
        "priceAvg30d": 32.51
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 37.9,
        "priceAvg30d": 32.63
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 35.0,
        "priceAvg30d": 31.11
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 33.35,
        "priceAvg30d": 30.26
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 32.97,
        "priceAvg30d": 29.11
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 31.5,
        "priceAvg30d": 27.21
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 30.71,
        "priceAvg30d": 26.49
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 30.03,
        "priceAvg30d": 25.58
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 29.93,
        "priceAvg30d": 25.05
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 29.51,
        "priceAvg30d": 25.09
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 29.78,
        "priceAvg30d": 25.48
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 29.51,
        "priceAvg30d": 24.79
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 29.36,
        "priceAvg30d": 24.68
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 28.34,
        "priceAvg30d": 23.31
      }
    ],
    "avg": 26.71,
    "max": 38.37,
    "maxBlock": 33,
    "min": 9.98,
    "minBlock": 25,
    "spread3h": 20.88,
    "spreadLowAvg": 14.31,
    "spreadHighAvg": 35.2,
    "avg30d": 22.03,
    "spread30dAvg": 18.68,
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
          "price": 22.88,
          "priceAvg30d": 19.13
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.51,
          "priceAvg30d": 16.05
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.81,
          "priceAvg30d": 16.88
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.18,
          "priceAvg30d": 17.86
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.93,
          "priceAvg30d": 18.35
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.52,
          "priceAvg30d": 20.22
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.17,
          "priceAvg30d": 21.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.07,
          "priceAvg30d": 22.77
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.87,
          "priceAvg30d": 22.96
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.1,
          "priceAvg30d": 22.94
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.5,
          "priceAvg30d": 25.07
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.49,
          "priceAvg30d": 25.9
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.96,
          "priceAvg30d": 22.42
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 26.0,
          "priceAvg30d": 19.46
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.63,
          "priceAvg30d": 15.96
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.73,
          "priceAvg30d": 13.26
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.61,
          "priceAvg30d": 11.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.4,
          "priceAvg30d": 10.18
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.7,
          "priceAvg30d": 9.22
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.7,
          "priceAvg30d": 8.05
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.71,
          "priceAvg30d": 7.48
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.71,
          "priceAvg30d": 6.81
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.5,
          "priceAvg30d": 7.06
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.5,
          "priceAvg30d": 7.31
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.71,
          "priceAvg30d": 6.12
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.17,
          "priceAvg30d": 5.85
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.5,
          "priceAvg30d": 7.49
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 14.76,
          "priceAvg30d": 9.67
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.23,
          "priceAvg30d": 12.64
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.62,
          "priceAvg30d": 15.79
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 33.0,
          "priceAvg30d": 18.65
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.03,
          "priceAvg30d": 24.54
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.52,
          "priceAvg30d": 31.56
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.52,
          "priceAvg30d": 34.55
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 32.12
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.43,
          "priceAvg30d": 32.61
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 30.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.6,
          "priceAvg30d": 31.41
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.62,
          "priceAvg30d": 31.12
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.62,
          "priceAvg30d": 29.91
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.61,
          "priceAvg30d": 28.95
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.29,
          "priceAvg30d": 26.71
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.01,
          "priceAvg30d": 25.73
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.61,
          "priceAvg30d": 25.14
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.97,
          "priceAvg30d": 25.48
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.5,
          "priceAvg30d": 23.78
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.55,
          "priceAvg30d": 23.63
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.56,
          "priceAvg30d": 21.47
        }
      ],
      "avg": 25.29,
      "max": 41.03,
      "maxBlock": 32,
      "min": 9.61,
      "minBlock": 17,
      "spread3h": 19.29,
      "spreadLowAvg": 15.69,
      "spreadHighAvg": 34.98,
      "avg30d": 19.67,
      "spread30dAvg": 23.74,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.96,
          "priceAvg30d": 25.67
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.38,
          "priceAvg30d": 24.99
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.6,
          "priceAvg30d": 25.29
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.96,
          "priceAvg30d": 25.02
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.96,
          "priceAvg30d": 25.07
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.96,
          "priceAvg30d": 25.22
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.51,
          "priceAvg30d": 25.72
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.51,
          "priceAvg30d": 25.75
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.86,
          "priceAvg30d": 26.11
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.1,
          "priceAvg30d": 26.26
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.5,
          "priceAvg30d": 26.6
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.49,
          "priceAvg30d": 26.95
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.69,
          "priceAvg30d": 26.39
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.98,
          "priceAvg30d": 24.26
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.37,
          "priceAvg30d": 20.74
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.01,
          "priceAvg30d": 17.61
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.61,
          "priceAvg30d": 15.96
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.6,
          "priceAvg30d": 14.42
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.6,
          "priceAvg30d": 13.39
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.0,
          "priceAvg30d": 12.32
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.14,
          "priceAvg30d": 11.16
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.14,
          "priceAvg30d": 10.66
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.14,
          "priceAvg30d": 10.44
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.0,
          "priceAvg30d": 10.53
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.02,
          "priceAvg30d": 9.7
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.17,
          "priceAvg30d": 10.15
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.5,
          "priceAvg30d": 12.82
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 14.76,
          "priceAvg30d": 14.79
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.23,
          "priceAvg30d": 17.61
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.62,
          "priceAvg30d": 21.16
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 33.0,
          "priceAvg30d": 24.04
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.03,
          "priceAvg30d": 30.0
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.52,
          "priceAvg30d": 34.21
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.52,
          "priceAvg30d": 36.64
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 36.12
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.43,
          "priceAvg30d": 36.29
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 34.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.6,
          "priceAvg30d": 33.95
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.62,
          "priceAvg30d": 32.47
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.62,
          "priceAvg30d": 30.58
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.61,
          "priceAvg30d": 29.24
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.29,
          "priceAvg30d": 27.95
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.01,
          "priceAvg30d": 27.35
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.61,
          "priceAvg30d": 28.19
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.97,
          "priceAvg30d": 28.91
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.5,
          "priceAvg30d": 27.64
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.55,
          "priceAvg30d": 26.75
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.56,
          "priceAvg30d": 24.9
        }
      ],
      "avg": 26.17,
      "max": 41.03,
      "maxBlock": 32,
      "min": 8.14,
      "minBlock": 21,
      "spread3h": 26.07,
      "spreadLowAvg": 8.91,
      "spreadHighAvg": 34.98,
      "avg30d": 23.59,
      "spread30dAvg": 22.18,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.51,
          "priceAvg30d": 26.28
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.51,
          "priceAvg30d": 25.68
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.51,
          "priceAvg30d": 25.94
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.51,
          "priceAvg30d": 25.67
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.51,
          "priceAvg30d": 25.71
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.51,
          "priceAvg30d": 25.71
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.51,
          "priceAvg30d": 25.97
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.51,
          "priceAvg30d": 26.0
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.86,
          "priceAvg30d": 26.23
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.1,
          "priceAvg30d": 26.33
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.5,
          "priceAvg30d": 26.6
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.49,
          "priceAvg30d": 26.95
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.69,
          "priceAvg30d": 26.6
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.98,
          "priceAvg30d": 25.41
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.73,
          "priceAvg30d": 24.82
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 29.51,
          "priceAvg30d": 24.19
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.51,
          "priceAvg30d": 22.94
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 29.51,
          "priceAvg30d": 22.98
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.02,
          "priceAvg30d": 22.17
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 28.85,
          "priceAvg30d": 21.38
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 28.17,
          "priceAvg30d": 19.92
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 28.13,
          "priceAvg30d": 19.51
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 28.18,
          "priceAvg30d": 19.77
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 28.36,
          "priceAvg30d": 19.98
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 28.57,
          "priceAvg30d": 18.7
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 28.85,
          "priceAvg30d": 19.7
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 29.52,
          "priceAvg30d": 21.43
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 29.45,
          "priceAvg30d": 24.48
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.52,
          "priceAvg30d": 26.02
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.62,
          "priceAvg30d": 28.15
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 33.0,
          "priceAvg30d": 28.08
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.03,
          "priceAvg30d": 31.85
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.52,
          "priceAvg30d": 34.86
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.52,
          "priceAvg30d": 36.87
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 36.13
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.43,
          "priceAvg30d": 36.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 34.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.6,
          "priceAvg30d": 33.95
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.62,
          "priceAvg30d": 32.47
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.62,
          "priceAvg30d": 30.6
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.61,
          "priceAvg30d": 29.24
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.29,
          "priceAvg30d": 27.95
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.01,
          "priceAvg30d": 27.35
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.61,
          "priceAvg30d": 28.19
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.97,
          "priceAvg30d": 29.13
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.5,
          "priceAvg30d": 28.04
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.55,
          "priceAvg30d": 27.45
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.56,
          "priceAvg30d": 26.01
        }
      ],
      "avg": 31.69,
      "max": 41.03,
      "maxBlock": 32,
      "min": 28.13,
      "minBlock": 22,
      "spread3h": 7.17,
      "spreadLowAvg": 28.53,
      "spreadHighAvg": 35.7,
      "avg30d": 26.67,
      "spread30dAvg": 14.85,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.51,
          "priceAvg30d": 25.44
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.51,
          "priceAvg30d": 24.72
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.51,
          "priceAvg30d": 24.58
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.51,
          "priceAvg30d": 24.44
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.51,
          "priceAvg30d": 24.53
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.51,
          "priceAvg30d": 24.94
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.51,
          "priceAvg30d": 25.27
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.51,
          "priceAvg30d": 25.51
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.86,
          "priceAvg30d": 25.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.1,
          "priceAvg30d": 25.92
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.5,
          "priceAvg30d": 26.14
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.49,
          "priceAvg30d": 26.36
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.02,
          "priceAvg30d": 25.98
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.86,
          "priceAvg30d": 24.67
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.73,
          "priceAvg30d": 23.23
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.48,
          "priceAvg30d": 21.56
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.0,
          "priceAvg30d": 20.25
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.88,
          "priceAvg30d": 20.83
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.08,
          "priceAvg30d": 20.61
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.5,
          "priceAvg30d": 19.72
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 15.5,
          "priceAvg30d": 18.05
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.29,
          "priceAvg30d": 17.78
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.99,
          "priceAvg30d": 17.63
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.49,
          "priceAvg30d": 17.44
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.45,
          "priceAvg30d": 14.62
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.89,
          "priceAvg30d": 15.44
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.93,
          "priceAvg30d": 18.99
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.98,
          "priceAvg30d": 22.55
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 27.31,
          "priceAvg30d": 23.97
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.62,
          "priceAvg30d": 25.73
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.28,
          "priceAvg30d": 27.11
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.03,
          "priceAvg30d": 31.17
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.52,
          "priceAvg30d": 33.95
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.52,
          "priceAvg30d": 35.3
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 34.78
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.43,
          "priceAvg30d": 34.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 33.52
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.6,
          "priceAvg30d": 32.76
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.62,
          "priceAvg30d": 31.78
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.62,
          "priceAvg30d": 29.88
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.61,
          "priceAvg30d": 28.55
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.29,
          "priceAvg30d": 27.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.01,
          "priceAvg30d": 26.96
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.61,
          "priceAvg30d": 27.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.5,
          "priceAvg30d": 27.98
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.5,
          "priceAvg30d": 27.33
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.55,
          "priceAvg30d": 27.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.56,
          "priceAvg30d": 26.0
        }
      ],
      "avg": 29.03,
      "max": 41.03,
      "maxBlock": 32,
      "min": 11.45,
      "minBlock": 25,
      "spread3h": 18.95,
      "spreadLowAvg": 16.09,
      "spreadHighAvg": 35.04,
      "avg30d": 25.34,
      "spread30dAvg": 17.51,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.94,
          "priceAvg30d": 14.49
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.49,
          "priceAvg30d": 14.29
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.1,
          "priceAvg30d": 13.87
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.0,
          "priceAvg30d": 13.33
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.1,
          "priceAvg30d": 14.23
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 21.94,
          "priceAvg30d": 15.35
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.52,
          "priceAvg30d": 16.25
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.51,
          "priceAvg30d": 17.57
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.51,
          "priceAvg30d": 17.73
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.26,
          "priceAvg30d": 19.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.5,
          "priceAvg30d": 18.74
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.5,
          "priceAvg30d": 18.41
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.52,
          "priceAvg30d": 18.34
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.51,
          "priceAvg30d": 16.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.73,
          "priceAvg30d": 15.18
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.52,
          "priceAvg30d": 13.93
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.94,
          "priceAvg30d": 15.94
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.49,
          "priceAvg30d": 17.26
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.08,
          "priceAvg30d": 18.49
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.5,
          "priceAvg30d": 17.86
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 15.5,
          "priceAvg30d": 16.58
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.29,
          "priceAvg30d": 16.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.99,
          "priceAvg30d": 16.39
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.49,
          "priceAvg30d": 16.51
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.45,
          "priceAvg30d": 12.43
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.89,
          "priceAvg30d": 12.72
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.1,
          "priceAvg30d": 16.25
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.52,
          "priceAvg30d": 19.78
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 27.31,
          "priceAvg30d": 19.87
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.62,
          "priceAvg30d": 21.55
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.28,
          "priceAvg30d": 22.53
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.37,
          "priceAvg30d": 25.85
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.52,
          "priceAvg30d": 26.74
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 28.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 27.11
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.43,
          "priceAvg30d": 27.43
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 26.15
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.6,
          "priceAvg30d": 26.38
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.62,
          "priceAvg30d": 25.53
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.62,
          "priceAvg30d": 23.59
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.61,
          "priceAvg30d": 23.65
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.29,
          "priceAvg30d": 22.45
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.01,
          "priceAvg30d": 22.12
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.61,
          "priceAvg30d": 21.24
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.5,
          "priceAvg30d": 20.45
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.0,
          "priceAvg30d": 18.58
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.0,
          "priceAvg30d": 18.63
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.94,
          "priceAvg30d": 14.91
        }
      ],
      "avg": 26.07,
      "max": 40.52,
      "maxBlock": 33,
      "min": 11.45,
      "minBlock": 25,
      "spread3h": 21.07,
      "spreadLowAvg": 15.71,
      "spreadHighAvg": 36.78,
      "avg30d": 19.12,
      "spread30dAvg": 14.75,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.94,
          "priceAvg30d": 14.24
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.49,
          "priceAvg30d": 14.18
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.1,
          "priceAvg30d": 13.78
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.0,
          "priceAvg30d": 13.24
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.1,
          "priceAvg30d": 13.66
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 21.94,
          "priceAvg30d": 14.99
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.52,
          "priceAvg30d": 15.91
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.51,
          "priceAvg30d": 17.13
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.51,
          "priceAvg30d": 17.27
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.26,
          "priceAvg30d": 18.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.5,
          "priceAvg30d": 18.18
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.5,
          "priceAvg30d": 17.95
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.52,
          "priceAvg30d": 18.27
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.51,
          "priceAvg30d": 16.76
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.73,
          "priceAvg30d": 14.73
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.52,
          "priceAvg30d": 13.33
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.94,
          "priceAvg30d": 15.76
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.49,
          "priceAvg30d": 17.04
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.08,
          "priceAvg30d": 18.17
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.5,
          "priceAvg30d": 17.52
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 15.5,
          "priceAvg30d": 16.23
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.29,
          "priceAvg30d": 15.87
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.99,
          "priceAvg30d": 16.07
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.49,
          "priceAvg30d": 16.19
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.45,
          "priceAvg30d": 12.09
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.89,
          "priceAvg30d": 12.4
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.1,
          "priceAvg30d": 16.0
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.52,
          "priceAvg30d": 19.78
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 27.31,
          "priceAvg30d": 19.46
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.62,
          "priceAvg30d": 21.39
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.28,
          "priceAvg30d": 22.35
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.37,
          "priceAvg30d": 25.81
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.52,
          "priceAvg30d": 26.74
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 28.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 27.11
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.43,
          "priceAvg30d": 27.08
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 26.15
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.6,
          "priceAvg30d": 25.94
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.62,
          "priceAvg30d": 25.19
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.62,
          "priceAvg30d": 23.41
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.61,
          "priceAvg30d": 23.47
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.29,
          "priceAvg30d": 22.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.01,
          "priceAvg30d": 21.97
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.61,
          "priceAvg30d": 20.99
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.5,
          "priceAvg30d": 20.22
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.0,
          "priceAvg30d": 18.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.0,
          "priceAvg30d": 18.46
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.94,
          "priceAvg30d": 14.78
        }
      ],
      "avg": 26.07,
      "max": 40.52,
      "maxBlock": 33,
      "min": 11.45,
      "minBlock": 25,
      "spread3h": 21.07,
      "spreadLowAvg": 15.71,
      "spreadHighAvg": 36.78,
      "avg30d": 18.86,
      "spread30dAvg": 14.64,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.94,
          "priceAvg30d": 13.66
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.49,
          "priceAvg30d": 14.18
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.1,
          "priceAvg30d": 13.37
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.1,
          "priceAvg30d": 12.81
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.1,
          "priceAvg30d": 12.75
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 21.94,
          "priceAvg30d": 13.78
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.52,
          "priceAvg30d": 14.65
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.51,
          "priceAvg30d": 16.29
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.51,
          "priceAvg30d": 17.08
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.26,
          "priceAvg30d": 18.36
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.5,
          "priceAvg30d": 18.18
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.5,
          "priceAvg30d": 17.91
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.52,
          "priceAvg30d": 18.27
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.51,
          "priceAvg30d": 16.59
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.73,
          "priceAvg30d": 12.17
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.43,
          "priceAvg30d": 10.32
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.98,
          "priceAvg30d": 10.55
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.98,
          "priceAvg30d": 10.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.81,
          "priceAvg30d": 9.7
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.0,
          "priceAvg30d": 8.95
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.81,
          "priceAvg30d": 8.3
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.24,
          "priceAvg30d": 7.57
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.92,
          "priceAvg30d": 7.55
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.81,
          "priceAvg30d": 7.75
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.24,
          "priceAvg30d": 5.81
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.81,
          "priceAvg30d": 5.74
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.98,
          "priceAvg30d": 7.89
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.98,
          "priceAvg30d": 9.17
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.98,
          "priceAvg30d": 11.0
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.15,
          "priceAvg30d": 12.32
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.43,
          "priceAvg30d": 13.13
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.89,
          "priceAvg30d": 16.18
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.03,
          "priceAvg30d": 19.72
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 29.03,
          "priceAvg30d": 24.12
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.04,
          "priceAvg30d": 24.48
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.03,
          "priceAvg30d": 25.19
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.5,
          "priceAvg30d": 23.99
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.52,
          "priceAvg30d": 23.55
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 23.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.37,
          "priceAvg30d": 22.14
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.9,
          "priceAvg30d": 22.12
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.0,
          "priceAvg30d": 21.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.5,
          "priceAvg30d": 20.82
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.67,
          "priceAvg30d": 19.78
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.5,
          "priceAvg30d": 19.36
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.0,
          "priceAvg30d": 17.42
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.49,
          "priceAvg30d": 17.55
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.94,
          "priceAvg30d": 13.82
        }
      ],
      "avg": 19.58,
      "max": 29.73,
      "maxBlock": 15,
      "min": 8.24,
      "minBlock": 22,
      "spread3h": 7.89,
      "spreadLowAvg": 9.27,
      "spreadHighAvg": 17.15,
      "avg30d": 15.23,
      "spread30dAvg": 15.68,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.8,
          "priceAvg30d": 11.07
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.07,
          "priceAvg30d": 10.9
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.37,
          "priceAvg30d": 10.41
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.37,
          "priceAvg30d": 10.05
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.07,
          "priceAvg30d": 10.02
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.07,
          "priceAvg30d": 10.15
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.07,
          "priceAvg30d": 9.99
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.51,
          "priceAvg30d": 11.27
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.51,
          "priceAvg30d": 11.83
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.26,
          "priceAvg30d": 13.19
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.5,
          "priceAvg30d": 13.47
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.5,
          "priceAvg30d": 13.4
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.52,
          "priceAvg30d": 13.12
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.51,
          "priceAvg30d": 11.21
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.07,
          "priceAvg30d": 8.63
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.2,
          "priceAvg30d": 8.14
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.98,
          "priceAvg30d": 8.7
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.98,
          "priceAvg30d": 8.81
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.81,
          "priceAvg30d": 7.78
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.0,
          "priceAvg30d": 6.87
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.38,
          "priceAvg30d": 5.99
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.24,
          "priceAvg30d": 5.09
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 7.0,
          "priceAvg30d": 4.95
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 7.0,
          "priceAvg30d": 5.19
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.17,
          "priceAvg30d": 4.36
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.38,
          "priceAvg30d": 4.53
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.45,
          "priceAvg30d": 6.56
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.37,
          "priceAvg30d": 7.15
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.38,
          "priceAvg30d": 8.83
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.49,
          "priceAvg30d": 9.77
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.55,
          "priceAvg30d": 9.95
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.89,
          "priceAvg30d": 10.87
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.03,
          "priceAvg30d": 11.56
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 29.03,
          "priceAvg30d": 15.36
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.04,
          "priceAvg30d": 16.89
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.03,
          "priceAvg30d": 17.51
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.5,
          "priceAvg30d": 17.12
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.52,
          "priceAvg30d": 16.65
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 15.53
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.37,
          "priceAvg30d": 14.64
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.9,
          "priceAvg30d": 14.97
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.0,
          "priceAvg30d": 14.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.5,
          "priceAvg30d": 14.5
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.67,
          "priceAvg30d": 13.37
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.07,
          "priceAvg30d": 12.86
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.37,
          "priceAvg30d": 11.98
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.07,
          "priceAvg30d": 12.51
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.87,
          "priceAvg30d": 10.3
        }
      ],
      "avg": 16.75,
      "max": 29.51,
      "maxBlock": 8,
      "min": 6.17,
      "minBlock": 25,
      "spread3h": 10.17,
      "spreadLowAvg": 8.07,
      "spreadHighAvg": 18.25,
      "avg30d": 10.88,
      "spread30dAvg": 12.63,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.94,
          "priceAvg30d": 13.66
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.49,
          "priceAvg30d": 13.97
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.1,
          "priceAvg30d": 13.03
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.1,
          "priceAvg30d": 12.59
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.1,
          "priceAvg30d": 12.48
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 21.94,
          "priceAvg30d": 13.57
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.52,
          "priceAvg30d": 14.65
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.51,
          "priceAvg30d": 16.29
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.51,
          "priceAvg30d": 17.08
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.26,
          "priceAvg30d": 18.36
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.5,
          "priceAvg30d": 18.18
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.5,
          "priceAvg30d": 17.91
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.52,
          "priceAvg30d": 18.27
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.51,
          "priceAvg30d": 16.59
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.73,
          "priceAvg30d": 12.17
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.43,
          "priceAvg30d": 10.32
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.98,
          "priceAvg30d": 9.99
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.98,
          "priceAvg30d": 9.28
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.81,
          "priceAvg30d": 8.13
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.0,
          "priceAvg30d": 7.06
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.81,
          "priceAvg30d": 6.47
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.24,
          "priceAvg30d": 6.02
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.92,
          "priceAvg30d": 5.74
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.81,
          "priceAvg30d": 5.5
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.24,
          "priceAvg30d": 4.85
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.81,
          "priceAvg30d": 4.89
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.98,
          "priceAvg30d": 5.99
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.98,
          "priceAvg30d": 7.56
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.98,
          "priceAvg30d": 9.07
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.15,
          "priceAvg30d": 11.15
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.43,
          "priceAvg30d": 12.69
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.89,
          "priceAvg30d": 15.6
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.03,
          "priceAvg30d": 19.72
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 29.03,
          "priceAvg30d": 24.12
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.04,
          "priceAvg30d": 24.48
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.03,
          "priceAvg30d": 25.19
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.5,
          "priceAvg30d": 23.99
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.52,
          "priceAvg30d": 23.55
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 23.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.37,
          "priceAvg30d": 22.14
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.9,
          "priceAvg30d": 22.12
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.0,
          "priceAvg30d": 21.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.5,
          "priceAvg30d": 20.82
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.67,
          "priceAvg30d": 19.78
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.5,
          "priceAvg30d": 19.36
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.0,
          "priceAvg30d": 17.42
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.49,
          "priceAvg30d": 17.55
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.94,
          "priceAvg30d": 13.82
        }
      ],
      "avg": 19.58,
      "max": 29.73,
      "maxBlock": 15,
      "min": 8.24,
      "minBlock": 22,
      "spread3h": 7.89,
      "spreadLowAvg": 9.27,
      "spreadHighAvg": 17.15,
      "avg30d": 14.74,
      "spread30dAvg": 16.39,
      "historyDays": 30
    }
  }
};
