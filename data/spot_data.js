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
  "targetDate": "2026-09-05",
  "fetchedAt": "2026-09-05T09:05:48+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 16.76,
        "priceAvg30d": 17.91
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 14.63,
        "priceAvg30d": 17.01
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 14.56,
        "priceAvg30d": 16.23
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 18.12,
        "priceAvg30d": 16.82
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 19.0,
        "priceAvg30d": 16.74
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 20.45,
        "priceAvg30d": 16.62
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 20.45,
        "priceAvg30d": 16.57
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 20.52,
        "priceAvg30d": 16.79
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 20.43,
        "priceAvg30d": 16.86
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 20.0,
        "priceAvg30d": 17.38
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 20.51,
        "priceAvg30d": 17.93
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 19.0,
        "priceAvg30d": 17.4
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 14.63,
        "priceAvg30d": 16.34
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 16.72,
        "priceAvg30d": 15.6
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 14.61,
        "priceAvg30d": 15.16
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 11.89,
        "priceAvg30d": 15.5
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 9.69,
        "priceAvg30d": 16.29
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 9.39,
        "priceAvg30d": 17.58
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 9.57,
        "priceAvg30d": 17.49
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 9.36,
        "priceAvg30d": 17.44
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 9.17,
        "priceAvg30d": 16.56
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 9.0,
        "priceAvg30d": 16.53
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 8.33,
        "priceAvg30d": 16.74
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 8.33,
        "priceAvg30d": 16.75
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 8.0,
        "priceAvg30d": 15.8
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 8.16,
        "priceAvg30d": 16.26
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 8.84,
        "priceAvg30d": 17.12
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 9.59,
        "priceAvg30d": 18.51
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 9.51,
        "priceAvg30d": 19.94
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 10.21,
        "priceAvg30d": 21.95
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 10.29,
        "priceAvg30d": 20.88
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 11.6,
        "priceAvg30d": 24.17
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 11.06,
        "priceAvg30d": 25.91
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 13.88,
        "priceAvg30d": 28.47
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 16.72,
        "priceAvg30d": 28.69
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 18.32,
        "priceAvg30d": 29.64
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 19.0,
        "priceAvg30d": 29.78
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 18.23,
        "priceAvg30d": 29.42
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 18.93,
        "priceAvg30d": 27.8
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 19.01,
        "priceAvg30d": 26.1
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 19.12,
        "priceAvg30d": 24.16
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 18.61,
        "priceAvg30d": 21.94
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 16.76,
        "priceAvg30d": 20.76
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 16.76,
        "priceAvg30d": 23.19
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 16.72,
        "priceAvg30d": 21.98
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 14.6,
        "priceAvg30d": 20.03
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 14.56,
        "priceAvg30d": 19.87
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 12.0,
        "priceAvg30d": 18.21
      }
    ],
    "avg": 14.49,
    "max": 20.52,
    "maxBlock": 8,
    "min": 8.0,
    "minBlock": 25,
    "spread3h": 11.43,
    "spreadLowAvg": 8.71,
    "spreadHighAvg": 20.14,
    "avg30d": 19.85,
    "spread30dAvg": 13.34,
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
          "price": 18.12,
          "priceAvg30d": 15.59
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.5,
          "priceAvg30d": 14.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.5,
          "priceAvg30d": 13.81
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.92,
          "priceAvg30d": 14.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.5,
          "priceAvg30d": 14.92
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.04,
          "priceAvg30d": 14.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.67,
          "priceAvg30d": 15.43
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.84,
          "priceAvg30d": 15.58
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.2,
          "priceAvg30d": 15.74
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.01,
          "priceAvg30d": 15.99
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.16,
          "priceAvg30d": 15.65
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.04,
          "priceAvg30d": 14.44
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.1,
          "priceAvg30d": 12.61
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.17,
          "priceAvg30d": 11.6
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 7.0,
          "priceAvg30d": 10.73
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 0.3,
          "priceAvg30d": 10.22
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 0.01,
          "priceAvg30d": 10.59
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 10.07
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 9.83
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 9.06
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.73
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.55
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 8.84
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.47
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 8.79
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 8.69
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 9.21
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 10.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 10.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 3.0,
          "priceAvg30d": 11.84
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.17,
          "priceAvg30d": 12.81
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.17,
          "priceAvg30d": 15.07
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.15,
          "priceAvg30d": 18.05
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.88,
          "priceAvg30d": 21.46
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.72,
          "priceAvg30d": 21.98
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.18,
          "priceAvg30d": 22.67
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.0,
          "priceAvg30d": 22.67
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.23,
          "priceAvg30d": 23.43
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 22.01
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.01,
          "priceAvg30d": 21.55
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.12,
          "priceAvg30d": 19.96
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.61,
          "priceAvg30d": 19.08
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.5,
          "priceAvg30d": 18.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.19,
          "priceAvg30d": 20.2
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 12.5,
          "priceAvg30d": 20.13
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.5,
          "priceAvg30d": 18.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.6,
          "priceAvg30d": 17.94
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.02,
          "priceAvg30d": 15.81
        }
      ],
      "avg": 9.91,
      "max": 20.84,
      "maxBlock": 8,
      "min": 0.01,
      "minBlock": 17,
      "spread3h": 13.35,
      "spreadLowAvg": 2.75,
      "spreadHighAvg": 16.1,
      "avg30d": 14.82,
      "spread30dAvg": 12.92,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 18.12,
          "priceAvg30d": 18.92
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 17.99,
          "priceAvg30d": 17.76
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.61,
          "priceAvg30d": 16.51
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.79,
          "priceAvg30d": 17.01
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.45,
          "priceAvg30d": 17.36
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.84,
          "priceAvg30d": 17.07
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.67,
          "priceAvg30d": 17.82
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.84,
          "priceAvg30d": 18.22
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.5,
          "priceAvg30d": 18.38
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.01,
          "priceAvg30d": 19.02
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.43,
          "priceAvg30d": 19.09
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.86,
          "priceAvg30d": 17.81
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.5,
          "priceAvg30d": 15.5
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.0,
          "priceAvg30d": 13.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.54,
          "priceAvg30d": 13.06
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.38,
          "priceAvg30d": 11.9
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.32,
          "priceAvg30d": 10.78
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.71,
          "priceAvg30d": 10.91
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 6.0,
          "priceAvg30d": 11.01
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 5.0,
          "priceAvg30d": 10.3
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 10.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.5,
          "priceAvg30d": 10.22
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.01,
          "priceAvg30d": 10.13
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.0,
          "priceAvg30d": 9.76
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.02,
          "priceAvg30d": 9.67
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 9.85
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 4.37,
          "priceAvg30d": 10.54
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.0,
          "priceAvg30d": 11.32
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 6.0,
          "priceAvg30d": 11.37
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 6.51,
          "priceAvg30d": 12.95
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.17,
          "priceAvg30d": 14.25
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.44,
          "priceAvg30d": 16.77
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.06,
          "priceAvg30d": 20.3
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.88,
          "priceAvg30d": 23.63
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.72,
          "priceAvg30d": 24.13
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.18,
          "priceAvg30d": 25.11
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.0,
          "priceAvg30d": 24.91
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.23,
          "priceAvg30d": 25.28
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 23.56
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.01,
          "priceAvg30d": 22.31
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.12,
          "priceAvg30d": 20.41
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.61,
          "priceAvg30d": 19.48
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.8,
          "priceAvg30d": 19.09
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.0,
          "priceAvg30d": 21.11
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.11,
          "priceAvg30d": 21.25
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.61,
          "priceAvg30d": 19.66
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.6,
          "priceAvg30d": 20.1
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.02,
          "priceAvg30d": 18.45
        }
      ],
      "avg": 13.22,
      "max": 20.84,
      "maxBlock": 6,
      "min": 0.02,
      "minBlock": 25,
      "spread3h": 16.25,
      "spreadLowAvg": 3.23,
      "spreadHighAvg": 19.48,
      "avg30d": 16.62,
      "spread30dAvg": 13.45,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 18.12,
          "priceAvg30d": 18.92
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 17.99,
          "priceAvg30d": 18.11
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.61,
          "priceAvg30d": 17.32
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.79,
          "priceAvg30d": 18.84
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.45,
          "priceAvg30d": 18.56
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.84,
          "priceAvg30d": 18.18
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.67,
          "priceAvg30d": 18.24
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.84,
          "priceAvg30d": 18.54
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.5,
          "priceAvg30d": 18.69
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.01,
          "priceAvg30d": 19.11
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.43,
          "priceAvg30d": 19.44
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.86,
          "priceAvg30d": 18.93
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.5,
          "priceAvg30d": 17.74
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.24,
          "priceAvg30d": 17.49
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.54,
          "priceAvg30d": 17.88
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.38,
          "priceAvg30d": 18.31
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.78,
          "priceAvg30d": 18.91
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.95,
          "priceAvg30d": 20.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.05,
          "priceAvg30d": 19.99
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.06,
          "priceAvg30d": 20.66
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.05,
          "priceAvg30d": 19.72
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.95,
          "priceAvg30d": 20.05
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.82,
          "priceAvg30d": 20.54
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.86,
          "priceAvg30d": 21.06
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.36,
          "priceAvg30d": 19.92
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.0,
          "priceAvg30d": 20.61
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.0,
          "priceAvg30d": 21.47
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.75,
          "priceAvg30d": 23.08
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 11.06,
          "priceAvg30d": 24.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.91,
          "priceAvg30d": 26.0
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.39,
          "priceAvg30d": 22.17
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.38,
          "priceAvg30d": 25.19
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.06,
          "priceAvg30d": 26.7
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.88,
          "priceAvg30d": 28.24
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.72,
          "priceAvg30d": 27.83
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.18,
          "priceAvg30d": 28.23
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.0,
          "priceAvg30d": 27.56
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.23,
          "priceAvg30d": 27.64
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 25.79
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.01,
          "priceAvg30d": 24.62
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.12,
          "priceAvg30d": 22.06
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.61,
          "priceAvg30d": 21.13
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.8,
          "priceAvg30d": 20.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.0,
          "priceAvg30d": 24.53
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.11,
          "priceAvg30d": 22.98
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.61,
          "priceAvg30d": 21.27
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.6,
          "priceAvg30d": 21.81
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.02,
          "priceAvg30d": 19.46
        }
      ],
      "avg": 15.21,
      "max": 20.84,
      "maxBlock": 6,
      "min": 9.0,
      "minBlock": 26,
      "spread3h": 8.83,
      "spreadLowAvg": 10.64,
      "spreadHighAvg": 19.48,
      "avg30d": 21.43,
      "spread30dAvg": 9.12,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 18.12,
          "priceAvg30d": 18.77
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 17.99,
          "priceAvg30d": 17.86
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.61,
          "priceAvg30d": 17.16
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.79,
          "priceAvg30d": 18.6
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.45,
          "priceAvg30d": 18.43
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.84,
          "priceAvg30d": 18.06
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.67,
          "priceAvg30d": 18.0
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.84,
          "priceAvg30d": 18.27
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.5,
          "priceAvg30d": 18.45
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.01,
          "priceAvg30d": 18.91
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.43,
          "priceAvg30d": 19.24
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.86,
          "priceAvg30d": 18.92
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.72,
          "priceAvg30d": 17.48
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.24,
          "priceAvg30d": 17.0
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.54,
          "priceAvg30d": 16.63
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.38,
          "priceAvg30d": 17.07
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.78,
          "priceAvg30d": 18.05
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.95,
          "priceAvg30d": 19.49
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.05,
          "priceAvg30d": 19.72
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.06,
          "priceAvg30d": 20.06
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.05,
          "priceAvg30d": 19.57
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.95,
          "priceAvg30d": 19.43
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.82,
          "priceAvg30d": 19.68
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.86,
          "priceAvg30d": 20.05
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.36,
          "priceAvg30d": 18.76
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.0,
          "priceAvg30d": 19.21
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.32,
          "priceAvg30d": 20.91
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.75,
          "priceAvg30d": 22.7
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 11.06,
          "priceAvg30d": 23.74
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.91,
          "priceAvg30d": 25.25
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.39,
          "priceAvg30d": 24.62
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.38,
          "priceAvg30d": 27.52
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.13,
          "priceAvg30d": 29.25
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.88,
          "priceAvg30d": 31.18
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.72,
          "priceAvg30d": 31.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.18,
          "priceAvg30d": 32.38
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.0,
          "priceAvg30d": 32.89
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.23,
          "priceAvg30d": 31.68
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 30.05
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.01,
          "priceAvg30d": 28.65
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.12,
          "priceAvg30d": 27.13
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.61,
          "priceAvg30d": 25.38
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.8,
          "priceAvg30d": 24.05
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.0,
          "priceAvg30d": 25.1
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.11,
          "priceAvg30d": 24.64
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.61,
          "priceAvg30d": 22.75
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.6,
          "priceAvg30d": 22.05
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.02,
          "priceAvg30d": 19.6
        }
      ],
      "avg": 15.33,
      "max": 20.84,
      "maxBlock": 6,
      "min": 9.0,
      "minBlock": 26,
      "spread3h": 8.78,
      "spreadLowAvg": 10.7,
      "spreadHighAvg": 19.48,
      "avg30d": 22.21,
      "spread30dAvg": 14.24,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.5,
          "priceAvg30d": 16.7
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 14.0,
          "priceAvg30d": 16.42
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.21,
          "priceAvg30d": 15.76
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.72,
          "priceAvg30d": 15.81
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 18.61,
          "priceAvg30d": 15.73
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.84,
          "priceAvg30d": 16.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.67,
          "priceAvg30d": 16.0
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.84,
          "priceAvg30d": 15.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.5,
          "priceAvg30d": 15.66
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.01,
          "priceAvg30d": 16.63
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.43,
          "priceAvg30d": 17.04
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.86,
          "priceAvg30d": 16.63
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.72,
          "priceAvg30d": 15.53
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.24,
          "priceAvg30d": 14.74
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.54,
          "priceAvg30d": 15.03
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.38,
          "priceAvg30d": 15.9
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.21,
          "priceAvg30d": 17.41
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.57,
          "priceAvg30d": 19.05
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.34,
          "priceAvg30d": 19.5
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.34,
          "priceAvg30d": 19.74
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.36,
          "priceAvg30d": 19.31
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.57,
          "priceAvg30d": 19.23
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.26,
          "priceAvg30d": 19.48
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.0,
          "priceAvg30d": 19.81
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.84,
          "priceAvg30d": 18.42
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.0,
          "priceAvg30d": 18.76
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.34,
          "priceAvg30d": 20.57
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.01,
          "priceAvg30d": 22.23
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.4,
          "priceAvg30d": 23.02
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.21,
          "priceAvg30d": 24.2
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.39,
          "priceAvg30d": 23.54
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.38,
          "priceAvg30d": 26.14
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.13,
          "priceAvg30d": 27.84
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.88,
          "priceAvg30d": 29.99
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.72,
          "priceAvg30d": 29.99
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.18,
          "priceAvg30d": 31.2
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.0,
          "priceAvg30d": 31.59
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.23,
          "priceAvg30d": 30.6
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 28.95
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.01,
          "priceAvg30d": 27.34
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.12,
          "priceAvg30d": 25.91
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.61,
          "priceAvg30d": 23.83
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.8,
          "priceAvg30d": 22.37
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.76,
          "priceAvg30d": 22.15
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.72,
          "priceAvg30d": 22.03
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.61,
          "priceAvg30d": 20.42
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.6,
          "priceAvg30d": 20.06
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.02,
          "priceAvg30d": 17.55
        }
      ],
      "avg": 14.62,
      "max": 20.84,
      "maxBlock": 6,
      "min": 8.84,
      "minBlock": 25,
      "spread3h": 9.06,
      "spreadLowAvg": 9.36,
      "spreadHighAvg": 18.43,
      "avg30d": 20.79,
      "spread30dAvg": 14.49,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.5,
          "priceAvg30d": 15.42
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 14.0,
          "priceAvg30d": 15.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.21,
          "priceAvg30d": 15.05
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.72,
          "priceAvg30d": 14.77
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 18.61,
          "priceAvg30d": 14.65
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.84,
          "priceAvg30d": 14.8
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.67,
          "priceAvg30d": 14.58
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.84,
          "priceAvg30d": 14.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.5,
          "priceAvg30d": 14.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.01,
          "priceAvg30d": 15.21
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.43,
          "priceAvg30d": 15.66
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.86,
          "priceAvg30d": 15.6
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.72,
          "priceAvg30d": 15.14
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.24,
          "priceAvg30d": 14.21
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.54,
          "priceAvg30d": 13.92
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.38,
          "priceAvg30d": 14.45
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.21,
          "priceAvg30d": 15.85
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.57,
          "priceAvg30d": 17.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.34,
          "priceAvg30d": 18.4
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.34,
          "priceAvg30d": 18.82
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.36,
          "priceAvg30d": 18.56
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.57,
          "priceAvg30d": 18.52
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.26,
          "priceAvg30d": 19.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.0,
          "priceAvg30d": 19.38
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.84,
          "priceAvg30d": 17.47
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.0,
          "priceAvg30d": 17.94
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.34,
          "priceAvg30d": 20.02
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.01,
          "priceAvg30d": 22.07
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.4,
          "priceAvg30d": 22.81
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.21,
          "priceAvg30d": 23.7
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.39,
          "priceAvg30d": 23.33
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.38,
          "priceAvg30d": 25.05
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.13,
          "priceAvg30d": 26.42
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.88,
          "priceAvg30d": 29.66
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.72,
          "priceAvg30d": 29.79
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.18,
          "priceAvg30d": 30.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.0,
          "priceAvg30d": 31.23
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.23,
          "priceAvg30d": 30.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 28.84
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.01,
          "priceAvg30d": 27.05
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.12,
          "priceAvg30d": 25.73
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.61,
          "priceAvg30d": 23.61
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.8,
          "priceAvg30d": 21.93
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.76,
          "priceAvg30d": 20.81
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.72,
          "priceAvg30d": 19.09
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.61,
          "priceAvg30d": 17.04
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.6,
          "priceAvg30d": 16.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.02,
          "priceAvg30d": 15.36
        }
      ],
      "avg": 14.62,
      "max": 20.84,
      "maxBlock": 6,
      "min": 8.84,
      "minBlock": 25,
      "spread3h": 9.06,
      "spreadLowAvg": 9.36,
      "spreadHighAvg": 18.43,
      "avg30d": 19.83,
      "spread30dAvg": 15.23,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.5,
          "priceAvg30d": 15.42
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 14.0,
          "priceAvg30d": 15.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.21,
          "priceAvg30d": 15.05
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.72,
          "priceAvg30d": 14.77
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 18.61,
          "priceAvg30d": 14.65
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.84,
          "priceAvg30d": 14.8
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.67,
          "priceAvg30d": 14.58
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.84,
          "priceAvg30d": 14.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.5,
          "priceAvg30d": 14.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.01,
          "priceAvg30d": 15.21
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.43,
          "priceAvg30d": 15.66
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.86,
          "priceAvg30d": 15.6
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.72,
          "priceAvg30d": 15.14
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.24,
          "priceAvg30d": 14.21
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.54,
          "priceAvg30d": 13.84
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.38,
          "priceAvg30d": 13.87
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.21,
          "priceAvg30d": 14.88
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.57,
          "priceAvg30d": 16.08
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.34,
          "priceAvg30d": 15.56
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.34,
          "priceAvg30d": 14.6
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.36,
          "priceAvg30d": 14.6
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.57,
          "priceAvg30d": 14.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.26,
          "priceAvg30d": 14.04
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.0,
          "priceAvg30d": 13.88
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.84,
          "priceAvg30d": 12.47
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.0,
          "priceAvg30d": 12.95
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.34,
          "priceAvg30d": 14.45
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.01,
          "priceAvg30d": 16.11
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.4,
          "priceAvg30d": 16.42
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.21,
          "priceAvg30d": 17.48
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.39,
          "priceAvg30d": 19.59
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.38,
          "priceAvg30d": 23.37
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.13,
          "priceAvg30d": 26.25
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.88,
          "priceAvg30d": 29.62
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.72,
          "priceAvg30d": 29.79
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.18,
          "priceAvg30d": 30.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.0,
          "priceAvg30d": 31.23
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.23,
          "priceAvg30d": 30.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 28.84
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.01,
          "priceAvg30d": 27.05
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.12,
          "priceAvg30d": 25.73
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.61,
          "priceAvg30d": 23.61
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.8,
          "priceAvg30d": 21.93
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.76,
          "priceAvg30d": 20.81
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.72,
          "priceAvg30d": 19.09
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.61,
          "priceAvg30d": 17.04
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.6,
          "priceAvg30d": 16.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.02,
          "priceAvg30d": 15.36
        }
      ],
      "avg": 14.62,
      "max": 20.84,
      "maxBlock": 6,
      "min": 8.84,
      "minBlock": 25,
      "spread3h": 9.06,
      "spreadLowAvg": 9.36,
      "spreadHighAvg": 18.43,
      "avg30d": 18.4,
      "spread30dAvg": 16.26,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.5,
          "priceAvg30d": 15.42
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 14.0,
          "priceAvg30d": 15.7
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.21,
          "priceAvg30d": 14.89
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.72,
          "priceAvg30d": 14.63
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 18.61,
          "priceAvg30d": 14.51
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.84,
          "priceAvg30d": 14.66
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.67,
          "priceAvg30d": 14.4
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.84,
          "priceAvg30d": 14.46
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.5,
          "priceAvg30d": 14.52
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.01,
          "priceAvg30d": 15.12
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.43,
          "priceAvg30d": 15.66
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.86,
          "priceAvg30d": 15.6
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.72,
          "priceAvg30d": 15.09
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.24,
          "priceAvg30d": 14.13
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.54,
          "priceAvg30d": 13.52
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.38,
          "priceAvg30d": 13.18
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.21,
          "priceAvg30d": 14.09
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.57,
          "priceAvg30d": 15.01
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.34,
          "priceAvg30d": 14.69
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 6.5,
          "priceAvg30d": 13.24
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 6.5,
          "priceAvg30d": 12.74
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.0,
          "priceAvg30d": 12.0
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.0,
          "priceAvg30d": 11.31
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 3.5,
          "priceAvg30d": 11.47
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 10.16
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 10.7
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 6.5,
          "priceAvg30d": 12.44
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.71,
          "priceAvg30d": 14.14
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.18,
          "priceAvg30d": 14.47
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.21,
          "priceAvg30d": 16.0
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.78,
          "priceAvg30d": 18.16
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.38,
          "priceAvg30d": 22.04
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.13,
          "priceAvg30d": 24.96
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.88,
          "priceAvg30d": 29.38
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.72,
          "priceAvg30d": 29.63
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.18,
          "priceAvg30d": 30.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.0,
          "priceAvg30d": 31.23
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.23,
          "priceAvg30d": 30.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 28.84
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.01,
          "priceAvg30d": 27.05
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.12,
          "priceAvg30d": 25.73
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.61,
          "priceAvg30d": 23.61
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.8,
          "priceAvg30d": 21.93
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.76,
          "priceAvg30d": 20.81
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.72,
          "priceAvg30d": 19.09
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.61,
          "priceAvg30d": 17.04
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.6,
          "priceAvg30d": 16.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.02,
          "priceAvg30d": 15.36
        }
      ],
      "avg": 13.81,
      "max": 20.84,
      "maxBlock": 6,
      "min": 2.5,
      "minBlock": 25,
      "spread3h": 13.06,
      "spreadLowAvg": 5.37,
      "spreadHighAvg": 18.43,
      "avg30d": 17.73,
      "spread30dAvg": 18.34,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.98,
          "priceAvg30d": 14.6
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 14.0,
          "priceAvg30d": 14.85
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.21,
          "priceAvg30d": 13.35
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.21,
          "priceAvg30d": 12.52
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.21,
          "priceAvg30d": 12.11
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.21,
          "priceAvg30d": 12.28
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.21,
          "priceAvg30d": 12.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.21,
          "priceAvg30d": 12.34
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.63,
          "priceAvg30d": 12.29
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 14.63,
          "priceAvg30d": 13.53
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.63,
          "priceAvg30d": 14.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.86,
          "priceAvg30d": 14.59
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.63,
          "priceAvg30d": 14.28
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.63,
          "priceAvg30d": 12.18
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.21,
          "priceAvg30d": 11.64
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.98,
          "priceAvg30d": 11.79
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.21,
          "priceAvg30d": 13.3
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.57,
          "priceAvg30d": 14.03
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.34,
          "priceAvg30d": 13.8
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.34,
          "priceAvg30d": 13.44
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.36,
          "priceAvg30d": 12.83
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.57,
          "priceAvg30d": 12.6
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.26,
          "priceAvg30d": 12.54
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.0,
          "priceAvg30d": 12.37
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.84,
          "priceAvg30d": 11.64
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.0,
          "priceAvg30d": 11.69
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.34,
          "priceAvg30d": 13.22
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.01,
          "priceAvg30d": 14.98
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.4,
          "priceAvg30d": 15.75
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.21,
          "priceAvg30d": 16.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.39,
          "priceAvg30d": 19.21
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.38,
          "priceAvg30d": 23.04
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.13,
          "priceAvg30d": 26.05
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.88,
          "priceAvg30d": 29.62
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.72,
          "priceAvg30d": 29.79
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.18,
          "priceAvg30d": 30.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.0,
          "priceAvg30d": 31.23
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.23,
          "priceAvg30d": 30.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 28.84
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.01,
          "priceAvg30d": 27.05
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.12,
          "priceAvg30d": 25.73
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.61,
          "priceAvg30d": 23.61
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.8,
          "priceAvg30d": 21.92
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.76,
          "priceAvg30d": 20.81
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.72,
          "priceAvg30d": 18.95
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.61,
          "priceAvg30d": 16.7
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.6,
          "priceAvg30d": 16.11
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.02,
          "priceAvg30d": 13.83
        }
      ],
      "avg": 12.92,
      "max": 19.12,
      "maxBlock": 41,
      "min": 8.84,
      "minBlock": 25,
      "spread3h": 8.69,
      "spreadLowAvg": 9.36,
      "spreadHighAvg": 18.06,
      "avg30d": 17.33,
      "spread30dAvg": 18.1,
      "historyDays": 30
    }
  }
};
