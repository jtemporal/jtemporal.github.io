---
layout: post
date: 2022-01-15T11:25:00.000-02:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
comments: true
bookbanner: true
title: Undoing the last commit and keeping the changes for a next commit
description: Undo the last commit with git reset using --soft and reuse the message
  with ORIG_HEAD
type: post
tags:
- git
- english
- pro tip
related: true
posts_list:
- solving-conflicts
- undoing-the-last-commits-using-git-reset
- 5-tips-to-make-your-pull-request-shine
lang: en
translated: "/desfazendo-o-ultimo-commit-e-reaproveitando-a-mensagem"
author_note: This blog post was adapted for English by Debora Azevedo.
author_note_link: https://deboraazevedo.github.io/?utm_source=blogdajess

---
Undoing and redoing commits is part of everyday life, so it's important to understand the commands that can help us along the way. In this pro tip I will teach you how to do two things:

1. Undo the last commit so you can keep the changes on *staging*;
1. Reuse the content of the undone commit to make a new commit.

With these two commands in your repertoire of Git commands, you will be way happier. 😉

## Creating the scenario

I talked about the command [`git reset` in this other pro tip](https://jtemporal.com/undoing-the-last-commits-using-git-reset). In a nutshell, it is a command that allows you to return to a previous state. The most basic use of this command is to use it to undo one or more of the most recent commits. With that, let's assume you're in the following situation (interestingly I went through this last Friday):

1. You committed to the wrong branch;
1. You haven't pushed this new commit to the remote yet;
1. You want to undo this commit and redo it to the correct branch.

As an example, I have here a history of a project in which there are two commits: the initial commit on the `main` branch (`d815be`) and the second commit (`5e8ae2`) adding `arquivo-1.txt` that should be on another branch, see:

![Screenshot showing the Git history in the terminal with two commits](https://res.cloudinary.com/jesstemporal/image/upload/v1642213678/git-reset/git-reset-fig-8_vr3e1u.png)

Now it’s time to undo our wrong commit.

## Undoing the last commit softly

Given this scenario, the first step is to use the command `git reset`. Maybe you don't know that there is a flag that while undoing a commit with `git reset`, it allows you to keep the commit changes on staging and the commit message stored in a special variable that I'll show you in a bit. That flag is `--soft`.

So we can create our command like this:

```console
git reset HEAD^ --soft
```

The flag `--soft` indicates that you want to undo the commit subtly, in other words, keeping the changes. When running this command, you will not get any message, but the changes are on *staging*, which you can check with the command `git status`, and the result is as follows:

![Screenshot showing the output of the command git reset HEAD^ --soft](https://res.cloudinary.com/jesstemporal/image/upload/v1642213678/git-reset/git-reset-fig-9_xbmaen.png)

Now let's redo the commit in the right place and reuse the message.

## Reusing the commit message

Now that you've undone the commit and you have the changes on staging, you can create the new branch and switch to it. I mentioned [this previous command in this other pro tip](https://jtemporal.com/creating-a-new-branch-and-switching-to-it-with-only-one-command/) just in case you want to check it out:

```console
git switch -c add-arquivos-novos
```

With that, the long-awaited moment arrives! You probably already know that to make commits, you need to use the command `git commit`. As our `reset` was `soft`-like, the commit message was stored in the variable `ORIG_HEAD`, so to reuse it you should use the flag `-C` followed by the variable, like this:

```console
git commit -C ORIG_HEAD
```

This flag `-C` literally means “reuse message”, and this is the result:

![Screenshot showing the output of the commands git switch -c add-arquivos-novos followed by git commit -C ORIG_HEAD](https://res.cloudinary.com/jesstemporal/image/upload/v1642213677/git-reset/git-reset-fig-10_zaqvse.png)

Finally, if you want to edit the message, you should use the flag `-c` in place of the current flag. This will give you the opportunity to adjust the previous message before finishing the commit.

## GitFichas | GitStudyCards

{% assign ficha_url = "https://gitfichas.com/en/038?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642882051/gitfichas/en/038/full_ytpvz2.jpg" %}
{% assign ficha_title = "GitFicha #038" %}
{% assign ficha_description = "git reset HEAD^ --soft" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/en/039?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878601/gitfichas/en/039/full_cvowy3.jpg" %}
{% assign ficha_title = "GitFicha #039" %}
{% assign ficha_description = "git commit -C ORIG_HEAD" %}
{% include ficha.html %}

Hope these commands help you to reuse the work done.