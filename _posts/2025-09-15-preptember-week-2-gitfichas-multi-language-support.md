---
bookbanner: true
comments: true
date: 2025-09-15T04:00:00+00:00
description: Big issue closed and a big win for localization 🚀
image: https://res.cloudinary.com/jesstemporal/image/upload/v1760705452/covers/preptember.jpg
lang: en
layout: post
posts_list:
- solving-conflicts
- 5-tips-to-make-your-pull-request-shine
- gitfichas-is-now-open-source
related: true
series: "Preptember 2025 Weekly"
series_order: 2
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
title: "Preptember 2025 week 2: GitFichas now supports multi-language"
author_note: false
type: post
translations:
  - url: "/segundo-fim-de-semana-2-preptember-2025"
    lang: "pt"
---

Yes, we're already in the middle of September and here's my week 2 _preptember_ report! 

**TLDR:** Big PR to close the language support issue on GitFichas and a couple of other minor PRs.

I finally updated the language support with the help of GitHub Copilot in agent mode and now GitFichas is capable of supporting multiple languages instead of just Portuguese and English, so big win for localization.

_Si hablas español..._ we are looking for contributions in translations to Spanish. If you speak other languages they are also welcome!

## Recap

Last week I kicked off preptember by fixing a major issue with GitFichas where Mermaid charts weren't rendering properly in the browser. The solution was to switch from client-side rendering to pre-generating SVG files using the Mermaid CLI.

I also added several new features including a one-command setup script, GitHub Copilot instructions for contributors, automated SVG generation, and improved documentation. The goal was to prepare GitFichas for the influx of Hacktoberfest contributions by making it more welcoming and easier to contribute to.

## Issues closed and pull requests merged this weekend

This is the list of work done:

- [Issue #204](https://github.com/jtemporal/gitfichas/issues/204): Update the language selection;
- [PR #205](https://github.com/jtemporal/gitfichas/pull/205): This PR implemented the multi-language support and closed the issue above 🎉
- [PR #207](https://github.com/jtemporal/gitfichas/pull/207): which updated the content from the contact page in both Portuguese and English;
- [PR #206](https://github.com/jtemporal/gitfichas/pull/206): Fixed a minor error in logic introduced in a previous weekend PR for the in browser mermaid rendering.
- [PR #208](https://github.com/jtemporal/gitfichas/pull/208): Tiny rendering adjustments

Now story time...

### Using Copilot and vibe coding for non-vibe-coders

For the first time I had Copilot not only do the bulk of the work but also review its own work in a PR.

I'm not much of a vibe coder, I can't just simply say "Keep" to the changes AI makes and not bat an eye on it before committing. That's just not me.

But the closest I get is to ask the AI to do something and then review it, then provide specific feedback on what is not working, and ask it to fix what is broken. That type of process works well but is definitely not as fast as just blindly accepting whatever output I get.

Nonetheless, the PRs I put in place this weekend took me about 6 hours of unfocused work. If I had been more focused, it probably would've taken me 4 hours, but it is a weekend after all.

But I can say with complete certainty that without any AI help, between writing new code, refactoring pre-existing code, testing, preview deployments, adjustments, and forgotten edge cases, this would probably take me about two days to get it done.

Not only that, it would probably mean that the production deployment would probably wait till next weekend to be deployed since I'd like to have more time to review my own work before shipping it.

### Using Copilot to review pull requests

And speaking of review... This was the first time that I had Copilot do the review for me and it was _interesting_ to say the least.

It called my attention to the documentation I forgot to update, as well to the fact that my PR did not follow the project guidelines. 😂

Let me explain. So far GitFichas had only support for two spoken languages: Portuguese and English. And the way the localization was implemented it didn't allow for any other translations to be easily added. So part of the project documentation made it clear that the content on the website was only in those two initial languages.

So I definitely _smirked_ when [Copilot pointed out that my PR](https://github.com/jtemporal/gitfichas/pull/205#discussion_r2347005159) was going against the project's own guidelines for only supporting Portuguese and English.

![Screenshot of GitHub Copilot review comment identifying that the PR goes against project guidelines by adding support for languages other than Portuguese and English](https://res.cloudinary.com/jesstemporal/image/upload/v1757816734/copilot-review-identifies-pr-going-against-the-projects-guidelines_x0vmbw.png){: style="box-shadow: 4px 4px 4px rgba(51, 51, 51, 0.57); border-radius: 8px; border: 1px solid #b6b6b6ff"}

Anyways it served as a well-placed reminder to not only update the documentation (which I did [prompted by another similar comment](https://github.com/jtemporal/gitfichas/pull/205#discussion_r2347005149)) but also the Copilot instructions as they are used in the reviews.

## What's Next

The list of issues for next weekends is the following:

- [Issue #173 in GitFichas](https://github.com/jtemporal/gitfichas/issues/173): Generating a preview image for each of the cards to make them easy to share
- [Issue #63 in GitFichas](https://github.com/jtemporal/gitfichas/issues/63): Creating different themes so that each card looks a little bit different from each other

I also plan on going back to pull requests I left unattended over the year.

In particular the [#166 in the PyLadiesCon repository](https://github.com/pyladies/pyladiescon-portal). [Mariatta](https://mariatta.ca/) if you are reading this: _I'm terribly sorry it took me this long to get back to it_, next weekend I'll get the conflicts resolved so we can merge it.

Side note: Have you seen [your list of pull requests lately](https://github.com/pulls)? Mine seems to never reach zero. 😂

## Join me

If you are thinking about contributing to open source during Hacktoberfest, start working now on figuring out possible projects you want to contribute to. Make a list of them, fork and clone the repos, check out the contribution guides, and start getting ready because October is fast approaching.

As always, [check out GitFichas on GitHub](https://github.com/jtemporal/gitfichas) and if you need help figuring out your contributions [send me a note in one of the many social places out there](http://jtemporal.com/socials/)! 🎉
