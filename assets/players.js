function plEscapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
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

  var rows = data.players.map(function (p) {
    return '<tr>'
      + '<td class="pl-company" data-label="会社名">' + plEscapeHtml(p.company) + '</td>'
      + '<td class="pl-num" data-label="投資額目標">' + plEscapeHtml(p.investmentTarget) + '</td>'
      + '<td class="pl-num" data-label="開発中MW">' + plEscapeHtml(p.mwDeveloping) + '</td>'
      + '<td class="pl-num" data-label="運開済みMW">' + plEscapeHtml(p.mwOperational) + '</td>'
      + '<td class="pl-notes" data-label="備考">' + plEscapeHtml(p.notes) + '</td>'
      + '<td class="pl-source" data-label="出典"><a class="source-link small" href="' + plEscapeHtml(p.sourceUrl) + '" target="_blank" rel="noopener">出典 ↗</a></td>'
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
