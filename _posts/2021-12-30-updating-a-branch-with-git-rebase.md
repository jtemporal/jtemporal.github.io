---
author_note: true
author_note_text: This blog post was adapted for English by Debora Azevedo.
author_note_link: https://deboraazevedo.github.io/?utm_source=blogdajess
bookbanner: true
comments: true
date: 2021-12-30 12:34:20-02:00
description: See how to use git rebase to bring all the most recent commits to your
  current branch
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
lang: en
layout: post
posts_list:
- solving-conflicts
- fixing-the-branch-source-with-git-rebase
- introducing-gitfichas
related: true
tags:
- git
- português
- colinha
title: Updating a branch with git rebase
translations:
- lang: pt
  url: /atualizando-um-branch-com-git-rebase
type: post
---

The command `git rebase` can be used to make various history adjustments, from rewriting the commit tree (and by doing that rewriting the history) to even pushing commits forward as if the branch were created in the future.

In this pro tip I will show you how to use `git rebase` to update a branch.

## Creating a example history

Suppose you have a project and you were working on a task on the branch `task-2`, meanwhile someone else was working on the branch `task-1` that was merged into `main` and thus making the branch `main` more up-to-date as shown in the drawing below:

![drawing showing the current history state](https://res.cloudinary.com/jesstemporal/image/upload/v1643385730/git-rebase-ajustar-origem/branches-before-rebase_c489n4.jpg)

Similarly, the history graph should look like the image below:

![image showing the main branch history](https://res.cloudinary.com/jesstemporal/image/upload/v1643384524/git-rebase-ajustar-origem/branch-main-merged-fig8_n2eqqq.png)

Knowing that `main` is more up-to-date than your branch `task-2` and following the good practice of always working with the most up-to-date project, you decide it's time to update your working branch, which has the current history looking like this:

![image showing the result of git log --graph command showing the branch task-2 with outdated history](https://res.cloudinary.com/jesstemporal/image/upload/v1643382297/git-rebase-ajustar-origem/git-log-graph-correct-branch-fig7_ikzqld.png)

## Updating the current branch

There are a few ways to update the current branch, one of them is using `git merge` and merging the most updated branch, in this case `main`, into the branch you want to update in this case `task-2`. The other way is using the rebase that I'm going to show you now.

There are two ways of using rebase to make this update, let's see the first one which is **being on the branch you want to update**, so you need to go to the branch to be updated, in this case `task-2` and use _rebase_ indicating the branch that is the source of changes:

```console
git checkout task-2
git rebase main
```

By running these commands you will see in your terminal the message  saying that the update was done successfully *“Successfully rebased and updated refs/heads/task-2.”* as you can see in the following image:

![imagem com o resultado dos comandos anteriores](https://res.cloudinary.com/jesstemporal/image/upload/v1643385014/git-rebase-ajustar-origem/git-rebase-branch-fig9_hdqtcm.png)

The second way is **independent of the current branch**, this format is a shortcut for the two previous commands, just use rebase, pass the source branch of the changes followed by the target branch:

```console
git rebase main task-2
```

This command should also show the same message as the previous image. Regardless of the way you choose to use rebase, your history should look something like the drawing below:

![desenho do histórico atualizado após o git rebase](https://res.cloudinary.com/jesstemporal/image/upload/v1643385730/git-rebase-ajustar-origem/branches-after-rebase_silptx.jpg)

And the history graph should look like this:

![grafo de histórico após atualizar o ramo task-2 com o rebase](https://res.cloudinary.com/jesstemporal/image/upload/v1643385265/git-rebase-ajustar-origem/updated-history-after-git-reabse-fig10_wmpoha.png)

## Wrapping up

Wrapping up, we have an important thing to point out now that our branch is updated: the rebase will only happen without interruptions, as shown in this pro tip blog post, if there are no conflicts, otherwise the rebase will be suspended and the [conflicts must be resolved]() before continuing.

ow you know how to update a branch using rebase, if you want more details about the command `git rebase`, I recommend [reading its documentation](https://git-scm.com/docs/git-rebase/).

Below you can see the git study card that can help you remember the command `git rebase` to update a branch:

{% assign ficha_url = "https://gitfichas.com/en/027?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878599/gitfichas/en/027/full_zjjwxe.jpg" %}
{% assign ficha_title = "GitFicha #027" %}
{% assign ficha_description = "git rebase" %}
{% include ficha.html %}