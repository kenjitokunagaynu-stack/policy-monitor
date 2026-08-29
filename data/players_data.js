// 系統用蓄電池 投資プレイヤー一覧（試験運用）
// 収集方法: WebSearch/WebFetchで過去1年分のニュース（投資決定・稼働開始・EPC受注等）を横断調査。
// 投資額目標/MW規模は各社の公表資料に基づく判明分のみ。非公開・不明な項目は「非公開」「不明」と明記。
// 数値セルは比較しやすいよう極力単一の数値・単位のみとし、背景情報は「備考」列にまとめている。
// 複数リリースでMWが判明している場合は合算値を記載（内訳は備考参照）。
// 並び順は「取り組みの規模」の目安（判明している投資額を優先、次いでMW規模）による概算順。
// 情報が一切確認できなかった企業（投資額・MWともに不明）は掲載していません。
window.PLAYERS_DATA = {
  "collectedAt": "2026-08-29",
  "periodLabel": "過去1年分のニュース検索（2025年9月〜2026年8月、試験収集）",
  "players": [
    { "company": "住友商事", "investmentTarget": "2,000億円", "mwDeveloping": "非公開", "mwOperational": "非公開", "notes": "2031年初頭までに国内蓄電池容量を50万kW超に拡大する方針。JR九州と合弁で九州全域を展開。", "sourceUrl": "https://www.nikkei.com/article/DGXZQOUC2753S0X20C24A3000000/" },
    { "company": "グリーンエナジー&カンパニー", "investmentTarget": "910億円", "mwDeveloping": "500MW", "mwOperational": "非公開", "notes": "6年間の投資計画、最大2GWh。9拠点が稼働中、100拠点超が新規開発中（2026年7月時点）。", "sourceUrl": "https://project.nikkeibp.co.jp/ms/atcl/19/news/00001/03843/?ST=msb" },
    { "company": "パワーエックス", "investmentTarget": "非該当", "mwDeveloping": "非公開", "mwOperational": "非該当", "notes": "機器メーカー・EPC。受注残高約890億円。上組向け特別高圧蓄電システム36台、伊藤忠と共同で30台受注等、多数案件に関与。", "sourceUrl": "https://www.ebc.com/jp/forex/301183.html" },
    { "company": "東急不動産（合同会社リブラ・8社共同）", "investmentTarget": "300億円", "mwDeveloping": "174MW", "mwOperational": "1.8MW", "notes": "特別高圧・全国6拠点、2027年度より順次運転開始予定。運開済みはTENOHA東松山。芙蓉総合リース等7社と共同組成。", "sourceUrl": "https://www.tokyu-land.co.jp/news/2026/001706.html" },
    { "company": "芙蓉総合リース", "investmentTarget": "非公開", "mwDeveloping": "176MW", "mwOperational": "非公開", "notes": "合同会社リブラへ出資参画（174MW）＋大分県臼杵市案件（RSアセットアドバイザーズと共同、2MW/8.34MWh、2026年5月運開予定）の合算。「しんかわ蓄電所」は商業運転開始済み。", "sourceUrl": "https://www.nikkei.com/nkd/disclosure/tdnr/20251104586671/" },
    { "company": "東京ガス", "investmentTarget": "非公開", "mwDeveloping": "800MW", "mwOperational": "300MW", "notes": "800MWは2030年度までの運用容量目標。運開済みは6拠点の合算値。2024年4月に本格参入を発表。", "sourceUrl": "https://www.tokyo-gas.co.jp/news/press/20240424-01.html" },
    { "company": "関西電力", "investmentTarget": "非公開", "mwDeveloping": "99MW", "mwOperational": "48MW", "notes": "開発中は大阪府岬町（396MWh・2028年2月運開予定・国内最大級）。運開済みは紀の川蓄電所（オリックスと共同、113MWh）。2030年代初頭に1GW規模を目指す方針。", "sourceUrl": "https://project.nikkeibp.co.jp/ms/atcl/19/news/00001/05103/?ST=msb" },
    { "company": "レノバ", "investmentTarget": "非公開", "mwDeveloping": "215MW", "mwOperational": "0MW", "notes": "苫小牧90MW・白老50MW・森町75MWの3拠点合算。2028年運開目標、未FID。長期脱炭素電源オークション採択案件。", "sourceUrl": "https://enehub.jp/news/%E3%83%AC%E3%83%8E%E3%83%90%E8%A8%88215mw%E8%93%84%E9%9B%BB%E6%89%80%E3%81%AE%E5%B9%B4%E9%96%93%E6%83%B3%E5%AE%9A%E5%88%A9%E7%9B%8A%E3%81%AF1015%E5%84%84%E5%86%86/" },
    { "company": "大阪ガス（Daigasグループ）", "investmentTarget": "非公開", "mwDeveloping": "22MW", "mwOperational": "13MW", "notes": "開発中は福島県須賀川市（95MWh）。運開済みは武雄蓄電所2MW＋千里蓄電所11MW（伊藤忠・東京センチュリーと共同）の合算。グループ全体で2030年度までに1,000MW目標。", "sourceUrl": "https://www.osakagas.co.jp/company/press/pr2026/1823595_60967.html" },
    { "company": "三菱地所", "investmentTarget": "非公開", "mwDeveloping": "67MW", "mwOperational": "非公開", "notes": "福岡県筑前町（230.1MWh、伊藤忠・東京センチュリーと共同、2028年1月運開予定）。日本初の系統用蓄電所ファンド「東京都蓄電所投資事業有限責任組合」へ出資。北海道千歳市案件にも参画（規模非公開）。", "sourceUrl": "https://www.mec.co.jp/news/detail/2026/06/01_mec260601_battery" },
    { "company": "伊藤忠商事", "investmentTarget": "非公開", "mwDeveloping": "67MW", "mwOperational": "非公開", "notes": "福岡県筑前町案件（三菱地所・東京センチュリーと共同）。東京都・東急不動産・ホンダ等10社が出資する蓄電池ファンドを80億円規模で組成。パワーエックスと共同で系統用蓄電システム30台を受注。", "sourceUrl": "https://www.itochu.co.jp/ja/news/press/2026/260601.html" },
    { "company": "東急株式会社", "investmentTarget": "140億円", "mwDeveloping": "46MW", "mwOperational": "非公開", "notes": "東京都支援事業に2年連続採択（184MWh）。2027年度までに稼働開始予定。東急パワーサプライが運用。", "sourceUrl": "https://www.tokyu.co.jp/company/news/detail/60796.html" },
    { "company": "ダイヘン×サンヴィレッジ", "investmentTarget": "非公開", "mwDeveloping": "非公開（2.4GWh）", "mwOperational": "非公開", "notes": "総容量2.4GWh・250拠点計画（2030年目標）、2026年度中に70件超新規開発計画。6案件が進行中。JC-STAR認証取得済み。", "sourceUrl": "https://solarjournal.jp/news/63503/" },
    { "company": "日本蓄電池", "investmentTarget": "非公開", "mwDeveloping": "非公開", "mwOperational": "2.0MW", "notes": "運開済みは岐阜市太郎丸蓄電所（2026年4月）。リコーリースより国内14拠点向けにPF融資49億円枠を調達。デジタルグリッドと連携。", "sourceUrl": "https://prtimes.jp/main/html/rd/p/000000057.000161802.html" },
    { "company": "テスホールディングス", "investmentTarget": "非該当", "mwDeveloping": "43MW", "mwOperational": "非該当", "notes": "EPC専業。長野県小諸市案件、約60億円受注・2028年3月納期。過去にも大型EPC受注実績あり（2025年9月・約130億円案件等）。", "sourceUrl": "https://www.media-ir.com/news/?p=176338" },
    { "company": "リコーリース", "investmentTarget": "非公開", "mwDeveloping": "非該当", "mwOperational": "非該当", "notes": "融資専業。日本蓄電池が開発する国内14カ所の高圧系統用蓄電施設向けに貸付限度額49億円のPF融資枠を設定。クラダシの栃木小山蓄電所にも2.9億円のPF融資を実行。", "sourceUrl": "https://infrato.jp/29968/" },
    { "company": "NTTアノードエナジー", "investmentTarget": "非公開", "mwDeveloping": "非公開", "mwOperational": "非公開", "notes": "2024年度に全国18システムの蓄電所構築を計画。経産省・東京都の補助金採択実績あり。", "sourceUrl": "https://project.nikkeibp.co.jp/ms/atcl/19/news/00001/03881/?ST=msb" },
    { "company": "ブルースカイエナジー", "investmentTarget": "非公開", "mwDeveloping": "非公開", "mwOperational": "10MW", "notes": "ヒューリックと6物件開発中（規模非公開）。全国100拠点目標（2029年）。みずほ証券と国内初の太陽光併設型蓄電池ファンドを組成。", "sourceUrl": "https://kyodonewsprwire.jp/release/202608134127" },
    { "company": "みずほリース", "investmentTarget": "非公開", "mwDeveloping": "非公開", "mwOperational": "2MW", "notes": "運開済みは武雄蓄電所（大阪ガス等と共同出資、8MWh、2025年11月商業運転開始）。森トラストの「琵琶湖蓄電所プロジェクト」へ出資。英国Fidra Energy Holdingsへの出資で海外展開も。", "sourceUrl": "https://www.mizuho-ls.co.jp/ja/news/news-1831124449967007827/main/0/link/240711_R.pdf" },
    { "company": "前田建設工業", "investmentTarget": "非公開", "mwDeveloping": "非公開", "mwOperational": "非公開", "notes": "長野県小海町案件（東芝エネルギーシステムズと共同、アグリゲーターは東芝ESS）。青森県三戸郡案件（RSアセットアドバイザーズと第1号案件、EPCを担当）。", "sourceUrl": "https://www.maeda.co.jp/news/2025/02/25/5628.html" },
    { "company": "イーレックス", "investmentTarget": "非公開", "mwDeveloping": "2MW", "mwOperational": "4MW", "notes": "開発中は第3号案件（京都府亀岡市）。運開済みは第1号（宮崎県串間市）・第2号（千葉県）の合算。アグリゲーション事業の一環で、卸電力・需給調整・容量市場の3市場取引で収益化。", "sourceUrl": "https://www.erex.co.jp/news/pressrelease/3567/" },
    { "company": "パシフィコ・エナジー", "investmentTarget": "非公開", "mwDeveloping": "非公開", "mwOperational": "4MW", "notes": "福岡県糸島市・北海道札幌市の2件の合算。国内初の商業運転（2023年6月）とされる。", "sourceUrl": "https://www.atpress.ne.jp/news/359613" },
    { "company": "菊水", "investmentTarget": "非公開", "mwDeveloping": "4.0MW", "mwOperational": "0MW", "notes": "和歌山県2.0MW＋栃木県2.0MWの合算。2027年夏運開予定。2026年8月に新規参入。", "sourceUrl": "https://prtimes.jp/main/html/rd/p/000000014.000110320.html" },
    { "company": "ミツウロコグリーンエネルギー", "investmentTarget": "非公開", "mwDeveloping": "非公開", "mwOperational": "3.1MW", "notes": "北海道北広島市の値。愛知県田原市・宮城県仙台市にも系統用蓄電池を保有するが規模非公開のため未合算。", "sourceUrl": "https://prtimes.jp/main/html/rd/p/000000165.000070816.html" },
    { "company": "Birdman", "investmentTarget": "非公開", "mwDeveloping": "非公開", "mwOperational": "1.9MW", "notes": "2号機取得（規模非公開）で資産規模が前期純資産の3倍超に拡大。運開済みは1号機（鳥取県境港市）のみ。RE100電力とアグリゲーション運用委託契約を締結。", "sourceUrl": "https://www.zaikei.co.jp/article/20260713/860821.html" },
    { "company": "エコスタイル", "investmentTarget": "非公開", "mwDeveloping": "非公開", "mwOperational": "不明", "notes": "低圧・6坪単位の分散型モデルを全国6エリアで展開。PowerXと提携し180MWh分開発との報道もあり。", "sourceUrl": "https://prtimes.jp/main/html/rd/p/000000395.000012501.html" }
  ]
};
