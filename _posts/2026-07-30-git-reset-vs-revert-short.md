---
layout: post
type: video
title: "Git reset or git revert: which one should you use?"
date: 2026-07-30 00:00:00 -0300
last_modified_at: 2026-07-30
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: Reset and revert both undo commits, but they are for different situations. Ask one question: did you already push?
related: true
posts_list:
- undoing-more-than-one-commit-at-once-with-git-revert
- recovering-lost-commits-with-git-reflog
- undoing-the-last-commits-using-git-reset
---

Git reset or git revert. They sound the same, but they're intended for very different purposes.

Ask one question: **Did you already push it?**

- If the changes are still on your machine, use **reset**.
- If you already shared them with your team, use **revert**, which walks back the changes safely with a new commit instead of rewriting history everyone already has.

Rule of thumb: if you pushed it, revert. If it's still local, reset.

Want the full breakdown (soft / mixed / hard reset, revert by hash, and the reflog safety net)? Watch the full video: [Undo Anything in Git](/undo-anything-in-git-reset-vs-revert/)

<center>
<iframe style="max-width:100%; width:560px; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/tEjXP1m6gJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

Follow along for more git tips like this!
