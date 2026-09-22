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
  "targetDate": "2026-09-22",
  "fetchedAt": "2026-09-22T09:05:13+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 21.1,
        "priceAvg30d": 17.35
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 19.3,
        "priceAvg30d": 16.25
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 19.59,
        "priceAvg30d": 15.46
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 19.0,
        "priceAvg30d": 15.49
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 15.0,
        "priceAvg30d": 15.39
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 16.81,
        "priceAvg30d": 15.5
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 18.99,
        "priceAvg30d": 15.82
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 19.6,
        "priceAvg30d": 16.01
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 20.03,
        "priceAvg30d": 16.32
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 21.74,
        "priceAvg30d": 17.12
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 22.76,
        "priceAvg30d": 17.92
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 21.74,
        "priceAvg30d": 17.55
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 19.29,
        "priceAvg30d": 16.76
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 13.95,
        "priceAvg30d": 15.96
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 11.06,
        "priceAvg30d": 15.37
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 9.0,
        "priceAvg30d": 15.63
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 10.21,
        "priceAvg30d": 16.47
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 9.63,
        "priceAvg30d": 18.07
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 9.5,
        "priceAvg30d": 18.74
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 7.0,
        "priceAvg30d": 18.62
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 2.5,
        "priceAvg30d": 17.82
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 1.51,
        "priceAvg30d": 17.83
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 1.0,
        "priceAvg30d": 17.78
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 0.7,
        "priceAvg30d": 17.59
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 0.1,
        "priceAvg30d": 16.2
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 1.0,
        "priceAvg30d": 16.6
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 2.5,
        "priceAvg30d": 17.97
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 5.45,
        "priceAvg30d": 19.73
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 3.1,
        "priceAvg30d": 21.52
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 10.28,
        "priceAvg30d": 23.21
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 12.04,
        "priceAvg30d": 22.5
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 16.85,
        "priceAvg30d": 25.15
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 22.48,
        "priceAvg30d": 26.45
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 25.88,
        "priceAvg30d": 29.0
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 26.54,
        "priceAvg30d": 28.91
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 28.41,
        "priceAvg30d": 29.53
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 28.41,
        "priceAvg30d": 29.51
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 28.19,
        "priceAvg30d": 28.79
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 27.91,
        "priceAvg30d": 27.43
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 26.17,
        "priceAvg30d": 25.47
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 24.9,
        "priceAvg30d": 23.7
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 24.36,
        "priceAvg30d": 22.29
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 24.49,
        "priceAvg30d": 21.17
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 24.29,
        "priceAvg30d": 22.23
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 23.64,
        "priceAvg30d": 21.45
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 22.76,
        "priceAvg30d": 19.51
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 22.5,
        "priceAvg30d": 19.22
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 20.0,
        "priceAvg30d": 17.22
      }
    ],
    "avg": 16.32,
    "max": 28.41,
    "maxBlock": 36,
    "min": 0.1,
    "minBlock": 25,
    "spread3h": 24.54,
    "spreadLowAvg": 2.03,
    "spreadHighAvg": 26.57,
    "avg30d": 19.95,
    "spread30dAvg": 13.99,
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
          "price": 10.46,
          "priceAvg30d": 13.76
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.55,
          "priceAvg30d": 12.89
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.54,
          "priceAvg30d": 12.35
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.54,
          "priceAvg30d": 12.13
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.5,
          "priceAvg30d": 13.09
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.46,
          "priceAvg30d": 13.62
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.55,
          "priceAvg30d": 14.68
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.54,
          "priceAvg30d": 14.9
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.55,
          "priceAvg30d": 15.29
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.44,
          "priceAvg30d": 15.36
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 9.55,
          "priceAvg30d": 15.2
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 9.55,
          "priceAvg30d": 14.29
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 9.55,
          "priceAvg30d": 13.22
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.5,
          "priceAvg30d": 11.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 6.76,
          "priceAvg30d": 10.86
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 1.0,
          "priceAvg30d": 10.58
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 0.03,
          "priceAvg30d": 10.31
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 10.76
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 10.17
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 9.32
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.7
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.78
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 9.32
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.6
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 8.27
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 8.04
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 9.23
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 11.18
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 11.29
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 12.53
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.01,
          "priceAvg30d": 14.24
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 0.01,
          "priceAvg30d": 16.72
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 1.0,
          "priceAvg30d": 19.16
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 9.5,
          "priceAvg30d": 21.4
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 9.55,
          "priceAvg30d": 21.55
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 9.67,
          "priceAvg30d": 21.98
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 9.67,
          "priceAvg30d": 21.52
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 10.46,
          "priceAvg30d": 22.14
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.5,
          "priceAvg30d": 21.42
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.0,
          "priceAvg30d": 20.36
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.19,
          "priceAvg30d": 19.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.35,
          "priceAvg30d": 18.69
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.9,
          "priceAvg30d": 17.61
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 29.09,
          "priceAvg30d": 17.3
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.0,
          "priceAvg30d": 17.18
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.0,
          "priceAvg30d": 15.8
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.22,
          "priceAvg30d": 14.94
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.53,
          "priceAvg30d": 14.02
        }
      ],
      "avg": 8.12,
      "max": 29.09,
      "maxBlock": 44,
      "min": 0.01,
      "minBlock": 18,
      "spread3h": 18.47,
      "spreadLowAvg": 1.3,
      "spreadHighAvg": 19.78,
      "avg30d": 14.29,
      "spread30dAvg": 11.92,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.55,
          "priceAvg30d": 18.23
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.55,
          "priceAvg30d": 16.9
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.54,
          "priceAvg30d": 15.7
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.54,
          "priceAvg30d": 15.5
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.42,
          "priceAvg30d": 15.75
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.54,
          "priceAvg30d": 15.86
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.55,
          "priceAvg30d": 17.01
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.54,
          "priceAvg30d": 17.21
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.55,
          "priceAvg30d": 17.55
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 9.55,
          "priceAvg30d": 17.92
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 9.55,
          "priceAvg30d": 18.44
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 9.55,
          "priceAvg30d": 17.73
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 9.55,
          "priceAvg30d": 16.41
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.55,
          "priceAvg30d": 14.02
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 6.76,
          "priceAvg30d": 13.46
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 1.0,
          "priceAvg30d": 13.2
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 0.03,
          "priceAvg30d": 11.23
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 12.11
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 12.82
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 12.49
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 11.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 12.09
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 11.71
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 10.73
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 9.49
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 9.99
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 11.55
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 13.09
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 13.41
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 14.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.01,
          "priceAvg30d": 16.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 0.01,
          "priceAvg30d": 20.2
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 1.0,
          "priceAvg30d": 22.87
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 9.5,
          "priceAvg30d": 25.68
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 9.55,
          "priceAvg30d": 25.15
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 9.67,
          "priceAvg30d": 25.63
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 9.67,
          "priceAvg30d": 25.44
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 10.46,
          "priceAvg30d": 25.3
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.5,
          "priceAvg30d": 23.8
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.0,
          "priceAvg30d": 22.51
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.19,
          "priceAvg30d": 20.78
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.35,
          "priceAvg30d": 19.79
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.9,
          "priceAvg30d": 18.89
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 29.09,
          "priceAvg30d": 18.96
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.0,
          "priceAvg30d": 19.89
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.0,
          "priceAvg30d": 18.36
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.22,
          "priceAvg30d": 18.67
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.53,
          "priceAvg30d": 17.9
        }
      ],
      "avg": 8.04,
      "max": 29.09,
      "maxBlock": 44,
      "min": 0.01,
      "minBlock": 18,
      "spread3h": 18.47,
      "spreadLowAvg": 1.3,
      "spreadHighAvg": 19.78,
      "avg30d": 16.98,
      "spread30dAvg": 13.3,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.19,
          "priceAvg30d": 19.19
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.95,
          "priceAvg30d": 18.54
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.18,
          "priceAvg30d": 17.81
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.96,
          "priceAvg30d": 18.27
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.52,
          "priceAvg30d": 18.09
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.61,
          "priceAvg30d": 18.08
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.96,
          "priceAvg30d": 18.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.98,
          "priceAvg30d": 18.48
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.0,
          "priceAvg30d": 18.89
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.0,
          "priceAvg30d": 19.18
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.23,
          "priceAvg30d": 19.7
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.18,
          "priceAvg30d": 19.33
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.84,
          "priceAvg30d": 18.5
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.76,
          "priceAvg30d": 18.62
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.76,
          "priceAvg30d": 18.76
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.0,
          "priceAvg30d": 19.48
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.92,
          "priceAvg30d": 20.7
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 21.93,
          "priceAvg30d": 23.26
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.74,
          "priceAvg30d": 23.02
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.0,
          "priceAvg30d": 23.5
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.01,
          "priceAvg30d": 23.05
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.82,
          "priceAvg30d": 23.55
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.18,
          "priceAvg30d": 23.85
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.31,
          "priceAvg30d": 23.9
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 14.14,
          "priceAvg30d": 22.35
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 22.86
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.44,
          "priceAvg30d": 23.88
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.06,
          "priceAvg30d": 25.12
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.79,
          "priceAvg30d": 25.77
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.05,
          "priceAvg30d": 27.05
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.39,
          "priceAvg30d": 24.62
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.52,
          "priceAvg30d": 26.87
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.18,
          "priceAvg30d": 28.17
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 50.01,
          "priceAvg30d": 29.35
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.0,
          "priceAvg30d": 28.85
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 50.01,
          "priceAvg30d": 28.62
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 50.01,
          "priceAvg30d": 28.11
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 50.01,
          "priceAvg30d": 28.08
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 47.61,
          "priceAvg30d": 26.42
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.0,
          "priceAvg30d": 25.27
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.95,
          "priceAvg30d": 23.36
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 33.05,
          "priceAvg30d": 22.8
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.2,
          "priceAvg30d": 22.01
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.52,
          "priceAvg30d": 24.0
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 33.11,
          "priceAvg30d": 23.12
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.52,
          "priceAvg30d": 21.88
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.52,
          "priceAvg30d": 21.77
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.02,
          "priceAvg30d": 20.03
        }
      ],
      "avg": 28.19,
      "max": 50.01,
      "maxBlock": 34,
      "min": 11.82,
      "minBlock": 22,
      "spread3h": 25.29,
      "spreadLowAvg": 15.56,
      "spreadHighAvg": 40.85,
      "avg30d": 22.6,
      "spread30dAvg": 10.91,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.19,
          "priceAvg30d": 19.34
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.95,
          "priceAvg30d": 18.65
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.18,
          "priceAvg30d": 17.91
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.96,
          "priceAvg30d": 18.18
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.52,
          "priceAvg30d": 17.99
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.61,
          "priceAvg30d": 18.05
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.96,
          "priceAvg30d": 18.3
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.98,
          "priceAvg30d": 18.54
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.0,
          "priceAvg30d": 18.96
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.0,
          "priceAvg30d": 19.28
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.23,
          "priceAvg30d": 19.68
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.18,
          "priceAvg30d": 19.7
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.84,
          "priceAvg30d": 19.14
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.76,
          "priceAvg30d": 18.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 19.7,
          "priceAvg30d": 18.4
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 19.0,
          "priceAvg30d": 18.77
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 19.01,
          "priceAvg30d": 20.48
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.03,
          "priceAvg30d": 22.47
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 18.26,
          "priceAvg30d": 23.16
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.95,
          "priceAvg30d": 23.57
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.01,
          "priceAvg30d": 22.89
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.82,
          "priceAvg30d": 23.09
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.18,
          "priceAvg30d": 23.19
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.31,
          "priceAvg30d": 23.16
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.44,
          "priceAvg30d": 21.56
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 13.95,
          "priceAvg30d": 22.04
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.44,
          "priceAvg30d": 24.13
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.06,
          "priceAvg30d": 25.63
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.79,
          "priceAvg30d": 26.37
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.05,
          "priceAvg30d": 27.28
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.39,
          "priceAvg30d": 26.76
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.5,
          "priceAvg30d": 28.78
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 34.5,
          "priceAvg30d": 30.07
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.09,
          "priceAvg30d": 32.17
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.22,
          "priceAvg30d": 32.35
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.23,
          "priceAvg30d": 32.65
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.58,
          "priceAvg30d": 32.82
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.62,
          "priceAvg30d": 31.84
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.58,
          "priceAvg30d": 30.48
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.83,
          "priceAvg30d": 28.38
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.95,
          "priceAvg30d": 26.73
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 33.05,
          "priceAvg30d": 25.65
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.2,
          "priceAvg30d": 24.42
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.52,
          "priceAvg30d": 24.38
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 33.11,
          "priceAvg30d": 23.74
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.52,
          "priceAvg30d": 22.29
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.52,
          "priceAvg30d": 21.84
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.02,
          "priceAvg30d": 20.26
        }
      ],
      "avg": 25.79,
      "max": 38.23,
      "maxBlock": 36,
      "min": 11.82,
      "minBlock": 22,
      "spread3h": 22.07,
      "spreadLowAvg": 13.69,
      "spreadHighAvg": 35.77,
      "avg30d": 23.42,
      "spread30dAvg": 14.81,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.4,
          "priceAvg30d": 14.44
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.41,
          "priceAvg30d": 14.38
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.28,
          "priceAvg30d": 14.11
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.28,
          "priceAvg30d": 13.97
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.72,
          "priceAvg30d": 13.86
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 14.13
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.37,
          "priceAvg30d": 14.29
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.95,
          "priceAvg30d": 14.41
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.77,
          "priceAvg30d": 14.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.37,
          "priceAvg30d": 15.06
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 15.71
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.03,
          "priceAvg30d": 15.77
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.81,
          "priceAvg30d": 16.32
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.38,
          "priceAvg30d": 14.79
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 14.71
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.71,
          "priceAvg30d": 14.49
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.76,
          "priceAvg30d": 15.54
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.78,
          "priceAvg30d": 18.91
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 5.0,
          "priceAvg30d": 20.25
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 3.0,
          "priceAvg30d": 21.07
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 20.45
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.63,
          "priceAvg30d": 20.41
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.5,
          "priceAvg30d": 20.29
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 2.5,
          "priceAvg30d": 20.27
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 18.07
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 18.68
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 21.15
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 3.0,
          "priceAvg30d": 22.44
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 5.67,
          "priceAvg30d": 23.12
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.2,
          "priceAvg30d": 23.69
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.92,
          "priceAvg30d": 22.97
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.01,
          "priceAvg30d": 24.72
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.06,
          "priceAvg30d": 25.38
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.08,
          "priceAvg30d": 27.9
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.84,
          "priceAvg30d": 27.77
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.02,
          "priceAvg30d": 28.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.02,
          "priceAvg30d": 29.05
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 14.96,
          "priceAvg30d": 28.04
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.61,
          "priceAvg30d": 26.66
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 9.92,
          "priceAvg30d": 24.74
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 9.9,
          "priceAvg30d": 23.16
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 9.17,
          "priceAvg30d": 22.0
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.38,
          "priceAvg30d": 21.01
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 9.92,
          "priceAvg30d": 20.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.0,
          "priceAvg30d": 19.12
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.38,
          "priceAvg30d": 17.49
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.87,
          "priceAvg30d": 17.2
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.0,
          "priceAvg30d": 14.57
        }
      ],
      "avg": 8.82,
      "max": 16.81,
      "maxBlock": 13,
      "min": 2.5,
      "minBlock": 21,
      "spread3h": 5.44,
      "spreadLowAvg": 4.24,
      "spreadHighAvg": 9.68,
      "avg30d": 19.58,
      "spread30dAvg": 14.44,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.4,
          "priceAvg30d": 13.98
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.41,
          "priceAvg30d": 14.26
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.28,
          "priceAvg30d": 14.11
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.28,
          "priceAvg30d": 13.97
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.72,
          "priceAvg30d": 13.85
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 14.13
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.37,
          "priceAvg30d": 14.29
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.95,
          "priceAvg30d": 14.41
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.77,
          "priceAvg30d": 14.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.37,
          "priceAvg30d": 15.06
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 15.68
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.03,
          "priceAvg30d": 15.74
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.81,
          "priceAvg30d": 16.32
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.38,
          "priceAvg30d": 14.79
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 14.71
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 3.5,
          "priceAvg30d": 14.36
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.5,
          "priceAvg30d": 15.2
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.0,
          "priceAvg30d": 18.02
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 19.4
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.0,
          "priceAvg30d": 19.87
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 19.26
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.63,
          "priceAvg30d": 19.35
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.0,
          "priceAvg30d": 19.71
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.04,
          "priceAvg30d": 19.19
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 17.55
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 17.92
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 20.43
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 21.9
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 1.0,
          "priceAvg30d": 22.4
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.29,
          "priceAvg30d": 22.73
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 5.0,
          "priceAvg30d": 21.98
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.0,
          "priceAvg30d": 23.6
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.06,
          "priceAvg30d": 24.87
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.08,
          "priceAvg30d": 27.53
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.84,
          "priceAvg30d": 27.63
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.02,
          "priceAvg30d": 28.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.02,
          "priceAvg30d": 28.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 14.96,
          "priceAvg30d": 27.91
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.61,
          "priceAvg30d": 26.53
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 9.92,
          "priceAvg30d": 24.61
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 9.9,
          "priceAvg30d": 23.16
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 9.17,
          "priceAvg30d": 22.0
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.38,
          "priceAvg30d": 21.01
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 9.92,
          "priceAvg30d": 20.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.0,
          "priceAvg30d": 18.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.38,
          "priceAvg30d": 17.13
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.87,
          "priceAvg30d": 16.91
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.0,
          "priceAvg30d": 14.28
        }
      ],
      "avg": 7.83,
      "max": 16.81,
      "maxBlock": 13,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 8.36,
      "spreadLowAvg": 0.78,
      "spreadHighAvg": 9.14,
      "avg30d": 19.22,
      "spread30dAvg": 13.91,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.4,
          "priceAvg30d": 13.98
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.41,
          "priceAvg30d": 14.26
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.28,
          "priceAvg30d": 14.11
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.28,
          "priceAvg30d": 13.97
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.72,
          "priceAvg30d": 13.85
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 14.13
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.37,
          "priceAvg30d": 14.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.95,
          "priceAvg30d": 14.41
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.77,
          "priceAvg30d": 14.27
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.37,
          "priceAvg30d": 15.0
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 15.66
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.03,
          "priceAvg30d": 15.74
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.81,
          "priceAvg30d": 16.24
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.38,
          "priceAvg30d": 14.65
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 14.29
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 3.5,
          "priceAvg30d": 13.41
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.5,
          "priceAvg30d": 13.85
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.0,
          "priceAvg30d": 14.9
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 15.13
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.0,
          "priceAvg30d": 14.25
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 14.3
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.63,
          "priceAvg30d": 13.99
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.0,
          "priceAvg30d": 13.81
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.04,
          "priceAvg30d": 13.61
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 11.99
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 12.1
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 14.52
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 16.11
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 15.56
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 16.47
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 5.0,
          "priceAvg30d": 18.92
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.0,
          "priceAvg30d": 22.28
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.06,
          "priceAvg30d": 24.34
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.08,
          "priceAvg30d": 27.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.84,
          "priceAvg30d": 27.63
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.02,
          "priceAvg30d": 28.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.02,
          "priceAvg30d": 28.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 14.96,
          "priceAvg30d": 27.91
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.61,
          "priceAvg30d": 26.53
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 9.92,
          "priceAvg30d": 24.61
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 9.9,
          "priceAvg30d": 23.16
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 9.17,
          "priceAvg30d": 22.0
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.38,
          "priceAvg30d": 21.01
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 9.92,
          "priceAvg30d": 20.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.0,
          "priceAvg30d": 18.78
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.38,
          "priceAvg30d": 17.12
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.87,
          "priceAvg30d": 16.91
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.0,
          "priceAvg30d": 14.28
        }
      ],
      "avg": 7.64,
      "max": 16.81,
      "maxBlock": 13,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 8.36,
      "spreadLowAvg": 0.78,
      "spreadHighAvg": 9.14,
      "avg30d": 17.57,
      "spread30dAvg": 15.07,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.4,
          "priceAvg30d": 13.55
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.41,
          "priceAvg30d": 13.53
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.28,
          "priceAvg30d": 13.23
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.28,
          "priceAvg30d": 13.15
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.72,
          "priceAvg30d": 12.93
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 13.25
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.37,
          "priceAvg30d": 13.21
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.95,
          "priceAvg30d": 13.59
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.77,
          "priceAvg30d": 13.27
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.37,
          "priceAvg30d": 14.06
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 14.91
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.03,
          "priceAvg30d": 15.07
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.81,
          "priceAvg30d": 15.42
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.38,
          "priceAvg30d": 13.45
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 12.86
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 3.5,
          "priceAvg30d": 12.29
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.5,
          "priceAvg30d": 12.93
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.0,
          "priceAvg30d": 13.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 13.38
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.0,
          "priceAvg30d": 12.02
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 11.34
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.63,
          "priceAvg30d": 11.0
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.0,
          "priceAvg30d": 10.87
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.04,
          "priceAvg30d": 10.89
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 9.64
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 10.05
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 12.3
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 14.38
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 14.2
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 14.87
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 5.0,
          "priceAvg30d": 17.03
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.0,
          "priceAvg30d": 20.36
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.06,
          "priceAvg30d": 22.24
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.08,
          "priceAvg30d": 25.45
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.84,
          "priceAvg30d": 25.86
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.02,
          "priceAvg30d": 27.77
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.02,
          "priceAvg30d": 28.25
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 14.96,
          "priceAvg30d": 27.22
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.61,
          "priceAvg30d": 25.28
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 9.92,
          "priceAvg30d": 22.51
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 9.9,
          "priceAvg30d": 21.45
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 9.17,
          "priceAvg30d": 20.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.38,
          "priceAvg30d": 18.94
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 9.92,
          "priceAvg30d": 18.11
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.0,
          "priceAvg30d": 16.93
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.38,
          "priceAvg30d": 15.59
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.87,
          "priceAvg30d": 15.56
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.0,
          "priceAvg30d": 13.51
        }
      ],
      "avg": 7.64,
      "max": 16.81,
      "maxBlock": 13,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 8.36,
      "spreadLowAvg": 0.78,
      "spreadHighAvg": 9.14,
      "avg30d": 16.08,
      "spread30dAvg": 16.0,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.4,
          "priceAvg30d": 12.94
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.41,
          "priceAvg30d": 13.23
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.28,
          "priceAvg30d": 11.96
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.28,
          "priceAvg30d": 11.57
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.72,
          "priceAvg30d": 11.08
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 11.18
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.37,
          "priceAvg30d": 11.26
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.95,
          "priceAvg30d": 11.67
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.77,
          "priceAvg30d": 11.56
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.37,
          "priceAvg30d": 12.89
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 13.96
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.03,
          "priceAvg30d": 14.53
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.81,
          "priceAvg30d": 15.27
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.38,
          "priceAvg30d": 12.43
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 11.6
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 3.5,
          "priceAvg30d": 10.85
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.5,
          "priceAvg30d": 12.1
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 12.56
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 12.82
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 12.07
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 11.36
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 11.03
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 10.97
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 10.94
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 10.27
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 10.48
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 11.78
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 13.12
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 14.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 15.47
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 5.0,
          "priceAvg30d": 18.43
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.0,
          "priceAvg30d": 21.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.06,
          "priceAvg30d": 24.14
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.08,
          "priceAvg30d": 27.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.84,
          "priceAvg30d": 27.63
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.02,
          "priceAvg30d": 28.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.02,
          "priceAvg30d": 28.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 14.96,
          "priceAvg30d": 27.91
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.61,
          "priceAvg30d": 26.53
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 9.92,
          "priceAvg30d": 24.61
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 9.9,
          "priceAvg30d": 23.16
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 9.17,
          "priceAvg30d": 22.0
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.38,
          "priceAvg30d": 21.0
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 9.92,
          "priceAvg30d": 20.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.0,
          "priceAvg30d": 18.63
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.38,
          "priceAvg30d": 16.77
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.87,
          "priceAvg30d": 16.22
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.0,
          "priceAvg30d": 12.54
        }
      ],
      "avg": 7.35,
      "max": 16.81,
      "maxBlock": 13,
      "min": 0.01,
      "minBlock": 18,
      "spread3h": 6.53,
      "spreadLowAvg": 2.61,
      "spreadHighAvg": 9.14,
      "avg30d": 16.11,
      "spread30dAvg": 17.11,
      "historyDays": 30
    }
  }
};
