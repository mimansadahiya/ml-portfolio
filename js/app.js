/* ==========================================================================
   Shared app logic — nav, reveal, project cards, case-study renderer, charts.
   Depends on js/data.js being loaded first.
   ========================================================================== */

(function () {
  "use strict";

  var SITE = window.SITE;
  var CATEGORIES = window.CATEGORIES;
  var PROJECTS = window.PROJECTS;

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function categoryLabel(id) {
    return CATEGORIES[id] || id;
  }

  /* ------------------------------------------------------------------
     Mobile nav toggle
     ------------------------------------------------------------------ */
  function initNav() {
    var toggle = document.querySelector(".nav__toggle");
    var links = document.querySelector(".nav__links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------ */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------------
     Abstract cover art (deterministic per project)
     ------------------------------------------------------------------ */
  function coverSVG(project, idx) {
    var a = project.accent || "#b04a2c";
    var variants = ["bars", "line", "donut", "scatter", "steps", "rings"];
    var v = variants[idx % variants.length];
    var ink = "#211d19";
    var body = "";
    var i, x, y;

    // subtle dot grid
    var dots = "";
    for (i = 0; i < 40; i++) {
      x = 12 + (i % 8) * 44;
      y = 12 + Math.floor(i / 8) * 40;
      dots += '<circle cx="' + x + '" cy="' + y + '" r="1.1" fill="#3a342d"/>';
    }

    if (v === "bars") {
      var vals = [34, 58, 46, 72, 60, 88, 70, 96];
      for (i = 0; i < vals.length; i++) {
        var bh = vals[i];
        body += '<rect x="' + (40 + i * 40) + '" y="' + (210 - bh) + '" width="22" height="' + bh + '" rx="3" fill="' + a + '" opacity="' + (0.55 + i * 0.04) + '"/>';
      }
      body += '<rect x="40" y="212" width="296" height="1.5" fill="#4a443d"/>';
    } else if (v === "line") {
      var pts = "40,170 76,150 112,158 148,128 184,138 220,104 256,112 292,78 328,90";
      body += '<polyline points="' + pts + '" fill="none" stroke="' + a + '" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>';
      body += '<polyline points="' + pts + '" fill="none" stroke="' + a + '" stroke-width="7" opacity="0.12" stroke-linecap="round"/>';
      body += '<circle cx="328" cy="90" r="4" fill="' + a + '"/>';
    } else if (v === "donut") {
      body += '<circle cx="180" cy="150" r="78" fill="none" stroke="#3a342d" stroke-width="22"/>';
      body += '<circle cx="180" cy="150" r="78" fill="none" stroke="' + a + '" stroke-width="22" stroke-linecap="round" stroke-dasharray="295 500" transform="rotate(-90 180 150)"/>';
      body += '<circle cx="180" cy="150" r="78" fill="none" stroke="#d98a6e" stroke-width="22" stroke-dasharray="90 500" stroke-dashoffset="-300" transform="rotate(-90 180 150)"/>';
      body += '<text x="180" y="156" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="26" fill="#f3efea">64%</text>';
    } else if (v === "scatter") {
      var spots = [[60,160],[90,120],[120,150],[150,96],[180,132],[210,70],[240,118],[270,88],[300,60],[320,104]];
      for (i = 0; i < spots.length; i++) {
        body += '<circle cx="' + spots[i][0] + '" cy="' + spots[i][1] + '" r="' + (4 + (i % 3) * 2) + '" fill="' + a + '" opacity="0.8"/>';
      }
      body += '<line x1="40" y1="196" x2="330" y2="196" stroke="#4a443d" stroke-width="1.5"/>';
      body += '<line x1="40" y1="40" x2="40" y2="196" stroke="#4a443d" stroke-width="1.5"/>';
    } else if (v === "steps") {
      var sp = "40,160 92,160 92,120 144,120 144,136 196,136 196,92 248,92 248,104 300,104 300,72 330,72";
      body += '<polyline points="' + sp + '" fill="none" stroke="' + a + '" stroke-width="2.5" stroke-linejoin="round"/>';
    } else {
      for (i = 0; i < 3; i++) {
        body += '<circle cx="180" cy="150" r="' + (30 + i * 34) + '" fill="none" stroke="' + a + '" stroke-width="1.5" opacity="' + (0.8 - i * 0.25) + '"/>';
      }
      body += '<circle cx="180" cy="150" r="6" fill="' + a + '"/>';
    }

    return (
      '<svg viewBox="0 0 360 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + escapeHtml(project.title) + '">' +
        '<rect width="360" height="240" fill="' + ink + '"/>' +
        dots +
        body +
        '<text x="24" y="222" font-family="JetBrains Mono,monospace" font-size="10" letter-spacing="2" fill="#8a8178">' + escapeHtml((project.org || "PROJECT").toUpperCase()) + '</text>' +
      '</svg>'
    );
  }

  /* ------------------------------------------------------------------
     Tag / meta helpers
     ------------------------------------------------------------------ */
  function statusMeta(project) {
    if (project.status === "in-progress") {
      return '<span class="status-dot status-dot--wip">In progress</span>';
    }
    return '<span class="status-dot status-dot--active">Completed</span>';
  }

  function projectCard(project, idx) {
    var href = "project.html?project=" + encodeURIComponent(project.id);
    var tags = (project.tech || []).slice(0, 4).map(function (t) {
      return '<span class="tag">' + escapeHtml(t) + '</span>';
    }).join("");

    var caseLink = (project.links && Object.keys(project.links).length) || project.caseStudy
      ? '<a href="' + href + '" class="link-arrow">View case study' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>'
      : '<span class="muted" style="font-size:13px">Case study coming soon</span>';

    return (
      '<article class="project-card reveal">' +
        '<a class="project-card__visual" href="' + href + '" aria-hidden="true" tabindex="-1">' + coverSVG(project, idx) + '</a>' +
        '<div class="project-card__body">' +
          '<div class="project-card__top">' +
            '<span class="tag tag--accent">' + escapeHtml(categoryLabel(project.category)) + '</span>' +
            statusMeta(project) +
          '</div>' +
          '<h3><a href="' + href + '">' + escapeHtml(project.title) + '</a></h3>' +
          (project.org ? '<div class="eyebrow eyebrow--muted" style="margin-top:-4px">' + escapeHtml(project.org) + '</div>' : '') +
          '<p class="project-card__summary">' + escapeHtml(project.summary) + '</p>' +
          '<div class="project-card__tags">' + tags + '</div>' +
          caseLink +
        '</div>' +
      '</article>'
    );
  }

  /* ------------------------------------------------------------------
     Charts (inline SVG, data-driven)
     ------------------------------------------------------------------ */
  function chartBar(block, dark) {
    var data = block.data || [];
    var max = 1;
    data.forEach(function (d) { if (d.value > max) max = d.value; });
    var label = dark ? "#b6ada2" : "#7a726a";
    var bar = dark ? "#d98a6e" : "#b04a2c";
    var grid = dark ? "#3a342d" : "#e7e2da";
    var rows = data.map(function (d) {
      var w = Math.max(4, Math.round((d.value / max) * 100));
      return (
        '<div class="chart-row">' +
          '<div class="chart-row__label">' + escapeHtml(d.label) + '</div>' +
          '<div class="chart-row__track"><div class="chart-row__fill" style="width:' + w + '%"></div></div>' +
          '<div class="chart-row__value">' + escapeHtml(String(d.value)) + '</div>' +
        '</div>'
      );
    }).join("");
    return (
      '<div class="chart" data-theme="' + (dark ? "dark" : "light") + '">' +
        (block.title ? '<div class="chart__title">' + escapeHtml(block.title) + '</div>' : '') +
        rows +
        (block.caption ? '<div class="chart__caption">' + escapeHtml(block.caption) + '</div>' : '') +
      '</div>'
    );
  }

  function chartDonut(block, dark) {
    var data = block.data || [];
    var total = 0;
    data.forEach(function (d) { total += d.value; });
    var palette = ["#d98a6e", "#7fc49a", "#7ba7d9", "#e0ab6d", "#b7a3d9", "#e08a9e"];
    var cx = 90, cy = 90, r = 66;
    var stroke = 26;
    var circumference = 2 * Math.PI * r;
    var offset = 0;
    var arcs = data.map(function (d, i) {
      var frac = d.value / total;
      var len = frac * circumference;
      var arc =
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + palette[i % palette.length] +
        '" stroke-width="' + stroke + '" stroke-dasharray="' + len.toFixed(2) + ' ' + (circumference - len).toFixed(2) +
        '" stroke-dashoffset="' + (-offset).toFixed(2) + '" transform="rotate(-90 ' + cx + ' ' + cy + ')" stroke-linecap="butt"/>';
      offset += len;
      return arc;
    }).join("");
    var centerLabel = dark ? "#f3efea" : "#211d19";
    var svg =
      '<svg viewBox="0 0 180 180" class="chart-donut">' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + (dark ? "#3a342d" : "#f3f0eb") + '" stroke-width="' + stroke + '"/>' +
        arcs +
        '<text x="90" y="86" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="24" fill="' + centerLabel + '">' + total + '</text>' +
        '<text x="90" y="106" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="' + (dark ? "#b6ada2" : "#7a726a") + '">total</text>' +
      '</svg>';

    var legend = data.map(function (d, i) {
      var pct = Math.round((d.value / total) * 100);
      return (
        '<li><span class="chart-legend__dot" style="background:' + palette[i % palette.length] + '"></span>' +
        '<span class="chart-legend__label">' + escapeHtml(d.label) + '</span>' +
        '<span class="chart-legend__value">' + pct + '%</span></li>'
      );
    }).join("");

    return (
      '<div class="chart chart--donut" data-theme="' + (dark ? "dark" : "light") + '">' +
        (block.title ? '<div class="chart__title">' + escapeHtml(block.title) + '</div>' : '') +
        '<div class="chart-donut__wrap">' + svg + '<ul class="chart-legend">' + legend + '</ul></div>' +
        (block.caption ? '<div class="chart__caption">' + escapeHtml(block.caption) + '</div>' : '') +
      '</div>'
    );
  }

  /* ------------------------------------------------------------------
     Case-study block renderer
     ------------------------------------------------------------------ */
  function renderBlock(block) {
    if (!block) return "";

    switch (block.type) {
      case "text":
        return (
          '<div class="case-section">' +
            (block.title ? '<h2>' + block.title + '</h2>' : '') +
            '<p>' + block.body + '</p>' +
          '</div>'
        );

      case "list": {
        var tag = block.ordered ? "ol" : "ul";
        var items = (block.items || []).map(function (it) { return "<li>" + it + "</li>"; }).join("");
        return (
          '<div class="case-section">' +
            (block.title ? '<h2>' + block.title + '</h2>' : '') +
            '<' + tag + '>' + items + '</' + tag + '>' +
          '</div>'
        );
      }

      case "kpis": {
        var kpis = (block.items || []).map(function (k) {
          return (
            '<div class="kpi">' +
              '<div class="kpi__value">' + escapeHtml(k.value) + '</div>' +
              '<div class="kpi__label">' + escapeHtml(k.label) + '</div>' +
              (k.note ? '<div class="kpi__note">' + escapeHtml(k.note) + '</div>' : '') +
            '</div>'
          );
        }).join("");
        return '<div class="case-section"><div class="kpi-band">' + kpis + '</div></div>';
      }

      case "roleSplit": {
        function col(group) {
          var items = (group.items || []).map(function (it) { return "<li>" + it + "</li>"; }).join("");
          return (
            '<div>' +
              '<h4>' + group.title + '</h4>' +
              '<ul>' + items + '</ul>' +
            '</div>'
          );
        }
        return (
          '<div class="case-section">' +
            '<div class="role-split">' + col(block.mine) + col(block.team) + '</div>' +
          '</div>'
        );
      }

      case "diagram": {
        var light = block.dark === false;
        var figureStyle = light ? 'background:var(--surface);border:1px solid var(--line)' : '';
        var capColor = light ? 'var(--muted)' : 'var(--ink-panel-muted)';
        var titleColor = light ? 'var(--ink)' : 'var(--ink-panel-text)';
        return (
          '<div class="case-section">' +
            '<figure class="panel panel--diagram" style="' + figureStyle + '">' +
              '<img src="' + block.src + '" alt="' + escapeHtml(block.title || "diagram") + '" loading="lazy"/>' +
              (block.title || block.caption
                ? '<figcaption class="panel__caption" style="color:' + capColor + '">' +
                    (block.title ? '<strong style="color:' + titleColor + '">' + escapeHtml(block.title) + '.</strong> ' : '') +
                    (block.caption ? escapeHtml(block.caption) : '') +
                  '</figcaption>'
                : '') +
            '</figure>' +
          '</div>'
        );
      }

      case "callout":
        return (
          '<div class="callout' + (block.note ? ' callout--note' : '') + '">' +
            (block.label ? '<span class="callout__label">' + escapeHtml(block.label) + '</span>' : '') +
            '<p>' + block.text + '</p>' +
          '</div>'
        );

      case "panel": {
        var inner = (block.blocks || []).map(function (b) {
          // Charts nested in a dark panel inherit the dark theme.
          if (b.type === "chart" && b.dark == null) return renderBlock(Object.assign({}, b, { dark: true }));
          return renderBlock(b);
        }).join("");
        return (
          '<div class="case-section">' +
            '<div class="panel">' +
              (block.title ? '<div class="eyebrow" style="margin-bottom:8px">' + escapeHtml(block.title) + '</div>' : '') +
              (block.intro ? '<p style="margin-bottom:24px;max-width:46em">' + block.intro + '</p>' : '') +
              inner +
            '</div>' +
          '</div>'
        );
      }

      case "panelList": {
        var rows = (block.items || []).map(function (it) {
          return (
            '<li><span class="panel-list__idx">' + escapeHtml(it.idx || "") + '</span>' +
            '<span><strong>' + it.strong + '</strong> — ' + it.text + '</span></li>'
          );
        }).join("");
        return (
          '<div style="margin-top:8px">' +
            (block.title ? '<h4 style="margin-bottom:4px;font-size:1.05rem">' + escapeHtml(block.title) + '</h4>' : '') +
            '<ul class="panel-list">' + rows + '</ul>' +
          '</div>'
        );
      }

      case "progress": {
        var items = (block.items || []).map(function (it) {
          var cls = {
            done: "progress-item__state--done",
            wip: "progress-item__state--wip",
            planned: "progress-item__state--planned"
          }[it.state] || "progress-item__state--planned";
          var label = { done: "Complete", wip: "Experimental", planned: "Planned" }[it.state] || it.state;
          return (
            '<div class="progress-item">' +
              '<span class="progress-item__state ' + cls + '">' + label + '</span>' +
              '<p>' + (it.strong ? '<strong>' + it.strong + '</strong> — ' : '') + it.text + '</p>' +
            '</div>'
          );
        }).join("");
        return (
          '<div style="margin-top:8px">' +
            (block.title ? '<h4 style="margin-bottom:4px;font-size:1.05rem">' + escapeHtml(block.title) + '</h4>' : '') +
            '<div>' + items + '</div>' +
          '</div>'
        );
      }

      case "chart":
        return (
          '<div class="case-section">' +
            (block.chartType === "donut" ? chartDonut(block, block.dark) : chartBar(block, block.dark)) +
          '</div>'
        );

      case "links": {
        var btns = (block.links || []).map(function (l) {
          return (
            '<a class="btn btn--ghost-invert" href="' + l.href + '" target="_blank" rel="noopener noreferrer">' +
              escapeHtml(l.label) + ' ↗</a>'
          );
        }).join("");
        return (
          '<div class="case-section">' +
            '<div class="case-links">' + btns + '</div>' +
          '</div>'
        );
      }

      default:
        return "";
    }
  }

  function renderCaseStudy(project) {
    if (!project.caseStudy) {
      return '<p class="muted">A detailed case study is being prepared for this project.</p>';
    }
    var html = '<div class="lead-in">' + project.caseStudy.lead + '</div>';
    html += (project.caseStudy.blocks || []).map(renderBlock).join("");
    return html;
  }

  /* ------------------------------------------------------------------
     Expose to pages
     ------------------------------------------------------------------ */
  window.App = {
    escapeHtml: escapeHtml,
    categoryLabel: categoryLabel,
    coverSVG: coverSVG,
    projectCard: projectCard,
    renderCaseStudy: renderCaseStudy,
    initNav: initNav,
    initReveal: initReveal
  };
})();
