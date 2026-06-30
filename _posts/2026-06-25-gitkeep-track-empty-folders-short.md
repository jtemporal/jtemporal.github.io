---
layout: post
type: video
title: "the .gitkeep trick: how to make git track empty folders"
date: 2026-06-25 00:00:00 -0300
last_modified_at: 2026-06-25
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: Git doesn't track empty folders. Learn the .gitkeep convention to keep empty directories in your repo.
related: true
posts_list:
- creating-empty-folders-on-github-with-gitkeep
- git-stash-save-your-work-short
- using-git-stash-and-git-stash-pop
---

You build the thing, you push the project to GitHub, but when your friend clones it and tries to build, it doesn't work because a folder you needed is missing. Does that sound familiar? 😅

This happened to me too. But here's the catch: it's not on GitHub, it's on git. Git doesn't track empty folders.

So when you were making your commits, git didn't actually capture that empty folder in your file structure.

But the fix is a little trick. You just need to drop an empty file inside that folder and then, boom, magically git understands it should keep that folder around.

Because developers like conventions, we all agreed on a name for this empty file: it's called `.gitkeep`.

That way git is happy, it has a file to track, and so the folder comes along. Keep in mind that `.gitkeep` is not an official git feature, but it's a convention most of us use. And hey, if it works, it works, you know? 🤷

Want to see more git tricks like this? I covered this one in more depth here: [Creating empty folders in git with .gitkeep](/creating-empty-folders-on-github-with-gitkeep/)

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/xZYA1zFdeV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

Follow along for more git tips like this!