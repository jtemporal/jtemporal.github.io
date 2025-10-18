---
author_note_text: This blog post was adapted for English by Debora Azevedo.
author_note_link: https://deboraazevedo.github.io/?utm_source=blogdajess
bookbanner: true
comments: true
date: 2021-12-24 12:34:20-02:00
description: Understand how to use .gitkeep
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
lang: en
layout: post
series: "Git Pro Tips"
series_order: 2
posts_list:
- solving-conflicts
- introducing-gitfichas
- 5-dicas-para-fazer-o-seu-pull-request-brilhar
related: true
tags:
- git
- english
- pro tip
title: Creating empty folders on GitHub with .gitkeep
translations:
- lang: pt
  url: /criando-pastas-vazias-no-github-com-o-gitkeep
author_note: true
type: post
---

Sometimes you need to put an empty folder in your project on GitHub, but traditionally git doesn't track empty folders, and then the question pops up: _“how to make an empty folder appear on GitHub if git doesn't allow it?”_

Don't worry about it, you'll see on this pro tip how to do it using a special file called `.gitkeep`.

This happened to me a few years ago on the project I was working on: one of the open-source tools depended on the existence of a folder to download sample data and the team decided that putting a check on the folder's existence or its creation in our code would be an overkill. One way we found to ensure the folder's existence was using `.gitkeep`.

By placing this file in an empty folder, it ensures that git will add this folder to your versioning system and because it is a hidden file, it makes it easier to maintain the folder structure without getting in the way of using the folder for other purposes.

In the image below you have a project called `exemplo-pastas` that already has a `README.md` file that has already been committed and there are no changes tracked by git, then I create a new folder called `diretorio1` and when running `git status` again git continues to inform that there are no changes to the project.

![exemplo 1](https://res.cloudinary.com/jesstemporal/image/upload/v1640360211/gitkeep-exemplo-fig-1_tsvwqh.png)

Now if we create the file `.gitkeep` inside `diretorio1`, git shows that there is a directory to be added, see:

![exemplo 2](https://res.cloudinary.com/jesstemporal/image/upload/v1640360212/gitkeep-exemplo-fig-2_etwfco.png)

With this you can see how `.gitkeep` works and if you want to see it in practice, [this example is available in this GitHub repository](https://github.com/jtemporal/exemplo-pastas).