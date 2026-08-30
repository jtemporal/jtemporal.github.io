---
layout: post
type: video
title: "git commit --amend: fix the last commit without a new one"
date: 2026-08-11 00:00:00 -0300
last_modified_at: 2026-08-11
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: Fix a typo or a forgotten file in the last commit with git commit --amend. Don't amend after you push.
related: true
posts_list:
- undo-anything-in-git-reset-vs-revert
- undoing-the-last-commit-and-reusing-the-message
- undoing-the-last-commits-using-git-reset
---

Is that a typo in your commit message? Don't make a new commit. Run `git commit --amend -m` with your new message. It rewrites the last commit in place.

Forgot to add a file? Stage it, then amend with `--no-edit` to keep the message.

Just don't amend commits you already pushed.

Want the full undo toolkit (reset, revert, amend, and reflog)? Watch the full video: [Undo anything in Git](/undo-anything-in-git-reset-vs-revert/)

<center>
<iframe style="max-width:100%; width:560px; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/8RnLehNBG6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

Follow for more like this!
