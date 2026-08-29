function fmtDate(iso) {
  if (!iso) return "";
  var d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
}

function escapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

var policyActiveSource = "all";

function renderIndex() {
  var data = window.APP_DATA;
  var listRoot = document.getElementById("policy-list");
  var tabsRoot = document.getElementById("policy-source-tabs");
  var periodEl = document.getElementById("policy-period");
  if (!data || !data.items || !data.items.length) {
    listRoot.innerHTML = '<div class="empty-state">データがまだありません。</div>';
    return;
  }

  if (periodEl) periodEl.textContent = data.periodLabel || "";

  var sourceMap = {};
  data.sources.forEach(function (s) { sourceMap[s.id] = s; });

  var tabDefs = [{ id: "all", label: "すべて" }].concat(data.sources.map(function (s) {
    return { id: s.id, label: s.label };
  }));

  tabsRoot.innerHTML = tabDefs.map(function (t) {
    var count = t.id === "all" ? data.items.length : data.items.filter(function (it) { return it.source === t.id; }).length;
    var activeClass = t.id === policyActiveSource ? " active" : "";
    return '<button class="genre-tab' + activeClass + '" data-source="' + t.id + '" onclick="policySetSource(\'' + t.id + '\')">'
      + escapeHtml(t.label) + '<span class="genre-count">' + count + '</span></button>';
  }).join("");

  var items = data.items.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  var filtered = policyActiveSource === "all" ? items : items.filter(function (it) { return it.source === policyActiveSource; });

  if (!filtered.length) {
    listRoot.innerHTML = '<div class="empty-state">該当する情報がありません。</div>';
    return;
  }

  listRoot.innerHTML = filtered.map(function (item, idx) {
    var topicsHtml = (item.topics && item.topics.length)
      ? item.topics.map(function (t) {
          return '<div class="topic">'
            + '<div class="topic-head">'
            + '<span class="topic-theme">' + escapeHtml(t.theme) + '</span>'
            + '<span class="topic-conclusion">' + escapeHtml(t.conclusion) + '</span>'
            + '</div>'
            + (t.detail ? '<p class="topic-detail">' + escapeHtml(t.detail) + '</p>' : '')
            + '</div>';
        }).join("")
      : "";
    var srcLabel = (sourceMap[item.source] && sourceMap[item.source].label) || item.source;
    return (
      '<div class="item news-item" id="policy-item-' + idx + '">'
      + '<button class="item-summary-toggle" onclick="togglePolicyItem(' + idx + ')">'
      + '<span>'
      + '<span class="news-meta"><span class="genre-badge genre-' + escapeHtml(item.source) + '">' + escapeHtml(srcLabel) + '</span>'
      + '<span class="date">' + escapeHtml(fmtDate(item.date)) + '</span></span>'
      + '<span class="title">' + escapeHtml(item.title) + '</span>'
      + '<div class="news-subtitle">' + escapeHtml(item.subtitle) + '</div>'
      + '</span>'
      + '<span class="chevron">▶</span>'
      + '</button>'
      + '<div class="item-detail">'
      + topicsHtml
      + '<div class="news-source">出典: ' + escapeHtml(item.sourceName) + '</div>'
      + '<a class="source-link" href="' + escapeHtml(item.sourceUrl) + '" target="_blank" rel="noopener">元の資料ページを見る ↗</a>'
      + '</div>'
      + '</div>'
    );
  }).join("");
}

function policySetSource(sourceId) {
  policyActiveSource = sourceId;
  renderIndex();
}

function togglePolicyItem(idx) {
  var el = document.getElementById("policy-item-" + idx);
  if (el) el.classList.toggle("open");
}
