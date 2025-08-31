---
comments: true
date: '2017-12-27 10:00:00'
description: How to add a thumbnail on your site
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
lang: en
layout: post
tags:
- pro tip
- web
- web dev
- html
- meta tags
- share
- english
title: Add colors when sharing your website
translations:
- lang: pt
  url: /site-thumbnail
author_note: false
type: post
---


Have you ever noticed that when you share a link on your favorite social network, these links load images to show? A kind of website thumbnail?

Well, today it is widely used on several social networks, but it was Facebook who started this game by implementing something called The [Open Graph protocol](http://ogp.me/). Objects within Facebook are placed in a social graph and are known as "rich objects." This means, in short, that each object has a collection of characteristics that add information to these objects.

And Facebook wanted the pages shared within it to be able to load the same amount of information, and that's where meta tags come in. The idea is to use meta tags to richly represent each internet page within a social graph.

There are several meta tags that can be used, but in today's pro tip, we will talk about the `og:image`.

## Pizza De Dados website

Last week, I tried to make the [Pizza de Dados](https://pizzadedados/en) website more visually appealing, and one of the things I wanted to change was to add the meta tag with our 🍕 logo.

Before, when sharing the Pizza website, we had something like this:

![Photo of Pizza’s sharing on Facebook before adding the meta tag](/images/og-image/antes-tag.png)

Do you notice how it looks very dull? Sometimes, in an attempt to fill in the information about the page, the social network may still end up choosing any image that exists on the page and using it as a "thumbnail".

So to change this behavior and add some color to our posts following the official OGP site, we need to add a line similar to this:

```html
<meta property="og:image" content="http://ia.media-imdb.com/images/rock.jpg" />
```

in the website head. And 🌈automagically🌈 when sharing the Pizza website, we have:

![Photo of Pizza’s sharing on Facebook after adding the meta tag](/images/og-image/depois-tag.png)

Awesome, right? Now you can use it on your website too 😉.

---

## Links

[Open Graph protocol](http://ogp.me/) official website.
