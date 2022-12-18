---
title: 'Python project dependencies: requirements.txt'
description: "Learn about the requirements.txt file"
layout: post
date: 2018-01-06 08:00:00
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png"
lang: "en"
translated: "/requirements-txt"
author_note: "Você pode ler esse artigo em Português"
author_note_link: "https://jtemporal.com/requirements-txt"
type: post
tags:
- protip
- python
- requirements
- dependencies
- versioning
- versions
- english
comments: true
---

---

Nota da autora: Você pode [ler esse artigo em Português se preferir](https://jtemporal.com/requirements-txt/).

---

After a long conversation the other day about dependencies and environments reproducibility, I decided to make this post to talk about a very common file in [Python](http://python.org/) projects that I see all around: the `requirements.txt`.

A common step in setting up Python development environments is to install dependencies. This step is often performed as follows:

```console
$ pip install -r requirements.txt
```

But what is this file really? According to [pip documentation on requirement files](https://pip.pypa.io/en/stable/user_guide/#requirements-files):

> "Requirements files" are files containing a list of items to be installed using pip install

That is, this file is nothing more than a text file, containing a list of packages to be installed during `pip install`.

## Let's go to an example

Considering this requirements.txt here:

```plaintext
1 -e git+https://github.com/jtemporal/caipyra.git@master#egg=caipyra
3 seaborn==0.8.1
2 pandas>=0.18.1
4 serenata-toolbox
```

We have several important information, let's go over it line by line:

1. **-e git+https://github.com/jtemporal/caipyra.git@master#egg=caipyra**: This way we were able to install Python packages that are available on GitHub but not on PyPI. This is a really cool tip when, for example, you need the development version of a library or when you prefer to use a fork instead of the traditional version of the package.
2. **seaborn==0.8.1**: We are installing version `0.8.1` of seaborn package. Fixing the version in this way is interesting because it ensures that your project will always be working since changes in the packages are indicated by the change in the version number.
3. **pandas>=0.18.1**: In the same way that the `==` sign defines a specific version to be installed, when we use the `>=` sign in this list, we are saying that we want to install a version of the library higher that is equals to `0.18.1` or higher than that. Interesting in this case is to note that you can define a range of versions, for example, `pandas>=0.15.0, <=0.18.1`.
4. **serenata-toolbox**: When we don't specify a version, pip will always try to install the latest version available of the specified package.

## Creating your requirements.txt

A simple way to create your own requirements file is to use the `pip freeze` command as follows:

```console
$ pip freeze > requirements.txt
```

The command `pip freeze` lists the Python packages installed in your environment in the terminal already in the format that the pip install can understand, by associating it with the `>` redirection operator you can write the same list that appears in the terminal inside the text file.

Awesome right? Now just create dependency files for all projects 😜

---

## Links

* [Caipyra](https://github.com/jtemporal/caipyra)
* [pandas](https://pandas.pydata.org/)
* [seaborn](https://seaborn.pydata.org/)
* [serenata-toolbox](https://github.com/datasciencebr/serenata-toolbox)
* A post on [control and redirection operators](https://unix.stackexchange.com/questions/159513/what-are-the-shells-control-and-redirection-operators)

## Thanks

Thanks to friends who participated in the conversation about dependencies and environments reproducibility <3
