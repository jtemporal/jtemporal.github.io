---
layout: post
type: video
title: "git merge conflicts: what to do when git yells at you"
date: 2026-06-30 00:00:00 -0300
last_modified_at: 2026-06-30
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: Learn what a git merge conflict means and how to resolve it without panicking.
related: true
posts_list:
- solving-conflicts
- updating-a-branch-with-git-rebase
- recovering-lost-commits-with-git-reflog
---

Let's say you are doing a merge and then git yells at you: there is a conflict. What do you do? Well, whatever you do, do not panic. This is normal. 😅

It just means that two people, two AI agents, you and an AI agent, or whatever setup is working on the code changed the same lines in your repo. Git on its own cannot decide which changes to keep, so it needs you to tell it what to do.

Open the file with the conflict and look at the changes, especially the conflict markers. They will show current or incoming changes. Decide which you want to keep. If you are using an IDE, it probably has buttons you can use to make the decision faster. If you are in a text editor, erase whatever you do not need and keep what you do.

Make sure to delete the markers and save the file. Then follow the flow as usual: add them to staging and continue with the merge. Once the merging is done, you can push your changes.

A conflict is not git breaking. It is git asking you to make the decision.

Want more detail on solving conflicts? I wrote a full walkthrough here: [Solving conflicts in Git](/solving-conflicts/)

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/JtOE5m6kcls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

Follow for more git tips like this!