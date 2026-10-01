/**
 * Recipe cards — shareable one-page recipe grid.
 * Same IIFE + readyState pattern as js/copy-code.js.
 */
(function () {
  'use strict';

  if (window.__recipeCardsInitialized) return;
  window.__recipeCardsInitialized = true;

  var DEFAULT_RECIPE = {
    name: 'Caramel bottom sweet potatoes',
    banners: ['Preheat oven to 190\u00b0C or 200\u00b0C', 'Line a sheet with parchment'],
    rows: [
      'Sweet potatoes (as many as your heart desires)',
      'Salt, just a little',
      'Pepper, to taste'
    ],
    actions: [
      { label: 'wash\\ntrim ends', start: 0, end: 0 },
      { label: 'split\\nlengthwise', start: 0, end: 0 },
      { label: 'season\\ncut side', start: 1, end: 2 },
      { label: 'face down\\non sheet', start: 0, end: 2 },
      { label: 'bake\\n45 min\u20131 h\\ncool, flip,\\nserve', start: 0, end: 2 }
    ]
  };

  var INPUT_CLASS = 'w-full min-w-0 rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-on-surface dark:bg-inverse-surface dark:text-inverse-on-surface';
  var ICON_BTN_CLASS = 'flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant bg-surface-container-low text-on-surface-variant hover:border-primary hover:text-primary';
  var SELECT_CLASS = 'min-w-0 rounded-lg border border-outline-variant bg-surface-container-lowest px-1 py-2 text-sm dark:bg-inverse-surface';

  var nameInput, cards, jsonEl, editor, toast, bannerList, rowList, actList, toggleBtn, recipe;
  var suppressHash = false;

  function init() {
    nameInput = document.getElementById('nameInput');
    cards = document.getElementById('cards');
    jsonEl = document.getElementById('json');
    editor = document.getElementById('editor');
    toast = document.getElementById('toast');
    bannerList = document.getElementById('bannerList');
    rowList = document.getElementById('rowList');
    actList = document.getElementById('actList');
    toggleBtn = document.getElementById('toggleEditor');
    if (!nameInput || !cards) return;
    recipe = structuredClone(DEFAULT_RECIPE);
    bindEvents();
    applyRecipe(decodeRecipe(location.hash) || structuredClone(DEFAULT_RECIPE), {
      updateHash: !location.hash
    });
  }

  function bindEvents() {
    nameInput.addEventListener('input', function () {
      recipe.name = cleanText(nameInput.value, 120);
      afterEdit();
    });
    document.getElementById('addBanner').addEventListener('click', function () {
      recipe.banners.push('');
      afterEdit(true);
    });
    document.getElementById('addRow').addEventListener('click', function () {
      recipe.rows.push('');
      afterEdit(true);
    });
    document.getElementById('addAct').addEventListener('click', function () {
      recipe.actions.push({ label: 'mix', start: 0, end: Math.max(0, recipe.rows.length - 1) });
      afterEdit(true);
    });
    jsonEl.addEventListener('input', function () {
      try { applyRecipe(JSON.parse(jsonEl.value)); } catch (err) {}
    });
    document.getElementById('printBtn').addEventListener('click', function () { exportFile('pdf'); });
    document.getElementById('pngBtn').addEventListener('click', function () { exportFile('png'); });
    document.getElementById('shareBtn').addEventListener('click', copyShareLink);
    toggleBtn.addEventListener('click', function () {
      setEditorOpen(editor.hasAttribute('hidden'));
    });
    window.addEventListener('resize', fitCard);
    window.addEventListener('hashchange', function () {
      if (suppressHash) return;
      var decoded = decodeRecipe(location.hash);
      if (decoded) applyRecipe(decoded, { updateHash: false });
    });
  }

  function toBase64Url(str) {
    var bytes = new TextEncoder().encode(str);
    var bin = '';
    bytes.forEach(function (b) { bin += String.fromCharCode(b); });
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  function fromBase64Url(s) {
    var pad = s.length % 4 === 0 ? '' : '='.repeat(4 - (s.length % 4));
    var b64 = s.replace(/-/g, '+').replace(/_/g, '/') + pad;
    var bin = atob(b64);
    var bytes = Uint8Array.from(bin, function (c) { return c.charCodeAt(0); });
    return new TextDecoder().decode(bytes);
  }

  function encodeRecipe(r) { return toBase64Url(JSON.stringify(r)); }

  function decodeRecipe(hash) {
    var raw = hash.replace(/^#/, '');
    var payload = raw.indexOf('r=') === 0 ? raw.slice(2) : raw;
    if (!payload) return null;
    try { return sanitizeRecipe(JSON.parse(fromBase64Url(payload))); }
    catch (err) { return null; }
  }

  function writeHash() {
    var next = '#r=' + encodeRecipe(recipe);
    if (location.hash === next) return;
    suppressHash = true;
    history.replaceState(null, '', next);
    requestAnimationFrame(function () { suppressHash = false; });
  }

  function cleanText(value, max) {
    return String(value == null ? '' : value)
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
      .replace(/^\uFEFF/, '')
      .slice(0, max);
  }

  function sanitizeRecipe(raw) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
    var rows = Array.isArray(raw.rows) ? raw.rows.slice(0, 60).map(function (r) { return cleanText(r, 240); }) : [];
    if (!rows.length) return null;
    var banners = Array.isArray(raw.banners)
      ? raw.banners.slice(0, 12).map(function (b) { return cleanText(b, 200); }).filter(Boolean)
      : [];
    var actions = Array.isArray(raw.actions) ? raw.actions.slice(0, 16).map(function (a) {
      var item = a && typeof a === 'object' ? a : {};
      var start = Number.parseInt(item.start, 10);
      var end = Number.parseInt(item.end, 10);
      return {
        label: cleanText(String(item.label == null ? '' : item.label).replace(/\r/g, ''), 200),
        start: Number.isFinite(start) ? start : 0,
        end: Number.isFinite(end) ? end : 0
      };
    }) : [];
    return { name: cleanText(raw.name, 120) || 'Untitled recipe', banners: banners, rows: rows, actions: actions };
  }

  function setCellText(el, text) {
    String(text).split(/\n|\\n/).forEach(function (part, i) {
      if (i) el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode(part));
    });
  }

  function iconButton() {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = ICON_BTN_CLASS + ' icon-remove';
    btn.setAttribute('aria-hidden', 'true');
    btn.textContent = '\u00d7';
    return btn;
  }

  function renderCard() {
    var acts = recipe.actions || [];
    var colCount = 1 + acts.length;
    var n = (recipe.rows || []).length;
    document.title = (recipe.name || 'Recipe') + ' \u00b7 recipe card';
    var shell = document.createElement('div');
    shell.className = 'recipe-shell flex w-full justify-center';
    var card = document.createElement('div');
    card.className = 'recipe-card rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-cozy dark:border-outline dark:bg-inverse-surface';
    var table = document.createElement('table');
    var titleRow = document.createElement('tr');
    var titleCell = document.createElement('th');
    titleCell.className = 'recipe-banner title';
    titleCell.colSpan = colCount;
    titleCell.textContent = recipe.name || 'Untitled recipe';
    titleRow.appendChild(titleCell);
    table.appendChild(titleRow);
    (recipe.banners || []).forEach(function (b) {
      var tr = document.createElement('tr');
      var th = document.createElement('th');
      th.className = 'recipe-banner';
      th.colSpan = colCount;
      th.textContent = b;
      tr.appendChild(th);
      table.appendChild(tr);
    });
    for (var r = 0; r < n; r++) {
      var tr = document.createElement('tr');
      var ing = document.createElement('td');
      ing.className = 'recipe-ing';
      ing.textContent = recipe.rows[r];
      tr.appendChild(ing);
      acts.forEach(function (a, ai) {
        if (r === a.start) {
          var td = document.createElement('td');
          td.className = 'recipe-act' + (ai === acts.length - 1 ? ' final' : '');
          td.rowSpan = Math.max(1, a.end - a.start + 1);
          setCellText(td, a.label);
          tr.appendChild(td);
        } else if (!(r > a.start && r <= a.end)) {
          tr.appendChild(document.createElement('td'));
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
    var shell = cards.querySelector('.recipe-shell');
    var card = cards.querySelector('.recipe-card');
    if (!shell || !card) return;
    card.style.transform = 'none';
    card.style.marginBottom = '0';
    shell.style.height = '';
    var scale = Math.min(1, shell.clientWidth / card.offsetWidth);
    card.style.transform = 'scale(' + scale + ')';
    shell.style.height = (card.offsetHeight * scale) + 'px';
  }

  function clampActions() {
    var max = Math.max(0, (recipe.rows || []).length - 1);
    (recipe.actions || []).forEach(function (a) {
      a.start = Math.min(Math.max(0, Number(a.start) || 0), max);
      a.end = Math.min(Math.max(a.start, Number(a.end) || 0), max);
    });
  }

  function renderForm() {
    nameInput.value = recipe.name || '';
    bannerList.replaceChildren();
    (recipe.banners || []).forEach(function (text, i) {
      bannerList.appendChild(lineRow('banner', i, text, (recipe.banners || []).length > 1));
    });
    rowList.replaceChildren();
    (recipe.rows || []).forEach(function (text, i) {
      rowList.appendChild(lineRow('row', i, text, (recipe.rows || []).length > 1));
    });
    actList.replaceChildren();
    var n = (recipe.rows || []).length;
    (recipe.actions || []).forEach(function (a, i) {
      actList.appendChild(actRow(i, a, n));
    });
    if (document.activeElement !== jsonEl) jsonEl.value = JSON.stringify(recipe, null, 2);
  }

  function lineRow(kind, i, text, canRemove) {
    var wrap = document.createElement('div');
    wrap.className = 'row-item';
    var idx = document.createElement('span');
    idx.className = 'w-8 text-right text-xs text-outline';
    idx.textContent = String(i + 1);
    var input = document.createElement('input');
    input.type = 'text';
    input.className = INPUT_CLASS;
    input.value = text;
    input.addEventListener('input', function () {
      if (kind === 'banner') recipe.banners[i] = cleanText(input.value, 200);
      else recipe.rows[i] = cleanText(input.value, 240);
      afterEdit();
    });
    var btn = iconButton();
    btn.disabled = !canRemove;
    btn.setAttribute('aria-label', 'Remove');
    btn.addEventListener('click', function () {
      if (kind === 'banner') recipe.banners.splice(i, 1);
      else { recipe.rows.splice(i, 1); clampActions(); }
      afterEdit(true);
    });
    wrap.append(idx, input, btn);
    return wrap;
  }

  function actRow(i, a, n) {
    var wrap = document.createElement('div');
    wrap.className = 'act-item';
    var label = document.createElement('textarea');
    label.className = 'recipe-act-label ' + INPUT_CLASS;
    label.value = String(a.label || '').replace(/\\n/g, '\n');
    label.placeholder = 'mix';
    label.addEventListener('input', function () {
      recipe.actions[i].label = cleanText(label.value.replace(/\n/g, '\\n'), 200);
      afterEdit();
    });
    var from = document.createElement('select');
    var to = document.createElement('select');
    from.className = SELECT_CLASS;
    to.className = SELECT_CLASS;
    for (var r = 0; r < n; r++) {
      from.appendChild(new Option(String(r + 1), r, false, r === a.start));
      to.appendChild(new Option(String(r + 1), r, false, r === a.end));
    }
    from.addEventListener('change', function () {
      recipe.actions[i].start = Number(from.value);
      if (recipe.actions[i].end < recipe.actions[i].start) recipe.actions[i].end = recipe.actions[i].start;
      afterEdit(true);
    });
    to.addEventListener('change', function () {
      recipe.actions[i].end = Number(to.value);
      if (recipe.actions[i].end < recipe.actions[i].start) recipe.actions[i].start = recipe.actions[i].end;
      afterEdit(true);
    });
    var btn = iconButton();
    btn.setAttribute('aria-label', 'Remove step');
    btn.addEventListener('click', function () {
      recipe.actions.splice(i, 1);
      afterEdit(true);
    });
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
    var clean = sanitizeRecipe(next);
    if (!clean) return;
    recipe = clean;
    clampActions();
    renderCard();
    renderForm();
    if (!opts || opts.updateHash !== false) writeHash();
  }

  function setEditorOpen(open) {
    editor.classList.toggle('hidden', !open);
    if (open) editor.removeAttribute('hidden');
    else editor.setAttribute('hidden', '');
    toggleBtn.textContent = open ? 'Hide editor' : 'Edit recipe';
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) editor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function flashToast(message) {
    toast.textContent = message;
    setTimeout(function () { toast.textContent = ''; }, 4000);
  }

  function copyToClipboard(text, done) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function () { done(); }).catch(function () { done(false); });
      return;
    }
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try { document.execCommand('copy'); done(); }
    catch (err) { done(false); }
    document.body.removeChild(textarea);
  }

  function copyShareLink() {
    writeHash();
    copyToClipboard(location.href, function (ok) {
      flashToast(ok === false ? location.href : 'Link copied.');
    });
  }

  function recipeSlug() {
    return (recipe.name || 'recipe').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'recipe';
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function canvasToBlob(canvas) {
    return new Promise(function (resolve) {
      if (canvas.toBlob) {
        canvas.toBlob(function (blob) { resolve(blob); }, 'image/png');
        return;
      }
      var dataUrl = canvas.toDataURL('image/png');
      var bin = atob(dataUrl.split(',')[1]);
      var bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      resolve(new Blob([bytes], { type: 'image/png' }));
    });
  }

  function prefersShareSheet() {
    var ua = navigator.userAgent || '';
    return /iPhone|iPad|iPod|Android/i.test(ua);
  }

  function offerFile(blob, filename, mime) {
    var file = new File([blob], filename, { type: mime });
    if (prefersShareSheet() && navigator.canShare) {
      try {
        if (navigator.canShare({ files: [file] })) {
          return navigator.share({ files: [file], title: recipe.name || filename }).then(function () {
            return 'shared';
          }).catch(function (err) {
            if (err && err.name === 'AbortError') return 'cancelled';
            return downloadBlob(blob, filename);
          });
        }
      } catch (err) { /* fall through */ }
    }
    return Promise.resolve(downloadBlob(blob, filename));
  }

  function downloadBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    return 'downloaded';
  }

  function captureCard() {
    var card = cards.querySelector('.recipe-card');
    if (!card) return Promise.reject(new Error('no card'));
    var prevT = card.style.transform;
    var prevM = card.style.marginBottom;
    card.style.transform = 'none';
    card.style.marginBottom = '0';
    var ready = window.html2canvas
      ? Promise.resolve()
      : loadScript('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js');
    return ready.then(function () {
      return window.html2canvas(card, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true
      });
    }).then(function (canvas) {
      card.style.transform = prevT;
      card.style.marginBottom = prevM;
      fitCard();
      return canvas;
    }, function (err) {
      card.style.transform = prevT;
      card.style.marginBottom = prevM;
      fitCard();
      throw err;
    });
  }

  function pdfFromCanvas(canvas) {
    var ready = (window.jspdf && window.jspdf.jsPDF)
      ? Promise.resolve()
      : loadScript('https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js');
    return ready.then(function () {
      var JsPDF = window.jspdf.jsPDF;
      var pxToPt = 72 / 96;
      var w = canvas.width * pxToPt / 2;
      var h = canvas.height * pxToPt / 2;
      var pdf = new JsPDF({ orientation: w > h ? 'l' : 'p', unit: 'pt', format: [w, h] });
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, w, h);
      return pdf.output('blob');
    });
  }

  function exportFile(kind) {
    var slug = recipeSlug();
    toast.textContent = kind === 'pdf' ? 'Preparing PDF\u2026' : 'Preparing image\u2026';
    captureCard().then(function (canvas) {
      if (kind === 'pdf') {
        return pdfFromCanvas(canvas).then(function (blob) {
          return offerFile(blob, slug + '.pdf', 'application/pdf');
        });
      }
      return canvasToBlob(canvas).then(function (blob) {
        return offerFile(blob, slug + '.png', 'image/png');
      });
    }).then(function (how) {
      if (how === 'shared') flashToast('Use Save Image / Save to Files in the share sheet.');
      else if (how === 'cancelled') flashToast('');
      else flashToast(kind === 'pdf' ? 'PDF downloaded.' : 'Image downloaded.');
    }).catch(function () {
      flashToast(kind === 'pdf' ? 'Could not export PDF.' : 'Could not export PNG.');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
