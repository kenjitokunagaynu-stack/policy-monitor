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
  "targetDate": "2026-09-07",
  "fetchedAt": "2026-09-07T09:05:51+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 10.6,
        "priceAvg30d": 17.47
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 10.6,
        "priceAvg30d": 16.51
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 10.03,
        "priceAvg30d": 15.83
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 9.92,
        "priceAvg30d": 16.56
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 10.03,
        "priceAvg30d": 16.43
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 10.21,
        "priceAvg30d": 16.4
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 10.6,
        "priceAvg30d": 16.42
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 10.72,
        "priceAvg30d": 16.58
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 10.38,
        "priceAvg30d": 16.66
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 10.6,
        "priceAvg30d": 17.23
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 11.01,
        "priceAvg30d": 17.78
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 12.16,
        "priceAvg30d": 17.11
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 13.24,
        "priceAvg30d": 15.92
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 13.92,
        "priceAvg30d": 15.26
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 15.0,
        "priceAvg30d": 14.72
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 19.0,
        "priceAvg30d": 15.01
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 21.21,
        "priceAvg30d": 15.67
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 23.12,
        "priceAvg30d": 16.91
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 26.0,
        "priceAvg30d": 16.78
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 26.28,
        "priceAvg30d": 16.73
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 25.0,
        "priceAvg30d": 15.88
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 25.61,
        "priceAvg30d": 15.87
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 25.61,
        "priceAvg30d": 16.02
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 26.38,
        "priceAvg30d": 16.05
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 23.36,
        "priceAvg30d": 15.17
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 23.12,
        "priceAvg30d": 15.62
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 24.06,
        "priceAvg30d": 16.41
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 25.01,
        "priceAvg30d": 17.82
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 25.82,
        "priceAvg30d": 19.23
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 28.0,
        "priceAvg30d": 21.14
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 25.2,
        "priceAvg30d": 20.14
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 28.48,
        "priceAvg30d": 23.14
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 30.0,
        "priceAvg30d": 24.8
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 31.0,
        "priceAvg30d": 27.3
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 32.01,
        "priceAvg30d": 27.7
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 32.53,
        "priceAvg30d": 28.64
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 31.61,
        "priceAvg30d": 28.77
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 32.03,
        "priceAvg30d": 28.4
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 30.0,
        "priceAvg30d": 26.9
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 26.26,
        "priceAvg30d": 25.29
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 24.18,
        "priceAvg30d": 23.51
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 23.65,
        "priceAvg30d": 21.38
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 22.25,
        "priceAvg30d": 20.2
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 22.18,
        "priceAvg30d": 22.3
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 21.98,
        "priceAvg30d": 21.23
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 20.57,
        "priceAvg30d": 19.41
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 20.3,
        "priceAvg30d": 19.08
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 19.12,
        "priceAvg30d": 17.36
      }
    ],
    "avg": 21.04,
    "max": 32.53,
    "maxBlock": 36,
    "min": 9.92,
    "minBlock": 4,
    "spread3h": 20.76,
    "spreadLowAvg": 10.35,
    "spreadHighAvg": 31.11,
    "avg30d": 19.22,
    "spread30dAvg": 13.14,
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
          "price": 11.06,
          "priceAvg30d": 15.12
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.11,
          "priceAvg30d": 14.04
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.59,
          "priceAvg30d": 13.28
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.52,
          "priceAvg30d": 13.94
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.59,
          "priceAvg30d": 14.37
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.59,
          "priceAvg30d": 14.34
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.59,
          "priceAvg30d": 15.25
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.99,
          "priceAvg30d": 15.27
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.17,
          "priceAvg30d": 15.42
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 9.93,
          "priceAvg30d": 15.93
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.99,
          "priceAvg30d": 15.32
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.91,
          "priceAvg30d": 14.03
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 9.94,
          "priceAvg30d": 12.46
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.17,
          "priceAvg30d": 11.41
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.17,
          "priceAvg30d": 10.54
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.17,
          "priceAvg30d": 9.87
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.33,
          "priceAvg30d": 10.18
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.33,
          "priceAvg30d": 9.63
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.99,
          "priceAvg30d": 9.24
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.99,
          "priceAvg30d": 8.43
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.33,
          "priceAvg30d": 8.13
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.5,
          "priceAvg30d": 7.95
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 20.96,
          "priceAvg30d": 8.21
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.96,
          "priceAvg30d": 7.87
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.17,
          "priceAvg30d": 8.2
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.33,
          "priceAvg30d": 8.09
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.95,
          "priceAvg30d": 8.64
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.95,
          "priceAvg30d": 9.7
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.98,
          "priceAvg30d": 10.02
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.98,
          "priceAvg30d": 11.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.97,
          "priceAvg30d": 12.66
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.97,
          "priceAvg30d": 14.51
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.16,
          "priceAvg30d": 17.57
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.98,
          "priceAvg30d": 20.85
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.03,
          "priceAvg30d": 21.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.03,
          "priceAvg30d": 21.93
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.5,
          "priceAvg30d": 21.89
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.5,
          "priceAvg30d": 22.57
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.17,
          "priceAvg30d": 21.34
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.04,
          "priceAvg30d": 20.92
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.57,
          "priceAvg30d": 19.58
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.33,
          "priceAvg30d": 18.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.33,
          "priceAvg30d": 18.06
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.0,
          "priceAvg30d": 19.1
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.33,
          "priceAvg30d": 19.21
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.5,
          "priceAvg30d": 17.52
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.3,
          "priceAvg30d": 17.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 20.14,
          "priceAvg30d": 14.89
        }
      ],
      "avg": 16.36,
      "max": 29.16,
      "maxBlock": 33,
      "min": 9.17,
      "minBlock": 9,
      "spread3h": 9.99,
      "spreadLowAvg": 11.0,
      "spreadHighAvg": 20.99,
      "avg30d": 14.29,
      "spread30dAvg": 12.64,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.06,
          "priceAvg30d": 18.44
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.11,
          "priceAvg30d": 17.33
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.59,
          "priceAvg30d": 16.05
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.52,
          "priceAvg30d": 17.02
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.59,
          "priceAvg30d": 17.07
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.59,
          "priceAvg30d": 16.81
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.59,
          "priceAvg30d": 17.63
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.99,
          "priceAvg30d": 17.91
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.17,
          "priceAvg30d": 18.13
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 9.93,
          "priceAvg30d": 18.95
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.99,
          "priceAvg30d": 19.1
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.91,
          "priceAvg30d": 17.7
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.91,
          "priceAvg30d": 15.4
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.53,
          "priceAvg30d": 13.5
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.0,
          "priceAvg30d": 13.07
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.36,
          "priceAvg30d": 11.96
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 19.2,
          "priceAvg30d": 10.68
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.33,
          "priceAvg30d": 10.84
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.2,
          "priceAvg30d": 10.89
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.0,
          "priceAvg30d": 10.13
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 20.33,
          "priceAvg30d": 9.87
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 30.0,
          "priceAvg30d": 9.9
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 30.0,
          "priceAvg30d": 9.71
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.0,
          "priceAvg30d": 9.23
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 17.0,
          "priceAvg30d": 9.08
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 20.0,
          "priceAvg30d": 9.34
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.5,
          "priceAvg30d": 10.12
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.5,
          "priceAvg30d": 11.01
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 27.5,
          "priceAvg30d": 11.09
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.72,
          "priceAvg30d": 12.68
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.0,
          "priceAvg30d": 14.1
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 27.5,
          "priceAvg30d": 16.26
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.16,
          "priceAvg30d": 19.85
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.39,
          "priceAvg30d": 23.02
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 28.98,
          "priceAvg30d": 23.53
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 28.98,
          "priceAvg30d": 24.39
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.5,
          "priceAvg30d": 24.13
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.5,
          "priceAvg30d": 24.45
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.48,
          "priceAvg30d": 22.89
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.5,
          "priceAvg30d": 21.68
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.57,
          "priceAvg30d": 20.03
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.33,
          "priceAvg30d": 19.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.33,
          "priceAvg30d": 18.68
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.0,
          "priceAvg30d": 20.23
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.33,
          "priceAvg30d": 20.52
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.5,
          "priceAvg30d": 18.92
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.3,
          "priceAvg30d": 19.26
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.67,
          "priceAvg30d": 17.58
        }
      ],
      "avg": 20.38,
      "max": 30.0,
      "maxBlock": 20,
      "min": 9.17,
      "minBlock": 9,
      "spread3h": 13.18,
      "spreadLowAvg": 11.0,
      "spreadHighAvg": 24.18,
      "avg30d": 16.24,
      "spread30dAvg": 13.25,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.06,
          "priceAvg30d": 18.44
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.11,
          "priceAvg30d": 17.59
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.59,
          "priceAvg30d": 16.79
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.52,
          "priceAvg30d": 18.59
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.59,
          "priceAvg30d": 18.28
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.59,
          "priceAvg30d": 17.92
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.59,
          "priceAvg30d": 18.05
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.99,
          "priceAvg30d": 18.22
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.17,
          "priceAvg30d": 18.44
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 9.93,
          "priceAvg30d": 19.04
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.99,
          "priceAvg30d": 19.37
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.91,
          "priceAvg30d": 18.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.91,
          "priceAvg30d": 17.09
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.53,
          "priceAvg30d": 16.97
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.0,
          "priceAvg30d": 17.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.36,
          "priceAvg30d": 17.64
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.48,
          "priceAvg30d": 18.05
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.82,
          "priceAvg30d": 19.9
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.07,
          "priceAvg30d": 19.07
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 31.78,
          "priceAvg30d": 19.72
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.4,
          "priceAvg30d": 18.84
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 33.07,
          "priceAvg30d": 19.21
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 33.73,
          "priceAvg30d": 19.68
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 33.52,
          "priceAvg30d": 20.27
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.01,
          "priceAvg30d": 19.21
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 30.0,
          "priceAvg30d": 19.87
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 33.31,
          "priceAvg30d": 20.68
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 34.35,
          "priceAvg30d": 22.25
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 33.94,
          "priceAvg30d": 23.15
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 34.15,
          "priceAvg30d": 24.86
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.5,
          "priceAvg30d": 21.37
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.04,
          "priceAvg30d": 24.16
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.01,
          "priceAvg30d": 25.54
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.48,
          "priceAvg30d": 27.1
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.01,
          "priceAvg30d": 27.08
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.53,
          "priceAvg30d": 27.37
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.5,
          "priceAvg30d": 26.71
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.03,
          "priceAvg30d": 26.71
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.48,
          "priceAvg30d": 25.12
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.48,
          "priceAvg30d": 23.99
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.57,
          "priceAvg30d": 21.68
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.2,
          "priceAvg30d": 20.81
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.92,
          "priceAvg30d": 19.97
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.01,
          "priceAvg30d": 23.63
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.31,
          "priceAvg30d": 22.24
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.14,
          "priceAvg30d": 20.53
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 23.19,
          "priceAvg30d": 20.69
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.67,
          "priceAvg30d": 18.42
        }
      ],
      "avg": 23.99,
      "max": 34.35,
      "maxBlock": 28,
      "min": 9.17,
      "minBlock": 9,
      "spread3h": 20.65,
      "spreadLowAvg": 11.0,
      "spreadHighAvg": 31.65,
      "avg30d": 20.75,
      "spread30dAvg": 9.38,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.76,
          "priceAvg30d": 18.34
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.24,
          "priceAvg30d": 17.42
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.24,
          "priceAvg30d": 16.64
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.24,
          "priceAvg30d": 18.31
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.4,
          "priceAvg30d": 18.09
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.21,
          "priceAvg30d": 17.75
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.24,
          "priceAvg30d": 17.71
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.5,
          "priceAvg30d": 17.96
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.0,
          "priceAvg30d": 18.2
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.31,
          "priceAvg30d": 18.67
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.87,
          "priceAvg30d": 19.0
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.27,
          "priceAvg30d": 18.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.38,
          "priceAvg30d": 17.02
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.79,
          "priceAvg30d": 16.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.0,
          "priceAvg30d": 16.1
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.36,
          "priceAvg30d": 16.4
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.59,
          "priceAvg30d": 17.22
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.82,
          "priceAvg30d": 18.66
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.07,
          "priceAvg30d": 18.86
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 31.78,
          "priceAvg30d": 19.22
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.4,
          "priceAvg30d": 18.73
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 33.07,
          "priceAvg30d": 18.62
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 32.5,
          "priceAvg30d": 18.82
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 31.79,
          "priceAvg30d": 19.26
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.01,
          "priceAvg30d": 18.06
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 30.0,
          "priceAvg30d": 18.46
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 33.31,
          "priceAvg30d": 20.18
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 34.35,
          "priceAvg30d": 21.9
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 33.94,
          "priceAvg30d": 22.85
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 34.15,
          "priceAvg30d": 24.09
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.5,
          "priceAvg30d": 23.63
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.04,
          "priceAvg30d": 26.37
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.01,
          "priceAvg30d": 28.02
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.6,
          "priceAvg30d": 30.03
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.01,
          "priceAvg30d": 30.65
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.53,
          "priceAvg30d": 31.4
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.61,
          "priceAvg30d": 31.93
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.03,
          "priceAvg30d": 30.71
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.0,
          "priceAvg30d": 29.21
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.48,
          "priceAvg30d": 27.9
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.57,
          "priceAvg30d": 26.51
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.2,
          "priceAvg30d": 24.81
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.92,
          "priceAvg30d": 23.37
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.01,
          "priceAvg30d": 24.16
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.31,
          "priceAvg30d": 23.77
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.14,
          "priceAvg30d": 21.93
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 23.19,
          "priceAvg30d": 20.95
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.67,
          "priceAvg30d": 18.58
        }
      ],
      "avg": 25.65,
      "max": 34.35,
      "maxBlock": 28,
      "min": 11.76,
      "minBlock": 1,
      "spread3h": 19.05,
      "spreadLowAvg": 12.6,
      "spreadHighAvg": 31.65,
      "avg30d": 21.49,
      "spread30dAvg": 14.34,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.6,
          "priceAvg30d": 16.35
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.43,
          "priceAvg30d": 16.22
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.43,
          "priceAvg30d": 15.57
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.37,
          "priceAvg30d": 15.79
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 15.8
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.21,
          "priceAvg30d": 16.06
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.24,
          "priceAvg30d": 15.91
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.5,
          "priceAvg30d": 15.89
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.5,
          "priceAvg30d": 15.51
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.5,
          "priceAvg30d": 16.32
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 16.73
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.0,
          "priceAvg30d": 16.26
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.72,
          "priceAvg30d": 15.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.72,
          "priceAvg30d": 14.6
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.72,
          "priceAvg30d": 14.47
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.76,
          "priceAvg30d": 15.24
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.0,
          "priceAvg30d": 16.56
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.9,
          "priceAvg30d": 18.17
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.0,
          "priceAvg30d": 18.58
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 31.78,
          "priceAvg30d": 18.84
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.4,
          "priceAvg30d": 18.42
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 33.07,
          "priceAvg30d": 18.37
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.35,
          "priceAvg30d": 18.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 31.79,
          "priceAvg30d": 18.96
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 16.72,
          "priceAvg30d": 17.67
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 16.72,
          "priceAvg30d": 18.02
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 18.51,
          "priceAvg30d": 19.81
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 18.68,
          "priceAvg30d": 21.4
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.61,
          "priceAvg30d": 22.06
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 18.32,
          "priceAvg30d": 22.99
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.32,
          "priceAvg30d": 22.54
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.21,
          "priceAvg30d": 25.0
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 22.63,
          "priceAvg30d": 26.67
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.0,
          "priceAvg30d": 28.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 28.91
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.53,
          "priceAvg30d": 30.14
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.61,
          "priceAvg30d": 30.57
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.0,
          "priceAvg30d": 29.59
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.92,
          "priceAvg30d": 28.05
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.06,
          "priceAvg30d": 26.5
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.96,
          "priceAvg30d": 25.16
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.59,
          "priceAvg30d": 23.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.42,
          "priceAvg30d": 21.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.32,
          "priceAvg30d": 21.41
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.76,
          "priceAvg30d": 21.06
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.6,
          "priceAvg30d": 19.61
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.76,
          "priceAvg30d": 18.96
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.59,
          "priceAvg30d": 16.5
        }
      ],
      "avg": 19.88,
      "max": 33.07,
      "maxBlock": 22,
      "min": 10.37,
      "minBlock": 4,
      "spread3h": 14.79,
      "spreadLowAvg": 12.05,
      "spreadHighAvg": 26.84,
      "avg30d": 20.1,
      "spread30dAvg": 14.17,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.6,
          "priceAvg30d": 15.3
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.43,
          "priceAvg30d": 15.58
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.43,
          "priceAvg30d": 14.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.37,
          "priceAvg30d": 14.75
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 14.72
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.21,
          "priceAvg30d": 14.95
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.24,
          "priceAvg30d": 14.71
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.5,
          "priceAvg30d": 14.76
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.5,
          "priceAvg30d": 14.75
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.5,
          "priceAvg30d": 15.31
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 15.79
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.0,
          "priceAvg30d": 15.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.72,
          "priceAvg30d": 15.03
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.72,
          "priceAvg30d": 14.15
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.72,
          "priceAvg30d": 13.8
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.76,
          "priceAvg30d": 14.27
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.0,
          "priceAvg30d": 15.5
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.72,
          "priceAvg30d": 17.46
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 17.0,
          "priceAvg30d": 18.03
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 17.0,
          "priceAvg30d": 18.34
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.0,
          "priceAvg30d": 18.19
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 17.24,
          "priceAvg30d": 18.12
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 18.32,
          "priceAvg30d": 18.44
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 18.68,
          "priceAvg30d": 18.76
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 16.72,
          "priceAvg30d": 17.08
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 16.72,
          "priceAvg30d": 17.43
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 18.51,
          "priceAvg30d": 19.49
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 18.68,
          "priceAvg30d": 21.24
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.61,
          "priceAvg30d": 21.86
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 18.32,
          "priceAvg30d": 22.58
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.32,
          "priceAvg30d": 22.34
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.21,
          "priceAvg30d": 24.04
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 22.63,
          "priceAvg30d": 25.35
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.0,
          "priceAvg30d": 28.36
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 28.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.53,
          "priceAvg30d": 29.75
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.61,
          "priceAvg30d": 30.22
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.0,
          "priceAvg30d": 29.37
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.92,
          "priceAvg30d": 27.94
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.06,
          "priceAvg30d": 26.34
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.96,
          "priceAvg30d": 25.03
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.59,
          "priceAvg30d": 23.01
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.42,
          "priceAvg30d": 21.49
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.32,
          "priceAvg30d": 20.38
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.76,
          "priceAvg30d": 18.79
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.6,
          "priceAvg30d": 16.98
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.76,
          "priceAvg30d": 16.67
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.59,
          "priceAvg30d": 15.1
        }
      ],
      "avg": 18.19,
      "max": 32.53,
      "maxBlock": 36,
      "min": 10.37,
      "minBlock": 4,
      "spread3h": 16.31,
      "spreadLowAvg": 12.05,
      "spreadHighAvg": 28.36,
      "avg30d": 19.39,
      "spread30dAvg": 14.66,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.6,
          "priceAvg30d": 15.3
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.43,
          "priceAvg30d": 15.58
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.43,
          "priceAvg30d": 14.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.37,
          "priceAvg30d": 14.75
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 14.72
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.21,
          "priceAvg30d": 14.95
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.24,
          "priceAvg30d": 14.71
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.5,
          "priceAvg30d": 14.76
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.5,
          "priceAvg30d": 14.75
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.5,
          "priceAvg30d": 15.31
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 15.79
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.0,
          "priceAvg30d": 15.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.72,
          "priceAvg30d": 15.03
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.72,
          "priceAvg30d": 14.15
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.72,
          "priceAvg30d": 13.72
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.76,
          "priceAvg30d": 13.69
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.0,
          "priceAvg30d": 14.52
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.72,
          "priceAvg30d": 15.69
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 17.0,
          "priceAvg30d": 15.18
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 17.0,
          "priceAvg30d": 14.12
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.0,
          "priceAvg30d": 14.26
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 16.37,
          "priceAvg30d": 13.97
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 16.36,
          "priceAvg30d": 13.77
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 18.68,
          "priceAvg30d": 13.69
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 16.72,
          "priceAvg30d": 12.39
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 16.72,
          "priceAvg30d": 12.62
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 18.51,
          "priceAvg30d": 14.2
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 16.36,
          "priceAvg30d": 15.64
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 16.37,
          "priceAvg30d": 15.89
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 18.32,
          "priceAvg30d": 16.94
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.32,
          "priceAvg30d": 19.09
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.21,
          "priceAvg30d": 22.62
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 22.63,
          "priceAvg30d": 25.24
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.0,
          "priceAvg30d": 28.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 28.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.53,
          "priceAvg30d": 29.75
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.61,
          "priceAvg30d": 30.22
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.0,
          "priceAvg30d": 29.37
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.92,
          "priceAvg30d": 27.94
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.06,
          "priceAvg30d": 26.34
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.96,
          "priceAvg30d": 25.03
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.59,
          "priceAvg30d": 23.01
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.42,
          "priceAvg30d": 21.49
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.32,
          "priceAvg30d": 20.38
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.76,
          "priceAvg30d": 18.79
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.6,
          "priceAvg30d": 16.98
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.76,
          "priceAvg30d": 16.67
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.59,
          "priceAvg30d": 15.1
        }
      ],
      "avg": 18.04,
      "max": 32.53,
      "maxBlock": 36,
      "min": 10.37,
      "minBlock": 4,
      "spread3h": 16.31,
      "spreadLowAvg": 12.05,
      "spreadHighAvg": 28.36,
      "avg30d": 18.03,
      "spread30dAvg": 15.84,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.6,
          "priceAvg30d": 15.3
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.43,
          "priceAvg30d": 15.58
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.43,
          "priceAvg30d": 14.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.37,
          "priceAvg30d": 14.75
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 14.72
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.21,
          "priceAvg30d": 14.95
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.24,
          "priceAvg30d": 14.71
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.5,
          "priceAvg30d": 14.76
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.5,
          "priceAvg30d": 14.75
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.5,
          "priceAvg30d": 15.31
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 15.79
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.0,
          "priceAvg30d": 15.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.72,
          "priceAvg30d": 15.03
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.72,
          "priceAvg30d": 14.15
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.72,
          "priceAvg30d": 13.64
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.76,
          "priceAvg30d": 13.15
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.0,
          "priceAvg30d": 13.8
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.72,
          "priceAvg30d": 14.62
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 17.0,
          "priceAvg30d": 14.4
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 17.0,
          "priceAvg30d": 12.85
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.0,
          "priceAvg30d": 12.57
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 16.37,
          "priceAvg30d": 11.76
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 16.36,
          "priceAvg30d": 11.26
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 18.68,
          "priceAvg30d": 11.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 16.72,
          "priceAvg30d": 10.18
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 16.72,
          "priceAvg30d": 10.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 18.51,
          "priceAvg30d": 12.29
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 16.36,
          "priceAvg30d": 14.19
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 16.37,
          "priceAvg30d": 14.47
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 18.32,
          "priceAvg30d": 16.0
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.32,
          "priceAvg30d": 18.07
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.21,
          "priceAvg30d": 21.51
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 22.63,
          "priceAvg30d": 24.26
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.0,
          "priceAvg30d": 28.18
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 28.6
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.53,
          "priceAvg30d": 29.75
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.61,
          "priceAvg30d": 30.22
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.0,
          "priceAvg30d": 29.37
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.92,
          "priceAvg30d": 27.94
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.06,
          "priceAvg30d": 26.34
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.96,
          "priceAvg30d": 25.03
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.59,
          "priceAvg30d": 23.01
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.42,
          "priceAvg30d": 21.49
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.32,
          "priceAvg30d": 20.38
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.76,
          "priceAvg30d": 18.79
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.6,
          "priceAvg30d": 16.98
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.76,
          "priceAvg30d": 16.67
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.59,
          "priceAvg30d": 15.1
        }
      ],
      "avg": 18.04,
      "max": 32.53,
      "maxBlock": 36,
      "min": 10.37,
      "minBlock": 4,
      "spread3h": 16.31,
      "spreadLowAvg": 12.05,
      "spreadHighAvg": 28.36,
      "avg30d": 17.49,
      "spread30dAvg": 17.63,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.6,
          "priceAvg30d": 14.4
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.21,
          "priceAvg30d": 14.65
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.03,
          "priceAvg30d": 13.06
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.03,
          "priceAvg30d": 12.38
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.03,
          "priceAvg30d": 11.99
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.03,
          "priceAvg30d": 12.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.03,
          "priceAvg30d": 12.08
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.21,
          "priceAvg30d": 12.19
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.6,
          "priceAvg30d": 12.28
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.6,
          "priceAvg30d": 13.39
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 14.25
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.95,
          "priceAvg30d": 14.58
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.95,
          "priceAvg30d": 14.13
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.6,
          "priceAvg30d": 12.05
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.21,
          "priceAvg30d": 11.35
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.03,
          "priceAvg30d": 11.56
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.95,
          "priceAvg30d": 12.95
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.6,
          "priceAvg30d": 13.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.6,
          "priceAvg30d": 13.48
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.21,
          "priceAvg30d": 13.1
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.03,
          "priceAvg30d": 12.51
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.03,
          "priceAvg30d": 12.35
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.03,
          "priceAvg30d": 12.31
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.86,
          "priceAvg30d": 12.19
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.75,
          "priceAvg30d": 11.51
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.86,
          "priceAvg30d": 11.63
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.21,
          "priceAvg30d": 12.88
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.6,
          "priceAvg30d": 14.53
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.95,
          "priceAvg30d": 15.15
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 14.63,
          "priceAvg30d": 16.28
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.32,
          "priceAvg30d": 18.58
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.21,
          "priceAvg30d": 22.1
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 22.63,
          "priceAvg30d": 25.04
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.0,
          "priceAvg30d": 28.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 28.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.53,
          "priceAvg30d": 29.75
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.61,
          "priceAvg30d": 30.22
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.0,
          "priceAvg30d": 29.37
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.92,
          "priceAvg30d": 27.94
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.06,
          "priceAvg30d": 26.34
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.96,
          "priceAvg30d": 25.03
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.59,
          "priceAvg30d": 23.01
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.42,
          "priceAvg30d": 21.48
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.32,
          "priceAvg30d": 20.38
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.76,
          "priceAvg30d": 18.64
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.6,
          "priceAvg30d": 16.63
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.76,
          "priceAvg30d": 15.99
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.63,
          "priceAvg30d": 13.6
        }
      ],
      "avg": 15.1,
      "max": 32.53,
      "maxBlock": 36,
      "min": 9.75,
      "minBlock": 25,
      "spread3h": 18.26,
      "spreadLowAvg": 10.1,
      "spreadHighAvg": 28.36,
      "avg30d": 16.92,
      "spread30dAvg": 17.41,
      "historyDays": 30
    }
  }
};
