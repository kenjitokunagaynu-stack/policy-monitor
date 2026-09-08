function trendFmtNum(n, digits) {
  if (n == null) return "-";
  return Number(n).toLocaleString("ja-JP", {
    minimumFractionDigits: digits || 0,
    maximumFractionDigits: digits || 0
  });
}

function trendEscapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function trendFmtJaDate(iso) {
  if (!iso) return "";
  var parts = iso.split(/[-T]/);
  if (parts.length < 3) return iso;
  return parts[0] + "年" + (+parts[1]) + "月" + (+parts[2]) + "日";
}

// Multi-line trend chart over a shared date axis. opts:
// { W, H, marginL, marginR, marginT, marginB, axisMin, axisMax, axisDigits, xLabelEvery, title, hover }
function buildTrendLineSvg(dates, seriesList, opts) {
  var W = opts.W, H = opts.H;
  var marginL = opts.marginL, marginR = opts.marginR, marginT = opts.marginT, marginB = opts.marginB;
  var plotW = W - marginL - marginR;
  var plotH = H - marginT - marginB;
  var axisMin = opts.axisMin, axisMax = opts.axisMax;
  var n = dates.length;
  var slotW = plotW / Math.max(1, n - 1);

  function xAt(i) { return marginL + i * slotW; }
  function yAt(v) { return marginT + plotH - ((v - axisMin) / (axisMax - axisMin || 1)) * plotH; }

  var tickCount = opts.tickCount || 5;
  var gridSvg = "", axisSvg = "";
  for (var t = 0; t <= tickCount; t++) {
    var val = axisMin + (axisMax - axisMin) * (t / tickCount);
    var y = yAt(val);
    gridSvg += '<line x1="' + marginL + '" x2="' + (marginL + plotW) + '" y1="' + y + '" y2="' + y + '" class="grid-line" />';
    axisSvg += '<text x="' + (marginL - 8) + '" y="' + (y + 4) + '" text-anchor="end" class="axis-label small">' + trendFmtNum(val, opts.axisDigits != null ? opts.axisDigits : 1) + '</text>';
  }

  var xAxisSvg = "";
  var labelEvery = opts.xLabelEvery || Math.max(1, Math.ceil(n / 9));
  for (var i = 0; i < n; i += labelEvery) {
    xAxisSvg += '<text x="' + xAt(i) + '" y="' + (marginT + plotH + 18) + '" text-anchor="middle" class="axis-label small">' + dates[i].slice(0, 7) + '</text>';
  }

  var linesSvg = "";
  seriesList.forEach(function (s) {
    var pts = [];
    for (var i = 0; i < n; i++) {
      var v = s.values[i];
      if (v != null) pts.push(xAt(i) + "," + yAt(v));
    }
    linesSvg += '<polyline points="' + pts.join(" ") + '" class="line ' + s.lineClass + '" />';
  });

  var hoverSvg = "";
  if (opts.hover) {
    for (var i2 = 0; i2 < n; i2++) {
      hoverSvg += '<rect x="' + (xAt(i2) - slotW / 2) + '" y="' + marginT + '" width="' + slotW + '" height="' + plotH + '" class="hover-col" data-idx="' + i2 + '" />';
    }
  }

  var titleSvg = opts.title
    ? '<text x="' + marginL + '" y="14" class="chart-title-svg">' + trendEscapeHtml(opts.title) + '</text>'
    : "";

  return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" preserveAspectRatio="xMidYMid meet" role="img" aria-label="' + trendEscapeHtml(opts.title || "推移") + '">'
    + titleSvg
    + '<g class="grid">' + gridSvg + '</g>'
    + '<line x1="' + marginL + '" x2="' + marginL + '" y1="' + marginT + '" y2="' + (marginT + plotH) + '" class="axis-baseline" />'
    + '<line x1="' + (marginL + plotW) + '" x2="' + (marginL + plotW) + '" y1="' + marginT + '" y2="' + (marginT + plotH) + '" class="axis-baseline" />'
    + '<line x1="' + marginL + '" x2="' + (marginL + plotW) + '" y1="' + (marginT + plotH) + '" y2="' + (marginT + plotH) + '" class="axis-baseline" />'
    + linesSvg
    + '<g>' + axisSvg + '</g>'
    + '<g>' + xAxisSvg + '</g>'
    + (opts.hover ? '<g class="hover-cols">' + hoverSvg + '</g>' : "")
    + '</svg>';
}

