---
layout: default
title: Português
image: https://res.cloudinary.com/jesstemporal/image/upload/v1671312046/logo_mh5fv4.png
permalink: "/pt/"
lang: pt_BR
translated: "/en"

---


<div class="row pack">
{% assign posts = site.posts | where: "type", "post" %}
{% for post in posts %}
{% if post.lang == "pt" %}
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
