---
layout: post
type: video
title: "git mv: rename files without the delete-and-add confusion"
date: 2026-07-09 00:00:00 -0300
last_modified_at: 2026-07-09
hidden: true
lang: en
image: /images/covers/pro_tip.webp
tags:
- english
- git
- pro_tip
- short
description: Use git mv to rename files so git tracks the change instead of showing a delete and a new file.
related: true
posts_list:
- renaming-files-in-git-the-right-way
- creating-empty-folders-on-github-with-gitkeep
- git-stash-save-your-work-short
---

Did git ever freak out on you when you tried to rename a file and act like you deleted it and then created a whole new file? Yeah, I know how that goes. 😅

That is because you did not use the git move command.

When you rename a file without using `git mv`, git does not realize you only changed the file name. The only thing it knows is that the file it knew disappeared, and there is a new file right there.

Instead of simply renaming the file in your file system, you can use `git mv`. Pass along the old name of the file and then the new name you want it to have. The renaming and staging happen in one go, so you do not get that "old file deleted, new file added" situation you always see in `git status` after renaming a file.

So next time you need to rename a file, use `git mv` and avoid the whole confusion.

Want the deeper dive? I covered this here: [Renaming files in git the right way](/renaming-files-in-git-the-right-way/)

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/_rz7EKDJL9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

I'll see you on the next one!