---
author_note_text: This blog post was adapted for English by Debora Azevedo.
author_note_link: https://deboraazevedo.github.io/?utm_source=blogdajess
bookbanner: true
comments: true
date: 2022-02-05 11:25:00-02:00
description: Understand when to use git stash drop how it works
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
lang: en
layout: post
posts_list:
- using-git-stash-and-git-stash-pop
- solving-conflicts
- undoing-the-last-commits-using-git-reset
related: true
tags:
- git
- english
- pro tip
title: Learn why the command git stash drop is useful
translations:
- lang: pt
  url: /para-que-serve-o-git-stash-drop
type: post
---

Need to clear the stash list and don't know how? Don't worry, in this pro tip you will learn how to “throw away” stashes that you no longer need using the command  `git stash drop`. 😉

## The usual git stash workflow

Usually, you probably use git stash to store changes that are temporary and not yet ready for a commit. This often happens when you need to interrupt work to fix a bug or something similar on another branch. So your workflow should look like this:

```console
# work work work
git stash
# switch branches and do other deliveries
# go back to the initial branch
git stash pop
```

So far so good, but what happens when you store changes for another reason, like cleaning up the work environment? Eventually you'll want to get rid of these changes to keep your work environment clean, right? This is where `git stash drop` comes in.

## Discarding a stash

Old stashes can be a source of a lot of headache, *yes conflicts, I'm talking about you*, so it's important to keep your stash list up to date. Suppose you currently have the following stash list:

![Image showing the stash list as output of the command git stash list with two stashes in the list](https://res.cloudinary.com/jesstemporal/image/upload/v1644068422/git-stash/listagem-stashes-fig1_uiizzc.png)

You want to get rid of stash number `0` which contains the creation of `arquivo-2.txt`. To do this, run the following command:

```console
git stash drop stash@{0}
```

You should see a message informing the stash has been removed:

![Image showing the output of the command git stash drop ](https://res.cloudinary.com/jesstemporal/image/upload/v1644068420/git-stash/resultado-git-stash-drop-fig2_kzdkkj.png)

Then you can double check the stash listing:

![imagem mostrando a lista de stashes só com um stash como resultado de ter feito o drop de um dos stashes anteriores](https://res.cloudinary.com/jesstemporal/image/upload/v1644068420/git-stash/listagem-stashes-pos-dropfig3_j0h1gp.png)

It's worth mentioning that just like [`git stash pop`](https://jtemporal.com/using-git-stash-and-git-stash-pop), if you don't pass the stash name to the command `git stash drop`, it will remove the most recent stash from the stack.

## GitFichas | GitStudyCards

{% assign ficha_url = "https://gitfichas.com/en/045?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1644148964/gitfichas/en/045/full_zugn9f.jpg" %}
{% assign ficha_title = "GitFicha #045" %}
{% assign ficha_description = "git stash drop" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/en/043?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642964722/gitfichas/en/043/full_qdsc7t.jpg" %}
{% assign ficha_title = "GitFicha #043" %}
{% assign ficha_description = "git stash list" %}
{% include ficha.html %}

Hope these commands help you to remove stashes when needed.
