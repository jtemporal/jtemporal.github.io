---
title: 'Python and its versions: pyenv'
layout: post
date: 2017-12-29T10:00:00.000+00:00
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png"
lang: "en"
translated: "/pyenv-inicio"
author_note: "Você pode ler esse artigo em Português"
author_note_link: "https://jtemporal.com/pyenv-inicio"
type: post
tags:
- english
- versions
- protip
- python
- pyenv
comments: true
description: Learn how to install manage Python versions using pyenv

---
---

_Author note:_ Você pode [ler este artigo em Português](https://jtemporal.com/pyenv-inicio/).

---

One of the first things we learn in [Python](https://www.python.org/) is that there is more than one version of the same language working side by side. That can bring a few problems and the inevitable question: _"Which version should I choose?"_. Today's tip teaches you a way to install and manage many Python versions on your machine using [pyenv](https://github.com/pyenv/pyenv) 😉.

Amongst other things, the two best features of pyenv in my humble opinion are:

1. install new Python versions easily;
2. choose the global Python version.

<center>

<br>

<img src="https://media.giphy.com/media/10lqVdCCc9812M/giphy.gif"/> </center>

To start you'll need to install pyenv, here I'll demonstrate one of several installation methods, but in the project's _readme_ file [you can find other possibilities](https://github.com/pyenv/pyenv#installation) (and also operational system related details):

``` console
$ git clone https://github.com/pyenv/pyenv.git ~/.pyenv
$ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
$ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
$ exec "$SHELL"
```

After these easy steps, other versions of Python are an install away:

``` console
$ pyenv install 3.6.4
```

When in doubt of which version you can install, just use the install flag `-l` that it lists all versions available:Se estiver em dúvida quais versões você pode instalar só usar a flag `-l` do _install_ que ele vai listar todas as disponíveis:

``` console
$ pyenv install -l
```

Cool huh? Now you can install Python versions like crazy 😂

And now, for the moment of truth, to configure the global version of Python, that is, to define which version of Python you will use when running Python, run the following command:

```
 $ pyenv global 3.6.4
```

So regardless of where you navigate on your terminal, the Python version running will be `3.6.4`. This command is handy if all of your projects are in the same version. Another nice feature of pyenv is to define a local Python, let's say for instance that a given project only runs on Python `3.5.3`, so you need to install that version (as you learned previously) and then go to that project's folder and use this command:

```
 $ pyenv local 3.5.3
```

So whenever you enter the said project folder, pyenv will “activate” the correct Python for your project.

No more pain when dealing with Python versions! 🎉

---