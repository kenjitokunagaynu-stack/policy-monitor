function spotFmtNum(n, digits) {
  if (n == null) return "-";
  return Number(n).toLocaleString("ja-JP", {
    minimumFractionDigits: digits || 0,
    maximumFractionDigits: digits || 0
  });
}

function spotEscapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function spotFmtJaDate(iso) {
  if (!iso) return "";
  var parts = iso.split(/[-T]/);
  if (parts.length < 3) return iso;
  return parts[0] + "年" + (+parts[1]) + "月" + (+parts[2]) + "日";
}

// Builds a single-line price chart (no bars, one axis). opts:
// { W, H, marginL, marginR, marginT, marginB, axisMin, axisMax, xLabelEvery, showAvgLine, title }
function buildPriceLineSvg(blocks, opts) {
  var W = opts.W, H = opts.H;
  var marginL = opts.marginL, marginR = opts.marginR, marginT = opts.marginT, marginB = opts.marginB;
  var plotW = W - marginL - marginR;
  var plotH = H - marginT - marginB;
  var axisMin = opts.axisMin, axisMax = opts.axisMax;
  var hasAvg = opts.showAvgLine && blocks[0].priceAvg30d != null;

  var n = blocks.length;
  var slotW = plotW / n;

  function xSlot(i) { return marginL + i * slotW; }
  function xSlotCenter(i) { return xSlot(i) + slotW / 2; }
  function yPrice(v) { return marginT + plotH - ((v - axisMin) / (axisMax - axisMin)) * plotH; }

  var tickCount = opts.tickCount || 5;
  var gridSvg = "", axisSvg = "";
  for (var t = 0; t <= tickCount; t++) {
    var val = axisMin + (axisMax - axisMin) * (t / tickCount);
    var y = yPrice(val);
    gridSvg += '<line x1="' + marginL + '" x2="' + (marginL + plotW) + '" y1="' + y + '" y2="' + y + '" class="grid-line" />';
    if (opts.showAxisLabels !== false) {
      axisSvg += '<text x="' + (marginL - 8) + '" y="' + (y + 4) + '" text-anchor="end" class="axis-label small">' + spotFmtNum(val, 1) + '</text>';
    }
  }

  var zeroSvg = "";
  if (axisMin < 0 && axisMax > 0) {
    var zy = yPrice(0);
    zeroSvg = '<line x1="' + marginL + '" x2="' + (marginL + plotW) + '" y1="' + zy + '" y2="' + zy + '" class="axis-zero-line" />';
  }

  var xAxisSvg = "";
  if (opts.xLabelEvery) {
    blocks.forEach(function (b, i) {
      if (b.block % opts.xLabelEvery === 1) {
        var startLabel = b.label.split("~")[0];
        xAxisSvg += '<text x="' + xSlotCenter(i) + '" y="' + (marginT + plotH + 18) + '" text-anchor="middle" class="axis-label small">' + startLabel + '</text>';
      }
    });
  }

  function buildLine(getY) {
    return blocks.map(function (b, i) { return xSlotCenter(i) + "," + getY(b); }).join(" ");
  }
  var priceLine = buildLine(function (b) { return yPrice(b.price); });
  var avgLine = hasAvg ? buildLine(function (b) { return yPrice(b.priceAvg30d); }) : "";

  var markersSvg = "";
  blocks.forEach(function (b, i) {
    markersSvg += '<circle cx="' + xSlotCenter(i) + '" cy="' + yPrice(b.price) + '" r="2" class="price-dot" />';
  });

  var hoverSvg = "";
  blocks.forEach(function (b, i) {
    hoverSvg += '<rect x="' + xSlot(i) + '" y="' + marginT + '" width="' + slotW + '" height="' + plotH + '" class="hover-col" data-idx="' + i + '" />';
  });

  var titleSvg = opts.title
    ? '<text x="' + marginL + '" y="14" class="chart-title-svg">' + spotEscapeHtml(opts.title) + '</text>'
    : "";

  var svg = ""
    + '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" preserveAspectRatio="xMidYMid meet" role="img" aria-label="' + spotEscapeHtml(opts.title || "スポット市場価格") + '">'
    + titleSvg
    + '<g class="grid">' + gridSvg + '</g>'
    + zeroSvg
    + '<line x1="' + marginL + '" x2="' + marginL + '" y1="' + marginT + '" y2="' + (marginT + plotH) + '" class="axis-baseline" />'
    + '<line x1="' + (marginL + plotW) + '" x2="' + (marginL + plotW) + '" y1="' + marginT + '" y2="' + (marginT + plotH) + '" class="axis-baseline" />'
    + '<line x1="' + marginL + '" x2="' + (marginL + plotW) + '" y1="' + (marginT + plotH) + '" y2="' + (marginT + plotH) + '" class="axis-baseline" />'
    + (hasAvg ? '<polyline points="' + avgLine + '" class="line line-avg-price" />' : '')
    + '<polyline points="' + priceLine + '" class="line line-3" />'
    + markersSvg
    + '<g>' + axisSvg + '</g>'
    + '<g>' + xAxisSvg + '</g>'
    + '<g class="hover-cols">' + hoverSvg + '</g>'
    + '</svg>';

  return svg;
}

