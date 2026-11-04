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
  "targetDate": "2026-11-04",
  "fetchedAt": "2026-11-04T12:55:15+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 27.35,
        "priceAvg30d": 24.29
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 26.84,
        "priceAvg30d": 23.32
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 26.25,
        "priceAvg30d": 22.89
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 23.24,
        "priceAvg30d": 22.76
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 21.95,
        "priceAvg30d": 22.97
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 24.02,
        "priceAvg30d": 23.6
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 26.64,
        "priceAvg30d": 24.25
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 27.57,
        "priceAvg30d": 24.95
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 27.57,
        "priceAvg30d": 25.27
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 27.57,
        "priceAvg30d": 25.67
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 27.94,
        "priceAvg30d": 25.9
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 28.26,
        "priceAvg30d": 26.01
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 29.4,
        "priceAvg30d": 25.89
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 29.36,
        "priceAvg30d": 25.03
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 28.26,
        "priceAvg30d": 22.5
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 27.57,
        "priceAvg30d": 19.8
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 26.46,
        "priceAvg30d": 18.72
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 24.71,
        "priceAvg30d": 18.05
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 21.95,
        "priceAvg30d": 16.27
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 18.01,
        "priceAvg30d": 15.38
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 12.34,
        "priceAvg30d": 14.53
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 11.32,
        "priceAvg30d": 14.06
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 11.32,
        "priceAvg30d": 13.68
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 11.62,
        "priceAvg30d": 13.59
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 10.19,
        "priceAvg30d": 11.51
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 11.13,
        "priceAvg30d": 12.09
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 21.95,
        "priceAvg30d": 15.59
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 24.71,
        "priceAvg30d": 18.31
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 28.47,
        "priceAvg30d": 19.43
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 29.77,
        "priceAvg30d": 23.04
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 31.8,
        "priceAvg30d": 25.04
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 32.97,
        "priceAvg30d": 28.83
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 36.33,
        "priceAvg30d": 32.53
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 37.18,
        "priceAvg30d": 34.61
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 36.58,
        "priceAvg30d": 33.81
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 36.61,
        "priceAvg30d": 33.76
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 35.73,
        "priceAvg30d": 32.14
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 36.0,
        "priceAvg30d": 31.4
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 33.8,
        "priceAvg30d": 30.35
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 33.62,
        "priceAvg30d": 28.45
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 32.41,
        "priceAvg30d": 27.76
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 31.97,
        "priceAvg30d": 26.95
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 30.46,
        "priceAvg30d": 26.47
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 29.66,
        "priceAvg30d": 26.34
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 29.13,
        "priceAvg30d": 26.65
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 28.28,
        "priceAvg30d": 25.89
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 27.8,
        "priceAvg30d": 25.65
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 22.51,
        "priceAvg30d": 24.23
      }
    ],
    "avg": 26.6,
    "max": 37.18,
    "maxBlock": 34,
    "min": 10.19,
    "minBlock": 25,
    "spread3h": 19.66,
    "spreadLowAvg": 15.34,
    "spreadHighAvg": 35.0,
    "avg30d": 23.55,
    "spread30dAvg": 19.09,
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
          "price": 29.39,
          "priceAvg30d": 21.12
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.13,
          "priceAvg30d": 18.16
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.59,
          "priceAvg30d": 19.02
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.14,
          "priceAvg30d": 19.75
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.79,
          "priceAvg30d": 20.54
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.31,
          "priceAvg30d": 22.25
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.89,
          "priceAvg30d": 23.54
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.73,
          "priceAvg30d": 24.52
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.82,
          "priceAvg30d": 25.04
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.9,
          "priceAvg30d": 24.97
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.76,
          "priceAvg30d": 27.01
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.17,
          "priceAvg30d": 27.83
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.94,
          "priceAvg30d": 24.4
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.29,
          "priceAvg30d": 21.96
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.15,
          "priceAvg30d": 18.57
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.22,
          "priceAvg30d": 15.67
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.93,
          "priceAvg30d": 14.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.93,
          "priceAvg30d": 12.25
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.93,
          "priceAvg30d": 11.57
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.93,
          "priceAvg30d": 10.51
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.93,
          "priceAvg30d": 9.8
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.93,
          "priceAvg30d": 8.74
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.93,
          "priceAvg30d": 9.25
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.93,
          "priceAvg30d": 9.46
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.93,
          "priceAvg30d": 7.66
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.93,
          "priceAvg30d": 7.39
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.5,
          "priceAvg30d": 9.42
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.4,
          "priceAvg30d": 11.91
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 13.59,
          "priceAvg30d": 15.3
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.85,
          "priceAvg30d": 18.76
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 24.9,
          "priceAvg30d": 21.24
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.05,
          "priceAvg30d": 26.34
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.61,
          "priceAvg30d": 33.75
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.6,
          "priceAvg30d": 36.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.32,
          "priceAvg30d": 34.21
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.3,
          "priceAvg30d": 34.15
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.73,
          "priceAvg30d": 32.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.01,
          "priceAvg30d": 32.63
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.32,
          "priceAvg30d": 33.3
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.32,
          "priceAvg30d": 32.16
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.5,
          "priceAvg30d": 31.26
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 37.5,
          "priceAvg30d": 29.11
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.0,
          "priceAvg30d": 27.85
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.94,
          "priceAvg30d": 27.24
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.46,
          "priceAvg30d": 27.11
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.7,
          "priceAvg30d": 26.05
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.54,
          "priceAvg30d": 25.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.13,
          "priceAvg30d": 23.41
        }
      ],
      "avg": 24.91,
      "max": 39.5,
      "maxBlock": 41,
      "min": 9.93,
      "minBlock": 17,
      "spread3h": 19.77,
      "spreadLowAvg": 15.91,
      "spreadHighAvg": 35.68,
      "avg30d": 21.77,
      "spread30dAvg": 24.29,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.39,
          "priceAvg30d": 25.76
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.13,
          "priceAvg30d": 25.1
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.59,
          "priceAvg30d": 25.05
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.14,
          "priceAvg30d": 24.86
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.79,
          "priceAvg30d": 25.31
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.35,
          "priceAvg30d": 25.64
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.13,
          "priceAvg30d": 26.32
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.13,
          "priceAvg30d": 26.35
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.13,
          "priceAvg30d": 26.68
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.13,
          "priceAvg30d": 26.79
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.43,
          "priceAvg30d": 27.17
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.17,
          "priceAvg30d": 27.59
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.94,
          "priceAvg30d": 27.29
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.29,
          "priceAvg30d": 25.82
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 19.82,
          "priceAvg30d": 22.55
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.22,
          "priceAvg30d": 19.91
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.5,
          "priceAvg30d": 18.6
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.18,
          "priceAvg30d": 16.83
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.03,
          "priceAvg30d": 15.97
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.32,
          "priceAvg30d": 15.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.29,
          "priceAvg30d": 13.66
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.12,
          "priceAvg30d": 13.27
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.14,
          "priceAvg30d": 12.77
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.13,
          "priceAvg30d": 12.83
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.03,
          "priceAvg30d": 11.81
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.12,
          "priceAvg30d": 11.98
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.18,
          "priceAvg30d": 15.21
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.91,
          "priceAvg30d": 17.65
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 13.59,
          "priceAvg30d": 20.91
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.7,
          "priceAvg30d": 23.78
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 35.0,
          "priceAvg30d": 26.12
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.05,
          "priceAvg30d": 31.08
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.61,
          "priceAvg30d": 35.11
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.6,
          "priceAvg30d": 37.6
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.32,
          "priceAvg30d": 36.79
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.3,
          "priceAvg30d": 36.73
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.73,
          "priceAvg30d": 34.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.01,
          "priceAvg30d": 34.38
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.32,
          "priceAvg30d": 33.29
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.32,
          "priceAvg30d": 31.63
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.5,
          "priceAvg30d": 30.14
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 37.5,
          "priceAvg30d": 28.98
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.0,
          "priceAvg30d": 28.59
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.94,
          "priceAvg30d": 29.3
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.46,
          "priceAvg30d": 29.62
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.7,
          "priceAvg30d": 28.05
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.54,
          "priceAvg30d": 27.45
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.13,
          "priceAvg30d": 25.37
        }
      ],
      "avg": 25.08,
      "max": 39.5,
      "maxBlock": 41,
      "min": 8.03,
      "minBlock": 25,
      "spread3h": 27.08,
      "spreadLowAvg": 8.6,
      "spreadHighAvg": 35.68,
      "avg30d": 24.86,
      "spread30dAvg": 21.59,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.39,
          "priceAvg30d": 27.36
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.13,
          "priceAvg30d": 26.82
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.13,
          "priceAvg30d": 27.16
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.13,
          "priceAvg30d": 26.9
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.77,
          "priceAvg30d": 26.98
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.87,
          "priceAvg30d": 26.98
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.13,
          "priceAvg30d": 27.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.13,
          "priceAvg30d": 27.2
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.13,
          "priceAvg30d": 27.41
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.13,
          "priceAvg30d": 27.48
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.43,
          "priceAvg30d": 27.77
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.17,
          "priceAvg30d": 28.21
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.94,
          "priceAvg30d": 28.15
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.29,
          "priceAvg30d": 27.34
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.71,
          "priceAvg30d": 26.82
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.48,
          "priceAvg30d": 26.4
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.19,
          "priceAvg30d": 25.45
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.38,
          "priceAvg30d": 25.23
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.17,
          "priceAvg30d": 24.32
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.64,
          "priceAvg30d": 23.46
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.13,
          "priceAvg30d": 21.98
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 29.06,
          "priceAvg30d": 21.62
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 29.13,
          "priceAvg30d": 21.7
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 29.13,
          "priceAvg30d": 22.2
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 28.63,
          "priceAvg30d": 21.53
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.13,
          "priceAvg30d": 22.57
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 30.3,
          "priceAvg30d": 24.23
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.17,
          "priceAvg30d": 26.69
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 32.25,
          "priceAvg30d": 28.48
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 33.15,
          "priceAvg30d": 30.44
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 35.0,
          "priceAvg30d": 30.54
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.05,
          "priceAvg30d": 33.68
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.61,
          "priceAvg30d": 36.45
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.6,
          "priceAvg30d": 38.36
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.32,
          "priceAvg30d": 37.47
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.3,
          "priceAvg30d": 37.5
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.73,
          "priceAvg30d": 35.44
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.01,
          "priceAvg30d": 35.18
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.32,
          "priceAvg30d": 33.86
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.32,
          "priceAvg30d": 32.29
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.5,
          "priceAvg30d": 30.71
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 37.5,
          "priceAvg30d": 29.41
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.0,
          "priceAvg30d": 28.99
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.94,
          "priceAvg30d": 29.81
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.46,
          "priceAvg30d": 30.94
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.7,
          "priceAvg30d": 29.47
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.54,
          "priceAvg30d": 28.48
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.13,
          "priceAvg30d": 27.03
        }
      ],
      "avg": 31.82,
      "max": 39.5,
      "maxBlock": 41,
      "min": 28.63,
      "minBlock": 25,
      "spread3h": 6.2,
      "spreadLowAvg": 29.49,
      "spreadHighAvg": 35.68,
      "avg30d": 28.37,
      "spread30dAvg": 14.3,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.79,
          "priceAvg30d": 26.4
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.42,
          "priceAvg30d": 25.65
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.12,
          "priceAvg30d": 25.39
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.1,
          "priceAvg30d": 25.33
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.8,
          "priceAvg30d": 25.8
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.11,
          "priceAvg30d": 26.19
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.18,
          "priceAvg30d": 26.54
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.5,
          "priceAvg30d": 26.73
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.51,
          "priceAvg30d": 26.9
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.75,
          "priceAvg30d": 27.09
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.8,
          "priceAvg30d": 27.35
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.8,
          "priceAvg30d": 27.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.1,
          "priceAvg30d": 27.47
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 32.09,
          "priceAvg30d": 26.61
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.11,
          "priceAvg30d": 24.75
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 31.78,
          "priceAvg30d": 22.66
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.71,
          "priceAvg30d": 21.8
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.31,
          "priceAvg30d": 22.27
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.66,
          "priceAvg30d": 21.78
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.64,
          "priceAvg30d": 20.97
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.13,
          "priceAvg30d": 19.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 29.06,
          "priceAvg30d": 18.8
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 29.13,
          "priceAvg30d": 18.44
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 29.13,
          "priceAvg30d": 18.4
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 28.63,
          "priceAvg30d": 15.94
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.13,
          "priceAvg30d": 16.65
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 35.0,
          "priceAvg30d": 19.86
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 36.3,
          "priceAvg30d": 23.23
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 36.57,
          "priceAvg30d": 25.04
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.0,
          "priceAvg30d": 26.89
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.01,
          "priceAvg30d": 28.39
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.03,
          "priceAvg30d": 32.49
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.61,
          "priceAvg30d": 34.94
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.6,
          "priceAvg30d": 36.1
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.32,
          "priceAvg30d": 35.93
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.3,
          "priceAvg30d": 35.98
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.03,
          "priceAvg30d": 34.5
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.01,
          "priceAvg30d": 33.76
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.32,
          "priceAvg30d": 33.12
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.32,
          "priceAvg30d": 31.37
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 34.01,
          "priceAvg30d": 29.59
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 34.01,
          "priceAvg30d": 28.6
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.0,
          "priceAvg30d": 28.1
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.94,
          "priceAvg30d": 28.04
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.46,
          "priceAvg30d": 28.98
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.88,
          "priceAvg30d": 28.31
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.79,
          "priceAvg30d": 28.13
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 31.42,
          "priceAvg30d": 27.05
        }
      ],
      "avg": 32.88,
      "max": 37.61,
      "maxBlock": 33,
      "min": 28.63,
      "minBlock": 25,
      "spread3h": 5.92,
      "spreadLowAvg": 31.29,
      "spreadHighAvg": 37.21,
      "avg30d": 26.48,
      "spread30dAvg": 18.02,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.61,
          "priceAvg30d": 15.39
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.13,
          "priceAvg30d": 15.14
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.61,
          "priceAvg30d": 14.54
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.64,
          "priceAvg30d": 13.75
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.95,
          "priceAvg30d": 14.93
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 16.2
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 17.43
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.0,
          "priceAvg30d": 19.03
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 18.86
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.62,
          "priceAvg30d": 20.37
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.0,
          "priceAvg30d": 19.83
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.0,
          "priceAvg30d": 19.18
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.07,
          "priceAvg30d": 18.78
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.97,
          "priceAvg30d": 17.84
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.62,
          "priceAvg30d": 17.61
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.62,
          "priceAvg30d": 15.76
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.5,
          "priceAvg30d": 17.97
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 17.0,
          "priceAvg30d": 19.17
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.43,
          "priceAvg30d": 19.19
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.0,
          "priceAvg30d": 19.33
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 18.4,
          "priceAvg30d": 17.87
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 20.0,
          "priceAvg30d": 17.47
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.87,
          "priceAvg30d": 17.8
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.02,
          "priceAvg30d": 17.94
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.55,
          "priceAvg30d": 14.47
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.24,
          "priceAvg30d": 14.76
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.76,
          "priceAvg30d": 18.55
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 21.95,
          "priceAvg30d": 21.46
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 21.95,
          "priceAvg30d": 22.55
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.13,
          "priceAvg30d": 23.86
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.13,
          "priceAvg30d": 24.86
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.54,
          "priceAvg30d": 28.03
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.0,
          "priceAvg30d": 28.49
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.6,
          "priceAvg30d": 30.01
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 28.28
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.99,
          "priceAvg30d": 28.56
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.18,
          "priceAvg30d": 27.58
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.0,
          "priceAvg30d": 27.59
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.18,
          "priceAvg30d": 26.99
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.62,
          "priceAvg30d": 25.0
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.15,
          "priceAvg30d": 25.23
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.99,
          "priceAvg30d": 23.74
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.0,
          "priceAvg30d": 22.97
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.15,
          "priceAvg30d": 22.51
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.13,
          "priceAvg30d": 21.79
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.76,
          "priceAvg30d": 19.52
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.76,
          "priceAvg30d": 19.3
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.62,
          "priceAvg30d": 15.1
        }
      ],
      "avg": 18.86,
      "max": 37.6,
      "maxBlock": 34,
      "min": 8.55,
      "minBlock": 25,
      "spread3h": 8.33,
      "spreadLowAvg": 18.64,
      "spreadHighAvg": 26.97,
      "avg30d": 20.47,
      "spread30dAvg": 15.22,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.61,
          "priceAvg30d": 15.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.13,
          "priceAvg30d": 15.14
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.61,
          "priceAvg30d": 14.54
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.64,
          "priceAvg30d": 13.75
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.95,
          "priceAvg30d": 14.5
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 15.94
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 17.17
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.0,
          "priceAvg30d": 18.67
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 18.47
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.62,
          "priceAvg30d": 19.72
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.78,
          "priceAvg30d": 19.28
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.07,
          "priceAvg30d": 18.79
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.07,
          "priceAvg30d": 18.78
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.97,
          "priceAvg30d": 17.84
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.62,
          "priceAvg30d": 17.19
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.62,
          "priceAvg30d": 15.43
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.5,
          "priceAvg30d": 17.87
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 17.0,
          "priceAvg30d": 19.17
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.43,
          "priceAvg30d": 19.19
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.0,
          "priceAvg30d": 19.33
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 18.4,
          "priceAvg30d": 17.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 20.0,
          "priceAvg30d": 17.41
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.87,
          "priceAvg30d": 17.75
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.02,
          "priceAvg30d": 17.89
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.55,
          "priceAvg30d": 14.47
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.24,
          "priceAvg30d": 14.76
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.76,
          "priceAvg30d": 18.55
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 21.95,
          "priceAvg30d": 21.46
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 21.95,
          "priceAvg30d": 22.23
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.13,
          "priceAvg30d": 23.86
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.13,
          "priceAvg30d": 24.85
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.54,
          "priceAvg30d": 28.0
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.0,
          "priceAvg30d": 28.49
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.6,
          "priceAvg30d": 30.01
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 28.28
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.99,
          "priceAvg30d": 28.22
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.18,
          "priceAvg30d": 27.58
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.0,
          "priceAvg30d": 27.14
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.18,
          "priceAvg30d": 26.65
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.62,
          "priceAvg30d": 24.82
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.15,
          "priceAvg30d": 25.04
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.99,
          "priceAvg30d": 23.58
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.0,
          "priceAvg30d": 22.81
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.15,
          "priceAvg30d": 22.26
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.13,
          "priceAvg30d": 21.55
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.76,
          "priceAvg30d": 19.27
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.76,
          "priceAvg30d": 19.12
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.62,
          "priceAvg30d": 14.97
        }
      ],
      "avg": 18.23,
      "max": 37.6,
      "maxBlock": 34,
      "min": 8.55,
      "minBlock": 25,
      "spread3h": 8.33,
      "spreadLowAvg": 18.64,
      "spreadHighAvg": 26.97,
      "avg30d": 20.31,
      "spread30dAvg": 15.05,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.61,
          "priceAvg30d": 14.57
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.13,
          "priceAvg30d": 15.14
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.61,
          "priceAvg30d": 14.12
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.64,
          "priceAvg30d": 13.3
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.95,
          "priceAvg30d": 13.61
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 14.87
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 15.72
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.0,
          "priceAvg30d": 17.58
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 18.34
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.62,
          "priceAvg30d": 19.51
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.78,
          "priceAvg30d": 19.26
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.07,
          "priceAvg30d": 18.78
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.07,
          "priceAvg30d": 18.71
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.97,
          "priceAvg30d": 17.74
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.62,
          "priceAvg30d": 13.68
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.62,
          "priceAvg30d": 11.95
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 13.22,
          "priceAvg30d": 12.27
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.62,
          "priceAvg30d": 12.09
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.19,
          "priceAvg30d": 10.89
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.19,
          "priceAvg30d": 10.07
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.19,
          "priceAvg30d": 8.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.87,
          "priceAvg30d": 8.36
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.87,
          "priceAvg30d": 8.16
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.87,
          "priceAvg30d": 8.41
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.55,
          "priceAvg30d": 7.07
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.87,
          "priceAvg30d": 6.97
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.95,
          "priceAvg30d": 8.46
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.32,
          "priceAvg30d": 9.29
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 11.32,
          "priceAvg30d": 11.22
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.62,
          "priceAvg30d": 12.45
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.52,
          "priceAvg30d": 13.87
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.54,
          "priceAvg30d": 16.71
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.0,
          "priceAvg30d": 20.44
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.71,
          "priceAvg30d": 24.39
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 24.23
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 28.27,
          "priceAvg30d": 24.83
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.18,
          "priceAvg30d": 23.9
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.0,
          "priceAvg30d": 23.21
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.18,
          "priceAvg30d": 23.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.62,
          "priceAvg30d": 22.06
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.15,
          "priceAvg30d": 22.48
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.99,
          "priceAvg30d": 21.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.0,
          "priceAvg30d": 21.19
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.15,
          "priceAvg30d": 20.37
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.99,
          "priceAvg30d": 19.82
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.12,
          "priceAvg30d": 17.9
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.12,
          "priceAvg30d": 17.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.62,
          "priceAvg30d": 13.94
        }
      ],
      "avg": 15.59,
      "max": 30.71,
      "maxBlock": 34,
      "min": 8.55,
      "minBlock": 25,
      "spread3h": 14.79,
      "spreadLowAvg": 10.29,
      "spreadHighAvg": 25.08,
      "avg30d": 15.9,
      "spread30dAvg": 14.57,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.61,
          "priceAvg30d": 11.64
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.13,
          "priceAvg30d": 11.17
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.61,
          "priceAvg30d": 10.7
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.64,
          "priceAvg30d": 10.38
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.95,
          "priceAvg30d": 10.42
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 10.54
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 10.87
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.0,
          "priceAvg30d": 12.91
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 13.62
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.62,
          "priceAvg30d": 14.71
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.78,
          "priceAvg30d": 15.01
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.07,
          "priceAvg30d": 14.76
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.07,
          "priceAvg30d": 14.34
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.97,
          "priceAvg30d": 12.62
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.62,
          "priceAvg30d": 9.97
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.62,
          "priceAvg30d": 9.79
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 13.22,
          "priceAvg30d": 10.41
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.62,
          "priceAvg30d": 10.21
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.19,
          "priceAvg30d": 8.98
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.19,
          "priceAvg30d": 8.05
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.19,
          "priceAvg30d": 6.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.87,
          "priceAvg30d": 5.82
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.87,
          "priceAvg30d": 5.63
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.87,
          "priceAvg30d": 5.85
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.55,
          "priceAvg30d": 4.83
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.87,
          "priceAvg30d": 5.02
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.95,
          "priceAvg30d": 7.01
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.32,
          "priceAvg30d": 7.48
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 11.32,
          "priceAvg30d": 9.18
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.62,
          "priceAvg30d": 10.17
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.52,
          "priceAvg30d": 10.2
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.54,
          "priceAvg30d": 11.33
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.0,
          "priceAvg30d": 12.71
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.71,
          "priceAvg30d": 16.9
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 18.25
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 28.27,
          "priceAvg30d": 18.69
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.18,
          "priceAvg30d": 18.19
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.0,
          "priceAvg30d": 17.67
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.18,
          "priceAvg30d": 16.64
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.62,
          "priceAvg30d": 15.68
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.15,
          "priceAvg30d": 16.17
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.99,
          "priceAvg30d": 15.17
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.0,
          "priceAvg30d": 15.67
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
          "price": 16.52,
          "priceAvg30d": 13.46
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.49,
          "priceAvg30d": 12.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.3,
          "priceAvg30d": 12.87
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.62,
          "priceAvg30d": 10.52
        }
      ],
      "avg": 15.3,
      "max": 30.71,
      "maxBlock": 34,
      "min": 8.55,
      "minBlock": 25,
      "spread3h": 14.79,
      "spreadLowAvg": 10.29,
      "spreadHighAvg": 25.08,
      "avg30d": 11.79,
      "spread30dAvg": 12.81,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.61,
          "priceAvg30d": 14.57
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.13,
          "priceAvg30d": 14.71
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.61,
          "priceAvg30d": 13.65
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.64,
          "priceAvg30d": 13.07
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.95,
          "priceAvg30d": 13.31
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 14.64
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 15.66
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.0,
          "priceAvg30d": 17.54
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 18.3
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.62,
          "priceAvg30d": 19.37
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.78,
          "priceAvg30d": 19.1
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.07,
          "priceAvg30d": 18.68
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.07,
          "priceAvg30d": 18.68
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.97,
          "priceAvg30d": 17.73
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.62,
          "priceAvg30d": 13.61
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.62,
          "priceAvg30d": 11.95
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 13.22,
          "priceAvg30d": 11.71
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.62,
          "priceAvg30d": 10.58
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.19,
          "priceAvg30d": 8.85
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.19,
          "priceAvg30d": 7.76
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.19,
          "priceAvg30d": 6.9
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.87,
          "priceAvg30d": 6.5
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.87,
          "priceAvg30d": 6.26
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.87,
          "priceAvg30d": 6.07
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.55,
          "priceAvg30d": 5.42
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.87,
          "priceAvg30d": 5.49
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.95,
          "priceAvg30d": 6.3
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.32,
          "priceAvg30d": 7.59
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 11.32,
          "priceAvg30d": 9.19
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.62,
          "priceAvg30d": 11.2
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.52,
          "priceAvg30d": 13.44
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.54,
          "priceAvg30d": 16.13
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.0,
          "priceAvg30d": 20.44
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.71,
          "priceAvg30d": 24.39
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 24.23
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 28.27,
          "priceAvg30d": 24.83
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.18,
          "priceAvg30d": 23.9
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.0,
          "priceAvg30d": 23.21
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.18,
          "priceAvg30d": 23.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.62,
          "priceAvg30d": 22.06
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.15,
          "priceAvg30d": 22.48
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.99,
          "priceAvg30d": 21.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.0,
          "priceAvg30d": 21.19
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.15,
          "priceAvg30d": 20.37
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.99,
          "priceAvg30d": 19.82
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.12,
          "priceAvg30d": 17.9
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.12,
          "priceAvg30d": 17.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.62,
          "priceAvg30d": 13.94
        }
      ],
      "avg": 15.59,
      "max": 30.71,
      "maxBlock": 34,
      "min": 8.55,
      "minBlock": 25,
      "spread3h": 14.79,
      "spreadLowAvg": 10.29,
      "spreadHighAvg": 25.08,
      "avg30d": 15.32,
      "spread30dAvg": 15.63,
      "historyDays": 30
    }
  }
};
