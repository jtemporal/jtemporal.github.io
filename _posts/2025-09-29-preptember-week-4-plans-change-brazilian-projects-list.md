---
bookbanner: true
comments: true
date: 2025-09-29T04:00:00+00:00
description: Plans change and less work because resting is also important 🎨
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/miscellaneous_ld0l6r.png
lang: en
layout: post
posts_list:
- preptember-week-3-gitfichas-color-schemes
- preptember-week-2-gitfichas-multi-language-support
- preptember-week-1-getting-ready-for-hacktoberfest-2025
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
title: "Preptember 2025 week 4: Final week is here"
author_note: false
type: post
translations:
  - url: "/terceiro-fim-de-semana-preptember-2025"
    lang: "pt"
---

Weekend 4 of preptember is here! I thought last weekend was different from the first two but this one was different in a whole new way. I most definitely overestimated my energy levels coming back from [Oktane](https://www.okta.com/oktane/) and the jet-lag effects.

**TLDR:** "Easy" two PRs preparing the curated list of Brazilian open source projects for Hacktoberfest 2025. One broke prod another fixed the issue.

## Recap

TODO: add recap

## Past week's work

Between staffing the Auth0 for AI Agents booth and presenting an awesome workshop called "Auth-ing your GenAI" at Oktane, traveling took its toll on me. And don't even get me started on the jet-lag.

I travel to the west coast enough times to know I'll always wake up way too early and going to bed late because it is an conference and there's always another conversation I don't want to miss, I end up sleeping less than I should.

That is to say the plans for this weekend needed some changing. For GitFichas I only focused on creating new issues, 53 to be exact:

During the week, before breakfast one day I opened the issues for translations into Spanish in GitFichas, all [translation issues have the translation tag](https://github.com/jtemporal/gitfichas/issues?q=is%3Aissue%20state%3Aopen%20label%3Atranslation).

With these issues open I consider GitFichas ready for hacktoberfest.

On the PRs front, all PRs were made on [this blog's repository](https://github.com/jtemporal/jtemporal.github.io):

- **[PR #309](https://github.com/jtemporal/jtemporal.github.io/pull/309):** which moved the projects from last year into its own folder and creates 2025 folder (still needs updating);
- **[PR #310](https://github.com/jtemporal/jtemporal.github.io/pull/310):** Holds the draft list as the repositories, at the time of writing this, still require review so the list can be published;
- **[PR #311](https://github.com/jtemporal/jtemporal.github.io/pull/311):** Which re-adds the past versions of the list as their own collections (which I called groupings in all PRs because I couldn't remember the word "collections").

### How the list started

A little context if you are new here: since 2017 with the help of the Brazilian dev community I curate a list of Brazilian open source projects.

The list started on Medium and stayed there for the first two editions in [2017](https://medium.com/nossa-coletividad/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-4dc9b9b576c0) and [2018](https://medium.com/@jessicatemporal/projetos-brasileiros-para-contribuir-nesse-hacktoberfest-vers%C3%A3o-2018-4925959b9411).

I ultimately wanted the community to be able to contribute to it, so I moved the list into GitHub in [2019](https://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-o-retorno/) under my own blog to make it easy for folks to contribute to it.

### Keeping the history

One thing that made me unhappy with the way I was structuring the data for the hacktoberfest list between 2019 and 2024, was that every year I would overwrite the list.

Not to big of a deal if you ask me, the blog post mostly gets views on the corresponding year anyways, but it low key bugged me but not enough to fix it until this year.

For some reason I felt 2025 deserved a proper historical representation of the list and now if you navigate on the previous years lists you'll get to see how the list changed.

These are all the past lists:

- [2017](https://medium.com/nossa-coletividad/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-4dc9b9b576c0)
- [2018](https://medium.com/@jessicatemporal/projetos-brasileiros-para-contribuir-nesse-hacktoberfest-vers%C3%A3o-2018-4925959b9411)
- [2019](https://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-o-retorno)
- [2020](http://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-2020)
- [2021](https://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-2021)
- [2022](https://jtemporal.com/projetos-brasileiros-para-contribuir-hacktoberfest-2022)
- [2023](https://jtemporal.com/projetos-br-hacktoberfest-2023)
- [2024](https://jtemporal.com/projetos-br-hacktoberfest-2024)

### Breaking prod just a little bit

In my tiredness I made a tiny mistake.

You see, the list worked based on a single collection: `_hacktoberfest_projects`. This collection would then render list on the post a liquid code that started like:

{% raw %}
```html
{% assign grouped = site.hacktoberfest_projects | group_by: "principal_language" %}
```
{% endraw %}

Then I copied the original list into a `_hacktoberfest_projects_2025` folder and to avoid confusion moved the previous folder into `_hacktoberfest_projects_2024`.

The issue being: when the original project no longer existed Jekyll gave out zero errors and then previous versions of the list started to show empty like this:

So **[PR #309](https://github.com/jtemporal/jtemporal.github.io/pull/309)** silently broke production since, I of course merged the PR forgetting about the past years.

I then started working on this blog post you are reading right now and wanted to give the context for past lists so I noticed the broken pages and that is how **[PR #311](https://github.com/jtemporal/jtemporal.github.io/pull/311)** came about.

### Fixing prod with some work

Now I had to pick a path and fix the problem of my own tired mind creation:

1. Pick the content from `_hacktoberfest_projects` from before PR #309, and apply that so all lists before 2024 would look the same; or
2. Pick the content from each past year and apply that in a new PR so all lists will have accurate data to show.

If you read until now, you can probably can guess what I did. 👀

Yep, I picked number 2.

In my brain the easy way to do this was to:

1. pick a commit after each hacktoberfest to grab the projects folders
2. copy the folder and add that to my working branch `hacktoberfest-projects-history`

Easy enough... The challenge became finding a commit in that period of time I could "jump into" to copy the folder from. So I got into the [commits list](https://github.com/jtemporal/jtemporal.github.io/commits/main) in GitHub and then used the date button to filter out the dates like this:

TODO: image from date based search

From there I picked a commit and jumped into it:

```sh
git switch 73fb9b686218251be6f5b1770f0151150a664862 --detach
```

Then copied the folder and created a stash with it:

```sh
cp -r _hacktoberfest_projects _hacktoberfest_projects_2019
git add _hacktoberfest_projects_2019
git stash
```

Then went back to the working branch and applied the changes from the stash:

```sh
git switch hacktoberfest-projects-history
git stash pop
```

From there I made the necessary changes and commits, and I repeated that 5 more times. In case you are curious these are the other commits I switched into:

```sh
git switch d4550d0c7f7ee492c334706749475d2235caec16 --detach
git switch ad60ba9a1b950d521419e86cf5c7547b9b922827 --detach
git switch 874b8f53cbe52e5c1d3f3832921c5d38b542dda1 --detach
git switch d2fc775c9e02569b78a43391ab49330384ed26ab --detach
```

There's probably an easier way to do this but this worked well for yesterday tired me. You can see all the changes and commits in **[PR #311](https://github.com/jtemporal/jtemporal.github.io/pull/311)**.

## What's next

October starts this week, so next weekend I'll be focusing on my PRs for hacktoberfest, these are the ones I plan on working on myself to start:

- [Issue #173 in GitFichas](https://github.com/jtemporal/gitfichas/issues/173): Generating a preview image for each of the cards to make them easy to share;
- [PR #166 in the PyLadiesCon repository](https://github.com/pyladies/pyladiescon-portal);

## Join me

I hope this post also inspire you to learn when you need to rest 

If you are looking for a low-code project to contribute to [GitFichas](https://github.com/jtemporal/gitfichas) has over 130 issues open right now. And if you need help with your contributions [drop me a note somewhere](http://jtemporal.com/socials/).

> [Don't forget to register for Hacktoberfest.](https://hacktoberfest.com/)

Happy coding! 🎉