---
layout: default
title: English
description: English blog posts
image: /images/logo.webp
permalink: "/en/"
lang: en
translations:
  - lang: pt
    url: "/pt"
---

<div class="site-container py-12">
  <div class="mb-12">
    <h1 class="font-display text-display-lg-mobile text-on-surface dark:text-inverse-on-surface">English Posts</h1>
    <div class="mt-2 h-1 w-20 rounded-full bg-primary"></div>
  </div>

  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {% assign posts = site.posts | where: "type", "post" %}
    {% for post in posts %}
      {% if post.lang == "en" %}
        {% include post-card.html %}
      {% endif %}
    {% endfor %}
  </div>
</div>