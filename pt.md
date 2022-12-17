---
layout: default
title: Português
image: /images/logo.png
permalink: "/pt/"
lang: pt
translated: "/en"

---


<div class="row pack">
{% assign posts = site.posts | where: "type", "post" %}
{% for post in posts %}
{% if post.tags contains "português" or page.lang == "pt" or post.lang == "pt" %}
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
