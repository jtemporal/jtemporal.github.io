---
layout: post
type: video
hidden: true
date: 2026-07-30 12:00:00 +00:00
description: "Learn how to undo any commit in Git with reset, revert, and reflog — without losing your work."
image: /images/covers/pro_tip.webp
lang: en
related: true
posts_list:
- recovering-lost-commits-with-git-reflog
- undoing-more-than-one-commit-at-once-with-git-revert
- undoing-the-last-commits-using-git-reset
series: "Git Pro Tips"
tags:
- git
- english
- pro_tip
title: "Undo anything in Git: reset vs revert, explained"
---

Your coding assistant just made five commits, and one of them broke everything. Or maybe that was you at 2:00 AM. Either way, by the end of this post you'll know how to undo any commit in Git without losing your work.

Undoing a commit can sound scary, but it comes down to **one question** and **three commands**. The question is: have you pushed the commit yet? I'll walk you through reset, revert, and the safety net that gets you unstuck when you thought you lost everything.

<center>
<iframe style="max-width:100%; width:560px; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/hRNHGHWrNNA" title="How to Undo Commits in Git" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

## The mental model

A commit is a snapshot of your project at a moment in time. `HEAD` is just a pointer to the snapshot you are currently on. When people say "undo a commit," they usually mean one of three things:

1. They want to undo a commit but **keep the code**.
2. They want the commit **and** the changes gone entirely.
3. The changes are already shared with the team, but they need to reverse it **safely**.

Those are three different jobs, and using the wrong tool can lead to conflicts and messy history. So before you touch anything, ask: **Have I pushed the commit I want to undo yet?**

## Still local? Use reset

If the changes are still only on your machine, use `git reset`. Reset moves `HEAD` back, and it has three flavors that decide what happens to your code.

### Soft — undo the commit, keep everything staged

You committed too early, but the code is good. You want to uncommit and keep everything staged, ready to recommit:

```bash
git reset --soft HEAD~1
```

The commit is gone, but the work isn't. `HEAD~1` means one commit back. Change the `1` to undo more commits at once.

### Default (mixed) — undo the commit, unstage the changes

Same idea, but your changes go back to unstaged so you can edit before you re-commit:

```bash
git reset HEAD~1
```

Files are untouched. You only undid the commit and the staging.

### Hard — throw the commit and the changes away

This is the dangerous one. You want the commit **and** the changes gone:

```bash
git reset --hard HEAD~1
```

Only reach for `--hard` when you are sure, because it is the one people regret the most. Even then, you can often still recover — more on that below.

**Summary**

| Flavor | Commit | Staging | Working tree |
|--------|--------|---------|--------------|
| `--soft` | removed | kept | kept |
| (default) | removed | unstaged | kept |
| `--hard` | removed | cleared | discarded |

## Already pushed? Use revert

If you already pushed the commit, or it is on a branch your teammates pulled, **don't reset**. Rewriting history that other people already have makes a mess for everyone. Use `git revert` instead.

Revert does not delete anything. It creates a **brand new commit** that is exactly the opposite of the one you want to undo. History stays intact, everyone stays in sync, and the bad change is gone.

```bash
git revert <commit-hash>
```

You can revert any commit, not just the last one. Git writes the inverse operations and opens a commit message for you. If you added a file in the bad commit, the revert removes that file. The history is there, but it is undone.

**Rule of thumb:** if you already pushed it → revert. If things are still local → reset.

## The safety net: reflog

Say you ran a hard reset by mistake and it looks like your commit and your work vanished. Almost certainly it is still there. Git keeps a log of everywhere `HEAD` has been, called the **reflog**.

```bash
git reflog
```

You see a list of every recent move, each with its own hash. Find the state you want to go back to, copy the hash, and reset to it:

```bash
git reset --hard <hash-from-reflog>
```

You are back like it never happened. Before you panic about lost commits, check the reflog. Nine times out of ten, the work is sitting right there.

The one thing reflog cannot save you from is deleting the `.git` folder itself — so don't do that.

I wrote a deeper dive on this: [Recovering lost commits with git reflog](/recovering-lost-commits-with-git-reflog/).

## Bonus: amend

Sometimes you don't want to undo a commit — you just want to fix it (wrong message, or you forgot a file).

```bash
git commit --amend -m "Better message"
# or stage a forgotten file first, then:
git commit --amend --no-edit
```

Remember: amend also rewrites history, so the push-or-not-push rule still applies.

## Cheat sheet

1. **Have I pushed the commit yet?**
2. **No** → `reset`
   - `--soft` to keep it staged
   - default to keep it unstaged
   - `--hard` to throw everything away
3. **Yes** → `revert` (safe reverse with a new commit)
4. **Looks lost?** → `git reflog`, then `git reset --hard <hash>`
5. **Just need a small fix on the last local commit?** → `git commit --amend`

Those are most of the commands you ever need to fix or undo a commit in Git.

If this made Git feel less scary, the next deep-dive is about the git commands you actually use every day. In the meantime, tell me in the comments: what's the worst Git mistake you ever had to undo?
