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
  "targetDate": "2026-10-01",
  "fetchedAt": "2026-10-01T12:06:51+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 20.8,
        "priceAvg30d": 17.44
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 15.0,
        "priceAvg30d": 16.04
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 12.06,
        "priceAvg30d": 15.08
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 12.06,
        "priceAvg30d": 14.71
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 11.98,
        "priceAvg30d": 14.51
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 12.06,
        "priceAvg30d": 14.99
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 14.23,
        "priceAvg30d": 15.62
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 17.38,
        "priceAvg30d": 16.18
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 20.1,
        "priceAvg30d": 16.74
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 22.55,
        "priceAvg30d": 17.77
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 21.54,
        "priceAvg30d": 18.79
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 22.33,
        "priceAvg30d": 18.36
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 22.33,
        "priceAvg30d": 17.36
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 17.57,
        "priceAvg30d": 15.87
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 10.81,
        "priceAvg30d": 14.56
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 8.78,
        "priceAvg30d": 14.76
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 10.23,
        "priceAvg30d": 15.65
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 10.1,
        "priceAvg30d": 16.91
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 9.5,
        "priceAvg30d": 17.78
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 8.27,
        "priceAvg30d": 17.51
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 8.34,
        "priceAvg30d": 16.51
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 5.36,
        "priceAvg30d": 16.25
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 8.43,
        "priceAvg30d": 16.02
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 8.17,
        "priceAvg30d": 15.67
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 3.01,
        "priceAvg30d": 14.1
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 6.6,
        "priceAvg30d": 14.58
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 10.34,
        "priceAvg30d": 16.26
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 11.79,
        "priceAvg30d": 18.26
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 12.13,
        "priceAvg30d": 19.43
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 19.99,
        "priceAvg30d": 21.11
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 22.11,
        "priceAvg30d": 20.89
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 25.62,
        "priceAvg30d": 23.5
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 27.94,
        "priceAvg30d": 24.92
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 31.5,
        "priceAvg30d": 27.43
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 34.66,
        "priceAvg30d": 27.33
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 30.93,
        "priceAvg30d": 28.03
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 30.83,
        "priceAvg30d": 27.84
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 29.43,
        "priceAvg30d": 27.11
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 27.57,
        "priceAvg30d": 25.81
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 27.53,
        "priceAvg30d": 24.18
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 26.8,
        "priceAvg30d": 23.0
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 25.33,
        "priceAvg30d": 22.29
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 24.42,
        "priceAvg30d": 21.37
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 24.22,
        "priceAvg30d": 21.64
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 24.33,
        "priceAvg30d": 21.19
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 23.21,
        "priceAvg30d": 19.69
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 22.78,
        "priceAvg30d": 19.37
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 21.19,
        "priceAvg30d": 17.33
      }
    ],
    "avg": 18.21,
    "max": 34.66,
    "maxBlock": 35,
    "min": 3.01,
    "minBlock": 25,
    "spread3h": 20.93,
    "spreadLowAvg": 8.45,
    "spreadHighAvg": 29.38,
    "avg30d": 19.12,
    "spread30dAvg": 14.3,
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
          "price": 24.01,
          "priceAvg30d": 13.36
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.48,
          "priceAvg30d": 12.69
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.35,
          "priceAvg30d": 12.39
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.57,
          "priceAvg30d": 12.25
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.58,
          "priceAvg30d": 13.12
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.75,
          "priceAvg30d": 14.03
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.8,
          "priceAvg30d": 14.9
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.81,
          "priceAvg30d": 15.18
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.67,
          "priceAvg30d": 15.14
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.84,
          "priceAvg30d": 15.41
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.8,
          "priceAvg30d": 15.51
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.15,
          "priceAvg30d": 14.26
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.0,
          "priceAvg30d": 13.03
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.8,
          "priceAvg30d": 11.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.45,
          "priceAvg30d": 10.68
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.1,
          "priceAvg30d": 10.1
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.42,
          "priceAvg30d": 9.5
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.53,
          "priceAvg30d": 10.22
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.49,
          "priceAvg30d": 9.44
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.43,
          "priceAvg30d": 8.56
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.49,
          "priceAvg30d": 7.93
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.49,
          "priceAvg30d": 7.81
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.49,
          "priceAvg30d": 8.12
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.49,
          "priceAvg30d": 7.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.49,
          "priceAvg30d": 6.93
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.49,
          "priceAvg30d": 6.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.49,
          "priceAvg30d": 8.1
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.83,
          "priceAvg30d": 10.08
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.78,
          "priceAvg30d": 10.41
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 14.14,
          "priceAvg30d": 11.82
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.42,
          "priceAvg30d": 13.8
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.83,
          "priceAvg30d": 16.27
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 19.25
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.84,
          "priceAvg30d": 21.3
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 26.93,
          "priceAvg30d": 21.87
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.13,
          "priceAvg30d": 21.56
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.0,
          "priceAvg30d": 21.44
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 31.15,
          "priceAvg30d": 22.08
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 26.93,
          "priceAvg30d": 21.65
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.76,
          "priceAvg30d": 20.04
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.17,
          "priceAvg30d": 19.68
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.0,
          "priceAvg30d": 19.47
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.41,
          "priceAvg30d": 18.2
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.93,
          "priceAvg30d": 17.45
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.49,
          "priceAvg30d": 17.17
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.0,
          "priceAvg30d": 15.51
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.0,
          "priceAvg30d": 14.66
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.39,
          "priceAvg30d": 13.83
        }
      ],
      "avg": 15.24,
      "max": 36.84,
      "maxBlock": 34,
      "min": 8.83,
      "minBlock": 28,
      "spread3h": 13.92,
      "spreadLowAvg": 12.47,
      "spreadHighAvg": 26.39,
      "avg30d": 14.01,
      "spread30dAvg": 13.02,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.01,
          "priceAvg30d": 18.8
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.23,
          "priceAvg30d": 17.39
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.99,
          "priceAvg30d": 16.22
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.11,
          "priceAvg30d": 15.88
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.93,
          "priceAvg30d": 16.08
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.81,
          "priceAvg30d": 16.23
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.61,
          "priceAvg30d": 17.71
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.61,
          "priceAvg30d": 17.87
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.0,
          "priceAvg30d": 18.04
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.58,
          "priceAvg30d": 18.24
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.55,
          "priceAvg30d": 18.6
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.73,
          "priceAvg30d": 18.15
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.0,
          "priceAvg30d": 16.96
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.36,
          "priceAvg30d": 15.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 21.3,
          "priceAvg30d": 14.22
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.1,
          "priceAvg30d": 13.2
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.42,
          "priceAvg30d": 10.89
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.53,
          "priceAvg30d": 11.09
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.59,
          "priceAvg30d": 11.55
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 7.87,
          "priceAvg30d": 11.01
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.43,
          "priceAvg30d": 10.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 4.37,
          "priceAvg30d": 10.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 7.67,
          "priceAvg30d": 9.84
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.56,
          "priceAvg30d": 9.01
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.89,
          "priceAvg30d": 7.84
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 7.81,
          "priceAvg30d": 8.43
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.86,
          "priceAvg30d": 9.94
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.83,
          "priceAvg30d": 11.54
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.78,
          "priceAvg30d": 12.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.55,
          "priceAvg30d": 13.8
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.73,
          "priceAvg30d": 16.15
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.83,
          "priceAvg30d": 20.21
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.31,
          "priceAvg30d": 23.21
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.84,
          "priceAvg30d": 27.18
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.78,
          "priceAvg30d": 26.85
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.09,
          "priceAvg30d": 27.47
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.3,
          "priceAvg30d": 27.35
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.0,
          "priceAvg30d": 26.98
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.16,
          "priceAvg30d": 26.24
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.76,
          "priceAvg30d": 24.42
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.1,
          "priceAvg30d": 23.2
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.31,
          "priceAvg30d": 22.4
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.89,
          "priceAvg30d": 21.48
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.06,
          "priceAvg30d": 21.55
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.0,
          "priceAvg30d": 21.55
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.56,
          "priceAvg30d": 20.42
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.9,
          "priceAvg30d": 20.53
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.75,
          "priceAvg30d": 19.37
        }
      ],
      "avg": 21.47,
      "max": 36.84,
      "maxBlock": 34,
      "min": 4.37,
      "minBlock": 22,
      "spread3h": 25.17,
      "spreadLowAvg": 7.5,
      "spreadHighAvg": 32.67,
      "avg30d": 17.35,
      "spread30dAvg": 16.14,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.01,
          "priceAvg30d": 20.79
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.23,
          "priceAvg30d": 20.06
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.99,
          "priceAvg30d": 19.23
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.11,
          "priceAvg30d": 19.51
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.93,
          "priceAvg30d": 19.28
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.81,
          "priceAvg30d": 19.47
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.61,
          "priceAvg30d": 20.06
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.61,
          "priceAvg30d": 20.28
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.0,
          "priceAvg30d": 20.64
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.58,
          "priceAvg30d": 20.91
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.55,
          "priceAvg30d": 21.18
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.73,
          "priceAvg30d": 20.86
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.0,
          "priceAvg30d": 20.19
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.36,
          "priceAvg30d": 20.23
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.09,
          "priceAvg30d": 20.38
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.82,
          "priceAvg30d": 20.81
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.5,
          "priceAvg30d": 21.69
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.5,
          "priceAvg30d": 24.01
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 15.0,
          "priceAvg30d": 24.27
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.79,
          "priceAvg30d": 24.59
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.1,
          "priceAvg30d": 23.68
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.79,
          "priceAvg30d": 24.05
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.4,
          "priceAvg30d": 24.1
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.28,
          "priceAvg30d": 23.93
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.89,
          "priceAvg30d": 22.24
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.01,
          "priceAvg30d": 22.83
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.5,
          "priceAvg30d": 23.77
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.59,
          "priceAvg30d": 25.15
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.18,
          "priceAvg30d": 26.01
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.66,
          "priceAvg30d": 27.36
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.73,
          "priceAvg30d": 25.17
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.83,
          "priceAvg30d": 27.28
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.31,
          "priceAvg30d": 28.96
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.84,
          "priceAvg30d": 30.77
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.78,
          "priceAvg30d": 29.84
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.09,
          "priceAvg30d": 30.18
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.3,
          "priceAvg30d": 30.06
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.0,
          "priceAvg30d": 29.96
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.16,
          "priceAvg30d": 28.64
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.76,
          "priceAvg30d": 26.83
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.1,
          "priceAvg30d": 25.21
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.31,
          "priceAvg30d": 24.62
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.89,
          "priceAvg30d": 23.72
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.06,
          "priceAvg30d": 24.84
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.0,
          "priceAvg30d": 24.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.56,
          "priceAvg30d": 23.76
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.9,
          "priceAvg30d": 23.65
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.75,
          "priceAvg30d": 21.75
        }
      ],
      "avg": 23.42,
      "max": 36.84,
      "maxBlock": 34,
      "min": 5.89,
      "minBlock": 25,
      "spread3h": 19.24,
      "spreadLowAvg": 13.43,
      "spreadHighAvg": 32.67,
      "avg30d": 23.78,
      "spread30dAvg": 10.81,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.29,
          "priceAvg30d": 20.73
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.14,
          "priceAvg30d": 20.1
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.99,
          "priceAvg30d": 19.24
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.11,
          "priceAvg30d": 19.19
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.93,
          "priceAvg30d": 19.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.72,
          "priceAvg30d": 19.15
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.61,
          "priceAvg30d": 19.69
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.26,
          "priceAvg30d": 20.09
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.0,
          "priceAvg30d": 20.48
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.58,
          "priceAvg30d": 20.83
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.55,
          "priceAvg30d": 21.16
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.73,
          "priceAvg30d": 20.97
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.69,
          "priceAvg30d": 20.7
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.38,
          "priceAvg30d": 20.45
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.09,
          "priceAvg30d": 19.96
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.82,
          "priceAvg30d": 20.0
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.5,
          "priceAvg30d": 21.66
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.5,
          "priceAvg30d": 23.2
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 15.0,
          "priceAvg30d": 23.97
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.79,
          "priceAvg30d": 23.93
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.1,
          "priceAvg30d": 23.1
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.79,
          "priceAvg30d": 23.16
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.4,
          "priceAvg30d": 23.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.28,
          "priceAvg30d": 22.88
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.89,
          "priceAvg30d": 21.15
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.01,
          "priceAvg30d": 21.66
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.5,
          "priceAvg30d": 23.72
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.59,
          "priceAvg30d": 25.44
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.66,
          "priceAvg30d": 26.06
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.06,
          "priceAvg30d": 26.93
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.29,
          "priceAvg30d": 26.52
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.03,
          "priceAvg30d": 28.07
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.31,
          "priceAvg30d": 29.12
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.84,
          "priceAvg30d": 31.13
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.78,
          "priceAvg30d": 31.21
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.09,
          "priceAvg30d": 31.37
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.3,
          "priceAvg30d": 31.16
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.9,
          "priceAvg30d": 30.33
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.16,
          "priceAvg30d": 28.83
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.76,
          "priceAvg30d": 27.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.5,
          "priceAvg30d": 26.03
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.67,
          "priceAvg30d": 25.37
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.89,
          "priceAvg30d": 24.44
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.06,
          "priceAvg30d": 24.84
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.0,
          "priceAvg30d": 24.7
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.56,
          "priceAvg30d": 23.59
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.15,
          "priceAvg30d": 23.55
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.75,
          "priceAvg30d": 21.86
        }
      ],
      "avg": 23.75,
      "max": 36.84,
      "maxBlock": 34,
      "min": 5.89,
      "minBlock": 25,
      "spread3h": 20.2,
      "spreadLowAvg": 13.43,
      "spreadHighAvg": 33.63,
      "avg30d": 23.77,
      "spread30dAvg": 13.04,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.99,
          "priceAvg30d": 11.76
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.63,
          "priceAvg30d": 12.03
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.46,
          "priceAvg30d": 12.22
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.34,
          "priceAvg30d": 12.0
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.87,
          "priceAvg30d": 11.91
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.46,
          "priceAvg30d": 12.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.81,
          "priceAvg30d": 12.79
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.97,
          "priceAvg30d": 12.92
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.06,
          "priceAvg30d": 12.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.4,
          "priceAvg30d": 13.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.4,
          "priceAvg30d": 14.38
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.38,
          "priceAvg30d": 14.52
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.5,
          "priceAvg30d": 15.39
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.04,
          "priceAvg30d": 13.22
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.34,
          "priceAvg30d": 12.74
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 12.05
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.77,
          "priceAvg30d": 13.12
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.08,
          "priceAvg30d": 16.05
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 14.5,
          "priceAvg30d": 18.53
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.18,
          "priceAvg30d": 19.21
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.1,
          "priceAvg30d": 18.66
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.79,
          "priceAvg30d": 18.52
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.4,
          "priceAvg30d": 18.25
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.28,
          "priceAvg30d": 18.02
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.89,
          "priceAvg30d": 15.59
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.01,
          "priceAvg30d": 16.26
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.5,
          "priceAvg30d": 18.28
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.59,
          "priceAvg30d": 19.98
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.66,
          "priceAvg30d": 19.92
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.06,
          "priceAvg30d": 20.83
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.29,
          "priceAvg30d": 20.27
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.03,
          "priceAvg30d": 21.27
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.31,
          "priceAvg30d": 21.57
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.84,
          "priceAvg30d": 23.04
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.78,
          "priceAvg30d": 23.09
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.09,
          "priceAvg30d": 24.29
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.3,
          "priceAvg30d": 23.78
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.9,
          "priceAvg30d": 23.37
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.16,
          "priceAvg30d": 21.53
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.0,
          "priceAvg30d": 19.71
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.5,
          "priceAvg30d": 18.94
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.67,
          "priceAvg30d": 18.25
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.99,
          "priceAvg30d": 17.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.09,
          "priceAvg30d": 16.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.99,
          "priceAvg30d": 16.59
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.5,
          "priceAvg30d": 15.17
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.49,
          "priceAvg30d": 14.55
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.4,
          "priceAvg30d": 12.13
        }
      ],
      "avg": 18.66,
      "max": 36.84,
      "maxBlock": 34,
      "min": 5.89,
      "minBlock": 25,
      "spread3h": 20.2,
      "spreadLowAvg": 13.43,
      "spreadHighAvg": 33.63,
      "avg30d": 16.88,
      "spread30dAvg": 11.49,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.99,
          "priceAvg30d": 11.69
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.63,
          "priceAvg30d": 12.02
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.46,
          "priceAvg30d": 12.22
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.34,
          "priceAvg30d": 12.0
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.87,
          "priceAvg30d": 11.91
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.46,
          "priceAvg30d": 12.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.81,
          "priceAvg30d": 12.79
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.97,
          "priceAvg30d": 12.92
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.06,
          "priceAvg30d": 12.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.4,
          "priceAvg30d": 13.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.4,
          "priceAvg30d": 14.38
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.38,
          "priceAvg30d": 14.51
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.5,
          "priceAvg30d": 15.39
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.04,
          "priceAvg30d": 13.19
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.34,
          "priceAvg30d": 12.74
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 11.88
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.77,
          "priceAvg30d": 12.36
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.08,
          "priceAvg30d": 14.46
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 14.5,
          "priceAvg30d": 17.16
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.18,
          "priceAvg30d": 17.58
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.1,
          "priceAvg30d": 17.1
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.79,
          "priceAvg30d": 17.14
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.4,
          "priceAvg30d": 17.38
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.28,
          "priceAvg30d": 16.59
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.89,
          "priceAvg30d": 14.64
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.01,
          "priceAvg30d": 15.1
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.5,
          "priceAvg30d": 17.22
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.59,
          "priceAvg30d": 19.35
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.66,
          "priceAvg30d": 19.05
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.06,
          "priceAvg30d": 19.86
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.29,
          "priceAvg30d": 19.11
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.03,
          "priceAvg30d": 20.09
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.31,
          "priceAvg30d": 21.05
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.84,
          "priceAvg30d": 22.68
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.78,
          "priceAvg30d": 22.95
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.09,
          "priceAvg30d": 24.16
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.3,
          "priceAvg30d": 23.66
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.9,
          "priceAvg30d": 23.24
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.16,
          "priceAvg30d": 21.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.0,
          "priceAvg30d": 19.58
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.5,
          "priceAvg30d": 18.94
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.67,
          "priceAvg30d": 18.25
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.99,
          "priceAvg30d": 17.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.09,
          "priceAvg30d": 16.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.99,
          "priceAvg30d": 16.59
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.5,
          "priceAvg30d": 15.17
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.49,
          "priceAvg30d": 14.55
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.4,
          "priceAvg30d": 12.13
        }
      ],
      "avg": 18.66,
      "max": 36.84,
      "maxBlock": 34,
      "min": 5.89,
      "minBlock": 25,
      "spread3h": 20.2,
      "spreadLowAvg": 13.43,
      "spreadHighAvg": 33.63,
      "avg30d": 16.45,
      "spread30dAvg": 11.3,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.99,
          "priceAvg30d": 11.69
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.63,
          "priceAvg30d": 12.02
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.46,
          "priceAvg30d": 12.22
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.34,
          "priceAvg30d": 12.0
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.87,
          "priceAvg30d": 11.89
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.46,
          "priceAvg30d": 12.24
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.81,
          "priceAvg30d": 12.53
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.97,
          "priceAvg30d": 12.92
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.06,
          "priceAvg30d": 12.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.4,
          "priceAvg30d": 13.51
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.4,
          "priceAvg30d": 14.36
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.38,
          "priceAvg30d": 14.46
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.5,
          "priceAvg30d": 15.31
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.04,
          "priceAvg30d": 12.93
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.34,
          "priceAvg30d": 12.41
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 11.52
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.77,
          "priceAvg30d": 11.44
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.41,
          "priceAvg30d": 12.23
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.37,
          "priceAvg30d": 12.88
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 4.34,
          "priceAvg30d": 12.61
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.73,
          "priceAvg30d": 12.8
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 4.72,
          "priceAvg30d": 12.73
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.1,
          "priceAvg30d": 12.28
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 2.5,
          "priceAvg30d": 12.06
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.7,
          "priceAvg30d": 11.07
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.0,
          "priceAvg30d": 11.28
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.7,
          "priceAvg30d": 12.95
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.15,
          "priceAvg30d": 14.29
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.38,
          "priceAvg30d": 13.42
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.03,
          "priceAvg30d": 14.22
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.01,
          "priceAvg30d": 15.7
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.81,
          "priceAvg30d": 17.65
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.5,
          "priceAvg30d": 18.88
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.18,
          "priceAvg30d": 21.53
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.5,
          "priceAvg30d": 22.62
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.09,
          "priceAvg30d": 23.75
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.3,
          "priceAvg30d": 23.26
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.9,
          "priceAvg30d": 22.76
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.16,
          "priceAvg30d": 21.28
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.0,
          "priceAvg30d": 19.58
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.5,
          "priceAvg30d": 18.94
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.67,
          "priceAvg30d": 18.25
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.99,
          "priceAvg30d": 17.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.09,
          "priceAvg30d": 16.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.99,
          "priceAvg30d": 16.56
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.5,
          "priceAvg30d": 15.16
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.49,
          "priceAvg30d": 14.55
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.4,
          "priceAvg30d": 12.13
        }
      ],
      "avg": 14.93,
      "max": 36.09,
      "maxBlock": 36,
      "min": 0.7,
      "minBlock": 25,
      "spread3h": 24.56,
      "spreadLowAvg": 5.19,
      "spreadHighAvg": 29.76,
      "avg30d": 14.96,
      "spread30dAvg": 11.85,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.99,
          "priceAvg30d": 11.23
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.63,
          "priceAvg30d": 11.22
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.46,
          "priceAvg30d": 11.26
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.34,
          "priceAvg30d": 11.11
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.87,
          "priceAvg30d": 10.9
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.46,
          "priceAvg30d": 11.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.81,
          "priceAvg30d": 11.4
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.97,
          "priceAvg30d": 11.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.06,
          "priceAvg30d": 11.3
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.4,
          "priceAvg30d": 12.33
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.4,
          "priceAvg30d": 13.31
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.38,
          "priceAvg30d": 13.4
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.5,
          "priceAvg30d": 13.97
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.04,
          "priceAvg30d": 11.4
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.34,
          "priceAvg30d": 10.95
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 10.3
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.77,
          "priceAvg30d": 10.09
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.41,
          "priceAvg30d": 11.06
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.37,
          "priceAvg30d": 10.91
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 10.25
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 10.48
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 10.29
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 10.02
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 9.99
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 9.36
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 9.47
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 11.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.29,
          "priceAvg30d": 12.82
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.38,
          "priceAvg30d": 12.07
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.03,
          "priceAvg30d": 12.29
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.01,
          "priceAvg30d": 13.41
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.81,
          "priceAvg30d": 14.92
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.5,
          "priceAvg30d": 15.59
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.18,
          "priceAvg30d": 17.94
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.5,
          "priceAvg30d": 18.34
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.09,
          "priceAvg30d": 20.47
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.3,
          "priceAvg30d": 20.8
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.9,
          "priceAvg30d": 20.18
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.16,
          "priceAvg30d": 17.95
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.0,
          "priceAvg30d": 15.26
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.5,
          "priceAvg30d": 15.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.67,
          "priceAvg30d": 14.53
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.99,
          "priceAvg30d": 14.36
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.09,
          "priceAvg30d": 13.46
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.99,
          "priceAvg30d": 13.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.5,
          "priceAvg30d": 12.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.49,
          "priceAvg30d": 12.71
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.4,
          "priceAvg30d": 11.11
        }
      ],
      "avg": 14.25,
      "max": 36.09,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 27.2,
      "spreadLowAvg": 2.55,
      "spreadHighAvg": 29.76,
      "avg30d": 12.92,
      "spread30dAvg": 11.17,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.99,
          "priceAvg30d": 11.12
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.63,
          "priceAvg30d": 11.35
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.46,
          "priceAvg30d": 11.09
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.34,
          "priceAvg30d": 10.72
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.87,
          "priceAvg30d": 10.43
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.46,
          "priceAvg30d": 10.65
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.81,
          "priceAvg30d": 10.82
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.97,
          "priceAvg30d": 11.38
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.06,
          "priceAvg30d": 11.2
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.4,
          "priceAvg30d": 12.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.4,
          "priceAvg30d": 13.41
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.38,
          "priceAvg30d": 13.7
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.5,
          "priceAvg30d": 14.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.04,
          "priceAvg30d": 11.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.34,
          "priceAvg30d": 11.07
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 10.18
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.77,
          "priceAvg30d": 10.65
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.41,
          "priceAvg30d": 11.21
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.37,
          "priceAvg30d": 11.65
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 4.34,
          "priceAvg30d": 11.09
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.73,
          "priceAvg30d": 10.67
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 4.72,
          "priceAvg30d": 10.43
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.1,
          "priceAvg30d": 10.23
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 2.5,
          "priceAvg30d": 10.1
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.7,
          "priceAvg30d": 9.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.0,
          "priceAvg30d": 9.71
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.7,
          "priceAvg30d": 10.39
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.15,
          "priceAvg30d": 11.64
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.38,
          "priceAvg30d": 12.21
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.03,
          "priceAvg30d": 13.45
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.01,
          "priceAvg30d": 15.54
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.81,
          "priceAvg30d": 17.44
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.5,
          "priceAvg30d": 18.88
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.18,
          "priceAvg30d": 21.53
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.5,
          "priceAvg30d": 22.62
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.09,
          "priceAvg30d": 23.75
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.3,
          "priceAvg30d": 23.26
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.9,
          "priceAvg30d": 22.76
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.16,
          "priceAvg30d": 21.28
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.0,
          "priceAvg30d": 19.58
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.5,
          "priceAvg30d": 18.94
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.67,
          "priceAvg30d": 18.25
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.99,
          "priceAvg30d": 17.97
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.09,
          "priceAvg30d": 16.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.99,
          "priceAvg30d": 16.45
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.5,
          "priceAvg30d": 15.02
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.49,
          "priceAvg30d": 14.33
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.4,
          "priceAvg30d": 11.26
        }
      ],
      "avg": 14.93,
      "max": 36.09,
      "maxBlock": 36,
      "min": 0.7,
      "minBlock": 25,
      "spread3h": 24.56,
      "spreadLowAvg": 5.19,
      "spreadHighAvg": 29.76,
      "avg30d": 14.06,
      "spread30dAvg": 12.69,
      "historyDays": 30
    }
  }
};
