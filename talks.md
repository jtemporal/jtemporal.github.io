---
layout: default
title: Talks
image: /images/logo.png
permalink: "/talks/"

---


{% for post in site.posts %}
{% if post.type == "talk" %}
{{ post.date | date: "%b %-d, %Y" }} - <a href="{{ post.url | prepend: site.url}}">{{ post.title }}</a>
{% endif %}
{% endfor %}

