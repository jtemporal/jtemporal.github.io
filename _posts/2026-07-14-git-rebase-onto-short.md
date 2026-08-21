---
layout: post
type: video
title: "Fix a branch you made from the wrong place with git rebase --onto"
date: 2026-07-14 00:00:00 -0300
last_modified_at: 2026-07-14
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: Accidentally branched off the wrong branch? Use git rebase --onto to move just your commits to the right source.
related: true
posts_list:
- fixing-the-branch-source-with-git-rebase
- updating-a-branch-with-git-rebase
- undoing-more-than-one-commit-at-once-with-git-revert
---

You accidentally branched off from the wrong branch. How do you fix the source?

Say you meant to branch off of `main`, but you accidentally branched off from `task-1` instead. So now `task-2`, your new branch, has the wrong base.

`git rebase --onto` can be pretty handy in these situations.

You use `git rebase --onto` and give it three branches:

1. `main` — the branch you wanted from the beginning
2. `task-1` — the wrong branch you used
3. `task-2` — the branch you want to fix the base of

```console
git rebase --onto main task-1 task-2
```

Git replays your `task-2` commits on top of `main`. That way `task-2` continues to be your branch, but it has the right base.

The one rule with this command is that you always want to name the three branches to avoid dropping commits.

Want the full walkthrough with diagrams? I covered it here: [Fixing the branch source with git rebase](/fixing-the-branch-source-with-git-rebase/)

<center>
<iframe style="max-width:100%; width:560px; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/gonfHBYurhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

Follow along for more git tips like this!
