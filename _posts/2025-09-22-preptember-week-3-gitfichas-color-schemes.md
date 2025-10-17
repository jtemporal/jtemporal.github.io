---
bookbanner: true
comments: true
date: 2025-09-22T04:00:00+00:00
description: Busy weekend but we have 6 different color schemes on GitFichas now 🎨
image: https://res.cloudinary.com/jesstemporal/image/upload/v1760705452/covers/preptember.jpg
lang: en
layout: post
posts_list:
- solving-conflicts
- 5-tips-to-make-your-pull-request-shine
- gitfichas-is-now-open-source
related: true
series: "Preptember 2025 Weekly"
series_order: 3
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

Weekend 3 of preptember is here and this one was a bit different from the previous weekends... This weekend was packed with preparation for [Oktane](https://www.okta.com/oktane/) where I'll be presenting a workshop, so my time was more limited than usual. But I still managed to close an issue that was on the list. 🎉🎉

**TLDR:** One PR implementing 6 color schemes so cards can look a little bit different from each other, plus some improvements to the Copilot instructions for better AI-assisted contributions.

## Recap

Last weekend I implemented multi-language support for GitFichas with GitHub Copilot's help. The site is now able to support any number of languages instead of just Portuguese and English, which was a big win for localization. I also had Copilot review its own work for the first time, which was quite the experience specially when it called out documentation that needed updating 👀

## This weekend's work

Despite the busier than usual schedule as I was preparing for Oktane, this weekend a few issues were closed.

### Implementing the 6 color schemes

**[PR #209](https://github.com/jtemporal/gitfichas/pull/209)** closed multiple issues at once:

- [Issue #63](https://github.com/jtemporal/gitfichas/issues/63): This was the main goal for the weekend. Implementing different color schemes like I used to have when I was hand-drawing the cards;
- [Issues #115](https://github.com/jtemporal/gitfichas/issues/115), [#114](https://github.com/jtemporal/gitfichas/issues/114), [#113](https://github.com/jtemporal/gitfichas/issues/113), [#112](https://github.com/jtemporal/gitfichas/issues/112), [#110](https://github.com/jtemporal/gitfichas/issues/110): Migrating some Portuguese cards to Mermaid format in order to show off the cycling colors;
- [Issues #162](https://github.com/jtemporal/gitfichas/issues/162), [#161](https://github.com/jtemporal/gitfichas/issues/161), [#160](https://github.com/jtemporal/gitfichas/issues/160), [#158](https://github.com/jtemporal/gitfichas/issues/158): Additional English cards migration also to show off the new colors.

The color scheme implementation brings back the visual variety that made the original hand-drawn cards special. Now each card has one of 6 different color themes:

1. Light Blue
2. Dark Green
3. Light Purple
4. Pink/Rose
5. Purple and Pink
6. Light Green

The colors are automatically assigned based on the card number using the modulo operation, so each card gets a consistent appearance no matter how many builds we have.

Each color scheme is made by a color pair so we can have subtitles and pretitles in a different color from the main title color like the ones below, at the top the original image based card, at the bottom the new Mermaid-powered card:

<center>
<img src="https://res.cloudinary.com/jesstemporal/image/upload/v1758551570/gitfichas/IMG_0782_whaaw8.png" alt="at the top the original image based card, at the bottom the new Mermaid-powered card" style="box-shadow: 4px 4px 4px rgba(51,51,51,0.57); border-radius: 8px; max-width: 60%; border: 1px solid #b6b6b6ff; " />
</center>

Instead of the flat color from before:

<center>
<img src="https://res.cloudinary.com/jesstemporal/image/upload/v1758551572/gitfichas/IMG_0778_qg1tqo.jpg" alt="Previous mermaid title color scheme with only one color" style="box-shadow: 4px 4px 4px rgba(51,51,51,0.57); border-radius: 8px; max-width: 60%; border: 1px solid #b6b6b6ff; " />
</center>

You can check all the [pairings in this file](https://github.com/jtemporal/gitfichas/blob/3a23f984df5d9536ac6176f8367cb872d79c1b07/_includes/mermaid-graphs.html#L11-L29). You also may have noticed that we now have the border on the title portion of the card now as well. 🎉

### Preparing for AI-assisted Hacktoberfest

While migrating the cards, I also took the opportunity to improve the [GitHub Copilot instructions](https://github.com/jtemporal/gitfichas/blob/main/.github/copilot-instructions.md). With AI tools becoming part of any development flow, I want to make sure contributors have the best possible experience when using these tools to also make their PRs to GitFichas.

The improvements focus on:
- Better guidance for Mermaid diagram generation
- Clearer instructions for the migration from hand-drawn cards to Mermaid ones
- More specific examples of how to handle edge cases

I'm expecting a massive use of AI tools during this year's Hacktoberfest, so getting these instructions right now will help everyone succeed, including me since I'll be on the receiving end of the contributions and I review every PR myself even when I ask copilot to review it first.

Using AI to review PRs can speed the review process as AI will catch details my human eyes might miss. As a maintainer I'll then be able to review the suggested changes and add those in before merging if it makes sense.

## What's next

With only one weekend until October arrive, I'm getting close to the final preptember preparations. Next weekend I'll be focusing on:

- [Issue #173 in GitFichas](https://github.com/jtemporal/gitfichas/issues/173): Generating a preview image for each of the cards to make them easy to share;
- [PR #166 in the PyLadiesCon repository](https://github.com/pyladies/pyladiescon-portal);
- Open new issues for translations into Spanish and maybe French;
- And finally, review and create the list of Brazilian open source projects.

GitFichas is almost ready for Hacktoberfest!

## Oktane workshop prep

Speaking of being busy, most of this weekend was spent preparing for my trip to Oktane, not only doing a final review and rehearsals of the workshop I'm presenting but also making sure the clothes are ready for packing and yes [I still follow my own traveling tips](https://jtemporal.com/seven-tips-for-traveling-with-ease/).

It's always exciting to share knowledge with the community, even when it means less time for side projects. As a developer advocate, I love meeting developers where they are and both speaking at conferences and open source work are important parts of giving back to the community for me.

## Join me

As always, if you're planning to contribute to open source during Hacktoberfest, now's the time to start exploring projects and getting familiar with their contribution processes.

Did you know that the registration for Hacktoberfest 2025 is already open? You can register now but it is worth reminding that the pull requests will only count during the month of October. I'm already registered. 👇

<center>
<img alt="jtemporal hacktoberfest profile created" src="https://res.cloudinary.com/jesstemporal/image/upload/v1758493970/jtemporal-hacktoberfest-profile-created.png"  style="max-width: 60%; border-radius: 8px; box-shadow: 4px 4px 4px rgba(51, 51, 51, 0.57);" />
</center>


> [So go register too!](https://hacktoberfest.com/)

[GitFichas](https://github.com/jtemporal/gitfichas) is ready and waiting for your contributions! And if you need help getting started with your Hacktoberfest journey, [reach out through any of my social profiles](http://jtemporal.com/socials/) on the web.

Happy coding! 🎉