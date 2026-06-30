---
layout: post
type: video
title: "git stash: save your work without committing"
date: 2026-06-18 00:00:00 -0300
last_modified_at: 2026-06-18
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: Save uncommitted changes with git stash so you can switch branches and come back later.
related: true
posts_list:
- using-git-stash-and-git-stash-pop
- why-the-git-stash-drop-is-useful
- recovering-lost-commits-with-git-reflog
---

You're working, some priority comes up, but you're not ready to make a commit yet, and you need to switch branches. What do you do? 🤔

Some people like to make a throwaway commit just to save the work so they can undo it later, but I prefer `git stash`.

Think of it like a stack. You take the changes you made, bundle them up, save them locally, and then your working directory goes back to a clean state.

Each bundle is a stash and it gets saved on index zero.

You can then switch branches, do whatever you need to do, and when you come back, you can `pop` or `apply` the stash, and your most recent changes go back to where they were.

One heads up though: if you have new files that git isn't tracking yet, they won't be automatically added to this stash. So before you make a stash with new files, you need to stage them first. 😅

Want the full breakdown on git stash? I covered it in more depth here: [Using git stash: pop, apply, and drop](/using-git-stash-and-git-stash-pop/)

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/rnAiEg_si8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

If you want more git tips that save your work, follow along!