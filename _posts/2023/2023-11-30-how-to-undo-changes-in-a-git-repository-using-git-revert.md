---
layout: post
date: 2023-11-30T19:00:00.000-05:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
comments: true
title: How to undo changes in a Git repository using git revert
description: Learn how to use git revert and reverse changes
type: post
tags:
- git
- english
- pro tip
bookbanner: true
related: true
posts_list:
- using-git-stash-and-git-stash-pop
- solving-conflicts
- undoing-the-last-commits-using-git-reset
lang: en

---
There are a number of ways of undoing commits in this pro-tip you will learn how to use `git revert` to undo commits specially when they already been published.

## What is git revert?

`git revert` is a command that will undo a change in a commit by performing two actions:

1. Using the changes in a commit or collection of commits, undo said changes;
2. And create a new commit with the reversed changes.

## Why use git revert?

Changes in git repositories are made so often that some times you might need to adjust them or even remove them from your codebase completely.

Depending on your case, you could [undo commits using `git reset`](https://jtemporal.com/undoing-the-last-commits-using-git-reset/) thus removing the changes. But using `git reset` is only good if you haven’t published the commits with a given alteration. For those cases where a commit with a given change is public, a better way to undo those changes is to use `git revert`.

This command is made specially to remove the changes of a commit or collection of commits by making a new commit literally *reverting* the changes.

## How does git revert work?

Every change in git is a collection of differences between the previous state of a given file and the alterations you made what is also know as a *patch*. Ideally if you follow best practices, the alterations you made will be done in an atomic way and each atomic change will be part of a single commit.

After choosing the commits with the corresponding changes you want to reverse, you can give the hash of said commits to the revert function and let the revert do it's magic much like pressing Ctrl+Z or Cmd+Z on your computer.

## Using git revert in a repository

Last weekend was Black Friday and Cyber Monday weekend so I wanted to have a discount code for my book as part of the book page. To do so, I made a bunch of commits all in this [Black Friday pull request](https://github.com/jtemporal/jtemporal.github.io/pull/249):

![https://res.cloudinary.com/jesstemporal/image/upload/v1701353823/images/fmfmyqppkh66ftlukpox.png](https://res.cloudinary.com/jesstemporal/image/upload/v1701353823/images/fmfmyqppkh66ftlukpox.png)

The image above you can see the 4 commits I made as well as the four short version of the commit hashes. For simplicity sake I can copied those for hashes on GitHub. To undo each of this commit I can use a succession of git reverts passing along each commit like this:

```bash
git revert 59b322a
git revert 93c1c77
git revert 7f37472
git revert c37fb73
```

Every time you run one of these commands, your editor will open up with a pre-populated message about the reversal of the commit like so:

![https://res.cloudinary.com/jesstemporal/image/upload/v1701356771/images/hv6greepoam9tzpqccst.png](https://res.cloudinary.com/jesstemporal/image/upload/v1701356771/images/hv6greepoam9tzpqccst.png)

You can change this message if you want to but I tend to only keep it. Once you save the commit message, you'll be able to check that the commit made has the correct changes.

![https://res.cloudinary.com/jesstemporal/image/upload/v1701356918/images/o9hdlhen0ugn17vyzwjv.png](https://res.cloudinary.com/jesstemporal/image/upload/v1701356918/images/o9hdlhen0ugn17vyzwjv.png)

And that's it, now you can push your changes and make a new pull request undoing your previous work.

## Recap

In this pro tip you learned that 

- `git revert` is a command that undoes changes in a commit by creating a new commit with the reversed changes.
- `git revert` is useful when you have already published the commits you want to undo.
- Each revert command creates a new commit that undoes the changes made in the specified commit.
- You can revert multiple commits by running `git revert` for each commit in succession.

Now go forth and reverse changes in your repo.