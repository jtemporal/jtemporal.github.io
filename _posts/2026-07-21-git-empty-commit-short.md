---
layout: post
type: video
title: "Force a repo rebuild with an empty commit"
date: 2026-07-21 00:00:00 -0300
last_modified_at: 2026-07-21
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: Need to force a rebuild of your GitHub Pages site? Create an empty commit with --allow-empty.
related: true
posts_list:
- force-rebuild-jekyll-en
---

Normally, Git doesn't let you just commit nothing. But if you use the `--allow-empty` flag, it will.

Sometimes you need to force the rebuild of your repo (for example a GitHub Pages / Jekyll site that isn't picking up changes), and this is a clean way to do it without making up fake file changes.

Simply run:

```console
git commit --allow-empty -m "Forcing website rebuild"
```

It creates a real commit for you, but without any changes in it. Think of it like a little nudge for your build to actually go through.

Want the full write-up? I covered empty commits for GitHub Pages rebuilds here: [Using empty commits to rebuild GitHub Pages websites](/force-rebuild-jekyll-en/)

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/qvALqmgTiN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Follow along for more git tips like this!
