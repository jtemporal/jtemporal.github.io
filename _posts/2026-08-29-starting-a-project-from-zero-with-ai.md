---
layout: post
type: post
title: "Starting a project from zero with AI: begin with the AGENTS.md"
date: 2026-08-29 00:00:00 -0300
lang: en
image: /images/covers/ai.webp
bookbanner: true
comments: true
tags:
- english
- ai
- git
- github
description: "How I actually start a project with AI: the first file I write is not code, it is the AGENTS.md rules the agent reads every time. Grounded in my vid-compacter repo."
related: true
posts_list:
- ai-powered-development-workflow
- my-yarn-stash-ai-lessons-video
- creating-a-new-branch-and-switching-to-it-with-only-one-command
---

A while back, an AI agent deleted my local database when I asked it for a schema change. It decided the simplest path was to drop the database file and recreate it, and I approved the command without reading it closely. And just like that, all my test data was gone in one go.

The uncomfortable part is that the agent did nothing unreasonable. It behaved exactly the way you would if you assumed a database was a throwaway file. I had just never told it otherwise. I'll have to take the blame for this one because I was moving fast and I got comfortable. I trusted the suggestion, and until then I didn't have any systems in place to avoid situations like that.

That incident changed how I start projects. Now, when I begin something new with AI in the loop, the first file I write is a set of rules for the agent to follow, before any of the actual code. Here is what goes in it and why, using the setup from one of my own small projects, a little video converter I called vid-compacter (not ready for sharing yet).

## Start with an `AGENTS.md`, before any real code

When you begin working on a brand new project, the agent knows nothing about how you like to work. So it guesses, and the guesses are, for lack of a better word, generic. It commits in chunks that are too big, it might even skip using branches and worktrees altogether.

An `AGENTS.md` is the file where I write down the rules the agent has to read every time. Think of it as the contribution guide you would write for a human collaborator, except this collaborator usually needs to reread it on every task.

Now, although I love writing documentation and instruction documents, I do not write these from scratch, and I also do not let the AI write one and run with it. I have the agent draft a first version based on the ones I already have from other projects, or from a mental list of steps, and then I go through it line by line and have the AI adjust what is wrong. The rules end up being mine, because I am the one who has to live with what the agent does to my code.

The very top of my file says one thing, in bold: **read this file first**. And when needed, I'll have agent-specific files that will link to this other one.

## Point the agent at your intent, not just your code

Assuming the codebase is enough context has, in my experience, been a mistake. The code shows you what exists today. It says nothing about why a thing is the way it is, what is half-finished, or what you already tried and threw away.

So in my projects I implement decision logs in two formats: Markdown files that register the plan for each feature, and GitHub issues, which I'm using more and more as the real memory library.

Every feature or non-trivial fix gets an issue before the work starts. The issue body is a living document with the summary, the motivation, the acceptance criteria, and the decisions. Progress notes go in the comments as I go, so that later, whether it is a fresh agent or just me two weeks from now, the work can continue from the issue without anyone reverse-engineering a diff.

Outside of the issues and the planning documents, there's another one that I've recently had to take care of: a postmortem. When [My Yarn Stash](https://myyarnstash.app) went down for 3 days, I focused on getting it back online first and then, immediately after, I had AI write the document that outlined the problem, the fix, and steps to avoid this happening again.

The rule I put in the `AGENTS.md` file is simple: check the issues before rereading the code. Find the work with `gh issue list`, not by scrolling around the files hoping to remember.

## Make isolation the default

Context switching was always present in my life, and I need the AI to both be able to switch context with me and to be able to work in parallel on different tasks. All work happens in a git worktree, never directly on main. Since both of us know git well enough, this is a git feature I use the most these days.

My source repo stays on the default branch and I only use it to pull, check status, and as the basis for cleanups. Every feature gets its own worktree in a sibling folder, with its own branch tied to the issue and its own pull request. One issue, one worktree, one branch, one PR.

At this point you may be wondering: *"Why go to the trouble?"* Because an agent will commit wherever it happens to be "standing". If that place is main, then main is suddenly carrying half-done feature work and you cannot cleanly sync it with upstream anymore. Now, if that place is an isolated worktree, main stays clean and you can even have two things going at once without them stepping on each other.

Once your `AGENTS.md` is set up, you don't have to remember to keep telling your agents to create new worktrees or "please make sure you are able to work in parallel on different issues".

## Say what "done" means, so commits are worth something

Left alone, an agent tends to commit either the second you ask or after every single file it touches. And neither of those is a good unit of work. Of course you could always squash and merge your pull requests, but I prefer to have a nicer commit history when I can. To me, a commit should capture something finished and preferably tested.

So the file spells that out as well: a change is ready to commit when the following is true:

- it does one clear thing,
- I have actually tested it,
- it is stable enough that I am not about to amend it, and
- someone could read it on its own without needing the next unfinished bit to make sense.

Until then it just stays as uncommitted work in the worktree. A messy working directory is fine, while a premature commit is worse in my opinion.

I also like the commits to be atomic, one logical change each if possible. If you know me you probably know I love using `git add -p` to pick what chunks go in a commit. My rough test for commit messages is: *if the commit message needs the word "and" three times, that was probably supposed to be three commits*. The message itself should say why the change happened, not list the files.

I know this is the part most people skip, even before AI. How many times have you used `git add .` before? No shame, we've all done it once or twice, but this rule makes your history useful to you three months later.

## Write down the constraints that are easy to break

None of the things I wrote so far are groundbreaking. They basically follow software engineering good practices. Maybe these are ones that I personally like to follow? Sure, but good practices nonetheless.

Some of these constraints are simple: never commit secrets. Never force-push main. Do not commit the build artifacts. For vid-compacter, the rules also include: no new network calls, because the app is meant to run offline. If you change the conversion recipe on desktop, change it on mobile as well, or the two versions drift apart without anyone noticing.

None of these are clever. They are all things an agent will happily do if you never said not to, like deleting local databases, wink wink. Writing these rules down is what turns a vague hope into actual instructions. And believe it or not, a "never delete the database, run a migration instead" line is exactly the guardrail I was missing on the day this habit started. I told that whole story, the database and everything I changed afterward, in this video:

<center>
<iframe style="max-width:100%; width:560px; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/5MX3sMo8H-Q" title="What building My Yarn Stash taught me about working with AI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

## So, how do you start from zero?

You mostly do not. You start by deciding how you want to work, and you write that down where the agent will actually read it: rules in a document alongside the code, issues as memory, worktrees for isolation, a real bar for commits, and the hard constraints for the days you are moving too fast to pay extra attention.

Then you write the first prompt, and the fun part works a lot better, because the agent is building inside the rails you set instead of guessing at them.

If you want a concrete starting point, I put a simple `AGENTS.md` [template in a gist here](https://gist.github.com/jtemporal/f04a7ca7a72a0958dc87f1f6e1407c45). Take the shape and write your own rules into it.

Now go forth and code in peace.
