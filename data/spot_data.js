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
  "targetDate": "2026-09-25",
  "fetchedAt": "2026-09-25T09:05:14+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 22.68,
        "priceAvg30d": 17.59
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 21.42,
        "priceAvg30d": 16.38
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 17.6,
        "priceAvg30d": 15.65
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 15.75,
        "priceAvg30d": 15.52
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 16.0,
        "priceAvg30d": 15.21
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 16.48,
        "priceAvg30d": 15.46
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 16.81,
        "priceAvg30d": 15.94
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 17.1,
        "priceAvg30d": 16.32
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 17.0,
        "priceAvg30d": 16.75
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 17.86,
        "priceAvg30d": 17.67
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 21.29,
        "priceAvg30d": 18.42
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 21.53,
        "priceAvg30d": 17.97
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 20.33,
        "priceAvg30d": 17.05
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 17.86,
        "priceAvg30d": 15.97
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 15.0,
        "priceAvg30d": 15.11
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 14.09,
        "priceAvg30d": 15.29
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 14.37,
        "priceAvg30d": 16.13
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 15.06,
        "priceAvg30d": 17.68
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 16.81,
        "priceAvg30d": 18.32
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 16.81,
        "priceAvg30d": 18.06
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 14.63,
        "priceAvg30d": 17.09
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 14.08,
        "priceAvg30d": 17.03
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 12.05,
        "priceAvg30d": 16.86
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 11.06,
        "priceAvg30d": 16.63
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 10.14,
        "priceAvg30d": 15.18
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 10.31,
        "priceAvg30d": 15.73
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 11.0,
        "priceAvg30d": 17.15
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 14.14,
        "priceAvg30d": 19.06
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 14.27,
        "priceAvg30d": 20.56
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 17.0,
        "priceAvg30d": 22.42
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 18.42,
        "priceAvg30d": 21.96
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 24.61,
        "priceAvg30d": 24.39
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 26.64,
        "priceAvg30d": 26.08
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 28.61,
        "priceAvg30d": 28.58
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 27.35,
        "priceAvg30d": 28.54
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 27.6,
        "priceAvg30d": 29.12
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 27.0,
        "priceAvg30d": 29.14
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 26.61,
        "priceAvg30d": 28.44
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 25.63,
        "priceAvg30d": 27.1
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 24.35,
        "priceAvg30d": 25.07
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 23.07,
        "priceAvg30d": 23.45
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 22.0,
        "priceAvg30d": 22.42
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 20.0,
        "priceAvg30d": 21.36
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 24.0,
        "priceAvg30d": 21.95
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 24.3,
        "priceAvg30d": 21.25
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 23.65,
        "priceAvg30d": 19.64
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 23.06,
        "priceAvg30d": 19.32
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 19.6,
        "priceAvg30d": 17.3
      }
    ],
    "avg": 19.1,
    "max": 28.61,
    "maxBlock": 34,
    "min": 10.14,
    "minBlock": 25,
    "spread3h": 13.16,
    "spreadLowAvg": 12.11,
    "spreadHighAvg": 25.27,
    "avg30d": 19.69,
    "spread30dAvg": 14.33,
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
          "price": 13.0,
          "priceAvg30d": 12.81
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.5,
          "priceAvg30d": 12.0
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.94,
          "priceAvg30d": 11.78
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.95,
          "priceAvg30d": 11.45
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.06,
          "priceAvg30d": 12.45
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.01,
          "priceAvg30d": 13.16
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.06,
          "priceAvg30d": 14.27
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.06,
          "priceAvg30d": 14.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.06,
          "priceAvg30d": 14.94
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.06,
          "priceAvg30d": 15.07
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.29,
          "priceAvg30d": 14.65
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 21.29,
          "priceAvg30d": 13.5
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.0,
          "priceAvg30d": 12.58
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.55,
          "priceAvg30d": 11.38
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.5,
          "priceAvg30d": 10.68
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.67,
          "priceAvg30d": 10.05
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.5,
          "priceAvg30d": 9.64
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 7.89,
          "priceAvg30d": 10.14
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 5.0,
          "priceAvg30d": 9.53
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 5.0,
          "priceAvg30d": 8.64
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 5.0,
          "priceAvg30d": 7.97
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 3.0,
          "priceAvg30d": 8.02
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.5,
          "priceAvg30d": 8.51
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.01,
          "priceAvg30d": 7.84
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.0,
          "priceAvg30d": 7.39
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.1,
          "priceAvg30d": 7.23
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.04,
          "priceAvg30d": 8.47
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 10.45
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.5,
          "priceAvg30d": 10.55
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.5,
          "priceAvg30d": 11.5
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.5,
          "priceAvg30d": 13.46
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.46,
          "priceAvg30d": 15.88
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.0,
          "priceAvg30d": 18.55
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.0,
          "priceAvg30d": 20.91
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.5,
          "priceAvg30d": 21.11
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.32,
          "priceAvg30d": 21.16
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.62,
          "priceAvg30d": 21.32
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.62,
          "priceAvg30d": 21.75
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.0,
          "priceAvg30d": 21.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.61,
          "priceAvg30d": 20.18
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.37,
          "priceAvg30d": 19.61
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.71,
          "priceAvg30d": 19.27
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.56,
          "priceAvg30d": 17.91
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.3,
          "priceAvg30d": 17.83
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.52,
          "priceAvg30d": 16.89
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.03,
          "priceAvg30d": 15.56
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.56,
          "priceAvg30d": 14.65
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.93,
          "priceAvg30d": 13.71
        }
      ],
      "avg": 16.94,
      "max": 32.5,
      "maxBlock": 35,
      "min": 0.04,
      "minBlock": 27,
      "spread3h": 20.4,
      "spreadLowAvg": 3.77,
      "spreadHighAvg": 24.17,
      "avg30d": 13.8,
      "spread30dAvg": 12.55,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.78,
          "priceAvg30d": 18.31
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.34,
          "priceAvg30d": 16.84
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.06,
          "priceAvg30d": 15.75
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.01,
          "priceAvg30d": 15.5
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.06,
          "priceAvg30d": 15.68
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.01,
          "priceAvg30d": 15.87
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.06,
          "priceAvg30d": 17.11
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.06,
          "priceAvg30d": 17.21
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.06,
          "priceAvg30d": 17.71
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.06,
          "priceAvg30d": 18.12
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.06,
          "priceAvg30d": 18.57
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.06,
          "priceAvg30d": 17.88
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.06,
          "priceAvg30d": 16.47
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.0,
          "priceAvg30d": 14.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.0,
          "priceAvg30d": 13.82
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.67,
          "priceAvg30d": 13.2
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.48,
          "priceAvg30d": 11.05
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 3.0,
          "priceAvg30d": 11.75
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 5.0,
          "priceAvg30d": 12.41
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 5.0,
          "priceAvg30d": 11.96
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 5.0,
          "priceAvg30d": 11.22
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 3.0,
          "priceAvg30d": 11.44
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.5,
          "priceAvg30d": 11.12
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.01,
          "priceAvg30d": 10.17
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.0,
          "priceAvg30d": 8.91
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.1,
          "priceAvg30d": 9.5
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.04,
          "priceAvg30d": 11.17
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 12.7
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.5,
          "priceAvg30d": 12.94
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.5,
          "priceAvg30d": 14.26
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 5.0,
          "priceAvg30d": 16.17
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.48,
          "priceAvg30d": 19.86
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.0,
          "priceAvg30d": 22.8
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.2,
          "priceAvg30d": 26.15
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.5,
          "priceAvg30d": 25.39
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.32,
          "priceAvg30d": 25.64
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.62,
          "priceAvg30d": 25.72
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.62,
          "priceAvg30d": 25.53
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.0,
          "priceAvg30d": 24.42
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.61,
          "priceAvg30d": 22.92
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.37,
          "priceAvg30d": 21.58
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.71,
          "priceAvg30d": 20.59
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.56,
          "priceAvg30d": 19.68
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.3,
          "priceAvg30d": 19.66
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.52,
          "priceAvg30d": 20.1
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.03,
          "priceAvg30d": 18.76
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.56,
          "priceAvg30d": 18.94
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.93,
          "priceAvg30d": 18.11
        }
      ],
      "avg": 18.48,
      "max": 34.2,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 28,
      "spread3h": 20.8,
      "spreadLowAvg": 1.52,
      "spreadHighAvg": 22.32,
      "avg30d": 16.99,
      "spread30dAvg": 14.17,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.78,
          "priceAvg30d": 19.83
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.34,
          "priceAvg30d": 19.2
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.06,
          "priceAvg30d": 18.48
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.01,
          "priceAvg30d": 18.91
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.06,
          "priceAvg30d": 18.7
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.01,
          "priceAvg30d": 18.7
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.06,
          "priceAvg30d": 19.11
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.06,
          "priceAvg30d": 19.17
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.06,
          "priceAvg30d": 19.6
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.06,
          "priceAvg30d": 19.91
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.06,
          "priceAvg30d": 20.35
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.06,
          "priceAvg30d": 20.0
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.06,
          "priceAvg30d": 19.21
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.06,
          "priceAvg30d": 19.25
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 25.06,
          "priceAvg30d": 19.39
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.06,
          "priceAvg30d": 20.07
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.7,
          "priceAvg30d": 21.34
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.0,
          "priceAvg30d": 23.71
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.99,
          "priceAvg30d": 23.64
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.74,
          "priceAvg30d": 23.96
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.18,
          "priceAvg30d": 23.15
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.02,
          "priceAvg30d": 23.66
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.61,
          "priceAvg30d": 23.77
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.06,
          "priceAvg30d": 23.8
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 24.41,
          "priceAvg30d": 22.31
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 24.41,
          "priceAvg30d": 22.94
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.89,
          "priceAvg30d": 24.13
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.37,
          "priceAvg30d": 25.34
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 27.3,
          "priceAvg30d": 26.16
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 28.31,
          "priceAvg30d": 27.29
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.31,
          "priceAvg30d": 25.11
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.0,
          "priceAvg30d": 27.35
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.72,
          "priceAvg30d": 28.96
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.09,
          "priceAvg30d": 30.47
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.5,
          "priceAvg30d": 29.86
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.32,
          "priceAvg30d": 29.76
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.62,
          "priceAvg30d": 29.3
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.62,
          "priceAvg30d": 29.42
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.0,
          "priceAvg30d": 27.8
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.61,
          "priceAvg30d": 26.27
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.37,
          "priceAvg30d": 24.32
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.71,
          "priceAvg30d": 23.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.56,
          "priceAvg30d": 22.87
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.3,
          "priceAvg30d": 24.45
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.52,
          "priceAvg30d": 23.93
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.03,
          "priceAvg30d": 22.79
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.56,
          "priceAvg30d": 22.68
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.93,
          "priceAvg30d": 20.83
        }
      ],
      "avg": 27.22,
      "max": 46.09,
      "maxBlock": 34,
      "min": 24.41,
      "minBlock": 25,
      "spread3h": 6.18,
      "spreadLowAvg": 25.23,
      "spreadHighAvg": 31.41,
      "avg30d": 23.23,
      "spread30dAvg": 11.27,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.78,
          "priceAvg30d": 20.03
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.34,
          "priceAvg30d": 19.47
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.06,
          "priceAvg30d": 18.76
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.01,
          "priceAvg30d": 18.97
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.06,
          "priceAvg30d": 18.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.01,
          "priceAvg30d": 18.81
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.06,
          "priceAvg30d": 19.09
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.06,
          "priceAvg30d": 19.34
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.06,
          "priceAvg30d": 19.78
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.06,
          "priceAvg30d": 20.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.06,
          "priceAvg30d": 20.38
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.06,
          "priceAvg30d": 20.39
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.06,
          "priceAvg30d": 19.9
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.06,
          "priceAvg30d": 19.54
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 25.06,
          "priceAvg30d": 19.01
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.06,
          "priceAvg30d": 19.32
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.7,
          "priceAvg30d": 21.08
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.0,
          "priceAvg30d": 22.93
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.99,
          "priceAvg30d": 23.67
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.74,
          "priceAvg30d": 23.78
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.18,
          "priceAvg30d": 22.99
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.02,
          "priceAvg30d": 23.17
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.61,
          "priceAvg30d": 23.11
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.06,
          "priceAvg30d": 23.08
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 24.41,
          "priceAvg30d": 21.46
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 24.41,
          "priceAvg30d": 22.02
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.89,
          "priceAvg30d": 24.2
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.37,
          "priceAvg30d": 25.67
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 27.5,
          "priceAvg30d": 26.38
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 28.31,
          "priceAvg30d": 27.26
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.31,
          "priceAvg30d": 26.89
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.0,
          "priceAvg30d": 28.9
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.72,
          "priceAvg30d": 29.97
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.09,
          "priceAvg30d": 32.2
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.5,
          "priceAvg30d": 32.65
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.32,
          "priceAvg30d": 32.83
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.62,
          "priceAvg30d": 32.75
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.62,
          "priceAvg30d": 31.6
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.0,
          "priceAvg30d": 30.23
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.61,
          "priceAvg30d": 28.35
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.37,
          "priceAvg30d": 26.85
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.71,
          "priceAvg30d": 25.95
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.56,
          "priceAvg30d": 24.72
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.3,
          "priceAvg30d": 24.82
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.52,
          "priceAvg30d": 24.36
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.03,
          "priceAvg30d": 23.07
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.56,
          "priceAvg30d": 22.72
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.93,
          "priceAvg30d": 20.98
        }
      ],
      "avg": 27.23,
      "max": 46.09,
      "maxBlock": 34,
      "min": 24.41,
      "minBlock": 25,
      "spread3h": 6.18,
      "spreadLowAvg": 25.23,
      "spreadHighAvg": 31.41,
      "avg30d": 23.8,
      "spread30dAvg": 14.38,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.12,
          "priceAvg30d": 13.65
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.1,
          "priceAvg30d": 13.62
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.31,
          "priceAvg30d": 13.54
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.31,
          "priceAvg30d": 13.43
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.25,
          "priceAvg30d": 13.27
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.14,
          "priceAvg30d": 13.54
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.17,
          "priceAvg30d": 13.72
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.31,
          "priceAvg30d": 13.85
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.21,
          "priceAvg30d": 13.63
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.31,
          "priceAvg30d": 14.5
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.31,
          "priceAvg30d": 15.2
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.19,
          "priceAvg30d": 15.15
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.31,
          "priceAvg30d": 16.04
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.08,
          "priceAvg30d": 14.19
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.41,
          "priceAvg30d": 14.07
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 13.54
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.87,
          "priceAvg30d": 14.78
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.98,
          "priceAvg30d": 17.96
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.98,
          "priceAvg30d": 19.43
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 16.85,
          "priceAvg30d": 20.12
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 16.85,
          "priceAvg30d": 19.54
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 16.81,
          "priceAvg30d": 19.45
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 16.85,
          "priceAvg30d": 19.2
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 16.85,
          "priceAvg30d": 19.18
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 14.0,
          "priceAvg30d": 16.98
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 16.81,
          "priceAvg30d": 17.72
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.34,
          "priceAvg30d": 19.98
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 18.42,
          "priceAvg30d": 21.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 16.81,
          "priceAvg30d": 21.91
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 17.34,
          "priceAvg30d": 22.67
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.42,
          "priceAvg30d": 21.82
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 19.12,
          "priceAvg30d": 23.2
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 18.71,
          "priceAvg30d": 23.66
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.71,
          "priceAvg30d": 26.15
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.64,
          "priceAvg30d": 25.93
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.78,
          "priceAvg30d": 27.18
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 18.71,
          "priceAvg30d": 26.98
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.5,
          "priceAvg30d": 26.15
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.5,
          "priceAvg30d": 24.53
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.34,
          "priceAvg30d": 22.52
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.68,
          "priceAvg30d": 21.32
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.1,
          "priceAvg30d": 20.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.1,
          "priceAvg30d": 19.76
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.8,
          "priceAvg30d": 18.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.81,
          "priceAvg30d": 17.87
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.81,
          "priceAvg30d": 16.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.52,
          "priceAvg30d": 16.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.63,
          "priceAvg30d": 13.44
        }
      ],
      "avg": 14.52,
      "max": 19.12,
      "maxBlock": 32,
      "min": 8.41,
      "minBlock": 15,
      "spread3h": 8.04,
      "spreadLowAvg": 10.07,
      "spreadHighAvg": 18.11,
      "avg30d": 18.48,
      "spread30dAvg": 13.21,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.12,
          "priceAvg30d": 13.28
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.1,
          "priceAvg30d": 13.5
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.31,
          "priceAvg30d": 13.54
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.31,
          "priceAvg30d": 13.43
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.25,
          "priceAvg30d": 13.27
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.14,
          "priceAvg30d": 13.54
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.14,
          "priceAvg30d": 13.72
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.31,
          "priceAvg30d": 13.85
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.21,
          "priceAvg30d": 13.63
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.31,
          "priceAvg30d": 14.5
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.31,
          "priceAvg30d": 15.17
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 9.87,
          "priceAvg30d": 15.13
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.31,
          "priceAvg30d": 16.04
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 8.96,
          "priceAvg30d": 14.19
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.41,
          "priceAvg30d": 14.07
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 13.38
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.87,
          "priceAvg30d": 14.11
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.98,
          "priceAvg30d": 16.57
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.98,
          "priceAvg30d": 18.37
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 16.85,
          "priceAvg30d": 18.84
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 16.85,
          "priceAvg30d": 18.29
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 16.81,
          "priceAvg30d": 18.39
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 16.85,
          "priceAvg30d": 18.6
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 16.85,
          "priceAvg30d": 18.0
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 14.0,
          "priceAvg30d": 16.38
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 16.81,
          "priceAvg30d": 16.88
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.34,
          "priceAvg30d": 19.17
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 18.42,
          "priceAvg30d": 20.64
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 16.81,
          "priceAvg30d": 21.04
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 17.34,
          "priceAvg30d": 21.68
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.42,
          "priceAvg30d": 20.66
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 19.12,
          "priceAvg30d": 22.02
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 18.71,
          "priceAvg30d": 23.14
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.71,
          "priceAvg30d": 25.79
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.64,
          "priceAvg30d": 25.78
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.78,
          "priceAvg30d": 27.05
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 18.71,
          "priceAvg30d": 26.86
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.5,
          "priceAvg30d": 26.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.5,
          "priceAvg30d": 24.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.34,
          "priceAvg30d": 22.38
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.68,
          "priceAvg30d": 21.32
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.1,
          "priceAvg30d": 20.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.1,
          "priceAvg30d": 19.76
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.8,
          "priceAvg30d": 18.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.81,
          "priceAvg30d": 17.87
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.81,
          "priceAvg30d": 16.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.52,
          "priceAvg30d": 16.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.63,
          "priceAvg30d": 13.44
        }
      ],
      "avg": 14.47,
      "max": 19.12,
      "maxBlock": 32,
      "min": 8.41,
      "minBlock": 15,
      "spread3h": 8.28,
      "spreadLowAvg": 9.83,
      "spreadHighAvg": 18.11,
      "avg30d": 18.11,
      "spread30dAvg": 12.83,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.12,
          "priceAvg30d": 13.28
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.1,
          "priceAvg30d": 13.5
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.31,
          "priceAvg30d": 13.54
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.31,
          "priceAvg30d": 13.43
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.25,
          "priceAvg30d": 13.27
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.14,
          "priceAvg30d": 13.54
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.14,
          "priceAvg30d": 13.62
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.31,
          "priceAvg30d": 13.85
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.21,
          "priceAvg30d": 13.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.31,
          "priceAvg30d": 14.44
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.31,
          "priceAvg30d": 15.15
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 9.87,
          "priceAvg30d": 15.12
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.31,
          "priceAvg30d": 15.96
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 8.96,
          "priceAvg30d": 14.04
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.41,
          "priceAvg30d": 13.65
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 12.61
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.87,
          "priceAvg30d": 12.92
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.98,
          "priceAvg30d": 14.0
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.14,
          "priceAvg30d": 14.43
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.98,
          "priceAvg30d": 13.29
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.0,
          "priceAvg30d": 13.25
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.98,
          "priceAvg30d": 13.12
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.87,
          "priceAvg30d": 12.64
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.87,
          "priceAvg30d": 12.52
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.63,
          "priceAvg30d": 11.23
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.63,
          "priceAvg30d": 11.41
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.14,
          "priceAvg30d": 13.62
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 15.07
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.31,
          "priceAvg30d": 14.63
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.14,
          "priceAvg30d": 15.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.31,
          "priceAvg30d": 17.86
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.95,
          "priceAvg30d": 20.55
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.1,
          "priceAvg30d": 22.25
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.86,
          "priceAvg30d": 25.27
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.64,
          "priceAvg30d": 25.78
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.78,
          "priceAvg30d": 27.05
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 18.71,
          "priceAvg30d": 26.86
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.5,
          "priceAvg30d": 26.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.5,
          "priceAvg30d": 24.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.34,
          "priceAvg30d": 22.38
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.68,
          "priceAvg30d": 21.32
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.1,
          "priceAvg30d": 20.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.1,
          "priceAvg30d": 19.76
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.8,
          "priceAvg30d": 18.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.81,
          "priceAvg30d": 17.84
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.81,
          "priceAvg30d": 16.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.52,
          "priceAvg30d": 16.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.63,
          "priceAvg30d": 13.44
        }
      ],
      "avg": 12.35,
      "max": 18.78,
      "maxBlock": 36,
      "min": 8.41,
      "minBlock": 15,
      "spread3h": 7.56,
      "spreadLowAvg": 9.83,
      "spreadHighAvg": 17.39,
      "avg30d": 16.51,
      "spread30dAvg": 13.85,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.58,
          "priceAvg30d": 12.85
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.05,
          "priceAvg30d": 12.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.31,
          "priceAvg30d": 12.66
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.31,
          "priceAvg30d": 12.61
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.25,
          "priceAvg30d": 12.35
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.14,
          "priceAvg30d": 12.66
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 7.94,
          "priceAvg30d": 12.63
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 7.92,
          "priceAvg30d": 13.04
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 7.96,
          "priceAvg30d": 12.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.07,
          "priceAvg30d": 13.5
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.58,
          "priceAvg30d": 14.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.74,
          "priceAvg30d": 14.45
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.07,
          "priceAvg30d": 15.15
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 7.92,
          "priceAvg30d": 12.85
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.41,
          "priceAvg30d": 12.26
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 11.5
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.87,
          "priceAvg30d": 12.03
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.98,
          "priceAvg30d": 13.04
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.14,
          "priceAvg30d": 12.68
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.98,
          "priceAvg30d": 11.09
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.0,
          "priceAvg30d": 10.54
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.98,
          "priceAvg30d": 10.27
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.87,
          "priceAvg30d": 9.97
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.87,
          "priceAvg30d": 10.13
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.63,
          "priceAvg30d": 9.21
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.63,
          "priceAvg30d": 9.49
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.14,
          "priceAvg30d": 11.4
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 13.34
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.31,
          "priceAvg30d": 13.09
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.14,
          "priceAvg30d": 13.6
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.31,
          "priceAvg30d": 15.66
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.95,
          "priceAvg30d": 18.27
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.0,
          "priceAvg30d": 19.93
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 12.29,
          "priceAvg30d": 23.08
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.29,
          "priceAvg30d": 23.66
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 13.81,
          "priceAvg30d": 25.65
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.5,
          "priceAvg30d": 25.96
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 13.81,
          "priceAvg30d": 25.06
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 11.5,
          "priceAvg30d": 22.94
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.74,
          "priceAvg30d": 20.11
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 9.07,
          "priceAvg30d": 19.41
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.79,
          "priceAvg30d": 18.31
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.06,
          "priceAvg30d": 17.4
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.02,
          "priceAvg30d": 16.3
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.01,
          "priceAvg30d": 15.7
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 8.0,
          "priceAvg30d": 14.71
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 8.5,
          "priceAvg30d": 14.65
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.5,
          "priceAvg30d": 12.66
        }
      ],
      "avg": 9.78,
      "max": 16.5,
      "maxBlock": 37,
      "min": 7.92,
      "minBlock": 8,
      "spread3h": 3.25,
      "spreadLowAvg": 8.82,
      "spreadHighAvg": 12.07,
      "avg30d": 14.95,
      "spread30dAvg": 14.5,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.12,
          "priceAvg30d": 12.24
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.1,
          "priceAvg30d": 12.47
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.31,
          "priceAvg30d": 11.47
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.31,
          "priceAvg30d": 11.1
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.25,
          "priceAvg30d": 10.64
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.14,
          "priceAvg30d": 10.84
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.14,
          "priceAvg30d": 10.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.31,
          "priceAvg30d": 11.35
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.21,
          "priceAvg30d": 11.25
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.31,
          "priceAvg30d": 12.47
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.31,
          "priceAvg30d": 13.51
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 9.87,
          "priceAvg30d": 13.96
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.31,
          "priceAvg30d": 15.02
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 8.96,
          "priceAvg30d": 12.08
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.41,
          "priceAvg30d": 11.49
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 10.41
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.87,
          "priceAvg30d": 11.48
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.98,
          "priceAvg30d": 11.88
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.14,
          "priceAvg30d": 12.12
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.98,
          "priceAvg30d": 11.33
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.0,
          "priceAvg30d": 10.62
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.98,
          "priceAvg30d": 10.33
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.87,
          "priceAvg30d": 10.22
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.87,
          "priceAvg30d": 10.19
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.63,
          "priceAvg30d": 9.55
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.63,
          "priceAvg30d": 9.8
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.14,
          "priceAvg30d": 11.01
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 12.34
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.31,
          "priceAvg30d": 13.17
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.14,
          "priceAvg30d": 14.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.31,
          "priceAvg30d": 17.37
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.95,
          "priceAvg30d": 20.06
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.1,
          "priceAvg30d": 22.05
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.86,
          "priceAvg30d": 25.27
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.64,
          "priceAvg30d": 25.78
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.78,
          "priceAvg30d": 27.05
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 18.71,
          "priceAvg30d": 26.86
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.5,
          "priceAvg30d": 26.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.5,
          "priceAvg30d": 24.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.34,
          "priceAvg30d": 22.38
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.68,
          "priceAvg30d": 21.32
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.1,
          "priceAvg30d": 20.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.1,
          "priceAvg30d": 19.75
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.8,
          "priceAvg30d": 18.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.81,
          "priceAvg30d": 17.69
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.81,
          "priceAvg30d": 16.11
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.52,
          "priceAvg30d": 15.38
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.63,
          "priceAvg30d": 11.93
        }
      ],
      "avg": 12.35,
      "max": 18.78,
      "maxBlock": 36,
      "min": 8.41,
      "minBlock": 15,
      "spread3h": 7.56,
      "spreadLowAvg": 9.83,
      "spreadHighAvg": 17.39,
      "avg30d": 15.17,
      "spread30dAvg": 15.61,
      "historyDays": 30
    }
  }
};
