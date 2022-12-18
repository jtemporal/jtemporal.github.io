---
layout: default
title: Palestras
image: https://res.cloudinary.com/jesstemporal/image/upload/v1671312046/logo_mh5fv4.png
permalink: "/palestras/"
lang: pt_BR
translated: /talks

---
{% if post.lang == "en" or page.lang  == "en_US" %}
  # Talks, podcasts and streams
{% else %}
  # Palestras, podcasts e lives
{% endif %}
<br>

{% for post in site.posts %}
  {% if post.type == "talk" %}
    {{ post.date | date: "%b %-d, %Y" }} - <a href="{{ post.url | prepend: site.url}}">{{ post.title }}</a>
  {% endif %}
{% endfor %}