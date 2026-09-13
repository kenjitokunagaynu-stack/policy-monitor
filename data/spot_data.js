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
  "targetDate": "2026-09-13",
  "fetchedAt": "2026-09-13T09:05:03+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 11.9,
        "priceAvg30d": 17.51
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 11.43,
        "priceAvg30d": 16.64
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 9.22,
        "priceAvg30d": 16.03
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 13.27,
        "priceAvg30d": 16.37
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 13.21,
        "priceAvg30d": 16.22
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 14.08,
        "priceAvg30d": 16.21
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 14.09,
        "priceAvg30d": 16.39
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 15.3,
        "priceAvg30d": 16.49
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 15.3,
        "priceAvg30d": 16.66
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 16.98,
        "priceAvg30d": 17.08
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 17.68,
        "priceAvg30d": 17.78
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 16.95,
        "priceAvg30d": 17.25
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 15.0,
        "priceAvg30d": 16.43
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 12.82,
        "priceAvg30d": 15.85
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 11.66,
        "priceAvg30d": 15.36
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 10.4,
        "priceAvg30d": 15.83
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 10.4,
        "priceAvg30d": 16.62
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 10.11,
        "priceAvg30d": 18.27
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 9.51,
        "priceAvg30d": 18.57
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 8.96,
        "priceAvg30d": 18.51
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 8.72,
        "priceAvg30d": 17.69
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 10.31,
        "priceAvg30d": 17.67
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 8.08,
        "priceAvg30d": 17.81
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 8.13,
        "priceAvg30d": 17.67
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 8.17,
        "priceAvg30d": 16.42
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 8.68,
        "priceAvg30d": 16.83
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 8.96,
        "priceAvg30d": 18.04
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 9.98,
        "priceAvg30d": 19.64
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 9.53,
        "priceAvg30d": 21.13
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 10.0,
        "priceAvg30d": 23.03
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 10.12,
        "priceAvg30d": 22.03
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 12.3,
        "priceAvg30d": 24.96
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 13.32,
        "priceAvg30d": 26.51
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 19.98,
        "priceAvg30d": 28.77
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 22.16,
        "priceAvg30d": 28.99
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 22.39,
        "priceAvg30d": 29.64
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 23.5,
        "priceAvg30d": 29.65
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 23.23,
        "priceAvg30d": 29.17
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 22.91,
        "priceAvg30d": 27.55
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 22.27,
        "priceAvg30d": 25.71
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 22.16,
        "priceAvg30d": 23.88
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 21.36,
        "priceAvg30d": 21.83
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 20.33,
        "priceAvg30d": 20.63
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 20.4,
        "priceAvg30d": 22.47
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 19.38,
        "priceAvg30d": 21.35
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 15.1,
        "priceAvg30d": 19.5
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 14.28,
        "priceAvg30d": 19.35
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 12.13,
        "priceAvg30d": 17.55
      }
    ],
    "avg": 14.29,
    "max": 23.5,
    "maxBlock": 37,
    "min": 8.08,
    "minBlock": 23,
    "spread3h": 13.33,
    "spreadLowAvg": 8.83,
    "spreadHighAvg": 22.16,
    "avg30d": 20.03,
    "spread30dAvg": 13.53,
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
          "price": 12.93,
          "priceAvg30d": 14.5
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.51,
          "priceAvg30d": 13.78
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.97,
          "priceAvg30d": 13.21
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.97,
          "priceAvg30d": 13.44
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.0,
          "priceAvg30d": 13.8
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.75,
          "priceAvg30d": 14.07
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.0,
          "priceAvg30d": 15.34
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.33,
          "priceAvg30d": 15.47
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.93,
          "priceAvg30d": 15.64
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.73,
          "priceAvg30d": 15.91
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.88,
          "priceAvg30d": 15.64
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.0,
          "priceAvg30d": 14.74
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.0,
          "priceAvg30d": 13.37
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.0,
          "priceAvg30d": 11.81
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.67,
          "priceAvg30d": 10.73
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.61,
          "priceAvg30d": 10.04
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.53,
          "priceAvg30d": 10.21
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.36,
          "priceAvg30d": 10.03
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.23,
          "priceAvg30d": 9.71
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.83,
          "priceAvg30d": 8.87
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.26,
          "priceAvg30d": 8.18
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.53,
          "priceAvg30d": 8.18
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.83,
          "priceAvg30d": 8.53
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.78,
          "priceAvg30d": 8.0
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.96,
          "priceAvg30d": 7.72
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.53,
          "priceAvg30d": 7.66
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.59,
          "priceAvg30d": 8.85
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 10.18
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.63,
          "priceAvg30d": 10.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.07,
          "priceAvg30d": 12.15
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.09,
          "priceAvg30d": 13.66
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.73,
          "priceAvg30d": 15.89
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.73,
          "priceAvg30d": 18.92
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.33,
          "priceAvg30d": 21.86
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.61,
          "priceAvg30d": 22.26
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.39,
          "priceAvg30d": 22.88
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 22.0,
          "priceAvg30d": 22.76
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.35,
          "priceAvg30d": 23.6
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.85,
          "priceAvg30d": 22.18
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.08,
          "priceAvg30d": 21.17
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 14.97,
          "priceAvg30d": 19.9
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.27,
          "priceAvg30d": 19.22
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 15.08,
          "priceAvg30d": 18.13
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 11.77,
          "priceAvg30d": 18.73
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.73,
          "priceAvg30d": 18.99
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.0,
          "priceAvg30d": 16.97
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.73,
          "priceAvg30d": 16.55
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.75,
          "priceAvg30d": 14.81
        }
      ],
      "avg": 13.77,
      "max": 22.39,
      "maxBlock": 36,
      "min": 8.78,
      "minBlock": 24,
      "spread3h": 9.36,
      "spreadLowAvg": 9.28,
      "spreadHighAvg": 18.64,
      "avg30d": 14.56,
      "spread30dAvg": 12.98,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.93,
          "priceAvg30d": 18.58
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.51,
          "priceAvg30d": 17.47
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.59,
          "priceAvg30d": 16.26
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.97,
          "priceAvg30d": 16.56
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.0,
          "priceAvg30d": 16.5
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.75,
          "priceAvg30d": 16.66
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.0,
          "priceAvg30d": 17.59
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.33,
          "priceAvg30d": 17.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.93,
          "priceAvg30d": 18.0
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.73,
          "priceAvg30d": 18.55
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.88,
          "priceAvg30d": 19.11
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.0,
          "priceAvg30d": 18.01
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.0,
          "priceAvg30d": 16.25
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.0,
          "priceAvg30d": 14.14
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.67,
          "priceAvg30d": 13.52
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.61,
          "priceAvg30d": 12.85
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.53,
          "priceAvg30d": 11.11
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.36,
          "priceAvg30d": 11.69
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.23,
          "priceAvg30d": 12.1
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.83,
          "priceAvg30d": 11.71
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.26,
          "priceAvg30d": 11.0
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.53,
          "priceAvg30d": 11.23
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.83,
          "priceAvg30d": 10.87
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.78,
          "priceAvg30d": 9.96
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.96,
          "priceAvg30d": 9.15
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.53,
          "priceAvg30d": 9.55
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.59,
          "priceAvg30d": 10.93
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 12.2
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.63,
          "priceAvg30d": 12.43
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.07,
          "priceAvg30d": 14.44
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.09,
          "priceAvg30d": 15.95
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.73,
          "priceAvg30d": 18.57
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.73,
          "priceAvg30d": 21.77
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.33,
          "priceAvg30d": 25.03
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.61,
          "priceAvg30d": 25.25
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.39,
          "priceAvg30d": 25.74
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 22.0,
          "priceAvg30d": 25.52
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.35,
          "priceAvg30d": 25.51
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.42,
          "priceAvg30d": 23.9
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.35,
          "priceAvg30d": 22.68
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.33,
          "priceAvg30d": 20.76
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.0,
          "priceAvg30d": 19.83
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.53,
          "priceAvg30d": 18.85
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.0,
          "priceAvg30d": 19.95
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.35,
          "priceAvg30d": 20.76
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.0,
          "priceAvg30d": 19.01
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.0,
          "priceAvg30d": 19.57
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.09,
          "priceAvg30d": 18.16
        }
      ],
      "avg": 14.76,
      "max": 22.39,
      "maxBlock": 36,
      "min": 8.78,
      "minBlock": 24,
      "spread3h": 10.12,
      "spreadLowAvg": 9.28,
      "spreadHighAvg": 19.41,
      "avg30d": 16.94,
      "spread30dAvg": 13.82,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.93,
          "priceAvg30d": 18.58
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.51,
          "priceAvg30d": 17.81
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.59,
          "priceAvg30d": 17.13
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.27,
          "priceAvg30d": 17.92
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.27,
          "priceAvg30d": 17.71
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.27,
          "priceAvg30d": 17.72
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.27,
          "priceAvg30d": 17.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.27,
          "priceAvg30d": 17.97
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.27,
          "priceAvg30d": 18.23
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.27,
          "priceAvg30d": 18.7
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.38,
          "priceAvg30d": 19.28
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.27,
          "priceAvg30d": 18.53
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.0,
          "priceAvg30d": 17.48
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 15.3,
          "priceAvg30d": 17.54
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.3,
          "priceAvg30d": 18.16
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.3,
          "priceAvg30d": 18.67
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 14.08,
          "priceAvg30d": 19.33
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.3,
          "priceAvg30d": 21.73
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.0,
          "priceAvg30d": 21.06
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.0,
          "priceAvg30d": 21.48
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.26,
          "priceAvg30d": 20.88
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.09,
          "priceAvg30d": 21.22
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.83,
          "priceAvg30d": 21.69
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.78,
          "priceAvg30d": 22.08
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.96,
          "priceAvg30d": 20.71
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.53,
          "priceAvg30d": 21.38
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.59,
          "priceAvg30d": 22.38
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 23.98
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.63,
          "priceAvg30d": 24.74
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.31,
          "priceAvg30d": 26.26
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.48,
          "priceAvg30d": 23.11
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 14.28,
          "priceAvg30d": 25.85
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 22.16,
          "priceAvg30d": 27.14
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.27,
          "priceAvg30d": 28.41
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.95,
          "priceAvg30d": 28.12
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.26,
          "priceAvg30d": 28.06
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.2,
          "priceAvg30d": 27.37
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.0,
          "priceAvg30d": 27.33
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.95,
          "priceAvg30d": 25.52
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.23,
          "priceAvg30d": 24.32
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.96,
          "priceAvg30d": 21.95
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.34,
          "priceAvg30d": 21.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.27,
          "priceAvg30d": 20.44
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.96,
          "priceAvg30d": 23.47
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.27,
          "priceAvg30d": 22.05
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.16,
          "priceAvg30d": 20.52
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.16,
          "priceAvg30d": 20.89
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.09,
          "priceAvg30d": 18.71
        }
      ],
      "avg": 17.42,
      "max": 25.2,
      "maxBlock": 37,
      "min": 8.78,
      "minBlock": 24,
      "spread3h": 13.57,
      "spreadLowAvg": 10.04,
      "spreadHighAvg": 23.61,
      "avg30d": 21.52,
      "spread30dAvg": 10.5,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.93,
          "priceAvg30d": 18.56
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.51,
          "priceAvg30d": 17.78
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.59,
          "priceAvg30d": 17.2
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.32,
          "priceAvg30d": 18.14
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.93,
          "priceAvg30d": 17.9
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.34,
          "priceAvg30d": 17.86
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.1,
          "priceAvg30d": 17.83
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.02,
          "priceAvg30d": 18.03
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.97,
          "priceAvg30d": 18.29
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.41,
          "priceAvg30d": 18.79
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.41,
          "priceAvg30d": 19.3
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.98,
          "priceAvg30d": 18.89
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.0,
          "priceAvg30d": 17.93
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 15.3,
          "priceAvg30d": 17.64
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.91,
          "priceAvg30d": 17.57
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.91,
          "priceAvg30d": 18.02
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.82,
          "priceAvg30d": 19.17
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.7,
          "priceAvg30d": 21.03
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.5,
          "priceAvg30d": 21.52
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.4,
          "priceAvg30d": 21.8
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.26,
          "priceAvg30d": 21.3
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.51,
          "priceAvg30d": 21.34
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.83,
          "priceAvg30d": 21.53
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.78,
          "priceAvg30d": 21.77
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.96,
          "priceAvg30d": 20.22
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.53,
          "priceAvg30d": 20.74
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.59,
          "priceAvg30d": 22.82
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 24.63
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.63,
          "priceAvg30d": 25.52
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.31,
          "priceAvg30d": 26.7
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.48,
          "priceAvg30d": 25.65
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.03,
          "priceAvg30d": 28.28
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.4,
          "priceAvg30d": 29.65
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.5,
          "priceAvg30d": 31.53
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.38,
          "priceAvg30d": 31.8
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.79,
          "priceAvg30d": 32.43
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.56,
          "priceAvg30d": 32.81
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.12,
          "priceAvg30d": 31.68
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.12,
          "priceAvg30d": 30.02
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.12,
          "priceAvg30d": 28.37
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.79,
          "priceAvg30d": 26.71
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.8,
          "priceAvg30d": 25.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.01,
          "priceAvg30d": 23.91
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.01,
          "priceAvg30d": 24.15
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.99,
          "priceAvg30d": 23.68
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.79,
          "priceAvg30d": 22.02
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.38,
          "priceAvg30d": 21.3
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.35,
          "priceAvg30d": 19.0
        }
      ],
      "avg": 14.67,
      "max": 21.56,
      "maxBlock": 37,
      "min": 8.78,
      "minBlock": 24,
      "spread3h": 10.89,
      "spreadLowAvg": 9.61,
      "spreadHighAvg": 20.5,
      "avg30d": 22.67,
      "spread30dAvg": 15.08,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.0,
          "priceAvg30d": 16.51
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.6,
          "priceAvg30d": 16.36
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.58,
          "priceAvg30d": 15.73
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.12,
          "priceAvg30d": 15.44
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.12,
          "priceAvg30d": 15.48
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.2,
          "priceAvg30d": 16.01
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.41,
          "priceAvg30d": 15.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.0,
          "priceAvg30d": 16.06
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.4,
          "priceAvg30d": 16.0
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.0,
          "priceAvg30d": 16.48
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 17.0
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.92,
          "priceAvg30d": 16.87
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.21,
          "priceAvg30d": 16.35
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.1,
          "priceAvg30d": 15.4
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.6,
          "priceAvg30d": 15.28
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.96,
          "priceAvg30d": 15.84
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.96,
          "priceAvg30d": 16.74
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.5,
          "priceAvg30d": 19.45
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.31,
          "priceAvg30d": 20.06
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.31,
          "priceAvg30d": 20.84
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.26,
          "priceAvg30d": 20.39
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.14,
          "priceAvg30d": 20.42
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.83,
          "priceAvg30d": 20.16
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.78,
          "priceAvg30d": 20.81
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.96,
          "priceAvg30d": 18.68
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.53,
          "priceAvg30d": 19.29
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.59,
          "priceAvg30d": 21.43
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 23.11
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.63,
          "priceAvg30d": 23.83
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.98,
          "priceAvg30d": 24.93
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.14,
          "priceAvg30d": 24.17
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.03,
          "priceAvg30d": 26.76
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.4,
          "priceAvg30d": 27.75
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.5,
          "priceAvg30d": 30.11
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.0,
          "priceAvg30d": 30.03
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.79,
          "priceAvg30d": 30.98
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.56,
          "priceAvg30d": 31.28
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.12,
          "priceAvg30d": 30.21
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.12,
          "priceAvg30d": 28.64
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.12,
          "priceAvg30d": 26.98
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.59,
          "priceAvg30d": 25.3
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.8,
          "priceAvg30d": 23.59
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.51,
          "priceAvg30d": 21.89
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.27,
          "priceAvg30d": 21.63
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.56,
          "priceAvg30d": 21.19
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.79,
          "priceAvg30d": 19.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.38,
          "priceAvg30d": 19.12
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.5,
          "priceAvg30d": 16.64
        }
      ],
      "avg": 12.97,
      "max": 21.56,
      "maxBlock": 37,
      "min": 8.5,
      "minBlock": 18,
      "spread3h": 10.71,
      "spreadLowAvg": 9.73,
      "spreadHighAvg": 20.44,
      "avg30d": 20.89,
      "spread30dAvg": 14.98,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.0,
          "priceAvg30d": 15.46
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.6,
          "priceAvg30d": 15.71
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.58,
          "priceAvg30d": 15.17
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.12,
          "priceAvg30d": 14.89
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.12,
          "priceAvg30d": 14.9
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.2,
          "priceAvg30d": 15.24
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.41,
          "priceAvg30d": 15.18
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.0,
          "priceAvg30d": 15.29
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.4,
          "priceAvg30d": 15.26
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.0,
          "priceAvg30d": 15.74
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 16.26
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.92,
          "priceAvg30d": 16.27
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.21,
          "priceAvg30d": 15.96
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.1,
          "priceAvg30d": 14.95
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.6,
          "priceAvg30d": 14.64
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.96,
          "priceAvg30d": 14.92
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.96,
          "priceAvg30d": 15.68
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.5,
          "priceAvg30d": 18.06
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.31,
          "priceAvg30d": 18.74
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.31,
          "priceAvg30d": 19.19
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.26,
          "priceAvg30d": 19.0
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.14,
          "priceAvg30d": 19.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.83,
          "priceAvg30d": 19.45
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.78,
          "priceAvg30d": 19.52
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.96,
          "priceAvg30d": 17.58
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.53,
          "priceAvg30d": 17.94
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.59,
          "priceAvg30d": 20.39
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 22.44
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.63,
          "priceAvg30d": 23.08
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.98,
          "priceAvg30d": 23.79
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.14,
          "priceAvg30d": 23.4
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.03,
          "priceAvg30d": 25.2
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.4,
          "priceAvg30d": 26.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.5,
          "priceAvg30d": 29.48
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.0,
          "priceAvg30d": 29.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.79,
          "priceAvg30d": 30.47
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.56,
          "priceAvg30d": 30.81
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.12,
          "priceAvg30d": 29.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.12,
          "priceAvg30d": 28.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.12,
          "priceAvg30d": 26.69
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.59,
          "priceAvg30d": 25.17
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.8,
          "priceAvg30d": 23.44
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.51,
          "priceAvg30d": 21.77
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.27,
          "priceAvg30d": 20.6
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.56,
          "priceAvg30d": 19.14
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.79,
          "priceAvg30d": 17.26
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.38,
          "priceAvg30d": 17.19
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.5,
          "priceAvg30d": 15.24
        }
      ],
      "avg": 12.97,
      "max": 21.56,
      "maxBlock": 37,
      "min": 8.5,
      "minBlock": 18,
      "spread3h": 10.71,
      "spreadLowAvg": 9.73,
      "spreadHighAvg": 20.44,
      "avg30d": 20.0,
      "spread30dAvg": 15.01,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.0,
          "priceAvg30d": 15.46
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.6,
          "priceAvg30d": 15.71
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.58,
          "priceAvg30d": 15.17
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.12,
          "priceAvg30d": 14.89
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.12,
          "priceAvg30d": 14.9
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.2,
          "priceAvg30d": 15.24
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.41,
          "priceAvg30d": 15.18
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.0,
          "priceAvg30d": 15.29
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.4,
          "priceAvg30d": 15.26
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.0,
          "priceAvg30d": 15.74
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 16.26
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.92,
          "priceAvg30d": 16.27
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.21,
          "priceAvg30d": 15.96
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.1,
          "priceAvg30d": 14.95
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.6,
          "priceAvg30d": 14.55
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.96,
          "priceAvg30d": 14.34
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.96,
          "priceAvg30d": 14.7
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.5,
          "priceAvg30d": 16.08
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.31,
          "priceAvg30d": 15.66
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.31,
          "priceAvg30d": 14.81
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.26,
          "priceAvg30d": 14.87
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.14,
          "priceAvg30d": 14.74
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.83,
          "priceAvg30d": 14.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.78,
          "priceAvg30d": 14.4
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.96,
          "priceAvg30d": 12.7
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.53,
          "priceAvg30d": 12.94
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.59,
          "priceAvg30d": 14.67
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 16.24
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.63,
          "priceAvg30d": 16.56
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.98,
          "priceAvg30d": 17.66
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.14,
          "priceAvg30d": 19.82
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.03,
          "priceAvg30d": 23.7
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.4,
          "priceAvg30d": 26.31
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.5,
          "priceAvg30d": 29.44
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.0,
          "priceAvg30d": 29.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.79,
          "priceAvg30d": 30.47
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.56,
          "priceAvg30d": 30.81
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.12,
          "priceAvg30d": 29.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.12,
          "priceAvg30d": 28.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.12,
          "priceAvg30d": 26.69
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.59,
          "priceAvg30d": 25.17
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.8,
          "priceAvg30d": 23.44
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.51,
          "priceAvg30d": 21.77
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.27,
          "priceAvg30d": 20.6
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.56,
          "priceAvg30d": 19.14
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.79,
          "priceAvg30d": 17.26
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.38,
          "priceAvg30d": 17.19
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.5,
          "priceAvg30d": 15.24
        }
      ],
      "avg": 12.97,
      "max": 21.56,
      "maxBlock": 37,
      "min": 8.5,
      "minBlock": 18,
      "spread3h": 10.71,
      "spreadLowAvg": 9.73,
      "spreadHighAvg": 20.44,
      "avg30d": 18.56,
      "spread30dAvg": 16.29,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.57,
          "priceAvg30d": 15.1
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.04,
          "priceAvg30d": 15.35
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 8.0,
          "priceAvg30d": 14.8
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 7.98,
          "priceAvg30d": 14.54
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 7.98,
          "priceAvg30d": 14.58
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 8.0,
          "priceAvg30d": 14.91
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 7.98,
          "priceAvg30d": 14.79
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 8.01,
          "priceAvg30d": 14.9
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.06,
          "priceAvg30d": 14.86
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.65,
          "priceAvg30d": 15.36
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.9,
          "priceAvg30d": 15.99
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.84,
          "priceAvg30d": 16.0
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.07,
          "priceAvg30d": 15.67
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 7.86,
          "priceAvg30d": 14.61
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.08,
          "priceAvg30d": 14.09
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.04,
          "priceAvg30d": 13.55
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.0,
          "priceAvg30d": 13.96
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.9,
          "priceAvg30d": 15.2
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 14.62
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 13.2
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 12.64
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 12.13
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 11.95
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 12.05
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 10.45
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 10.93
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 12.47
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 14.58
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.0,
          "priceAvg30d": 14.88
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.9,
          "priceAvg30d": 16.36
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 3.5,
          "priceAvg30d": 18.58
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 7.9,
          "priceAvg30d": 22.49
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.06,
          "priceAvg30d": 25.19
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.57,
          "priceAvg30d": 28.51
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 8.07,
          "priceAvg30d": 28.78
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 12.51,
          "priceAvg30d": 29.83
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 13.27,
          "priceAvg30d": 30.4
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 13.27,
          "priceAvg30d": 29.43
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 13.27,
          "priceAvg30d": 27.67
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 10.01,
          "priceAvg30d": 25.63
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 10.75,
          "priceAvg30d": 24.05
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.9,
          "priceAvg30d": 22.24
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.74,
          "priceAvg30d": 20.42
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.05,
          "priceAvg30d": 19.39
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.0,
          "priceAvg30d": 17.99
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 8.12,
          "priceAvg30d": 16.28
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 8.18,
          "priceAvg30d": 16.33
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.02,
          "priceAvg30d": 14.85
        }
      ],
      "avg": 6.48,
      "max": 13.27,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 8.29,
      "spreadLowAvg": 2.66,
      "spreadHighAvg": 10.95,
      "avg30d": 17.55,
      "spread30dAvg": 17.65,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.0,
          "priceAvg30d": 14.42
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.6,
          "priceAvg30d": 14.68
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.58,
          "priceAvg30d": 13.02
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.12,
          "priceAvg30d": 12.42
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.12,
          "priceAvg30d": 12.02
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.2,
          "priceAvg30d": 12.22
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.41,
          "priceAvg30d": 12.18
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.0,
          "priceAvg30d": 12.47
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.4,
          "priceAvg30d": 12.48
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.0,
          "priceAvg30d": 13.63
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 14.61
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.92,
          "priceAvg30d": 15.06
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.21,
          "priceAvg30d": 14.99
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.1,
          "priceAvg30d": 12.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.6,
          "priceAvg30d": 11.61
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.96,
          "priceAvg30d": 11.68
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.96,
          "priceAvg30d": 12.99
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.5,
          "priceAvg30d": 13.8
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.31,
          "priceAvg30d": 13.66
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.31,
          "priceAvg30d": 13.16
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.26,
          "priceAvg30d": 12.54
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.14,
          "priceAvg30d": 12.35
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.83,
          "priceAvg30d": 12.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.78,
          "priceAvg30d": 12.11
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.96,
          "priceAvg30d": 11.38
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.53,
          "priceAvg30d": 11.62
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.59,
          "priceAvg30d": 12.89
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 14.51
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.63,
          "priceAvg30d": 15.23
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.98,
          "priceAvg30d": 16.61
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.14,
          "priceAvg30d": 19.31
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.03,
          "priceAvg30d": 23.17
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.4,
          "priceAvg30d": 26.1
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.5,
          "priceAvg30d": 29.44
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.0,
          "priceAvg30d": 29.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.79,
          "priceAvg30d": 30.47
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.56,
          "priceAvg30d": 30.81
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.12,
          "priceAvg30d": 29.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.12,
          "priceAvg30d": 28.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.12,
          "priceAvg30d": 26.69
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.59,
          "priceAvg30d": 25.17
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.8,
          "priceAvg30d": 23.44
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.51,
          "priceAvg30d": 21.76
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.27,
          "priceAvg30d": 20.6
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.56,
          "priceAvg30d": 18.99
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.79,
          "priceAvg30d": 16.92
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.38,
          "priceAvg30d": 16.5
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.5,
          "priceAvg30d": 13.45
        }
      ],
      "avg": 12.97,
      "max": 21.56,
      "maxBlock": 37,
      "min": 8.5,
      "minBlock": 18,
      "spread3h": 10.71,
      "spreadLowAvg": 9.73,
      "spreadHighAvg": 20.44,
      "avg30d": 17.21,
      "spread30dAvg": 18.12,
      "historyDays": 30
    }
  }
};
