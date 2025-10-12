---
author_note_text: This blog post was adapted for English by Debora Azevedo.
author_note_link: https://deboraazevedo.github.io/?utm_source=blogdajess
bookbanner: true
comments: true
date: 2023-12-02 09:01:00+00:00
description: Using the Heroku CLI on GitHub Codespaces to perform a "browserless"
  login
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
lang: en
layout: post
tags:
- github codespaces
- codespaces
- git
- github
- heroku
- authorization
- english
title: Login to Heroku from GitHub Codespaces
translations:
- lang: pt
  url: /login-no-heroku-do-github-codespaces
author_note: true
type: post
---


These days I was using GitHub CodeSpaces to deploy an application to Heroku and I came across a problem: _How do I login to Heroku given that I don't have access to a browser running on the same machine where I'm using the terminal?_

If you keep reading this blog post, I will show you exactly how to solve this.

## IP mismatch when logging in

You've just finished [installing Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli) and it's time to log in. Then you run the following command:

```bash
heroku login
```

This command will give you a page that you can open in your browser and login. Typically you see this page here:

![heroku login page](https://res.cloudinary.com/jesstemporal/image/upload/v1694298910/heroku-login-page_sjnn6v.png)

When you click on login, you can log into your account with your traditional method such as username and password, for example, and then your terminal will show that you have logged in successfully.

![image login made in the terminal using the browser](https://res.cloudinary.com/jesstemporal/image/upload/v1694298869/heroku-successful-login-in-terminal_re304s.png)

It's kind of magical how this happens, right? However, if you are using GitHub Codespaces, you don't have a browser to view this login page, and if you try to open that same page using the traditional method of copying the URL and pasting it in your browser, you will find a page with the “IP mismatch” message.

![Image showing IP mismatch from heroku](https://res.cloudinary.com/jesstemporal/image/upload/v1694297874/ip-mismatch-after-heroku-login_poxcig.png)

And now what? The secret is to use the iterative way to login from the command line.

## Logging into Heroku using the terminal

For cases in which it is not possible to use the browser to see that familiar login screen, the solution is to login _interactively_. Just use the same command as before followed by the  `-i`option and then follow the instructions that will show up.

```bash
heroku login -i
```

After running the command above, you will see the user and password request as can be seen in the image below:

![Image requesting for the username and password](https://res.cloudinary.com/jesstemporal/image/upload/v1694299186/heroku-login-cli-credentials-requested_jfes5u.png)

After entering your data and logging in, you can continue using Heroku via the CLI normally.

## Recap

In this post, you learned:

- How to login to Heroku from GitHub Codespaces.
- How to resolve the "IP mismatch" error using the `-i` option when logging into Heroku via the command line.

I hope this post helps you login to Heroku from GitHub Codespaces.