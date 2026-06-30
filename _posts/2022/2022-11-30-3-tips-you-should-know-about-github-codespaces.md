---
author_note_text: This blog post was adapted for English by Debora Azevedo.
author_note_link: https://deboraazevedo.github.io/?utm_source=blogdajess
bookbanner: true
comments: true
date: 2022-11-30 15:10:00+00:00
description: Basic tips you can use in less than 5 minutes
image: /images/covers/pro_tip.webp
lang: en
layout: post
tags:
- github codespaces
- codespaces
- english
- en
title: ' 3 tips you should know about GitHub Codespaces'
translations:
- lang: pt
  url: /3-dicas-que-voce-deveria-saber-sobre-github-codespaces
author_note: true
type: post
---

GitHub Codespaces is a great tool for anyone who wants to write code on the go. Recently, GitHub announced that now all accounts have a free monthly quota of 60 hours to use GitHub Codespaces, so I wrote this blog post with the 3 golden tips in case you want to start using the tool.

## Set up dotfiles to customize your experience

I really like to customize my terminal so that it shows the things I need/like. Most of these settings stay in a set of files popularly known as `dotfiles` these are those files that start with a `.` such as `.zshrc` and `.bashrc`.

It is also common to store such files on a GitHub repository named `dotfiles`, for example here is my [collection of dotfiles](http://github.com/jtemporal/dotfiles). To enable the use of these files in your *Codespaces*, click on your photo in the upper right corner and choose *Settings* from the menu that appeared.

![Image showing the Settings section in the profile menu on GitHub](/images/codespaces/github-menu-selected-option-settings.webp){: style="display: block; margin-left: auto; margin-right: auto; max-width: 30%;"}

Once in the settings dashboard, find the *Codespaces* option on the left side menu in the *Code, planning, and automation* section and click on it.

![Image showing the Codespaces section in the left menu on the Settings page](/images/codespaces/codespaces-lefthand-side-menu-in-settings.webp){: style="display: block; margin-left: auto; margin-right: auto; max-width: 50%;"}

This will take you to the Codespaces settings page and then the first section called *Dotfiles* will appear.

![Dotfiles settings section](/images/codespaces/dotfiles-section-on-codespaces-settings.webp)

Now click on the checkbox to install the dotfiles automatically on Codespaces and if you have a repository called `dotfiles` GitHub will identify your corresponding repository and use it here.

![Dotfiles settings section with the use of dotfiles enables](/images/codespaces/dotfiles-section-on-codespaces-settings-configured.webp)

Keep in mind that you can switch to another repository if you want. Finally, it is good to point out two things:

1. Changes in files in the dotfiles will only take effect after the creation of a new Codespace;
2. Codespaces doesn't use SSH to run git actions so if you have settings for that in your [dotfiles like I did](https://github.com/jtemporal/dotfiles/blob/7a79829f40d5c62b261f5ffaaa808df9c12a1144/.gitconfig) you're going to have problems (the solution is to remove that).

## Use the Codespaces Management Dashboard

Now that you have 60 hours free per month to play with Codespaces, you might be tempted to create Codespaces for all your repositories, after all, in theory, you can do that, but it's good to learn to keep a clean house too.

![List of Codespaces in your profile](/images/codespaces/github-codespaces-dashboard.webp)

To make your work easier there is a page where you can see all the Codespaces you have and the status of each one as seen in the image above, just access [github.com/codespaces](http://github.com/codespaces). I also recommend you get into the habit of doing this regularly to help keep your free quota, well, free.

## Learn how to use GitHub in the VS Code interface

Finally, the part that can take the most time: using GitHub integration in the VS Code interface. There is a VS Code extension called [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) that basically allows you to do things like review pull requests and interact with issues directly on VS Code.

![Image showing GitHub integration with Codespaces with a pull request as an example](/images/codespaces/github-vscode-extension-in-action.webp)

This will speed up your pull request review process because you don't even have to switch tabs or leave your Codespace to interact.

## Recap

These are the three fastest tips to implement that I can think of, in about 15 minutes you can set up and become familiar with each one. Remember:

- Set up dotfiles to customize your experience;
- Get to know the Codespaces management panel;
- Learn how to use the GitHub integration in the VS Code interface.