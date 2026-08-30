// 系統用蓄電池事業 業界ニュース収集データ（試験運用）
// 収集方法: WebSearch/WebFetchで日経(xtech.nikkei.com等の公開範囲)・日経BP・PR TIMES・共同通信PRワイヤー・
//   各社ニュースリリース・業界専門メディア（エネハブ、SOLAR JOURNAL、蓄電所ネット、bessnews、みんなの広報宣伝部 等）・
//   電気新聞・環境ビジネスオンライン・Google/Yahoo検索・海外プレス（AESC/BYD等）を横断的に調査。
// 日経電子版など有料会員限定記事は、本文全文を取得できないため見出し・リード文など公開範囲のみで要約しています。
// 会社名が登場しない制度・市場動向ニュース（需給調整市場の上限価格改定、蓄電池産業戦略改定等）も収集対象に含めています。
// 2025年11月〜2026年6月分は、テーマ4「投資プレイヤー一覧」（players.html）の調査時に見つかった個別ニュースを統合したものです。
// ジャンルは収集した実データから抽出した「候補」です。
window.NEWS_DATA = {
  "collectedAt": "2026-08-30",
  "periodLabel": "2025年11月〜2026年8月（試験収集、投資プレイヤー調査と統合、企業横断フォローアップ・蓄電池メーカー動向を追加調査）",
  "genres": [
    { "id": "all", "label": "すべて" },
    { "id": "entry", "label": "新規参入・事業拡大" },
    { "id": "operation", "label": "稼働・運転開始" },
    { "id": "epc", "label": "建設・EPC受注" },
    { "id": "policy", "label": "制度・規制" },
    { "id": "capital", "label": "資本・提携・M&A" }
  ],
  "items": [
    {
      "id": "n20260828_powerx_itochu",
      "image": "https://www.media-ir.com/news/wp-content/uploads/2026/08/p3-1.jpg",
      "date": "2026-08-28",
      "genre": "epc",
      "title": "パワーエックス、伊藤忠商事と系統用蓄電システム30台を共同受注",
      "subtitle": "宮城県白石市に出力23MW・容量75.2MWh、2028年度内の運転開始予定",
      "sourceName": "日本インタビュ新聞",
      "sourceUrl": "https://www.media-ir.com/news/?p=180020",
      "topics": [
        {
          "theme": "受注の内容",
          "conclusion": "パワーエックスが伊藤忠商事と共同で、宮城白石蓄電所合同会社向けに「Mega Power 2500」計30台を受注した。",
          "detail": "設置場所は宮城県白石市。PCS出力23MW、合計蓄電容量75.2MWh（一般世帯約7,000世帯の1日分の電力消費に相当）。東北エリアの特別高圧系統に接続し、2028年度内の運転開始を予定。"
        }
      ]
    },
    {
      "id": "n20260827_meti_teiatsu_kenen",
      "image": "https://project.nikkeibp.co.jp/ms/atcl/19/news/00001/06036/METIm.jpg?ver=1",
      "date": "2026-08-27",
      "genre": "policy",
      "title": "「低圧系統用蓄電池」申込急増に懸念、経産省が対策へ",
      "subtitle": "接続検討を経ない直接契約申込みが急増、土地使用権原の提出義務化や事業者あたり上限件数を検討",
      "sourceName": "日経BP",
      "sourceUrl": "https://project.nikkeibp.co.jp/ms/atcl/19/news/00001/06036/?ST=msb",
      "topics": [
        {
          "theme": "経産省の懸念と対応方針",
          "conclusion": "経産省の有識者会議で、低圧系統用蓄電池を中心とした「空押さえ」的な接続申込み急増への対策が検討された。",
          "detail": "2026年3月時点で実際に連系済みは84万kWにとどまる一方、接続検討受付は1億9100万kWに達している。特に低圧系統用蓄電池は接続検討を経ずに直接契約申込みへ進む件数が増えており、系統アクセス手続きへの悪影響が懸念されている。対策として、土地使用権原の提出義務化、事業者あたりの申込数上限設定、「低圧分割」への対策などが検討されている。8月1日から適用された事業者あたり上限件数制度（政策関連情報ページ参照）とも連動する動き。"
        }
      ]
    },
    {
      "id": "n20260825_kikusui",
      "image": "https://prcdn.freetls.fastly.net/release_image/110320/14/110320-14-e496df64aec350188b8a1cf8fffa7ebe-1477x1108.jpg?format=jpeg&auto=webp&fit=bounds&width=2400&height=1260",
      "date": "2026-08-25",
      "genre": "entry",
      "title": "菊水株式会社、系統用蓄電池事業へ本格参入",
      "subtitle": "和歌山・栃木で自社開発の系統蓄電所2件に着手、2027年夏の運用開始を目指す",
      "sourceName": "PR TIMES（菊水株式会社）",
      "sourceUrl": "https://prtimes.jp/main/html/rd/p/000000014.000110320.html",
      "topics": [
        {
          "theme": "参入の概要",
          "conclusion": "和歌山県・栃木県で出力2,000kW級の系統蓄電所をそれぞれ自社開発し、2027年夏の運用開始を目指す。",
          "detail": "和歌山県案件はPCS出力1,999kW・蓄電容量8,194kWh、栃木県案件は出力1,998kW・容量8,147kWh。将来的にはEPC事業への展開も視野に、開発・運用ノウハウの蓄積を図るとしている。"
        }
      ]
    },
    {
      "id": "n20260817_blueskyenergy",
      "image": "https://kyodonewsprwire.jp/prwfile/release/M109010/202608134127/_prw_PI2fl_rQ6AGj9d.jpg",
      "date": "2026-08-17",
      "genre": "operation",
      "title": "ブルースカイエナジー、系統用蓄電所4拠点が運転開始（ヒューリックと提携）",
      "subtitle": "兵庫・宮城・佐賀・大分の4拠点（各2MW/8MWh）が稼働、2029年までに全国100カ所超が目標",
      "sourceName": "共同通信PRワイヤー（ブルースカイエナジー）",
      "sourceUrl": "https://kyodonewsprwire.jp/release/202608134127",
      "topics": [
        {
          "theme": "4拠点の運転開始",
          "conclusion": "ヒューリックとの提携案件として開発してきた4つの系統用蓄電所（兵庫県姫路市・宮城県大崎市・佐賀県みやき町・大分県中津市）が運転を開始した。",
          "detail": "各施設は定格出力2MW・容量8MWhのリチウムイオン電池。ヒューリックとの提携では追加で6物件の開発も進行中で、同社は2029年までに全国100カ所以上の系統用蓄電所設置を目標に掲げている。"
        }
      ]
    },
    {
      "id": "n20260803_ecostyle",
      "image": "https://prcdn.freetls.fastly.net/release_image/12501/395/12501-395-2e520ff798c87ada2933284112c95303-1045x413.png?format=jpeg&auto=webp&fit=bounds&width=2400&height=1260",
      "date": "2026-08-03",
      "genre": "entry",
      "title": "エコスタイル、低圧系統用蓄電所の開発事業を開始",
      "subtitle": "遊休地を6坪・1,500万円規模から活用する分散型モデルを全国6エリアで展開",
      "sourceName": "PR TIMES（株式会社エコスタイル）",
      "sourceUrl": "https://prtimes.jp/main/html/rd/p/000000395.000012501.html",
      "topics": [
        {
          "theme": "事業概要",
          "conclusion": "2026年4月の制度改正で低圧系統用蓄電所が需給調整市場に参加可能になったことを受け、遊休地を活用した分散型蓄電インフラの開発事業を開始した。",
          "detail": "企画・設計から電力申請、施工、O&Mまでを一括提供するサービス。対象地域は東北・東京・中部・関西・中国・九州の各電力管内。約6坪・1,500万円規模からの参画が可能とする。"
        }
      ]
    },
    {
      "id": "n20260803_meti_subsidy_requirements",
      "image": "https://project.nikkeibp.co.jp/ms/atcl/19/news/00001/05984/0731METI01m.jpg?ver=1",
      "date": "2026-08-03",
      "genre": "policy",
      "title": "系統用蓄電池向け補助金、経産省が公募要件を追加",
      "subtitle": "「再エネ出力制御の抑制」「サプライチェーン強靭化」「地域共生」の3点を重点評価項目に追加",
      "sourceName": "日経BP（メガソーラービジネスplus）",
      "sourceUrl": "https://project.nikkeibp.co.jp/ms/atcl/19/news/00001/05984/?ST=msb",
      "topics": [
        {
          "theme": "追加要件の内容",
          "conclusion": "経産省が系統用蓄電池・導入支援事業の公募要件に3つの重点評価項目を追加した。",
          "detail": "①需給調整市場中心から卸電力市場でのアービトラージ（裁定取引）へ誘導し再エネ出力制御を抑制する計画を高評価、②経済安全保障推進法の供給確保計画認定を受けたメーカー製セル（OEM等の第三者委託製造は対象外）の採用を高評価、③騒音対策など地域共生に配慮した取組を高評価。これにより採択案件の蓄電容量が従来の4〜8倍程度に増加する可能性が示唆されている。"
        }
      ]
    },
    {
      "id": "n20260801_connection_cap",
      "date": "2026-08-01",
      "genre": "policy",
      "title": "系統用蓄電池の接続検討、事業者あたりの上限件数が8月1日から適用",
      "subtitle": "東京11件・関西12件・中部7件など、エリアごとに上限を設定し空押さえ的な大量申込みを抑制",
      "sourceName": "各一般送配電事業者プレスリリース（発表2026/7/24）",
      "sourceUrl": "https://www.tepco.co.jp/pg/consignment/workshop/information/renewable/adjustment/20260724_01.html",
      "topics": [
        {
          "theme": "制度の内容",
          "conclusion": "一般送配電事業者各社が、系統用蓄電池を含む発電等設備の接続検討申込みについて、一事業者あたりの同時維持件数の上限を設定し、2026年8月1日より運用を開始した。",
          "detail": "上限数はエリアごとに異なり、東京11件、関西12件、中部7件、北海道・中国5件など。7月31日までに受付完了済みの案件は経過措置の対象。背景には、一部事業者による短期間での大量申込み（100件超の例も）で受付・書類確認業務が停滞していたことがある。政策情報ページの次世代電力系統WGでの議論とも連動する制度。"
        }
      ]
    },
    {
      "id": "n20260724_geac_erex",
      "image": "http://www.zaikei.co.jp/images/zaikei_og_image.jpg",
      "date": "2026-07-24",
      "genre": "epc",
      "title": "グリーンエナジー&カンパニー、イーレックスから系統用蓄電池を追加受注（3件目）",
      "subtitle": "京都府亀岡市の系統用蓄電池施設（1,999kW/8,000kWh）を受注、イーレックスとの連携は3件目",
      "sourceName": "財経新聞",
      "sourceUrl": "https://www.zaikei.co.jp/article/20260724/862568.html",
      "topics": [
        {
          "theme": "連携拡大の内容",
          "conclusion": "宮崎県（2025年9月）、東京電力管内（2026年1月）に続く3件目となる、イーレックスからの系統用蓄電池受注。",
          "detail": "8月7日には同案件の施工着手も発表されている（PR TIMES）。イーレックスは系統用蓄電池のアグリゲーション事業でグリーンエナジー&カンパニーとの協業を継続的に拡大している。"
        }
      ]
    },
    {
      "id": "n20260723_erex",
      "date": "2026-07-23",
      "genre": "entry",
      "title": "イーレックス、系統用蓄電池の第3号案件に投資決定",
      "subtitle": "京都府亀岡市（関西電力管区）に2MW/8MWh規模、2027年度第1四半期の運転開始を予定",
      "sourceName": "イーレックス株式会社",
      "sourceUrl": "https://www.erex.co.jp/news/pressrelease/3567/",
      "topics": [
        {
          "theme": "投資決定の内容",
          "conclusion": "グリーンエナジー・プラスとの工事請負契約を締結し、関西電力管区（京都府亀岡市）に出力2MW・容量8MWh規模の系統用蓄電所を新設する。",
          "detail": "2025年9月の第1号案件（宮崎県串間市）、2026年1月の第2号案件（千葉県）に続く3件目。同社は小売電気事業で培ったトレーディングノウハウを生かし、卸電力・需給調整・容量市場の3市場での収益向上を図るとしている。"
        }
      ]
    },
    {
      "id": "n20260717_tess",
      "date": "2026-07-17",
      "genre": "epc",
      "title": "テスホールディングス子会社、長野県小諸市で約60億円の蓄電所EPCを受注",
      "subtitle": "出力約43MW・容量約171MWhの大型案件、2028年3月納期",
      "sourceName": "テスホールディングス株式会社（適時開示）",
      "sourceUrl": "https://www.nikkei.com/markets/ir/irftp/data/tdnr/tdnetg3/20260717/g17nnx/140120260717595693.pdf",
      "topics": [
        {
          "theme": "受注概要",
          "conclusion": "子会社テス・エンジニアリングが、小諸蓄電所合同会社から長野県小諸市の系統用蓄電所EPC（設計・調達・施工）を約60億円で受注した。",
          "detail": "規模はPCS出力約43MW・蓄電容量約171MWhと大型案件。納期は2028年3月を予定。同社は過去にも複数の大型蓄電所EPCを受注しており、実績を積み上げている。"
        }
      ]
    },
    {
      "id": "n20260715_tokyogas_1gw",
      "image": "https://www.tokyo-gas.co.jp/p31hg90000005vxb-img/tokyogas_logo.jpg",
      "date": "2026-07-15",
      "genre": "entry",
      "title": "東京ガス、系統用蓄電池事業の運用予定容量が1GWを突破",
      "subtitle": "本格参入から約2年で運用予定容量が1,076MWに到達、2030年代早期に200万kW目標",
      "sourceName": "東京ガス株式会社",
      "sourceUrl": "https://www.tokyo-gas.co.jp/news/press/20260715-01.html",
      "topics": [
        {
          "theme": "容量拡大の内容",
          "conclusion": "岡山県「美作蓄電所」（29MW）との最適運用サービス契約締結により、運用予定容量が累計1,076MWに到達した。",
          "detail": "自社開発・オフテイク契約・最適運用サービス「IGNITURE」の3手法を組み合わせて拡大しており、2030年代早期に200万kW（2GW）規模到達を目指す方針。"
        }
      ]
    },
    {
      "id": "n20260714_balancing_price_cap_cut",
      "image": "https://bessnews.jp/img/common/ogp.png",
      "date": "2026-07-14",
      "genre": "policy",
      "title": "需給調整市場の上限価格、9月1日から15円→10円へ引き下げへ",
      "subtitle": "資源エネルギー庁が電力安定供給WGで引き下げ案を提示、高値約定の多くを占める蓄電池の収益に影響",
      "sourceName": "bessnews（資源エネルギー庁「第4回電力安定供給ワーキンググループ」資料に基づく解説記事）",
      "sourceUrl": "https://bessnews.jp/market/beginner/4622601001009/",
      "topics": [
        {
          "theme": "引き下げ案の内容",
          "conclusion": "一次調整力・二次調整力①・複合商品の上限価格を、2026年3月の19.51円→15円に続き、9月1日の実需給分から15円→10円（ΔkW・30分）へ引き下げる案が示された。",
          "detail": "背景には、上限価格付近の高値約定が量では全体の約3.4%にすぎない一方、調達費用の約16.8%を占めており、その多くを蓄電池が入札していたという費用構造がある。記事執筆時点（2026年7月下旬）ではEPRXによる正式な取引規程改定の公表前で、案の段階。系統用蓄電池事業者は上限10円を基本ケース、更なる引き下げ（7.21円）をストレスケースとして収支を見直す必要があるとされる。需給調整市場約定結果ページ（Ⅲ）の最高落札価格の推移とあわせて要確認。"
        }
      ]
    },
    {
      "id": "n20260713_birdman_2gouki",
      "image": "http://www.zaikei.co.jp/images/zaikei_og_image.jpg",
      "date": "2026-07-13",
      "genre": "capital",
      "title": "Birdman、系統用蓄電池2号機を取得",
      "subtitle": "資産規模は前期純資産の3倍超に拡大",
      "sourceName": "財経新聞（Birdman適時開示ベース）",
      "sourceUrl": "https://www.zaikei.co.jp/article/20260713/860821.html",
      "topics": [
        {
          "theme": "取得の内容",
          "conclusion": "Birdmanが系統用蓄電池の2号機を取得し、同社の資産規模は前期純資産の3倍超に拡大した。",
          "detail": "7月4日に運用を開始した1号機（鳥取県境港市、1.9MW/8.1MWh）に続く案件で、同社の蓄電池事業拡大の一環とみられる。取得価格・所在地の詳細は一次情報（適時開示）の確認を推奨。"
        }
      ]
    },
    {
      "id": "n20260710_re100_birdman",
      "image": "https://enehub.jp/wp-content/uploads/2026/07/RE100_BESS.jpg",
      "date": "2026-07-10",
      "genre": "capital",
      "title": "RE100電力、Birdmanと系統用蓄電所のアグリゲーション契約を締結",
      "subtitle": "O&Mサービスと一体的に、市場動向を踏まえた最適な充放電制御を提供",
      "sourceName": "エネハブ",
      "sourceUrl": "https://enehub.jp/news/re100%E9%9B%BB%E5%8A%9B_birdman%E3%81%A8bess_%E9%9B%BB%E5%8A%9B%E9%81%8B%E7%94%A8%E5%A5%91%E7%B4%84%E7%B7%A0%E7%B5%90/",
      "topics": [
        {
          "theme": "契約の内容",
          "conclusion": "RE100電力がBirdmanの系統用蓄電所についてアグリゲーション運用の委託契約を締結し、O&Mサービスと一体的に提供する体制を構築した。",
          "detail": "電力市場の動向や設備の稼働状況を踏まえた最適な充放電制御を行うことで、Birdman側の収益最大化を支援する狙いとみられる。正確な契約締結日は情報元での確認を推奨（2026年7月中旬頃の報道）。"
        }
      ]
    },
    {
      "id": "n20260704_birdman_sakaiminato",
      "date": "2026-07-04",
      "genre": "operation",
      "title": "Birdman、鳥取県境港市の系統用蓄電池設備が完工・運用開始",
      "subtitle": "同社初の系統用蓄電所（1.9MW/8.1MWh）、ピークシフト型で稼働",
      "sourceName": "みんかぶ／BigGoファイナンス（TDnet情報ベース）",
      "sourceUrl": "https://s.minkabu.jp/news/4560919",
      "topics": [
        {
          "theme": "運用開始の内容",
          "conclusion": "Birdmanにとって初となる系統用蓄電所（鳥取県境港市、出力1.9MW・容量8.1MWh）が完工し、7月4日より運用を開始した。",
          "detail": "当面はピークシフト型での運用とし、その後、需給調整市場「一次調整力」市場への参入を目指す。同社は2027年6月期に約2.8億円の売上を見込むとしている。"
        }
      ]
    },
    {
      "id": "n20260703_tokyufudosan_iizuka",
      "image": "https://www.kankyo-business.jp/uploads/2026/07/07/c6JAQ4XiPx66XiBHjM0TldwmTsrHmw08yRHl9GTw.webp",
      "date": "2026-07-03",
      "genre": "epc",
      "title": "東急不動産など3社、福岡県飯塚市で系統用蓄電池設備が着工",
      "subtitle": "「飯塚勢田蓄電所合同会社」を設立、20MW/82MWhの設備が経産省補助金を活用し着工",
      "sourceName": "環境ビジネスオンライン",
      "sourceUrl": "https://www.kankyo-business.jp/news/b3270277-80eb-4baf-9621-ecc1b4ace6bf",
      "topics": [
        {
          "theme": "着工の内容",
          "conclusion": "東急不動産・IBeeT・Akaysha Energy Japanの3社が「飯塚勢田蓄電所合同会社」を設立し、出力20MW・容量82MWhの系統用蓄電池設備が着工した。",
          "detail": "経済産業省の系統用蓄電池等導入支援事業費補助を活用。運転開始は2027年度以降を予定。東急不動産が3月に出資参画したコンソーシアム「合同会社リブラ」とは別の関連事業。"
        }
      ]
    },
    {
      "id": "n20260616_ja_mitsui_kandenchi_fund",
      "image": "https://prcdn.freetls.fastly.net/release_image/118220/10/118220-10-a9967d06862344d37df02b3b4f83d99c-419x357.jpg?format=jpeg&auto=webp&fit=bounds&width=2400&height=1260",
      "date": "2026-06-16",
      "genre": "capital",
      "title": "JA三井リース、蓄電所ファンド「カン-denchiファンド」に参画",
      "subtitle": "関西電力・きんでん・三菱UFJ銀行系と組成した65億円ファンドに出資、約25万kW規模の蓄電所群が投資対象",
      "sourceName": "JA三井リース株式会社",
      "sourceUrl": "https://prtimes.jp/main/html/rd/p/000000010.000118220.html",
      "topics": [
        {
          "theme": "ファンド出資の内容",
          "conclusion": "JA三井リースが有限責任組合員として「カン-denchiファンド」（総額65億円）に参画した。同ファンドは関西電力・きんでん・三菱UFJ銀行系が組成し、約25万kW規模の系統用蓄電所群を投資対象とする。",
          "detail": "運用期間は26年。JA三井リースは札幌・水戸・浜松での蓄電所投資実績に続く取り組みとして、系統用蓄電池分野への関与を広げている。"
        }
      ]
    },
    {
      "id": "n20260611_osakagas_sukagawa",
      "image": "https://www.osakagas.co.jp/files/img/common/LogoOGDG.png",
      "date": "2026-06-11",
      "genre": "entry",
      "title": "大阪ガス、JA三井リースグループと福島県須賀川市で系統用蓄電池の開発に着手",
      "subtitle": "出力22MW・容量95MWh、両社初の系統用蓄電池事業への共同出資案件",
      "sourceName": "大阪ガス株式会社",
      "sourceUrl": "https://www.osakagas.co.jp/company/press/pr2026/1823595_60967.html",
      "topics": [
        {
          "theme": "開発着手の内容",
          "conclusion": "JA三井リース・JA三井エナジーソリューションズと大阪ガスが共同出資する須賀川蓄電所合同会社を通じ、福島県須賀川市の系統用蓄電池「須賀川蓄電所」の開発に着手した。",
          "detail": "定格出力22MW・容量95MWh。JA三井リースグループが事業運営・資金管理を担い、大阪ガスは電力トレーディングの知見を生かし卸電力・需給調整・容量市場の3市場で取引を行う。Daigasグループは系統用・再エネ併設型合わせて2030年度までに蓄電池運用規模1,000MWを目指す。"
        }
      ]
    },
    {
      "id": "n20260604_geac_plus_kyoto_soden",
      "image": "http://www.zaikei.co.jp/images/zaikei_og_image.jpg",
      "date": "2026-06-04",
      "genre": "epc",
      "title": "グリーンエナジー・プラス、京都府内で系統用蓄電池2件を受注",
      "subtitle": "ソーデン（エスリードグループ）向けに各1,999kW/8,146kWh、合計3,998kWの蓄電所を受注",
      "sourceName": "財経新聞",
      "sourceUrl": "https://www.zaikei.co.jp/article/20260604/855689.html",
      "topics": [
        {
          "theme": "受注拡大の内容",
          "conclusion": "グリーンエナジー&カンパニー子会社のグリーンエナジー・プラスが、ソーデン（エスリードグループ）から京都府内の系統用蓄電池施設2件（各出力1,999kW・容量8,146kWh、合計3,998kW）を受注した。",
          "detail": "系統用蓄電池領域への集中投資戦略の一環として案件を積み上げている。脱炭素進展と需給調整市場拡大を背景に受注環境は堅調と説明。業績への影響は軽微としつつ金融機関・地域企業との連携拡大を目指す。"
        }
      ]
    },
    {
      "id": "n20260602_battery_industry_strategy",
      "image": "https://project.nikkeibp.co.jp/ms/atcl/19/news/00001/05867/0610METI02m.jpg?ver=1",
      "date": "2026-06-02",
      "genre": "policy",
      "title": "経産省、「蓄電池産業戦略」を「蓄電池・電源産業戦略」に改定",
      "subtitle": "国内製造基盤150GWh/年の達成時期を2030年代半ばに後ろ倒し、10年で関連売上高3倍を目標",
      "sourceName": "日経BP（メガソーラービジネスplus）",
      "sourceUrl": "https://project.nikkeibp.co.jp/ms/atcl/19/news/00001/05867/?ST=msb",
      "topics": [
        {
          "theme": "戦略改定の内容",
          "conclusion": "2022年8月策定の「蓄電池産業戦略」を改定し、「蓄電池・電源産業戦略」として国内製造基盤・グローバル展開・次世代電池の3目標を再設定した。",
          "detail": "国内製造基盤150GWh/年の達成時期は「遅くとも2030年まで」から「2030年代半ば」へ後ろ倒し（EV市場の伸び鈍化が背景）。日本企業の蓄電池関連売上高を10年で3倍に成長させる目標や、全固体電池の2030年頃の本格実用化目標も掲げる。AI向けデータセンター等、多様化する蓄電池需要への対応強化も論点。系統用蓄電池事業に直接言及する内容ではないが、国内蓄電池産業全体の政策方向性として関連。"
        }
      ]
    },
    {
      "id": "n20260601_mec_chikuzen",
      "image": "https://www.mec.co.jp/ogimage.png",
      "date": "2026-06-01",
      "genre": "entry",
      "title": "三菱地所、福岡県筑前町で67MW・230MWhの系統用蓄電所建設に着手",
      "subtitle": "伊藤忠商事・東京センチュリーと共同、2028年1月の運転開始を予定",
      "sourceName": "三菱地所株式会社",
      "sourceUrl": "https://www.mec.co.jp/news/detail/2026/06/01_mec260601_battery",
      "topics": [
        {
          "theme": "建設着手の内容",
          "conclusion": "三菱地所が伊藤忠商事・東京センチュリーと連携し、福岡県朝倉郡筑前町赤坂で定格出力67MW・容量230.1MWhの系統用蓄電所の建設に着手した。",
          "detail": "2028年1月の運転開始を予定。経済産業省の補助金採択も受けている。三菱地所は2024年から系統用蓄電所事業に取り組み、日本初の系統用蓄電所ファンド「東京都蓄電所投資事業有限責任組合」への出資や北海道千歳市案件にも参画している。"
        }
      ]
    },
    {
      "id": "n20260601_mitsuuroko_kitahiroshima_34",
      "image": "https://xn--q9ji3c6d676qnnlo0fgmgrr6k.com/wp-content/themes/office-n/img/icon/ogp.png",
      "date": "2026-06-01",
      "genre": "operation",
      "title": "ミツウロコグリーンエネルギー、北広島蓄電池3・4号機が運転開始",
      "subtitle": "北海道北広島市のグループ会社敷地内で3・4号機が稼働、系統安定化にIPoCCで寄与",
      "sourceName": "みんなの広報宣伝部",
      "sourceUrl": "https://xn--q9ji3c6d676qnnlo0fgmgrr6k.com/2026/06/05/news-22626/",
      "topics": [
        {
          "theme": "運転開始の内容",
          "conclusion": "ミツウロコグリーンエネルギーの北広島蓄電池3・4号機（北海道北広島市、グループ会社敷地内）が6月1日に運転を開始した。",
          "detail": "経済産業省「系統用蓄電池等導入支援事業」の採択案件。同社独自の需給調整プラットフォーム「IPoCC」を活用し系統安定化に寄与する。"
        }
      ]
    },
    {
      "id": "n20260531_geac_kurashiki",
      "image": "http://www.zaikei.co.jp/images/zaikei_og_image.jpg",
      "date": "2026-05-31",
      "genre": "epc",
      "title": "グリーンエナジー&カンパニー、岡山県倉敷市で系統用蓄電池システム工事を受注",
      "subtitle": "2029年4月期までに累計1GWhの系統用蓄電所開発を目指す事業拡大の一環",
      "sourceName": "財経新聞",
      "sourceUrl": "https://www.zaikei.co.jp/article/20260531/855215.html",
      "topics": [
        {
          "theme": "受注の内容",
          "conclusion": "グリーンエナジー&カンパニーが岡山県倉敷市の系統用蓄電池システム工事を受注した。",
          "detail": "同社は2029年4月期までに累計1,000MWh（1GWh）の系統用蓄電所開発を目指しており、最大出力500MW・容量2GWh、6年間で総事業費910億円を投じる計画。2026年7月時点で100拠点超が新規開発中。"
        }
      ]
    },
    {
      "id": "n20260529_itcenex_hiji",
      "image": "https://www.itcenex.com/ja/common/images/enex_ogp2.png",
      "date": "2026-05-29",
      "genre": "capital",
      "title": "伊藤忠エネクス、大分県日出町の系統用蓄電池事業に出資参画",
      "subtitle": "国内4社が出資する合同会社Altairを通じ51MW/204MWhの事業に参画、出資比率14.5%（8億円）",
      "sourceName": "伊藤忠エネクス株式会社",
      "sourceUrl": "https://www.itcenex.com/ja/news/2026/20260529.html",
      "topics": [
        {
          "theme": "出資参画の内容",
          "conclusion": "伊藤忠エネクスが、国内4社が出資する合同会社Altairを通じ、大分県日出町の系統用蓄電池事業（出力51MW・容量204MWh）に出資参画した。出資額は8億円（出資比率14.5%）。",
          "detail": "あおぞら銀行がアレンジするノンリコース・プロジェクトファイナンスを組成。運転開始は2028年9月を予定。"
        }
      ]
    },
    {
      "id": "n20260511_byd_haohan",
      "image": "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZQO2996472011052026000000-1.jpg?auto=compress&bg=FFFF&crop=focalpoint&fit=crop&fm=jpg&h=630&w=1200&s=57520a8403c372e9f3197e9fb993234b",
      "date": "2026-05-11",
      "genre": "entry",
      "title": "BYD、高エネルギー密度の新型系統用蓄電池「Haohan」を日本投入",
      "subtitle": "設置スペースを従来品比で半分に抑えられる新型コンテナ型蓄電池を日本市場に投入、受注から半年以内の納品を実現",
      "sourceName": "日本経済新聞",
      "sourceUrl": "https://www.nikkei.com/article/DGXZQOUC288KP0Y6A420C2000000/",
      "topics": [
        {
          "theme": "高エネルギー密度コンテナ型蓄電池の投入",
          "conclusion": "BYD日本法人が、エネルギー密度を高め設置面積を半減できる系統用蓄電池「Haohan（ハオハン）」を日本市場向けに販売開始した。",
          "detail": "浙江省の自社工場から輸出する体制で、受注から半年以内の納品を可能にした。設置用地確保が課題となりやすい国内の系統用蓄電所開発事業者にとって用地制約の緩和につながるとされる。"
        }
      ]
    },
    {
      "id": "n20260511_mitsuuroko_tahara",
      "image": "https://xn--q9ji3c6d676qnnlo0fgmgrr6k.com/wp-content/themes/office-n/img/icon/ogp.png",
      "date": "2026-05-11",
      "genre": "operation",
      "title": "ミツウロコグリーンエネルギー、田原蓄電所が一次調整力市場へ新規参入",
      "subtitle": "愛知県田原市の蓄電所（1,500kW/6,000kWh）が5月8日に一次調整力（オフライン）市場へ参入",
      "sourceName": "みんなの広報宣伝部",
      "sourceUrl": "https://xn--q9ji3c6d676qnnlo0fgmgrr6k.com/2026/05/11/news-20275/",
      "topics": [
        {
          "theme": "市場参入拡大の内容",
          "conclusion": "ミツウロコグリーンエネルギーの田原蓄電所（愛知県田原市）が、従来の三次調整力に加えて一次調整力（オフライン）市場にも参入した。",
          "detail": "同社独自の需給調整プラットフォーム「IPoCC（電力制御統合セントラル）」を活用。今後は他の保有蓄電所や二次調整力市場への展開も予定しているという。"
        }
      ]
    },
    {
      "id": "n20260507_mizuho_biwako_investment",
      "image": "https://prcdn.freetls.fastly.net/release_image/85927/141/85927-141-669232fd1033502613a0f76b7f6ee8a8-1098x376.png?format=jpeg&auto=webp&fit=bounds&width=2400&height=1260",
      "date": "2026-05-07",
      "genre": "capital",
      "title": "みずほリース（ML Power）、森トラスト「琵琶湖蓄電所プロジェクト」に出資参画",
      "subtitle": "4月末に出資実行、森トラスト初の系統用蓄電池事業を資金面から支援",
      "sourceName": "みずほリース株式会社",
      "sourceUrl": "https://prtimes.jp/main/html/rd/p/000000141.000085927.html",
      "topics": [
        {
          "theme": "出資参画の内容",
          "conclusion": "みずほリース子会社エムエル・パワーが、森トラストが手がける「琵琶湖蓄電所プロジェクト」（滋賀県守山市）に出資参画した。",
          "detail": "出資は4月末に実行済み。ML Powerは他の系統用蓄電池案件（武雄蓄電所等）にも出資実績を持ち、森トラストにとっては系統用蓄電池事業への初参入案件となる。"
        }
      ]
    },
    {
      "id": "n20260428_ricoh_lease_nihon_chikudenchi_49oku",
      "image": "https://xn--q9ji3c6d676qnnlo0fgmgrr6k.com/wp-content/themes/office-n/img/icon/ogp.png",
      "date": "2026-04-28",
      "genre": "capital",
      "title": "リコーリース、日本蓄電池の系統用蓄電池14件に49億円のPF融資枠",
      "subtitle": "全国14カ所の高圧系統用蓄電池を対象にノンリコース型プロジェクトファイナンスを実行",
      "sourceName": "みんなの広報宣伝部",
      "sourceUrl": "https://xn--q9ji3c6d676qnnlo0fgmgrr6k.com/2026/04/28/news-19662/",
      "topics": [
        {
          "theme": "PF融資の内容",
          "conclusion": "日本蓄電池がリコーリースとの間で、極度信用枠49億円のプロジェクトファイナンス契約を締結した。全国14カ所の高圧系統用蓄電池が対象。",
          "detail": "アセットマネジメントはecoプロパティーズが受託。自己資金による開発からポートフォリオ型の資金循環モデルへの転換を図る取り組み。"
        }
      ]
    },
    {
      "id": "n20260428_blueskyenergy_makinohara",
      "image": "https://kyodonewsprwire.jp/prwfile/release/M109010/202604288295/_prw_PI1fl_4NYsS3m5.gif",
      "date": "2026-04-28",
      "genre": "operation",
      "title": "ブルースカイエナジー、牧之原蓄電所が需給調整市場へ参入",
      "subtitle": "静岡県牧之原市の蓄電所（2MW/8MWh）が運転開始からわずか36日で市場参入、国内最速級",
      "sourceName": "共同通信PRワイヤー",
      "sourceUrl": "https://kyodonewsprwire.jp/release/202604288295",
      "topics": [
        {
          "theme": "市場参入の内容",
          "conclusion": "3月23日に運転を開始した牧之原蓄電所（静岡県牧之原市、2MW/8MWh）が、4月28日に需給調整市場へ参入した。運転開始からわずか36日というスピード。",
          "detail": "アグリゲーターはユーラスエナジーホールディングス。卸電力・需給調整・容量の3市場を運用する方針。ブルースカイエナジーは2029年までに全国100拠点の稼働を計画している。"
        }
      ]
    },
    {
      "id": "n20260423_hokuriku_mizuho_funahashi",
      "image": "https://www.nikkei.com/.resources/k-components/rectangle.rev-d54ea30.png",
      "date": "2026-04-23",
      "genre": "entry",
      "title": "みずほリース系、北陸電力と系統用蓄電池事業に参入",
      "subtitle": "富山県舟橋村に出力1,990kW/容量8,010kWhの蓄電所を新設、北陸電力初の系統用蓄電池事業",
      "sourceName": "日本経済新聞",
      "sourceUrl": "https://www.nikkei.com/article/DGKKZO95849550T20C26A4LB0000/",
      "topics": [
        {
          "theme": "新会社設立の内容",
          "conclusion": "北陸電力とみずほリース子会社エムエル・パワーが「舟橋蓄電所合同会社」を設立し、富山県舟橋村に系統用蓄電池事業を新設する。北陸電力にとって初の系統用蓄電池事業。",
          "detail": "出力1,990kW・容量8,010kWh。2027年4月の運用開始を予定。"
        }
      ]
    },
    {
      "id": "n20260416_tokyogas_aomori",
      "image": "https://www.tokyo-gas.co.jp/p31hg90000005vxb-img/tokyogas_logo.jpg",
      "date": "2026-04-16",
      "genre": "entry",
      "title": "東京ガス、青森県2カ所の系統用蓄電所で最適運用サービス契約を締結、事業目標を200万kWに引き上げ",
      "subtitle": "八戸（9.9万kW）・十和田（5万kW）と契約、本格参入2年で累計95.5万kWに到達し2030年度目標達成が視野に",
      "sourceName": "東京ガス株式会社",
      "sourceUrl": "https://www.tokyo-gas.co.jp/news/press/20260416-01.html",
      "topics": [
        {
          "theme": "契約締結と目標見直しの内容",
          "conclusion": "青森県八戸市（9.9万kW）・十和田市（5万kW）の系統用蓄電所と最適運用サービス契約を締結し、本格参入から2年で累計運用予定容量が95.5万kWに到達した。",
          "detail": "従来目標の2030年度100万kW達成が視野に入ったことを受け、事業目標を2030年代前半に200万kW規模へ上方修正した。両施設は2029年度中の商業運転開始を予定。"
        }
      ]
    },
    {
      "id": "n20260413_aesc_nextes",
      "image": "https://mma.prnewswire.com/media/2954552/photo.jpg?p=facebook",
      "date": "2026-04-13",
      "genre": "capital",
      "title": "AESCとNEXTES、1.5GWhの電池セル供給で戦略的提携　2026年国内最大級",
      "subtitle": "AESCが系統用蓄電池向けにNEXTES（旧NExT-e Solutions）へ3年間で1.5GWhの電池セルを供給する契約を締結、2026年の国内ESSセル調達案件として最大規模",
      "sourceName": "AESC（PR Newswire）",
      "sourceUrl": "https://www.prnewswire.com/apac/news-releases/aesc-and-nextes-sign-1-5-gwh-strategic-supply-agreement-marking-japans-largest-energy-storage-cell-order-of-2026--302740288.html",
      "topics": [
        {
          "theme": "系統用蓄電池セルの大型供給契約",
          "conclusion": "AESCが2026年から3年間でNEXTESにエネルギー貯蔵用セル1.5GWhを供給する契約を締結。単一契約として2026年の国内最大級のESSセル受注となる。",
          "detail": "供給するセルは300Ah・500Ah・700Ah級で、JIS・IEC・ULの各認証を取得。NEXTESは最長20年の容量保証を付与する。NEXTESは2008年設立の企業で、EV用電池の再利用・系統用蓄電への転用を手がける。2026年4月1日付で社名を「NExT-e Solutions」から「NEXTES」に変更したばかりだった。"
        }
      ]
    },
    {
      "id": "n20260408_tokyu_battery",
      "image": "https://www.tokyu.co.jp/company/news/img/20260408_chikudensho_t1.jpg",
      "date": "2026-04-08",
      "genre": "entry",
      "title": "東急株式会社グループ、系統用蓄電所事業を推進（東京都支援事業に2年連続採択）",
      "subtitle": "総開発規模46MW/184MWh、投資総額140億円規模で2027年度までに稼働開始",
      "sourceName": "東急株式会社",
      "sourceUrl": "https://www.tokyu.co.jp/company/news/detail/60796.html",
      "topics": [
        {
          "theme": "事業推進の内容",
          "conclusion": "東急株式会社グループが東京都の系統用大規模蓄電池導入支援事業に2年連続で採択され、総開発規模46MW／184MWhの系統用蓄電所事業を推進する。",
          "detail": "投資総額は140億円規模。2027年度までにすべての系統用蓄電所が稼働開始予定。東急が建設を担い、東急パワーサプライが運用を担当する。"
        }
      ]
    },
    {
      "id": "n20260407_erex_kushima_operation",
      "date": "2026-04-07",
      "genre": "operation",
      "title": "イーレックス、系統用蓄電池第1号案件が商業運転開始",
      "subtitle": "宮崎県串間市に出力2MW/容量8MWhの蓄電所が稼働、同社初の系統用蓄電池案件",
      "sourceName": "イーレックス株式会社（適時開示）",
      "sourceUrl": "https://www.erex.co.jp/news/pressrelease/3150/",
      "topics": [
        {
          "theme": "運転開始の内容",
          "conclusion": "イーレックスにとって初となる系統用蓄電池案件（宮崎県串間市、出力2MW・容量8MWh）が、2026年4月7日に商業運転を開始した。",
          "detail": "需給調整市場・容量市場・卸電力市場の3市場を横断する収益機会の創出が目的。EPCはグリーンエナジー・プラスが担当した。"
        }
      ]
    },
    {
      "id": "n20260402_mori_trust_biwako",
      "image": "https://www.mori-trust.co.jp/assets/media/960ae95be413a5ee6a18e3948e2b8a76-scaled.jpg",
      "date": "2026-04-02",
      "genre": "entry",
      "title": "森トラスト、系統用蓄電池事業に初参入「琵琶湖蓄電所プロジェクト」始動",
      "subtitle": "滋賀県守山市に出力8.7MW/容量19.7MWhの蓄電所を開発、2027年後半に運転開始予定",
      "sourceName": "森トラスト株式会社",
      "sourceUrl": "https://www.mori-trust.co.jp/news/2026/20260402/",
      "topics": [
        {
          "theme": "新規参入の内容",
          "conclusion": "森トラストが系統用蓄電池事業へ本格参入し、滋賀県守山市で「琵琶湖蓄電所プロジェクト」（出力8.7MW・容量19.7MWh）を始動した。",
          "detail": "PowerX製リチウムイオン電池を採用。2026年夏の着工を予定。これまでのTeraWatt Technology・PowerXへの出資に続く、事業運営フェーズへの移行となる。みずほリース（ML Power）が4月末に出資参画した。"
        }
      ]
    },
    {
      "id": "n20260331_renova_kikugawa",
      "image": "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZQO2830062031032026000000-2.jpg?auto=compress&bg=FFFF&crop=focalpoint&fit=crop&fm=jpg&h=630&w=1200&s=f5ef248de53fd93db2ebbae62d996360",
      "date": "2026-03-31",
      "genre": "entry",
      "title": "レノバ、静岡県菊川市で国内最大級の系統用蓄電所を開発",
      "subtitle": "出力9万kW（将来90万kWまで拡大想定）、SBI新生銀行のPFで約60億円を調達し2028年度稼働へ",
      "sourceName": "日本経済新聞",
      "sourceUrl": "https://www.nikkei.com/article/DGXZQOUC317OF0R30C26A3000000/",
      "topics": [
        {
          "theme": "開発とファイナンスの内容",
          "conclusion": "レノバが静岡県菊川市で出力9万kW（将来的に90万kWまで拡大想定）の国内最大級となる系統用蓄電所を開発する。",
          "detail": "SBI新生銀行のアレンジによるプロジェクトファイナンスで約60億円を調達。NECキャピタルソリューション系・SMFLみらいパートナーズが共同出資し、レノバは当初40%出資（最大80%まで引き上げ可能）。2028年度の稼働を予定。"
        }
      ]
    },
    {
      "id": "n20260326_tokyufudosan_libra",
      "image": "https://prcdn.freetls.fastly.net/release_image/6953/684/6953-684-c89923ad73b8795cf32450e5ba6cbe0d-407x71.png?format=jpeg&auto=webp&fit=bounds&width=2400&height=1260",
      "date": "2026-03-26",
      "genre": "capital",
      "title": "東急不動産グループと国内大手7社、300億円規模の系統用蓄電池コンソーシアムを組成",
      "subtitle": "特別高圧・全国6物件・174MWを2027年度より順次運転開始",
      "sourceName": "PR TIMES（東急不動産株式会社）",
      "sourceUrl": "https://prtimes.jp/main/html/rd/p/000000684.000006953.html",
      "topics": [
        {
          "theme": "コンソーシアム組成の内容",
          "conclusion": "東急不動産グループが芙蓉総合リース等国内大手7社と共同で「合同会社リブラ」を組成し、総事業費約300億円・出力約174MWの系統用蓄電所6物件を推進する。",
          "detail": "特別高圧、全国6物件。2027年度以降、順次運転開始予定。8社共同のコンソーシアムとして日本国内でも大型の部類に入る取り組み。"
        }
      ]
    },
    {
      "id": "n20260324_sungrow_blueskyenergy",
      "image": "https://kyodonewsprwire.jp/prwfile/release/M109010/202603246199/_prw_PI2fl_n4uimkC9.gif",
      "date": "2026-03-24",
      "genre": "capital",
      "title": "サングロウジャパン、ブルースカイエナジーと系統用蓄電システム調達で基本合意",
      "subtitle": "ブルースカイエナジーが全国100カ所で計画する系統用蓄電所開発向けに、サングロウ製蓄電システムの調達で基本合意書を締結",
      "sourceName": "共同通信PRワイヤー（ブルースカイエナジー）",
      "sourceUrl": "https://kyodonewsprwire.jp/release/202603246199",
      "topics": [
        {
          "theme": "系統用蓄電システムの調達基本合意",
          "conclusion": "ブルースカイエナジーが全国100カ所で計画する系統用蓄電所開発において、サングロウジャパン製の蓄電システムを調達する方向で基本合意した。",
          "detail": "本合意は購入・供給に関する意向確認であり、具体的な契約条件は今後の個別契約で決定するとしている。ブルースカイエナジーは2029年までに全国100カ所超の蓄電所稼働を目指す。"
        }
      ]
    },
    {
      "id": "n20260319_ja_mitsui_powerx_tsu",
      "image": "https://power-x.jp/ja/intl/newsroom/2026-03-19/cover",
      "date": "2026-03-19",
      "genre": "operation",
      "title": "JA三井リース×PowerX、三重県津市の蓄電所が運転開始",
      "subtitle": "出力1.99MW/容量7.4MWhの蓄電所が需給調整市場（一次調整力）へ参入、中部エリア3拠点計画の第1弾",
      "sourceName": "PowerX Newsroom",
      "sourceUrl": "https://power-x.jp/ja/intl/newsroom/2026-03-19",
      "topics": [
        {
          "theme": "運転開始の内容",
          "conclusion": "三重県津市芸濃町荻野の蓄電所（出力1.99MW・容量7.4MWh）が運転を開始した。",
          "detail": "PowerXがMegaPack機器供給・アグリゲーションを担当し、設備はJA三井リース側のJMES BESS ONE社が保有する。愛知・静岡でも追加2拠点が2026年春に稼働予定で、中部エリア3拠点計画の第1弾となる。"
        }
      ]
    },
    {
      "id": "n20260319_rs_asset_hulic_fuyo_itochu",
      "image": "https://prcdn.freetls.fastly.net/release_image/154894/11/154894-11-e39286a6e47be6b70709ca9dc12a4772-563x286.png?format=jpeg&auto=webp&fit=bounds&width=2400&height=1260",
      "date": "2026-03-19",
      "genre": "capital",
      "title": "RSアセットアドバイザーズ、ヒューリック・芙蓉総合リース・伊藤忠商事と系統用蓄電池を共同開発",
      "subtitle": "高圧蓄電所5件・合計40MWhを共同出資、2028年3月までの完工を目指す",
      "sourceName": "RSアセットアドバイザーズ株式会社",
      "sourceUrl": "https://prtimes.jp/main/html/rd/p/000000011.000154894.html",
      "topics": [
        {
          "theme": "4社共同開発の内容",
          "conclusion": "RSアセットアドバイザーズがヒューリック・芙蓉総合リース・伊藤忠商事と共同で、高圧系統用蓄電所5件（合計40MWh）を全国で開発する。",
          "detail": "RSアセットが開発・アセットマネジメントを担当し、伊藤忠商事が蓄電システム供給と稼働後のアグリゲーションを担当する。2028年3月までの完工を目指す。"
        }
      ]
    },
    {
      "id": "n20260317_catl_volt",
      "image": "https://prcdn.freetls.fastly.net/release_image/175252/6/175252-6-ce6bdd17da0d11bf412e42abce6e49d8-1477x1108.jpg?format=jpeg&auto=webp&fit=bounds&width=2400&height=1260",
      "date": "2026-03-17",
      "genre": "capital",
      "title": "CATL、VOLT販売と2GWhの蓄電池供給契約を締結",
      "subtitle": "CATLの国内正規販売代理店VOLT販売が、リチウムイオン電池価格上昇を見据えた長期・安定供給と価格安定化を目的に2GWh規模の新規供給契約を締結",
      "sourceName": "PR TIMES（VOLT販売株式会社）",
      "sourceUrl": "https://prtimes.jp/main/html/rd/p/000000006.000175252.html",
      "topics": [
        {
          "theme": "系統用蓄電池セルの長期安定調達",
          "conclusion": "VOLT販売がCATLと2GWh規模の新規供給契約を結び、国内の系統用蓄電池案件向けにセルの長期・安定供給と価格安定化を図る。",
          "detail": "VOLT販売は2025年8月にもダイヘン向け等でCATL電池の供給契約を締結しており、今回はそれに続く追加契約。再エネの変動吸収や脱炭素目標達成に向けた蓄電池需要拡大を背景とする。"
        }
      ]
    },
    {
      "id": "n20260303_nishimu_marubeni_powerx",
      "image": "https://ferret-one.akamaized.net/images/66a71d0b5406e70403ff6a71/large.png?utime=1722227979",
      "date": "2026-03-03",
      "genre": "entry",
      "title": "ニシム電子工業・丸紅新電力・パワーエックス、系統用蓄電池パッケージ「Mega Power 2500」の提供を開始",
      "subtitle": "太陽光併設型・系統用蓄電池向けパッケージ商品を3社共同で提供開始、JC-STAR認証取得済み",
      "sourceName": "ニシム電子工業株式会社",
      "sourceUrl": "https://www.nishimu.co.jp/news_top/20260303",
      "topics": [
        {
          "theme": "パッケージ提供の内容",
          "conclusion": "ニシム電子工業・丸紅新電力・パワーエックスの3社が、系統用蓄電池向けパッケージ商品「Mega Power 2500」の提供を共同で開始した。",
          "detail": "丸紅新電力が運営する実証拠点「耳根川蓄電所」での1年超の安定稼働実績を踏まえた展開。JC-STAR認証取得済みで、国内製造・保守体制を訴求する。"
        }
      ]
    },
    {
      "id": "n20260302_kepco_gates",
      "image": "https://gatestokyo.co.jp/wp-content/uploads/2026/06/site-image.jpg",
      "date": "2026-03-02",
      "genre": "capital",
      "title": "関西電力、GATESと系統用蓄電池事業で業務提携基本契約を締結",
      "subtitle": "事業用地探索からスキーム構築まで協業、関電は2030年代初頭に国内最大級の100万kW規模開発を目指す",
      "sourceName": "GATES株式会社",
      "sourceUrl": "https://gatestokyo.co.jp/news/%E9%96%A2%E8%A5%BF%E9%9B%BB%E5%8A%9B%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/",
      "topics": [
        {
          "theme": "業務提携の内容",
          "conclusion": "関西電力とGATESが、系統用蓄電池事業に関する非独占的な業務提携基本合意書（MOU）を締結した。",
          "detail": "GATESの用地取得・権利調整ノウハウと関西電力のエネルギー事業ノウハウを組み合わせ、候補地探索から技術・法務・事業性評価までを共同で実施する。関西電力は2030年代初頭に国内最大級となる100万kW規模の系統用蓄電池開発を目指す方針。"
        }
      ]
    },
    {
      "id": "n20260302_ntt_anode_hakodate",
      "image": "https://prcdn.freetls.fastly.net/release_image/111866/66/111866-66-851ac98bd675580ce1f7a82537666365-3900x2921.jpg?format=jpeg&auto=webp&fit=bounds&width=2400&height=1260",
      "date": "2026-03-02",
      "genre": "operation",
      "title": "NTTアノードエナジー、北海道函館蓄電所が商業運転開始",
      "subtitle": "出力1,999kW/容量8,226kWhのリチウムイオン蓄電所が2026年2月に商業運転を開始、稼働拠点は8カ所に拡大",
      "sourceName": "NTTアノードエナジー",
      "sourceUrl": "https://prtimes.jp/main/html/rd/p/000000066.000111866.html",
      "topics": [
        {
          "theme": "稼働開始の内容",
          "conclusion": "NTTアノードエナジーの系統用蓄電所が北海道函館市に開設され、2026年2月に商業運転を開始した。稼働拠点は8カ所に拡大した。",
          "detail": "出力1,999kW・容量8,226kWhのリチウムイオン蓄電池。同社は2028年度までに国内20カ所超への拡大を計画し、100億円超を投資する方針。"
        }
      ]
    },
    {
      "id": "n20260225_byd_itochu_10x",
      "image": "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZQO2600675009022026000000-1.jpg?auto=compress&bg=FFFF&crop=focalpoint&fit=crop&fm=jpg&fp-x=0.51&fp-y=0.2&h=630&w=1200&s=3b8c61b412b1ef8b135ee493d2c408a8",
      "date": "2026-02-25",
      "genre": "capital",
      "title": "BYD、伊藤忠と連携し日本の蓄電池販売を2030年までに10倍へ",
      "subtitle": "BYD日本法人が伊藤忠商事との協業を軸に、系統用蓄電池のアフターサービス体制を強化し販売量（GWhベース）を2025年比10倍に拡大する方針を表明",
      "sourceName": "日本経済新聞（日経GX）",
      "sourceUrl": "https://www.nikkei.com/prime/gx/article/DGXZQOUC097X40Z00C26A2000000",
      "topics": [
        {
          "theme": "日本市場での蓄電池事業拡大方針",
          "conclusion": "BYD日本法人トップが、2030年までに蓄電池販売量を2025年比10倍に伸ばす目標を明らかにした。",
          "detail": "拡大戦略の柱としてアフターサービス体制の強化を挙げ、系統用蓄電池市場でのシェア獲得を狙う。伊藤忠商事とは従来から車載用電池のリユース事業等で協業関係にある。"
        }
      ]
    },
    {
      "id": "n20260218_gsyuasa_domestic_production",
      "image": "https://cdn.clipkit.co/tenants/1398/articles/images/000/002/540/large/6f6b5068-ff2f-4ca5-819a-54d1b07beb41.png?1771224941",
      "date": "2026-02-18",
      "genre": "entry",
      "title": "GSユアサ、定置用リチウムイオン電池の国産量産計画が経産省認定　投資額703億円",
      "subtitle": "経済産業省の「蓄電池に係る供給確保計画」に認定され、年産2GWhの定置用蓄電池を国内で開発・量産する体制構築に着手",
      "sourceName": "GSユアサ ニュースルーム",
      "sourceUrl": "https://newsroom.gs-yuasa.com/news-release/376",
      "topics": [
        {
          "theme": "国産定置用電池の量産投資",
          "conclusion": "総事業費約703億円（うち補助金最大248億円）を投じ、電池セルから制御システムまで完全国産化した定置用蓄電システムを2028年10月の供給開始を目指し開発する。",
          "detail": "系統用・産業用蓄電池需要の拡大を見据え、再エネ主力電源化に対応する国内供給体制強化が狙い。長年培った電池の劣化予測技術等を活用し、安全性と長期運用性を両立させるとしている。"
        }
      ]
    },
    {
      "id": "n20260114_maeda_toshiba",
      "date": "2026-01-14",
      "genre": "capital",
      "title": "前田建設工業と東芝エネルギーシステムズ、系統用蓄電池事業に参画",
      "subtitle": "長野県小海町の案件で、前田建設が事業運営、東芝ESSがアグリゲーターを担当",
      "sourceName": "東芝エネルギーシステムズ株式会社",
      "sourceUrl": "https://www.global.toshiba/jp/news/energy/2026/01/news-20260114-01.html",
      "topics": [
        {
          "theme": "参画の内容",
          "conclusion": "前田建設工業と東芝エネルギーシステムズが、長野県小海町の系統用蓄電池事業に参画した。",
          "detail": "前田建設が事業運営を担い、東芝ESSは需要予測技術を活用したアグリゲーターとして運用収益の最大化を図る。前田建設はRSアセットアドバイザーズとも青森県三戸郡で第1号案件を組成しており、EPC・アセットマネジメント両面で参画を拡大している。"
        }
      ]
    },
    {
      "id": "n20251127_mizuho_osakagas_takeo",
      "image": "https://www.osakagas.co.jp/files/img/common/LogoOGDG.png",
      "date": "2025-11-27",
      "genre": "operation",
      "title": "みずほリース・大阪ガスなど共同出資の武雄蓄電所、商業運転を開始",
      "subtitle": "佐賀県武雄市、定格出力2MW・容量8MWh。系統安定化ニーズの高い九州エリアでの取り組み",
      "sourceName": "大阪ガス株式会社",
      "sourceUrl": "https://www.osakagas.co.jp/company/press/pr2025/1796412_58387.html",
      "topics": [
        {
          "theme": "商業運転開始の内容",
          "conclusion": "みずほリース子会社エムエル・パワーや大阪ガス等が共同出資する武雄蓄電所（佐賀県武雄市、定格出力2MW・容量8MWh）が商業運転を開始した。",
          "detail": "系統安定化ニーズの高い九州エリアでの取り組み。みずほリースは同様の枠組みで森トラストの「琵琶湖蓄電所プロジェクト」（滋賀県守山市）にも出資参画している。"
        }
      ]
    },
    {
      "id": "n20251104_fuyo_shinkawa",
      "image": "https://www.nikkei.com/nkd/disclosure/tdnr/20251104586671/thumbnail/?ttype=ogp",
      "date": "2025-11-04",
      "genre": "operation",
      "title": "芙蓉総合リース、系統用蓄電池プロジェクト「しんかわ蓄電所」が商業運転を開始",
      "subtitle": "全国6地点174MWの共同投資（合同会社リブラ）等、複数プロジェクトを展開する中の1件",
      "sourceName": "日経会社情報DIGITAL（適時開示）",
      "sourceUrl": "https://www.nikkei.com/nkd/disclosure/tdnr/20251104586671/",
      "topics": [
        {
          "theme": "商業運転開始の内容",
          "conclusion": "芙蓉総合リースが手がける系統用蓄電池プロジェクト「しんかわ蓄電所」が商業運転を開始した。",
          "detail": "同社はRSアセットアドバイザーズや前田建設工業との協業、大分県臼杵市案件（2026年5月運開予定、実際の運転開始は本ページ未確認）、東急不動産グループ「合同会社リブラ」（全国6地点174MW）への出資参画など、複数の系統用蓄電池プロジェクトを並行して展開している。"
        }
      ]
    }
  ]
};
