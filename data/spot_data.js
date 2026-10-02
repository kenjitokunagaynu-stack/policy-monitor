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
  "targetDate": "2026-10-02",
  "fetchedAt": "2026-10-02T12:09:02+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 22.58,
        "priceAvg30d": 17.39
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 19.43,
        "priceAvg30d": 15.83
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 17.5,
        "priceAvg30d": 14.8
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 14.23,
        "priceAvg30d": 14.45
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 14.23,
        "priceAvg30d": 14.22
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 16.0,
        "priceAvg30d": 14.72
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 17.44,
        "priceAvg30d": 15.41
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 18.1,
        "priceAvg30d": 16.07
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 20.67,
        "priceAvg30d": 16.74
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 22.51,
        "priceAvg30d": 17.83
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 22.05,
        "priceAvg30d": 18.81
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 21.68,
        "priceAvg30d": 18.4
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 20.99,
        "priceAvg30d": 17.4
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 16.4,
        "priceAvg30d": 15.78
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 11.46,
        "priceAvg30d": 14.25
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 10.23,
        "priceAvg30d": 14.37
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 10.37,
        "priceAvg30d": 15.28
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 10.46,
        "priceAvg30d": 16.49
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 10.23,
        "priceAvg30d": 17.34
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 8.38,
        "priceAvg30d": 17.04
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 9.06,
        "priceAvg30d": 16.07
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 8.0,
        "priceAvg30d": 15.71
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 8.13,
        "priceAvg30d": 15.57
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 7.81,
        "priceAvg30d": 15.21
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 0.7,
        "priceAvg30d": 13.57
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 1.0,
        "priceAvg30d": 14.17
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 7.0,
        "priceAvg30d": 15.88
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 9.03,
        "priceAvg30d": 17.89
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 9.0,
        "priceAvg30d": 19.01
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 10.81,
        "priceAvg30d": 20.78
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 15.5,
        "priceAvg30d": 20.69
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 22.85,
        "priceAvg30d": 23.32
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 24.83,
        "priceAvg30d": 24.76
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 26.01,
        "priceAvg30d": 27.11
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 26.08,
        "priceAvg30d": 27.1
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 26.77,
        "priceAvg30d": 27.68
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 25.34,
        "priceAvg30d": 27.5
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 25.22,
        "priceAvg30d": 26.89
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 24.89,
        "priceAvg30d": 25.6
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 24.06,
        "priceAvg30d": 24.06
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 24.5,
        "priceAvg30d": 22.94
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 23.73,
        "priceAvg30d": 22.3
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 22.86,
        "priceAvg30d": 21.38
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 23.0,
        "priceAvg30d": 21.5
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 22.68,
        "priceAvg30d": 21.16
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 21.9,
        "priceAvg30d": 19.66
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 21.87,
        "priceAvg30d": 19.35
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 19.43,
        "priceAvg30d": 17.29
      }
    ],
    "avg": 17.02,
    "max": 26.77,
    "maxBlock": 36,
    "min": 0.7,
    "minBlock": 25,
    "spread3h": 18.57,
    "spreadLowAvg": 6.83,
    "spreadHighAvg": 25.39,
    "avg30d": 18.89,
    "spread30dAvg": 14.49,
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
          "price": 10.38,
          "priceAvg30d": 13.77
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.2,
          "priceAvg30d": 12.71
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.49,
          "priceAvg30d": 12.4
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.49,
          "priceAvg30d": 12.27
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.34,
          "priceAvg30d": 13.15
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.49,
          "priceAvg30d": 14.05
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.45,
          "priceAvg30d": 14.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.45,
          "priceAvg30d": 15.13
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.63,
          "priceAvg30d": 15.05
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.45,
          "priceAvg30d": 15.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.45,
          "priceAvg30d": 15.46
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.55,
          "priceAvg30d": 14.41
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 9.49,
          "priceAvg30d": 13.13
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.49,
          "priceAvg30d": 11.67
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.0,
          "priceAvg30d": 10.72
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 0.75,
          "priceAvg30d": 10.12
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 0.01,
          "priceAvg30d": 9.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 10.2
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 9.42
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 8.58
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.93
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 7.8
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 8.12
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 7.47
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.93
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 8.1
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 10.04
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 10.41
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.04,
          "priceAvg30d": 11.96
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 6.48,
          "priceAvg30d": 14.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.49,
          "priceAvg30d": 16.67
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.45,
          "priceAvg30d": 19.63
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 24.38,
          "priceAvg30d": 21.86
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 15.1,
          "priceAvg30d": 22.1
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.48,
          "priceAvg30d": 21.96
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.0,
          "priceAvg30d": 21.3
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.0,
          "priceAvg30d": 22.44
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 10.69,
          "priceAvg30d": 21.93
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 10.82,
          "priceAvg30d": 20.44
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 11.0,
          "priceAvg30d": 19.49
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 12.5,
          "priceAvg30d": 19.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.68,
          "priceAvg30d": 17.94
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.0,
          "priceAvg30d": 17.75
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.0,
          "priceAvg30d": 17.16
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.0,
          "priceAvg30d": 15.52
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.0,
          "priceAvg30d": 14.72
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.61,
          "priceAvg30d": 13.86
        }
      ],
      "avg": 8.46,
      "max": 24.38,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 17,
      "spread3h": 10.62,
      "spreadLowAvg": 3.04,
      "spreadHighAvg": 13.67,
      "avg30d": 14.08,
      "spread30dAvg": 13.16,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 23.99,
          "priceAvg30d": 18.86
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.6,
          "priceAvg30d": 17.52
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.9,
          "priceAvg30d": 16.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.49,
          "priceAvg30d": 16.32
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.34,
          "priceAvg30d": 16.41
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.5,
          "priceAvg30d": 16.63
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.67,
          "priceAvg30d": 17.82
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.84,
          "priceAvg30d": 17.98
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.08,
          "priceAvg30d": 18.16
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.5,
          "priceAvg30d": 18.36
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.73,
          "priceAvg30d": 18.74
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.21,
          "priceAvg30d": 18.34
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.02,
          "priceAvg30d": 17.13
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.0,
          "priceAvg30d": 15.95
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.96,
          "priceAvg30d": 14.58
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.9,
          "priceAvg30d": 13.19
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 7.9,
          "priceAvg30d": 10.93
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 3.1,
          "priceAvg30d": 11.07
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 11.51
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 10.94
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 10.11
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 9.92
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 9.78
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.91
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 7.72
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 8.38
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 9.92
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 11.5
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 12.11
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 3.01,
          "priceAvg30d": 14.18
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.9,
          "priceAvg30d": 16.48
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 23.81,
          "priceAvg30d": 20.56
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 27.9,
          "priceAvg30d": 23.52
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.9,
          "priceAvg30d": 27.59
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.9,
          "priceAvg30d": 27.29
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 28.33,
          "priceAvg30d": 27.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.87,
          "priceAvg30d": 27.69
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.87,
          "priceAvg30d": 27.24
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.08,
          "priceAvg30d": 26.54
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.54,
          "priceAvg30d": 24.75
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.03,
          "priceAvg30d": 23.44
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.06,
          "priceAvg30d": 22.63
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.13,
          "priceAvg30d": 21.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.19,
          "priceAvg30d": 21.71
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.16,
          "priceAvg30d": 21.7
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.55,
          "priceAvg30d": 20.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.0,
          "priceAvg30d": 20.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.61,
          "priceAvg30d": 19.46
        }
      ],
      "avg": 16.31,
      "max": 28.33,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 25.75,
      "spreadLowAvg": 2.01,
      "spreadHighAvg": 27.75,
      "avg30d": 17.52,
      "spread30dAvg": 16.53,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 23.99,
          "priceAvg30d": 20.85
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.6,
          "priceAvg30d": 20.12
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.9,
          "priceAvg30d": 19.3
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.49,
          "priceAvg30d": 19.6
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.34,
          "priceAvg30d": 19.33
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.5,
          "priceAvg30d": 19.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.67,
          "priceAvg30d": 20.14
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.84,
          "priceAvg30d": 20.36
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.08,
          "priceAvg30d": 20.75
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.5,
          "priceAvg30d": 21.03
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.73,
          "priceAvg30d": 21.3
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.21,
          "priceAvg30d": 20.97
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.02,
          "priceAvg30d": 20.28
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.65,
          "priceAvg30d": 20.3
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.63,
          "priceAvg30d": 20.41
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.09,
          "priceAvg30d": 20.79
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.68,
          "priceAvg30d": 21.46
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.64,
          "priceAvg30d": 23.84
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.79,
          "priceAvg30d": 23.99
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.65,
          "priceAvg30d": 24.19
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.3,
          "priceAvg30d": 23.23
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.02,
          "priceAvg30d": 23.56
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.68,
          "priceAvg30d": 23.66
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 21.5,
          "priceAvg30d": 23.5
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 19.43,
          "priceAvg30d": 21.7
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 19.43,
          "priceAvg30d": 22.38
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.5,
          "priceAvg30d": 23.55
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.08,
          "priceAvg30d": 24.96
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.48,
          "priceAvg30d": 25.78
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.0,
          "priceAvg30d": 27.17
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.07,
          "priceAvg30d": 25.21
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 27.46,
          "priceAvg30d": 27.37
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 27.9,
          "priceAvg30d": 29.06
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.9,
          "priceAvg30d": 30.91
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.9,
          "priceAvg30d": 30.1
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 28.33,
          "priceAvg30d": 30.33
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.87,
          "priceAvg30d": 30.18
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.87,
          "priceAvg30d": 29.97
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.08,
          "priceAvg30d": 28.74
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.54,
          "priceAvg30d": 26.91
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.03,
          "priceAvg30d": 25.36
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.06,
          "priceAvg30d": 24.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.13,
          "priceAvg30d": 23.86
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.19,
          "priceAvg30d": 24.79
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.16,
          "priceAvg30d": 24.89
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.55,
          "priceAvg30d": 23.86
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.33,
          "priceAvg30d": 23.74
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.34,
          "priceAvg30d": 21.83
        }
      ],
      "avg": 24.04,
      "max": 28.33,
      "maxBlock": 36,
      "min": 19.43,
      "minBlock": 25,
      "spread3h": 6.38,
      "spreadLowAvg": 21.37,
      "spreadHighAvg": 27.75,
      "avg30d": 23.75,
      "spread30dAvg": 11.25,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 23.99,
          "priceAvg30d": 20.8
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.6,
          "priceAvg30d": 20.19
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.9,
          "priceAvg30d": 19.31
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.49,
          "priceAvg30d": 19.28
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.34,
          "priceAvg30d": 19.06
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.5,
          "priceAvg30d": 19.23
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.67,
          "priceAvg30d": 19.77
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.84,
          "priceAvg30d": 20.2
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.08,
          "priceAvg30d": 20.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.65,
          "priceAvg30d": 20.95
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.73,
          "priceAvg30d": 21.27
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.65,
          "priceAvg30d": 21.09
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.83,
          "priceAvg30d": 20.82
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.65,
          "priceAvg30d": 20.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.63,
          "priceAvg30d": 20.0
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.09,
          "priceAvg30d": 19.98
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.68,
          "priceAvg30d": 21.43
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.64,
          "priceAvg30d": 23.03
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 17.6,
          "priceAvg30d": 23.67
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 17.62,
          "priceAvg30d": 23.51
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.29,
          "priceAvg30d": 22.64
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 16.8,
          "priceAvg30d": 22.65
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 16.0,
          "priceAvg30d": 22.62
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.0,
          "priceAvg30d": 22.45
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.52,
          "priceAvg30d": 20.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.83,
          "priceAvg30d": 21.21
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.3,
          "priceAvg30d": 23.47
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.58,
          "priceAvg30d": 25.16
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.48,
          "priceAvg30d": 25.88
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.0,
          "priceAvg30d": 26.81
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.07,
          "priceAvg30d": 26.43
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 27.46,
          "priceAvg30d": 27.99
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 27.9,
          "priceAvg30d": 28.66
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.9,
          "priceAvg30d": 30.58
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.9,
          "priceAvg30d": 30.67
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 28.33,
          "priceAvg30d": 30.8
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.87,
          "priceAvg30d": 30.56
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.87,
          "priceAvg30d": 30.06
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.08,
          "priceAvg30d": 28.65
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.54,
          "priceAvg30d": 26.88
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.03,
          "priceAvg30d": 25.86
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.06,
          "priceAvg30d": 25.21
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.13,
          "priceAvg30d": 24.3
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.19,
          "priceAvg30d": 24.79
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.16,
          "priceAvg30d": 24.78
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.55,
          "priceAvg30d": 23.69
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.33,
          "priceAvg30d": 23.64
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.34,
          "priceAvg30d": 21.95
        }
      ],
      "avg": 22.95,
      "max": 28.33,
      "maxBlock": 36,
      "min": 11.52,
      "minBlock": 25,
      "spread3h": 11.5,
      "spreadLowAvg": 16.25,
      "spreadHighAvg": 27.75,
      "avg30d": 23.62,
      "spread30dAvg": 12.85,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.4,
          "priceAvg30d": 11.5
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.06,
          "priceAvg30d": 11.69
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.06,
          "priceAvg30d": 11.97
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.81,
          "priceAvg30d": 11.8
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.06,
          "priceAvg30d": 11.69
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.77,
          "priceAvg30d": 12.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 12.62
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.1,
          "priceAvg30d": 12.79
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.38,
          "priceAvg30d": 12.57
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 17.5,
          "priceAvg30d": 13.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.95,
          "priceAvg30d": 14.33
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.38,
          "priceAvg30d": 14.41
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.38,
          "priceAvg30d": 15.28
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.81,
          "priceAvg30d": 13.21
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.23,
          "priceAvg30d": 12.54
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.31,
          "priceAvg30d": 11.65
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.0,
          "priceAvg30d": 12.67
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.0,
          "priceAvg30d": 15.6
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 5.0,
          "priceAvg30d": 18.21
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.01,
          "priceAvg30d": 18.73
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 1.01,
          "priceAvg30d": 18.2
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 1.0,
          "priceAvg30d": 18.01
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 3.01,
          "priceAvg30d": 17.81
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.0,
          "priceAvg30d": 17.59
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.02,
          "priceAvg30d": 15.04
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.7,
          "priceAvg30d": 15.81
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.01,
          "priceAvg30d": 18.03
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.31,
          "priceAvg30d": 19.7
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.0,
          "priceAvg30d": 19.73
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.55,
          "priceAvg30d": 20.72
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.44,
          "priceAvg30d": 20.18
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 17.94,
          "priceAvg30d": 21.19
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.55,
          "priceAvg30d": 21.11
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.09,
          "priceAvg30d": 22.5
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.5,
          "priceAvg30d": 22.55
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 17.49,
          "priceAvg30d": 23.72
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.48,
          "priceAvg30d": 23.19
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.3,
          "priceAvg30d": 23.1
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.44,
          "priceAvg30d": 21.35
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.95,
          "priceAvg30d": 19.5
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.95,
          "priceAvg30d": 18.77
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.95,
          "priceAvg30d": 18.09
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.38,
          "priceAvg30d": 17.78
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.95,
          "priceAvg30d": 16.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.02,
          "priceAvg30d": 16.37
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.81,
          "priceAvg30d": 14.97
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.1,
          "priceAvg30d": 14.35
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 11.94
        }
      ],
      "avg": 11.91,
      "max": 19.55,
      "maxBlock": 33,
      "min": 0.02,
      "minBlock": 25,
      "spread3h": 13.0,
      "spreadLowAvg": 3.67,
      "spreadHighAvg": 16.67,
      "avg30d": 16.6,
      "spread30dAvg": 11.14,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.4,
          "priceAvg30d": 11.42
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.06,
          "priceAvg30d": 11.68
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.06,
          "priceAvg30d": 11.97
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.81,
          "priceAvg30d": 11.8
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.06,
          "priceAvg30d": 11.69
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.77,
          "priceAvg30d": 12.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 12.62
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.1,
          "priceAvg30d": 12.79
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.38,
          "priceAvg30d": 12.57
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 17.5,
          "priceAvg30d": 13.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.95,
          "priceAvg30d": 14.33
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.38,
          "priceAvg30d": 14.4
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.38,
          "priceAvg30d": 15.28
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.81,
          "priceAvg30d": 13.18
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.23,
          "priceAvg30d": 12.54
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.31,
          "priceAvg30d": 11.49
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.0,
          "priceAvg30d": 11.91
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.0,
          "priceAvg30d": 14.0
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 5.0,
          "priceAvg30d": 16.85
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.01,
          "priceAvg30d": 17.1
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 1.01,
          "priceAvg30d": 16.64
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 1.0,
          "priceAvg30d": 16.63
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 3.01,
          "priceAvg30d": 16.94
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.0,
          "priceAvg30d": 16.15
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.02,
          "priceAvg30d": 14.09
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.7,
          "priceAvg30d": 14.65
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.01,
          "priceAvg30d": 16.97
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.31,
          "priceAvg30d": 19.07
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.0,
          "priceAvg30d": 18.86
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.55,
          "priceAvg30d": 19.79
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.44,
          "priceAvg30d": 19.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 17.94,
          "priceAvg30d": 20.0
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.55,
          "priceAvg30d": 20.6
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.09,
          "priceAvg30d": 22.14
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.5,
          "priceAvg30d": 22.41
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 17.49,
          "priceAvg30d": 23.59
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.48,
          "priceAvg30d": 23.07
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.3,
          "priceAvg30d": 22.97
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.44,
          "priceAvg30d": 21.22
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.95,
          "priceAvg30d": 19.37
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.95,
          "priceAvg30d": 18.77
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.95,
          "priceAvg30d": 18.09
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.38,
          "priceAvg30d": 17.78
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.95,
          "priceAvg30d": 16.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.02,
          "priceAvg30d": 16.37
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.81,
          "priceAvg30d": 14.97
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.1,
          "priceAvg30d": 14.35
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 11.94
        }
      ],
      "avg": 11.91,
      "max": 19.55,
      "maxBlock": 33,
      "min": 0.02,
      "minBlock": 25,
      "spread3h": 13.0,
      "spreadLowAvg": 3.67,
      "spreadHighAvg": 16.67,
      "avg30d": 16.17,
      "spread30dAvg": 10.95,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.4,
          "priceAvg30d": 11.42
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.06,
          "priceAvg30d": 11.68
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.06,
          "priceAvg30d": 11.97
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.81,
          "priceAvg30d": 11.8
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.06,
          "priceAvg30d": 11.67
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.77,
          "priceAvg30d": 12.04
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 12.35
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.1,
          "priceAvg30d": 12.79
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.38,
          "priceAvg30d": 12.45
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 17.5,
          "priceAvg30d": 13.51
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.95,
          "priceAvg30d": 14.31
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.38,
          "priceAvg30d": 14.35
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.38,
          "priceAvg30d": 15.2
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.81,
          "priceAvg30d": 12.92
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.23,
          "priceAvg30d": 12.2
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.31,
          "priceAvg30d": 11.12
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.0,
          "priceAvg30d": 11.3
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.0,
          "priceAvg30d": 12.06
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 12.65
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 12.39
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 12.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 12.54
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 12.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 11.77
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 10.73
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
          "price": 0.01,
          "priceAvg30d": 12.54
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 13.83
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 13.27
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 14.0
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.38,
          "priceAvg30d": 15.03
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.23,
          "priceAvg30d": 16.89
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.34,
          "priceAvg30d": 17.97
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.02,
          "priceAvg30d": 20.67
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.48,
          "priceAvg30d": 21.93
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 17.49,
          "priceAvg30d": 23.18
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.48,
          "priceAvg30d": 22.67
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.3,
          "priceAvg30d": 22.49
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.44,
          "priceAvg30d": 21.1
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.95,
          "priceAvg30d": 19.37
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.95,
          "priceAvg30d": 18.77
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.95,
          "priceAvg30d": 18.09
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.38,
          "priceAvg30d": 17.78
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.95,
          "priceAvg30d": 16.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.02,
          "priceAvg30d": 16.34
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.81,
          "priceAvg30d": 14.96
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.1,
          "priceAvg30d": 14.35
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 11.94
        }
      ],
      "avg": 10.25,
      "max": 17.5,
      "maxBlock": 10,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 13.72,
      "spreadLowAvg": 2.56,
      "spreadHighAvg": 16.28,
      "avg30d": 14.68,
      "spread30dAvg": 11.47,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.4,
          "priceAvg30d": 10.97
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.06,
          "priceAvg30d": 10.88
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.06,
          "priceAvg30d": 11.01
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.81,
          "priceAvg30d": 10.91
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.06,
          "priceAvg30d": 10.68
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.77,
          "priceAvg30d": 11.09
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 11.23
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 8.24,
          "priceAvg30d": 11.85
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 5.01,
          "priceAvg30d": 11.17
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.14,
          "priceAvg30d": 12.33
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.28,
          "priceAvg30d": 13.25
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.21,
          "priceAvg30d": 13.3
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.14,
          "priceAvg30d": 13.86
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 8.19,
          "priceAvg30d": 11.39
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.55,
          "priceAvg30d": 10.74
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.31,
          "priceAvg30d": 9.91
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.0,
          "priceAvg30d": 9.95
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.0,
          "priceAvg30d": 10.88
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 10.68
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 9.97
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 10.3
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 10.12
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 9.86
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 9.86
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 9.29
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 9.37
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 10.72
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 12.34
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 11.92
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 12.07
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.38,
          "priceAvg30d": 12.75
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.55,
          "priceAvg30d": 14.16
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.34,
          "priceAvg30d": 14.67
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.26,
          "priceAvg30d": 17.07
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 6.8,
          "priceAvg30d": 17.66
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 8.21,
          "priceAvg30d": 19.9
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 8.21,
          "priceAvg30d": 20.21
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 8.14,
          "priceAvg30d": 19.91
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 8.14,
          "priceAvg30d": 17.77
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 3.0,
          "priceAvg30d": 15.05
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 0.02,
          "priceAvg30d": 15.2
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 0.01,
          "priceAvg30d": 14.37
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 0.02,
          "priceAvg30d": 14.15
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 0.01,
          "priceAvg30d": 13.15
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 0.01,
          "priceAvg30d": 13.25
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 0.01,
          "priceAvg30d": 12.48
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 0.01,
          "priceAvg30d": 12.51
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 0.01,
          "priceAvg30d": 10.92
        }
      ],
      "avg": 5.12,
      "max": 16.4,
      "maxBlock": 1,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 11.83,
      "spreadLowAvg": 2.56,
      "spreadHighAvg": 14.39,
      "avg30d": 12.65,
      "spread30dAvg": 10.78,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.4,
          "priceAvg30d": 10.86
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.06,
          "priceAvg30d": 11.01
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.06,
          "priceAvg30d": 10.84
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.81,
          "priceAvg30d": 10.58
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.06,
          "priceAvg30d": 10.33
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.77,
          "priceAvg30d": 10.56
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 10.75
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.1,
          "priceAvg30d": 11.35
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.38,
          "priceAvg30d": 11.16
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 17.5,
          "priceAvg30d": 12.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.95,
          "priceAvg30d": 13.36
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.38,
          "priceAvg30d": 13.59
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.38,
          "priceAvg30d": 14.56
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.81,
          "priceAvg30d": 11.87
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.23,
          "priceAvg30d": 10.87
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.31,
          "priceAvg30d": 9.94
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.0,
          "priceAvg30d": 10.51
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.0,
          "priceAvg30d": 11.03
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 11.42
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 10.87
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 10.66
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 10.24
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 10.0
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 9.82
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 9.27
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 9.38
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 10.28
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 11.43
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 12.05
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 13.23
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.38,
          "priceAvg30d": 14.88
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.23,
          "priceAvg30d": 16.68
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.34,
          "priceAvg30d": 17.97
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.02,
          "priceAvg30d": 20.67
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.48,
          "priceAvg30d": 21.93
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 17.49,
          "priceAvg30d": 23.18
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.48,
          "priceAvg30d": 22.67
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.3,
          "priceAvg30d": 22.49
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.44,
          "priceAvg30d": 21.1
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.95,
          "priceAvg30d": 19.37
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.95,
          "priceAvg30d": 18.77
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.95,
          "priceAvg30d": 18.09
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.38,
          "priceAvg30d": 17.77
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.95,
          "priceAvg30d": 16.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.02,
          "priceAvg30d": 16.23
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.81,
          "priceAvg30d": 14.85
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.1,
          "priceAvg30d": 14.22
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 11.32
        }
      ],
      "avg": 10.25,
      "max": 17.5,
      "maxBlock": 10,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 13.72,
      "spreadLowAvg": 2.56,
      "spreadHighAvg": 16.28,
      "avg30d": 13.81,
      "spread30dAvg": 12.31,
      "historyDays": 30
    }
  }
};
