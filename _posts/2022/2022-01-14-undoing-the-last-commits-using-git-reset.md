---
author_note_text: This blog post was adapted for English by Debora Azevedo.
author_note_link: https://deboraazevedo.github.io/?utm_source=blogdajess
bookbanner: true
comments: true
date: 2022-01-14 10:00:00-03:00
description: Learn how to use the git reset command to undo most recent commits
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
lang: en
layout: post
series: "Git Pro Tips"
series_order: 6
posts_list:
- solving-conflicts
- desfazendo-o-ultimo-commit-e-reaproveitando-a-mensagem
- 5-tips-to-make-your-pull-request-shine
related: true
tags:
- git
- english
- pro_tip
title: Undoing the last commits using git reset
translations:
- lang: pt
  url: /desfazendo-um-ou-mais-commits
type: post
author_note: true
---

Since everything we do in git can be done in countless different ways, there are a few ways to get rid of commits. The most common way to undo one or more recent commits is using the command `git reset` that you'll see in this pro tip.

## What is the HEAD?

`HEAD` is a pointer that indicates which branch and commit you’re on. It is used frequently, and often without you even knowing it. For example, did you know the `HEAD` is used to switch branches?

## What is git reset?

On the other hand, `git reset` is a command that restores a previous state of the `HEAD`. That's why we use `HEAD` when undoing commits, to indicate which previous state you want to go back to.

For example, let’s suppose you have a state like the following:

![Picture showing the main branch with two commits A and B](https://res.cloudinary.com/jesstemporal/image/upload/v1642207791/main-with-2-commits_gfyez0.jpg)

If you want to undo the last _commit_ `B`, you want to go back to the state of _commit_ `A`.

## Undoing the last commit

To undo the last *commit* made, you should use the following command:

```console
git reset HEAD~1
```

Or the following command, which is a shortcut for the command above:

```console
git reset HEAD^
```

Or even the following shortcut:

```console
git reset HEAD~
```

These three commands mean:

> Go back to the state before the last commit.

Note that when executing these commands, you will not see a message stating that the commit was undone, but if you run the command `git status` after executing any of these three commands you will see that files added and/or changes made went back to being marked as changes to be committed (added to a commit).

Suppose you have a history like the one in the following image, in which the last *commit* (`48ccb8`) adds the file called `arquivo-4.txt`:

![Screenshot showing the commit history containing 5 commits in the terminal](https://res.cloudinary.com/jesstemporal/image/upload/v1642202652/git-reset/git-reset-fig-2_jwpjuz.png)

And if you run any of the commands above, followed by a `git status`, you will see a result like this:

![Screenshot showing the result of undoing a commit and then running git status](https://res.cloudinary.com/jesstemporal/image/upload/v1642202651/git-reset/git-reset-fig-3_pjexyo.png)

And you can see that `arquivo-4.txt` has returned to its previous state, which was waiting to be committed. And if you check the history again you will see that the commit `48ccb8` no longer appears.

![Screenshot showing the detail in the commit history without the undone commit in the history](https://res.cloudinary.com/jesstemporal/image/upload/v1642202651/git-reset/git-reset-fig-4_wv1m7u.png)

You can now discard the changes or keep up with them and make a new commit.

## Undoing the last three commits

Now that you know how to undo a commit, you can use the first command you’ve just seen and adapt it to undo more commits. To do so, just add the number of commits you want to undo after `~`. Let's take another look at our history, which now contains only four commits (since I already undid one):

![Screenshot showing the commit history containing 4 commits in the terminal](https://res.cloudinary.com/jesstemporal/image/upload/v1642202652/git-reset/git-reset-fig-5_qlmf7l.png)

Now let's suppose I want to go back to the state of commit `d815be` which is the initial commit that added the `README.md` file. To do so it is necessary to undo three commits, so for that a suitable command is the following:

Agora vamos supor que eu quero voltar ao estado do commit `d815be` que é o commit inicial que adicionou o arquivo `README.md`. Para isso é necessário desfazer três _commits_, então para isso o comando indicado é este:

```console
git reset HEAD~3
```

After executing this command and running `git status` once more, we have the three files that were added by the unmade commits:

![Screenshot showing the result of undoing 3 commits and running git status again](https://res.cloudinary.com/jesstemporal/image/upload/v1642202650/git-reset/git-reset-fig-6_jia6mq.png)

Note that before running these commands I removed `arquivo-4.txt` as I won't need it anymore. And looking into the history again we only see the initial commit:

![Screenshot with the commit history showing only the initial commit as the others were undone](https://res.cloudinary.com/jesstemporal/image/upload/v1642202652/git-reset/git-reset-fig-7_ymvagr.png)

Before finishing this pro tip I want to leave a recommendation: it is a good practice to avoid undoing commits that you have already pushed to prevent causing detached `HEAD` problems for other people working with you.

## GitFichas ß| GitStudyCards

Below you can find some [Git study cards to help you remember these commands and shortcuts](https://gitfichas.com):

{% assign ficha_url = "https://gitfichas.com/en/013?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878596/gitfichas/en/013/full_crgtzp.jpg" %}
{% assign ficha_title = "GitFicha #013" %}
{% assign ficha_description = "What is HEAD?" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/en/036?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878600/gitfichas/en/036/full_rkilqa.jpg" %}
{% assign ficha_title = "GitFicha #036" %}
{% assign ficha_description = "git reset HEAD\~3" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/en/037?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878601/gitfichas/en/037/full_dko55b.jpg" %}
{% assign ficha_title = "GitFicha #037" %}
{% assign ficha_description = "git reset HEAD^" %}
{% include ficha.html %}

Hope this pro tip helps you undo commits. 😉