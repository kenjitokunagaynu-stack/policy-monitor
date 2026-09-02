// 政策関連情報（試験運用）
// 4つの情報源を横断し、日付順のタブ切り替え一覧として表示します。
// 収集方法: 各情報源の公式サイトを直接調査（WebFetchが403となるMETI系サイトはBrowserツール経由）。
// 電力・ガス取引監視等委員会は、本委員会（週次開催・電力ガス行政全般）ではなく、
// 系統用蓄電池事業に直結するテーマ（需給調整市場・容量市場・インバランス制度等）を扱う
// 下部組織「制度設計・監視専門会合」を対象としています。
// OCCTOは委員会数が多いため、容量市場・調整力・需給調整市場など蓄電池事業に特に関連する
// 委員会・検討会に絞って収録しています（運用容量検討会等の技術専門会合は一部割愛）。
window.APP_DATA = {
  "generatedAt": "2026-09-02T09:17:00+09:00",
  "periodLabel": "2026年3月〜2026年9月（直近6ヶ月、試験収集）",
  "sources": [
    { "id": "wg", "label": "エネ庁 系統WG", "org": "経済産業省 資源エネルギー庁", "indexUrl": "https://www.meti.go.jp/shingikai/enecho/denryoku_gas/saisei_kano/smart_power_grid_wg/index.html" },
    { "id": "seido", "label": "エネ庁 制度検討作業部会", "org": "経済産業省 資源エネルギー庁", "indexUrl": "https://www.meti.go.jp/shingikai/enecho/denryoku_gas/jisedai_kiban/system_review/index.html" },
    { "id": "occto", "label": "OCCTO", "org": "電力広域的運営推進機関", "indexUrl": "https://www.occto.or.jp/iinkai/" },
    { "id": "emsc", "label": "監視等委", "org": "電力・ガス取引監視等委員会（制度設計・監視専門会合）", "indexUrl": "https://www.egc.meti.go.jp/activity/index_systemsurveillance.html" }
  ],
  "items": [
    {
      "id": "wg012", "date": "2026-08-06", "source": "wg",
      "title": "第12回 次世代電力系統ワーキンググループ",
      "subtitle": "系統アクセス手続きの規律強化と、順潮流側ノンファーム型接続の暫定対策を議論",
      "sourceName": "経済産業省 資源エネルギー庁",
      "sourceUrl": "https://www.meti.go.jp/shingikai/enecho/denryoku_gas/saisei_kano/smart_power_grid_wg/012.html",
      "topics": [
        {
          "theme": "系統アクセス手続きにおける規律強化",
          "conclusion": "接続検討・契約申込みの急増を受け、接続検討料の見直しや低圧蓄電池向け対策など、追加の入り口対策の検討を開始する方針。",
          "detail": "系統用蓄電池の接続検討申込みは2022年度の約600件から2025年度には約2.5万件へ、契約申込みも40件から約3,900件へ急増。2026年3月末時点で契約申込み済み案件は全国で約35GWに積み上がっている。"
        },
        {
          "theme": "系統用蓄電池の接続ルール見直し（順潮流側ノンファーム型接続）",
          "conclusion": "計画値制御によるノンファーム型接続の本格導入（5〜7年後）までの間、現行の早期連系追加対策（充電制限）を柔軟化する暫定対策の検討を進める。",
          "detail": "現行の早期連系追加対策は充電制限時間が月次・四半期単位に限られ柔軟性が低いことが課題。導入から約1年で適用蓄電池は全体の約3%（容量ベース）にとどまる。"
        }
      ]
    },
    {
      "id": "occto_20260901_capacity", "date": "2026-09-01", "source": "occto",
      "title": "第76回 容量市場の在り方等に関する検討会",
      "subtitle": "容量市場追加オークションの約定結果と、2025年度包括的検証後の検討課題を報告",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "追加オークション約定結果と今後の検討課題", "conclusion": "容量市場の追加オークション約定結果が報告され、2025年度包括的検証後の電源等区分・需給ひっ迫時のリクワイアメント/ペナルティに関する検討の方向性が示された。", "detail": "長期脱炭素電源オークション募集要綱に関する意見募集の結果もあわせて報告。" }
      ]
    },
    {
      "id": "occto_20260901_grid", "date": "2026-09-01", "source": "occto",
      "title": "第103回 広域系統整備委員会",
      "subtitle": "高経年化設備更新ガイドラインの試行開始と、広域系統整備計画の進捗状況を報告",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "広域系統整備計画の進捗と費用便益評価手法", "conclusion": "高経年化設備更新ガイドラインの試行開始と、広域系統整備計画の費用便益評価手法（プロジェクトファイナンス関連費用の扱い）が審議された。", "detail": "2031年度の系統混雑に関する中長期見通しと、2026年度第1四半期の進捗状況もあわせて報告された。" }
      ]
    },
    {
      "id": "wg011", "date": "2026-06-10", "source": "wg",
      "title": "第11回 次世代電力系統ワーキンググループ",
      "subtitle": "大規模需要の空押さえ対応策と、接続検討数の上限設定・使用権原の要件化を整理",
      "sourceName": "経済産業省 資源エネルギー庁",
      "sourceUrl": "https://www.meti.go.jp/shingikai/enecho/denryoku_gas/saisei_kano/smart_power_grid_wg/011.html",
      "topics": [
        {
          "theme": "大規模需要の空押さえ対応策（容量開放・費用精算）",
          "conclusion": "最終契約電力30MW以上の大規模需要家を対象に、契約電力を計画通り設定しない場合の「容量開放」「費用精算」の仕組みを2027年度初頭から適用する方針。",
          "detail": "需要側の空押さえ是正は系統混雑の緩和を通じ、発電側である系統用蓄電池の連系環境にも間接的に影響し得る。"
        },
        {
          "theme": "接続検討数の上限設定と契約申込みにおける規律強化",
          "conclusion": "2026年8月1日付でエリアごとの接続検討数上限が運用開始（東京11件、関西12件等）。事業用地の使用権原提出の要件化は10月1日開始。",
          "detail": "既に事業を実施している土地での増強・改修等は例外として提出不要とする措置も設けられた。"
        }
      ]
    },
    {
      "id": "occto_20260821_chosei", "date": "2026-08-21", "source": "occto",
      "title": "第121回 調整力及び需給バランス評価等に関する委員会",
      "subtitle": "中長期の需給見通しを踏まえた供給力確保策と、イベリア半島停電を踏まえた対応を議論",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "供給力確保策と需給見通し", "conclusion": "中長期の需給見通しを踏まえた供給力確保策と、2027年度の需給見通しが議論・報告された。", "detail": "イベリア半島の大規模停電事例を踏まえた日本の電力系統での対応も報告事項として扱われた。" }
      ]
    },
    {
      "id": "occto_20260821_keikaku", "date": "2026-08-21", "source": "occto",
      "title": "第15回 計画評価及び検証小委員会",
      "subtitle": "北海道本州間連系設備（日本海ルート）の予備評価開始等、広域連系設備の整備計画を検証",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "広域連系設備の整備計画評価", "conclusion": "北海道本州間連系設備（日本海ルート）の予備評価開始や、佐久間東幹線・中部関西間/東北東京間連系線の工事内容・工期・費用の検証が行われた。", "detail": "機微な内容を含むため非公開で開催。広域連系設備の整備進捗は系統混雑の緩和や連系可能容量に関わる。" }
      ]
    },
    {
      "id": "emsc023", "date": "2026-08-28", "source": "emsc",
      "title": "第23回 制度設計・監視専門会合",
      "subtitle": "需給調整市場の運用状況を定例報告、ブラックスタート機能の公募調達結果も確認",
      "sourceName": "電力・ガス取引監視等委員会",
      "sourceUrl": "https://www.egc.meti.go.jp/activity/emsc_systemsurveillance/023_haifu.html",
      "topics": [
        { "theme": "需給調整市場の運用状況とブラックスタート機能調達結果", "conclusion": "需給調整市場の運用状況が定例報告されたほか、2030年度向けブラックスタート機能公募調達結果の事後確認、需給調整市場向けの連系線確保量について議論された。", "detail": "ブラックスタート機能は蓄電池が担い得る調整力メニューの一つとして注目される。" }
      ]
    },
    {
      "id": "seido114", "date": "2026-05-08", "source": "seido",
      "title": "第114回 制度検討作業部会（書面審議）",
      "subtitle": "第二十五次中間とりまとめ（案）に対する委員意見と、それに対する考え方を確認",
      "sourceName": "経済産業省 資源エネルギー庁",
      "sourceUrl": "https://www.meti.go.jp/shingikai/enecho/denryoku_gas/jisedai_kiban/system_review/114.html",
      "topics": [
        { "theme": "第二十五次中間とりまとめ（案）に対する書面審議", "conclusion": "対面開催ではなく書面審議として実施。中間とりまとめ案に対する各委員の意見と、それに対する事務局の考え方が示された。", "detail": "直前の第113回（4月3日）で扱われた容量市場のNet CONE見直しや短期供給力確保策などの議論が反映されているとみられる。" }
      ]
    },
    {
      "id": "occto_20260731_jukyu", "date": "2026-07-31", "source": "occto",
      "title": "第62回 需給調整市場検討小委員会（第79回 調整力の細分化及び広域調達の技術的検討に関する作業会と合同開催）",
      "subtitle": "需給調整市場の実態調査結果を踏まえ、商品要件・一次調整力の見直しを検討",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "需給調整市場の商品要件見直し", "conclusion": "需給調整市場の実態調査結果を踏まえ、一部商品要件および一次調整力（異常時分必要量）の見直しが検討された。", "detail": "調整力市場の商品要件見直しは、系統用蓄電池の応札戦略・収益機会に直接関わる論点。" }
      ]
    },
    {
      "id": "occto_20260728_keikaku", "date": "2026-07-28", "source": "occto",
      "title": "第14回 計画評価及び検証小委員会",
      "subtitle": "中部関西間・東北東京間連系線の工事費増額の中間検証や、佐久間東幹線の工期遅延を審議",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "広域連系設備の整備計画評価", "conclusion": "「中部関西間連系線」「東北東京間連系線」に係る広域系統整備計画の工事内容（工事費・工期）や工事費増額の中間検証、「東京中部間連系設備」佐久間東幹線（山線）増強工事の工期遅延について審議された。", "detail": "機微な内容を含むため非公開で開催。広域連系設備の整備進捗（工期遅延・費用増）は系統混雑の緩和時期や連系可能容量の見通しに関わる。" }
      ]
    },
    {
      "id": "occto_75th_capacity", "date": "2026-07-23", "source": "occto",
      "title": "第75回 容量市場の在り方等に関する検討会",
      "subtitle": "2026年度メインオークション募集要綱に関する意見募集の結果を報告",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "2026年度メインオークション募集要綱の意見募集結果", "conclusion": "2026年度容量市場メインオークションの募集要綱に関する意見募集の結果が報告された。", "detail": "詳細な意見内容・対応方針は情報元資料を参照。" }
      ]
    },
    {
      "id": "emsc022", "date": "2026-07-31", "source": "emsc",
      "title": "第22回 制度設計・監視専門会合",
      "subtitle": "需給調整市場の運用状況を報告、発電側課金に関する事業者アンケート結果も議論",
      "sourceName": "電力・ガス取引監視等委員会",
      "sourceUrl": "https://www.egc.meti.go.jp/activity/emsc_systemsurveillance/022_haifu.html",
      "topics": [
        { "theme": "需給調整市場の運用状況と発電側課金アンケート", "conclusion": "需給調整市場の運用状況が報告され、発電側課金に関する事業者アンケート結果も取り上げられた。", "detail": "2025年度揚水随意契約の事後確認結果もあわせて報告。発電側課金は系統用蓄電池の充電時の扱いにも関係する。" }
      ]
    },
    {
      "id": "occto_74th_capacity", "date": "2026-06-30", "source": "occto",
      "title": "第74回 容量市場の在り方等に関する検討会",
      "subtitle": "2026年度メインオークション募集要綱案・需要曲線案の意見募集を開始",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "2026年度メインオークションの募集要綱案・需要曲線案", "conclusion": "2026年度メインオークションの募集要綱案と需要曲線の原案、および長期脱炭素電源オークション募集要綱案について意見募集が開始された。", "detail": "需要曲線の水準は約定価格に直結するため、蓄電池事業者の収益見通しに影響する重要な論点。" }
      ]
    },
    {
      "id": "occto_120th_chosei", "date": "2026-06-22", "source": "occto",
      "title": "第120回 調整力及び需給バランス評価等に関する委員会",
      "subtitle": "2027年度向け調整力公募の必要量算定と、2035年度までの中長期確保状況を確認",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "2027年度向け調整力公募の必要量算定", "conclusion": "2027年度向け調整力（需給調整市場）公募にかかる必要量の考え方（案）が示され、2035年度までの中長期の調整力確保状況が報告された。", "detail": "地内系統混雑を考慮した供給信頼度評価の課題整理も行われた。必要量水準は蓄電池の需給調整市場での需要見通しに直結する。" }
      ]
    },
    {
      "id": "emsc021", "date": "2026-06-19", "source": "emsc",
      "title": "第21回 制度設計・監視専門会合",
      "subtitle": "スポット市場価格高騰への対応を議論、需給調整市場の運用状況も定例報告",
      "sourceName": "電力・ガス取引監視等委員会",
      "sourceUrl": "https://www.egc.meti.go.jp/activity/emsc_systemsurveillance/021_haifu.html",
      "topics": [
        { "theme": "スポット市場価格高騰への対応と需給調整市場の運用状況", "conclusion": "スポット市場価格高騰について議論されたほか、需給調整市場の運用状況が定例報告された。", "detail": "価格高騰時の市場動向は、系統用蓄電池の裁定取引による収益機会にも直結する話題。" }
      ]
    },
    {
      "id": "occto_61st_jukyu", "date": "2026-06-09", "source": "occto",
      "title": "第61回 需給調整市場検討小委員会（第78回 調整力の細分化及び広域調達の技術的検討に関する作業会と合同開催）",
      "subtitle": "調整力指令と出力制御指令が重複した場合の取り扱いを検討",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "調整力指令と出力制御指令が重複した場合の取り扱い", "conclusion": "需給調整市場の取引状況等が報告されたほか、調整力指令と出力制御指令が重複した場合の取り扱いについて検討された。", "detail": "系統用蓄電池が出力制御対象となりつつ需給調整市場でも稼働している場合の運用ルールに関わる論点。" }
      ]
    },
    {
      "id": "occto_119th_chosei", "date": "2026-06-02", "source": "occto",
      "title": "第119回 調整力及び需給バランス評価等に関する委員会",
      "subtitle": "厳気象時の需給見通しと、夏季供給力計上誤りへの再発防止策を議論",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "夏季需給見通しと供給力計上誤りの再発防止策", "conclusion": "中長期の厳気象H1需要時の需給見通しが報告されるとともに、2026年度夏季電力需給見通しにおける供給力計上誤りへの再発防止策が議論された。", "detail": "2026年5月20日の北海道エリア広域予備率の状況もあわせて報告された。" }
      ]
    },
    {
      "id": "occto_73rd_capacity", "date": "2026-05-27", "source": "occto",
      "title": "第73回 容量市場の在り方等に関する検討会",
      "subtitle": "追加オークションの運用ルール（運開遅延・調整不調時の扱い）を議論",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "追加オークションの運用ルール（運開遅延・調整不調時の扱い）", "conclusion": "長期脱炭素電源オークションの約定結果を踏まえ、追加オークションで調達を見込む供給力の扱いや、新設電源の運開遅延・調整不調電源への容量確保契約金額の減額ルールが議論された。", "detail": "新設の系統用蓄電池が運開遅延した場合のペナルティ等にも関わり得る論点。" }
      ]
    },
    {
      "id": "occto_118th_chosei", "date": "2026-05-14", "source": "occto",
      "title": "第118回 調整力及び需給バランス評価等に関する委員会",
      "subtitle": "電力需給検証報告書（案）と、2026年度調整力確保計画の取りまとめを報告",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "電力需給検証報告書と2026年度調整力確保計画", "conclusion": "電力需給検証報告書（案）が示され、2026年度の調整力確保に関する計画が取りまとめられた。", "detail": "停電コストの検討状況もあわせて報告された。" }
      ]
    },
    {
      "id": "emsc020", "date": "2026-05-29", "source": "emsc",
      "title": "第20回 制度設計・監視専門会合",
      "subtitle": "2026年度追加供給力公募（東京エリア120万kW等）の調達結果を事後確認",
      "sourceName": "電力・ガス取引監視等委員会",
      "sourceUrl": "https://www.egc.meti.go.jp/activity/emsc_systemsurveillance/020_haifu.html",
      "topics": [
        { "theme": "2026年度追加供給力公募の調達結果事後確認", "conclusion": "需給調整市場の運用状況が報告されるとともに、2026年度追加供給力公募の調達結果について事後確認が行われた。", "detail": "特定地域立地電源に係る調整力の調達方法についても議論された。" }
      ]
    },
    {
      "id": "seido113", "date": "2026-04-03", "source": "seido",
      "title": "第113回 制度検討作業部会",
      "subtitle": "容量市場のNet CONE見直しと、kW公募に代わる新たな短期供給力確保策の検討開始",
      "sourceName": "経済産業省 資源エネルギー庁",
      "sourceUrl": "https://www.meti.go.jp/shingikai/enecho/denryoku_gas/jisedai_kiban/system_review/113.html",
      "topics": [
        {
          "theme": "容量市場の指標価格（Net CONE）・上限価格の見直し",
          "conclusion": "2026年度メインオークションのNet CONEを2.05万円/kWに引き上げ、上限価格を3.075万円/kWに設定する方針。急激な負担増を緩和するため「二段階シングルプライスオークション」方式を採用する方向。",
          "detail": "容量市場の価格水準は系統用蓄電池の容量収入に直結するため、今後の制度設計の帰趨を注視する必要がある。"
        },
        {
          "theme": "短期供給力確保策の新設（kW公募の恒久化）",
          "conclusion": "2026年度夏季、東京エリアで120万kWのkW公募実施が決定される中、暫定措置だったkW公募に代わる恒久的な「新たな短期供給力確保策」を、容量市場の一部として制度化する検討を開始。",
          "detail": "系統用蓄電池も需給ひっ迫時の緊急供給力として活用され得る新たな収益機会となる可能性がある。"
        }
      ]
    },
    {
      "id": "occto_117th_chosei", "date": "2026-03-16", "source": "occto",
      "title": "第117回 調整力及び需給バランス評価等に関する委員会",
      "subtitle": "2026年度供給計画の取りまとめと、厳気象時の需給見通しを報告",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "2026年度供給計画の取りまとめ", "conclusion": "2026年度供給計画が取りまとめられ、厳気象H1需要時の需給見通しが示された。", "detail": "「再エネ主力電源化」に向けた技術的課題への対応策の検討状況もあわせて報告された。" }
      ]
    },
    {
      "id": "wg010", "date": "2026-04-16", "source": "wg",
      "title": "第10回 次世代電力系統ワーキンググループ",
      "subtitle": "データセンター等の局地的大規模需要への規律確保と、系統用蓄電池の連系迅速化を議論",
      "sourceName": "経済産業省 資源エネルギー庁",
      "sourceUrl": "https://www.meti.go.jp/shingikai/enecho/denryoku_gas/saisei_kano/smart_power_grid_wg/010.html",
      "topics": [
        { "theme": "データセンター負荷増加と系統用蓄電池の連系対応", "conclusion": "データセンターなど局地的な大規模需要の増加を踏まえた規律確保策と、系統用蓄電池を含む発電等設備の迅速な系統連系に向けた対応について議論。", "detail": "日本データセンター協会からのヒアリングも実施された。" }
      ]
    },
    {
      "id": "wg009", "date": "2026-03-27", "source": "wg",
      "title": "第9回 次世代電力系統ワーキンググループ",
      "subtitle": "系統混雑の中長期見通しと、電圧上昇が系統安定運用に与える影響を議論",
      "sourceName": "経済産業省 資源エネルギー庁",
      "sourceUrl": "https://www.meti.go.jp/shingikai/enecho/denryoku_gas/saisei_kano/smart_power_grid_wg/009.html",
      "topics": [
        { "theme": "系統混雑の中長期見通しと電圧安定対策", "conclusion": "系統用蓄電池の迅速な系統連系対応に加え、系統混雑に関する中長期見通しと、電圧上昇等が系統の安定運用に与える影響について議論。", "detail": "東京電力パワーグリッドからローカル系統の電圧対策事例が報告された。蓄電池の充放電が電圧変動要因となり得る点が論点。" }
      ]
    },
    {
      "id": "occto_72nd_capacity", "date": "2026-03-27", "source": "occto",
      "title": "第72回 容量市場の在り方等に関する検討会",
      "subtitle": "容量市場2025年度包括的検証の取りまとめと、Net CONE見直しの検討開始",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "容量市場2025年度包括的検証とNet CONE見直しの検討開始", "conclusion": "容量市場の2025年度包括的検証報告書が取りまとめられ、需要曲線の算定におけるNet CONEの扱いや、2026年度追加オークションの開催検討が始まった。", "detail": "この回の議論が、後の制度検討作業部会113回・114回で扱われたNet CONE見直しの土台となっている。" }
      ]
    },
    {
      "id": "wg008", "date": "2026-03-16", "source": "wg",
      "title": "第8回 次世代電力系統ワーキンググループ",
      "subtitle": "局地的な大規模需要への規律確保について、海外動向を参考に議論",
      "sourceName": "経済産業省 資源エネルギー庁",
      "sourceUrl": "https://www.meti.go.jp/shingikai/enecho/denryoku_gas/saisei_kano/smart_power_grid_wg/008.html",
      "topics": [
        { "theme": "局地的大規模需要への規律確保（海外動向）", "conclusion": "局地的な大規模需要に対する規律確保について、三菱総合研究所から海外における大規模需要の系統接続規律に関する動向が報告され、制度設計の参考とされた。", "detail": "あわせて再エネ出力制御の長期見通しと、送配電網協議会による次期中給システム開発の検討状況が報告された。" }
      ]
    },
    {
      "id": "seido112", "date": "2026-03-04", "source": "seido",
      "title": "第112回 制度検討作業部会",
      "subtitle": "長期脱炭素電源オークション、ベースロード市場、容量市場、非化石価値取引を包括的に議論",
      "sourceName": "経済産業省 資源エネルギー庁",
      "sourceUrl": "https://www.meti.go.jp/shingikai/enecho/denryoku_gas/jisedai_kiban/system_review/112.html",
      "topics": [
        { "theme": "容量市場・長期脱炭素電源オークション等の制度検討", "conclusion": "長期脱炭素電源オークション、ベースロード市場、容量市場、非化石価値取引について包括的に議論。", "detail": "容量市場は次回113回で扱われたNet CONE見直し議論の前段にあたる回。系統用蓄電池の収益機会に関わる複数市場が一度に取り上げられた。" }
      ]
    },
    {
      "id": "occto_60th_jukyu", "date": "2026-03-03", "source": "occto",
      "title": "第60回 需給調整市場検討小委員会（第77回 調整力の細分化及び広域調達の技術的検討に関する作業会と合同開催）",
      "subtitle": "発動指令電源（蓄電池等）の機器個別計測の扱いと、年度の議論を総括",
      "sourceName": "電力広域的運営推進機関",
      "sourceUrl": "https://www.occto.or.jp/iinkai/",
      "topics": [
        { "theme": "発動指令電源の機器個別計測の扱いと年度総括", "conclusion": "発動指令電源（蓄電池等）の機器個別計測での取り扱いが議論され、需給調整市場検討小委員会のこれまでの議論の方向性が年度報告として整理された。", "detail": "送配電網協議会の次期中給システム開発状況、電力需給調整力取引所の2026年度MMS準備状況も報告された。" }
      ]
    },
    {
      "id": "seido_25th", "date": "2026-07-03", "source": "seido",
      "title": "第二十五次中間とりまとめ（制度検討作業部会）",
      "subtitle": "容量市場のNet CONE見直し・短期供給力確保策等の議論を取りまとめ、パブリックコメントを募集",
      "sourceName": "経済産業省 資源エネルギー庁",
      "sourceUrl": "https://www.meti.go.jp/shingikai/enecho/denryoku_gas/jisedai_kiban/system_review/20260703_report.html",
      "topics": [
        { "theme": "第二十五次中間とりまとめの公表", "conclusion": "これまでの議論（容量市場のNet CONE見直し、短期供給力確保策等）を取りまとめた「第二十五次中間とりまとめ（案）」が公表され、パブリックコメントの募集が開始された。", "detail": "とりまとめ本文（PDF約6,241KB）は未読のため、詳細な内容は情報元PDFの確認を推奨。" }
      ]
    },
    {
      "id": "seido_24th", "date": "2026-05-01", "source": "seido",
      "title": "第二十四次中間とりまとめ（制度検討作業部会）",
      "subtitle": "第114回までの議論を踏まえた中間とりまとめが公表",
      "sourceName": "経済産業省 資源エネルギー庁",
      "sourceUrl": "https://www.meti.go.jp/shingikai/enecho/denryoku_gas/jisedai_kiban/system_review/index.html",
      "topics": [
        { "theme": "第二十四次中間とりまとめの公表", "conclusion": "第114回（書面審議）までの議論を踏まえた「第二十四次中間とりまとめ」が公表された。", "detail": "本文は未読のため、詳細な内容は情報元での確認を推奨。正確な資料URLは一覧ページから辿ってください。" }
      ]
    },
    {
      "id": "seido_23rd", "date": "2026-03-13", "source": "seido",
      "title": "第二十三次中間とりまとめ（制度検討作業部会）",
      "subtitle": "第112回までの議論を踏まえた中間とりまとめが公表",
      "sourceName": "経済産業省 資源エネルギー庁",
      "sourceUrl": "https://www.meti.go.jp/shingikai/enecho/denryoku_gas/jisedai_kiban/system_review/index.html",
      "topics": [
        { "theme": "第二十三次中間とりまとめの公表", "conclusion": "第112回までの議論を踏まえた「第二十三次中間とりまとめ」が公表された。", "detail": "本文は未読のため、詳細な内容は情報元での確認を推奨。正確な資料URLは一覧ページから辿ってください。" }
      ]
    },
    {
      "id": "emsc019", "date": "2026-03-30", "source": "emsc",
      "title": "第19回 制度設計・監視専門会合",
      "subtitle": "需給調整市場の運用状況を報告、スポット市場への限界費用供出ルールを議論",
      "sourceName": "電力・ガス取引監視等委員会",
      "sourceUrl": "https://www.egc.meti.go.jp/activity/emsc_systemsurveillance/019_haifu.html",
      "topics": [
        { "theme": "需給調整市場の運用状況とスポット市場供出ルール", "conclusion": "需給調整市場の運用状況が報告され、スポット市場への限界費用価格での供出が特に強く求められる対象事業者について議論された。", "detail": "自主的取組・競争状態のモニタリング報告（2025年10〜12月期）もあわせて公表された。" }
      ]
    }
  ]
};
