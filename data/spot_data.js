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
  "targetDate": "2026-09-10",
  "fetchedAt": "2026-09-10T09:05:34+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 17.84,
        "priceAvg30d": 17.36
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 12.99,
        "priceAvg30d": 16.51
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 12.79,
        "priceAvg30d": 15.84
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 11.63,
        "priceAvg30d": 16.28
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 11.32,
        "priceAvg30d": 16.13
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 11.63,
        "priceAvg30d": 16.11
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 12.0,
        "priceAvg30d": 16.22
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 12.2,
        "priceAvg30d": 16.41
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 12.79,
        "priceAvg30d": 16.46
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 14.69,
        "priceAvg30d": 17.05
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 16.37,
        "priceAvg30d": 17.68
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 15.01,
        "priceAvg30d": 17.15
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 14.61,
        "priceAvg30d": 16.17
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 12.0,
        "priceAvg30d": 15.69
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 11.41,
        "priceAvg30d": 15.21
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 11.55,
        "priceAvg30d": 15.65
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 11.88,
        "priceAvg30d": 16.4
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 13.3,
        "priceAvg30d": 17.78
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 15.59,
        "priceAvg30d": 17.98
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 15.0,
        "priceAvg30d": 17.95
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 13.68,
        "priceAvg30d": 17.18
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 13.07,
        "priceAvg30d": 17.24
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 13.0,
        "priceAvg30d": 17.41
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 12.05,
        "priceAvg30d": 17.39
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 10.11,
        "priceAvg30d": 16.34
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 10.1,
        "priceAvg30d": 16.73
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 14.16,
        "priceAvg30d": 17.62
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 17.51,
        "priceAvg30d": 19.03
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 20.0,
        "priceAvg30d": 20.43
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 21.28,
        "priceAvg30d": 22.29
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 21.74,
        "priceAvg30d": 21.26
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 23.13,
        "priceAvg30d": 24.16
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 23.96,
        "priceAvg30d": 25.75
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 24.32,
        "priceAvg30d": 28.07
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 24.5,
        "priceAvg30d": 28.38
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 24.32,
        "priceAvg30d": 29.18
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 24.33,
        "priceAvg30d": 29.19
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 23.51,
        "priceAvg30d": 28.8
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 22.61,
        "priceAvg30d": 27.23
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 21.67,
        "priceAvg30d": 25.41
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 20.46,
        "priceAvg30d": 23.65
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 20.48,
        "priceAvg30d": 21.57
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 19.1,
        "priceAvg30d": 20.34
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 17.54,
        "priceAvg30d": 22.34
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 17.11,
        "priceAvg30d": 21.32
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 15.59,
        "priceAvg30d": 19.49
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 15.59,
        "priceAvg30d": 19.27
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 12.45,
        "priceAvg30d": 17.52
      }
    ],
    "avg": 16.33,
    "max": 24.5,
    "maxBlock": 35,
    "min": 10.1,
    "minBlock": 26,
    "spread3h": 9.46,
    "spreadLowAvg": 14.47,
    "spreadHighAvg": 23.93,
    "avg30d": 19.72,
    "spread30dAvg": 13.24,
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
          "price": 12.5,
          "priceAvg30d": 14.73
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.59,
          "priceAvg30d": 13.69
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.59,
          "priceAvg30d": 12.95
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.61,
          "priceAvg30d": 13.29
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.5,
          "priceAvg30d": 13.69
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.67,
          "priceAvg30d": 13.9
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.59,
          "priceAvg30d": 15.01
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.59,
          "priceAvg30d": 15.3
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.59,
          "priceAvg30d": 15.44
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.59,
          "priceAvg30d": 15.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.6,
          "priceAvg30d": 15.38
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.59,
          "priceAvg30d": 14.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.97,
          "priceAvg30d": 13.03
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.74,
          "priceAvg30d": 11.7
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.29,
          "priceAvg30d": 10.8
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.17,
          "priceAvg30d": 10.29
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.52,
          "priceAvg30d": 10.59
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.17,
          "priceAvg30d": 10.4
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.17,
          "priceAvg30d": 10.04
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 7.0,
          "priceAvg30d": 9.32
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.0,
          "priceAvg30d": 8.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 7.0,
          "priceAvg30d": 8.6
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.05,
          "priceAvg30d": 8.93
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 7.0,
          "priceAvg30d": 8.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 8.26
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.0,
          "priceAvg30d": 8.22
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 3.0,
          "priceAvg30d": 9.39
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 5.0,
          "priceAvg30d": 10.62
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 7.0,
          "priceAvg30d": 10.84
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.17,
          "priceAvg30d": 12.41
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.17,
          "priceAvg30d": 13.71
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.6,
          "priceAvg30d": 15.83
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.12,
          "priceAvg30d": 18.99
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.89,
          "priceAvg30d": 21.78
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.85,
          "priceAvg30d": 22.03
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.11,
          "priceAvg30d": 22.55
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 15.0,
          "priceAvg30d": 22.83
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.6,
          "priceAvg30d": 23.49
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.85,
          "priceAvg30d": 22.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.39,
          "priceAvg30d": 21.01
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.35,
          "priceAvg30d": 19.79
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.73,
          "priceAvg30d": 18.81
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.33,
          "priceAvg30d": 17.79
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.0,
          "priceAvg30d": 18.68
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.34,
          "priceAvg30d": 18.98
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.5,
          "priceAvg30d": 17.3
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.97,
          "priceAvg30d": 16.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.27,
          "priceAvg30d": 14.91
        }
      ],
      "avg": 13.06,
      "max": 21.39,
      "maxBlock": 40,
      "min": 2.0,
      "minBlock": 26,
      "spread3h": 13.89,
      "spreadLowAvg": 5.59,
      "spreadHighAvg": 19.48,
      "avg30d": 14.61,
      "spread30dAvg": 12.62,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.94,
          "priceAvg30d": 18.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.59,
          "priceAvg30d": 17.28
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.59,
          "priceAvg30d": 15.98
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.61,
          "priceAvg30d": 16.41
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.5,
          "priceAvg30d": 16.42
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.67,
          "priceAvg30d": 16.45
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.59,
          "priceAvg30d": 17.35
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.59,
          "priceAvg30d": 17.79
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.59,
          "priceAvg30d": 17.95
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.59,
          "priceAvg30d": 18.66
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.6,
          "priceAvg30d": 19.09
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.59,
          "priceAvg30d": 18.06
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.59,
          "priceAvg30d": 15.91
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.68,
          "priceAvg30d": 13.96
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.37,
          "priceAvg30d": 13.45
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.16,
          "priceAvg30d": 12.72
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.52,
          "priceAvg30d": 11.33
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.44,
          "priceAvg30d": 11.58
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.44,
          "priceAvg30d": 11.84
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.44,
          "priceAvg30d": 11.36
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.46,
          "priceAvg30d": 10.6
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 7.04,
          "priceAvg30d": 10.97
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.22,
          "priceAvg30d": 10.68
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.44,
          "priceAvg30d": 9.91
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.52,
          "priceAvg30d": 9.41
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.19,
          "priceAvg30d": 9.78
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.13,
          "priceAvg30d": 11.07
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.16,
          "priceAvg30d": 12.23
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.18,
          "priceAvg30d": 12.47
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.21,
          "priceAvg30d": 14.37
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.42,
          "priceAvg30d": 15.58
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.33,
          "priceAvg30d": 17.81
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.57,
          "priceAvg30d": 21.26
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.5,
          "priceAvg30d": 24.09
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 28.61,
          "priceAvg30d": 24.35
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.84,
          "priceAvg30d": 25.01
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.61,
          "priceAvg30d": 24.81
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.36,
          "priceAvg30d": 24.96
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.8,
          "priceAvg30d": 23.36
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.0,
          "priceAvg30d": 22.1
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.35,
          "priceAvg30d": 20.33
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.52,
          "priceAvg30d": 19.3
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.33,
          "priceAvg30d": 18.47
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.0,
          "priceAvg30d": 19.81
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.34,
          "priceAvg30d": 20.52
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.06,
          "priceAvg30d": 18.9
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.62,
          "priceAvg30d": 19.37
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.59,
          "priceAvg30d": 17.98
        }
      ],
      "avg": 15.72,
      "max": 28.61,
      "maxBlock": 35,
      "min": 7.04,
      "minBlock": 22,
      "spread3h": 16.28,
      "spreadLowAvg": 9.09,
      "spreadHighAvg": 25.37,
      "avg30d": 16.7,
      "spread30dAvg": 13.43,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.94,
          "priceAvg30d": 18.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.59,
          "priceAvg30d": 17.62
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.59,
          "priceAvg30d": 16.85
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.61,
          "priceAvg30d": 18.0
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.5,
          "priceAvg30d": 17.79
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.67,
          "priceAvg30d": 17.57
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.59,
          "priceAvg30d": 17.68
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.59,
          "priceAvg30d": 17.96
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.59,
          "priceAvg30d": 18.18
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.59,
          "priceAvg30d": 18.8
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.6,
          "priceAvg30d": 19.28
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.59,
          "priceAvg30d": 18.6
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.59,
          "priceAvg30d": 17.14
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 15.59,
          "priceAvg30d": 17.27
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 19.94,
          "priceAvg30d": 17.68
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.46,
          "priceAvg30d": 18.18
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.97,
          "priceAvg30d": 18.85
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.92,
          "priceAvg30d": 21.08
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.56,
          "priceAvg30d": 20.53
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.54,
          "priceAvg30d": 21.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.35,
          "priceAvg30d": 20.19
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 23.19,
          "priceAvg30d": 20.66
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.3,
          "priceAvg30d": 21.15
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 22.74,
          "priceAvg30d": 21.62
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 21.97,
          "priceAvg30d": 20.34
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 21.94,
          "priceAvg30d": 21.04
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.54,
          "priceAvg30d": 22.0
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.44,
          "priceAvg30d": 23.54
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.6,
          "priceAvg30d": 24.4
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.02,
          "priceAvg30d": 25.95
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.05,
          "priceAvg30d": 22.43
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.97,
          "priceAvg30d": 25.25
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.99,
          "priceAvg30d": 26.5
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.5,
          "priceAvg30d": 27.72
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 28.61,
          "priceAvg30d": 27.57
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.84,
          "priceAvg30d": 27.62
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.61,
          "priceAvg30d": 26.89
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.36,
          "priceAvg30d": 26.98
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.8,
          "priceAvg30d": 25.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.0,
          "priceAvg30d": 23.96
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.74,
          "priceAvg30d": 21.66
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.52,
          "priceAvg30d": 20.93
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.59,
          "priceAvg30d": 20.16
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.35,
          "priceAvg30d": 23.38
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.79,
          "priceAvg30d": 21.98
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.32,
          "priceAvg30d": 20.54
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.73,
          "priceAvg30d": 20.9
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.59,
          "priceAvg30d": 18.76
        }
      ],
      "avg": 21.2,
      "max": 28.61,
      "maxBlock": 35,
      "min": 12.5,
      "minBlock": 5,
      "spread3h": 11.44,
      "spreadLowAvg": 15.27,
      "spreadHighAvg": 26.71,
      "avg30d": 21.2,
      "spread30dAvg": 10.23,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.94,
          "priceAvg30d": 18.34
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.59,
          "priceAvg30d": 17.56
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.59,
          "priceAvg30d": 16.83
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.61,
          "priceAvg30d": 18.04
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.5,
          "priceAvg30d": 17.83
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.67,
          "priceAvg30d": 17.63
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.59,
          "priceAvg30d": 17.55
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.59,
          "priceAvg30d": 17.93
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.59,
          "priceAvg30d": 18.22
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.59,
          "priceAvg30d": 18.9
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.6,
          "priceAvg30d": 19.27
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.59,
          "priceAvg30d": 18.93
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.59,
          "priceAvg30d": 17.53
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 15.59,
          "priceAvg30d": 17.28
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 19.94,
          "priceAvg30d": 17.01
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.46,
          "priceAvg30d": 17.51
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.97,
          "priceAvg30d": 18.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.92,
          "priceAvg30d": 20.24
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.56,
          "priceAvg30d": 20.55
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.54,
          "priceAvg30d": 20.87
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.35,
          "priceAvg30d": 20.41
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 23.19,
          "priceAvg30d": 20.49
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.3,
          "priceAvg30d": 20.73
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 22.74,
          "priceAvg30d": 21.02
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 21.97,
          "priceAvg30d": 19.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 21.94,
          "priceAvg30d": 20.07
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.54,
          "priceAvg30d": 22.05
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.44,
          "priceAvg30d": 23.74
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.6,
          "priceAvg30d": 24.61
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.26,
          "priceAvg30d": 25.79
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.2,
          "priceAvg30d": 24.8
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.0,
          "priceAvg30d": 27.48
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.29,
          "priceAvg30d": 28.94
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.31,
          "priceAvg30d": 30.77
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.98,
          "priceAvg30d": 31.25
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.01,
          "priceAvg30d": 31.85
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.0,
          "priceAvg30d": 32.25
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.79,
          "priceAvg30d": 31.16
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.86,
          "priceAvg30d": 29.61
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.61,
          "priceAvg30d": 27.96
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.74,
          "priceAvg30d": 26.44
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.52,
          "priceAvg30d": 24.89
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.29,
          "priceAvg30d": 23.55
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.23,
          "priceAvg30d": 23.91
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.32,
          "priceAvg30d": 23.52
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.3,
          "priceAvg30d": 21.94
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.3,
          "priceAvg30d": 21.17
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.59,
          "priceAvg30d": 18.92
        }
      ],
      "avg": 22.01,
      "max": 31.31,
      "maxBlock": 34,
      "min": 12.5,
      "minBlock": 5,
      "spread3h": 15.47,
      "spreadLowAvg": 15.27,
      "spreadHighAvg": 30.75,
      "avg30d": 22.2,
      "spread30dAvg": 14.57,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.72,
          "priceAvg30d": 16.21
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.6,
          "priceAvg30d": 16.19
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.21,
          "priceAvg30d": 15.54
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.21,
          "priceAvg30d": 15.28
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.21,
          "priceAvg30d": 15.34
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.37,
          "priceAvg30d": 15.85
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.6,
          "priceAvg30d": 15.69
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.6,
          "priceAvg30d": 15.78
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.6,
          "priceAvg30d": 15.71
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.6,
          "priceAvg30d": 16.24
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.8,
          "priceAvg30d": 16.67
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.8,
          "priceAvg30d": 16.49
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.79,
          "priceAvg30d": 15.97
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.6,
          "priceAvg30d": 15.08
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.03,
          "priceAvg30d": 14.92
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.03,
          "priceAvg30d": 15.6
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.86,
          "priceAvg30d": 16.78
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.86,
          "priceAvg30d": 19.2
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.0,
          "priceAvg30d": 19.82
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.86,
          "priceAvg30d": 20.55
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.86,
          "priceAvg30d": 20.18
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.86,
          "priceAvg30d": 20.24
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.86,
          "priceAvg30d": 20.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.86,
          "priceAvg30d": 20.75
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.0,
          "priceAvg30d": 18.72
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.58,
          "priceAvg30d": 19.25
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.03,
          "priceAvg30d": 21.18
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.95,
          "priceAvg30d": 22.72
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.6,
          "priceAvg30d": 23.4
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.01,
          "priceAvg30d": 24.45
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.79,
          "priceAvg30d": 23.78
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.34,
          "priceAvg30d": 26.28
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 16.72,
          "priceAvg30d": 27.62
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 16.72,
          "priceAvg30d": 29.61
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.72,
          "priceAvg30d": 29.51
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.76,
          "priceAvg30d": 30.56
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.76,
          "priceAvg30d": 30.92
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.11,
          "priceAvg30d": 29.94
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.11,
          "priceAvg30d": 28.32
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.76,
          "priceAvg30d": 26.65
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 15.9,
          "priceAvg30d": 25.06
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 14.63,
          "priceAvg30d": 23.28
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.76,
          "priceAvg30d": 21.6
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.27,
          "priceAvg30d": 21.38
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.8,
          "priceAvg30d": 21.13
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.63,
          "priceAvg30d": 19.61
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.72,
          "priceAvg30d": 19.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 16.56
        }
      ],
      "avg": 12.65,
      "max": 17.11,
      "maxBlock": 38,
      "min": 9.0,
      "minBlock": 25,
      "spread3h": 6.64,
      "spreadLowAvg": 10.02,
      "spreadHighAvg": 16.67,
      "avg30d": 20.64,
      "spread30dAvg": 14.73,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.72,
          "priceAvg30d": 15.16
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.6,
          "priceAvg30d": 15.54
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.21,
          "priceAvg30d": 14.98
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.21,
          "priceAvg30d": 14.73
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.21,
          "priceAvg30d": 14.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.37,
          "priceAvg30d": 15.09
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.6,
          "priceAvg30d": 14.9
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.6,
          "priceAvg30d": 14.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.6,
          "priceAvg30d": 14.95
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.6,
          "priceAvg30d": 15.5
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.8,
          "priceAvg30d": 15.93
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.8,
          "priceAvg30d": 15.88
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.79,
          "priceAvg30d": 15.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.6,
          "priceAvg30d": 14.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.03,
          "priceAvg30d": 14.26
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.03,
          "priceAvg30d": 14.64
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.86,
          "priceAvg30d": 15.71
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.86,
          "priceAvg30d": 17.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.0,
          "priceAvg30d": 18.49
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.86,
          "priceAvg30d": 18.88
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.86,
          "priceAvg30d": 18.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.86,
          "priceAvg30d": 18.93
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.86,
          "priceAvg30d": 19.34
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.86,
          "priceAvg30d": 19.46
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.0,
          "priceAvg30d": 17.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.58,
          "priceAvg30d": 17.9
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.03,
          "priceAvg30d": 20.14
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.95,
          "priceAvg30d": 22.02
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.6,
          "priceAvg30d": 22.62
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.01,
          "priceAvg30d": 23.24
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.79,
          "priceAvg30d": 22.95
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.34,
          "priceAvg30d": 24.63
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 16.72,
          "priceAvg30d": 25.78
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 16.72,
          "priceAvg30d": 28.92
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.72,
          "priceAvg30d": 29.17
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.76,
          "priceAvg30d": 30.05
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.76,
          "priceAvg30d": 30.45
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.11,
          "priceAvg30d": 29.59
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.11,
          "priceAvg30d": 28.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.76,
          "priceAvg30d": 26.36
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 15.9,
          "priceAvg30d": 24.93
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 14.63,
          "priceAvg30d": 23.13
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.76,
          "priceAvg30d": 21.47
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.27,
          "priceAvg30d": 20.35
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.8,
          "priceAvg30d": 18.86
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.63,
          "priceAvg30d": 16.98
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.72,
          "priceAvg30d": 16.92
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 15.16
        }
      ],
      "avg": 12.65,
      "max": 17.11,
      "maxBlock": 38,
      "min": 9.0,
      "minBlock": 25,
      "spread3h": 6.64,
      "spreadLowAvg": 10.02,
      "spreadHighAvg": 16.67,
      "avg30d": 19.71,
      "spread30dAvg": 14.84,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.72,
          "priceAvg30d": 15.16
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.6,
          "priceAvg30d": 15.54
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.21,
          "priceAvg30d": 14.98
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.21,
          "priceAvg30d": 14.73
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.21,
          "priceAvg30d": 14.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.37,
          "priceAvg30d": 15.09
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.6,
          "priceAvg30d": 14.9
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.6,
          "priceAvg30d": 14.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.6,
          "priceAvg30d": 14.95
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.6,
          "priceAvg30d": 15.5
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.8,
          "priceAvg30d": 15.93
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.8,
          "priceAvg30d": 15.88
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.79,
          "priceAvg30d": 15.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.6,
          "priceAvg30d": 14.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.03,
          "priceAvg30d": 14.17
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.03,
          "priceAvg30d": 14.05
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.86,
          "priceAvg30d": 14.73
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.86,
          "priceAvg30d": 16.02
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.0,
          "priceAvg30d": 15.68
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.86,
          "priceAvg30d": 14.8
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.86,
          "priceAvg30d": 14.86
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.86,
          "priceAvg30d": 14.75
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.86,
          "priceAvg30d": 14.61
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.86,
          "priceAvg30d": 14.47
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.0,
          "priceAvg30d": 12.79
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.58,
          "priceAvg30d": 12.95
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.03,
          "priceAvg30d": 14.63
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.95,
          "priceAvg30d": 16.09
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.6,
          "priceAvg30d": 16.41
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.01,
          "priceAvg30d": 17.47
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.79,
          "priceAvg30d": 19.59
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.34,
          "priceAvg30d": 23.13
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 16.72,
          "priceAvg30d": 25.68
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 16.72,
          "priceAvg30d": 28.88
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.72,
          "priceAvg30d": 29.17
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.76,
          "priceAvg30d": 30.05
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.76,
          "priceAvg30d": 30.45
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.11,
          "priceAvg30d": 29.59
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.11,
          "priceAvg30d": 28.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.76,
          "priceAvg30d": 26.36
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 15.9,
          "priceAvg30d": 24.93
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 14.63,
          "priceAvg30d": 23.13
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.76,
          "priceAvg30d": 21.47
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.27,
          "priceAvg30d": 20.35
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.8,
          "priceAvg30d": 18.86
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.63,
          "priceAvg30d": 16.98
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.72,
          "priceAvg30d": 16.92
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 15.16
        }
      ],
      "avg": 12.65,
      "max": 17.11,
      "maxBlock": 38,
      "min": 9.0,
      "minBlock": 25,
      "spread3h": 6.64,
      "spreadLowAvg": 10.02,
      "spreadHighAvg": 16.67,
      "avg30d": 18.33,
      "spread30dAvg": 15.87,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.72,
          "priceAvg30d": 15.16
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.6,
          "priceAvg30d": 15.54
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.21,
          "priceAvg30d": 14.98
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.21,
          "priceAvg30d": 14.73
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.21,
          "priceAvg30d": 14.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.37,
          "priceAvg30d": 15.09
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.6,
          "priceAvg30d": 14.9
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.6,
          "priceAvg30d": 14.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.6,
          "priceAvg30d": 14.95
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.6,
          "priceAvg30d": 15.5
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.8,
          "priceAvg30d": 15.93
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.8,
          "priceAvg30d": 15.88
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.79,
          "priceAvg30d": 15.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.6,
          "priceAvg30d": 14.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 7.92,
          "priceAvg30d": 14.1
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 2.9,
          "priceAvg30d": 13.76
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 0.02,
          "priceAvg30d": 14.36
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.9,
          "priceAvg30d": 15.29
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 15.12
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.04,
          "priceAvg30d": 13.74
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 13.34
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
          "priceAvg30d": 12.1
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 12.25
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 10.58
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 11.06
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 3.0,
          "priceAvg30d": 12.72
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 7.9,
          "priceAvg30d": 14.63
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.0,
          "priceAvg30d": 14.99
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.07,
          "priceAvg30d": 16.53
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.0,
          "priceAvg30d": 18.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.58,
          "priceAvg30d": 22.41
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.58,
          "priceAvg30d": 25.27
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 9.01,
          "priceAvg30d": 28.82
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 8.9,
          "priceAvg30d": 29.13
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 11.75,
          "priceAvg30d": 30.05
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 13.07,
          "priceAvg30d": 30.45
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 13.07,
          "priceAvg30d": 29.59
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 8.9,
          "priceAvg30d": 28.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.07,
          "priceAvg30d": 26.17
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 8.05,
          "priceAvg30d": 24.61
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.02,
          "priceAvg30d": 22.68
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 7.99,
          "priceAvg30d": 21.05
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.16,
          "priceAvg30d": 19.96
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.04,
          "priceAvg30d": 18.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 8.05,
          "priceAvg30d": 16.66
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 8.08,
          "priceAvg30d": 16.66
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.7,
          "priceAvg30d": 15.16
        }
      ],
      "avg": 7.67,
      "max": 16.72,
      "maxBlock": 1,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 8.31,
      "spreadLowAvg": 0.91,
      "spreadHighAvg": 9.23,
      "avg30d": 17.78,
      "spread30dAvg": 17.79,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.79,
          "priceAvg30d": 14.25
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.6,
          "priceAvg30d": 14.59
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.21,
          "priceAvg30d": 12.97
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.21,
          "priceAvg30d": 12.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.21,
          "priceAvg30d": 11.97
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.37,
          "priceAvg30d": 12.16
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.6,
          "priceAvg30d": 12.06
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.6,
          "priceAvg30d": 12.2
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.6,
          "priceAvg30d": 12.21
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
          "price": 12.79,
          "priceAvg30d": 14.3
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.79,
          "priceAvg30d": 14.71
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.79,
          "priceAvg30d": 14.6
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.6,
          "priceAvg30d": 12.25
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.03,
          "priceAvg30d": 11.37
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.03,
          "priceAvg30d": 11.6
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.86,
          "priceAvg30d": 12.96
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.86,
          "priceAvg30d": 13.73
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.0,
          "priceAvg30d": 13.6
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.86,
          "priceAvg30d": 13.13
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.86,
          "priceAvg30d": 12.52
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.86,
          "priceAvg30d": 12.36
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.86,
          "priceAvg30d": 12.32
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.86,
          "priceAvg30d": 12.18
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.0,
          "priceAvg30d": 11.48
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.58,
          "priceAvg30d": 11.62
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.03,
          "priceAvg30d": 12.84
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.95,
          "priceAvg30d": 14.36
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.6,
          "priceAvg30d": 15.09
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.95,
          "priceAvg30d": 16.48
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.79,
          "priceAvg30d": 19.08
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.34,
          "priceAvg30d": 22.61
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 16.72,
          "priceAvg30d": 25.48
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 16.72,
          "priceAvg30d": 28.88
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.72,
          "priceAvg30d": 29.17
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.76,
          "priceAvg30d": 30.05
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.76,
          "priceAvg30d": 30.45
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.11,
          "priceAvg30d": 29.59
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.11,
          "priceAvg30d": 28.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.76,
          "priceAvg30d": 26.36
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 15.9,
          "priceAvg30d": 24.93
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 14.63,
          "priceAvg30d": 23.13
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.76,
          "priceAvg30d": 21.46
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.27,
          "priceAvg30d": 20.35
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.8,
          "priceAvg30d": 18.71
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.63,
          "priceAvg30d": 16.63
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.72,
          "priceAvg30d": 16.24
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.95,
          "priceAvg30d": 13.38
        }
      ],
      "avg": 12.49,
      "max": 17.11,
      "maxBlock": 38,
      "min": 9.0,
      "minBlock": 25,
      "spread3h": 6.64,
      "spreadLowAvg": 10.02,
      "spreadHighAvg": 16.67,
      "avg30d": 17.0,
      "spread30dAvg": 17.72,
      "historyDays": 30
    }
  }
};
