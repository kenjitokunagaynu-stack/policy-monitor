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
  "targetDate": "2026-09-06",
  "fetchedAt": "2026-09-06T09:06:08+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 11.5,
        "priceAvg30d": 17.77
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 10.61,
        "priceAvg30d": 16.86
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 10.6,
        "priceAvg30d": 16.12
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 12.01,
        "priceAvg30d": 16.8
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 10.78,
        "priceAvg30d": 16.71
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 11.76,
        "priceAvg30d": 16.65
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 13.21,
        "priceAvg30d": 16.6
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 11.19,
        "priceAvg30d": 16.83
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 11.91,
        "priceAvg30d": 16.89
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 14.63,
        "priceAvg30d": 17.39
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 15.0,
        "priceAvg30d": 17.93
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 12.05,
        "priceAvg30d": 17.35
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 10.72,
        "priceAvg30d": 16.2
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 10.21,
        "priceAvg30d": 15.55
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 8.55,
        "priceAvg30d": 15.04
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 9.59,
        "priceAvg30d": 15.32
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 9.21,
        "priceAvg30d": 16.0
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 10.03,
        "priceAvg30d": 17.24
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 10.21,
        "priceAvg30d": 17.12
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 10.13,
        "priceAvg30d": 17.07
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 9.59,
        "priceAvg30d": 16.21
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 9.59,
        "priceAvg30d": 16.19
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 9.75,
        "priceAvg30d": 16.35
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 9.95,
        "priceAvg30d": 16.36
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 10.0,
        "priceAvg30d": 15.46
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 10.42,
        "priceAvg30d": 15.91
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 10.6,
        "priceAvg30d": 16.75
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 11.57,
        "priceAvg30d": 18.15
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 12.87,
        "priceAvg30d": 19.55
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 13.01,
        "priceAvg30d": 21.54
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 12.87,
        "priceAvg30d": 20.47
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 15.68,
        "priceAvg30d": 23.6
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 15.68,
        "priceAvg30d": 25.28
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 18.61,
        "priceAvg30d": 27.74
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 20.4,
        "priceAvg30d": 28.06
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 20.79,
        "priceAvg30d": 29.03
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 20.8,
        "priceAvg30d": 29.16
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 21.09,
        "priceAvg30d": 28.77
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 20.5,
        "priceAvg30d": 27.27
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 20.4,
        "priceAvg30d": 25.66
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 20.0,
        "priceAvg30d": 23.81
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 18.0,
        "priceAvg30d": 21.66
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 16.72,
        "priceAvg30d": 20.47
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 13.92,
        "priceAvg30d": 22.76
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 13.89,
        "priceAvg30d": 21.62
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 12.87,
        "priceAvg30d": 19.74
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 11.71,
        "priceAvg30d": 19.57
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 10.6,
        "priceAvg30d": 17.88
      }
    ],
    "avg": 13.25,
    "max": 21.09,
    "maxBlock": 38,
    "min": 8.55,
    "minBlock": 15,
    "spread3h": 10.18,
    "spreadLowAvg": 10.3,
    "spreadHighAvg": 20.48,
    "avg30d": 19.55,
    "spread30dAvg": 13.21,
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
          "price": 11.64,
          "priceAvg30d": 15.48
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.61,
          "priceAvg30d": 14.48
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 13.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.61,
          "priceAvg30d": 14.16
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.03,
          "priceAvg30d": 14.62
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.03,
          "priceAvg30d": 14.58
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.74,
          "priceAvg30d": 15.42
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.91,
          "priceAvg30d": 15.57
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.03,
          "priceAvg30d": 15.65
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.43,
          "priceAvg30d": 15.95
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.35,
          "priceAvg30d": 15.36
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.87,
          "priceAvg30d": 14.27
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.39,
          "priceAvg30d": 12.6
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.59,
          "priceAvg30d": 11.57
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.28,
          "priceAvg30d": 10.63
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.17,
          "priceAvg30d": 9.9
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 7.24,
          "priceAvg30d": 10.26
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 6.65,
          "priceAvg30d": 9.75
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 9.5
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 8.73
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.43
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 8.51
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.17
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.0,
          "priceAvg30d": 8.47
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.05,
          "priceAvg30d": 8.38
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 8.91
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 9.95
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 4.21,
          "priceAvg30d": 10.18
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 7.92,
          "priceAvg30d": 11.53
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.17,
          "priceAvg30d": 12.72
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.34,
          "priceAvg30d": 14.76
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 16.63,
          "priceAvg30d": 17.7
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.4,
          "priceAvg30d": 21.09
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.0,
          "priceAvg30d": 21.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.03,
          "priceAvg30d": 22.2
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.74,
          "priceAvg30d": 22.16
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.04,
          "priceAvg30d": 22.87
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.98,
          "priceAvg30d": 21.64
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.81,
          "priceAvg30d": 21.23
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.49,
          "priceAvg30d": 19.76
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.4,
          "priceAvg30d": 18.91
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.19,
          "priceAvg30d": 18.25
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 11.97,
          "priceAvg30d": 19.62
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.61,
          "priceAvg30d": 19.59
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.87,
          "priceAvg30d": 17.89
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.34,
          "priceAvg30d": 17.56
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.17,
          "priceAvg30d": 15.41
        }
      ],
      "avg": 11.24,
      "max": 21.74,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 18.22,
      "spreadLowAvg": 2.49,
      "spreadHighAvg": 20.71,
      "avg30d": 14.54,
      "spread30dAvg": 12.69,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.64,
          "priceAvg30d": 18.81
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.61,
          "priceAvg30d": 17.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 16.41
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.61,
          "priceAvg30d": 17.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.03,
          "priceAvg30d": 17.33
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.03,
          "priceAvg30d": 17.06
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.74,
          "priceAvg30d": 17.81
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.91,
          "priceAvg30d": 18.21
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.03,
          "priceAvg30d": 18.36
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.35,
          "priceAvg30d": 18.98
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.35,
          "priceAvg30d": 19.14
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.87,
          "priceAvg30d": 17.94
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.39,
          "priceAvg30d": 15.54
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.59,
          "priceAvg30d": 13.67
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.28,
          "priceAvg30d": 13.16
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.03,
          "priceAvg30d": 11.96
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 7.24,
          "priceAvg30d": 10.77
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.79,
          "priceAvg30d": 10.88
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.18,
          "priceAvg30d": 10.88
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.68,
          "priceAvg30d": 10.14
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.48,
          "priceAvg30d": 9.92
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.03,
          "priceAvg30d": 10.0
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.0,
          "priceAvg30d": 9.84
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.01,
          "priceAvg30d": 9.5
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.0,
          "priceAvg30d": 9.34
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.05,
          "priceAvg30d": 9.63
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 10.38
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 11.26
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 4.21,
          "priceAvg30d": 11.25
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 7.92,
          "priceAvg30d": 12.75
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.17,
          "priceAvg30d": 14.16
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.42,
          "priceAvg30d": 16.47
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 16.63,
          "priceAvg30d": 19.98
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.4,
          "priceAvg30d": 23.26
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.81,
          "priceAvg30d": 23.76
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.98,
          "priceAvg30d": 24.63
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.74,
          "priceAvg30d": 24.41
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.97,
          "priceAvg30d": 24.72
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.98,
          "priceAvg30d": 23.19
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.81,
          "priceAvg30d": 21.99
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.49,
          "priceAvg30d": 20.21
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.4,
          "priceAvg30d": 19.31
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.19,
          "priceAvg30d": 18.87
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 11.97,
          "priceAvg30d": 20.75
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.61,
          "priceAvg30d": 20.9
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.87,
          "priceAvg30d": 19.28
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.05,
          "priceAvg30d": 19.71
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.44,
          "priceAvg30d": 18.06
        }
      ],
      "avg": 12.18,
      "max": 21.98,
      "maxBlock": 36,
      "min": 0.05,
      "minBlock": 26,
      "spread3h": 17.97,
      "spreadLowAvg": 2.45,
      "spreadHighAvg": 20.42,
      "avg30d": 16.45,
      "spread30dAvg": 13.32,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.64,
          "priceAvg30d": 18.81
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.61,
          "priceAvg30d": 18.03
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 17.15
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.61,
          "priceAvg30d": 18.82
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.03,
          "priceAvg30d": 18.53
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.03,
          "priceAvg30d": 18.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.74,
          "priceAvg30d": 18.22
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.91,
          "priceAvg30d": 18.53
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.03,
          "priceAvg30d": 18.67
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.35,
          "priceAvg30d": 19.07
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.35,
          "priceAvg30d": 19.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.87,
          "priceAvg30d": 18.85
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.39,
          "priceAvg30d": 17.45
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.59,
          "priceAvg30d": 17.36
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.28,
          "priceAvg30d": 17.69
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.03,
          "priceAvg30d": 18.04
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 7.24,
          "priceAvg30d": 18.54
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.79,
          "priceAvg30d": 20.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.18,
          "priceAvg30d": 19.57
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.68,
          "priceAvg30d": 20.23
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.59,
          "priceAvg30d": 19.32
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.5,
          "priceAvg30d": 19.65
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.2,
          "priceAvg30d": 20.14
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.91,
          "priceAvg30d": 20.66
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.91,
          "priceAvg30d": 19.57
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.87,
          "priceAvg30d": 20.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 14.03,
          "priceAvg30d": 21.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 14.03,
          "priceAvg30d": 22.66
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 14.03,
          "priceAvg30d": 23.67
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 14.61,
          "priceAvg30d": 25.45
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.7,
          "priceAvg30d": 21.77
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.76,
          "priceAvg30d": 24.68
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 16.63,
          "priceAvg30d": 26.07
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.4,
          "priceAvg30d": 27.49
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.81,
          "priceAvg30d": 27.39
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.98,
          "priceAvg30d": 27.71
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.74,
          "priceAvg30d": 27.05
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.97,
          "priceAvg30d": 27.03
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.98,
          "priceAvg30d": 25.42
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.81,
          "priceAvg30d": 24.3
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.49,
          "priceAvg30d": 21.87
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.4,
          "priceAvg30d": 20.96
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.19,
          "priceAvg30d": 20.16
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.0,
          "priceAvg30d": 24.1
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.61,
          "priceAvg30d": 22.63
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.87,
          "priceAvg30d": 20.89
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.05,
          "priceAvg30d": 21.43
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.44,
          "priceAvg30d": 19.07
        }
      ],
      "avg": 14.33,
      "max": 21.98,
      "maxBlock": 36,
      "min": 7.24,
      "minBlock": 17,
      "spread3h": 11.33,
      "spreadLowAvg": 9.09,
      "spreadHighAvg": 20.42,
      "avg30d": 21.12,
      "spread30dAvg": 9.12,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.64,
          "priceAvg30d": 18.66
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.04,
          "priceAvg30d": 17.78
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 16.99
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.87,
          "priceAvg30d": 18.58
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.91,
          "priceAvg30d": 18.4
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.91,
          "priceAvg30d": 18.05
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 17.99
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.91,
          "priceAvg30d": 18.26
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.03,
          "priceAvg30d": 18.43
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.02,
          "priceAvg30d": 18.87
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.01,
          "priceAvg30d": 19.21
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.87,
          "priceAvg30d": 18.84
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.04,
          "priceAvg30d": 17.36
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.78,
          "priceAvg30d": 16.87
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.32,
          "priceAvg30d": 16.45
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.03,
          "priceAvg30d": 16.8
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.24,
          "priceAvg30d": 17.68
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.21,
          "priceAvg30d": 19.1
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.04,
          "priceAvg30d": 19.3
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.49,
          "priceAvg30d": 19.64
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.13,
          "priceAvg30d": 19.17
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.1,
          "priceAvg30d": 19.04
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.2,
          "priceAvg30d": 19.28
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.91,
          "priceAvg30d": 19.65
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.91,
          "priceAvg30d": 18.41
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.87,
          "priceAvg30d": 18.79
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 14.03,
          "priceAvg30d": 20.5
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.0,
          "priceAvg30d": 22.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.41,
          "priceAvg30d": 23.31
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 15.0,
          "priceAvg30d": 24.66
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.7,
          "priceAvg30d": 24.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.76,
          "priceAvg30d": 26.88
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.67,
          "priceAvg30d": 28.58
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.4,
          "priceAvg30d": 30.42
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.81,
          "priceAvg30d": 30.95
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.0,
          "priceAvg30d": 31.77
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.8,
          "priceAvg30d": 32.31
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.09,
          "priceAvg30d": 31.07
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.8,
          "priceAvg30d": 29.52
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.79,
          "priceAvg30d": 28.21
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.49,
          "priceAvg30d": 26.69
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.4,
          "priceAvg30d": 24.96
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.19,
          "priceAvg30d": 23.58
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.0,
          "priceAvg30d": 24.63
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.61,
          "priceAvg30d": 24.21
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.87,
          "priceAvg30d": 22.3
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.89,
          "priceAvg30d": 21.66
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.14,
          "priceAvg30d": 19.21
        }
      ],
      "avg": 14.2,
      "max": 21.09,
      "maxBlock": 38,
      "min": 8.24,
      "minBlock": 17,
      "spread3h": 10.14,
      "spreadLowAvg": 10.64,
      "spreadHighAvg": 20.78,
      "avg30d": 21.86,
      "spread30dAvg": 14.12,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.6,
          "priceAvg30d": 16.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.38,
          "priceAvg30d": 16.37
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.6,
          "priceAvg30d": 15.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.37,
          "priceAvg30d": 15.89
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.21,
          "priceAvg30d": 15.9
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.6,
          "priceAvg30d": 16.41
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 16.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.91,
          "priceAvg30d": 16.2
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.6,
          "priceAvg30d": 15.64
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.21,
          "priceAvg30d": 16.59
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 17.01
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.5,
          "priceAvg30d": 16.55
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.6,
          "priceAvg30d": 15.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.21,
          "priceAvg30d": 14.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.65,
          "priceAvg30d": 14.84
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.03,
          "priceAvg30d": 15.63
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.24,
          "priceAvg30d": 17.02
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.21,
          "priceAvg30d": 18.61
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.04,
          "priceAvg30d": 19.01
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.49,
          "priceAvg30d": 19.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.13,
          "priceAvg30d": 18.85
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.1,
          "priceAvg30d": 18.79
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.2,
          "priceAvg30d": 19.02
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.91,
          "priceAvg30d": 19.35
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.91,
          "priceAvg30d": 18.02
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.87,
          "priceAvg30d": 18.35
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 14.03,
          "priceAvg30d": 20.12
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.0,
          "priceAvg30d": 21.79
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.41,
          "priceAvg30d": 22.53
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 15.0,
          "priceAvg30d": 23.56
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.7,
          "priceAvg30d": 22.94
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.76,
          "priceAvg30d": 25.51
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.67,
          "priceAvg30d": 27.23
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 15.69,
          "priceAvg30d": 29.24
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.24,
          "priceAvg30d": 29.33
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.68,
          "priceAvg30d": 30.59
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.12,
          "priceAvg30d": 31.01
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.5,
          "priceAvg30d": 30.0
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.1,
          "priceAvg30d": 28.41
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.99,
          "priceAvg30d": 26.9
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.72,
          "priceAvg30d": 25.47
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.01,
          "priceAvg30d": 23.55
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 15.0,
          "priceAvg30d": 21.9
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 13.01,
          "priceAvg30d": 21.97
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.01,
          "priceAvg30d": 21.55
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.87,
          "priceAvg30d": 19.98
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.89,
          "priceAvg30d": 19.67
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.21,
          "priceAvg30d": 17.16
        }
      ],
      "avg": 13.08,
      "max": 19.5,
      "maxBlock": 38,
      "min": 8.24,
      "minBlock": 17,
      "spread3h": 7.7,
      "spreadLowAvg": 10.44,
      "spreadHighAvg": 18.14,
      "avg30d": 20.47,
      "spread30dAvg": 14.18,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.6,
          "priceAvg30d": 15.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.38,
          "priceAvg30d": 15.72
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.6,
          "priceAvg30d": 14.98
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.37,
          "priceAvg30d": 14.85
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.21,
          "priceAvg30d": 14.82
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.6,
          "priceAvg30d": 15.05
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 14.78
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.91,
          "priceAvg30d": 14.85
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.6,
          "priceAvg30d": 14.88
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.21,
          "priceAvg30d": 15.37
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 15.83
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.5,
          "priceAvg30d": 15.71
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.6,
          "priceAvg30d": 15.18
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.21,
          "priceAvg30d": 14.3
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.65,
          "priceAvg30d": 13.96
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.03,
          "priceAvg30d": 14.42
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.24,
          "priceAvg30d": 15.71
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.21,
          "priceAvg30d": 17.62
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.04,
          "priceAvg30d": 18.16
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.49,
          "priceAvg30d": 18.48
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.13,
          "priceAvg30d": 18.32
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.1,
          "priceAvg30d": 18.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.2,
          "priceAvg30d": 18.6
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.91,
          "priceAvg30d": 18.91
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.91,
          "priceAvg30d": 17.18
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.87,
          "priceAvg30d": 17.52
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 14.03,
          "priceAvg30d": 19.58
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.0,
          "priceAvg30d": 21.62
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.41,
          "priceAvg30d": 22.33
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 15.0,
          "priceAvg30d": 23.06
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.7,
          "priceAvg30d": 22.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.76,
          "priceAvg30d": 24.48
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.67,
          "priceAvg30d": 25.81
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 15.69,
          "priceAvg30d": 28.9
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.24,
          "priceAvg30d": 29.13
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.68,
          "priceAvg30d": 30.2
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.12,
          "priceAvg30d": 30.65
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.5,
          "priceAvg30d": 29.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.1,
          "priceAvg30d": 28.3
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.99,
          "priceAvg30d": 26.61
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.72,
          "priceAvg30d": 25.29
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.01,
          "priceAvg30d": 23.33
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 15.0,
          "priceAvg30d": 21.72
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 13.01,
          "priceAvg30d": 20.64
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.01,
          "priceAvg30d": 18.96
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.87,
          "priceAvg30d": 17.03
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.89,
          "priceAvg30d": 16.78
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.21,
          "priceAvg30d": 15.26
        }
      ],
      "avg": 13.08,
      "max": 19.5,
      "maxBlock": 38,
      "min": 8.24,
      "minBlock": 17,
      "spread3h": 7.7,
      "spreadLowAvg": 10.44,
      "spreadHighAvg": 18.14,
      "avg30d": 19.61,
      "spread30dAvg": 14.94,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.6,
          "priceAvg30d": 15.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.38,
          "priceAvg30d": 15.72
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.6,
          "priceAvg30d": 14.98
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.37,
          "priceAvg30d": 14.85
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.21,
          "priceAvg30d": 14.82
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.6,
          "priceAvg30d": 15.05
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 14.78
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.91,
          "priceAvg30d": 14.85
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.6,
          "priceAvg30d": 14.88
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.21,
          "priceAvg30d": 15.37
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 15.83
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.5,
          "priceAvg30d": 15.71
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.6,
          "priceAvg30d": 15.18
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.21,
          "priceAvg30d": 14.3
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.65,
          "priceAvg30d": 13.88
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.03,
          "priceAvg30d": 13.83
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.24,
          "priceAvg30d": 14.74
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.21,
          "priceAvg30d": 15.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.04,
          "priceAvg30d": 15.32
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.49,
          "priceAvg30d": 14.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.13,
          "priceAvg30d": 14.39
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.1,
          "priceAvg30d": 14.11
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.2,
          "priceAvg30d": 13.93
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.91,
          "priceAvg30d": 13.77
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.91,
          "priceAvg30d": 12.4
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.87,
          "priceAvg30d": 12.54
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 14.03,
          "priceAvg30d": 14.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.0,
          "priceAvg30d": 15.79
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.41,
          "priceAvg30d": 16.08
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 15.0,
          "priceAvg30d": 17.17
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.7,
          "priceAvg30d": 19.3
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.76,
          "priceAvg30d": 22.8
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.67,
          "priceAvg30d": 25.64
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 15.69,
          "priceAvg30d": 28.87
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.24,
          "priceAvg30d": 29.13
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.68,
          "priceAvg30d": 30.2
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.12,
          "priceAvg30d": 30.65
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.5,
          "priceAvg30d": 29.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.1,
          "priceAvg30d": 28.3
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.99,
          "priceAvg30d": 26.61
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.72,
          "priceAvg30d": 25.29
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.01,
          "priceAvg30d": 23.33
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 15.0,
          "priceAvg30d": 21.72
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 13.01,
          "priceAvg30d": 20.64
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.01,
          "priceAvg30d": 18.96
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.87,
          "priceAvg30d": 17.03
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.89,
          "priceAvg30d": 16.78
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.21,
          "priceAvg30d": 15.26
        }
      ],
      "avg": 13.08,
      "max": 19.5,
      "maxBlock": 38,
      "min": 8.24,
      "minBlock": 17,
      "spread3h": 7.7,
      "spreadLowAvg": 10.44,
      "spreadHighAvg": 18.14,
      "avg30d": 18.22,
      "spread30dAvg": 16.04,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.6,
          "priceAvg30d": 15.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.38,
          "priceAvg30d": 15.64
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.6,
          "priceAvg30d": 14.83
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.37,
          "priceAvg30d": 14.7
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.21,
          "priceAvg30d": 14.68
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.6,
          "priceAvg30d": 14.9
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 14.6
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.91,
          "priceAvg30d": 14.67
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.6,
          "priceAvg30d": 14.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.21,
          "priceAvg30d": 15.28
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 15.83
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.5,
          "priceAvg30d": 15.71
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.6,
          "priceAvg30d": 15.13
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.21,
          "priceAvg30d": 14.22
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.65,
          "priceAvg30d": 13.62
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.03,
          "priceAvg30d": 13.18
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.24,
          "priceAvg30d": 13.95
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.21,
          "priceAvg30d": 14.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.04,
          "priceAvg30d": 14.45
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 6.5,
          "priceAvg30d": 12.91
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.78,
          "priceAvg30d": 12.54
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.5,
          "priceAvg30d": 11.74
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.2,
          "priceAvg30d": 11.06
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.91,
          "priceAvg30d": 11.18
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.02,
          "priceAvg30d": 9.98
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.11,
          "priceAvg30d": 10.49
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.08,
          "priceAvg30d": 12.15
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.18,
          "priceAvg30d": 14.14
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 13.8,
          "priceAvg30d": 14.28
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.8,
          "priceAvg30d": 15.81
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.27,
          "priceAvg30d": 17.9
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.8,
          "priceAvg30d": 21.47
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.01,
          "priceAvg30d": 24.35
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 15.69,
          "priceAvg30d": 28.62
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.24,
          "priceAvg30d": 28.98
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.68,
          "priceAvg30d": 30.2
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.12,
          "priceAvg30d": 30.65
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.5,
          "priceAvg30d": 29.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.1,
          "priceAvg30d": 28.3
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.99,
          "priceAvg30d": 26.61
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.72,
          "priceAvg30d": 25.29
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.01,
          "priceAvg30d": 23.33
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 15.0,
          "priceAvg30d": 21.72
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 13.01,
          "priceAvg30d": 20.64
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.01,
          "priceAvg30d": 18.96
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.87,
          "priceAvg30d": 17.03
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.89,
          "priceAvg30d": 16.78
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.21,
          "priceAvg30d": 15.26
        }
      ],
      "avg": 12.2,
      "max": 19.5,
      "maxBlock": 38,
      "min": 6.5,
      "minBlock": 20,
      "spread3h": 8.81,
      "spreadLowAvg": 9.33,
      "spreadHighAvg": 18.14,
      "avg30d": 17.55,
      "spread30dAvg": 18.14,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.6,
          "priceAvg30d": 14.5
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.38,
          "priceAvg30d": 14.79
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.6,
          "priceAvg30d": 13.18
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.37,
          "priceAvg30d": 12.38
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.21,
          "priceAvg30d": 12.0
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.6,
          "priceAvg30d": 12.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.6,
          "priceAvg30d": 12.07
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.6,
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
          "priceAvg30d": 13.51
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.6,
          "priceAvg30d": 14.38
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.6,
          "priceAvg30d": 14.7
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.6,
          "priceAvg30d": 14.25
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.21,
          "priceAvg30d": 12.19
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.65,
          "priceAvg30d": 11.51
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.03,
          "priceAvg30d": 11.7
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.24,
          "priceAvg30d": 13.17
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.21,
          "priceAvg30d": 13.95
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.21,
          "priceAvg30d": 13.64
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.21,
          "priceAvg30d": 13.28
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.21,
          "priceAvg30d": 12.67
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.21,
          "priceAvg30d": 12.51
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.21,
          "priceAvg30d": 12.5
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.21,
          "priceAvg30d": 12.32
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.21,
          "priceAvg30d": 11.58
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.21,
          "priceAvg30d": 11.64
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.21,
          "priceAvg30d": 13.08
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.21,
          "priceAvg30d": 14.84
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.6,
          "priceAvg30d": 15.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.6,
          "priceAvg30d": 16.66
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.6,
          "priceAvg30d": 18.93
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.74,
          "priceAvg30d": 22.47
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.67,
          "priceAvg30d": 25.43
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 15.69,
          "priceAvg30d": 28.87
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.24,
          "priceAvg30d": 29.13
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.68,
          "priceAvg30d": 30.2
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.12,
          "priceAvg30d": 30.65
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.5,
          "priceAvg30d": 29.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.1,
          "priceAvg30d": 28.3
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.99,
          "priceAvg30d": 26.61
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.72,
          "priceAvg30d": 25.29
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.01,
          "priceAvg30d": 23.33
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 15.0,
          "priceAvg30d": 21.71
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 13.01,
          "priceAvg30d": 20.64
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.01,
          "priceAvg30d": 18.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.87,
          "priceAvg30d": 16.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.89,
          "priceAvg30d": 16.09
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.21,
          "priceAvg30d": 13.75
        }
      ],
      "avg": 12.06,
      "max": 19.5,
      "maxBlock": 38,
      "min": 8.24,
      "minBlock": 17,
      "spread3h": 8.05,
      "spreadLowAvg": 10.09,
      "spreadHighAvg": 18.14,
      "avg30d": 17.12,
      "spread30dAvg": 17.74,
      "historyDays": 30
    }
  }
};