function attachSpotTooltip(container, blocks, tooltip, hasAvg) {
  var cols = container.querySelectorAll(".hover-col");
  cols.forEach(function (col) {
    col.addEventListener("mousemove", function (evt) {
      var idx = +col.getAttribute("data-idx");
      var b = blocks[idx];
      var rows = spotTtRow("var(--series-3)", "価格", spotFmtNum(b.price, 2) + " 円/kWh");
      if (hasAvg && b.priceAvg30d != null) {
        rows += spotTtRow("var(--chart-ink)", "過去30日平均", spotFmtNum(b.priceAvg30d, 2) + " 円/kWh");
      }
      tooltip.innerHTML = '<div class="tt-time">' + spotEscapeHtml(b.label) + '</div>' + rows;
      tooltip.style.display = "block";
      var left = evt.clientX + 16;
      var top = evt.clientY + 16;
      if (left + 210 > window.innerWidth) left = evt.clientX - 226;
      if (top + 160 > window.innerHeight) top = evt.clientY - 170;
      tooltip.style.left = left + "px";
      tooltip.style.top = top + "px";
    });
    col.addEventListener("mouseleave", function () {
      tooltip.style.display = "none";
    });
  });
}

function spotTtRow(color, label, val) {
  return '<div class="tt-row"><span class="tt-label"><span class="tt-dot" style="background:' + color + '"></span>' + spotEscapeHtml(label) + '</span><span class="tt-val">' + val + '</span></div>';
}

// 平均・最高・最低・3時間値差を、直近30日平均と比較して所感コメントを生成
function computeSpotAnalysis(series) {
  var comment;
  var hasAvg = series.avg30d != null;
  if (hasAvg) {
    var avgDiff = series.avg - series.avg30d;
    var avgPct = series.avg30d !== 0 ? (avgDiff / Math.abs(series.avg30d)) * 100 : 0;
    var avgTrend = Math.abs(avgPct) < 3 ? "横ばい" : (avgPct > 0 ? "上昇" : "下落");
    comment = "平均価格は過去30日平均比" + (avgDiff >= 0 ? "+" : "") + spotFmtNum(avgDiff, 2) + "円/kWh（"
      + (avgPct >= 0 ? "+" : "") + spotFmtNum(avgPct, 1) + "%、" + avgTrend + "）。";

    if (series.spread3h != null && series.spread30dAvg != null) {
      var spreadDiff = series.spread3h - series.spread30dAvg;
      var spreadPct = series.spread30dAvg !== 0 ? (spreadDiff / Math.abs(series.spread30dAvg)) * 100 : 0;
      var spreadTrend = Math.abs(spreadPct) < 5 ? "同水準" : (spreadPct > 0 ? "拡大" : "縮小");
      comment += "3時間値差は過去30日平均比" + (spreadDiff >= 0 ? "+" : "") + spotFmtNum(spreadDiff, 2) + "円/kWh（" + spreadTrend + "）。";
    }
  } else {
    comment = "過去30日平均データがないため比較できません。";
  }
  return {
    avg: series.avg, max: series.max, min: series.min, spread3h: series.spread3h,
    comment: comment
  };
}

