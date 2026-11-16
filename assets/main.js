(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  const TYPE_LABEL = {
    journal: "Journal article",
    conference: "Conference paper",
    book: "Book",
    chapter: "Book chapter",
    thesis: "Thesis"
  };

  /* ---------- Metrics ---------- */
  function renderMetrics() {
    const m = SITE.metrics;
    $("#m-citations").textContent = m.citations;
    $("#m-h").textContent = m.hIndex;
    $("#m-i10").textContent = m.i10Index;
    $("#m-pubs").textContent = SITE.publications.length;
    $("#m-asof").textContent = m.asOf;

    const chart = $("#cite-chart");
    const max = Math.max(...m.perYear.map((d) => d[1]));
    m.perYear.forEach(([year, n]) => {
      const col = el("div", "bar-col");
      col.title = `${year}: ${n} citations`;
      const val = el("span", "bar-val", n);
      const bar = el("span", "bar");
      bar.style.height = Math.max(2, Math.round((n / max) * 100)) + "%";
      const lab = el("span", "bar-lab", "’" + String(year).slice(2));
      const track = el("div", "bar-track");
      track.append(val, bar);
      col.append(track, lab);
      chart.append(col);
    });
    chart.setAttribute(
      "aria-label",
      "Citations per year: " + m.perYear.map(([y, n]) => `${y}: ${n}`).join(", ")
    );
  }

  /* ---------- Publications ---------- */
  // The "other" filter chip groups books, chapters and the thesis.
  const OTHER_TYPES = ["book", "chapter", "thesis"];
  let pubType = "all";
  let pubQuery = "";

  function authorNodes(str) {
    const frag = document.createDocumentFragment();
    str.split(/(AF Zakaria)/).forEach((part) => {
      if (part === "AF Zakaria") frag.append(el("strong", null, part));
      else if (part) frag.append(part);
    });
    return frag;
  }

  function renderPubs() {
    const list = $("#pub-list");
    list.textContent = "";
    const q = pubQuery.trim().toLowerCase();
    const items = SITE.publications.filter(
      (p) =>
        (pubType === "all" ||
          p.type === pubType ||
          (pubType === "other" && OTHER_TYPES.includes(p.type))) &&
        (!q || (p.t + " " + p.a + " " + p.v + " " + p.y).toLowerCase().includes(q))
    );

    let lastYear = null;
    let group = null;
    items.forEach((p) => {
      if (p.y !== lastYear) {
        lastYear = p.y;
        const section = el("section", "pub-year");
        section.append(el("h3", "pub-year-label", p.y));
        group = el("ol", "pub-items");
        section.append(group);
        list.append(section);
      }
      const li = el("li", "pub");
      const title = el("p", "pub-title");
      if (p.doi) {
        const a = el("a", null, p.t);
        a.href = "https://doi.org/" + p.doi;
        a.rel = "noopener";
        title.append(a);
      } else {
        title.textContent = p.t;
      }
      const authors = el("p", "pub-authors");
      authors.append(authorNodes(p.a));
      const meta = el("p", "pub-meta");
      meta.append(el("span", "tag tag-" + p.type, TYPE_LABEL[p.type]));
      meta.append(el("span", "pub-venue", p.v));
      if (p.c) meta.append(el("span", "pub-cites", `Cited by ${p.c}`));
      li.append(title, authors, meta);
      group.append(li);
    });

    $("#pub-count").textContent =
      items.length === SITE.publications.length
        ? `${items.length} publications`
        : `${items.length} of ${SITE.publications.length} publications`;
    $("#pub-empty").hidden = items.length > 0;
  }

  function initPubControls() {
    const wrap = $("#pub-filters");
    const counts = SITE.publications.reduce((acc, p) => {
      acc[p.type] = (acc[p.type] || 0) + 1;
      return acc;
    }, {});
    const options = [["all", "All"], ["journal", "Journals"], ["conference", "Conferences"]];
    if ((counts.book || 0) + (counts.chapter || 0) + (counts.thesis || 0)) {
      options.push(["other", "Books & thesis"]);
    }
    options.forEach(([key, label]) => {
      const b = el("button", "chip", label);
      b.type = "button";
      b.dataset.key = key;
      b.setAttribute("aria-pressed", key === "all" ? "true" : "false");
      b.addEventListener("click", () => {
        wrap.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", "false"));
        b.setAttribute("aria-pressed", "true");
        pubType = key;
        renderPubs();
      });
      wrap.append(b);
    });
    $("#pub-search").addEventListener("input", (e) => {
      pubQuery = e.target.value;
      renderPubs();
    });
  }

  /* ---------- Grants ---------- */
  function renderGrants() {
    const body = $("#grant-list");
    SITE.grants.forEach((g) => {
      const li = el("li", "row");
      li.append(el("span", "row-year", g.y));
      const main = el("div", "row-main");
      main.append(el("p", "row-title", g.title));
      main.append(el("p", "row-sub", g.funder));
      li.append(main);
      const side = el("div", "row-side");
      side.append(el("span", "tag tag-role-" + g.role.toLowerCase(), g.role));
      if (g.amount) side.append(el("span", "row-amount", g.amount));
      li.append(side);
      body.append(li);
    });
  }

  /* ---------- Teaching ---------- */
  function renderCourses() {
    const list = $("#course-list");
    SITE.courses.forEach((c) => {
      const li = el("li", "course");
      li.append(el("span", "course-code", c.code));
      const main = el("div");
      main.append(el("p", "row-title", c.name));
      main.append(el("p", "row-sub", `${c.level} · ${c.when}`));
      li.append(main);
      list.append(li);
    });
  }

  /* ---------- Service ---------- */
  function renderService() {
    const list = $("#service-list");
    SITE.service.forEach((s) => {
      const li = el("li", "row");
      li.append(el("span", "row-year", s.y));
      const main = el("div", "row-main");
      main.append(el("p", "row-title", s.what));
      if (s.where) main.append(el("p", "row-sub", s.where));
      li.append(main);
      const side = el("div", "row-side");
      side.append(el("span", "tag", s.role));
      li.append(side);
      list.append(li);
    });
  }

  /* ---------- Nav ---------- */
  function initNav() {
    const toggle = $("#nav-toggle");
    const nav = $("#site-nav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    const links = [...nav.querySelectorAll("a")];
    const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              links.forEach((a) => a.removeAttribute("aria-current"));
              const a = byId.get(en.target.id);
              if (a) a.setAttribute("aria-current", "true");
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      byId.forEach((_, id) => {
        const s = document.getElementById(id);
        if (s) io.observe(s);
      });
    }
  }

  renderMetrics();
  initPubControls();
  renderPubs();
  renderGrants();
  renderCourses();
  renderService();
  initNav();
  $("#year").textContent = new Date().getFullYear();
})();
