---
layout: default
title: Talks
image: https://res.cloudinary.com/jesstemporal/image/upload/v1671312046/logo_mh5fv4.png
permalink: "/talks/"

---
{% if post.lang == "en_US" or page.lang  == "en_US" or page.lang  == "en" or post.tags contains "english" %}
# Talks, podcasts and streams
<br>
{% else %}
# Palestras, podcasts e lives
<br>
{% endif %}
      
{% for post in site.posts %}
{% if post.type == "talk" %}
{{ post.date | date: "%b %-d, %Y" }} - <a href="{{ post.url | prepend: site.url}}">{{ post.title }}</a>
{% endif %}
{% endfor %}