---
layout: post
date: 2021-10-05T22:15:06.000-03:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/miscellaneous_ld0l6r.png
comments: true
lang: en
title: 5 Tips to Make Your Pull Request Shine ✨
description: Top tops to make your open-source contribution a success
type: post
tags:
- english
- pull request
- git
- open source
- open-source
- hacktoberfest
related: true
posts_list:
- criando-pastas-vazias-no-github-com-o-gitkeep
- resolvendo-conflitos
- conheca-o-gitfichas
translated: "/5-dicas-para-fazer-o-seu-pull-request-brilhar"
translator: true
author_note_link: professoradeboraazevedo@gmail.com
author_note: This blog post was adapted for English by Débora Azevedo.

---
October is hacktoberfest month and this should be the month where we put the most effort into contributing to open-source and helping more people contribute. So in this article you will learn five 5 golden tips to make your pull request ✨shine ✨. Let’s go!

## Follow the project's contribution guide

A maioria dos projetos _open-source_ tem um conjunto de regras ou padrões que você deve seguir para contribuir, coisas como manter cobertura de testes, criar _branches_ seguindo um certo padrão de nomeação, qual a língua oficial do projeto e de seus _commits_ e até mesmo regras sobre intervalo de tempo com inatividade no qual passado esse períodos o _pull requests_ sem atividade será fechado.

Following the project's contribution guide will ensure a good path to having a successful pull request right from the start. Such guide is usually found in the `CONTRIBUTING.md` file on GitHub projects but sometimes the rules can also be described in the `README.md` file.

Now you might be asking yourself _“What do I do if the project doesn't have a contribution guide?”_ and this situation is quite common. So if there is no contribution guide what I usually do is look at some commits from the commit history to see how they are made and other pull requests that were made before mine to try to follow the same format.

## Use branches in your fork

When forking a project to make a contribution, it is very common to make the mistake of making changes to the main branch and submitting the pull request.

Avoid doing that.

As much as you only plan on making just one pull request, you may be struck by inspiration and you may want to make a second pull request and then you've already compromised your main branch with changes from the first pull request, and any contribution from that point forward will contain the changes from the first pull request.

It is ideal to keep the main branch clean of changes this way you can keep it up to date with the main branch of the source repository. So make a good habit of separating your contributions into new branches.

## Link the pull request to an issue

There are now, 9 keywords to link your pull request to an issue (if one exists). That's right, nine! Using these words when making the pull request will make the life of those who maintain the project easier, since these words close the corresponding issue when the pull request is merged, and will also help people who are interested in contributing as they can see the pull request in progress, preventing two people from doing duplicate work.

This is the list of words:

1. close
2. closes
3. closed
4. fix
5. fixes
6. fixed
7. resolver
8. resolve
9. resolved

Any of these words can be used in two places:

1. In the pull request's **title**;
2. In the pull request's **description**.

You should use them as follows to resolve an issue:

```txt
fixes #42
```

Or as follows to resolve more than one issue:

```txt
fixes #42, fixes #44
```

If your pull request does not _fully_ resolve an issue, you should still _mention_ the issue number (by using the hashtag symbol) that is related to your pull request as this will make your pull request appear in the issue as a mention, but in this case you should not use the words above.

As a person who maintains some projects, it makes me very happy to see these words being used in pull requests. You can read more about all of this [in GitHub's documentation on the subject](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).

## Give context to reviewers

Often people who maintain projects, as well as people who contribute to projects, do so in their spare time, that's not their job. So it's our duty to facilitate the contribution, both by writing well-described issues if you're reporting a bug for example, and by well-describing the pull request you're making. Let's focus on the pull request that is the main topic of this article.

Nowadays it is very common to find projects that have a [pull request template/model](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository), this template seeks to standardize the questions needed to review that pull request and generate changelogs. So focus on what you need to fill in and remember that you can use markdown to style the content of the description and make it easier for people reviewing contributions to read.

Although nowadays many repositories have pull request templates, it could be the case that you are contributing to a project that doesn't have one of these, so here is a list of topics for you to include in your pull request description:

1. **What is the goal of this pull request?**

   Here you put that information of which issue (if it exists) is related to this pull request.
2. **What changes were made to achieve this goal?**

   Code changes, documentation, data flow changes, and alike should come here. Use your commits to remember what you changed.
3. **How to test if these changes really work?**

   Here you can use prints if it's something visual, for example, or examples of using the new piece of code.
4. **Possible improvements and other notes**

   A list of things that could be improved, but that are not the focus of the pull request, or that you don't know how to solve and need help.

These four points will ensure that the person reviewing will have most if not all the information they need to review the pull request at the time the review takes place.

## Wait for suggestions

After making your contribution, the reviewer may have suggestions for improvement or necessary adjustments to ensure the standardization of the code base. These suggestions might ask you to change part of the code, implement tests, or adjust the documentation.

Generally speaking, they come to help your pull request improve and to get your contribution accepted. The review process is always a learning moment, so it is important to have an open mind to receive suggestions and, if necessary, accept them.

## Recap

Contributing to open-source is great because it can help all the people who use that project. And during hacktoberfest, for example, is a great time to exercise this skill, so be sure to follow the tips you've seen here to be even more successful with your pull requests.