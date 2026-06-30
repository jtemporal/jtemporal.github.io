---
layout: post
type: video
title: "git stash pop vs apply: which one should you use?"
date: 2026-06-23 00:00:00 -0300
last_modified_at: 2026-06-23
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: Learn the difference between git stash pop and git stash apply, and when to use each one.
related: true
posts_list:
- git-stash-save-your-work-short
- using-git-stash-and-git-stash-pop
- why-the-git-stash-drop-is-useful
---

You stashed your changes, but now you want them back. Do you use `pop` or `apply`? 🤔

They function similarly, but they are not the same thing.

`apply` puts the changes back into place so you can continue your work, but it keeps the stash entry around so you can use it again later.

`pop` does exactly that, but it also drops the stash from the list.

I usually prefer using `pop` because that keeps my stash list clean. But I also use `apply` when I'm unsure if there are any conflicts that need solving, or if I think I'll need to use those changes in another place again. 😅

Want the deeper dive on git stash? I covered the full workflow over here: [Using git stash: pop, apply, and drop](/using-git-stash-and-git-stash-pop/)

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/64cz9VYtzDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

Follow along for more git tips like this!