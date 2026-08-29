function newsEscapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function newsFmtDate(iso) {
  if (!iso) return "";
  var parts = iso.split("-");
  if (parts.length !== 3) return iso;
  return parts[0] + "年" + (+parts[1]) + "月" + (+parts[2]) + "日";
}

var newsActiveGenre = "all";

function renderNews() {
  var data = window.NEWS_DATA;
  var listRoot = document.getElementById("news-list");
  var tabsRoot = document.getElementById("news-genre-tabs");
  var periodEl = document.getElementById("news-period");
  if (!data || !data.items || !data.items.length) {
    listRoot.innerHTML = '<div class="empty-state">データがまだありません。</div>';
    return;
  }

  if (periodEl) periodEl.textContent = data.periodLabel || "";

  var genreMap = {};
  data.genres.forEach(function (g) { genreMap[g.id] = g.label; });

  tabsRoot.innerHTML = data.genres.map(function (g) {
    var count = g.id === "all" ? data.items.length : data.items.filter(function (it) { return it.genre === g.id; }).length;
    var activeClass = g.id === newsActiveGenre ? " active" : "";
    return '<button class="genre-tab' + activeClass + '" data-genre="' + g.id + '" onclick="newsSetGenre(\'' + g.id + '\')">'
      + newsEscapeHtml(g.label) + '<span class="genre-count">' + count + '</span></button>';
  }).join("");

  var items = data.items.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  var filtered = newsActiveGenre === "all" ? items : items.filter(function (it) { return it.genre === newsActiveGenre; });

  if (!filtered.length) {
    listRoot.innerHTML = '<div class="empty-state">該当するニュースがありません。</div>';
    return;
  }

  listRoot.innerHTML = filtered.map(function (item, idx) {
    var topicsHtml = (item.topics && item.topics.length)
      ? item.topics.map(function (t) {
          return '<div class="topic">'
            + '<div class="topic-head">'
            + '<span class="topic-theme">' + newsEscapeHtml(t.theme) + '</span>'
            + '<span class="topic-conclusion">' + newsEscapeHtml(t.conclusion) + '</span>'
            + '</div>'
            + (t.detail ? '<p class="topic-detail">' + newsEscapeHtml(t.detail) + '</p>' : '')
            + '</div>';
        }).join("")
      : "";
    var genreLabel = genreMap[item.genre] || item.genre;
    return (
      '<div class="item news-item" id="news-item-' + idx + '">'
      + '<button class="item-summary-toggle" onclick="toggleNewsItem(' + idx + ')">'
      + '<span>'
      + '<span class="news-meta"><span class="genre-badge genre-' + newsEscapeHtml(item.genre) + '">' + newsEscapeHtml(genreLabel) + '</span>'
      + '<span class="date">' + newsEscapeHtml(newsFmtDate(item.date)) + '</span></span>'
      + '<span class="title">' + newsEscapeHtml(item.title) + '</span>'
      + '<div class="news-subtitle">' + newsEscapeHtml(item.subtitle) + '</div>'
      + '</span>'
      + '<span class="chevron">▶</span>'
      + '</button>'
      + '<div class="item-detail">'
      + topicsHtml
      + '<div class="news-source">出典: ' + newsEscapeHtml(item.sourceName) + '</div>'
      + '<a class="source-link" href="' + newsEscapeHtml(item.sourceUrl) + '" target="_blank" rel="noopener">元記事を見る ↗</a>'
      + '</div>'
      + '</div>'
    );
  }).join("");
}

function newsSetGenre(genreId) {
  newsActiveGenre = genreId;
  renderNews();
}

function toggleNewsItem(idx) {
  var el = document.getElementById("news-item-" + idx);
  if (el) el.classList.toggle("open");
}
