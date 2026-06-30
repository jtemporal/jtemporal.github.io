---
layout: default
title: Português
description: Artigos em Português
image: /images/logo.webp
permalink: "/pt/"
lang: pt
translations:
  - lang: en
    url: "/en"
---

<div class="site-container py-12">
  <div class="mb-12">
    <h1 class="font-display text-display-lg-mobile text-on-surface dark:text-inverse-on-surface">Artigos em Português</h1>
    <div class="mt-2 h-1 w-20 rounded-full bg-primary"></div>
  </div>

  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {% assign posts = site.posts | where: "type", "post" %}
    {% for post in posts %}
      {% if post.lang == "pt" %}
        {% include post-card.html %}
      {% endif %}
    {% endfor %}
  </div>
</div>