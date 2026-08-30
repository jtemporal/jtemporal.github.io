---
layout: post
type: video
title: "git reset --hard throws away your code. Use it carefully"
date: 2026-08-06 00:00:00 -0300
last_modified_at: 2026-08-06
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: git reset --hard discards the commits and the changes. Only use it when you are sure.
related: true
posts_list:
- undoing-the-last-commits-using-git-reset
- recovering-lost-commits-with-git-reflog
- undo-anything-in-git-reset-vs-revert
---

This git command deletes your code. Most people misuse it.

`git reset --hard` throws away the changes in those commits, not just the commits. Only use it when you are sure. If you regret it, reflog can usually bring it back.

Soft or default reset keeps your changes in place, so reach for those first.

Want the full breakdown of soft, mixed, and hard reset? Watch the full video: [Undo anything in Git](/undo-anything-in-git-reset-vs-revert/)

<center>
<iframe style="max-width:100%; width:560px; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/4dyNmKtMJHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

Follow for the safe way to undo anything in git!
