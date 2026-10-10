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
  "targetDate": "2026-10-10",
  "fetchedAt": "2026-10-10T12:21:56+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 24.36,
        "priceAvg30d": 18.28
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 23.52,
        "priceAvg30d": 16.57
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 23.31,
        "priceAvg30d": 15.49
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 23.4,
        "priceAvg30d": 14.92
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 23.4,
        "priceAvg30d": 14.64
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 23.93,
        "priceAvg30d": 15.37
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 24.69,
        "priceAvg30d": 16.17
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 24.74,
        "priceAvg30d": 17.1
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 24.7,
        "priceAvg30d": 17.92
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 25.0,
        "priceAvg30d": 19.0
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 25.99,
        "priceAvg30d": 19.84
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 25.0,
        "priceAvg30d": 19.56
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 23.4,
        "priceAvg30d": 18.7
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 20.0,
        "priceAvg30d": 16.15
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 12.5,
        "priceAvg30d": 13.75
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 10.01,
        "priceAvg30d": 12.58
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 10.42,
        "priceAvg30d": 12.98
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 8.81,
        "priceAvg30d": 13.63
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 6.07,
        "priceAvg30d": 14.0
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 5.0,
        "priceAvg30d": 13.48
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 2.9,
        "priceAvg30d": 12.55
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 2.5,
        "priceAvg30d": 11.98
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 2.5,
        "priceAvg30d": 11.82
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 2.5,
        "priceAvg30d": 11.41
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 2.9,
        "priceAvg30d": 9.35
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 4.37,
        "priceAvg30d": 10.03
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 8.86,
        "priceAvg30d": 12.2
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 9.03,
        "priceAvg30d": 14.51
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 8.76,
        "priceAvg30d": 15.44
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 10.9,
        "priceAvg30d": 18.05
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 10.77,
        "priceAvg30d": 18.87
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 15.65,
        "priceAvg30d": 22.26
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 23.0,
        "priceAvg30d": 24.14
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 24.74,
        "priceAvg30d": 27.0
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 25.38,
        "priceAvg30d": 26.97
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 26.31,
        "priceAvg30d": 27.6
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 25.0,
        "priceAvg30d": 27.27
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 25.1,
        "priceAvg30d": 26.82
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 24.5,
        "priceAvg30d": 25.6
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 24.5,
        "priceAvg30d": 24.29
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 23.4,
        "priceAvg30d": 23.43
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 23.29,
        "priceAvg30d": 22.78
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 22.24,
        "priceAvg30d": 21.98
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 22.76,
        "priceAvg30d": 21.99
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 23.4,
        "priceAvg30d": 21.86
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 23.0,
        "priceAvg30d": 20.43
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 23.29,
        "priceAvg30d": 20.22
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 22.05,
        "priceAvg30d": 18.19
      }
    ],
    "avg": 17.75,
    "max": 26.31,
    "maxBlock": 36,
    "min": 2.5,
    "minBlock": 22,
    "spread3h": 20.98,
    "spreadLowAvg": 3.65,
    "spreadHighAvg": 24.62,
    "avg30d": 18.11,
    "spread30dAvg": 16.25,
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
          "price": 26.61,
          "priceAvg30d": 15.09
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.42,
          "priceAvg30d": 13.38
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.36,
          "priceAvg30d": 13.74
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.31,
          "priceAvg30d": 13.55
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.16,
          "priceAvg30d": 14.47
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 50.0,
          "priceAvg30d": 15.47
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 45.0,
          "priceAvg30d": 16.53
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 40.0,
          "priceAvg30d": 17.17
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.0,
          "priceAvg30d": 17.19
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 36.0,
          "priceAvg30d": 17.29
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 50.0,
          "priceAvg30d": 17.73
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 45.19,
          "priceAvg30d": 16.87
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.16,
          "priceAvg30d": 14.96
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.52,
          "priceAvg30d": 12.98
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.0,
          "priceAvg30d": 11.03
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
          "priceAvg30d": 8.31
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
          "price": 5.0,
          "priceAvg30d": 7.37
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.5,
          "priceAvg30d": 6.5
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 4.0,
          "priceAvg30d": 6.28
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.5,
          "priceAvg30d": 6.21
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.5,
          "priceAvg30d": 6.37
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 2.0,
          "priceAvg30d": 5.94
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 5.73
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.0,
          "priceAvg30d": 5.66
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 5.0,
          "priceAvg30d": 6.45
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 8.57
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 4.37,
          "priceAvg30d": 9.24
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.32,
          "priceAvg30d": 11.18
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.01,
          "priceAvg30d": 13.5
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.9,
          "priceAvg30d": 17.31
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 50.0,
          "priceAvg30d": 21.89
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 80.1,
          "priceAvg30d": 25.06
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 50.01,
          "priceAvg30d": 24.79
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 54.64,
          "priceAvg30d": 25.38
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 50.01,
          "priceAvg30d": 24.07
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 55.25,
          "priceAvg30d": 24.95
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 80.0,
          "priceAvg30d": 23.86
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 82.01,
          "priceAvg30d": 22.68
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 100.0,
          "priceAvg30d": 20.76
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 100.0,
          "priceAvg30d": 20.02
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 80.1,
          "priceAvg30d": 19.64
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 50.01,
          "priceAvg30d": 20.36
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 52.77,
          "priceAvg30d": 19.4
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 52.26,
          "priceAvg30d": 18.21
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 45.0,
          "priceAvg30d": 17.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.72,
          "priceAvg30d": 16.66
        }
      ],
      "avg": 33.64,
      "max": 100.0,
      "maxBlock": 41,
      "min": 2.0,
      "minBlock": 24,
      "spread3h": 71.48,
      "spreadLowAvg": 3.08,
      "spreadHighAvg": 74.56,
      "avg30d": 14.91,
      "spread30dAvg": 16.27,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.61,
          "priceAvg30d": 20.19
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.42,
          "priceAvg30d": 18.9
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.36,
          "priceAvg30d": 18.41
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.31,
          "priceAvg30d": 18.02
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.16,
          "priceAvg30d": 18.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.31,
          "priceAvg30d": 18.06
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.29,
          "priceAvg30d": 19.05
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.3,
          "priceAvg30d": 19.35
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.31,
          "priceAvg30d": 19.53
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.6,
          "priceAvg30d": 19.56
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.61,
          "priceAvg30d": 19.76
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.3,
          "priceAvg30d": 19.72
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.16,
          "priceAvg30d": 18.71
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.52,
          "priceAvg30d": 17.05
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.0,
          "priceAvg30d": 14.48
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.32,
          "priceAvg30d": 12.35
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 7.49,
          "priceAvg30d": 10.01
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 9.5
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 9.3
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 8.17
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.68
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 7.17
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.79
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.11
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.64
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 7.84
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 9.51
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 4.37,
          "priceAvg30d": 10.77
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.32,
          "priceAvg30d": 13.25
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.01,
          "priceAvg30d": 16.38
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.9,
          "priceAvg30d": 21.51
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.74,
          "priceAvg30d": 25.24
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.21,
          "priceAvg30d": 29.59
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.23,
          "priceAvg30d": 29.18
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.02,
          "priceAvg30d": 29.72
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.31,
          "priceAvg30d": 29.19
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.23,
          "priceAvg30d": 28.68
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.72,
          "priceAvg30d": 27.81
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.16,
          "priceAvg30d": 25.97
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.74,
          "priceAvg30d": 24.66
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.74,
          "priceAvg30d": 23.85
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.22,
          "priceAvg30d": 23.22
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.16,
          "priceAvg30d": 23.46
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.16,
          "priceAvg30d": 23.04
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.16,
          "priceAvg30d": 22.08
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.8,
          "priceAvg30d": 21.6
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.26,
          "priceAvg30d": 20.18
        }
      ],
      "avg": 18.45,
      "max": 34.02,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 25.4,
      "spreadLowAvg": 1.84,
      "spreadHighAvg": 27.24,
      "avg30d": 17.84,
      "spread30dAvg": 19.29,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.61,
          "priceAvg30d": 22.19
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.42,
          "priceAvg30d": 21.35
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.36,
          "priceAvg30d": 20.87
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.31,
          "priceAvg30d": 20.9
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.16,
          "priceAvg30d": 20.59
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.31,
          "priceAvg30d": 20.82
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.29,
          "priceAvg30d": 21.38
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.3,
          "priceAvg30d": 21.73
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.31,
          "priceAvg30d": 22.09
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.6,
          "priceAvg30d": 22.19
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.61,
          "priceAvg30d": 22.31
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.3,
          "priceAvg30d": 22.3
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.16,
          "priceAvg30d": 21.82
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.52,
          "priceAvg30d": 20.96
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.99,
          "priceAvg30d": 20.52
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 19.48,
          "priceAvg30d": 20.42
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 17.16,
          "priceAvg30d": 20.17
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 14.54,
          "priceAvg30d": 21.37
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.3,
          "priceAvg30d": 21.72
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.98,
          "priceAvg30d": 21.79
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.61,
          "priceAvg30d": 20.31
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.0,
          "priceAvg30d": 20.24
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.01,
          "priceAvg30d": 20.22
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.3,
          "priceAvg30d": 20.0
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.3,
          "priceAvg30d": 18.21
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.3,
          "priceAvg30d": 19.0
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.16,
          "priceAvg30d": 20.07
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 17.16,
          "priceAvg30d": 22.38
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 17.16,
          "priceAvg30d": 23.57
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.84,
          "priceAvg30d": 25.22
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.16,
          "priceAvg30d": 24.34
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.9,
          "priceAvg30d": 27.28
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.74,
          "priceAvg30d": 30.12
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.21,
          "priceAvg30d": 32.44
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.23,
          "priceAvg30d": 31.57
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.02,
          "priceAvg30d": 32.09
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.31,
          "priceAvg30d": 31.68
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.23,
          "priceAvg30d": 31.22
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.72,
          "priceAvg30d": 30.0
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.16,
          "priceAvg30d": 28.09
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.74,
          "priceAvg30d": 26.59
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.74,
          "priceAvg30d": 25.83
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.22,
          "priceAvg30d": 25.04
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.16,
          "priceAvg30d": 25.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.16,
          "priceAvg30d": 26.06
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.16,
          "priceAvg30d": 25.15
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.8,
          "priceAvg30d": 24.87
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.26,
          "priceAvg30d": 23.04
        }
      ],
      "avg": 22.26,
      "max": 34.02,
      "maxBlock": 36,
      "min": 8.0,
      "minBlock": 22,
      "spread3h": 16.82,
      "spreadLowAvg": 10.42,
      "spreadHighAvg": 27.24,
      "avg30d": 23.71,
      "spread30dAvg": 13.08,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.61,
          "priceAvg30d": 22.15
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.42,
          "priceAvg30d": 21.3
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.58,
          "priceAvg30d": 20.75
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.58,
          "priceAvg30d": 20.48
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.61,
          "priceAvg30d": 20.21
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.97,
          "priceAvg30d": 20.4
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.29,
          "priceAvg30d": 20.99
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.3,
          "priceAvg30d": 21.42
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.31,
          "priceAvg30d": 21.72
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.6,
          "priceAvg30d": 21.89
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.61,
          "priceAvg30d": 22.15
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.3,
          "priceAvg30d": 22.15
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.16,
          "priceAvg30d": 21.92
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.52,
          "priceAvg30d": 20.98
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.99,
          "priceAvg30d": 20.03
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.02,
          "priceAvg30d": 19.52
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.49,
          "priceAvg30d": 19.72
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.26,
          "priceAvg30d": 20.63
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.5,
          "priceAvg30d": 20.86
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.98,
          "priceAvg30d": 20.5
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.61,
          "priceAvg30d": 19.34
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.0,
          "priceAvg30d": 19.07
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.01,
          "priceAvg30d": 19.01
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.0,
          "priceAvg30d": 18.76
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 4.01,
          "priceAvg30d": 16.75
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 4.1,
          "priceAvg30d": 17.32
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.86,
          "priceAvg30d": 19.65
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.6,
          "priceAvg30d": 22.44
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 11.9,
          "priceAvg30d": 23.51
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.31,
          "priceAvg30d": 24.65
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.6,
          "priceAvg30d": 25.19
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.9,
          "priceAvg30d": 27.33
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.74,
          "priceAvg30d": 29.05
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.21,
          "priceAvg30d": 31.38
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.39,
          "priceAvg30d": 31.2
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.01,
          "priceAvg30d": 31.42
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.12,
          "priceAvg30d": 30.78
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.57,
          "priceAvg30d": 30.14
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.76,
          "priceAvg30d": 29.13
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.12,
          "priceAvg30d": 27.88
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.1,
          "priceAvg30d": 26.68
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.56,
          "priceAvg30d": 25.93
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.13,
          "priceAvg30d": 25.24
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.63,
          "priceAvg30d": 25.7
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.75,
          "priceAvg30d": 25.95
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.32,
          "priceAvg30d": 24.98
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.8,
          "priceAvg30d": 24.94
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.26,
          "priceAvg30d": 23.28
        }
      ],
      "avg": 20.05,
      "max": 27.61,
      "maxBlock": 11,
      "min": 4.01,
      "minBlock": 25,
      "spread3h": 19.27,
      "spreadLowAvg": 7.26,
      "spreadHighAvg": 26.53,
      "avg30d": 23.26,
      "spread30dAvg": 14.18,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.62,
          "priceAvg30d": 10.66
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.0,
          "priceAvg30d": 10.76
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.77,
          "priceAvg30d": 11.06
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.77,
          "priceAvg30d": 10.91
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.3,
          "priceAvg30d": 10.92
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 11.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.06,
          "priceAvg30d": 12.24
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.43,
          "priceAvg30d": 13.02
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 12.85
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.01,
          "priceAvg30d": 13.97
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.62,
          "priceAvg30d": 14.34
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.02,
          "priceAvg30d": 14.59
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.89,
          "priceAvg30d": 15.4
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.62,
          "priceAvg30d": 12.7
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.1,
          "priceAvg30d": 11.37
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.83,
          "priceAvg30d": 9.79
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.49,
          "priceAvg30d": 11.36
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.26,
          "priceAvg30d": 13.19
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.5,
          "priceAvg30d": 15.46
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.98,
          "priceAvg30d": 15.22
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.61,
          "priceAvg30d": 14.41
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.0,
          "priceAvg30d": 13.97
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.01,
          "priceAvg30d": 14.3
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.0,
          "priceAvg30d": 13.8
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 4.01,
          "priceAvg30d": 11.29
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 4.1,
          "priceAvg30d": 11.54
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.86,
          "priceAvg30d": 13.68
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.6,
          "priceAvg30d": 16.44
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 11.9,
          "priceAvg30d": 16.81
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.31,
          "priceAvg30d": 18.35
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.6,
          "priceAvg30d": 18.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.9,
          "priceAvg30d": 19.35
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.74,
          "priceAvg30d": 18.75
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.21,
          "priceAvg30d": 19.79
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.33,
          "priceAvg30d": 19.66
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.63,
          "priceAvg30d": 20.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.64,
          "priceAvg30d": 20.35
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.0,
          "priceAvg30d": 20.41
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.1,
          "priceAvg30d": 19.26
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.82,
          "priceAvg30d": 17.96
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.5,
          "priceAvg30d": 18.05
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.63,
          "priceAvg30d": 17.41
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 17.43
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.62,
          "priceAvg30d": 16.21
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.62,
          "priceAvg30d": 16.26
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.68,
          "priceAvg30d": 14.51
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 12.68,
          "priceAvg30d": 14.32
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.5,
          "priceAvg30d": 11.14
        }
      ],
      "avg": 13.6,
      "max": 26.21,
      "maxBlock": 34,
      "min": 4.01,
      "minBlock": 25,
      "spread3h": 13.04,
      "spreadLowAvg": 7.26,
      "spreadHighAvg": 20.31,
      "avg30d": 14.91,
      "spread30dAvg": 9.79,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.62,
          "priceAvg30d": 10.58
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.0,
          "priceAvg30d": 10.65
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.77,
          "priceAvg30d": 10.97
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.77,
          "priceAvg30d": 10.81
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.3,
          "priceAvg30d": 10.77
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 11.28
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.06,
          "priceAvg30d": 12.16
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.43,
          "priceAvg30d": 12.95
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 12.78
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.01,
          "priceAvg30d": 13.97
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.62,
          "priceAvg30d": 14.32
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.02,
          "priceAvg30d": 14.51
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.89,
          "priceAvg30d": 15.33
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.62,
          "priceAvg30d": 12.59
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.1,
          "priceAvg30d": 11.34
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.83,
          "priceAvg30d": 9.37
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.49,
          "priceAvg30d": 10.8
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.26,
          "priceAvg30d": 12.46
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.5,
          "priceAvg30d": 14.92
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.98,
          "priceAvg30d": 14.79
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.61,
          "priceAvg30d": 14.04
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.0,
          "priceAvg30d": 13.66
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.01,
          "priceAvg30d": 14.01
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.0,
          "priceAvg30d": 13.45
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 4.01,
          "priceAvg30d": 10.86
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 4.1,
          "priceAvg30d": 11.13
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.86,
          "priceAvg30d": 13.34
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.6,
          "priceAvg30d": 16.34
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 11.9,
          "priceAvg30d": 16.46
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.31,
          "priceAvg30d": 18.06
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.6,
          "priceAvg30d": 17.32
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.9,
          "priceAvg30d": 18.86
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.74,
          "priceAvg30d": 18.75
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.21,
          "priceAvg30d": 19.79
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.33,
          "priceAvg30d": 19.66
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.63,
          "priceAvg30d": 20.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.64,
          "priceAvg30d": 20.35
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.0,
          "priceAvg30d": 20.41
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.1,
          "priceAvg30d": 19.26
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.82,
          "priceAvg30d": 17.96
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.5,
          "priceAvg30d": 18.05
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.63,
          "priceAvg30d": 17.41
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 17.43
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.62,
          "priceAvg30d": 16.21
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.62,
          "priceAvg30d": 16.26
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.68,
          "priceAvg30d": 14.51
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 12.68,
          "priceAvg30d": 14.32
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.5,
          "priceAvg30d": 11.14
        }
      ],
      "avg": 13.6,
      "max": 26.21,
      "maxBlock": 34,
      "min": 4.01,
      "minBlock": 25,
      "spread3h": 13.04,
      "spreadLowAvg": 7.26,
      "spreadHighAvg": 20.31,
      "avg30d": 14.73,
      "spread30dAvg": 9.78,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.62,
          "priceAvg30d": 10.58
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.0,
          "priceAvg30d": 10.65
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.77,
          "priceAvg30d": 10.88
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.77,
          "priceAvg30d": 10.64
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.3,
          "priceAvg30d": 10.39
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 10.82
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.06,
          "priceAvg30d": 11.56
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.43,
          "priceAvg30d": 12.43
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 12.55
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.01,
          "priceAvg30d": 13.7
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.62,
          "priceAvg30d": 14.31
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.02,
          "priceAvg30d": 14.47
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.89,
          "priceAvg30d": 15.26
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.62,
          "priceAvg30d": 12.33
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.1,
          "priceAvg30d": 10.7
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.83,
          "priceAvg30d": 8.89
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.86,
          "priceAvg30d": 9.1
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.86,
          "priceAvg30d": 9.19
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.45,
          "priceAvg30d": 9.05
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.86,
          "priceAvg30d": 8.47
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 5.45,
          "priceAvg30d": 8.95
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 4.69,
          "priceAvg30d": 8.55
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.37,
          "priceAvg30d": 8.37
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 4.37,
          "priceAvg30d": 7.99
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 4.01,
          "priceAvg30d": 7.48
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 4.1,
          "priceAvg30d": 7.56
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.86,
          "priceAvg30d": 9.08
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.86,
          "priceAvg30d": 10.23
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.5,
          "priceAvg30d": 9.88
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.86,
          "priceAvg30d": 10.8
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.5,
          "priceAvg30d": 11.74
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.1,
          "priceAvg30d": 14.05
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.06,
          "priceAvg30d": 14.57
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.67,
          "priceAvg30d": 17.59
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.33,
          "priceAvg30d": 19.18
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.54,
          "priceAvg30d": 20.43
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.64,
          "priceAvg30d": 19.89
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.0,
          "priceAvg30d": 19.93
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.1,
          "priceAvg30d": 19.14
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.82,
          "priceAvg30d": 17.96
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.0,
          "priceAvg30d": 17.99
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.0,
          "priceAvg30d": 17.38
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 17.39
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.62,
          "priceAvg30d": 16.12
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.62,
          "priceAvg30d": 16.15
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.68,
          "priceAvg30d": 14.5
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 12.68,
          "priceAvg30d": 14.32
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.5,
          "priceAvg30d": 11.14
        }
      ],
      "avg": 12.23,
      "max": 21.54,
      "maxBlock": 36,
      "min": 4.01,
      "minBlock": 25,
      "spread3h": 12.59,
      "spreadLowAvg": 5.88,
      "spreadHighAvg": 18.47,
      "avg30d": 12.8,
      "spread30dAvg": 11.11,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.62,
          "priceAvg30d": 10.04
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.0,
          "priceAvg30d": 9.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.77,
          "priceAvg30d": 9.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.77,
          "priceAvg30d": 9.68
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.3,
          "priceAvg30d": 9.34
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 9.81
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.06,
          "priceAvg30d": 10.3
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.43,
          "priceAvg30d": 11.17
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 10.79
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.01,
          "priceAvg30d": 12.18
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.62,
          "priceAvg30d": 12.88
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.02,
          "priceAvg30d": 13.02
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.89,
          "priceAvg30d": 13.35
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.62,
          "priceAvg30d": 10.51
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.1,
          "priceAvg30d": 8.66
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.83,
          "priceAvg30d": 7.38
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.86,
          "priceAvg30d": 7.61
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.86,
          "priceAvg30d": 7.98
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.45,
          "priceAvg30d": 7.07
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.32,
          "priceAvg30d": 6.14
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 6.54
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.0,
          "priceAvg30d": 6.31
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
          "price": 2.0,
          "priceAvg30d": 6.31
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.0,
          "priceAvg30d": 7.39
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.38,
          "priceAvg30d": 8.69
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.5,
          "priceAvg30d": 8.38
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.86,
          "priceAvg30d": 8.57
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.5,
          "priceAvg30d": 8.95
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.45,
          "priceAvg30d": 11.1
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.06,
          "priceAvg30d": 11.21
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.67,
          "priceAvg30d": 13.54
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.33,
          "priceAvg30d": 14.37
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.54,
          "priceAvg30d": 16.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.64,
          "priceAvg30d": 17.07
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.0,
          "priceAvg30d": 16.91
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.1,
          "priceAvg30d": 15.35
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.82,
          "priceAvg30d": 13.2
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.0,
          "priceAvg30d": 13.85
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.0,
          "priceAvg30d": 13.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 13.15
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.62,
          "priceAvg30d": 12.23
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.62,
          "priceAvg30d": 12.45
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.68,
          "priceAvg30d": 11.59
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 12.68,
          "priceAvg30d": 12.06
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.5,
          "priceAvg30d": 9.64
        }
      ],
      "avg": 11.73,
      "max": 21.54,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 23,
      "spread3h": 15.99,
      "spreadLowAvg": 2.47,
      "spreadHighAvg": 18.47,
      "avg30d": 10.51,
      "spread30dAvg": 9.66,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.62,
          "priceAvg30d": 10.45
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.0,
          "priceAvg30d": 10.57
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.77,
          "priceAvg30d": 10.72
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.77,
          "priceAvg30d": 10.5
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.3,
          "priceAvg30d": 10.28
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 10.72
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.06,
          "priceAvg30d": 11.4
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.43,
          "priceAvg30d": 12.39
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.62,
          "priceAvg30d": 12.51
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.01,
          "priceAvg30d": 13.7
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.62,
          "priceAvg30d": 14.23
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.02,
          "priceAvg30d": 14.43
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.89,
          "priceAvg30d": 15.26
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.62,
          "priceAvg30d": 12.27
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.1,
          "priceAvg30d": 10.55
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.83,
          "priceAvg30d": 8.69
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.86,
          "priceAvg30d": 8.81
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.86,
          "priceAvg30d": 8.54
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.45,
          "priceAvg30d": 8.11
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.86,
          "priceAvg30d": 7.34
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 5.45,
          "priceAvg30d": 7.18
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 4.69,
          "priceAvg30d": 6.79
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.37,
          "priceAvg30d": 6.49
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 4.37,
          "priceAvg30d": 6.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 4.01,
          "priceAvg30d": 6.21
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 4.1,
          "priceAvg30d": 6.43
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.86,
          "priceAvg30d": 7.08
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.86,
          "priceAvg30d": 8.07
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.5,
          "priceAvg30d": 8.86
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.86,
          "priceAvg30d": 9.94
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.5,
          "priceAvg30d": 11.3
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.1,
          "priceAvg30d": 13.55
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.06,
          "priceAvg30d": 14.57
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.67,
          "priceAvg30d": 17.59
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.33,
          "priceAvg30d": 19.18
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.54,
          "priceAvg30d": 20.43
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.64,
          "priceAvg30d": 19.89
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.0,
          "priceAvg30d": 19.93
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.1,
          "priceAvg30d": 19.14
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.82,
          "priceAvg30d": 17.96
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.0,
          "priceAvg30d": 17.99
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.0,
          "priceAvg30d": 17.38
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 17.39
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.62,
          "priceAvg30d": 16.12
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.62,
          "priceAvg30d": 16.15
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.68,
          "priceAvg30d": 14.5
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 12.68,
          "priceAvg30d": 14.32
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.5,
          "priceAvg30d": 11.14
        }
      ],
      "avg": 12.23,
      "max": 21.54,
      "maxBlock": 36,
      "min": 4.01,
      "minBlock": 25,
      "spread3h": 12.59,
      "spreadLowAvg": 5.88,
      "spreadHighAvg": 18.47,
      "avg30d": 12.37,
      "spread30dAvg": 11.52,
      "historyDays": 30
    }
  }
};