function attachTrendTooltip(container, dates, seriesList, tooltip) {
  var cols = container.querySelectorAll(".hover-col");
  cols.forEach(function (col) {
    col.addEventListener("mousemove", function (evt) {
      var idx = +col.getAttribute("data-idx");
      var rows = "";
      seriesList.forEach(function (s) {
        var v = s.values[idx];
        rows += trendTtRow(s.color, s.label, v != null ? trendFmtNum(v, s.digits != null ? s.digits : 2) + " " + s.unit : "-");
      });
      tooltip.innerHTML = '<div class="tt-time">' + trendEscapeHtml(dates[idx]) + '</div>' + rows;
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

function trendTtRow(color, label, val) {
  return '<div class="tt-row"><span class="tt-label"><span class="tt-dot" style="background:' + color + '"></span>' + trendEscapeHtml(label) + '</span><span class="tt-val">' + val + '</span></div>';
}

function trendRange(valueArrays) {
  var min = null, max = null;
  valueArrays.forEach(function (arr) {
    arr.forEach(function (v) {
      if (v == null) return;
      if (min == null || v < min) min = v;
      if (max == null || v > max) max = v;
    });
  });
  if (min == null) { min = 0; max = 1; }
  var pad = (max - min) * 0.08 || Math.abs(max) * 0.1 || 1;
  var axisMin = min >= 0 && (min - pad) < 0 ? 0 : Math.floor((min - pad) * 10) / 10;
  var axisMax = Math.ceil((max + pad) * 10) / 10;
  return { axisMin: axisMin, axisMax: axisMax };
}

var trendPriceSeriesDef = [
  { key: "avgHeikin", label: "平均落札価格", color: "var(--series-4)", lineClass: "line-4", unit: "円/kW・30分", digits: 3 },
  { key: "maxSaikou", label: "最高落札価格", color: "var(--series-3)", lineClass: "line-3", unit: "円/kW・30分", digits: 2 }
];
var trendVolSeriesDef = [
  { key: "avgBoshu", label: "平均募集量", color: "var(--series-1)", lineClass: "line-1v", unit: "MW", digits: 1 },
  { key: "avgOuatsu", label: "平均応札量", color: "var(--series-2)", lineClass: "line-2v", unit: "MW", digits: 1 }
];

function trendSeriesFor(defs, seriesData) {
  return defs.map(function (d) {
    return {
      key: d.key, label: d.label, color: d.color, lineClass: d.lineClass, unit: d.unit, digits: d.digits,
      values: seriesData[d.key]
    };
  });
}

var trendPeriodMode = "long";

// index of the first date within `months` months of the last date
function trendCutoffIndex(dates, months) {
  if (!dates.length) return 0;
  var last = new Date(dates[dates.length - 1] + "T00:00:00");
  var cutoff = new Date(last);
  cutoff.setMonth(cutoff.getMonth() - months);
  var cutoffStr = cutoff.toISOString().slice(0, 10);
  for (var i = 0; i < dates.length; i++) {
    if (dates[i] >= cutoffStr) return i;
  }
  return 0;
}

function trendSliceSeries(seriesObj, startIdx) {
  var out = {};
  Object.keys(seriesObj).forEach(function (k) { out[k] = seriesObj[k].slice(startIdx); });
  return out;
}

function trendGetActiveData() {
  var raw = window.EPRX_TREND_DATA;
  if (trendPeriodMode === "long") return raw;
  var startIdx = trendCutoffIndex(raw.dates, 3);
  var dates = raw.dates.slice(startIdx);
  var areas = {};
  raw.areaOrder.forEach(function (area) {
    if (raw.areas[area]) areas[area] = trendSliceSeries(raw.areas[area], startIdx);
  });
  return {
    generatedAt: raw.generatedAt, startDate: dates[0] || raw.startDate, endDate: raw.endDate,
    dates: dates, areaOrder: raw.areaOrder, national: trendSliceSeries(raw.national, startIdx), areas: areas
  };
}

var trendSeriesMode = "all";
function trendSetSeriesMode(mode) {
  trendSeriesMode = mode;
  document.body.classList.remove("trend-mode-price", "trend-mode-volume");
  if (mode !== "all") document.body.classList.add("trend-mode-" + mode);
  document.querySelectorAll(".series-toggle button").forEach(function (btn) {
    btn.classList.toggle("active", btn.getAttribute("data-mode") === mode);
  });
}

function trendSetPeriod(mode) {
  trendPeriodMode = mode;
  document.querySelectorAll(".period-toggle button").forEach(function (btn) {
    btn.classList.toggle("active", btn.getAttribute("data-period") === mode);
  });
  renderTrendChart();
}

function renderTrendChart() {
  var raw = window.EPRX_TREND_DATA;
  var root = document.getElementById("trend-root");
  if (!raw || !raw.dates || !raw.dates.length) {
    root.innerHTML = '<div class="empty-state">データがまだありません。</div>';
    return;
  }
  root.innerHTML = "";
  var data = trendGetActiveData();

  var rangeEl = document.getElementById("trend-range");
  if (rangeEl) rangeEl.textContent = trendFmtJaDate(data.startDate) + "〜" + trendFmtJaDate(data.endDate);
  var genEl = document.getElementById("trend-generated");
  if (genEl) genEl.textContent = trendFmtJaDate(data.generatedAt);

  var priceSeries = trendSeriesFor(trendPriceSeriesDef, data.national);
  var volSeries = trendSeriesFor(trendVolSeriesDef, data.national);

  var priceRange = trendRange(priceSeries.map(function (s) { return s.values; }));
  var volRange = trendRange(volSeries.map(function (s) { return s.values; }));

  var priceSvg = buildTrendLineSvg(data.dates, priceSeries, {
    W: 1180, H: 320, marginL: 60, marginR: 24, marginT: 20, marginB: 40,
    axisMin: priceRange.axisMin, axisMax: priceRange.axisMax, axisDigits: 2, hover: true
  });
  var volSvg = buildTrendLineSvg(data.dates, volSeries, {
    W: 1180, H: 240, marginL: 60, marginR: 24, marginT: 20, marginB: 40,
    axisMin: volRange.axisMin, axisMax: volRange.axisMax, axisDigits: 0, hover: true
  });

  document.getElementById("trend-price-root").innerHTML = priceSvg;
  document.getElementById("trend-vol-root").innerHTML = volSvg;

  var tooltip = document.getElementById("trend-tooltip");
  attachTrendTooltip(document.getElementById("trend-price-root"), data.dates, priceSeries, tooltip);
  attachTrendTooltip(document.getElementById("trend-vol-root"), data.dates, volSeries, tooltip);

  renderTrendAreaGrid(data);
}

var trendAreaScale = { price: { axisMin: 0, axisMax: 0 }, vol: { axisMin: 0, axisMax: 0 } };

function renderTrendAreaGrid(data) {
  var grid = document.getElementById("trend-area-grid");
  if (!grid || !data.areas || !data.areaOrder) return;

  var allPrice = [], allVol = [];
  data.areaOrder.forEach(function (area) {
    var s = data.areas[area];
    if (!s) return;
    allPrice.push(s.avgHeikin, s.maxSaikou);
    allVol.push(s.avgBoshu, s.avgOuatsu);
  });
  trendAreaScale.price = trendRange(allPrice);
  trendAreaScale.vol = trendRange(allVol);

  var html = data.areaOrder.map(function (area, idx) {
    if (!data.areas[area]) return "";
    return '<div class="area-card trend-area-card">'
      + '<button class="area-enlarge-btn" onclick="trendEnlargeArea(' + idx + ')" aria-label="拡大表示" title="拡大表示">⤢</button>'
      + '<div class="trend-price-block"><div id="trend-area-price-' + idx + '"></div></div>'
      + '<div class="trend-vol-block"><div id="trend-area-vol-' + idx + '"></div></div>'
      + '</div>';
  }).join("");
  grid.innerHTML = html;

  data.areaOrder.forEach(function (area, idx) {
    var s = data.areas[area];
    if (!s) return;
    var priceSeries = trendSeriesFor(trendPriceSeriesDef, s);
    var volSeries = trendSeriesFor(trendVolSeriesDef, s);
    document.getElementById("trend-area-price-" + idx).innerHTML = buildTrendLineSvg(data.dates, priceSeries, {
      W: 360, H: 130, marginL: 40, marginR: 10, marginT: 18, marginB: 18,
      axisMin: trendAreaScale.price.axisMin, axisMax: trendAreaScale.price.axisMax,
      tickCount: 3, xLabelEvery: data.dates.length + 1, axisDigits: 1, title: area, hover: false
    });
    document.getElementById("trend-area-vol-" + idx).innerHTML = buildTrendLineSvg(data.dates, volSeries, {
      W: 360, H: 90, marginL: 40, marginR: 10, marginT: 6, marginB: 18,
      axisMin: trendAreaScale.vol.axisMin, axisMax: trendAreaScale.vol.axisMax,
      tickCount: 2, xLabelEvery: data.dates.length + 1, axisDigits: 0, hover: false
    });
  });
}

function trendEnlargeArea(idx) {
  var data = trendGetActiveData();
  var area = data.areaOrder[idx];
  var s = data.areas[area];
  if (!s) return;
  var priceSeries = trendSeriesFor(trendPriceSeriesDef, s);
  var volSeries = trendSeriesFor(trendVolSeriesDef, s);
  var priceSvg = buildTrendLineSvg(data.dates, priceSeries, {
    W: 980, H: 320, marginL: 60, marginR: 24, marginT: 26, marginB: 40,
    axisMin: trendAreaScale.price.axisMin, axisMax: trendAreaScale.price.axisMax,
    axisDigits: 2, title: area + "（価格）", hover: true
  });
  var volSvg = buildTrendLineSvg(data.dates, volSeries, {
    W: 980, H: 240, marginL: 60, marginR: 24, marginT: 26, marginB: 40,
    axisMin: trendAreaScale.vol.axisMin, axisMax: trendAreaScale.vol.axisMax,
    axisDigits: 0, title: area + "（数量）", hover: true
  });
  var body = document.getElementById("trend-modal-body");
  body.innerHTML = priceSvg + '<div style="height:12px"></div>' + volSvg;
  document.getElementById("trend-modal-overlay").classList.add("open");
  var tooltip = document.getElementById("trend-tooltip");
  attachTrendTooltip(body, data.dates, priceSeries, tooltip);
  attachTrendTooltip(body, data.dates, volSeries, tooltip);
}

function trendCloseModal() {
  document.getElementById("trend-modal-overlay").classList.remove("open");
}
