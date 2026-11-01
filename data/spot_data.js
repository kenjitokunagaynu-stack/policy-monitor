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
  "targetDate": "2026-11-01",
  "fetchedAt": "2026-11-01T12:16:20+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 21.85,
        "priceAvg30d": 24.07
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 18.0,
        "priceAvg30d": 23.13
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 17.76,
        "priceAvg30d": 22.73
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 15.75,
        "priceAvg30d": 22.64
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 17.76,
        "priceAvg30d": 22.74
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 20.76,
        "priceAvg30d": 23.28
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 22.0,
        "priceAvg30d": 23.86
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 25.0,
        "priceAvg30d": 24.37
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 25.28,
        "priceAvg30d": 24.78
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 25.28,
        "priceAvg30d": 25.17
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 25.28,
        "priceAvg30d": 25.38
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 25.28,
        "priceAvg30d": 25.38
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 25.28,
        "priceAvg30d": 25.17
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 25.0,
        "priceAvg30d": 23.66
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 16.0,
        "priceAvg30d": 21.18
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 11.62,
        "priceAvg30d": 18.42
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 8.65,
        "priceAvg30d": 17.36
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 1.01,
        "priceAvg30d": 16.9
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 0.01,
        "priceAvg30d": 15.21
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 0.01,
        "priceAvg30d": 14.34
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 0.01,
        "priceAvg30d": 13.39
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 0.01,
        "priceAvg30d": 13.07
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 0.01,
        "priceAvg30d": 12.68
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 0.01,
        "priceAvg30d": 12.63
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 0.01,
        "priceAvg30d": 10.46
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 0.01,
        "priceAvg30d": 11.02
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 0.01,
        "priceAvg30d": 14.22
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 1.0,
        "priceAvg30d": 17.0
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 8.33,
        "priceAvg30d": 18.0
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 10.98,
        "priceAvg30d": 21.61
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 12.39,
        "priceAvg30d": 23.4
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 15.71,
        "priceAvg30d": 27.64
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 25.29,
        "priceAvg30d": 31.1
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 27.57,
        "priceAvg30d": 33.45
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 28.47,
        "priceAvg30d": 32.8
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 28.47,
        "priceAvg30d": 32.86
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 28.76,
        "priceAvg30d": 31.2
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 28.76,
        "priceAvg30d": 30.41
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 28.54,
        "priceAvg30d": 29.45
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 28.18,
        "priceAvg30d": 27.5
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 28.18,
        "priceAvg30d": 26.92
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 27.96,
        "priceAvg30d": 26.03
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 27.81,
        "priceAvg30d": 25.54
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 26.73,
        "priceAvg30d": 25.51
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 25.5,
        "priceAvg30d": 25.87
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 24.71,
        "priceAvg30d": 25.14
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 24.16,
        "priceAvg30d": 25.04
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 20.29,
        "priceAvg30d": 23.63
      }
    ],
    "avg": 17.2,
    "max": 28.76,
    "maxBlock": 37,
    "min": 0.01,
    "minBlock": 19,
    "spread3h": 24.78,
    "spreadLowAvg": 3.55,
    "spreadHighAvg": 28.33,
    "avg30d": 22.65,
    "spread30dAvg": 18.61,
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
          "price": 11.22,
          "priceAvg30d": 20.39
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.93,
          "priceAvg30d": 17.45
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.37,
          "priceAvg30d": 18.38
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.37,
          "priceAvg30d": 19.13
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.93,
          "priceAvg30d": 19.96
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.37,
          "priceAvg30d": 21.48
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.4,
          "priceAvg30d": 22.79
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.0,
          "priceAvg30d": 24.12
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.02,
          "priceAvg30d": 24.65
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.02,
          "priceAvg30d": 24.58
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.36,
          "priceAvg30d": 26.6
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.36,
          "priceAvg30d": 27.35
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.37,
          "priceAvg30d": 23.5
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.4,
          "priceAvg30d": 20.66
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.93,
          "priceAvg30d": 17.42
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.16,
          "priceAvg30d": 14.16
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.18,
          "priceAvg30d": 12.72
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 10.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 9.89
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 8.83
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.23
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 7.53
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.63
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 7.84
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.24
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 8.05
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 4.87,
          "priceAvg30d": 10.44
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.16,
          "priceAvg30d": 13.69
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.18,
          "priceAvg30d": 17.27
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.93,
          "priceAvg30d": 19.64
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.66,
          "priceAvg30d": 25.34
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.31,
          "priceAvg30d": 32.3
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.0,
          "priceAvg30d": 35.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.87,
          "priceAvg30d": 32.93
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.87,
          "priceAvg30d": 33.13
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.87,
          "priceAvg30d": 31.67
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.87,
          "priceAvg30d": 31.56
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.46,
          "priceAvg30d": 31.55
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.46,
          "priceAvg30d": 30.59
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.8,
          "priceAvg30d": 30.02
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.46,
          "priceAvg30d": 27.92
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.96,
          "priceAvg30d": 26.76
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.13,
          "priceAvg30d": 26.31
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.86,
          "priceAvg30d": 26.43
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 30.0,
          "priceAvg30d": 24.87
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.06,
          "priceAvg30d": 24.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.0,
          "priceAvg30d": 22.7
        }
      ],
      "avg": 13.92,
      "max": 32.96,
      "maxBlock": 43,
      "min": 0.01,
      "minBlock": 18,
      "spread3h": 23.23,
      "spreadLowAvg": 4.72,
      "spreadHighAvg": 27.95,
      "avg30d": 20.67,
      "spread30dAvg": 24.26,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 6.0,
          "priceAvg30d": 26.12
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 6.0,
          "priceAvg30d": 25.42
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 8.0,
          "priceAvg30d": 25.74
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 8.0,
          "priceAvg30d": 25.32
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.0,
          "priceAvg30d": 25.57
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.18,
          "priceAvg30d": 25.74
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.18,
          "priceAvg30d": 26.32
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.0,
          "priceAvg30d": 26.37
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.02,
          "priceAvg30d": 26.71
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.02,
          "priceAvg30d": 26.84
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.36,
          "priceAvg30d": 27.2
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.36,
          "priceAvg30d": 27.53
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.36,
          "priceAvg30d": 26.84
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.36,
          "priceAvg30d": 24.74
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.18,
          "priceAvg30d": 21.47
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.16,
          "priceAvg30d": 18.64
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.18,
          "priceAvg30d": 17.04
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 15.47
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 14.35
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 13.37
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 12.1
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 11.82
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 11.35
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 11.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 10.62
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
          "price": 1.01,
          "priceAvg30d": 13.71
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.16,
          "priceAvg30d": 15.78
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.16,
          "priceAvg30d": 19.11
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.18,
          "priceAvg30d": 22.35
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.18,
          "priceAvg30d": 24.87
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.66,
          "priceAvg30d": 30.56
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 14.81,
          "priceAvg30d": 34.56
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.0,
          "priceAvg30d": 36.71
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.87,
          "priceAvg30d": 35.94
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.87,
          "priceAvg30d": 35.96
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.87,
          "priceAvg30d": 34.09
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.87,
          "priceAvg30d": 33.55
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.02,
          "priceAvg30d": 32.21
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.9,
          "priceAvg30d": 30.56
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.1,
          "priceAvg30d": 29.26
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 33.06,
          "priceAvg30d": 28.08
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.96,
          "priceAvg30d": 27.63
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.22,
          "priceAvg30d": 28.38
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.92,
          "priceAvg30d": 28.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 30.53,
          "priceAvg30d": 27.27
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.06,
          "priceAvg30d": 26.49
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.0,
          "priceAvg30d": 24.66
        }
      ],
      "avg": 14.02,
      "max": 36.02,
      "maxBlock": 39,
      "min": 0.01,
      "minBlock": 18,
      "spread3h": 26.02,
      "spreadLowAvg": 4.59,
      "spreadHighAvg": 30.61,
      "avg30d": 24.07,
      "spread30dAvg": 21.64,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.41,
          "priceAvg30d": 26.82
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.47,
          "priceAvg30d": 26.24
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.47,
          "priceAvg30d": 26.52
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.47,
          "priceAvg30d": 26.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.13,
          "priceAvg30d": 26.3
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.47,
          "priceAvg30d": 26.32
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.14,
          "priceAvg30d": 26.56
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.42,
          "priceAvg30d": 26.61
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.47,
          "priceAvg30d": 26.83
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.51,
          "priceAvg30d": 26.91
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.47,
          "priceAvg30d": 27.2
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.85,
          "priceAvg30d": 27.53
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.31,
          "priceAvg30d": 27.28
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 28.54,
          "priceAvg30d": 26.1
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.57,
          "priceAvg30d": 25.42
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.63,
          "priceAvg30d": 24.77
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.05,
          "priceAvg30d": 23.49
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.0,
          "priceAvg30d": 23.26
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.73,
          "priceAvg30d": 22.49
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.65,
          "priceAvg30d": 21.6
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.64,
          "priceAvg30d": 20.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.98,
          "priceAvg30d": 19.81
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.98,
          "priceAvg30d": 19.98
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.15,
          "priceAvg30d": 20.28
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.65,
          "priceAvg30d": 19.47
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.65,
          "priceAvg30d": 20.51
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.64,
          "priceAvg30d": 22.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.9,
          "priceAvg30d": 24.78
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.28,
          "priceAvg30d": 26.24
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.59,
          "priceAvg30d": 28.42
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.33,
          "priceAvg30d": 28.56
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.08,
          "priceAvg30d": 32.39
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.23,
          "priceAvg30d": 35.27
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.02,
          "priceAvg30d": 37.12
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.02,
          "priceAvg30d": 36.35
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.02,
          "priceAvg30d": 36.46
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.02,
          "priceAvg30d": 34.52
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.02,
          "priceAvg30d": 34.09
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.02,
          "priceAvg30d": 32.79
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.9,
          "priceAvg30d": 31.12
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.1,
          "priceAvg30d": 29.84
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 33.06,
          "priceAvg30d": 28.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.96,
          "priceAvg30d": 28.03
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.22,
          "priceAvg30d": 28.89
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 31.39,
          "priceAvg30d": 29.88
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 30.53,
          "priceAvg30d": 28.47
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.06,
          "priceAvg30d": 27.87
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.98,
          "priceAvg30d": 26.41
        }
      ],
      "avg": 26.15,
      "max": 36.02,
      "maxBlock": 34,
      "min": 10.64,
      "minBlock": 27,
      "spread3h": 16.75,
      "spreadLowAvg": 16.54,
      "spreadHighAvg": 33.28,
      "avg30d": 27.14,
      "spread30dAvg": 14.65,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.39,
          "priceAvg30d": 25.91
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.32,
          "priceAvg30d": 25.25
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.0,
          "priceAvg30d": 25.14
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.0,
          "priceAvg30d": 25.0
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.0,
          "priceAvg30d": 25.13
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.0,
          "priceAvg30d": 25.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.14,
          "priceAvg30d": 25.87
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.42,
          "priceAvg30d": 26.1
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.47,
          "priceAvg30d": 26.28
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.51,
          "priceAvg30d": 26.49
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.47,
          "priceAvg30d": 26.73
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.85,
          "priceAvg30d": 26.95
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 28.7,
          "priceAvg30d": 26.62
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 28.27,
          "priceAvg30d": 25.35
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.5,
          "priceAvg30d": 23.81
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.19,
          "priceAvg30d": 21.58
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 20.36
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 20.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 20.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 19.63
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 17.74
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 17.41
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 17.09
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 17.02
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 14.67
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.04,
          "priceAvg30d": 15.24
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.04,
          "priceAvg30d": 18.51
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 21.87
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.16,
          "priceAvg30d": 23.39
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.7,
          "priceAvg30d": 25.36
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.96,
          "priceAvg30d": 26.88
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 15.61,
          "priceAvg30d": 31.41
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 13.57,
          "priceAvg30d": 34.3
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 15.0,
          "priceAvg30d": 35.41
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.51,
          "priceAvg30d": 34.91
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.81,
          "priceAvg30d": 34.99
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.12,
          "priceAvg30d": 33.58
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.12,
          "priceAvg30d": 32.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.08,
          "priceAvg30d": 32.02
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.74,
          "priceAvg30d": 30.28
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.74,
          "priceAvg30d": 28.87
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.51,
          "priceAvg30d": 27.8
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.74,
          "priceAvg30d": 27.28
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.74,
          "priceAvg30d": 27.24
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.73,
          "priceAvg30d": 28.31
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.5,
          "priceAvg30d": 27.65
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.6,
          "priceAvg30d": 27.49
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.4,
          "priceAvg30d": 26.35
        }
      ],
      "avg": 19.13,
      "max": 30.12,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 18,
      "spread3h": 22.77,
      "spreadLowAvg": 4.44,
      "spreadHighAvg": 27.21,
      "avg30d": 25.52,
      "spread30dAvg": 17.76,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.32,
          "priceAvg30d": 15.56
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.62,
          "priceAvg30d": 15.29
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.5,
          "priceAvg30d": 14.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.32,
          "priceAvg30d": 13.83
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.62,
          "priceAvg30d": 15.03
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.0,
          "priceAvg30d": 16.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.0,
          "priceAvg30d": 17.3
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.0,
          "priceAvg30d": 18.91
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.88,
          "priceAvg30d": 18.88
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.0,
          "priceAvg30d": 20.28
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.29,
          "priceAvg30d": 19.73
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.86,
          "priceAvg30d": 19.19
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.36,
          "priceAvg30d": 19.01
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 15.56,
          "priceAvg30d": 17.72
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.5,
          "priceAvg30d": 17.1
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.19,
          "priceAvg30d": 15.37
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 17.15
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 18.41
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 18.7
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 18.25
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 16.68
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 16.28
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 16.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 16.59
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 13.01
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.04,
          "priceAvg30d": 13.18
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.04,
          "priceAvg30d": 16.66
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 19.89
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.16,
          "priceAvg30d": 20.56
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.7,
          "priceAvg30d": 22.26
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.96,
          "priceAvg30d": 23.15
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 15.61,
          "priceAvg30d": 26.71
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 13.57,
          "priceAvg30d": 27.32
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 15.0,
          "priceAvg30d": 28.87
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.28,
          "priceAvg30d": 27.09
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.95,
          "priceAvg30d": 27.33
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.95,
          "priceAvg30d": 26.34
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.88,
          "priceAvg30d": 26.46
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.28,
          "priceAvg30d": 26.0
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.71,
          "priceAvg30d": 24.02
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.5,
          "priceAvg30d": 24.1
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 15.71,
          "priceAvg30d": 22.93
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 15.71,
          "priceAvg30d": 22.48
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.71,
          "priceAvg30d": 21.81
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.3,
          "priceAvg30d": 21.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.32,
          "priceAvg30d": 19.14
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.13,
          "priceAvg30d": 19.22
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.09,
          "priceAvg30d": 15.06
        }
      ],
      "avg": 11.4,
      "max": 20.29,
      "maxBlock": 11,
      "min": 0.01,
      "minBlock": 18,
      "spread3h": 13.51,
      "spreadLowAvg": 4.44,
      "spreadHighAvg": 17.94,
      "avg30d": 19.73,
      "spread30dAvg": 14.61,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.32,
          "priceAvg30d": 15.31
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.62,
          "priceAvg30d": 15.18
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.5,
          "priceAvg30d": 14.54
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.32,
          "priceAvg30d": 13.73
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.62,
          "priceAvg30d": 14.46
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.0,
          "priceAvg30d": 15.93
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.0,
          "priceAvg30d": 16.95
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.0,
          "priceAvg30d": 18.47
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.88,
          "priceAvg30d": 18.41
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.0,
          "priceAvg30d": 19.64
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.29,
          "priceAvg30d": 19.16
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.86,
          "priceAvg30d": 18.73
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.36,
          "priceAvg30d": 18.94
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 15.56,
          "priceAvg30d": 17.65
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.5,
          "priceAvg30d": 16.65
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.19,
          "priceAvg30d": 14.77
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 17.05
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 18.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 18.68
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 18.25
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 16.64
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 16.23
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 16.21
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 16.53
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 13.01
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.04,
          "priceAvg30d": 13.18
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.04,
          "priceAvg30d": 16.66
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 19.88
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.16,
          "priceAvg30d": 20.14
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.7,
          "priceAvg30d": 22.1
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.96,
          "priceAvg30d": 22.97
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 15.61,
          "priceAvg30d": 26.67
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 13.57,
          "priceAvg30d": 27.32
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 15.0,
          "priceAvg30d": 28.87
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.28,
          "priceAvg30d": 27.09
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.95,
          "priceAvg30d": 26.99
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.95,
          "priceAvg30d": 26.34
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.88,
          "priceAvg30d": 26.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.28,
          "priceAvg30d": 25.66
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.71,
          "priceAvg30d": 23.84
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.5,
          "priceAvg30d": 23.91
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 15.71,
          "priceAvg30d": 22.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 15.71,
          "priceAvg30d": 22.33
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.71,
          "priceAvg30d": 21.56
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.3,
          "priceAvg30d": 20.78
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.32,
          "priceAvg30d": 18.89
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.13,
          "priceAvg30d": 19.05
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.09,
          "priceAvg30d": 14.94
        }
      ],
      "avg": 11.4,
      "max": 20.29,
      "maxBlock": 11,
      "min": 0.01,
      "minBlock": 18,
      "spread3h": 13.51,
      "spreadLowAvg": 4.44,
      "spreadHighAvg": 17.94,
      "avg30d": 19.53,
      "spread30dAvg": 14.32,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.32,
          "priceAvg30d": 14.73
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.62,
          "priceAvg30d": 15.18
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.5,
          "priceAvg30d": 14.12
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.32,
          "priceAvg30d": 13.28
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.62,
          "priceAvg30d": 13.56
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.0,
          "priceAvg30d": 14.85
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 17.74,
          "priceAvg30d": 15.58
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.36,
          "priceAvg30d": 17.5
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.88,
          "priceAvg30d": 18.29
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.0,
          "priceAvg30d": 19.42
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.29,
          "priceAvg30d": 19.13
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.86,
          "priceAvg30d": 18.72
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.36,
          "priceAvg30d": 18.87
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 15.56,
          "priceAvg30d": 17.55
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.5,
          "priceAvg30d": 13.44
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.19,
          "priceAvg30d": 11.29
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 11.52
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 11.56
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 10.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 9.55
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.38
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 7.98
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.79
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.07
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.74
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.66
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 8.16
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 9.15
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.5,
          "priceAvg30d": 11.06
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 12.43
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.19,
          "priceAvg30d": 13.45
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.57,
          "priceAvg30d": 16.65
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.13,
          "priceAvg30d": 20.18
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 15.0,
          "priceAvg30d": 23.94
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.28,
          "priceAvg30d": 23.75
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.95,
          "priceAvg30d": 24.36
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.95,
          "priceAvg30d": 23.39
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.88,
          "priceAvg30d": 22.79
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.28,
          "priceAvg30d": 22.77
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.71,
          "priceAvg30d": 21.66
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.95,
          "priceAvg30d": 22.01
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 15.71,
          "priceAvg30d": 21.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 15.71,
          "priceAvg30d": 20.9
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.71,
          "priceAvg30d": 19.99
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.62,
          "priceAvg30d": 19.68
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.32,
          "priceAvg30d": 17.64
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.13,
          "priceAvg30d": 17.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.09,
          "priceAvg30d": 13.9
        }
      ],
      "avg": 10.25,
      "max": 20.29,
      "maxBlock": 11,
      "min": 0.01,
      "minBlock": 18,
      "spread3h": 12.9,
      "spreadLowAvg": 4.44,
      "spreadHighAvg": 17.34,
      "avg30d": 15.65,
      "spread30dAvg": 14.62,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.32,
          "priceAvg30d": 11.77
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.62,
          "priceAvg30d": 11.15
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.5,
          "priceAvg30d": 10.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.32,
          "priceAvg30d": 10.34
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.62,
          "priceAvg30d": 10.36
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.0,
          "priceAvg30d": 10.49
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 17.74,
          "priceAvg30d": 10.6
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.36,
          "priceAvg30d": 12.52
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.88,
          "priceAvg30d": 13.1
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.0,
          "priceAvg30d": 14.27
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.29,
          "priceAvg30d": 14.52
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.86,
          "priceAvg30d": 14.3
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.36,
          "priceAvg30d": 13.94
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 15.56,
          "priceAvg30d": 12.15
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.5,
          "priceAvg30d": 9.34
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.19,
          "priceAvg30d": 9.05
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 9.83
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 9.64
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 8.44
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 7.53
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.35
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 5.45
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.26
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.51
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 4.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 4.74
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 6.73
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 7.2
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 8.91
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 9.9
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.01,
          "priceAvg30d": 10.21
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 2.0,
          "priceAvg30d": 11.41
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.38,
          "priceAvg30d": 12.49
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.5,
          "priceAvg30d": 16.21
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.49,
          "priceAvg30d": 17.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 13.47,
          "priceAvg30d": 17.85
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 13.47,
          "priceAvg30d": 17.44
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.88,
          "priceAvg30d": 16.81
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 13.47,
          "priceAvg30d": 15.98
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 13.47,
          "priceAvg30d": 15.05
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.49,
          "priceAvg30d": 15.46
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 12.07,
          "priceAvg30d": 14.51
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.49,
          "priceAvg30d": 14.93
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 12.07,
          "priceAvg30d": 13.53
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.62,
          "priceAvg30d": 12.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.32,
          "priceAvg30d": 11.83
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.13,
          "priceAvg30d": 12.33
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.09,
          "priceAvg30d": 10.1
        }
      ],
      "avg": 9.01,
      "max": 20.29,
      "maxBlock": 11,
      "min": 0.01,
      "minBlock": 18,
      "spread3h": 12.9,
      "spreadLowAvg": 4.44,
      "spreadHighAvg": 17.34,
      "avg30d": 11.35,
      "spread30dAvg": 12.54,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.32,
          "priceAvg30d": 14.73
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.62,
          "priceAvg30d": 14.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.5,
          "priceAvg30d": 13.65
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.32,
          "priceAvg30d": 13.05
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.62,
          "priceAvg30d": 13.26
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
          "price": 15.71,
          "priceAvg30d": 15.58
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.71,
          "priceAvg30d": 17.5
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.71,
          "priceAvg30d": 18.29
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.71,
          "priceAvg30d": 19.42
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.71,
          "priceAvg30d": 19.13
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.71,
          "priceAvg30d": 18.72
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.71,
          "priceAvg30d": 18.87
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 15.24,
          "priceAvg30d": 17.55
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.32,
          "priceAvg30d": 13.44
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.19,
          "priceAvg30d": 11.29
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 10.96
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 10.05
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 8.32
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 7.24
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.46
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.13
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.89
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.74
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.09
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.18
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 5.99
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 7.45
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 9.05
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 11.18
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.19,
          "priceAvg30d": 13.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.57,
          "priceAvg30d": 16.06
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.13,
          "priceAvg30d": 20.18
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 15.0,
          "priceAvg30d": 23.94
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.28,
          "priceAvg30d": 23.75
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.95,
          "priceAvg30d": 24.36
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.95,
          "priceAvg30d": 23.39
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.88,
          "priceAvg30d": 22.79
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.28,
          "priceAvg30d": 22.77
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.71,
          "priceAvg30d": 21.66
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.95,
          "priceAvg30d": 22.01
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 15.71,
          "priceAvg30d": 21.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 15.71,
          "priceAvg30d": 20.9
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.71,
          "priceAvg30d": 19.99
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.62,
          "priceAvg30d": 19.68
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.32,
          "priceAvg30d": 17.64
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.13,
          "priceAvg30d": 17.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.09,
          "priceAvg30d": 13.9
        }
      ],
      "avg": 9.83,
      "max": 16.95,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 18,
      "spread3h": 11.35,
      "spreadLowAvg": 4.07,
      "spreadHighAvg": 15.42,
      "avg30d": 15.08,
      "spread30dAvg": 15.73,
      "historyDays": 30
    }
  }
};
