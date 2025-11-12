---
layout: default
bookbanner: true
title: Todas as Séries
description: Navegue por todas as séries de posts do blog
image: /images/covers/series-pt.webp
permalink: "/series-pt/"
lang: pt
translations:
  - lang: en
    url: "/series"
---

{% include language-detection.html %}

<div class="row">
<div class="col-md-8">
    <article class="post">
        <header class="post-header">
            <h1 class="post-title">Todas as Séries</h1>
        </header>

        <div class="post-content">
            {% assign all_series = site.posts | where: "lang", "pt" | map: "series" | compact | uniq | sort %}

            {% if all_series.size > 0 %}
                {% for series in all_series %}
                    {% assign series_posts = site.posts | where: "series", series | where: "lang", "pt" | sort: "series_order" %}
                    {% assign series_description = "" %}
                    {% for desc in site.data.localization.series_descriptions %}
                        {% if desc.pt == series %}
                            {% assign series_description = desc.description %}
                            {% break %}
                        {% endif %}
                    {% endfor %}

                    <div class="series-summary">
                        <h3><a href="/series-pt/{{ series | slugify }}/">{{ series }}</a></h3>
                        <p>{{ series_posts.size }} posts nesta série</p>
                        
                        {% if series_description != "" %}
                            <p><em>{{ series_description }}</em></p>
                        {% elsif series_posts.first.description %}
                            <p><em>{{ series_posts.first.description }}</em></p>
                        {% else %}
                            <p><em>{{ series_posts.first.excerpt | strip_html | strip_newlines | truncate: 100 }}</em></p>
                        {% endif %}
                    </div>
                    {% unless forloop.last %}<hr>{% endunless %}
                {% endfor %}
            {% else %}
                {% if current_lang == "en" %}
                    <p>No series found.</p>
                {% else %}
                    <p>Nenhuma série encontrada.</p>
                {% endif %}
            {% endif %}
        </div>
    </article>
</div>

{% include sidebar.html %}

</div>
