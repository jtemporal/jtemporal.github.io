---
layout: default
title: English
image: /images/logo.png
permalink: "/en/"
lang: en_US

---

<div class="row pack">
{% for post in site.posts %}
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
