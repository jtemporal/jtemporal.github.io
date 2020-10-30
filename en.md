---
layout: default
title: English
image: /images/logo.jpeg
permalink: "/en/"
lang: en
locale: en_US

---


<div class="row pack">
{% for post in site.posts %}
{% if post.tags contains "english" or post.tags contains "English" %}
<div class="col-md-4 card">
<a href="{{ post.url | prepend: site.url }}" class="index-anchor">
<div class="panel panel-default">

  {% if post.image %}
  <img width="100%" src="{{site.baseurl}}{{site.url}}{{post.image}}" alt="{{post.title}}">
  {% else %}
  <img width="100%" src="{{site.baseurl}}{{site.url}}{{site.default-image}}" alt="{{site.title}}">
  {% endif %}

  <div class="panel-body">
    <h3 class="panel-title pull-left">{{ post.title }}</h3><br><span class="post-meta pull-left"><small>{{ post.date | date: "%b %-d, %Y" }}</small></span>
  </div>

  <div class="panel-body">
    {% if post.description %}
      <small>{{ post.description }}</small>
   {% else %}
    <small>{{ post.excerpt | strip_html | strip_newlines | truncate: 70 }}</small>
   {% endif %}
  </div>
</div>
</a>
</div>
{% endif %}
{% endfor %}
</div>
