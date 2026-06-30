---
author_note_text: This blog post was adapted for English by Debora Azevedo.
author_note_link: https://deboraazevedo.github.io/?utm_source=blogdajess
bookbanner: true
comments: true
date: 2022-01-01 12:34:20-02:00
last_modified_at: 2026-06-20
description: See how to use git checkout and git switch to create a branch and switch
  to it with just one command
image: /images/covers/pro_tip.webp
lang: en
layout: post
series: "Git Pro Tips"
series_order: 5
posts_list:
- solving-conflicts
- introducing-gitfichas
- updating-a-branch-with-git-rebase
related: true
tags:
- git
- english
- protip
title: Creating a new branch and switching to it with just one command
translations:
- lang: pt
  url: /criando-um-novo-branch-e-mudando-pra-ele-com-um-comando
type: post
author_note: true
---

Creating a new branch in Git is one of those everyday commands you run without thinking, until you realize you have been typing two commands when one would do. Every time you create a branch you also need to switch to it before you start committing, and there is a shortcut that does both at once. In this pro tip I will show you the traditional way to create a branch, then my favorite shortcut to create one and switch to it in a single command.

## Traditional ways to create a branch

In Git, it is possible to create a branch and switch to it using the following command sequence:

```console
git branch branch-1
git checkout branch-1
```
As you can see in the image below:

![image showing the result of the commands git branch and git checkout](/images/git-atalhos/git-chekout-branch-fig1.webp)

Or even with the following sequence:

```console
git branch branch-2
git switch branch-2
```

Also visible in the image bellow:

![image showing the result of the commands git branch and git switch](/images/git-atalhos/git-switch-branch-fig2.webp)

## Shortcuts to create branches and switch branches at the same time

There's nothing wrong with these two sequences of commands shown earlier, but there are two shortcuts to get the same result using just one command. The first using `git checkout` followed by the `-b` flag:

```console
git checkout -b branch-3
```

You can see the similar result to the one shown in the first example of this blog post:

![image showing the result of the command git checkout -b branch-3](/images/git-atalhos/git-checkout-b-fig3.webp)

And if you prefer using the command `git switch` we have the following shortcut using the `-c` flag:

```console
git switch -c branch-4
```

Also with a similar result to what we saw previously:

![image showing the result of the command git switch -c branch-4](/images/git-atalhos/git-switch-c-fig4.webp)

## Recapping

To create a new branch and switch to it in one command, you have two options: `git checkout -b branch-name` or `git switch -c branch-name`. Both create the branch and move you onto it right away, so you can start committing. The longer way, `git branch` followed by `git checkout` or `git switch`, still works, but the shortcut saves you a step every time.

If you are tidying up your Git workflow, you might also like how to [update a branch with git rebase](https://jtemporal.com/updating-a-branch-with-git-rebase/) and [undoing the last commit and reusing the message](https://jtemporal.com/undoing-the-last-commit-and-reusing-the-message/).

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