function buildSpotAnalysisHtml(a) {
  return ''
    + '<div class="chart-analysis">'
    + '<div class="analysis-metrics">'
    + '<div class="analysis-item"><span class="analysis-label">平均価格</span><span class="analysis-val">' + spotFmtNum(a.avg, 2) + ' 円/kWh</span></div>'
    + '<div class="analysis-item"><span class="analysis-label">最高価格</span><span class="analysis-val">' + spotFmtNum(a.max, 2) + ' 円/kWh</span></div>'
    + '<div class="analysis-item"><span class="analysis-label">最低価格</span><span class="analysis-val">' + spotFmtNum(a.min, 2) + ' 円/kWh</span></div>'
    + '<div class="analysis-item"><span class="analysis-label">3時間値差</span><span class="analysis-val">' + (a.spread3h != null ? spotFmtNum(a.spread3h, 2) + ' 円/kWh' : '-') + '</span></div>'
    + '</div>'
    + '<p class="analysis-comment">' + spotEscapeHtml(a.comment) + '</p>'
    + '</div>';
}

function spotAxisRange(blocksArrays) {
  var min = 0, max = 0;
  blocksArrays.forEach(function (blocks) {
    blocks.forEach(function (b) {
      if (b.price != null) { min = Math.min(min, b.price); max = Math.max(max, b.price); }
      if (b.priceAvg30d != null) { min = Math.min(min, b.priceAvg30d); max = Math.max(max, b.priceAvg30d); }
    });
  });
  var axisMax = Math.ceil((max + 1) / 5) * 5;
  var axisMin = min >= 0 ? 0 : Math.floor((min - 1) / 5) * 5;
  return { axisMin: axisMin, axisMax: axisMax };
}

var spotAreaScale = { axisMin: 0, axisMax: 0 };
function spotEnlargeArea(idx) {
  var data = window.SPOT_DATA;
  var area = data.areaOrder[idx];
  var series = data.areaBlocks[area];
  if (!series) return;
  var svg = buildPriceLineSvg(series.blocks, {
    W: 980, H: 440, marginL: 60, marginR: 30, marginT: 26, marginB: 50,
    axisMin: spotAreaScale.axisMin, axisMax: spotAreaScale.axisMax,
    xLabelEvery: 4, showAvgLine: true, title: series.label
  });
  var body = document.getElementById("spot-modal-body");
  body.innerHTML = svg + buildSpotAnalysisHtml(computeSpotAnalysis(series));
  document.getElementById("spot-modal-overlay").classList.add("open");
  var tooltip = document.getElementById("spot-tooltip");
  attachSpotTooltip(body, series.blocks, tooltip, true);
}

function spotCloseModal() {
  document.getElementById("spot-modal-overlay").classList.remove("open");
}

function renderSpotChart() {
  var data = window.SPOT_DATA;
  var root = document.getElementById("spot-root");
  if (!data || !data.national || !data.national.blocks || !data.national.blocks.length) {
    root.innerHTML = '<div class="empty-state">データがまだありません。</div>';
    return;
  }

  var national = data.national;
  var dateEl = document.getElementById("spot-date");
  if (dateEl) dateEl.textContent = spotFmtJaDate(data.targetDate) + "（" + spotFmtJaDate(data.fetchedAt) + "取得）";
  var sourceLink = document.getElementById("spot-source-link");
  if (sourceLink) sourceLink.href = data.sourceUrl;
  var avgWindowEl = document.getElementById("spot-avg-window");
  if (avgWindowEl && data.avgWindowLabel) avgWindowEl.textContent = data.avgWindowLabel;

  var range = spotAxisRange([national.blocks]);

  var svg = buildPriceLineSvg(national.blocks, {
    W: 1180, H: 420, marginL: 56, marginR: 30, marginT: 24, marginB: 56,
    axisMin: range.axisMin, axisMax: range.axisMax,
    xLabelEvery: 4, showAvgLine: true
  });
  root.innerHTML = svg;

  var tooltip = document.getElementById("spot-tooltip");
  attachSpotTooltip(root, national.blocks, tooltip, true);

  var analysisEl = document.getElementById("spot-analysis");
  if (analysisEl) analysisEl.innerHTML = buildSpotAnalysisHtml(computeSpotAnalysis(national));

  renderSpotTable(national);
  renderSpotAreaGrid(data);
}

