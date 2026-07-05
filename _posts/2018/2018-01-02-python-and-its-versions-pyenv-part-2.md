---
title: 'Python and its versions: pyenv part 2'
layout: post
date: 2018-01-02 10:00:00
last_modified_at: 2026-07-04
image: "/images/covers/pro_tip.webp"
type: post
tags:
- english
- python
- pyenv
- versions
- pro tip
comments: true
lang: en
description: How pip packages work across Python versions installed with pyenv
translations:
- lang: pt
  url: /pyenv-parte2
author_note: false
related: true
posts_list:
- python-and-its-versions
- python-virtual-environments-venv
- requirements-txt-en
---

Today's tip was inspired by this tweet right here:

<center>
<blockquote class="twitter-tweet" data-lang="pt"><p lang="pt" dir="ltr">como ele funciona a respeito dos pacotes instalados via pip? tem um pip pra cada versão? os pacotes ficam disponíveis pra múltiplas versões?</p>— luciano ratamero (@lucianoratamero) <a href="https://twitter.com/lucianoratamero/status/947291620109639680?ref_src=twsrc%5Etfw">31 de dezembro de 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</center>

So if you already installed [pyenv](https://github.com/pyenv/pyenv) and now want to know a little bit more about how it works just like Luciano did, here you go…

## Pip

For those who don't know what [pip](https://pip.pypa.io/en/stable/) is, it's the recommended tool for installing Python packages.

## Where do pyenv versions go?

Inside the pyenv folder, there's a directory called `versions` and that's where the versions you install using the `pyenv install` command live. On my machine I have three Python versions installed:

~~~ console
versions
├── 2.7.12
├── 3.3.0
└── 3.6.4
~~~

## Pyenv and Pip

Each new Python version you install using pyenv already comes with its own pip. Take a look:

<center>
<img src="/images/pyenv/list-installed-packages.webp"/>
<br>
<i>List of installed packages in each version</i>
</center>

Now, if you set a Python version using pyenv and install a package using pip, what happens? Does that package become available to the other versions?

Quick answer: no. A package installed in one version doesn't become available in another version.

Let's take a look. I'll use the [Caipyra](https://github.com/jtemporal/caipyra) package as an example. Before installing, we have:

<center>
<img src="/images/pyenv/list-installed-packages-before-caipyra.webp"/>
<br>
<i>List of installed packages in each version</i>
</center>

Installing caipyra on version `3.3.0`:

<center>
<img src="/images/pyenv/installing-caipyra.webp"/>
<br>
<i>Installing the Caipyra package on version `3.3.0`</i>
</center>

Listing the packages installed in each version again:

<center>
<img src="/images/pyenv/list-installed-packages-after-caipyra.webp"/>
<br>
<i>List of installed packages in each version</i>
</center>

And finally the test to see if the package is available (or not) for other versions:

<center>
<img src="/images/pyenv/import-caipyra-test.webp"/>
<br>
<i>Running `import caipyra` on every version</i>
</center>

On version `2.7.12` and on version `3.6.4`, Python yells `ModuleNotFoundErrror`. This error is characteristic of when the package isn't installed.

Cool right? So get ready, aim, and install different packages on each Python version 😜

----

## Links

- [The first part of this tutorial can be found here](https://jtemporal.com/python-and-its-versions/) and shows how to install pyenv.
- To understand how pyenv works under the hood, take a peek at the [How it Works section of the project's README](https://github.com/pyenv/pyenv#how-it-works).

## Special thanks

Thanks Luciano Ratamero for the questions that gave me the idea for this other post 😉