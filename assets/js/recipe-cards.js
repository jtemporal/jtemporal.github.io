(function () {
  const DEFAULT_RECIPE = {
    name: "Caramel bottom sweet potatoes",
    banners: ["Preheat oven to 190\u00b0C or 200\u00b0C", "Line a sheet with parchment"],
    rows: [
      "Sweet potatoes (as many as your heart desires)",
      "Salt, just a little",
      "Pepper, to taste"
    ],
    actions: [
      { label: "wash\\ntrim ends", start: 0, end: 0 },
      { label: "split\\nlengthwise", start: 0, end: 0 },
      { label: "season\\ncut side", start: 1, end: 2 },
      { label: "face down\\non sheet", start: 0, end: 2 },
      { label: "bake\\n45 min\u20131 h\\ncool, flip,\\nserve", start: 0, end: 2 }
    ]
  };

  const nameInput = document.getElementById("nameInput");
  const cards = document.getElementById("cards");
  const jsonEl = document.getElementById("json");
  const editor = document.getElementById("editor");
  const toast = document.getElementById("toast");
  const bannerList = document.getElementById("bannerList");
  const rowList = document.getElementById("rowList");
  const actList = document.getElementById("actList");
  if (!nameInput || !cards) return;

  let recipe = structuredClone(DEFAULT_RECIPE);
  let suppressHash = false;

  function toBase64Url(str) {
    const bytes = new TextEncoder().encode(str);
    let bin = "";
    bytes.forEach((b) => { bin += String.fromCharCode(b); });
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  function fromBase64Url(s) {
    const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
    const b64 = s.replace(/-/g, "+").replace(/_/g, "/") + pad;
    const bin = atob(b64);
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }
  function encodeRecipe(r) { return toBase64Url(JSON.stringify(r)); }
  function decodeRecipe(hash) {
    const raw = hash.replace(/^#/, "");
    const payload = raw.startsWith("r=") ? raw.slice(2) : raw;
    if (!payload) return null;
    try { return sanitizeRecipe(JSON.parse(fromBase64Url(payload))); }
    catch (e) { return null; }
  }
  function writeHash() {
    const next = "#r=" + encodeRecipe(recipe);
    if (location.hash === next) return;
    suppressHash = true;
    history.replaceState(null, "", next);
    requestAnimationFrame(() => { suppressHash = false; });
  }
  function cleanText(value, max) {
    return String(value ?? "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").replace(/^\uFEFF/, "").slice(0, max);
  }
  function sanitizeRecipe(raw) {
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
    const rows = Array.isArray(raw.rows) ? raw.rows.slice(0, 60).map((r) => cleanText(r, 240)) : [];
    if (!rows.length) return null;
    const banners = Array.isArray(raw.banners) ? raw.banners.slice(0, 12).map((b) => cleanText(b, 200)).filter(Boolean) : [];
    const actions = Array.isArray(raw.actions) ? raw.actions.slice(0, 16).map((a) => {
      const item = a && typeof a === "object" ? a : {};
      const start = Number.parseInt(item.start, 10);
      const end = Number.parseInt(item.end, 10);
      return {
        label: cleanText(String(item.label ?? "").replace(/\r/g, ""), 200),
        start: Number.isFinite(start) ? start : 0,
        end: Number.isFinite(end) ? end : 0
      };
    }) : [];
    return { name: cleanText(raw.name, 120) || "Untitled recipe", banners, rows, actions };
  }
  function setCellText(el, text) {
    String(text).split(/\n|\\n/).forEach((part, i) => {
      if (i) el.appendChild(document.createElement("br"));
      el.appendChild(document.createTextNode(part));
    });
  }
  function renderCard() {
    const acts = recipe.actions || [];
    const colCount = 1 + acts.length;
    const n = (recipe.rows || []).length;
    document.title = (recipe.name || "Recipe") + " \u00b7 recipe card";
    const shell = document.createElement("div");
    shell.className = "recipe-shell flex w-full justify-center";
    const card = document.createElement("div");
    card.className = "recipe-card rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-cozy";
    const table = document.createElement("table");
    const titleRow = document.createElement("tr");
    const titleCell = document.createElement("th");
    titleCell.className = "recipe-banner title";
    titleCell.colSpan = colCount;
    titleCell.textContent = recipe.name || "Untitled recipe";
    titleRow.appendChild(titleCell);
    table.appendChild(titleRow);
    (recipe.banners || []).forEach((b) => {
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      th.className = "recipe-banner";
      th.colSpan = colCount;
      th.textContent = b;
      tr.appendChild(th);
      table.appendChild(tr);
    });
    for (let r = 0; r < n; r++) {
      const tr = document.createElement("tr");
      const ing = document.createElement("td");
      ing.className = "recipe-ing";
      ing.textContent = recipe.rows[r];
      tr.appendChild(ing);
      acts.forEach((a, ai) => {
        if (r === a.start) {
          const td = document.createElement("td");
          td.className = "recipe-act" + (ai === acts.length - 1 ? " final" : "");
          td.rowSpan = Math.max(1, a.end - a.start + 1);
          setCellText(td, a.label);
          tr.appendChild(td);
        } else if (!(r > a.start && r <= a.end)) {
          tr.appendChild(document.createElement("td"));
        }
      });
      table.appendChild(tr);
    }
    card.appendChild(table);
    shell.appendChild(card);
    cards.replaceChildren(shell);
    fitCard();
  }
  function fitCard() {
    const shell = cards.querySelector(".recipe-shell");
    const card = cards.querySelector(".recipe-card");
    if (!shell || !card) return;
    card.style.transform = "none";
    card.style.marginBottom = "0";
    const scale = Math.min(1, shell.clientWidth / card.offsetWidth);
    card.style.transform = "scale(" + scale + ")";
    const hidden = card.offsetWidth * (1 - scale);
    card.style.marginBottom = hidden ? (-hidden) + "px" : "0";
  }
  window.addEventListener("resize", fitCard);
  function clampActions() {
    const max = Math.max(0, (recipe.rows || []).length - 1);
    (recipe.actions || []).forEach((a) => {
      a.start = Math.min(Math.max(0, Number(a.start) || 0), max);
      a.end = Math.min(Math.max(a.start, Number(a.end) || 0), max);
    });
  }
  function renderForm() {
    nameInput.value = recipe.name || "";
    bannerList.innerHTML = "";
    (recipe.banners || []).forEach((text, i) => bannerList.appendChild(lineRow("banner", i, text, (recipe.banners || []).length > 1)));
    rowList.innerHTML = "";
    (recipe.rows || []).forEach((text, i) => rowList.appendChild(lineRow("row", i, text, (recipe.rows || []).length > 1)));
    actList.innerHTML = "";
    const n = (recipe.rows || []).length;
    (recipe.actions || []).forEach((a, i) => actList.appendChild(actRow(i, a, n)));
    if (document.activeElement !== jsonEl) jsonEl.value = JSON.stringify(recipe, null, 2);
  }
  function lineRow(kind, i, text, canRemove) {
    const wrap = document.createElement("div");
    wrap.className = "row-item";
    wrap.innerHTML = '<span class="w-8 text-right text-xs text-outline">' + (i + 1) + "</span>";
    const input = document.createElement("input");
    input.type = "text";
    input.className = "w-full min-w-0 rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2";
    input.value = text;
    input.addEventListener("input", () => {
      if (kind === "banner") recipe.banners[i] = cleanText(input.value, 200);
      else recipe.rows[i] = cleanText(input.value, 240);
      afterEdit();
    });
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant bg-surface-container-low text-on-surface-variant";
    btn.textContent = "\u00d7";
    btn.disabled = !canRemove;
    btn.addEventListener("click", () => {
      if (kind === "banner") recipe.banners.splice(i, 1);
      else { recipe.rows.splice(i, 1); clampActions(); }
      afterEdit(true);
    });
    wrap.append(input, btn);
    return wrap;
  }
  function actRow(i, a, n) {
    const wrap = document.createElement("div");
    wrap.className = "act-item";
    const label = document.createElement("textarea");
    label.className = "recipe-act-label w-full min-w-0 rounded-lg border border-outline-variant px-3 py-2";
    label.value = String(a.label || "").replace(/\\n/g, "\n");
    label.placeholder = "mix";
    label.addEventListener("input", () => {
      recipe.actions[i].label = cleanText(label.value.replace(/\n/g, "\\n"), 200);
      afterEdit();
    });
    const from = document.createElement("select");
    const to = document.createElement("select");
    from.className = to.className = "min-w-0 rounded-lg border border-outline-variant px-1 py-2 text-sm";
    for (let r = 0; r < n; r++) {
      from.appendChild(new Option(String(r + 1), r, false, r === a.start));
      to.appendChild(new Option(String(r + 1), r, false, r === a.end));
    }
    from.addEventListener("change", () => {
      recipe.actions[i].start = Number(from.value);
      if (recipe.actions[i].end < recipe.actions[i].start) recipe.actions[i].end = recipe.actions[i].start;
      afterEdit(true);
    });
    to.addEventListener("change", () => {
      recipe.actions[i].end = Number(to.value);
      if (recipe.actions[i].end < recipe.actions[i].start) recipe.actions[i].start = recipe.actions[i].end;
      afterEdit(true);
    });
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant bg-surface-container-low text-on-surface-variant";
    btn.textContent = "\u00d7";
    btn.addEventListener("click", () => { recipe.actions.splice(i, 1); afterEdit(true); });
    wrap.append(label, from, to, btn);
    return wrap;
  }
  function afterEdit(rebuildForm) {
    renderCard();
    writeHash();
    if (rebuildForm) renderForm();
    else if (document.activeElement !== jsonEl) jsonEl.value = JSON.stringify(recipe, null, 2);
  }
  function applyRecipe(next, opts) {
    const clean = sanitizeRecipe(next);
    if (!clean) return;
    recipe = clean;
    clampActions();
    renderCard();
    renderForm();
    if (!opts || opts.updateHash !== false) writeHash();
  }
  nameInput.addEventListener("input", () => { recipe.name = cleanText(nameInput.value, 120); afterEdit(); });
  document.getElementById("addBanner").addEventListener("click", () => { recipe.banners.push(""); afterEdit(true); });
  document.getElementById("addRow").addEventListener("click", () => { recipe.rows.push(""); afterEdit(true); });
  document.getElementById("addAct").addEventListener("click", () => {
    recipe.actions.push({ label: "mix", start: 0, end: Math.max(0, recipe.rows.length - 1) });
    afterEdit(true);
  });
  jsonEl.addEventListener("input", () => { try { applyRecipe(JSON.parse(jsonEl.value)); } catch (e) {} });
  document.getElementById("printBtn").addEventListener("click", () => {
    const card = cards.querySelector(".recipe-card");
    const prev = card ? card.style.transform : "";
    if (card) { card.style.transform = "none"; card.style.marginBottom = "0"; }
    window.print();
    if (card) { card.style.transform = prev; fitCard(); }
  });
  document.getElementById("pngBtn").addEventListener("click", async () => {
    const card = cards.querySelector(".recipe-card");
    if (!card) return;
    toast.textContent = "Preparing image\u2026";
    const prevT = card.style.transform;
    const prevM = card.style.marginBottom;
    card.style.transform = "none";
    card.style.marginBottom = "0";
    try {
      if (!window.html2canvas) {
        await new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
      }
      const canvas = await window.html2canvas(card, { backgroundColor: "#ffffff", scale: 2, useCORS: true });
      const dataUrl = canvas.toDataURL("image/png");
      const slug = (recipe.name || "recipe").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "recipe";
      const a = document.createElement("a");
      a.download = slug + ".png";
      a.href = dataUrl;
      document.body.appendChild(a);
      a.click();
      a.remove();
      const preview = document.getElementById("exportPreview");
      preview.hidden = false;
      preview.classList.remove("hidden");
      preview.replaceChildren();
      const img = document.createElement("img");
      img.alt = recipe.name || "Recipe card";
      img.src = dataUrl;
      img.className = "w-full rounded-2xl border border-outline-variant";
      preview.appendChild(img);
      toast.textContent = "PNG ready.";
    } catch (e) {
      toast.textContent = "Could not export PNG.";
    }
    card.style.transform = prevT;
    card.style.marginBottom = prevM;
    fitCard();
    setTimeout(() => { toast.textContent = ""; }, 2800);
  });
  const toggleBtn = document.getElementById("toggleEditor");
  toggleBtn.addEventListener("click", () => {
    const open = editor.hidden;
    editor.hidden = !open;
    toggleBtn.textContent = open ? "Hide editor" : "Edit recipe";
    if (open) editor.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("shareBtn").addEventListener("click", async () => {
    writeHash();
    try {
      await navigator.clipboard.writeText(location.href);
      toast.textContent = "Link copied.";
    } catch (e) {
      toast.textContent = location.href;
    }
    setTimeout(() => { toast.textContent = ""; }, 2800);
  });
  window.addEventListener("hashchange", () => {
    if (suppressHash) return;
    const decoded = decodeRecipe(location.hash);
    if (decoded) applyRecipe(decoded, { updateHash: false });
  });
  applyRecipe(decodeRecipe(location.hash) || structuredClone(DEFAULT_RECIPE), { updateHash: !location.hash });
})();
