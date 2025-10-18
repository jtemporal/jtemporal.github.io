---
layout: default
bookbanner: true
title: All Series
description: Browse all blog post series
image: https://res.cloudinary.com/jesstemporal/image/upload/v1760808926/covers/series_sd7fdp.jpg
permalink: "/series/"
lang: en
translations:
  - lang: pt
    url: "/series-pt"
---

{% include language-detection.html %}

<div class="row">
<div class="col-md-8">
    <article class="post">
        <header class="post-header">
            <h1 class="post-title">All Series</h1>
        </header>

        <div class="post-content">
            {% assign all_series = site.posts | where: "lang", "en" | map: "series" | compact | uniq | sort %}

            {% if all_series.size > 0 %}
                {% for series in all_series %}
                    {% assign series_posts = site.posts | where: "series", series | where: "lang", "en" | sort: "series_order" %}
                    {% assign series_description = "" %}
                    {% for desc in site.data.localization.series_descriptions %}
                        {% if desc.en == series %}
                            {% assign series_description = desc.description %}
                            {% break %}
                        {% endif %}
                    {% endfor %}

                    <div class="series-summary">
                        <h3><a href="/series/{{ series | slugify }}/">{{ series }}</a></h3>
                        <p>{{ series_posts.size }} posts in this series</p>
                        
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
