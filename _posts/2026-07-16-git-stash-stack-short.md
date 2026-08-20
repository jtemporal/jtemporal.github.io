---
layout: post
type: video
title: "Your Git stashes live in a stack"
date: 2026-07-16 00:00:00 -0300
last_modified_at: 2026-07-16
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: Git stashes pile up like a stack — newest is always stash@{0}, and git stash pop grabs that one first.
related: true
posts_list:
- using-git-stash-and-git-stash-pop
- why-the-git-stash-drop-is-useful
- git-stash-pop-vs-apply-short
---

Did you know that Git stashes get piled up on top of each other like in a stack?

That means that every time you stash, Git bundles up all of the changes and puts them on top of the old stashes you already had.

If you run `git stash list`, you can see all of your stashes. And every single one of them has an index.

The new stash always on top will always have the index zero. And then one, two, three, and going back until you finish the stack.

That also means that when you do `git stash pop` without picking any specific stash, Git will use the latest one — always the stash of index zero.

Because stash works in the fashion of a stack, the last one in is always the first one out. And this is good to know, especially if you have more than one stash going.

Want the full stash workflow (pop, apply, and drop)? I covered it here: [Using git stash: pop, apply, and drop](/using-git-stash-and-git-stash-pop/)

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/0c9d5e8NgH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Follow along for more git tips like this!
