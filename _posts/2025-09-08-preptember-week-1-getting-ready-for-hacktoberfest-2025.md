---
bookbanner: true
comments: true
date: 2025-09-08T04:00:00+00:00
description: This weekend GitFichas is got a remake and some bugs fixed 🚀
image: /images/covers/preptember.webp
lang: en
layout: post
posts_list:
- solving-conflicts
- 5-tips-to-make-your-pull-request-shine
- gitfichas-is-now-open-source
related: true
series: "Preptember 2025 Weekly"
series_order: 1
tags:
- pull request
- pull requests
- contributions
- open-source
- hacktoberfest
- GitHub
- Git
- open source
- english
- preptember
title: "First weekend of preptember 2025"
author_note: false
type: post
translations:
  - url: "/primeiro-fim-de-semana-de-preptember-2025"
    lang: "pt"
---

Hacktoberfest is just around the corner, and over this weekend I decided to start my _preptember_ tasks. So this is the story of the week 1 of preptember.

## What's Preptember?

For those new to the term, "Preptember" is the month before Hacktoberfest where maintainers prepare their repositories for the influx of contributions that October brings. It's about setting up your project to be as welcoming and easy to contribute to as possible.

## GitFichas and Preptember

Since [open-sourcing GitFichas](https://jtemporal.com/gitfichas-is-now-open-source/) and starting to use [Mermaid](https://mermaid.js.org/) to build new study cards, it had an issue with properly displaying content. The Mermaid charts would sometimes fail to render correctly in the browser, causing layout issues and making the cards hard to read. So this weekend the challenge was to fix that issue.

The problem was that no matter which way I worked on the CSS for the card generation it still couldn't fix the issue. So it felt natural to start generating SVGs instead of rendering Mermaid charts on load. This approach pre-generates the diagrams as static SVG files, eliminating the client-side rendering issues entirely.

In order to generate SVGs we needed some updates to the dynamic on how we generate each study card using the [Mermaid CLI](https://github.com/mermaid-js/mermaid-cli).

## New features

Since my expectation is to use this hacktoberfest to finish migrating all study cards to the Mermaid setup, some updates were required to the repository.

- **🚀 One-Command Setup:** Setup script to install all necessary dependencies, including Node.js packages for the Mermaid CLI and Puppeteer for headless browser rendering.
- **🤖 GitHub Copilot Instructions:** We are after all in the AI time and I expect that Copilot will help us closing most of the open issues.
- **🎨 Mermaid SVG Generation:** Script for generating SVG using the Mermaid CLI so we can do all of that automatically.
- **📚 Improved Documentation:** Updates to contribution guidelines and documentation to all new moving parts.

## What's Next

With the solid foundation, I'm excited to see what the community builds during Hacktoberfest. The [90+ open issues](https://github.com/jtemporal/gitfichas/issues) are still up for grabs and personally I'll be working on some of the enhancements through this month so that GitFichas is even better by Hacktoberfest time.

Some of the ones I'll be tackling next weekend will be: 

- [Issue #173](https://github.com/jtemporal/gitfichas/issues/173): Generating a preview image for each of the card so easy to share
- [Issue #63](https://github.com/jtemporal/gitfichas/issues/63): Creating different themes so that each card looks a little bit different from each other
- [Issue #204](https://github.com/jtemporal/gitfichas/issues/204): Update the language selection

I expect I can work on these over the weekends moving forward. These will be challenging but I'm confident that they will improve GitFichas _a lot_. And to be honest I might start with the language selector first. 😂

## Join me

GitFichas has always been about community learning, and now the contribution process matches that spirit. If you've been waiting for the right moment to contribute to an open source project, this is it.

[Check out GitFichas on GitHub](https://github.com/jtemporal/gitfichas) and join me in creating the best collection of Git study cards on the internet! 🎉
