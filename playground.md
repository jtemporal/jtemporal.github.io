---
layout: post
title: Playground
date: 2021-12-24T18:55:59.000-02:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png
comments: true
description: Uma receita infalível para você entender e resolver conflitos sem medo
tags:
- tutorial
- git
- português
- portugues
related:
- _posts/2021-10-05-5-dicas-para-fazer-o-seu-pull-request-brilhar.md
- _posts/2021-12-24-criando-pastas-vazias-no-github-com-o-gitkeep.md
- _posts/2021-08-21-conheca-o-gitfichas.md

---

{% include related-art-title.html %}
{% assign relatedposts = post.related %}
  
{% for post in post.related %}
    <div class="col-sm-3 card-recent">
      <a href="{{ post.url | prepend: site.url }}" class="index-anchor">
        <div class="panel panel-default">
          {% include images-logic.html %}
          <div class="panel-body">
            <h3 class="panel-title pull-left">{{ post.title }}</h3>
            <br>
            <span class="post-meta pull-left">
              <small>{{ post.date | date: "%b %-d, %Y" }}</small>
            </span>
          </div>

          <div class="panel-body">
            {% if post.description %}
              <small>{{ post.description }}</small>
            {% else %}
              <small>{{ post.excerpt | strip_html | strip_newlines | truncate: 70 }}</small>
            {% endif %}
          </div>
        </div>
      </a>
    </div>
  {% endfor %}
