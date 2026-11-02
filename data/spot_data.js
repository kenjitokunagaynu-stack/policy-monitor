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
  "targetDate": "2026-11-02",
  "fetchedAt": "2026-11-02T12:25:15+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 20.29,
        "priceAvg30d": 24.04
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 14.04,
        "priceAvg30d": 23.08
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 12.52,
        "priceAvg30d": 22.73
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 11.62,
        "priceAvg30d": 22.69
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 11.62,
        "priceAvg30d": 22.86
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 12.49,
        "priceAvg30d": 23.43
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 14.04,
        "priceAvg30d": 24.01
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 20.0,
        "priceAvg30d": 24.6
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 20.76,
        "priceAvg30d": 24.93
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 23.0,
        "priceAvg30d": 25.26
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 26.62,
        "priceAvg30d": 25.49
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 27.23,
        "priceAvg30d": 25.5
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 28.0,
        "priceAvg30d": 25.32
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 28.5,
        "priceAvg30d": 23.95
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 28.5,
        "priceAvg30d": 21.33
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 28.9,
        "priceAvg30d": 18.47
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 30.3,
        "priceAvg30d": 17.3
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 32.35,
        "priceAvg30d": 16.58
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 32.41,
        "priceAvg30d": 14.87
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 32.56,
        "priceAvg30d": 14.06
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 35.0,
        "priceAvg30d": 13.09
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 35.0,
        "priceAvg30d": 12.81
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 37.0,
        "priceAvg30d": 12.41
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 35.63,
        "priceAvg30d": 12.37
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 31.43,
        "priceAvg30d": 10.43
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 30.77,
        "priceAvg30d": 10.98
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 40.0,
        "priceAvg30d": 13.98
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 38.67,
        "priceAvg30d": 16.73
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 38.8,
        "priceAvg30d": 17.98
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 38.67,
        "priceAvg30d": 21.62
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 38.67,
        "priceAvg30d": 23.3
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 39.1,
        "priceAvg30d": 27.4
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 38.8,
        "priceAvg30d": 31.12
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 39.1,
        "priceAvg30d": 33.5
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 39.11,
        "priceAvg30d": 32.88
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 39.1,
        "priceAvg30d": 32.91
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 38.51,
        "priceAvg30d": 31.31
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 38.67,
        "priceAvg30d": 30.53
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 36.05,
        "priceAvg30d": 29.58
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 36.05,
        "priceAvg30d": 27.63
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 32.31,
        "priceAvg30d": 27.04
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 31.97,
        "priceAvg30d": 26.17
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 31.63,
        "priceAvg30d": 25.7
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 30.01,
        "priceAvg30d": 25.64
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 31.05,
        "priceAvg30d": 25.97
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 30.0,
        "priceAvg30d": 25.23
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 29.0,
        "priceAvg30d": 25.11
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 28.42,
        "priceAvg30d": 23.66
      }
    ],
    "avg": 30.09,
    "max": 40.0,
    "maxBlock": 27,
    "min": 11.62,
    "minBlock": 4,
    "spread3h": 21.5,
    "spreadLowAvg": 14.17,
    "spreadHighAvg": 35.66,
    "avg30d": 22.66,
    "spread30dAvg": 18.82,
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
          "price": 25.0,
          "priceAvg30d": 20.41
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.86,
          "priceAvg30d": 17.44
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.86,
          "priceAvg30d": 18.41
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.86,
          "priceAvg30d": 19.16
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.86,
          "priceAvg30d": 19.94
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.5,
          "priceAvg30d": 21.51
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.86,
          "priceAvg30d": 22.79
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.11,
          "priceAvg30d": 24.11
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.47,
          "priceAvg30d": 24.63
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.5,
          "priceAvg30d": 24.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.84,
          "priceAvg30d": 26.6
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.16,
          "priceAvg30d": 27.34
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.35,
          "priceAvg30d": 23.53
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 32.34,
          "priceAvg30d": 20.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.61,
          "priceAvg30d": 17.49
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.55,
          "priceAvg30d": 14.44
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.63,
          "priceAvg30d": 13.02
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 36.04,
          "priceAvg30d": 10.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 40.5,
          "priceAvg30d": 9.89
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 40.5,
          "priceAvg30d": 8.83
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 37.22,
          "priceAvg30d": 8.23
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.36,
          "priceAvg30d": 7.53
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 38.54,
          "priceAvg30d": 7.63
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 38.13,
          "priceAvg30d": 7.84
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 24.9,
          "priceAvg30d": 6.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 25.0,
          "priceAvg30d": 6.24
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.0,
          "priceAvg30d": 8.08
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 44.62,
          "priceAvg30d": 10.6
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 44.51,
          "priceAvg30d": 14.0
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 43.55,
          "priceAvg30d": 17.57
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 42.74,
          "priceAvg30d": 19.76
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.01,
          "priceAvg30d": 25.41
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.5,
          "priceAvg30d": 32.76
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.5,
          "priceAvg30d": 35.3
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.5,
          "priceAvg30d": 33.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.5,
          "priceAvg30d": 33.38
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.63,
          "priceAvg30d": 31.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 48.33,
          "priceAvg30d": 31.69
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 50.0,
          "priceAvg30d": 32.24
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.74,
          "priceAvg30d": 31.28
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.5,
          "priceAvg30d": 30.54
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.41,
          "priceAvg30d": 28.56
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.02,
          "priceAvg30d": 27.5
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.98,
          "priceAvg30d": 26.55
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 34.51,
          "priceAvg30d": 26.66
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.63,
          "priceAvg30d": 25.44
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.53,
          "priceAvg30d": 25.37
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 27.84,
          "priceAvg30d": 23.21
        }
      ],
      "avg": 34.46,
      "max": 50.0,
      "maxBlock": 39,
      "min": 23.86,
      "minBlock": 2,
      "spread3h": 14.58,
      "spreadLowAvg": 25.27,
      "spreadHighAvg": 39.85,
      "avg30d": 20.85,
      "spread30dAvg": 24.68,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.0,
          "priceAvg30d": 25.52
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.87,
          "priceAvg30d": 24.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.59,
          "priceAvg30d": 25.24
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.2,
          "priceAvg30d": 24.84
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.86,
          "priceAvg30d": 25.1
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.5,
          "priceAvg30d": 25.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.86,
          "priceAvg30d": 25.87
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.11,
          "priceAvg30d": 25.94
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.47,
          "priceAvg30d": 26.27
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.5,
          "priceAvg30d": 26.39
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.84,
          "priceAvg30d": 26.75
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.16,
          "priceAvg30d": 27.11
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.35,
          "priceAvg30d": 26.41
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 32.34,
          "priceAvg30d": 24.55
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.61,
          "priceAvg30d": 21.47
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.55,
          "priceAvg30d": 18.68
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.63,
          "priceAvg30d": 17.09
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 36.04,
          "priceAvg30d": 15.36
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 40.5,
          "priceAvg30d": 14.32
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 40.5,
          "priceAvg30d": 13.37
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 40.0,
          "priceAvg30d": 12.1
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 40.5,
          "priceAvg30d": 11.82
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 39.88,
          "priceAvg30d": 11.35
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 39.88,
          "priceAvg30d": 11.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 35.0,
          "priceAvg30d": 10.62
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.14,
          "priceAvg30d": 10.95
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.0,
          "priceAvg30d": 13.74
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 44.62,
          "priceAvg30d": 16.09
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 44.51,
          "priceAvg30d": 19.42
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 43.55,
          "priceAvg30d": 22.56
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 42.74,
          "priceAvg30d": 24.84
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.01,
          "priceAvg30d": 30.15
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.5,
          "priceAvg30d": 34.12
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.5,
          "priceAvg30d": 36.68
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.5,
          "priceAvg30d": 35.94
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.5,
          "priceAvg30d": 35.95
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.05,
          "priceAvg30d": 34.09
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.0,
          "priceAvg30d": 33.55
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.05,
          "priceAvg30d": 32.51
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.0,
          "priceAvg30d": 30.81
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.29,
          "priceAvg30d": 29.47
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.41,
          "priceAvg30d": 28.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.02,
          "priceAvg30d": 27.89
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.98,
          "priceAvg30d": 28.62
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 36.05,
          "priceAvg30d": 28.93
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.63,
          "priceAvg30d": 27.44
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.53,
          "priceAvg30d": 26.99
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 27.84,
          "priceAvg30d": 25.17
        }
      ],
      "avg": 34.23,
      "max": 44.62,
      "maxBlock": 28,
      "min": 13.59,
      "minBlock": 3,
      "spread3h": 14.42,
      "spreadLowAvg": 24.24,
      "spreadHighAvg": 38.66,
      "avg30d": 24.0,
      "spread30dAvg": 21.65,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.5,
          "priceAvg30d": 27.0
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.12,
          "priceAvg30d": 26.41
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.52,
          "priceAvg30d": 26.7
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.0,
          "priceAvg30d": 26.43
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.0,
          "priceAvg30d": 26.49
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.5,
          "priceAvg30d": 26.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.86,
          "priceAvg30d": 26.74
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.11,
          "priceAvg30d": 26.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.47,
          "priceAvg30d": 27.0
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.5,
          "priceAvg30d": 27.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.84,
          "priceAvg30d": 27.36
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.16,
          "priceAvg30d": 27.72
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.35,
          "priceAvg30d": 27.49
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 32.34,
          "priceAvg30d": 26.29
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.61,
          "priceAvg30d": 25.58
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.55,
          "priceAvg30d": 24.93
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.63,
          "priceAvg30d": 23.47
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 36.04,
          "priceAvg30d": 23.18
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 40.5,
          "priceAvg30d": 22.09
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 40.5,
          "priceAvg30d": 21.24
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 40.5,
          "priceAvg30d": 19.78
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 40.5,
          "priceAvg30d": 19.44
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 40.5,
          "priceAvg30d": 19.62
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 43.01,
          "priceAvg30d": 19.93
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 44.5,
          "priceAvg30d": 19.21
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 44.51,
          "priceAvg30d": 20.25
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 50.0,
          "priceAvg30d": 21.67
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 44.62,
          "priceAvg30d": 24.44
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 44.51,
          "priceAvg30d": 26.3
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 43.55,
          "priceAvg30d": 28.54
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 42.74,
          "priceAvg30d": 28.66
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.01,
          "priceAvg30d": 32.48
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.5,
          "priceAvg30d": 35.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.5,
          "priceAvg30d": 37.39
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.5,
          "priceAvg30d": 36.62
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.5,
          "priceAvg30d": 36.72
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.05,
          "priceAvg30d": 34.79
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.0,
          "priceAvg30d": 34.36
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.05,
          "priceAvg30d": 33.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.0,
          "priceAvg30d": 31.37
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.29,
          "priceAvg30d": 30.04
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.41,
          "priceAvg30d": 28.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.02,
          "priceAvg30d": 28.29
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.98,
          "priceAvg30d": 29.12
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 42.04,
          "priceAvg30d": 30.05
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 42.04,
          "priceAvg30d": 28.64
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.53,
          "priceAvg30d": 28.02
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 31.81,
          "priceAvg30d": 26.56
        }
      ],
      "avg": 36.11,
      "max": 50.0,
      "maxBlock": 27,
      "min": 27.0,
      "minBlock": 4,
      "spread3h": 16.37,
      "spreadLowAvg": 27.75,
      "spreadHighAvg": 44.12,
      "avg30d": 27.21,
      "spread30dAvg": 15.0,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.1,
          "priceAvg30d": 26.05
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.0,
          "priceAvg30d": 25.41
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.99,
          "priceAvg30d": 25.31
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.99,
          "priceAvg30d": 25.19
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.0,
          "priceAvg30d": 25.31
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.5,
          "priceAvg30d": 25.7
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.86,
          "priceAvg30d": 26.05
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.11,
          "priceAvg30d": 26.28
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.47,
          "priceAvg30d": 26.46
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.5,
          "priceAvg30d": 26.65
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.84,
          "priceAvg30d": 26.89
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.16,
          "priceAvg30d": 27.12
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.35,
          "priceAvg30d": 26.78
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.76,
          "priceAvg30d": 25.53
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 31.78,
          "priceAvg30d": 23.51
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.55,
          "priceAvg30d": 21.18
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 42.46,
          "priceAvg30d": 19.73
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 43.5,
          "priceAvg30d": 20.12
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 44.5,
          "priceAvg30d": 19.77
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 45.0,
          "priceAvg30d": 19.04
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 46.22,
          "priceAvg30d": 17.16
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 46.09,
          "priceAvg30d": 16.85
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 46.05,
          "priceAvg30d": 16.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 46.23,
          "priceAvg30d": 16.52
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 44.5,
          "priceAvg30d": 14.28
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 44.51,
          "priceAvg30d": 14.85
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 46.06,
          "priceAvg30d": 17.94
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 44.62,
          "priceAvg30d": 21.26
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 44.51,
          "priceAvg30d": 23.01
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 43.55,
          "priceAvg30d": 24.99
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 43.5,
          "priceAvg30d": 26.51
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.52,
          "priceAvg30d": 31.01
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 42.47,
          "priceAvg30d": 33.83
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.52,
          "priceAvg30d": 34.98
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.47,
          "priceAvg30d": 34.97
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 42.48,
          "priceAvg30d": 35.04
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.11,
          "priceAvg30d": 33.66
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.0,
          "priceAvg30d": 32.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 39.12,
          "priceAvg30d": 32.12
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.8,
          "priceAvg30d": 30.35
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.29,
          "priceAvg30d": 28.93
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.97,
          "priceAvg30d": 27.92
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.02,
          "priceAvg30d": 27.4
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.98,
          "priceAvg30d": 27.36
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.79,
          "priceAvg30d": 28.4
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.8,
          "priceAvg30d": 27.75
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.53,
          "priceAvg30d": 27.6
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 31.81,
          "priceAvg30d": 26.48
        }
      ],
      "avg": 36.29,
      "max": 46.23,
      "maxBlock": 24,
      "min": 15.99,
      "minBlock": 3,
      "spread3h": 20.41,
      "spreadLowAvg": 25.17,
      "spreadHighAvg": 45.57,
      "avg30d": 25.39,
      "spread30dAvg": 18.14,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.19,
          "priceAvg30d": 15.39
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.19,
          "priceAvg30d": 15.27
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.1,
          "priceAvg30d": 14.61
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.89,
          "priceAvg30d": 13.84
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.89,
          "priceAvg30d": 15.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.09,
          "priceAvg30d": 16.3
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.89,
          "priceAvg30d": 17.55
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.66,
          "priceAvg30d": 19.04
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.13,
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
          "price": 11.62,
          "priceAvg30d": 19.84
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.62,
          "priceAvg30d": 19.24
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.62,
          "priceAvg30d": 18.98
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.0,
          "priceAvg30d": 17.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.62,
          "priceAvg30d": 17.21
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.26,
          "priceAvg30d": 15.43
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.0,
          "priceAvg30d": 17.08
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.5,
          "priceAvg30d": 18.34
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.76,
          "priceAvg30d": 18.54
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.62,
          "priceAvg30d": 18.21
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.62,
          "priceAvg30d": 16.65
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.3,
          "priceAvg30d": 16.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 38.67,
          "priceAvg30d": 16.17
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 38.67,
          "priceAvg30d": 16.32
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 38.67,
          "priceAvg30d": 13.01
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 38.67,
          "priceAvg30d": 13.16
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 46.06,
          "priceAvg30d": 16.63
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 38.67,
          "priceAvg30d": 19.69
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 42.49,
          "priceAvg30d": 20.7
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 38.67,
          "priceAvg30d": 22.33
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.67,
          "priceAvg30d": 23.07
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.67,
          "priceAvg30d": 26.63
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.67,
          "priceAvg30d": 27.12
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.67,
          "priceAvg30d": 28.74
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 27.05
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 42.48,
          "priceAvg30d": 27.32
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.11,
          "priceAvg30d": 26.32
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.67,
          "priceAvg30d": 26.44
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 38.67,
          "priceAvg30d": 25.96
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.67,
          "priceAvg30d": 23.97
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.29,
          "priceAvg30d": 24.18
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.0,
          "priceAvg30d": 22.88
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.99,
          "priceAvg30d": 22.43
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.71,
          "priceAvg30d": 21.77
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.62,
          "priceAvg30d": 21.22
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.76,
          "priceAvg30d": 19.16
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.29,
          "priceAvg30d": 19.05
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.01,
          "priceAvg30d": 15.0
        }
      ],
      "avg": 25.41,
      "max": 46.06,
      "maxBlock": 27,
      "min": 9.09,
      "minBlock": 6,
      "spread3h": 29.05,
      "spreadLowAvg": 10.26,
      "spreadHighAvg": 39.31,
      "avg30d": 19.71,
      "spread30dAvg": 14.63,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.19,
          "priceAvg30d": 15.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.19,
          "priceAvg30d": 15.16
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.1,
          "priceAvg30d": 14.52
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.89,
          "priceAvg30d": 13.75
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.89,
          "priceAvg30d": 14.44
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.09,
          "priceAvg30d": 15.94
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.89,
          "priceAvg30d": 17.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.66,
          "priceAvg30d": 18.6
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.13,
          "priceAvg30d": 18.4
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
          "price": 11.62,
          "priceAvg30d": 19.27
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.62,
          "priceAvg30d": 18.78
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.62,
          "priceAvg30d": 18.91
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.0,
          "priceAvg30d": 17.81
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.62,
          "priceAvg30d": 16.76
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.26,
          "priceAvg30d": 14.83
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.0,
          "priceAvg30d": 16.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.5,
          "priceAvg30d": 18.32
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.76,
          "priceAvg30d": 18.51
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.62,
          "priceAvg30d": 18.21
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.62,
          "priceAvg30d": 16.61
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.3,
          "priceAvg30d": 16.19
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 38.67,
          "priceAvg30d": 16.11
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 38.67,
          "priceAvg30d": 16.27
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 38.67,
          "priceAvg30d": 13.01
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 38.67,
          "priceAvg30d": 13.16
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 46.06,
          "priceAvg30d": 16.63
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 38.67,
          "priceAvg30d": 19.69
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 42.49,
          "priceAvg30d": 20.28
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 38.67,
          "priceAvg30d": 22.17
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.67,
          "priceAvg30d": 22.89
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.67,
          "priceAvg30d": 26.59
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.67,
          "priceAvg30d": 27.12
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.67,
          "priceAvg30d": 28.74
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 27.05
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 42.48,
          "priceAvg30d": 26.98
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.11,
          "priceAvg30d": 26.32
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.67,
          "priceAvg30d": 26.0
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 38.67,
          "priceAvg30d": 25.62
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.67,
          "priceAvg30d": 23.79
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.29,
          "priceAvg30d": 24.0
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.0,
          "priceAvg30d": 22.73
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.99,
          "priceAvg30d": 22.27
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.71,
          "priceAvg30d": 21.52
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.62,
          "priceAvg30d": 20.98
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.76,
          "priceAvg30d": 18.91
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.29,
          "priceAvg30d": 18.88
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.01,
          "priceAvg30d": 14.88
        }
      ],
      "avg": 25.41,
      "max": 46.06,
      "maxBlock": 27,
      "min": 9.09,
      "minBlock": 6,
      "spread3h": 29.05,
      "spreadLowAvg": 10.26,
      "spreadHighAvg": 39.31,
      "avg30d": 19.51,
      "spread30dAvg": 14.34,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.19,
          "priceAvg30d": 14.56
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.19,
          "priceAvg30d": 15.16
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.1,
          "priceAvg30d": 14.1
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.89,
          "priceAvg30d": 13.29
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.89,
          "priceAvg30d": 13.54
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.09,
          "priceAvg30d": 14.86
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.89,
          "priceAvg30d": 15.76
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.66,
          "priceAvg30d": 17.51
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.13,
          "priceAvg30d": 18.27
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
          "price": 11.62,
          "priceAvg30d": 19.24
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.62,
          "priceAvg30d": 18.77
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.62,
          "priceAvg30d": 18.84
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.0,
          "priceAvg30d": 17.71
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.62,
          "priceAvg30d": 13.55
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.26,
          "priceAvg30d": 11.35
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 18.01,
          "priceAvg30d": 11.45
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.95,
          "priceAvg30d": 11.49
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.27,
          "priceAvg30d": 10.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.71,
          "priceAvg30d": 9.55
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.22,
          "priceAvg30d": 8.38
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.32,
          "priceAvg30d": 7.98
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.13,
          "priceAvg30d": 7.79
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.19,
          "priceAvg30d": 8.07
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.0,
          "priceAvg30d": 6.74
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.87,
          "priceAvg30d": 6.66
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.19,
          "priceAvg30d": 8.16
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.19,
          "priceAvg30d": 9.15
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.19,
          "priceAvg30d": 11.08
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.19,
          "priceAvg30d": 12.43
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.5,
          "priceAvg30d": 13.51
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.62,
          "priceAvg30d": 16.66
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 16.26,
          "priceAvg30d": 20.2
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.0,
          "priceAvg30d": 24.0
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.15,
          "priceAvg30d": 23.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.15,
          "priceAvg30d": 24.34
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.99,
          "priceAvg30d": 23.38
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.99,
          "priceAvg30d": 22.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.0,
          "priceAvg30d": 22.73
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.99,
          "priceAvg30d": 21.62
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.96,
          "priceAvg30d": 22.01
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.12,
          "priceAvg30d": 21.28
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.3,
          "priceAvg30d": 20.84
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.12,
          "priceAvg30d": 19.95
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.12,
          "priceAvg30d": 19.63
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.01,
          "priceAvg30d": 17.65
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.01,
          "priceAvg30d": 17.67
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.01,
          "priceAvg30d": 13.84
        }
      ],
      "avg": 14.25,
      "max": 22.15,
      "maxBlock": 35,
      "min": 9.09,
      "minBlock": 6,
      "spread3h": 8.41,
      "spreadLowAvg": 10.26,
      "spreadHighAvg": 18.67,
      "avg30d": 15.65,
      "spread30dAvg": 14.59,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.55,
          "priceAvg30d": 11.6
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.52,
          "priceAvg30d": 11.14
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 8.52,
          "priceAvg30d": 10.67
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 8.47,
          "priceAvg30d": 10.36
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.52,
          "priceAvg30d": 10.35
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 8.54,
          "priceAvg30d": 10.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.89,
          "priceAvg30d": 10.78
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.66,
          "priceAvg30d": 12.79
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.13,
          "priceAvg30d": 13.5
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.62,
          "priceAvg30d": 14.67
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 11.62,
          "priceAvg30d": 14.92
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.62,
          "priceAvg30d": 14.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.62,
          "priceAvg30d": 14.21
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.49,
          "priceAvg30d": 12.4
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.55,
          "priceAvg30d": 9.47
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.07,
          "priceAvg30d": 9.11
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 18.01,
          "priceAvg30d": 9.76
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.95,
          "priceAvg30d": 9.58
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.27,
          "priceAvg30d": 8.44
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.71,
          "priceAvg30d": 7.53
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.22,
          "priceAvg30d": 6.35
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.32,
          "priceAvg30d": 5.45
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.13,
          "priceAvg30d": 5.26
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.19,
          "priceAvg30d": 5.51
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.0,
          "priceAvg30d": 4.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.36,
          "priceAvg30d": 4.74
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.4,
          "priceAvg30d": 6.73
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.31,
          "priceAvg30d": 7.2
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.32,
          "priceAvg30d": 8.91
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.31,
          "priceAvg30d": 9.9
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.25,
          "priceAvg30d": 9.93
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.31,
          "priceAvg30d": 11.15
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.07,
          "priceAvg30d": 12.42
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.0,
          "priceAvg30d": 16.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.15,
          "priceAvg30d": 17.55
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.15,
          "priceAvg30d": 18.03
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.99,
          "priceAvg30d": 17.62
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.99,
          "priceAvg30d": 17.1
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.35,
          "priceAvg30d": 16.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 13.47,
          "priceAvg30d": 15.4
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.22,
          "priceAvg30d": 15.87
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 12.07,
          "priceAvg30d": 14.91
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.07,
          "priceAvg30d": 15.35
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 12.07,
          "priceAvg30d": 13.93
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.47,
          "priceAvg30d": 13.2
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.49,
          "priceAvg30d": 12.21
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.47,
          "priceAvg30d": 12.7
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.07,
          "priceAvg30d": 10.4
        }
      ],
      "avg": 12.39,
      "max": 22.15,
      "maxBlock": 35,
      "min": 8.25,
      "minBlock": 31,
      "spread3h": 6.53,
      "spreadLowAvg": 10.89,
      "spreadHighAvg": 17.42,
      "avg30d": 11.48,
      "spread30dAvg": 12.57,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.19,
          "priceAvg30d": 14.56
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.19,
          "priceAvg30d": 14.73
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.1,
          "priceAvg30d": 13.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.89,
          "priceAvg30d": 13.07
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.89,
          "priceAvg30d": 13.24
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.09,
          "priceAvg30d": 14.63
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.89,
          "priceAvg30d": 15.69
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.66,
          "priceAvg30d": 17.49
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.13,
          "priceAvg30d": 18.23
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.62,
          "priceAvg30d": 19.36
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 11.62,
          "priceAvg30d": 19.09
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.62,
          "priceAvg30d": 18.66
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
          "price": 12.0,
          "priceAvg30d": 17.7
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.62,
          "priceAvg30d": 13.48
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.26,
          "priceAvg30d": 11.35
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 18.01,
          "priceAvg30d": 10.89
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.95,
          "priceAvg30d": 9.98
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.27,
          "priceAvg30d": 8.32
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.71,
          "priceAvg30d": 7.24
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.22,
          "priceAvg30d": 6.46
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.32,
          "priceAvg30d": 6.13
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.13,
          "priceAvg30d": 5.89
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.19,
          "priceAvg30d": 5.74
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.0,
          "priceAvg30d": 5.09
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.87,
          "priceAvg30d": 5.18
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.19,
          "priceAvg30d": 5.99
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.19,
          "priceAvg30d": 7.45
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.19,
          "priceAvg30d": 9.05
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.19,
          "priceAvg30d": 11.18
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.5,
          "priceAvg30d": 13.08
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.62,
          "priceAvg30d": 16.07
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 16.26,
          "priceAvg30d": 20.2
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.0,
          "priceAvg30d": 24.0
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.15,
          "priceAvg30d": 23.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.15,
          "priceAvg30d": 24.34
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.99,
          "priceAvg30d": 23.38
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.99,
          "priceAvg30d": 22.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.0,
          "priceAvg30d": 22.73
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.99,
          "priceAvg30d": 21.62
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.96,
          "priceAvg30d": 22.01
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.12,
          "priceAvg30d": 21.28
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.3,
          "priceAvg30d": 20.84
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.12,
          "priceAvg30d": 19.95
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.12,
          "priceAvg30d": 19.63
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.01,
          "priceAvg30d": 17.65
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.01,
          "priceAvg30d": 17.67
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.01,
          "priceAvg30d": 13.84
        }
      ],
      "avg": 14.25,
      "max": 22.15,
      "maxBlock": 35,
      "min": 9.09,
      "minBlock": 6,
      "spread3h": 8.41,
      "spreadLowAvg": 10.26,
      "spreadHighAvg": 18.67,
      "avg30d": 15.06,
      "spread30dAvg": 15.65,
      "historyDays": 30
    }
  }
};
