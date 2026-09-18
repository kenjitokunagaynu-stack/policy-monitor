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
  "targetDate": "2026-09-18",
  "fetchedAt": "2026-09-18T09:04:40+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 14.63,
        "priceAvg30d": 17.77
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 14.63,
        "priceAvg30d": 16.87
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 13.0,
        "priceAvg30d": 16.19
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 12.84,
        "priceAvg30d": 16.21
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 12.64,
        "priceAvg30d": 16.15
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 12.52,
        "priceAvg30d": 16.22
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 12.84,
        "priceAvg30d": 16.44
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 13.0,
        "priceAvg30d": 16.53
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 14.69,
        "priceAvg30d": 16.76
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 16.95,
        "priceAvg30d": 17.32
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 17.5,
        "priceAvg30d": 18.08
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 18.56,
        "priceAvg30d": 17.76
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 16.98,
        "priceAvg30d": 17.18
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 14.07,
        "priceAvg30d": 16.58
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 12.52,
        "priceAvg30d": 16.04
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 11.52,
        "priceAvg30d": 16.44
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 11.97,
        "priceAvg30d": 17.2
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 12.62,
        "priceAvg30d": 18.93
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 13.33,
        "priceAvg30d": 19.54
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 12.99,
        "priceAvg30d": 19.42
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 12.42,
        "priceAvg30d": 18.47
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 12.52,
        "priceAvg30d": 18.5
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 14.07,
        "priceAvg30d": 18.51
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 14.01,
        "priceAvg30d": 18.35
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 12.1,
        "priceAvg30d": 16.9
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 12.52,
        "priceAvg30d": 17.31
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 13.29,
        "priceAvg30d": 18.74
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 18.37,
        "priceAvg30d": 20.45
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 20.0,
        "priceAvg30d": 22.05
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 22.25,
        "priceAvg30d": 24.0
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 22.26,
        "priceAvg30d": 23.08
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 23.97,
        "priceAvg30d": 26.03
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 23.51,
        "priceAvg30d": 27.42
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 24.6,
        "priceAvg30d": 29.89
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 23.64,
        "priceAvg30d": 29.8
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 24.43,
        "priceAvg30d": 30.37
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 23.5,
        "priceAvg30d": 30.38
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 23.62,
        "priceAvg30d": 29.74
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 22.27,
        "priceAvg30d": 28.14
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 21.74,
        "priceAvg30d": 26.09
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 21.17,
        "priceAvg30d": 24.29
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 20.28,
        "priceAvg30d": 22.43
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 20.09,
        "priceAvg30d": 21.23
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 20.33,
        "priceAvg30d": 22.95
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 20.91,
        "priceAvg30d": 21.9
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 19.0,
        "priceAvg30d": 19.86
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 19.27,
        "priceAvg30d": 19.57
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 18.56,
        "priceAvg30d": 17.75
      }
    ],
    "avg": 17.18,
    "max": 24.6,
    "maxBlock": 34,
    "min": 11.52,
    "minBlock": 16,
    "spread3h": 9.97,
    "spreadLowAvg": 13.58,
    "spreadHighAvg": 23.55,
    "avg30d": 20.58,
    "spread30dAvg": 14.01,
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
          "price": 18.69,
          "priceAvg30d": 14.41
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.69,
          "priceAvg30d": 13.87
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.0,
          "priceAvg30d": 13.42
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.0,
          "priceAvg30d": 13.2
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.0,
          "priceAvg30d": 13.92
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.0,
          "priceAvg30d": 14.43
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.5,
          "priceAvg30d": 15.44
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.5,
          "priceAvg30d": 15.69
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.69,
          "priceAvg30d": 15.98
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.69,
          "priceAvg30d": 16.07
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.69,
          "priceAvg30d": 15.92
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.69,
          "priceAvg30d": 14.99
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.69,
          "priceAvg30d": 13.99
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.77,
          "priceAvg30d": 12.3
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.33,
          "priceAvg30d": 11.4
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.2,
          "priceAvg30d": 10.89
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.53,
          "priceAvg30d": 10.49
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.53,
          "priceAvg30d": 10.71
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.64,
          "priceAvg30d": 10.23
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.53,
          "priceAvg30d": 9.38
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.53,
          "priceAvg30d": 8.77
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.53,
          "priceAvg30d": 8.85
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.44,
          "priceAvg30d": 9.17
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.44,
          "priceAvg30d": 8.43
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 7.0,
          "priceAvg30d": 7.91
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 7.9,
          "priceAvg30d": 7.81
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.44,
          "priceAvg30d": 9.23
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.44,
          "priceAvg30d": 11.26
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.53,
          "priceAvg30d": 11.53
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.0,
          "priceAvg30d": 12.98
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.49,
          "priceAvg30d": 14.43
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.73,
          "priceAvg30d": 16.65
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.42,
          "priceAvg30d": 19.42
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.0,
          "priceAvg30d": 22.27
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.69,
          "priceAvg30d": 22.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.79,
          "priceAvg30d": 23.11
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.94,
          "priceAvg30d": 22.82
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.53,
          "priceAvg30d": 23.36
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.11,
          "priceAvg30d": 22.3
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.06,
          "priceAvg30d": 20.95
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.3,
          "priceAvg30d": 20.1
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.0,
          "priceAvg30d": 19.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.0,
          "priceAvg30d": 18.09
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.9,
          "priceAvg30d": 18.29
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.54,
          "priceAvg30d": 18.76
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.99,
          "priceAvg30d": 17.02
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.22,
          "priceAvg30d": 16.19
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.9,
          "priceAvg30d": 15.11
        }
      ],
      "avg": 15.3,
      "max": 22.53,
      "maxBlock": 38,
      "min": 7.0,
      "minBlock": 25,
      "spread3h": 11.62,
      "spreadLowAvg": 9.2,
      "spreadHighAvg": 20.82,
      "avg30d": 14.86,
      "spread30dAvg": 12.8,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 18.69,
          "priceAvg30d": 19.06
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.69,
          "priceAvg30d": 18.0
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.0,
          "priceAvg30d": 16.88
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.0,
          "priceAvg30d": 16.68
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.0,
          "priceAvg30d": 16.89
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.0,
          "priceAvg30d": 17.03
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.5,
          "priceAvg30d": 18.05
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.5,
          "priceAvg30d": 18.28
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.69,
          "priceAvg30d": 18.67
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.69,
          "priceAvg30d": 19.04
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.69,
          "priceAvg30d": 19.62
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.69,
          "priceAvg30d": 18.84
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.69,
          "priceAvg30d": 17.25
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.77,
          "priceAvg30d": 14.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.33,
          "priceAvg30d": 14.03
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.2,
          "priceAvg30d": 13.64
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.53,
          "priceAvg30d": 11.52
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.53,
          "priceAvg30d": 12.46
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.64,
          "priceAvg30d": 13.02
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.2,
          "priceAvg30d": 12.56
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.85,
          "priceAvg30d": 11.77
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.21,
          "priceAvg30d": 12.08
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.44,
          "priceAvg30d": 11.73
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.44,
          "priceAvg30d": 10.75
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.41,
          "priceAvg30d": 9.48
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.43,
          "priceAvg30d": 9.99
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.44,
          "priceAvg30d": 11.66
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.44,
          "priceAvg30d": 13.29
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.53,
          "priceAvg30d": 13.56
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 14.6,
          "priceAvg30d": 15.45
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.89,
          "priceAvg30d": 16.96
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 22.65,
          "priceAvg30d": 19.74
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.5,
          "priceAvg30d": 22.98
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.87,
          "priceAvg30d": 26.08
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 26.56,
          "priceAvg30d": 26.02
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.87,
          "priceAvg30d": 26.56
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.22,
          "priceAvg30d": 26.6
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.69,
          "priceAvg30d": 26.45
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.11,
          "priceAvg30d": 24.68
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.06,
          "priceAvg30d": 23.1
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.3,
          "priceAvg30d": 21.38
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.0,
          "priceAvg30d": 20.45
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.0,
          "priceAvg30d": 19.39
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.9,
          "priceAvg30d": 19.94
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.2,
          "priceAvg30d": 21.5
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.99,
          "priceAvg30d": 19.66
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 23.02,
          "priceAvg30d": 19.95
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.27,
          "priceAvg30d": 19.06
        }
      ],
      "avg": 16.64,
      "max": 26.87,
      "maxBlock": 34,
      "min": 9.41,
      "minBlock": 25,
      "spread3h": 14.05,
      "spreadLowAvg": 9.57,
      "spreadHighAvg": 23.61,
      "avg30d": 17.64,
      "spread30dAvg": 14.09,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 18.69,
          "priceAvg30d": 19.06
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.69,
          "priceAvg30d": 18.56
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.0,
          "priceAvg30d": 17.9
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.0,
          "priceAvg30d": 18.4
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.0,
          "priceAvg30d": 18.24
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.0,
          "priceAvg30d": 18.21
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.5,
          "priceAvg30d": 18.53
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.5,
          "priceAvg30d": 18.51
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.69,
          "priceAvg30d": 18.87
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.69,
          "priceAvg30d": 19.17
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.69,
          "priceAvg30d": 19.72
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.69,
          "priceAvg30d": 19.3
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.69,
          "priceAvg30d": 18.46
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 18.19,
          "priceAvg30d": 18.62
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.23,
          "priceAvg30d": 19.02
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.5,
          "priceAvg30d": 19.62
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 17.3,
          "priceAvg30d": 20.83
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.69,
          "priceAvg30d": 23.23
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 18.69,
          "priceAvg30d": 22.89
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 18.69,
          "priceAvg30d": 23.25
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 18.66,
          "priceAvg30d": 22.69
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 18.69,
          "priceAvg30d": 23.18
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.7,
          "priceAvg30d": 23.45
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.79,
          "priceAvg30d": 23.59
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 18.69,
          "priceAvg30d": 21.92
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.69,
          "priceAvg30d": 22.6
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.27,
          "priceAvg30d": 23.82
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.56,
          "priceAvg30d": 25.22
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.38,
          "priceAvg30d": 26.0
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.28,
          "priceAvg30d": 27.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.21,
          "priceAvg30d": 24.66
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 26.87,
          "priceAvg30d": 27.21
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 26.6,
          "priceAvg30d": 28.56
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.87,
          "priceAvg30d": 29.72
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 26.56,
          "priceAvg30d": 29.18
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.87,
          "priceAvg30d": 28.99
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.22,
          "priceAvg30d": 28.33
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.87,
          "priceAvg30d": 28.29
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 26.87,
          "priceAvg30d": 26.54
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.11,
          "priceAvg30d": 25.05
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.37,
          "priceAvg30d": 22.75
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.81,
          "priceAvg30d": 22.18
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.31,
          "priceAvg30d": 21.31
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.49,
          "priceAvg30d": 24.29
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.06,
          "priceAvg30d": 23.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.42,
          "priceAvg30d": 21.41
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 23.02,
          "priceAvg30d": 21.45
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.27,
          "priceAvg30d": 19.62
        }
      ],
      "avg": 20.95,
      "max": 26.87,
      "maxBlock": 32,
      "min": 13.23,
      "minBlock": 15,
      "spread3h": 8.31,
      "spreadLowAvg": 17.51,
      "spreadHighAvg": 25.82,
      "avg30d": 22.56,
      "spread30dAvg": 10.79,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.05,
          "priceAvg30d": 19.09
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.69,
          "priceAvg30d": 18.67
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.0,
          "priceAvg30d": 18.04
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.0,
          "priceAvg30d": 18.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.0,
          "priceAvg30d": 18.21
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.0,
          "priceAvg30d": 18.25
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.5,
          "priceAvg30d": 18.38
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.5,
          "priceAvg30d": 18.6
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.69,
          "priceAvg30d": 18.96
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.69,
          "priceAvg30d": 19.29
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.69,
          "priceAvg30d": 19.72
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.95,
          "priceAvg30d": 19.61
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.1,
          "priceAvg30d": 19.04
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 18.19,
          "priceAvg30d": 18.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.23,
          "priceAvg30d": 18.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.5,
          "priceAvg30d": 19.12
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 17.3,
          "priceAvg30d": 20.63
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.69,
          "priceAvg30d": 22.67
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 18.69,
          "priceAvg30d": 23.32
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 18.69,
          "priceAvg30d": 23.69
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 18.66,
          "priceAvg30d": 23.01
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 18.69,
          "priceAvg30d": 23.2
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.7,
          "priceAvg30d": 23.32
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.79,
          "priceAvg30d": 23.36
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 18.69,
          "priceAvg30d": 21.66
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.69,
          "priceAvg30d": 22.15
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.27,
          "priceAvg30d": 24.33
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.56,
          "priceAvg30d": 25.92
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.38,
          "priceAvg30d": 26.89
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.28,
          "priceAvg30d": 27.93
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.28,
          "priceAvg30d": 27.21
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 27.98,
          "priceAvg30d": 29.46
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 27.93,
          "priceAvg30d": 30.85
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.02,
          "priceAvg30d": 32.75
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.95,
          "priceAvg30d": 32.92
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.99,
          "priceAvg30d": 33.32
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.8,
          "priceAvg30d": 33.49
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.97,
          "priceAvg30d": 32.51
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 26.87,
          "priceAvg30d": 31.04
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.11,
          "priceAvg30d": 28.78
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.57,
          "priceAvg30d": 27.16
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.3,
          "priceAvg30d": 25.84
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.31,
          "priceAvg30d": 24.2
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.49,
          "priceAvg30d": 24.67
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.06,
          "priceAvg30d": 23.66
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.42,
          "priceAvg30d": 21.82
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 23.02,
          "priceAvg30d": 21.52
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.27,
          "priceAvg30d": 19.84
        }
      ],
      "avg": 21.32,
      "max": 28.02,
      "maxBlock": 34,
      "min": 13.23,
      "minBlock": 15,
      "spread3h": 9.2,
      "spreadLowAvg": 18.29,
      "spreadHighAvg": 27.49,
      "avg30d": 23.62,
      "spread30dAvg": 15.08,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 15.79
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.25,
          "priceAvg30d": 15.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 15.34
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.41,
          "priceAvg30d": 14.95
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.95,
          "priceAvg30d": 15.04
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 15.49
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.95,
          "priceAvg30d": 15.63
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.25,
          "priceAvg30d": 15.66
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.25,
          "priceAvg30d": 15.63
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.61,
          "priceAvg30d": 16.25
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.82,
          "priceAvg30d": 16.68
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.82,
          "priceAvg30d": 16.76
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.0,
          "priceAvg30d": 16.75
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.25,
          "priceAvg30d": 15.62
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.23,
          "priceAvg30d": 15.75
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.31,
          "priceAvg30d": 15.73
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.31,
          "priceAvg30d": 16.77
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.38,
          "priceAvg30d": 20.3
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 14.41,
          "priceAvg30d": 21.5
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 14.41,
          "priceAvg30d": 22.42
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.08,
          "priceAvg30d": 21.62
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.41,
          "priceAvg30d": 21.55
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 17.23,
          "priceAvg30d": 21.35
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 17.23,
          "priceAvg30d": 21.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 16.94,
          "priceAvg30d": 19.26
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 17.12,
          "priceAvg30d": 19.84
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.12,
          "priceAvg30d": 22.48
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 17.48,
          "priceAvg30d": 23.95
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 16.95,
          "priceAvg30d": 25.0
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 16.95,
          "priceAvg30d": 25.69
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.12,
          "priceAvg30d": 24.98
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.86,
          "priceAvg30d": 27.29
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.91,
          "priceAvg30d": 27.82
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.56,
          "priceAvg30d": 30.24
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.2,
          "priceAvg30d": 29.85
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.3,
          "priceAvg30d": 30.82
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.48,
          "priceAvg30d": 31.14
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.98,
          "priceAvg30d": 30.15
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.94,
          "priceAvg30d": 28.69
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 14.61,
          "priceAvg30d": 26.69
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.98,
          "priceAvg30d": 25.1
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.98,
          "priceAvg30d": 23.62
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.01,
          "priceAvg30d": 22.19
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.94,
          "priceAvg30d": 21.86
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.94,
          "priceAvg30d": 20.5
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.8,
          "priceAvg30d": 18.67
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.61,
          "priceAvg30d": 18.42
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 16.04
        }
      ],
      "avg": 14.67,
      "max": 18.86,
      "maxBlock": 32,
      "min": 10.31,
      "minBlock": 16,
      "spread3h": 5.18,
      "spreadLowAvg": 12.43,
      "spreadHighAvg": 17.61,
      "avg30d": 21.04,
      "spread30dAvg": 15.52,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 14.82
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.25,
          "priceAvg30d": 15.16
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 14.78
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.41,
          "priceAvg30d": 14.61
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.95,
          "priceAvg30d": 14.66
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 14.89
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.95,
          "priceAvg30d": 15.04
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.25,
          "priceAvg30d": 15.08
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.25,
          "priceAvg30d": 15.09
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.61,
          "priceAvg30d": 15.72
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.82,
          "priceAvg30d": 16.14
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.82,
          "priceAvg30d": 16.32
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.0,
          "priceAvg30d": 16.39
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.25,
          "priceAvg30d": 15.23
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.23,
          "priceAvg30d": 15.15
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.31,
          "priceAvg30d": 15.05
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.31,
          "priceAvg30d": 15.95
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.38,
          "priceAvg30d": 19.05
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 14.41,
          "priceAvg30d": 20.45
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 14.41,
          "priceAvg30d": 21.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.08,
          "priceAvg30d": 20.25
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.41,
          "priceAvg30d": 20.31
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 17.23,
          "priceAvg30d": 20.64
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 17.23,
          "priceAvg30d": 20.26
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 16.94,
          "priceAvg30d": 18.3
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 17.12,
          "priceAvg30d": 18.61
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.12,
          "priceAvg30d": 21.44
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 17.48,
          "priceAvg30d": 23.41
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 16.95,
          "priceAvg30d": 24.28
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 16.95,
          "priceAvg30d": 24.61
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.12,
          "priceAvg30d": 23.93
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.86,
          "priceAvg30d": 25.7
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.91,
          "priceAvg30d": 26.86
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.56,
          "priceAvg30d": 29.87
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.2,
          "priceAvg30d": 29.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.3,
          "priceAvg30d": 30.69
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.48,
          "priceAvg30d": 31.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.98,
          "priceAvg30d": 30.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.94,
          "priceAvg30d": 28.56
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 14.61,
          "priceAvg30d": 26.5
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.98,
          "priceAvg30d": 25.05
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.98,
          "priceAvg30d": 23.53
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.01,
          "priceAvg30d": 22.06
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.94,
          "priceAvg30d": 20.96
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.94,
          "priceAvg30d": 19.59
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.8,
          "priceAvg30d": 17.66
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.61,
          "priceAvg30d": 17.37
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 15.07
        }
      ],
      "avg": 14.67,
      "max": 18.86,
      "maxBlock": 32,
      "min": 10.31,
      "minBlock": 16,
      "spread3h": 5.18,
      "spreadLowAvg": 12.43,
      "spreadHighAvg": 17.61,
      "avg30d": 20.35,
      "spread30dAvg": 15.4,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 14.82
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.25,
          "priceAvg30d": 15.16
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 14.78
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.41,
          "priceAvg30d": 14.61
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.95,
          "priceAvg30d": 14.66
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 14.89
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.95,
          "priceAvg30d": 14.94
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.25,
          "priceAvg30d": 15.08
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.25,
          "priceAvg30d": 15.05
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.61,
          "priceAvg30d": 15.65
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.82,
          "priceAvg30d": 16.12
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.82,
          "priceAvg30d": 16.32
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.0,
          "priceAvg30d": 16.31
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.25,
          "priceAvg30d": 15.08
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.23,
          "priceAvg30d": 14.74
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.31,
          "priceAvg30d": 14.1
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.31,
          "priceAvg30d": 14.6
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.38,
          "priceAvg30d": 15.67
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.34,
          "priceAvg30d": 15.81
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.25,
          "priceAvg30d": 14.96
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.95,
          "priceAvg30d": 14.59
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.09,
          "priceAvg30d": 14.52
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.95,
          "priceAvg30d": 14.28
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.88,
          "priceAvg30d": 13.96
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.31,
          "priceAvg30d": 12.27
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.38,
          "priceAvg30d": 12.49
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.76,
          "priceAvg30d": 14.95
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.33,
          "priceAvg30d": 16.5
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 13.33,
          "priceAvg30d": 16.36
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.33,
          "priceAvg30d": 17.42
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 15.79,
          "priceAvg30d": 19.85
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.86,
          "priceAvg30d": 23.73
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.91,
          "priceAvg30d": 26.25
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.56,
          "priceAvg30d": 29.66
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.2,
          "priceAvg30d": 29.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.3,
          "priceAvg30d": 30.69
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.48,
          "priceAvg30d": 31.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.98,
          "priceAvg30d": 30.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.94,
          "priceAvg30d": 28.56
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 14.61,
          "priceAvg30d": 26.5
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.98,
          "priceAvg30d": 25.05
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.98,
          "priceAvg30d": 23.53
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.01,
          "priceAvg30d": 22.06
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.94,
          "priceAvg30d": 20.96
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.94,
          "priceAvg30d": 19.56
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.8,
          "priceAvg30d": 17.65
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.61,
          "priceAvg30d": 17.37
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 15.07
        }
      ],
      "avg": 13.57,
      "max": 18.86,
      "maxBlock": 32,
      "min": 10.31,
      "minBlock": 16,
      "spread3h": 4.27,
      "spreadLowAvg": 11.92,
      "spreadHighAvg": 16.19,
      "avg30d": 18.5,
      "spread30dAvg": 16.81,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 14.38
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.25,
          "priceAvg30d": 14.43
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 6.5,
          "priceAvg30d": 14.04
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 6.5,
          "priceAvg30d": 13.92
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 5.0,
          "priceAvg30d": 13.94
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 6.5,
          "priceAvg30d": 14.16
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 6.5,
          "priceAvg30d": 14.1
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.25,
          "priceAvg30d": 14.27
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.25,
          "priceAvg30d": 14.05
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.61,
          "priceAvg30d": 14.71
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.82,
          "priceAvg30d": 15.37
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.82,
          "priceAvg30d": 15.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.0,
          "priceAvg30d": 15.49
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.25,
          "priceAvg30d": 13.89
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 7.0,
          "priceAvg30d": 13.51
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.0,
          "priceAvg30d": 13.02
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.31,
          "priceAvg30d": 13.58
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.38,
          "priceAvg30d": 14.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.34,
          "priceAvg30d": 13.78
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.25,
          "priceAvg30d": 12.34
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.56,
          "priceAvg30d": 11.36
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.5,
          "priceAvg30d": 11.02
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 3.5,
          "priceAvg30d": 11.0
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 3.0,
          "priceAvg30d": 10.99
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.31,
          "priceAvg30d": 9.62
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.38,
          "priceAvg30d": 10.06
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.76,
          "priceAvg30d": 12.21
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.33,
          "priceAvg30d": 14.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 13.33,
          "priceAvg30d": 14.45
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.0,
          "priceAvg30d": 15.52
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.08,
          "priceAvg30d": 17.54
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.86,
          "priceAvg30d": 21.39
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.91,
          "priceAvg30d": 24.04
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.56,
          "priceAvg30d": 27.79
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.2,
          "priceAvg30d": 27.94
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.3,
          "priceAvg30d": 29.78
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.48,
          "priceAvg30d": 30.33
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.98,
          "priceAvg30d": 29.32
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.94,
          "priceAvg30d": 27.31
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 14.61,
          "priceAvg30d": 24.41
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.98,
          "priceAvg30d": 23.34
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.98,
          "priceAvg30d": 21.68
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.01,
          "priceAvg30d": 19.99
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.94,
          "priceAvg30d": 19.06
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.94,
          "priceAvg30d": 17.7
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.8,
          "priceAvg30d": 16.13
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.61,
          "priceAvg30d": 16.02
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 14.3
        }
      ],
      "avg": 12.3,
      "max": 18.86,
      "maxBlock": 32,
      "min": 3.0,
      "minBlock": 24,
      "spread3h": 6.18,
      "spreadLowAvg": 8.84,
      "spreadHighAvg": 15.01,
      "avg30d": 16.91,
      "spread30dAvg": 18.15,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 13.78
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.25,
          "priceAvg30d": 14.13
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 12.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.41,
          "priceAvg30d": 12.13
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.95,
          "priceAvg30d": 11.78
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 11.87
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.95,
          "priceAvg30d": 11.94
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.25,
          "priceAvg30d": 12.26
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.25,
          "priceAvg30d": 12.27
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.61,
          "priceAvg30d": 13.54
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.82,
          "priceAvg30d": 14.46
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.82,
          "priceAvg30d": 15.1
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.0,
          "priceAvg30d": 15.34
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.25,
          "priceAvg30d": 12.8
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.23,
          "priceAvg30d": 11.91
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.31,
          "priceAvg30d": 11.51
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.31,
          "priceAvg30d": 12.77
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.38,
          "priceAvg30d": 13.49
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.34,
          "priceAvg30d": 13.81
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.25,
          "priceAvg30d": 13.08
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.95,
          "priceAvg30d": 12.33
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.09,
          "priceAvg30d": 12.18
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.95,
          "priceAvg30d": 11.98
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.88,
          "priceAvg30d": 11.8
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.31,
          "priceAvg30d": 11.04
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.38,
          "priceAvg30d": 11.25
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.76,
          "priceAvg30d": 12.66
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.33,
          "priceAvg30d": 14.19
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 13.33,
          "priceAvg30d": 15.07
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.33,
          "priceAvg30d": 16.43
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 15.79,
          "priceAvg30d": 19.36
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.86,
          "priceAvg30d": 23.2
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.91,
          "priceAvg30d": 26.05
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.56,
          "priceAvg30d": 29.66
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.2,
          "priceAvg30d": 29.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.3,
          "priceAvg30d": 30.69
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.48,
          "priceAvg30d": 31.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.98,
          "priceAvg30d": 30.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.94,
          "priceAvg30d": 28.56
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 14.61,
          "priceAvg30d": 26.5
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.98,
          "priceAvg30d": 25.05
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.98,
          "priceAvg30d": 23.53
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.01,
          "priceAvg30d": 22.05
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.94,
          "priceAvg30d": 20.96
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.94,
          "priceAvg30d": 19.41
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.8,
          "priceAvg30d": 17.31
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.61,
          "priceAvg30d": 16.68
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 13.29
        }
      ],
      "avg": 13.57,
      "max": 18.86,
      "maxBlock": 32,
      "min": 10.31,
      "minBlock": 16,
      "spread3h": 4.27,
      "spreadLowAvg": 11.92,
      "spreadHighAvg": 16.19,
      "avg30d": 17.14,
      "spread30dAvg": 18.46,
      "historyDays": 30
    }
  }
};
