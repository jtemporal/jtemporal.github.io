---
layout: post
type: video
title: "Clean up your Git stash list with git stash drop"
date: 2026-07-23 00:00:00 -0300
last_modified_at: 2026-07-23
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: Old stashes pile up and cause conflict headaches. Use git stash drop to keep your stash list clean.
related: true
posts_list:
- why-the-git-stash-drop-is-useful
- using-git-stash-and-git-stash-pop
- git-stash-stack-short
---

If you like to use stash just to keep your workspace clean, you should learn how to drop them.

A stack of old stashes is a recipe for conflicts later. So it's always a good measure to maintain that stash list clean.

When you are done with a stash, make sure to use `git stash drop`.

If you want to drop a specific stash, you can always use the curly brackets notation to reference it:

```console
git stash drop stash@{1}
```

If you don't pass an index, it drops the most recent one (`stash@{0}`).

Want the full explanation with examples? I covered it here: [Learn why the command git stash drop is useful](/why-the-git-stash-drop-is-useful/)

<center>
<iframe style="max-width:100%; width:560px; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/LJFSLq_NnYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

Follow along for more git tips like this!
