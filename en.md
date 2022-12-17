---
layout: default
title: English
image: https://res.cloudinary.com/jesstemporal/image/upload/v1671312046/logo_mh5fv4.png
permalink: "/en/"
lang: en
translated: "/pt"

---

<div class="row pack">
{% assign posts = site.posts | where: "type", "post" %}
{% for post in posts %}
{% if post.lang == "en_US" or post.lang == "en" or page.lang == "en" or post.tags contains "english" or post.tags contains "English" %}
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
