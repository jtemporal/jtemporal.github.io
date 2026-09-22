---
layout: standalone
title: Recipe cards
description: A one-page recipe you can read while you cook — ingredients on the left, the order of mixing and baking on the right.
permalink: /recipe-cards/
lang: en
image: /images/recipe-cards-og.svg
stylesheets:
  - /assets/css/recipe-cards.css
scripts:
  - /assets/js/recipe-cards.js
---

<div class="recipe-app">
  <header class="mb-8 text-center">
    <h1 class="font-display text-display-lg-mobile md:text-display-lg text-on-surface dark:text-inverse-on-surface">Recipe cards</h1>
    <div class="mx-auto mt-4 h-1 w-20 rounded-full bg-primary"></div>
    <p class="mx-auto mt-6 max-w-xl text-on-surface-variant dark:text-inverse-on-surface">A one-page recipe you can read while you cook: ingredients on the left, the order of mixing and baking on the right.</p>
  </header>

  <div class="recipe-toolbar mb-8 flex flex-col items-center gap-4">
    <label class="flex w-full max-w-md flex-col gap-1 text-center text-label-sm font-semibold uppercase tracking-wide text-on-surface-variant">
      Recipe name
      <input type="text" id="nameInput" placeholder="Caramel bottom sweet potatoes" autocomplete="off"
        class="w-full rounded-full border border-outline bg-surface-container-lowest px-4 py-2 text-center font-display font-semibold text-on-surface dark:bg-inverse-surface dark:text-inverse-on-surface" />
    </label>
    <div class="flex flex-wrap items-center justify-center gap-3">
      <button type="button" class="btn-primary rounded-full" id="shareBtn">Copy share link</button>
      <button type="button" class="btn-secondary rounded-full" id="pngBtn">Export PNG</button>
      <button type="button" class="btn-secondary rounded-full" id="printBtn">Export PDF</button>
      <button type="button" class="btn-secondary rounded-full" id="toggleEditor" aria-expanded="false">Edit recipe</button>
    </div>
  </div>
  <p class="mb-4 min-h-[1.1em] text-center text-sm text-tertiary" id="toast"></p>
  <div id="exportPreview" class="mx-auto mb-6 hidden max-w-3xl text-center"></div>

  <div class="flex flex-col items-center pb-16" id="cards"></div>

  <div class="recipe-editor mt-10 grid hidden gap-4" id="editor" hidden>
    <section class="card-surface">
      <h2 class="mb-3 font-display text-headline-sm">Prep lines</h2>
      <div class="grid gap-2" id="bannerList"></div>
      <button type="button" class="btn-secondary mt-3 rounded-full border-dashed" id="addBanner">+ Add prep line</button>
    </section>
    <section class="card-surface">
      <h2 class="mb-3 font-display text-headline-sm">Ingredients</h2>
      <div class="grid gap-2" id="rowList"></div>
      <button type="button" class="btn-secondary mt-3 rounded-full border-dashed" id="addRow">+ Add ingredient</button>
    </section>
    <section class="card-surface">
      <h2 class="mb-3 font-display text-headline-sm">Steps</h2>
      <p class="mb-3 text-sm text-on-surface-variant">Each step is a column. The two numbers are the first and last ingredient it covers.</p>
      <div class="step-head text-on-surface-variant"><span></span><span>From</span><span>To</span><span></span></div>
      <div class="grid gap-2" id="actList"></div>
      <button type="button" class="btn-secondary mt-3 rounded-full border-dashed" id="addAct">+ Add step</button>
    </section>
    <details class="card-surface">
      <summary class="cursor-pointer text-sm text-on-surface-variant">Advanced JSON</summary>
      <textarea id="json" class="mt-3 min-h-[180px] w-full rounded-xl border border-outline-variant p-3 font-mono text-xs"></textarea>
    </details>
  </div>
</div>
