---
bookbanner: true
comments: true
date: 2025-09-22T04:00:00+00:00
description: Busy weekend but we have 6 different color schemes on GitFichas now 🎨
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/miscellaneous_ld0l6r.png
lang: en
layout: post
posts_list:
- preptember-week-2-gitfichas-multi-language-support
- preptember-week-1-getting-ready-for-hacktoberfest-2025
- solving-conflicts
related: true
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
title: "Preptember 2025 week 3: Color schemes and Copilot improvements in GitFichas"
author_note: false
type: post
translations:
  - url: "/terceiro-fim-de-semana-preptember-2025"
    lang: "pt"
---

Weekend 3 of preptember is here and this one was a bit different from the previous weekends...

**TLDR:** One PR implementing the 6 color schemes so cards can look a little bit different from each other, plus some improvements to the Copilot instructions for better AI-assisted contributions.

This weekend was packed with preparation for [Oktane](https://www.okta.com/oktane/) where I'll be presenting a workshop, so my time was more limited than usual. But I still managed to close an issue that's on the list. 🎉🎉

## Recap

Last weekend I implemented multi-language support for GitFichas with GitHub Copilot's help. The system now supports any number of languages instead of just Portuguese and English, which was a big win for localization. I also had Copilot review its own work for the first time, which was quite the experience - it even called out documentation that needed updating 👀

## This weekend's work

Despite the busier than usual schedule as I was preparing for Oktane, I managed to tackle one big feature:

### Implementing the 6 color schemes

**[PR #209](https://github.com/jtemporal/gitfichas/pull/209)** closed multiple issues at once:

- [Issue #63](https://github.com/jtemporal/gitfichas/issues/63): The main one - implementing different color schemes like I used to have when hand-drawing the cards
- [Issues #115](https://github.com/jtemporal/gitfichas/issues/115), [#114](https://github.com/jtemporal/gitfichas/issues/114), [#113](https://github.com/jtemporal/gitfichas/issues/113), [#112](https://github.com/jtemporal/gitfichas/issues/112), [#110](https://github.com/jtemporal/gitfichas/issues/110): Migrating specific Portuguese cards to Mermaid format;
- [Issues #162](https://github.com/jtemporal/gitfichas/issues/162), [#161](https://github.com/jtemporal/gitfichas/issues/161), [#160](https://github.com/jtemporal/gitfichas/issues/160), [#158](https://github.com/jtemporal/gitfichas/issues/158): Additional English cards migration.

The color scheme implementation brings back the visual variety that made the original hand-drawn cards special. Now each card cycles through 6 different color themes:

1. Light Blue
2. Dark Green
3. Light Purple
4. Pink/Rose
5. Purple and Pink
6. Light Green

The colors are automatically assigned based on the card number using a modulo operation, so each card gets a consistent but varied appearance.

### Preparing for AI-assisted Hacktoberfest

While migrating the cards, I also took the opportunity to improve the [GitHub Copilot instructions](https://github.com/jtemporal/gitfichas/blob/main/.github/copilot-instructions.md). With AI tools becoming part of any development flow, I want to make sure contributors have the best possible experience when using these tools to also make their PRs faster and better.

The improvements focus on:
- Better guidance for Mermaid diagram generation
- Clearer instructions for the migration from hand-drawn cards to Mermaid ones
- More specific examples of how to handle edge cases

I'm expecting a massive use of AI tools during this year's Hacktoberfest, so getting these instructions right now will help everyone succeed, including me since I'll be on the receiving end of the contributions and I review every PR myself.

## What's next

With only one weekend till October is here, I'm getting close to the final preptember preparations. Next weekend I'll be focusing on:

- [Issue #173 in GitFichas](https://github.com/jtemporal/gitfichas/issues/173): Generating a preview image for each of the cards to make them easy to share
- [PR #166 in the PyLadiesCon repository](https://github.com/pyladies/pyladiescon-portal);
- Open new issues for translations into Spanish and maybe French;
- And finally, review and create the list of Brazilian open source projects.

GitFichas is almost ready for Hacktoberfest!

## Oktane workshop prep

Speaking of being busy, most of this weekend was spent preparing for my trip to Oktane, not only doing a final review and rehearsals of the workshop I'm presenting but also making sure the clothes are ready for packing and yes [I still follow my own traveling tips](https://jtemporal.com/seven-tips-for-traveling-with-ease/).

It's always exciting to share knowledge with the community, even when it means less time for side projects. As a developer advocate I love meeting developers where they are and both speaking engagements and open source work are important parts of giving back to the tech community.

## Join me

As always, if you're planning to contribute to open source during Hacktoberfest, now's the time to start exploring projects and getting familiar with their contribution processes.

The registration for Hacktoberfest 2025 is already open!

<center>
<img alt="jtemporal hacktoberfest profile created" src="https://res.cloudinary.com/jesstemporal/image/upload/v1758493970/jtemporal-hacktoberfest-profile-created.png"  style="max-width: 60%" />
</center>

And I'm already registered. 👆

> [So go register too!](https://hacktoberfest.com/)

[GitFichas](https://github.com/jtemporal/gitfichas) is ready and waiting for your contributions! And if you need help getting started with your Hacktoberfest journey, [reach out through any of my social channels](http://jtemporal.com/socials/)! 🎉