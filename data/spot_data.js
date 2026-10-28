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
  "targetDate": "2026-10-28",
  "fetchedAt": "2026-10-28T12:03:20+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 25.97,
        "priceAvg30d": 22.77
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 25.82,
        "priceAvg30d": 21.55
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 25.05,
        "priceAvg30d": 21.07
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 24.86,
        "priceAvg30d": 20.91
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 25.0,
        "priceAvg30d": 20.96
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 25.81,
        "priceAvg30d": 21.42
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 26.04,
        "priceAvg30d": 22.01
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 26.64,
        "priceAvg30d": 22.59
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 26.78,
        "priceAvg30d": 23.18
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 27.6,
        "priceAvg30d": 23.75
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 27.98,
        "priceAvg30d": 24.23
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 28.21,
        "priceAvg30d": 24.29
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 28.91,
        "priceAvg30d": 24.02
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 28.22,
        "priceAvg30d": 22.13
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 26.64,
        "priceAvg30d": 19.24
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 21.18,
        "priceAvg30d": 17.34
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 13.45,
        "priceAvg30d": 16.84
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 12.87,
        "priceAvg30d": 16.61
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 10.81,
        "priceAvg30d": 15.66
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 9.98,
        "priceAvg30d": 14.82
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 10.4,
        "priceAvg30d": 14.0
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 9.81,
        "priceAvg30d": 13.45
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 9.6,
        "priceAvg30d": 13.17
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 9.2,
        "priceAvg30d": 13.06
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 3.01,
        "priceAvg30d": 10.75
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 6.0,
        "priceAvg30d": 11.35
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 10.15,
        "priceAvg30d": 14.47
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 12.87,
        "priceAvg30d": 17.2
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 12.75,
        "priceAvg30d": 18.15
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 23.0,
        "priceAvg30d": 21.47
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 25.3,
        "priceAvg30d": 23.06
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 28.78,
        "priceAvg30d": 27.3
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 31.91,
        "priceAvg30d": 30.66
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 35.48,
        "priceAvg30d": 33.04
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 35.01,
        "priceAvg30d": 32.41
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 35.0,
        "priceAvg30d": 32.53
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 32.5,
        "priceAvg30d": 31.1
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 32.0,
        "priceAvg30d": 30.26
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 30.84,
        "priceAvg30d": 29.02
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 30.1,
        "priceAvg30d": 27.06
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 30.06,
        "priceAvg30d": 26.32
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 29.97,
        "priceAvg30d": 25.39
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 29.73,
        "priceAvg30d": 24.84
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 29.12,
        "priceAvg30d": 24.92
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 29.78,
        "priceAvg30d": 25.29
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 28.88,
        "priceAvg30d": 24.58
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 28.13,
        "priceAvg30d": 24.49
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 26.88,
        "priceAvg30d": 23.09
      }
    ],
    "avg": 23.42,
    "max": 35.48,
    "maxBlock": 34,
    "min": 3.01,
    "minBlock": 25,
    "spread3h": 21.81,
    "spreadLowAvg": 9.6,
    "spreadHighAvg": 31.42,
    "avg30d": 22.04,
    "spread30dAvg": 18.67,
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
          "price": 14.76,
          "priceAvg30d": 19.15
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.1,
          "priceAvg30d": 16.09
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.51,
          "priceAvg30d": 16.88
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.5,
          "priceAvg30d": 17.86
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.7,
          "priceAvg30d": 18.35
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.76,
          "priceAvg30d": 20.08
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.4,
          "priceAvg30d": 21.06
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.63,
          "priceAvg30d": 22.37
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.67,
          "priceAvg30d": 22.62
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.53,
          "priceAvg30d": 22.61
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.11,
          "priceAvg30d": 25.09
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.12,
          "priceAvg30d": 25.69
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.53,
          "priceAvg30d": 22.11
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 18.66,
          "priceAvg30d": 19.2
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.7,
          "priceAvg30d": 15.96
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.71,
          "priceAvg30d": 13.43
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.9,
          "priceAvg30d": 12.12
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.78,
          "priceAvg30d": 10.3
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.5,
          "priceAvg30d": 9.31
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.71,
          "priceAvg30d": 8.08
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.71,
          "priceAvg30d": 7.5
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 7.3,
          "priceAvg30d": 6.9
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.71,
          "priceAvg30d": 7.07
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.71,
          "priceAvg30d": 7.31
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.0,
          "priceAvg30d": 6.17
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.71,
          "priceAvg30d": 5.85
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.71,
          "priceAvg30d": 7.5
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.0,
          "priceAvg30d": 9.77
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.71,
          "priceAvg30d": 12.83
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.7,
          "priceAvg30d": 16.23
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.69,
          "priceAvg30d": 19.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 27.25,
          "priceAvg30d": 24.7
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.72,
          "priceAvg30d": 31.6
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.55,
          "priceAvg30d": 34.56
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.76,
          "priceAvg30d": 32.22
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.62,
          "priceAvg30d": 32.41
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.0,
          "priceAvg30d": 29.98
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 30.49
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.72,
          "priceAvg30d": 30.45
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.19,
          "priceAvg30d": 29.49
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.0,
          "priceAvg30d": 28.26
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.21,
          "priceAvg30d": 26.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.37,
          "priceAvg30d": 25.3
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.57,
          "priceAvg30d": 24.44
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.26,
          "priceAvg30d": 24.99
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.11,
          "priceAvg30d": 23.19
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.41,
          "priceAvg30d": 23.13
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.53,
          "priceAvg30d": 20.97
        }
      ],
      "avg": 18.43,
      "max": 38.3,
      "maxBlock": 38,
      "min": 7.3,
      "minBlock": 22,
      "spread3h": 16.66,
      "spreadLowAvg": 9.56,
      "spreadHighAvg": 26.21,
      "avg30d": 19.52,
      "spread30dAvg": 23.61,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.76,
          "priceAvg30d": 25.83
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.1,
          "priceAvg30d": 25.22
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.51,
          "priceAvg30d": 25.41
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.5,
          "priceAvg30d": 25.16
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.7,
          "priceAvg30d": 25.22
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.76,
          "priceAvg30d": 25.21
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.4,
          "priceAvg30d": 25.63
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.63,
          "priceAvg30d": 25.73
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.5,
          "priceAvg30d": 25.98
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.72,
          "priceAvg30d": 26.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.0,
          "priceAvg30d": 26.35
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.06,
          "priceAvg30d": 26.7
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.9,
          "priceAvg30d": 26.18
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.47,
          "priceAvg30d": 24.31
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.7,
          "priceAvg30d": 21.2
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.61,
          "priceAvg30d": 18.13
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.9,
          "priceAvg30d": 16.09
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.78,
          "priceAvg30d": 14.54
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.0,
          "priceAvg30d": 13.56
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.61,
          "priceAvg30d": 12.36
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.6,
          "priceAvg30d": 11.19
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 7.3,
          "priceAvg30d": 10.75
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 6.0,
          "priceAvg30d": 10.57
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.0,
          "priceAvg30d": 10.58
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.0,
          "priceAvg30d": 9.82
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 6.6,
          "priceAvg30d": 10.26
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 7.3,
          "priceAvg30d": 12.91
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 4.37,
          "priceAvg30d": 15.08
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.61,
          "priceAvg30d": 17.8
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.7,
          "priceAvg30d": 21.59
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.69,
          "priceAvg30d": 24.55
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 27.25,
          "priceAvg30d": 30.3
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 34.09,
          "priceAvg30d": 34.28
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.55,
          "priceAvg30d": 36.66
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.33,
          "priceAvg30d": 36.01
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.33,
          "priceAvg30d": 36.21
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 34.35
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 33.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.99,
          "priceAvg30d": 32.23
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.0,
          "priceAvg30d": 30.29
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.37,
          "priceAvg30d": 29.02
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.76,
          "priceAvg30d": 27.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.29,
          "priceAvg30d": 27.13
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.57,
          "priceAvg30d": 28.07
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.5,
          "priceAvg30d": 28.79
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.11,
          "priceAvg30d": 27.67
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.96,
          "priceAvg30d": 26.79
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.53,
          "priceAvg30d": 24.93
        }
      ],
      "avg": 20.67,
      "max": 38.37,
      "maxBlock": 37,
      "min": 4.37,
      "minBlock": 28,
      "spread3h": 27.93,
      "spreadLowAvg": 9.15,
      "spreadHighAvg": 37.08,
      "avg30d": 23.63,
      "spread30dAvg": 21.89,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.06,
          "priceAvg30d": 25.94
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.06,
          "priceAvg30d": 25.28
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.02,
          "priceAvg30d": 25.41
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.9,
          "priceAvg30d": 25.16
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.65,
          "priceAvg30d": 25.22
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.65,
          "priceAvg30d": 25.21
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.82,
          "priceAvg30d": 25.63
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.92,
          "priceAvg30d": 25.73
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.98,
          "priceAvg30d": 25.98
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.93,
          "priceAvg30d": 26.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.06,
          "priceAvg30d": 26.35
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.06,
          "priceAvg30d": 26.7
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.06,
          "priceAvg30d": 26.38
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.06,
          "priceAvg30d": 25.21
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.06,
          "priceAvg30d": 24.63
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 28.46,
          "priceAvg30d": 24.08
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.11,
          "priceAvg30d": 22.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.09,
          "priceAvg30d": 23.13
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.0,
          "priceAvg30d": 22.5
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.98,
          "priceAvg30d": 21.7
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.56,
          "priceAvg30d": 20.13
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 25.31,
          "priceAvg30d": 19.74
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.04,
          "priceAvg30d": 20.01
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.86,
          "priceAvg30d": 20.22
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 24.87,
          "priceAvg30d": 18.87
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 25.04,
          "priceAvg30d": 19.86
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 26.64,
          "priceAvg30d": 21.56
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.19,
          "priceAvg30d": 24.73
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.19,
          "priceAvg30d": 26.32
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.66,
          "priceAvg30d": 28.43
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.66,
          "priceAvg30d": 28.28
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 36.0,
          "priceAvg30d": 31.87
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.37,
          "priceAvg30d": 34.78
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.37,
          "priceAvg30d": 36.79
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.37,
          "priceAvg30d": 36.01
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.37,
          "priceAvg30d": 36.21
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 34.35
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 33.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.99,
          "priceAvg30d": 32.23
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.5,
          "priceAvg30d": 30.29
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.37,
          "priceAvg30d": 29.02
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.76,
          "priceAvg30d": 27.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.29,
          "priceAvg30d": 27.13
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.57,
          "priceAvg30d": 28.07
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.5,
          "priceAvg30d": 29.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.51,
          "priceAvg30d": 27.92
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.26,
          "priceAvg30d": 27.38
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.06,
          "priceAvg30d": 25.86
        }
      ],
      "avg": 30.5,
      "max": 38.37,
      "maxBlock": 33,
      "min": 24.86,
      "minBlock": 24,
      "spread3h": 9.66,
      "spreadLowAvg": 25.41,
      "spreadHighAvg": 35.07,
      "avg30d": 26.58,
      "spread30dAvg": 15.12,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.43,
          "priceAvg30d": 25.15
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.52,
          "priceAvg30d": 24.37
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.36,
          "priceAvg30d": 24.11
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.09,
          "priceAvg30d": 23.96
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.93,
          "priceAvg30d": 24.07
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.5,
          "priceAvg30d": 24.44
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.82,
          "priceAvg30d": 24.94
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.92,
          "priceAvg30d": 25.24
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.98,
          "priceAvg30d": 25.44
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.93,
          "priceAvg30d": 25.67
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.06,
          "priceAvg30d": 25.88
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.06,
          "priceAvg30d": 26.11
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.06,
          "priceAvg30d": 25.77
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.06,
          "priceAvg30d": 24.47
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.98,
          "priceAvg30d": 23.08
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.58,
          "priceAvg30d": 21.51
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 24.51,
          "priceAvg30d": 20.35
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.51,
          "priceAvg30d": 21.03
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.94,
          "priceAvg30d": 21.07
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.0,
          "priceAvg30d": 20.25
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 14.0,
          "priceAvg30d": 18.66
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.13,
          "priceAvg30d": 18.41
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.87,
          "priceAvg30d": 18.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.7,
          "priceAvg30d": 18.09
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.0,
          "priceAvg30d": 15.28
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.91,
          "priceAvg30d": 16.04
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.72,
          "priceAvg30d": 19.59
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.0,
          "priceAvg30d": 23.08
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.99,
          "priceAvg30d": 24.37
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.38,
          "priceAvg30d": 26.12
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.66,
          "priceAvg30d": 27.31
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 36.0,
          "priceAvg30d": 31.19
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.37,
          "priceAvg30d": 33.88
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.37,
          "priceAvg30d": 35.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.37,
          "priceAvg30d": 34.67
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.37,
          "priceAvg30d": 34.78
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 33.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 32.67
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.99,
          "priceAvg30d": 31.55
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.5,
          "priceAvg30d": 29.57
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.37,
          "priceAvg30d": 28.34
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.76,
          "priceAvg30d": 27.26
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.29,
          "priceAvg30d": 26.75
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.57,
          "priceAvg30d": 26.9
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.5,
          "priceAvg30d": 27.85
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.51,
          "priceAvg30d": 27.21
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.26,
          "priceAvg30d": 27.14
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.06,
          "priceAvg30d": 25.85
        }
      ],
      "avg": 27.84,
      "max": 38.37,
      "maxBlock": 33,
      "min": 10.0,
      "minBlock": 25,
      "spread3h": 20.64,
      "spreadLowAvg": 13.89,
      "spreadHighAvg": 34.52,
      "avg30d": 25.34,
      "spread30dAvg": 17.41,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.66,
          "priceAvg30d": 14.3
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.42,
          "priceAvg30d": 14.16
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.74,
          "priceAvg30d": 13.87
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.73,
          "priceAvg30d": 13.28
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.73,
          "priceAvg30d": 14.14
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.76,
          "priceAvg30d": 15.26
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 17.48,
          "priceAvg30d": 16.07
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.4,
          "priceAvg30d": 17.43
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.51,
          "priceAvg30d": 17.37
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.09,
          "priceAvg30d": 18.82
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.09,
          "priceAvg30d": 18.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.61,
          "priceAvg30d": 18.23
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.94,
          "priceAvg30d": 18.11
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.52,
          "priceAvg30d": 16.4
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.52,
          "priceAvg30d": 14.67
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.94,
          "priceAvg30d": 13.63
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 24.51,
          "priceAvg30d": 15.73
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.51,
          "priceAvg30d": 17.23
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.94,
          "priceAvg30d": 18.95
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.0,
          "priceAvg30d": 18.38
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 14.0,
          "priceAvg30d": 17.19
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.13,
          "priceAvg30d": 16.88
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.87,
          "priceAvg30d": 17.03
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.7,
          "priceAvg30d": 17.16
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.0,
          "priceAvg30d": 13.1
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.91,
          "priceAvg30d": 13.31
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.72,
          "priceAvg30d": 16.85
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.0,
          "priceAvg30d": 20.31
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.99,
          "priceAvg30d": 20.23
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.38,
          "priceAvg30d": 21.87
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.66,
          "priceAvg30d": 22.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 36.0,
          "priceAvg30d": 25.85
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.37,
          "priceAvg30d": 26.65
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.37,
          "priceAvg30d": 28.6
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.37,
          "priceAvg30d": 27.0
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.37,
          "priceAvg30d": 27.34
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 26.06
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 26.3
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.99,
          "priceAvg30d": 25.3
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.5,
          "priceAvg30d": 23.18
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.37,
          "priceAvg30d": 23.22
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.76,
          "priceAvg30d": 22.02
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.29,
          "priceAvg30d": 21.66
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.57,
          "priceAvg30d": 20.74
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.51,
          "priceAvg30d": 20.15
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.52,
          "priceAvg30d": 18.13
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.0,
          "priceAvg30d": 18.15
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 20.64,
          "priceAvg30d": 14.5
        }
      ],
      "avg": 23.37,
      "max": 38.37,
      "maxBlock": 33,
      "min": 10.0,
      "minBlock": 25,
      "spread3h": 20.64,
      "spreadLowAvg": 13.89,
      "spreadHighAvg": 34.52,
      "avg30d": 19.08,
      "spread30dAvg": 14.56,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.66,
          "priceAvg30d": 14.05
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.42,
          "priceAvg30d": 14.05
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.74,
          "priceAvg30d": 13.78
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.73,
          "priceAvg30d": 13.18
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.73,
          "priceAvg30d": 13.57
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.76,
          "priceAvg30d": 14.89
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 17.48,
          "priceAvg30d": 15.72
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.4,
          "priceAvg30d": 16.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.51,
          "priceAvg30d": 16.9
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.09,
          "priceAvg30d": 18.18
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.09,
          "priceAvg30d": 17.93
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.61,
          "priceAvg30d": 17.77
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.94,
          "priceAvg30d": 18.04
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.52,
          "priceAvg30d": 16.32
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.52,
          "priceAvg30d": 14.22
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.94,
          "priceAvg30d": 13.03
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 24.51,
          "priceAvg30d": 15.54
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.51,
          "priceAvg30d": 17.01
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.94,
          "priceAvg30d": 18.63
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.0,
          "priceAvg30d": 18.04
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 14.0,
          "priceAvg30d": 16.83
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.13,
          "priceAvg30d": 16.51
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.87,
          "priceAvg30d": 16.71
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.7,
          "priceAvg30d": 16.84
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.0,
          "priceAvg30d": 12.75
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.91,
          "priceAvg30d": 12.99
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.72,
          "priceAvg30d": 16.59
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.0,
          "priceAvg30d": 20.31
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.99,
          "priceAvg30d": 19.81
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.38,
          "priceAvg30d": 21.7
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.66,
          "priceAvg30d": 22.55
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 36.0,
          "priceAvg30d": 25.8
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.37,
          "priceAvg30d": 26.65
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.37,
          "priceAvg30d": 28.6
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.37,
          "priceAvg30d": 27.0
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.37,
          "priceAvg30d": 27.0
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 26.06
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 25.85
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.99,
          "priceAvg30d": 24.96
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.5,
          "priceAvg30d": 23.0
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.37,
          "priceAvg30d": 23.04
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.76,
          "priceAvg30d": 21.86
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.29,
          "priceAvg30d": 21.5
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.57,
          "priceAvg30d": 20.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.51,
          "priceAvg30d": 19.91
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.52,
          "priceAvg30d": 17.89
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.0,
          "priceAvg30d": 17.98
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 20.64,
          "priceAvg30d": 14.37
        }
      ],
      "avg": 23.37,
      "max": 38.37,
      "maxBlock": 33,
      "min": 10.0,
      "minBlock": 25,
      "spread3h": 20.64,
      "spreadLowAvg": 13.89,
      "spreadHighAvg": 34.52,
      "avg30d": 18.82,
      "spread30dAvg": 14.45,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.66,
          "priceAvg30d": 13.47
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.42,
          "priceAvg30d": 14.05
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.74,
          "priceAvg30d": 13.36
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.73,
          "priceAvg30d": 12.76
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.73,
          "priceAvg30d": 12.66
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.76,
          "priceAvg30d": 13.69
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 17.48,
          "priceAvg30d": 14.46
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.4,
          "priceAvg30d": 16.15
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.51,
          "priceAvg30d": 16.71
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.09,
          "priceAvg30d": 17.96
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.09,
          "priceAvg30d": 17.93
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.61,
          "priceAvg30d": 17.73
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.94,
          "priceAvg30d": 18.04
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.52,
          "priceAvg30d": 16.16
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.0,
          "priceAvg30d": 11.98
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.4,
          "priceAvg30d": 10.41
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.15,
          "priceAvg30d": 10.81
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.98,
          "priceAvg30d": 11.25
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.81,
          "priceAvg30d": 10.22
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.38,
          "priceAvg30d": 9.51
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.9,
          "priceAvg30d": 9.2
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.5,
          "priceAvg30d": 8.49
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.1,
          "priceAvg30d": 8.43
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.0,
          "priceAvg30d": 8.62
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.81
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 8.77
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 10.06
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.32,
          "priceAvg30d": 11.65
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 12.99
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.98,
          "priceAvg30d": 13.6
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.19,
          "priceAvg30d": 16.6
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.68,
          "priceAvg30d": 20.03
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.0,
          "priceAvg30d": 24.2
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.99,
          "priceAvg30d": 24.39
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.9,
          "priceAvg30d": 25.17
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.9,
          "priceAvg30d": 23.85
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.7,
          "priceAvg30d": 23.41
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.99,
          "priceAvg30d": 23.21
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.39,
          "priceAvg30d": 21.93
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.52,
          "priceAvg30d": 21.95
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.52,
          "priceAvg30d": 20.97
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.52,
          "priceAvg30d": 20.58
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.69,
          "priceAvg30d": 19.54
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.18,
          "priceAvg30d": 19.13
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.54,
          "priceAvg30d": 17.03
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.54,
          "priceAvg30d": 17.15
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 20.64,
          "priceAvg30d": 13.41
        }
      ],
      "avg": 15.45,
      "max": 29.99,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 20.88,
      "spreadLowAvg": 1.35,
      "spreadHighAvg": 22.23,
      "avg30d": 15.36,
      "spread30dAvg": 15.51,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.29,
          "priceAvg30d": 10.92
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.55,
          "priceAvg30d": 10.9
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.22,
          "priceAvg30d": 10.52
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.2,
          "priceAvg30d": 10.12
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.38,
          "priceAvg30d": 10.04
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.9,
          "priceAvg30d": 10.08
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 8.5,
          "priceAvg30d": 10.1
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.9,
          "priceAvg30d": 11.35
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.07,
          "priceAvg30d": 11.68
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.09,
          "priceAvg30d": 12.79
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.09,
          "priceAvg30d": 13.06
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.61,
          "priceAvg30d": 12.98
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.94,
          "priceAvg30d": 12.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.52,
          "priceAvg30d": 10.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.07,
          "priceAvg30d": 8.47
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.5,
          "priceAvg30d": 8.29
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.15,
          "priceAvg30d": 8.66
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.98,
          "priceAvg30d": 8.94
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.81,
          "priceAvg30d": 7.88
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.38,
          "priceAvg30d": 7.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.9,
          "priceAvg30d": 6.89
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.5,
          "priceAvg30d": 6.01
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.1,
          "priceAvg30d": 5.83
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.0,
          "priceAvg30d": 6.07
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.36
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.52
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 7.44
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 8.03
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.32,
          "priceAvg30d": 9.48
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 10.44
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.98,
          "priceAvg30d": 10.41
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.19,
          "priceAvg30d": 10.91
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.68,
          "priceAvg30d": 11.46
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.0,
          "priceAvg30d": 15.26
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.99,
          "priceAvg30d": 16.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.9,
          "priceAvg30d": 17.05
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.9,
          "priceAvg30d": 16.61
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.7,
          "priceAvg30d": 16.14
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.99,
          "priceAvg30d": 14.99
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.39,
          "priceAvg30d": 13.93
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.52,
          "priceAvg30d": 14.42
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.52,
          "priceAvg30d": 13.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.52,
          "priceAvg30d": 13.95
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.69,
          "priceAvg30d": 12.88
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.18,
          "priceAvg30d": 12.39
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.0,
          "priceAvg30d": 11.61
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.5,
          "priceAvg30d": 12.14
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.5,
          "priceAvg30d": 9.93
        }
      ],
      "avg": 14.47,
      "max": 29.99,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 20.88,
      "spreadLowAvg": 1.35,
      "spreadHighAvg": 22.23,
      "avg30d": 10.88,
      "spread30dAvg": 12.3,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.66,
          "priceAvg30d": 13.47
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.42,
          "priceAvg30d": 13.84
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.74,
          "priceAvg30d": 13.03
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.73,
          "priceAvg30d": 12.53
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.73,
          "priceAvg30d": 12.39
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.76,
          "priceAvg30d": 13.47
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 17.48,
          "priceAvg30d": 14.46
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.4,
          "priceAvg30d": 16.15
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.51,
          "priceAvg30d": 16.71
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.09,
          "priceAvg30d": 17.96
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.09,
          "priceAvg30d": 17.93
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.61,
          "priceAvg30d": 17.73
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.94,
          "priceAvg30d": 18.04
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.52,
          "priceAvg30d": 16.16
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.0,
          "priceAvg30d": 11.98
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.4,
          "priceAvg30d": 10.41
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.15,
          "priceAvg30d": 10.25
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.98,
          "priceAvg30d": 9.74
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.81,
          "priceAvg30d": 8.64
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.38,
          "priceAvg30d": 7.63
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.9,
          "priceAvg30d": 7.37
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.5,
          "priceAvg30d": 6.93
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.65
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.04,
          "priceAvg30d": 6.41
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.85
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.88
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 6.87
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 8.44
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.32,
          "priceAvg30d": 9.72
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 11.81
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.98,
          "priceAvg30d": 13.16
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.19,
          "priceAvg30d": 16.01
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.68,
          "priceAvg30d": 20.03
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.0,
          "priceAvg30d": 24.2
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.99,
          "priceAvg30d": 24.39
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.9,
          "priceAvg30d": 25.17
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.9,
          "priceAvg30d": 23.85
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.7,
          "priceAvg30d": 23.41
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.99,
          "priceAvg30d": 23.21
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.39,
          "priceAvg30d": 21.93
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.52,
          "priceAvg30d": 21.95
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.52,
          "priceAvg30d": 20.97
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.52,
          "priceAvg30d": 20.58
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.69,
          "priceAvg30d": 19.54
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.18,
          "priceAvg30d": 19.13
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.54,
          "priceAvg30d": 17.03
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.54,
          "priceAvg30d": 17.15
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 20.64,
          "priceAvg30d": 13.41
        }
      ],
      "avg": 15.4,
      "max": 29.99,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 23,
      "spread3h": 19.92,
      "spreadLowAvg": 2.31,
      "spreadHighAvg": 22.23,
      "avg30d": 14.87,
      "spread30dAvg": 16.25,
      "historyDays": 30
    }
  }
};
