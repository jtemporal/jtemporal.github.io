---
layout: post
type: video
title: "git rebase: catch up with main on your branch"
date: 2026-07-07 00:00:00 -0300
last_modified_at: 2026-07-07
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: Use git rebase to replay your commits on top of the latest main and stay current on busy projects.
related: true
posts_list:
- updating-a-branch-with-git-rebase
- solving-conflicts
- fixing-the-branch-source-with-git-rebase
---

If you work on a project with other people, there is a good chance that `main` keeps moving while you work on your branch. One way to catch up with those changes is using `git rebase`. 🤔

Hop onto your branch and then run `git rebase main`. That replays your commits on top of the latest `main`.

It is almost like you started your branch today, with everybody else's work already in it.

And if there is a conflict, rebase will automatically pause for you to fix it and then continue.

If you are working on a project with a lot of contributions all the time, staying current is way easier than trying to fit everything in with a merge later.

Want the full breakdown? I wrote about this here: [Updating a branch with git rebase](/updating-a-branch-with-git-rebase/)

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/tnIR6WMzJ-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

Follow for more git tips like this!