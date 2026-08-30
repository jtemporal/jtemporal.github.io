---
layout: post
type: video
title: "What HEAD~1 means in git"
date: 2026-08-18 00:00:00 -0300
last_modified_at: 2026-08-18
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: HEAD is the commit you are on. HEAD~1 is the one right before it. That's how reset knows how far to rewind.
related: true
posts_list:
- undoing-the-last-commits-using-git-reset
- undo-anything-in-git-reset-vs-revert
- recovering-lost-commits-with-git-reflog
---

Everyone types `HEAD~1` in git. Do you know what that means?

`HEAD` is the pointer to the commit you are on. The `~1` means go one commit back. So `HEAD~1` is the commit right before the current one. `HEAD~2` is two commits back, and so on.

That's how reset knows how far to rewind. It's a small thing that makes git click.

Want the full reset walkthrough? I covered HEAD and reset here: [Undoing the last commits using git reset](/undoing-the-last-commits-using-git-reset/)

<center>
<iframe style="max-width:100%; width:560px; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/51Ja8WLrrvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

Follow for more git tips like this!
