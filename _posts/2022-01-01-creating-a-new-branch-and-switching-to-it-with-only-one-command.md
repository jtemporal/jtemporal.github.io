---
layout: post
date: 2022-01-01T12:34:20.000-02:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
comments: true
title: Creating a new branch and switching to it with just one command
description: See how to use git checkout and git switch to create a branch and switch to it with just one command
type: post
lang: en
translated: "/criando-um-novo-branch-e-mudando-pra-ele-com-um-comando"
tags:
- git
- english
- protip
related: true
posts_list:
- solving-conflicts
- introducing-gitfichas
- updating-a-branch-with-git-rebase
author_note: This blog post was adapted for English by Debora Azevedo.
author_note_link: professoradeboraazevedo@gmail.com

---
Every time you create a new branch in Git you need to switch to that branch before committing. In this pro tip I'll show you my favorite shortcut to create a branch and switch to it, all at the same time.

## Traditional ways to create a branch

In Git, it is possible to create a branch and switch to it using the following command sequence:

```console
git branch branch-1
git checkout branch-1
```
As you can see in the image below:

![image showing the result of the commands git branch and git checkout](https://res.cloudinary.com/jesstemporal/image/upload/v1643316044/git-atalhos/git-chekout-branch-fig1_wtfkds.png)

Or even with the following sequence:

```console
git branch branch-2
git switch branch-2
```

Also visible in the image bellow:

![image showing the result of the commands git branch and git switch](https://res.cloudinary.com/jesstemporal/image/upload/v1643316044/git-atalhos/git-switch-branch-fig2_ipahho.png)

## Shortcuts to create branches and switch branches at the same time

There's nothing wrong with these two sequences of commands shown earlier, but there are two shortcuts to get the same result using just one command. The first using `git checkout` followed by the `-b` flag:

```console
git checkout -b branch-3
```

You can see the similar result to the one shown in the first example of this blog post:

![image showing the result of the command git checkout -b branch-3](https://res.cloudinary.com/jesstemporal/image/upload/v1643317261/git-atalhos/git-checkout-b-fig3_qengsz.png)

And if you prefer using the command `git switch` we have the following shortcut using the `-c` flag:

```console
git switch -c branch-4
```

Also with a similar result to what we saw previously:

![image showing the result of the command git switch -c branch-4](https://res.cloudinary.com/jesstemporal/image/upload/v1643317261/git-atalhos/git-switch-c-fig4_xqijaw.png)

## GitFichas

Below you'll find [two GitFichas to help you remember these shortcuts](https://gitfichas.com):

{% assign ficha_url = "https://gitfichas.com/en/014?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878596/gitfichas/en/014/full_tatfxp.jpg" %}
{% assign ficha_title = "GitFicha #014" %}
{% assign ficha_description = "git checkout -b name" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/en/035?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878600/gitfichas/en/035/full_krt83d.jpg" %}
{% assign ficha_title = "GitFicha #035" %}
{% assign ficha_description = "git switch -c name" %}
{% include ficha.html %}

Now you know two shortcuts to create a branch and change to it with _only one command_.
