---
title: Using empty commits to rebuild GitHub Pages websites
layout: post
date: 2023-09-20T10:10:00.000+00:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
tags:
- pro tip
- jekyll
- build
- rebuild
- github pages
- forcing rebuild with empty commits
- english
comments: true
type: post
description: How to use Git to force building a website hosted via GitHub Pages
related: false
lang: en
translator: true
author_note: This blog post was adapted for English by Debora Azevedo.
author_note_link: https://deboraazevedo.github.io/?utm_source=blogdajess
translated: "/force-rebuild-jekyll"
related: true
posts_list:
- notes-on-self-publishing-first-ebook
- solving-conflicts
- login-no-heroku-do-github-codespaces

---

Whether due to broken CSS or a change that seems to have had no effect, sometimes it is necessary to force a rebuild of a [Jekyll](https://jekyllrb.com/) website hosted on GitHub. Today's pro tip explains one way to do this.

<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@jess.temporal/video/7276637697509199110" data-video-id="7276637697509199110" style="max-width: 605px;min-width: 325px;border-left: 5px #1bacaf" >
  <section>
    <a target="_blank" title="@jess.temporal" href="https://www.tiktok.com/@jess.temporal?refer=embed">@jess.temporal</a> Empty commits are awesome! That is, if you know how to make them <a title="git" target="_blank" href="https://www.tiktok.com/tag/git?refer=embed">#git</a> <a title="coding" target="_blank" href="https://www.tiktok.com/tag/coding?refer=embed">#coding</a> <a title="softwareengineer" target="_blank" href="https://www.tiktok.com/tag/softwareengineer?refer=embed">#softwareengineer</a> <a title="github" target="_blank" href="https://www.tiktok.com/tag/github?refer=embed">#github</a> <a title="gittutorial" target="_blank" href="https://www.tiktok.com/tag/gittutorial?refer=embed">#gittutorial</a> <a title="tutorial" target="_blank" href="https://www.tiktok.com/tag/tutorial?refer=embed">#tutorial</a> <a title="techtok" target="_blank" href="https://www.tiktok.com/tag/techtok?refer=embed">#techtok</a> <a title="technology" target="_blank" href="https://www.tiktok.com/tag/technology?refer=embed">#technology</a> <a target="_blank" title="♬ Empty commit - Jess Temporal" href="https://www.tiktok.com/music/Empty-commit-7276637716422413061?refer=embed">♬ Empty commit - Jess Temporal</a>
  </section>
</blockquote>
<script async src="https://www.tiktok.com/embed.js"></script>

## What is GitHub Pages?

GitHub has a "service" for serving pages from repositories called [GitHub Pages](https://pages.github.com/). This service allows you to create pages almost instantly from your repository and all you need is a markdown file like a project's `README.md` and a basic configuration file.

This is possible because GitHub Pages uses Jekyll, an open source static website generator, to build websites. Among other features that I won't talk about today, an extremely positive point of using these two tools to get your website up and running is that you don't need to push a build of your website to GitHub every time you want to publish a change. GitHub itself takes care of building the website for you.

However, sometimes it is necessary to run the build process again and as this process happens on GitHub servers that we do not have access to, we need other ways to force the build.

## Making an empty commit  

One of the ways to force a rebuild and the way I use nowadays is to make an "empty" commit, that is, a commit that does not upload changes to any file in your directory.

Just go to the website directory (here I will use my website as an example):

~~~ console
$ cd jtemporal.github.io
~~~

and write a commit using the `--allow-empty` option:

~~~ console
~/jtemporal.github.io $ git commit --allow-empty -m "Forcing website rebuild"
~~~

or if you prefer to edit the commit message in the text editor:

~~~ console
~/jtemporal.github.io $ git commit --allow-empty
~~~

And that's it. This is enough to force the build process again. Cool, right? 😜
