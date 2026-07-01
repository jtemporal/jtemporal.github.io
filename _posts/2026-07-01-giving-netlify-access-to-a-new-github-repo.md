---
bookbanner: true
comments: true
date: 2026-07-01 09:00:00+00:00
description: When a new GitHub repo doesn't show up in Netlify, the fix is in your GitHub app permissions—not the Netlify dashboard.
image: /images/covers/tutorial.webp
lang: en
layout: post
posts_list:
- making-pull-requests-with-github-codespaces
- login-to-heroku-from-github-codespaces
- automating-css-versioning-and-staging-through-github-actions
related: true
tags:
- geral
- github
- netlify
- tutorial
- english
title: Giving Netlify access to a new GitHub repo
translations:
- lang: pt
  url: /dando-ao-netlify-acesso-a-um-novo-repositorio-no-github
author_note: false
type: post
---

Migrating my website to a new design meant working on a separate repo for a while. Once things looked solid enough to ship, I figured I'd just point Netlify at the new repo and use previews instead of setting up a whole new project. Easy, right? 😅 Except the repo wasn't showing up in Netlify's list.

## The problem

When I went to link the new repo to my existing project, the repo wasn't in the list.

![Netlify Build & deploy settings with the Manage repository dropdown open to link a different repository](/images/netlify-github-repo-access/netlify-repo-not-in-list.png)

Turns out I set up all my projects years ago and completely forgot I'd given Netlify access to a filtered list of repos.

![Netlify Link your project to a Git repository screen without the new repo in the list](/images/netlify-github-repo-access/netlify-filtered-repos.png)

So off I went to figure this out again.

## Netlify app in GitHub

The configuration that tells Netlify which GitHub repos it can see actually lives in GitHub, not in Netlify. I had completely forgotten that. After five minutes of clicking around the Netlify dashboard in vain, I gave up and asked Google:

```
netlify access to all repos
```

To which it kindly replied that: "*To grant Netlify access to all repositories, you need to update the repository permissions in your Git provider settings*". And then it clicked.

> I need to update things in GitHub

## The list of repos Netlify has access is set in GitHub

To update which repos Netlify can access, you need to find the Netlify app you authorized when you first connected your accounts. Remember this screen?

![GitHub Install Netlify screen asking where to install the app](/images/netlify-github-repo-access/netlify-github-authorize.png)

Well to get to the app you already have: Open your GitHub settings, then go to [**Applications**](https://github.com/settings/installations) under **Integrations** in the left sidebar. And you should see Netlify listed there:

![GitHub Settings Applications page with Netlify under Installed GitHub Apps](/images/netlify-github-repo-access/netlify-github-applications.png)

Hit the Configure button and scroll down to the **Repository access** section:

![GitHub Repository access with Only select repositories and three repos listed](/images/netlify-github-repo-access/netlify-repository-access.png)

Now you can find the repo you need. Make sure to hit Save once you add it.

![GitHub Repository access settings with the new-blog repo selected in the search dropdown](/images/netlify-github-repo-access/netlify-save-repo-access.png)

GitHub will send you right back to the Netlify dashboard so you can continue your work.

## Recap

If a repo isn't showing up when you try to connect it to Netlify, the fix probably isn't in Netlify, it's in GitHub. Netlify only sees the repos you allowed when you first connected the app. To update that list:

1. Open your GitHub settings.
2. Go to **Applications** under **Integrations**.
3. Find the Netlify app and click **Configure**.
4. Scroll to **Repository access**.
5. Add the repo you need and save.

That's it, back to shipping 🚀