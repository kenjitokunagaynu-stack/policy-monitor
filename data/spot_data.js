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
  "targetDate": "2026-09-16",
  "fetchedAt": "2026-09-16T09:05:06+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 19.38,
        "priceAvg30d": 17.6
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 16.94,
        "priceAvg30d": 16.81
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 14.8,
        "priceAvg30d": 16.26
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 14.08,
        "priceAvg30d": 16.33
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 13.81,
        "priceAvg30d": 16.24
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 14.08,
        "priceAvg30d": 16.27
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 14.28,
        "priceAvg30d": 16.49
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 14.9,
        "priceAvg30d": 16.57
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 14.73,
        "priceAvg30d": 16.75
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 16.95,
        "priceAvg30d": 17.22
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 18.0,
        "priceAvg30d": 17.94
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 19.26,
        "priceAvg30d": 17.54
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 18.75,
        "priceAvg30d": 16.95
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 17.5,
        "priceAvg30d": 16.4
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 16.95,
        "priceAvg30d": 15.87
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 18.82,
        "priceAvg30d": 16.32
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 20.0,
        "priceAvg30d": 17.24
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 22.4,
        "priceAvg30d": 18.98
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 23.51,
        "priceAvg30d": 19.55
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 23.26,
        "priceAvg30d": 19.43
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 23.11,
        "priceAvg30d": 18.47
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 22.74,
        "priceAvg30d": 18.49
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 22.74,
        "priceAvg30d": 18.56
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 22.26,
        "priceAvg30d": 18.4
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 18.56,
        "priceAvg30d": 17.04
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 19.6,
        "priceAvg30d": 17.48
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 22.74,
        "priceAvg30d": 18.87
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 23.93,
        "priceAvg30d": 20.64
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 24.81,
        "priceAvg30d": 22.26
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 25.0,
        "priceAvg30d": 24.25
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 25.0,
        "priceAvg30d": 23.27
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 25.82,
        "priceAvg30d": 26.26
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 26.3,
        "priceAvg30d": 27.81
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 28.77,
        "priceAvg30d": 30.01
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 26.95,
        "priceAvg30d": 30.03
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 26.45,
        "priceAvg30d": 30.71
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 26.95,
        "priceAvg30d": 30.69
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 26.5,
        "priceAvg30d": 30.13
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 24.81,
        "priceAvg30d": 28.39
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 23.41,
        "priceAvg30d": 26.35
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 23.11,
        "priceAvg30d": 24.55
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 22.27,
        "priceAvg30d": 22.5
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 21.16,
        "priceAvg30d": 21.27
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 20.94,
        "priceAvg30d": 23.18
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 20.0,
        "priceAvg30d": 22.01
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 17.23,
        "priceAvg30d": 20.03
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 16.95,
        "priceAvg30d": 19.84
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 14.1,
        "priceAvg30d": 18.04
      }
    ],
    "avg": 20.72,
    "max": 28.77,
    "maxBlock": 34,
    "min": 13.81,
    "minBlock": 5,
    "spread3h": 11.4,
    "spreadLowAvg": 14.85,
    "spreadHighAvg": 26.25,
    "avg30d": 20.67,
    "spread30dAvg": 14.12,
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
          "price": 21.98,
          "priceAvg30d": 14.12
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 21.1,
          "priceAvg30d": 13.56
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.35,
          "priceAvg30d": 13.11
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 20.31,
          "priceAvg30d": 12.98
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.62,
          "priceAvg30d": 13.71
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.78,
          "priceAvg30d": 14.19
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.94,
          "priceAvg30d": 15.18
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.94,
          "priceAvg30d": 15.39
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.94,
          "priceAvg30d": 15.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.03,
          "priceAvg30d": 15.78
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.53,
          "priceAvg30d": 15.65
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.23,
          "priceAvg30d": 14.72
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.7,
          "priceAvg30d": 13.86
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 18.58,
          "priceAvg30d": 12.11
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.32,
          "priceAvg30d": 11.29
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.0,
          "priceAvg30d": 10.66
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.01,
          "priceAvg30d": 10.45
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 14.22,
          "priceAvg30d": 10.58
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.73,
          "priceAvg30d": 10.21
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.53,
          "priceAvg30d": 9.42
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.53,
          "priceAvg30d": 8.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.83,
          "priceAvg30d": 8.87
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.42,
          "priceAvg30d": 9.14
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.5,
          "priceAvg30d": 8.46
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.53,
          "priceAvg30d": 8.02
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.53,
          "priceAvg30d": 7.94
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.73,
          "priceAvg30d": 9.29
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 21.28,
          "priceAvg30d": 10.88
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.6,
          "priceAvg30d": 11.18
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.33,
          "priceAvg30d": 12.78
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.82,
          "priceAvg30d": 14.32
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 22.08,
          "priceAvg30d": 16.63
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 22.8,
          "priceAvg30d": 19.54
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.51,
          "priceAvg30d": 22.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.01,
          "priceAvg30d": 22.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 23.15
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.02,
          "priceAvg30d": 22.8
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.97,
          "priceAvg30d": 23.41
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.3,
          "priceAvg30d": 22.25
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.2,
          "priceAvg30d": 21.22
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.91,
          "priceAvg30d": 20.09
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.16,
          "priceAvg30d": 19.23
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.01,
          "priceAvg30d": 18.06
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.29,
          "priceAvg30d": 18.44
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.05,
          "priceAvg30d": 18.76
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.16,
          "priceAvg30d": 17.13
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.25,
          "priceAvg30d": 16.5
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.87,
          "priceAvg30d": 15.11
        }
      ],
      "avg": 19.55,
      "max": 30.51,
      "maxBlock": 34,
      "min": 9.53,
      "minBlock": 20,
      "spread3h": 15.17,
      "spreadLowAvg": 10.96,
      "spreadHighAvg": 26.12,
      "avg30d": 14.78,
      "spread30dAvg": 12.69,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.77,
          "priceAvg30d": 18.74
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 21.1,
          "priceAvg30d": 17.73
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.35,
          "priceAvg30d": 16.57
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 20.31,
          "priceAvg30d": 16.46
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.62,
          "priceAvg30d": 16.69
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.78,
          "priceAvg30d": 16.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.94,
          "priceAvg30d": 17.79
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.94,
          "priceAvg30d": 17.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.94,
          "priceAvg30d": 18.39
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.03,
          "priceAvg30d": 18.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.67,
          "priceAvg30d": 19.34
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.0,
          "priceAvg30d": 18.51
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.23,
          "priceAvg30d": 16.93
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 18.58,
          "priceAvg30d": 14.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.32,
          "priceAvg30d": 13.93
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.0,
          "priceAvg30d": 13.36
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.01,
          "priceAvg30d": 11.48
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 14.22,
          "priceAvg30d": 12.33
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 14.77,
          "priceAvg30d": 12.87
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.96,
          "priceAvg30d": 12.45
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.73,
          "priceAvg30d": 11.72
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.95,
          "priceAvg30d": 12.0
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.42,
          "priceAvg30d": 11.71
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.5,
          "priceAvg30d": 10.78
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.13,
          "priceAvg30d": 9.57
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.28,
          "priceAvg30d": 10.09
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 14.15,
          "priceAvg30d": 11.64
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 21.28,
          "priceAvg30d": 13.02
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.6,
          "priceAvg30d": 13.25
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.33,
          "priceAvg30d": 15.28
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.82,
          "priceAvg30d": 16.86
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 26.2,
          "priceAvg30d": 19.58
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 22.87
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.51,
          "priceAvg30d": 26.04
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.01,
          "priceAvg30d": 26.02
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 26.59
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.02,
          "priceAvg30d": 26.58
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.97,
          "priceAvg30d": 26.51
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.3,
          "priceAvg30d": 24.62
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.2,
          "priceAvg30d": 23.19
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.91,
          "priceAvg30d": 21.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.16,
          "priceAvg30d": 20.35
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.81,
          "priceAvg30d": 19.27
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.29,
          "priceAvg30d": 20.1
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.05,
          "priceAvg30d": 21.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.16,
          "priceAvg30d": 19.76
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.25,
          "priceAvg30d": 20.25
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.23,
          "priceAvg30d": 19.06
        }
      ],
      "avg": 20.45,
      "max": 30.51,
      "maxBlock": 34,
      "min": 10.13,
      "minBlock": 25,
      "spread3h": 14.75,
      "spreadLowAvg": 13.26,
      "spreadHighAvg": 28.01,
      "avg30d": 17.53,
      "spread30dAvg": 13.94,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.77,
          "priceAvg30d": 18.74
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 21.1,
          "priceAvg30d": 18.28
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.94,
          "priceAvg30d": 17.61
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 20.94,
          "priceAvg30d": 18.15
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.94,
          "priceAvg30d": 18.03
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.94,
          "priceAvg30d": 17.97
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.94,
          "priceAvg30d": 18.27
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.94,
          "priceAvg30d": 18.22
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.94,
          "priceAvg30d": 18.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.03,
          "priceAvg30d": 18.9
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.67,
          "priceAvg30d": 19.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.0,
          "priceAvg30d": 19.0
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.67,
          "priceAvg30d": 18.17
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.27,
          "priceAvg30d": 18.3
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.67,
          "priceAvg30d": 18.7
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.71,
          "priceAvg30d": 19.28
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.77,
          "priceAvg30d": 20.45
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.0,
          "priceAvg30d": 22.76
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.11,
          "priceAvg30d": 22.39
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 33.5,
          "priceAvg30d": 22.69
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 30.79,
          "priceAvg30d": 22.23
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.0,
          "priceAvg30d": 22.72
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.09,
          "priceAvg30d": 23.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.8,
          "priceAvg30d": 23.24
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.0,
          "priceAvg30d": 21.71
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 30.0,
          "priceAvg30d": 22.42
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 30.48,
          "priceAvg30d": 23.54
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.5,
          "priceAvg30d": 25.16
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 31.0,
          "priceAvg30d": 25.95
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.98,
          "priceAvg30d": 27.58
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.46,
          "priceAvg30d": 24.47
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.48,
          "priceAvg30d": 27.33
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.01,
          "priceAvg30d": 28.86
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.51,
          "priceAvg30d": 29.84
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.01,
          "priceAvg30d": 29.31
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 29.23
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.02,
          "priceAvg30d": 28.54
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.97,
          "priceAvg30d": 28.48
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.3,
          "priceAvg30d": 26.53
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.2,
          "priceAvg30d": 25.06
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.91,
          "priceAvg30d": 22.69
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.16,
          "priceAvg30d": 22.01
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.81,
          "priceAvg30d": 21.13
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.42,
          "priceAvg30d": 24.35
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.11,
          "priceAvg30d": 22.94
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.57,
          "priceAvg30d": 21.37
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.27,
          "priceAvg30d": 21.68
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.23,
          "priceAvg30d": 19.61
        }
      ],
      "avg": 26.17,
      "max": 33.5,
      "maxBlock": 20,
      "min": 20.94,
      "minBlock": 3,
      "spread3h": 8.4,
      "spreadLowAvg": 21.56,
      "spreadHighAvg": 29.96,
      "avg30d": 22.4,
      "spread30dAvg": 11.26,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.77,
          "priceAvg30d": 18.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.73,
          "priceAvg30d": 18.25
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.65,
          "priceAvg30d": 17.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.48,
          "priceAvg30d": 18.08
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.48,
          "priceAvg30d": 17.98
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.48,
          "priceAvg30d": 17.99
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.48,
          "priceAvg30d": 18.1
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.73,
          "priceAvg30d": 18.27
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.73,
          "priceAvg30d": 18.64
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.73,
          "priceAvg30d": 18.95
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.82,
          "priceAvg30d": 19.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.99,
          "priceAvg30d": 19.23
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.0,
          "priceAvg30d": 18.63
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.98,
          "priceAvg30d": 18.41
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.67,
          "priceAvg30d": 18.23
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.71,
          "priceAvg30d": 18.78
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.77,
          "priceAvg30d": 20.29
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.0,
          "priceAvg30d": 22.21
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.11,
          "priceAvg30d": 22.87
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 33.5,
          "priceAvg30d": 23.14
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 30.79,
          "priceAvg30d": 22.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.0,
          "priceAvg30d": 22.75
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.09,
          "priceAvg30d": 22.91
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.8,
          "priceAvg30d": 23.01
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.0,
          "priceAvg30d": 21.45
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 30.0,
          "priceAvg30d": 21.97
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 30.48,
          "priceAvg30d": 24.21
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.96,
          "priceAvg30d": 26.1
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 31.0,
          "priceAvg30d": 27.02
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.98,
          "priceAvg30d": 28.04
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.46,
          "priceAvg30d": 27.14
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.48,
          "priceAvg30d": 29.61
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.01,
          "priceAvg30d": 31.02
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.51,
          "priceAvg30d": 32.78
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.01,
          "priceAvg30d": 32.87
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.03,
          "priceAvg30d": 33.44
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.02,
          "priceAvg30d": 33.8
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.97,
          "priceAvg30d": 32.64
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.3,
          "priceAvg30d": 30.94
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.2,
          "priceAvg30d": 28.97
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.91,
          "priceAvg30d": 27.32
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.16,
          "priceAvg30d": 25.92
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.81,
          "priceAvg30d": 24.5
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.42,
          "priceAvg30d": 24.86
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.11,
          "priceAvg30d": 24.5
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.57,
          "priceAvg30d": 22.63
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.4,
          "priceAvg30d": 21.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.23,
          "priceAvg30d": 19.81
        }
      ],
      "avg": 26.55,
      "max": 33.5,
      "maxBlock": 20,
      "min": 22.23,
      "minBlock": 48,
      "spread3h": 7.27,
      "spreadLowAvg": 22.69,
      "spreadHighAvg": 29.96,
      "avg30d": 23.51,
      "spread30dAvg": 15.48,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.38,
          "priceAvg30d": 16.11
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.98,
          "priceAvg30d": 16.15
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 15.7
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 15.26
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 15.32
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 15.8
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.98,
          "priceAvg30d": 15.77
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.98,
          "priceAvg30d": 15.91
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.98,
          "priceAvg30d": 15.84
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.37,
          "priceAvg30d": 16.46
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.98,
          "priceAvg30d": 16.94
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.04,
          "priceAvg30d": 16.93
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.42,
          "priceAvg30d": 16.72
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.75,
          "priceAvg30d": 15.72
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.38,
          "priceAvg30d": 15.64
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.31,
          "priceAvg30d": 15.97
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 14.4,
          "priceAvg30d": 17.14
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.0,
          "priceAvg30d": 20.07
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.11,
          "priceAvg30d": 21.3
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 33.5,
          "priceAvg30d": 22.09
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 30.79,
          "priceAvg30d": 21.34
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 30.0,
          "priceAvg30d": 21.3
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.09,
          "priceAvg30d": 21.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.65,
          "priceAvg30d": 21.53
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 16.98,
          "priceAvg30d": 19.48
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 17.23,
          "priceAvg30d": 20.08
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.2,
          "priceAvg30d": 22.67
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.9,
          "priceAvg30d": 24.51
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 25.33
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.2,
          "priceAvg30d": 26.23
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.38,
          "priceAvg30d": 25.61
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.12,
          "priceAvg30d": 28.09
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.93,
          "priceAvg30d": 28.69
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.84,
          "priceAvg30d": 30.96
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.64,
          "priceAvg30d": 30.54
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.86,
          "priceAvg30d": 31.63
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.27,
          "priceAvg30d": 32.08
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.93,
          "priceAvg30d": 30.97
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.0,
          "priceAvg30d": 29.33
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 18.54,
          "priceAvg30d": 27.38
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.17,
          "priceAvg30d": 25.7
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.86,
          "priceAvg30d": 24.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.7,
          "priceAvg30d": 22.44
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.64,
          "priceAvg30d": 22.14
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.42,
          "priceAvg30d": 21.73
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.39,
          "priceAvg30d": 19.98
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.02,
          "priceAvg30d": 19.27
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 16.72
        }
      ],
      "avg": 18.06,
      "max": 33.5,
      "maxBlock": 20,
      "min": 10.31,
      "minBlock": 16,
      "spread3h": 9.39,
      "spreadLowAvg": 18.51,
      "spreadHighAvg": 27.9,
      "avg30d": 21.41,
      "spread30dAvg": 15.78,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.38,
          "priceAvg30d": 15.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.98,
          "priceAvg30d": 15.55
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 15.14
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 14.92
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 14.94
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 15.2
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.98,
          "priceAvg30d": 15.18
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.98,
          "priceAvg30d": 15.34
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.98,
          "priceAvg30d": 15.3
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.37,
          "priceAvg30d": 15.93
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.98,
          "priceAvg30d": 16.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.04,
          "priceAvg30d": 16.49
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.42,
          "priceAvg30d": 16.35
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.75,
          "priceAvg30d": 15.33
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.38,
          "priceAvg30d": 15.05
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.31,
          "priceAvg30d": 15.08
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 14.4,
          "priceAvg30d": 16.08
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.0,
          "priceAvg30d": 18.67
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.11,
          "priceAvg30d": 19.98
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 33.5,
          "priceAvg30d": 20.43
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 30.79,
          "priceAvg30d": 19.95
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 30.0,
          "priceAvg30d": 19.98
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.09,
          "priceAvg30d": 20.34
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.65,
          "priceAvg30d": 20.24
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 16.98,
          "priceAvg30d": 18.37
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 17.23,
          "priceAvg30d": 18.74
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.2,
          "priceAvg30d": 21.63
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.9,
          "priceAvg30d": 23.85
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 24.48
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.2,
          "priceAvg30d": 24.98
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.38,
          "priceAvg30d": 24.48
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.12,
          "priceAvg30d": 26.18
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.93,
          "priceAvg30d": 27.38
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.84,
          "priceAvg30d": 30.37
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.64,
          "priceAvg30d": 30.32
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.86,
          "priceAvg30d": 31.26
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.27,
          "priceAvg30d": 31.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.93,
          "priceAvg30d": 30.7
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.0,
          "priceAvg30d": 29.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 18.54,
          "priceAvg30d": 27.2
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.17,
          "priceAvg30d": 25.65
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.86,
          "priceAvg30d": 24.07
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.7,
          "priceAvg30d": 22.31
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.64,
          "priceAvg30d": 21.11
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.42,
          "priceAvg30d": 19.67
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.39,
          "priceAvg30d": 17.62
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.02,
          "priceAvg30d": 17.43
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 15.32
        }
      ],
      "avg": 18.06,
      "max": 33.5,
      "maxBlock": 20,
      "min": 10.31,
      "minBlock": 16,
      "spread3h": 9.39,
      "spreadLowAvg": 18.51,
      "spreadHighAvg": 27.9,
      "avg30d": 20.56,
      "spread30dAvg": 15.6,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.38,
          "priceAvg30d": 15.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.98,
          "priceAvg30d": 15.55
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 15.14
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 14.92
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 14.94
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 15.2
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.98,
          "priceAvg30d": 15.18
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.98,
          "priceAvg30d": 15.34
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.98,
          "priceAvg30d": 15.3
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.37,
          "priceAvg30d": 15.93
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.98,
          "priceAvg30d": 16.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.04,
          "priceAvg30d": 16.49
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.42,
          "priceAvg30d": 16.35
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.75,
          "priceAvg30d": 15.33
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.38,
          "priceAvg30d": 14.97
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.31,
          "priceAvg30d": 14.49
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 14.4,
          "priceAvg30d": 14.99
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.76,
          "priceAvg30d": 16.44
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.76,
          "priceAvg30d": 16.48
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.63,
          "priceAvg30d": 15.51
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.76,
          "priceAvg30d": 15.42
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.76,
          "priceAvg30d": 15.33
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.76,
          "priceAvg30d": 15.0
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.76,
          "priceAvg30d": 14.62
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.76,
          "priceAvg30d": 13.07
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.31,
          "priceAvg30d": 13.31
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.64,
          "priceAvg30d": 15.36
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.38,
          "priceAvg30d": 16.93
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.98,
          "priceAvg30d": 16.69
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.98,
          "priceAvg30d": 18.06
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.38,
          "priceAvg30d": 20.58
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.83,
          "priceAvg30d": 24.66
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.95,
          "priceAvg30d": 27.27
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 14.63,
          "priceAvg30d": 30.34
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.64,
          "priceAvg30d": 30.32
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.86,
          "priceAvg30d": 31.26
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.27,
          "priceAvg30d": 31.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.93,
          "priceAvg30d": 30.7
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.0,
          "priceAvg30d": 29.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 18.54,
          "priceAvg30d": 27.2
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.17,
          "priceAvg30d": 25.65
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.86,
          "priceAvg30d": 24.07
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.7,
          "priceAvg30d": 22.31
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.64,
          "priceAvg30d": 21.11
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.42,
          "priceAvg30d": 19.67
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.39,
          "priceAvg30d": 17.62
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.02,
          "priceAvg30d": 17.43
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 15.32
        }
      ],
      "avg": 12.92,
      "max": 19.27,
      "maxBlock": 37,
      "min": 9.63,
      "minBlock": 20,
      "spread3h": 7.4,
      "spreadLowAvg": 10.53,
      "spreadHighAvg": 17.93,
      "avg30d": 18.96,
      "spread30dAvg": 16.76,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.38,
          "priceAvg30d": 14.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.98,
          "priceAvg30d": 14.93
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 14.53
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 14.36
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 14.38
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 14.6
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.98,
          "priceAvg30d": 14.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.98,
          "priceAvg30d": 14.52
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 5.01,
          "priceAvg30d": 14.51
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.37,
          "priceAvg30d": 14.98
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.98,
          "priceAvg30d": 15.64
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.04,
          "priceAvg30d": 15.82
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.42,
          "priceAvg30d": 15.54
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 6.0,
          "priceAvg30d": 14.41
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.38,
          "priceAvg30d": 13.97
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.31,
          "priceAvg30d": 13.62
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 14.4,
          "priceAvg30d": 13.97
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.76,
          "priceAvg30d": 15.16
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.76,
          "priceAvg30d": 14.45
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.63,
          "priceAvg30d": 12.88
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.76,
          "priceAvg30d": 12.19
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.76,
          "priceAvg30d": 11.79
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.76,
          "priceAvg30d": 11.69
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.76,
          "priceAvg30d": 11.64
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.76,
          "priceAvg30d": 10.3
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.31,
          "priceAvg30d": 10.76
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.64,
          "priceAvg30d": 12.59
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.38,
          "priceAvg30d": 14.7
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.98,
          "priceAvg30d": 14.71
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.98,
          "priceAvg30d": 16.0
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.38,
          "priceAvg30d": 18.28
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.83,
          "priceAvg30d": 22.32
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.95,
          "priceAvg30d": 25.06
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.81,
          "priceAvg30d": 28.49
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 13.81,
          "priceAvg30d": 28.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.86,
          "priceAvg30d": 30.35
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.27,
          "priceAvg30d": 31.04
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.93,
          "priceAvg30d": 30.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.0,
          "priceAvg30d": 27.95
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 13.5,
          "priceAvg30d": 25.27
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.17,
          "priceAvg30d": 23.94
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.86,
          "priceAvg30d": 22.22
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.7,
          "priceAvg30d": 20.24
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.64,
          "priceAvg30d": 19.21
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.42,
          "priceAvg30d": 17.82
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.39,
          "priceAvg30d": 16.09
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.02,
          "priceAvg30d": 16.08
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 14.55
        }
      ],
      "avg": 12.47,
      "max": 19.27,
      "maxBlock": 37,
      "min": 5.01,
      "minBlock": 9,
      "spread3h": 4.94,
      "spreadLowAvg": 11.22,
      "spreadHighAvg": 16.15,
      "avg30d": 17.41,
      "spread30dAvg": 18.19,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.38,
          "priceAvg30d": 14.1
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.98,
          "priceAvg30d": 14.52
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 12.99
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 12.44
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 12.06
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 12.18
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.98,
          "priceAvg30d": 12.18
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.98,
          "priceAvg30d": 12.51
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.98,
          "priceAvg30d": 12.53
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.37,
          "priceAvg30d": 13.82
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.98,
          "priceAvg30d": 14.74
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.04,
          "priceAvg30d": 15.28
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.42,
          "priceAvg30d": 15.38
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.75,
          "priceAvg30d": 12.92
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.38,
          "priceAvg30d": 12.02
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.31,
          "priceAvg30d": 11.83
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.1,
          "priceAvg30d": 13.28
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.76,
          "priceAvg30d": 14.17
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.76,
          "priceAvg30d": 14.48
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.63,
          "priceAvg30d": 13.63
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.76,
          "priceAvg30d": 12.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.76,
          "priceAvg30d": 12.68
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.76,
          "priceAvg30d": 12.54
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.76,
          "priceAvg30d": 12.26
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.76,
          "priceAvg30d": 11.53
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.31,
          "priceAvg30d": 11.72
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.31,
          "priceAvg30d": 13.03
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 14.6
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.98,
          "priceAvg30d": 15.41
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.98,
          "priceAvg30d": 17.07
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.38,
          "priceAvg30d": 20.1
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.83,
          "priceAvg30d": 24.13
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.95,
          "priceAvg30d": 27.07
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 14.63,
          "priceAvg30d": 30.34
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.64,
          "priceAvg30d": 30.32
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.86,
          "priceAvg30d": 31.26
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.27,
          "priceAvg30d": 31.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.93,
          "priceAvg30d": 30.7
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.0,
          "priceAvg30d": 29.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 18.54,
          "priceAvg30d": 27.2
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.17,
          "priceAvg30d": 25.65
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.86,
          "priceAvg30d": 24.07
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.7,
          "priceAvg30d": 22.3
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.64,
          "priceAvg30d": 21.11
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.42,
          "priceAvg30d": 19.52
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.39,
          "priceAvg30d": 17.27
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.02,
          "priceAvg30d": 16.74
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 13.53
        }
      ],
      "avg": 12.8,
      "max": 19.27,
      "maxBlock": 37,
      "min": 9.63,
      "minBlock": 20,
      "spread3h": 7.95,
      "spreadLowAvg": 9.98,
      "spreadHighAvg": 17.93,
      "avg30d": 17.56,
      "spread30dAvg": 18.46,
      "historyDays": 30
    }
  }
};
