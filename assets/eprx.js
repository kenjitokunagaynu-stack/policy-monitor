function fmtNum(n, digits) {
  if (n == null) return "-";
  return Number(n).toLocaleString("ja-JP", {
    minimumFractionDigits: digits || 0,
    maximumFractionDigits: digits || 0
  });
}

function eprxEscapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function fmtJaDate(iso) {
  if (!iso) return "";
  var parts = iso.split("-");
  if (parts.length !== 3) return iso;
  return parts[0] + "年" + (+parts[1]) + "月" + (+parts[2]) + "日";
}

// Builds a bar+line combo chart's SVG markup and hover-column metadata.
// opts: { W, H, marginL, marginR, marginT, marginB, mwAxisMax, priceAxisMax, xLabelEvery, showAvgLines, title }
function buildComboSvg(blocks, opts) {
  var W = opts.W, H = opts.H;
  var marginL = opts.marginL, marginR = opts.marginR, marginT = opts.marginT, marginB = opts.marginB;
  var plotW = W - marginL - marginR;
  var plotH = H - marginT - marginB;
  var hasAvg = opts.showAvgLines && blocks[0].boshuAvg30d != null;

  var mwAxisMax = opts.mwAxisMax;
  var priceAxisMax = opts.priceAxisMax;
  var mwAxisMin = 0;

  var n = blocks.length;
  var slotW = plotW / n;
  var barGroupW = slotW * 0.68;
  var barW = barGroupW / 2;

  function xSlot(i) { return marginL + i * slotW; }
  function xSlotCenter(i) { return xSlot(i) + slotW / 2; }
  function yMw(v) { return marginT + plotH - ((v - mwAxisMin) / (mwAxisMax - mwAxisMin)) * plotH; }
  function yPrice(v) { return marginT + plotH - (v / priceAxisMax) * plotH; }

  var mwTickCount = opts.mwTickCount || 5;
  var gridSvg = "", leftAxisSvg = "";
  for (var t = 0; t <= mwTickCount; t++) {
    var val = mwAxisMin + (mwAxisMax - mwAxisMin) * (t / mwTickCount);
    var y = yMw(val);
    gridSvg += '<line x1="' + marginL + '" x2="' + (marginL + plotW) + '" y1="' + y + '" y2="' + y + '" class="grid-line" />';
    if (opts.showAxisLabels !== false) {
      leftAxisSvg += '<text x="' + (marginL - 8) + '" y="' + (y + 4) + '" text-anchor="end" class="axis-label small">' + fmtNum(val) + '</text>';
    }
  }
  var priceTickCount = opts.priceTickCount || mwTickCount;
  var rightAxisSvg = "";
  if (opts.showAxisLabels !== false) {
    for (var t2 = 0; t2 <= priceTickCount; t2++) {
      var pval = priceAxisMax * (t2 / priceTickCount);
      var py = yPrice(pval);
      rightAxisSvg += '<text x="' + (marginL + plotW + 8) + '" y="' + (py + 4) + '" text-anchor="start" class="axis-label small">' + fmtNum(pval, 1) + '</text>';
    }
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

  var barsSvg = "";
  blocks.forEach(function (b, i) {
    var gx = xSlotCenter(i) - barGroupW / 2;
    var boshuY = yMw(b.boshu);
    var ouatsuY = yMw(b.ouatsu);
    barsSvg += '<rect x="' + gx + '" y="' + boshuY + '" width="' + barW + '" height="' + Math.max(0, marginT + plotH - boshuY) + '" rx="1.5" class="bar bar-1" data-idx="' + i + '" />';
    barsSvg += '<rect x="' + (gx + barW) + '" y="' + ouatsuY + '" width="' + barW + '" height="' + Math.max(0, marginT + plotH - ouatsuY) + '" rx="1.5" class="bar bar-2" data-idx="' + i + '" />';
  });

  function buildLine(getY) {
    return blocks.map(function (b, i) { return xSlotCenter(i) + "," + getY(b); }).join(" ");
  }
  var saikouLine = buildLine(function (b) { return yPrice(b.saikou); });
  var heikinLine = buildLine(function (b) { return yPrice(b.heikin); });
  var boshuAvgLine = hasAvg ? buildLine(function (b) { return yMw(b.boshuAvg30d); }) : "";
  var heikinAvgLine = hasAvg ? buildLine(function (b) { return yPrice(b.heikinAvg30d); }) : "";

  var hoverSvg = "";
  blocks.forEach(function (b, i) {
    hoverSvg += '<rect x="' + xSlot(i) + '" y="' + marginT + '" width="' + slotW + '" height="' + plotH + '" class="hover-col" data-idx="' + i + '" />';
  });

  var titleSvg = opts.title
    ? '<text x="' + marginL + '" y="14" class="chart-title-svg">' + eprxEscapeHtml(opts.title) + '</text>'
    : "";

  var svg = ""
    + '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" preserveAspectRatio="xMidYMid meet" role="img" aria-label="' + eprxEscapeHtml(opts.title || "約定結果") + '">'
    + titleSvg
    + '<g class="grid">' + gridSvg + '</g>'
    + '<line x1="' + marginL + '" x2="' + marginL + '" y1="' + marginT + '" y2="' + (marginT + plotH) + '" class="axis-baseline" />'
    + '<line x1="' + (marginL + plotW) + '" x2="' + (marginL + plotW) + '" y1="' + marginT + '" y2="' + (marginT + plotH) + '" class="axis-baseline" />'
    + '<line x1="' + marginL + '" x2="' + (marginL + plotW) + '" y1="' + (marginT + plotH) + '" y2="' + (marginT + plotH) + '" class="axis-baseline" />'
    + '<g>' + barsSvg + '</g>'
    + (hasAvg ? '<polyline points="' + boshuAvgLine + '" class="line line-avg-mw" />' : '')
    + (hasAvg ? '<polyline points="' + heikinAvgLine + '" class="line line-avg-price" />' : '')
    + '<polyline points="' + saikouLine + '" class="line line-3" />'
    + '<polyline points="' + heikinLine + '" class="line line-4" />'
    + '<g>' + leftAxisSvg + '</g>'
    + '<g>' + rightAxisSvg + '</g>'
    + '<g>' + xAxisSvg + '</g>'
    + '<g class="hover-cols">' + hoverSvg + '</g>'
    + '</svg>';

  return svg;
}

function attachChartTooltip(container, blocks, labels, tooltip, hasAvg) {
  var cols = container.querySelectorAll(".hover-col");
  cols.forEach(function (col) {
    col.addEventListener("mousemove", function (evt) {
      var idx = +col.getAttribute("data-idx");
      var b = blocks[idx];
      var rows = ''
        + ttRow("var(--series-1)", labels.boshu, fmtNum(b.boshu) + " MW")
        + ttRow("var(--series-2)", labels.ouatsu, fmtNum(b.ouatsu, 1) + " MW")
        + ttRow("var(--series-3)", labels.saikou, fmtNum(b.saikou, 2) + " 円")
        + ttRow("var(--series-4)", labels.heikin, fmtNum(b.heikin, 2) + " 円");
      if (hasAvg && b.boshuAvg30d != null) {
        rows += ttRow("var(--chart-ink)", labels.boshuAvg30d, fmtNum(b.boshuAvg30d, 1) + " MW");
        rows += ttRow("var(--chart-ink)", labels.heikinAvg30d, fmtNum(b.heikinAvg30d, 2) + " 円");
      }
      tooltip.innerHTML = '<div class="tt-time">' + eprxEscapeHtml(b.label) + '</div>' + rows;
      tooltip.style.display = "block";
      // fixed positioning: coordinates are viewport-relative, so this works
      // the same regardless of which chart (main or an area mini-chart) fired the event.
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

function ttRow(color, label, val) {
  return '<div class="tt-row"><span class="tt-label"><span class="tt-dot" style="background:' + color + '"></span>' + eprxEscapeHtml(label) + '</span><span class="tt-val">' + val + '</span></div>';
}

function renderEprxChart() {
  var data = window.EPRX_DATA;
  var root = document.getElementById("eprx-root");
  if (!data || !data.blocks || !data.blocks.length) {
    root.innerHTML = '<div class="empty-state">データがまだありません。</div>';
    return;
  }

  var blocks = data.blocks;
  var dateEl = document.getElementById("eprx-date");
  if (dateEl) dateEl.textContent = fmtJaDate(data.targetDate) + "（" + fmtJaDate(data.fetchedAt) + "時点取得）";
  var productEl = document.getElementById("eprx-product");
  if (productEl) productEl.textContent = data.product;
  var sourceLink = document.getElementById("eprx-source-link");
  if (sourceLink) sourceLink.href = data.sourceUrl;
  var avgWindowEl = document.getElementById("eprx-avg-window");
  if (avgWindowEl && data.avgWindowLabel) avgWindowEl.textContent = data.avgWindowLabel;

  var hasAvg = blocks[0].boshuAvg30d != null;
  var mwMax = 0, priceMax = 0;
  blocks.forEach(function (b) {
    mwMax = Math.max(mwMax, b.boshu, b.ouatsu, hasAvg ? b.boshuAvg30d : 0);
    priceMax = Math.max(priceMax, b.saikou, b.heikin, hasAvg ? b.heikinAvg30d : 0);
  });
  var mwAxisMax = Math.ceil(mwMax / 200) * 200 + 200;
  var priceAxisMax = Math.ceil(priceMax / 5) * 5 + 5;

  var svg = buildComboSvg(blocks, {
    W: 1180, H: 480, marginL: 64, marginR: 64, marginT: 24, marginB: 56,
    mwAxisMax: mwAxisMax, priceAxisMax: priceAxisMax,
    xLabelEvery: 4, showAvgLines: true
  });
  root.innerHTML = svg;

  var tooltip = document.getElementById("eprx-tooltip");
  attachChartTooltip(root, blocks, data.labels, tooltip, hasAvg);

  renderEprxTable(data);
  renderEprxAreaGrid(data);
}

function renderEprxAreaGrid(data) {
  var section = document.getElementById("eprx-area-section");
  if (!data.areaBlocks || !data.areaOrder) {
    if (section) section.style.display = "none";
    return;
  }
  var grid = document.getElementById("eprx-area-grid");
  var hasAvg = false;

  // shared scale across all areas for fair visual comparison
  var mwMax = 0, priceMax = 0;
  data.areaOrder.forEach(function (area) {
    (data.areaBlocks[area] || []).forEach(function (b) {
      mwMax = Math.max(mwMax, b.boshu, b.ouatsu);
      priceMax = Math.max(priceMax, b.saikou, b.heikin);
    });
  });
  var mwAxisMax = Math.ceil(mwMax / 100) * 100 + 100;
  var priceAxisMax = Math.ceil(priceMax / 5) * 5 + 5;

  var tooltip = document.getElementById("eprx-tooltip");

  var html = data.areaOrder.map(function (area, idx) {
    return '<div class="area-card"><div id="eprx-area-' + idx + '"></div></div>';
  }).join("");
  grid.innerHTML = html;

  data.areaOrder.forEach(function (area, idx) {
    var blocks = data.areaBlocks[area];
    if (!blocks) return;
    var container = document.getElementById("eprx-area-" + idx);
    var svg = buildComboSvg(blocks, {
      W: 360, H: 190, marginL: 40, marginR: 40, marginT: 20, marginB: 26,
      mwAxisMax: mwAxisMax, priceAxisMax: priceAxisMax,
      mwTickCount: 3, xLabelEvery: 12, showAvgLines: false,
      title: area
    });
    container.innerHTML = svg;
    attachChartTooltip(container, blocks, data.labels, tooltip, false);
  });
}

function renderEprxTable(data) {
  var hasAvg = data.blocks[0].boshuAvg30d != null;
  var tableWrap = document.getElementById("eprx-table-wrap");
  var rows = data.blocks.map(function (b) {
    return '<tr>'
      + '<td>' + eprxEscapeHtml(b.label) + '</td>'
      + '<td>' + fmtNum(b.boshu) + '</td>'
      + '<td>' + fmtNum(b.ouatsu, 1) + '</td>'
      + '<td>' + fmtNum(b.saikou, 2) + '</td>'
      + '<td>' + fmtNum(b.heikin, 2) + '</td>'
      + (hasAvg ? '<td>' + fmtNum(b.boshuAvg30d, 1) + '</td>' : '')
      + (hasAvg ? '<td>' + fmtNum(b.heikinAvg30d, 2) + '</td>' : '')
      + '</tr>';
  }).join("");
  tableWrap.innerHTML = ''
    + '<table class="data-table">'
    + '<thead><tr>'
    + '<th>コマ</th><th>' + eprxEscapeHtml(data.labels.boshu) + '<br>[MW]</th>'
    + '<th>' + eprxEscapeHtml(data.labels.ouatsu) + '<br>[MW]</th>'
    + '<th>' + eprxEscapeHtml(data.labels.saikou) + '<br>[円/kW・30分]</th>'
    + '<th>' + eprxEscapeHtml(data.labels.heikin) + '<br>[円/kW・30分]</th>'
    + (hasAvg ? '<th>' + eprxEscapeHtml(data.labels.boshuAvg30d) + '<br>[MW]</th>' : '')
    + (hasAvg ? '<th>' + eprxEscapeHtml(data.labels.heikinAvg30d) + '<br>[円/kW・30分]</th>' : '')
    + '</tr></thead><tbody>' + rows + '</tbody></table>';
}

function eprxToggleView(view) {
  var chartWrap = document.getElementById("eprx-chart-wrap");
  var tableWrap = document.getElementById("eprx-table-wrap");
  var btnChart = document.getElementById("eprx-btn-chart");
  var btnTable = document.getElementById("eprx-btn-table");
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
