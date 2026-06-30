---
bookbanner: true
comments: true
date: 2025-10-20T04:00:00+00:00
description: Blog and GitFichas work - GitFichas now has a search bar!
image: /images/covers/hacktoberfest.webp
lang: en
layout: post
type: post
series: "Hacktoberfest 2025 Weekly"
series_order: 3
related: true
posts_list:
- solving-conflicts
- 5-tips-to-make-your-pull-request-shine
- gitfichas-is-now-open-source
tags:
- hacktoberfest
- ai
- git
- opensource
- pull request
- pull requests
title: "Field Notes: Hacktoberfest 2025, Week 3"
translations:
- url: "/hacktoberfest-2025-semana-3"
  lang: "pt"
---

We crossed over the halfway point of Hacktoberfest 2025 and here is what happened in my little corner of the open source world. In this series we overview some stats for contributions I received and made over this month. This week, like the last, I mostly focused on GitFichas due to limited availability, but I also implemented some new features on my blog so let’s go into the contributions.

## GitFichas

Like always, third week of Hacktoberfest symbolizes the big “*slow down*”, where the volume from contributions from the first few weeks dip after many folks complete their 4 or 6 pull requests. So after the high from last week, this week we had 30 pull requests:

- 23 PRs by the community
    - 17 merged
    - 5 closed
    - 1 open

Interestingly enough I tried having copilot draft a PR and it actually, did a good job. I also merged 6 PRs myself which were 2 for documentation, 2 for corrections, and 2 for improvements.

![A screenshot showing GitFichas repository statistics with pull request counts and contribution metrics](/images/hacktoberfest-2025-w3/IMG_0873.webp){: class="img-post"}

The most exciting part for the week for me at least, was that on October 15th we reached the mark of over 100 issues closed. Which marks the milestone of more issues closed than open for GitFichas. 🎉

![GitFichas repository showing milestone of 100+ closed issues, demonstrating project progress](/images/hacktoberfest-2025-w3/IMG_0862.webp){: class="img-post" style="max-width: 45%;"}

I also worked on improving descriptions for some issues that were open a long time ago.

![Screenshot of GitHub issue improvement work showing better descriptions and titles for GitFichas issues](/images/hacktoberfest-2025-w3/IMG_6050.webp){: class="img-post"}

As far as inviting people to contributing to your project, it is fundamental that you have both good descriptions *and* good titles since in the list of issues every contributor sees mostly the titles and tags. I did some automating to help make this easier on me and help me with maintenance tasks but I’ll write about that in a separate post later. 👀

Still on the issues subject this is the burn up chart since September 1st there's still a gap but the trend is clear: the opening of issues is slowing down, and the closing of them is bridging the gap.

![Burn up chart showing GitFichas issue trends from September 1st, with lines indicating opened vs closed issues over time](/images/hacktoberfest-2025-w3/IMG_0880.webp){: class="img-post"}

