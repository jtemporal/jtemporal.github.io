---
author_note: false
comments: true
date: 2018-01-13 07:59:00+00:00
description: Today's pro-tip teaches you what to do when you don't have a Gemfile
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
lang: en
layout: post
series: "Jekyll & GitHub Pages Mastery"
series_order: 3
tags:
- english
- protip
- pro tip
- jekyll
- ruby
- gemfile
- terminal
title: 'Ruby Project Dependencies: Gemfile'
translations:
- lang: pt
  url: /gemfile
type: post
---

---

Author note: [Leia este artigo em Português](https://jtemporal.com/gemfile/).

---

After [teaching how to get your website online](https://jtemporal.com/do-tema-ao-ar/) (in Portuguese) using [Jekyll](https://jekyllrb.com). I'm going to use today's pro-tip to answer a question somebody asked me: _"My theme doesn't have a Gemfile, now what?"_

## What is a Gemfile?

Before explaining what this file is, you need to understand a little bit about Ruby projects. Usually, each project, independent of the language you are using, has a list of dependencies that are required for the said project to run. For Ruby projects, this dependency management list is made using a system known as Gemfile.

Each package/library you need install to run your project is called a _gem_. Just as Jekyll itself is a gem, you may need, for example, some plugins to add some features on your site such as paginating post lists, including SEO, and even automatically building an XML feed. To install and manage such plugins, we use a Gemfile.

## My theme does not have a Gemfile

For the tutorial linked at the beginning of this post, I used [the Fresh](http://jekyllthemes.org/themes/fresh/) theme. It already comes with a Gemfile. But what if I had chosen a theme without a Gemfile?

For starters, the `bundle install` command would not work. This command uses the Gemfile to install the project required gems. Similarly, the `bundle exec jekyll serve` command won't work either.

Let's see how to create a Gemfile, or live without it, to exemplify today's steps I will use the [Wall-E](https://github.com/jtemporal/Wall-E) theme (I linked the fork I made because after this post I made a pull request adding a Gemfile to the theme `¯\_(ツ)_/¯`).

    $ git clone git@github.com:jtemporal/Wall-E.git
    $ cd Wall-E/

<center>
<br>
<img src="https://i.imgur.com/Efo1e1C.png" alt="bundle install failing">
<br>
<small><i>bundle install failing</i></small>
</center>

If you can't start the server using bundle, the alternative is to do it using pure Jekyll:

    $ jekyll serve

<center>
<br>
<img src="https://i.imgur.com/RGYPVQu.png" alt="jekyll serve failing">
<br>
<small><i>jekyll serve failing</i></small>
</center>

This is when you begin to realize how cool it would be to have a Gemfile.  It is much easier to run the project when you have a dependency file.  To fix this error, do the following steps:

    $ gem install jekyll-gist
    $ jekyll serve

Now you can access  `localhost:4000`.

One way to know which gems are needed before running the server is to check the necessary gems for the theme in the `_config.yml` file in the `plugins` tag:

    plugins: [jekyll-gist]

The plugins tag lists the gems needed for that Jekyll project.

## Creating Your Gemfile

Now you know how to run a project without Gemfile, and you know how to install gems by hand, but doing this every time is annoying, so let's create a Gemfile. Start by creating a file called `Gemfile` in the project root:

    $ touch Gemfile

In this file you will list all dependencies, including Jekyll himself:

    source "https://rubygems.org"
    
    gem "jekyll"
    gem "jekyll-gist"

Then you can do the following:

    $ bundle install
    $ bundle exec jekyll serve

All is set, and you enjoy your project 😉

---

## Links

* Tutorial about [Gems, Gemfiles and Bundler](https://learn.cloudcannon.com/jekyll/gemfiles-and-the-bundler/)