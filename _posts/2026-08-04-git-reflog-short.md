---
layout: post
type: video
title: "git reflog: recover work after a hard reset"
date: 2026-08-04 00:00:00 -0300
last_modified_at: 2026-08-04
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: A hard reset made your work vanish. git reflog is the undo for the undo.
related: true
posts_list:
- recovering-lost-commits-with-git-reflog
- undoing-the-last-commits-using-git-reset
- undo-anything-in-git-reset-vs-revert
---

You did a hard reset and your work vanished. It's not gone. Run `git reflog`.

Git logged every place `HEAD` has been. Find the state you want, copy the hash, and `git reset --hard` to that hash. Your work is back like nothing happened.

Reflog is your undo for the undo.

Want the full walkthrough with examples? I covered it here: [Recovering lost commits with git reflog](/recovering-lost-commits-with-git-reflog/)

<center>
<iframe style="max-width:100%; width:560px; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/qrgMrNPGPl0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

Follow so you remember it!
