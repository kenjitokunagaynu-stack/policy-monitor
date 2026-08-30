function plEscapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function plFmtDate(iso) {
  if (!iso) return "";
  var parts = iso.split("-");
  if (parts.length !== 3) return iso;
  return parts[0] + "年" + (+parts[1]) + "月" + (+parts[2]) + "日";
}

// "東急不動産（合同会社リブラ・8社共同）" -> "東急不動産" / "ダイヘン×サンヴィレッジ" -> "ダイヘン"
function plMatchKey(company) {
  var s = String(company || "");
  var idx = -1;
  ["（", "×"].forEach(function (ch) {
    var i = s.indexOf(ch);
    if (i !== -1 && (idx === -1 || i < idx)) idx = i;
  });
  return idx === -1 ? s : s.slice(0, idx);
}

function plNewsForCompany(matchKey) {
  var newsData = window.NEWS_DATA;
  if (!newsData || !newsData.items) return [];
  return newsData.items
    .filter(function (it) { return it.companies && it.companies.indexOf(matchKey) !== -1; })
    .slice()
    .sort(function (a, b) { return a.date < b.date ? 1 : -1; });
}

function renderPlayers() {
  var data = window.PLAYERS_DATA;
  var root = document.getElementById("players-list");
  var periodEl = document.getElementById("players-period");
  if (!data || !data.players || !data.players.length) {
    root.innerHTML = '<div class="empty-state">データがまだありません。</div>';
    return;
  }
  if (periodEl) periodEl.textContent = data.periodLabel || "";

  var rows = data.players.map(function (p, idx) {
    var matchKey = plMatchKey(p.company);
    var newsItems = plNewsForCompany(matchKey);
    var countBadge = newsItems.length
      ? '<span class="pl-news-count">' + newsItems.length + '</span>'
      : '';

    var detailHtml;
    if (newsItems.length) {
      detailHtml = newsItems.map(function (it) {
        return ''
          + '<div class="pl-news-item">'
          + '<div class="pl-news-head"><span class="date">' + plEscapeHtml(plFmtDate(it.date)) + '</span>'
          + '<span class="title">' + plEscapeHtml(it.title) + '</span></div>'
          + '<div class="pl-news-subtitle">' + plEscapeHtml(it.subtitle) + '</div>'
          + '<a class="source-link small" href="' + plEscapeHtml(it.sourceUrl) + '" target="_blank" rel="noopener">元記事を見る ↗</a>'
          + '</div>';
      }).join("");
    } else {
      detailHtml = '<div class="pl-news-empty">関連する業界ニュース項目は見つかりませんでした。</div>';
    }

    return '<tr>'
      + '<td class="pl-company" data-label="会社名">'
      + '<button class="pl-company-toggle" onclick="plToggleRow(' + idx + ')">'
      + '<span class="chevron" id="pl-chevron-' + idx + '">▶</span>'
      + '<span>' + plEscapeHtml(p.company) + '</span>' + countBadge
      + '</button>'
      + '</td>'
      + '<td class="pl-num" data-label="投資額目標">' + plEscapeHtml(p.investmentTarget) + '</td>'
      + '<td class="pl-num" data-label="開発中MW">' + plEscapeHtml(p.mwDeveloping) + '</td>'
      + '<td class="pl-num" data-label="運開済みMW">' + plEscapeHtml(p.mwOperational) + '</td>'
      + '<td class="pl-notes" data-label="備考">' + plEscapeHtml(p.notes) + '</td>'
      + '<td class="pl-source" data-label="出典"><a class="source-link small" href="' + plEscapeHtml(p.sourceUrl) + '" target="_blank" rel="noopener">出典 ↗</a></td>'
      + '</tr>'
      + '<tr class="pl-detail-row" id="pl-detail-row-' + idx + '">'
      + '<td class="pl-detail-cell" colspan="6">'
      + '<div class="pl-detail-title">系統用蓄電池に関するニュース（過去1年、' + newsItems.length + '件）</div>'
      + detailHtml
      + '</td>'
      + '</tr>';
  }).join("");

  root.innerHTML = ''
    + '<div class="table-scroll">'
    + '<table class="data-table players-table">'
    + '<thead><tr>'
    + '<th>会社名</th><th>投資額目標</th><th>開発中MW</th><th>運開済みMW</th><th>備考</th><th>出典</th>'
    + '</tr></thead>'
    + '<tbody>' + rows + '</tbody>'
    + '</table>'
    + '</div>';
}

function plToggleRow(idx) {
  var row = document.getElementById("pl-detail-row-" + idx);
  var chevron = document.getElementById("pl-chevron-" + idx);
  if (!row) return;
  var open = row.classList.toggle("open");
  if (chevron) chevron.style.transform = open ? "rotate(90deg)" : "rotate(0deg)";
}
