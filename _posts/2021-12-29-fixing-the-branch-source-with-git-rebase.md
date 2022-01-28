---
layout: post
date: 2021-12-29T12:34:20.000-02:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
comments: true
title: Fixing the branch source with git rebase
description: Understand how to use git rebase para to fix the brach source
type: post
tags:
- git
- english
- protip
related: false
posts_list:
- solving-conflitos
- introducing-gitfichas
- 5-dicas-para-fazer-o-seu-pull-request-brilhar

---
The command `git rebase` can be used to make various history adjustments, from rewriting the commit tree (and by doing that rewriting the history) to even pushing commits forward as if the branch were created in the future.

In this pro tip I will show you how to use git rebase to fix the source of a given branch.

## Creating a branch from an incorrect branch

Suppose you have two tasks to do in the next few weeks and you want to work on each task in a different branch.

So to work on task #1 you create a branch with that name from `main`.

![image showing the result of creating the branch task-1](https://res.cloudinary.com/jesstemporal/image/upload/v1643381405/git-rebase-ajustar-origem/git-checkout-fig1_qd3kkn.png)

Let's say that during your implementation you got tired of messing with that problem and decided that it would be a good idea to change the context for a bit and start working on task 2.

For that you need to create a new branch also from `main`, however, without realizing it you ended up creating your branch from branch `task-1`:

![image showing the result of creating the branch task-2 from task-1](https://res.cloudinary.com/jesstemporal/image/upload/v1643382296/git-rebase-ajustar-origem/git-switch-fig2_ugve35.png)

And then, you started working and only realized the mistake later. After you commit to `task-2` your history looks something like this:

![drawing showing that the branch task-2 depends on the branch task-1](https://res.cloudinary.com/jesstemporal/image/upload/v1643382763/git-rebase-ajustar-origem/rebase-fixing-source-fig3_yjr1zx.jpg)

If you look at your history graph you'll see that it shows that the most recent commit (`1078aa`) on the branch `task-2` depends on the commit made on the branch `task-1` (`a7f89a`):

![image showing the result of command git log --graph on branch tarefa-2 showing the history dependant of the branch tarefa-1](https://res.cloudinary.com/jesstemporal/image/upload/v1643382297/git-rebase-ajustar-origem/git-log-graph-worng-branch-fig4_bsmw1u.png)

So we need to fix this.

## Fixing the branch source

With this mistake in hand and since the implementations of each task are independent of each other you want to make this correction.

For this you must use `git rebase` followed by the flag `--onto` and the name **of the three branches**, the full command looks like this:

```console
git rebase --onto main task-1 task-2
```

The result should look similar to the image below:

![image showing the result of the command git rebase --onto main tarefa-1 task-2](https://res.cloudinary.com/jesstemporal/image/upload/v1643382296/git-rebase-ajustar-origem/git-rebase-onto-main-task1-task2-fig5_lenp6j.png)

Now, having run the above command, your history becomes what it should have been from the beginning:

![drawing showing the branch task-2 as dependant of the branch main](https://res.cloudinary.com/jesstemporal/image/upload/v1643382763/git-rebase-ajustar-origem/rebase-fixed-source-fig6_shwva2.jpg)

And if you check the history graph again, you'll see that we only see the commits from task 2 in the corresponding branch:

![image showing the result of the command git log --graph showing the branch task-2 with the correct history](https://res.cloudinary.com/jesstemporal/image/upload/v1643382297/git-rebase-ajustar-origem/git-log-graph-correct-branch-fig7_ikzqld.png)

Three important things to notice:

1. First, it is always necessary to give the names of the three branches involved to avoid missing commits;
1. Second, now branch `task-2` has its source in the branch `main`;
1. And third, the hash of the commit on the branch `task-2` is no longer `1078aa` but `b25a97` since the commit has changed.

With that now you know how to change or fix the source of a branch, if you want more details about the command `git rebase`, I recommend [reading the command's documentation](https://git-scm.com/docs/git-rebase).

Below you can see a card that can help you remember the command `git rebase --onto`:

{% assign ficha_url = "https://gitfichas.com/en/028?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878599/gitfichas/en/028/full_thuxcg.jpg" %}
{% assign ficha_title = "GitFicha #028" %}
{% assign ficha_description = "git rebase --onto" %}
{% include ficha.html %}