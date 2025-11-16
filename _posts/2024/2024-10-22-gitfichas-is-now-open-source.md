---
bookbanner: true
comments: true
date: 2024-10-22 05:00:00+00:00
description: Exciting news for anyone that deals with Git and might need a reminder
  or two about some commands 🤩
image: /images/covers/opensource.webp
lang: en
layout: post
posts_list:
- solving-conflicts
- 5-tips-to-make-your-pull-request-shine
- introducing-gitfichas
related: true
tags:
- pull request
- pull requests
- contribuitions
- open-source
- hacktoberfest
- GitHub
- Git
- open source
- english
title: GitFichas is Now Open Source 🎉
translations:
- lang: pt
  url: /gitfichas-agora-e-open-source
author_note: false
type: post
---


This means if you are looking for a project to contribute to you’ve found it! And still in time for hacktoberfest too!

## What is GitFichas or GitStudyCards?

[GitFichas](https://gitfichas.com) is a collection of study cards about git. It was first closed source and maintained solely by me, mainly due to the fact I would hand draw each of the cards.

After some time I even created fonts to facilitate the process but it still required me to grab my iPad and the Procreate app to turn my notes into an image.

I always wanted GitFichas to be more. More accessible, more collaborative, more helpful. And with [mermaid](https://mermaid.js.org) I think we can achieve this.

## GitFichas and Accessibility

I worked my best to improve readability of the cards, by adjusting contrast of the cards. Also added alt text to all images as well as table in each page for each individual card describing each part of each command or concept.

But I also wanted to have dark mode, better color options for varying visual abilities, and finally also improve the result for screen readers. That’s where mermaid comes in. It would generate a text-based cards that can be customized using CSS and JS.

These changes will also take a while to happen but now they are possible. ☺️

## Why is it open source now?

As The Zen of Python would say ”*Now is better than never.*”

I’ve been *slowly* working on figuring out the next version for a while now and finally figured out how to customize and structure the mermaid charts to look more like the previous version I had for the cards. So here we are.

In addition to improving accessibility, this change will make this project more of the community and allow for faster improvements and more cards to be published and maybe even be stepping stone for the community to create other projects like this one.

## How to help

[I opened a little over 100 issues in the repo for GitFichas](https://github.com/jtemporal/gitfichas/issues) that talks about improvements that need to happen to complete the migration over to mermaid cards instead of images. You can work on one of them or multiple of them. You can also tell your friends about the project and invite them to collaborate.

OR.

You can submit a new card with a new command. I can help review and refine words if you need help with it, just open an issue and submit your PR, [following contribution guide available](https://github.com/jtemporal/gitfichas/blob/main/CONTRIBUTING.md) in the repo.

## Recap

On a more personal note: even though it has been a while since I published any new cards, GitFichas has been one of my favorite personal projects to work on. I created it to help developers like you and me that might need help with git commands from time to time.

It is my hope that open sourcing it will help even more developers with Git, with that said, GitFichas is now open source and [I’m looking forward to your contribution on GitHub](https://github.com/jtemporal/gitfichas). 🎉