function renderSpotAreaGrid(data) {
  var section = document.getElementById("spot-area-section");
  if (!data.areaBlocks || !data.areaOrder) {
    if (section) section.style.display = "none";
    return;
  }
  var grid = document.getElementById("spot-area-grid");

  var allBlocksArrays = data.areaOrder
    .map(function (area) { return data.areaBlocks[area]; })
    .filter(Boolean)
    .map(function (series) { return series.blocks; });
  var range = spotAxisRange(allBlocksArrays);
  spotAreaScale.axisMin = range.axisMin;
  spotAreaScale.axisMax = range.axisMax;

  var tooltip = document.getElementById("spot-tooltip");

  var html = data.areaOrder.map(function (area, idx) {
    if (!data.areaBlocks[area]) return "";
    return '<div class="area-card">'
      + '<button class="area-enlarge-btn" onclick="spotEnlargeArea(' + idx + ')" aria-label="拡大表示" title="拡大表示">⤢</button>'
      + '<div id="spot-area-' + idx + '"></div>'
      + '<div id="spot-area-analysis-' + idx + '"></div>'
      + '</div>';
  }).join("");
  grid.innerHTML = html;

  data.areaOrder.forEach(function (area, idx) {
    var series = data.areaBlocks[area];
    if (!series) return;
    var container = document.getElementById("spot-area-" + idx);
    var svg = buildPriceLineSvg(series.blocks, {
      W: 360, H: 190, marginL: 40, marginR: 16, marginT: 20, marginB: 26,
      axisMin: range.axisMin, axisMax: range.axisMax,
      tickCount: 3, xLabelEvery: 12, showAvgLine: true,
      title: series.label
    });
    container.innerHTML = svg;
    attachSpotTooltip(container, series.blocks, tooltip, true);

    var analysisEl = document.getElementById("spot-area-analysis-" + idx);
    if (analysisEl) analysisEl.innerHTML = buildSpotAnalysisHtml(computeSpotAnalysis(series));
  });
}

function renderSpotTable(series) {
  var hasAvg = series.blocks[0].priceAvg30d != null;
  var tableWrap = document.getElementById("spot-table-wrap");
  var rows = series.blocks.map(function (b) {
    return '<tr>'
      + '<td>' + spotEscapeHtml(b.label) + '</td>'
      + '<td>' + spotFmtNum(b.price, 2) + '</td>'
      + (hasAvg ? '<td>' + spotFmtNum(b.priceAvg30d, 2) + '</td>' : '')
      + '</tr>';
  }).join("");
  tableWrap.innerHTML = ''
    + '<table class="data-table">'
    + '<thead><tr>'
    + '<th>コマ</th><th>価格<br>[円/kWh]</th>'
    + (hasAvg ? '<th>過去30日平均<br>[円/kWh]</th>' : '')
    + '</tr></thead><tbody>' + rows + '</tbody></table>';
}

function spotToggleView(view) {
  var chartWrap = document.getElementById("spot-chart-wrap");
  var tableWrap = document.getElementById("spot-table-wrap");
  var btnChart = document.getElementById("spot-btn-chart");
  var btnTable = document.getElementById("spot-btn-table");
  if (view === "table") {
    chartWrap.classList.add("hidden");
    tableWrap.classList.add("visible");
    btnChart.classList.remove("active");
    btnTable.classList.add("active");
  } else {
    chartWrap.classList.remove("hidden");
    tableWrap.classList.remove("visible");
    btnChart.classList.add("active");
    btnTable.classList.remove("active");
  }
}