One final thing: [someone decided to implement a search bar on GitFichas](https://github.com/jtemporal/gitfichas/pull/418), there wasn't an issue for this but it is something I definitely thought about having on the website.

![GitFichas website homepage showing the new search bar feature implemented by a community contributor](/images/hacktoberfest-2025-w3/Screenshot_2025-10-20_at_10.29.58_AM.webp){: class="img-post"}

A search function is not a tiny thing, especially if you don't have a database for indexing the content. Nonetheless someone implemented it and I do believe it will help others find cards more easily! So another big win of open source! 🎉

## The blog

[On the blog side](http://github.com/jtemporal/jtemporal.github.io), I worked on three main things:

- Series of posts
- Subtitles for posts
- New covers

Let’s dive in.

### Series in a blog

Two weeks ago I implemented a series widget so anyone reading the posts can quickly jump to other posts in the same collection much like the "Related Articles" or "Recent Articles" widgets I already have.

![Blog post showing the new series widget that allows readers to navigate between posts in the same series](/images/hacktoberfest-2025-w3/IMG_0875.webp){: class="img-post"}

Until Saturday it was impossible to link to a series, so I set on to fix that and create a way to link to a series so I could refer to series without linking out to an specific blog post.

To get series pages, I could think of a few ways to implement the behaviour:

1. **Separate series into collections**: I’ve created collections before, but in this case collections is not a great solution as it would separate the posts away from the rest of posts;
2. **Manually create a page for each series**: not scalable, that would create a bunch of other files for me to maintain;
3. **Plugins**: hear me out, plugins felt like the right way to go given the fact that I could write a ruby script to automatically generate pages but you can’t use custom plugins on GitHub Pages.

After some consideration, and talking to Copilot, I felt confident that writing a custom plugin was the way to go but since my blog was served through GitHub Pages I needed to find a different way to deploy the blog, and I was not about to commit the built site to GitHub.

Since I already use Netlify to preview the pull requests for both the blog and GitFichas, it felt like a natural step to migrate production deployment to Netlify as well. So I’d like to inform you all ladies and gentlemen, that I graduated from serving the production site from GitHub Pages to Netlify. I feel so much like a grown up dev. 🤣

With Copilot’s help I [implemented the plugin](https://github.com/jtemporal/jtemporal.github.io/pull/354/commits/db2e1e94f49bb3a7c134c35cad37b0b40b0f2bda) and successfully migrated prod to Netlify, I’ll probably write a post on this later.

Here are some of the series:

* **[Git Pro Tips](https://jtemporal.com/series/git-pro-tips/):** All about Git covering: conflicts, branches, rebase, and GitHub workflows.
* **[Hacktoberfest 2025 Weekly](https://jtemporal.com/series/hacktoberfest-2025-weekly/):** Weekly updates about Hacktoberfest 2025 on GitFichas and other projects.
* **[MCP Mastery](https://jtemporal.com/series/mcp-mastery/):** All you need to know about Model Context Protocol (MCP).

These and all others are available [in the series page](https://jtemporal.com/series).

### Subtitles for posts

Another thing I always wanted to do was to have subtitles on some posts. This weekend I figured out it was time, and so after some [Liquid magic and some CSS adjustments](https://github.com/jtemporal/jtemporal.github.io/pull/352) I'm happy to inform that I can now have posts with title and subtitles.

![Blog post layout showing the new subtitle feature implementation with title and subtitle styling](/images/hacktoberfest-2025-w3/IMG_0878.webp){: class="img-post"}

Just in time too for my fairy tale post.

### New covers

If you are asking yourself "*what fairy tale post?*" well I also started to get a bit annoyed at the fact the covers in the blog were too repetitive lately since the last 14 posts had all the same cover.

[![Illustration of a writer looking at scrolls, representing the fairy tale blog post cover](/images/fairy-tale/writer-looking-at-scrolls.webp){: class="img-post"}](https://jtemporal.com/the-writer-and-the-bot-fairy-tale/)

So it was time to create a few more covers and put them to good use, [I tell the story of it here in this other post](https://jtemporal.com/the-writer-and-the-bot-fairy-tale/), which I strongly encourage you to read because it is in the form of a fairy tale, but here’s the TL;DR: I noticed the repeated covers, [opened an issue, and had copilot do the code adjustments](https://github.com/jtemporal/jtemporal.github.io/pull/351).

## Super contributor status

Finally this week I updated my Holopin profile to show off my Hacktoberfest "supercontributor" badge.

![An image of @jesstemporal's Holopin badges, which is a link to view their full Holopin profile](/images/hacktoberfest-2025-w3/IMG_0883.webp){: class="img-post"}

And shirt is already here too!

![Hacktoberfest 2025 supercontributor shirt in light color, representing the limited edition reward for top contributors](/images/hacktoberfest-2025-w3/IMG_5971.webp){: class="img-post" style="max-width: 50%;"}

I prefer shirts with dark colors but this one feels special, since only 10,000 will be given away and this one has GitFichas written all over it. 😊

---

That’s a wrap for week 3! See you next week for Hacktoberfest 2025 week 4 report. 👻
