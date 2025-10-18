---
author_note_text: This blog post was adapted for English by Debora Azevedo.
author_note_link: https://deboraazevedo.github.io/?utm_source=blogdajess
bookbanner: true
comments: true
date: 2023-12-01 11:25:00+00:00
description: No more confusion caused by trying to rename a file in a git project
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
lang: en
layout: post
series: "Git Pro Tips"
series_order: 10
posts_list:
- solving-conflicts/
- undoing-the-last-commits-using-git-reset
- 5-tips-to-make-your-pull-request-shine
related: true
tags:
- git
- english
- protip
title: 'Renaming files in Git: the right way'
translations:
- lang: pt
  url: /renomeando-arquivos-no-git-do-jeito-certo
author_note: true
type: post
---


Have you ever tried to rename a file in your projects and had a hard time adding the adjustment to a commit? This doesn't just happen to you. In this pro-tip you will learn how to rename your files in git projects correctly to avoid headaches.

## The problem with renaming a file without using git

Let's say you decided to rename a file and, for simplicity's sake, you decide to do it in the folder interface itself (or using the `mv` command in the terminal). After that you want to commit the name change and when you run the command `git status` you come across this situation:

![Git status showing the file was deleted and another created](https://res.cloudinary.com/jesstemporal/image/upload/v1692470010/images/git-mv/001-renamed-file-deleted-git-status_shmq3h.png)

If you rename the file without using Git, Git “gets lost” and thinks that the original file was deleted and a new file was created as shown in the image above. Because of this behavior, you end up having to do two steps to commit the name change:

1. Add the deleted file;
2. Add the new file.

To make matters worse, it is not possible to add a “deleted” file without explicitly using the name of that file, which makes this whole process even more tedious, not to mention the weirdness of the phrase “add a deleted file”.

Let's say you persevered, added the deleted file and added the new file and once again you run  `git status`, and then git finally understands that it was a change in the file name, like so:

![Git status showing the file was actually renamed](https://res.cloudinary.com/jesstemporal/image/upload/v1692470010/images/git-mv/002-renamed-file-git-status_lley9v.png)

This is a relatively painless solution if you don't need to do this often, but there is a better way.

## Renaming files the right way in git

To begin, you need to resist the urge of renaming the file using the interface or the `mv` command alone and start using the command `git mv`. Using the same example as the case above, in which the file `books.md` was renamed to `book.md`, the command looks like this:

```bash
git mv books.md book.md
```

The result of using just one command is the following:

1. Rename the file;
2. Add the name change to staging.

After that you can follow the normal commit flow and commit this change.

## Recap

Do not use the interface to rename files in your Git projects, use the `git mv` command to do this and add this staged change to a commit.


## GitFichas

{% assign ficha_url = "https://gitfichas.com/en/052?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1692466960/gitfichas/en/052/052-full_l6yjdm.jpg" %}
{% assign ficha_title = "GitFicha #052" %}
{% assign ficha_description = "git mv  source target" %}
{% include ficha.html %}
