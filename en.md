---
layout: default
title: English
description: English blog posts
image: https://res.cloudinary.com/jesstemporal/image/upload/v1671312046/logo_mh5fv4.png
permalink: "/en/"
lang: en_US
translated: "/pt"

---

<div class="row pack">
{% assign posts = site.posts | where: "type", "post" %}
{% for post in posts %}
{% if post.lang == "en" %}
<div class="col-md-4 card">
  <a href="{{ post.url | prepend: site.url }}" class="index-anchor">
    <div class="panel panel-default">

    {% include images-logic.html %}

    {% include post-card.html %}

    </div>
  </a>
</div>
{% endif %}
{% endfor %}
</div>
