---
author_note: You can read this article in English
author_note_link: https://jtemporal.com/creating-a-new-branch-and-switching-to-it-with-only-one-command
bookbanner: true
comments: true
date: 2022-01-01 12:34:20-02:00
description: Veja como usar git checkout e git switch para criar um branch e automaticamente
  mudar para ele
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png
lang: pt
layout: post
posts_list:
- resolvendo-conflitos
- corrigindo-a-origem-de-um-branch-com-git-rebase
- 5-dicas-para-fazer-o-seu-pull-request-brilhar
related: true
tags:
- git
- português
- colinha
title: Criando um novo branch e mudando pra ele com apenas um comando
translations:
- lang: en
  url: /creating-a-new-branch-and-switching-to-it-with-only-one-command
type: post
---

Toda vez que você cria um branch novo no Git você precisa mudar para esse branch antes de fazer um commit. Nessa colinha eu vou te mostrar o meu atalho favorito para criar um branch e mudar para ele tudo ao mesmo tempo.

## Formas tradicionais de criar um branch

No Git é possível criar um branch. E mudar para ele usando a sequência de comandos a seguir:

```console
git branch ramo-1
git checkout ramo-1
```
Como você pode ver na imagem abaixo:

![imagem mostrando o resultado dos comandos git branch e git checkout](https://res.cloudinary.com/jesstemporal/image/upload/v1641056637/git-atalhos/criando-e-mudando-de-branch-fig-1_i8r9uw.png)

Ou até mesmo a sequência a seguir:

```console
git branch ramo-2
git switch ramo-2
```

Também visível na imagem abaixo:

![imagem mostrando o resultado dos comandos git branch e git switch ](https://res.cloudinary.com/jesstemporal/image/upload/v1641056637/git-atalhos/criando-e-mudando-de-branch-fig-2_ypy9u5.png)

## Atalhos para criar branches e trocar de branch ao mesmo tempo

Não tem nada errado com essas duas sequências de comandos mostradas anteriormente, mas existem dois atalhos para obter o mesmo resultado usando apenas um comando. O primeiro usando o `git checkout` seguido da _flag_ `-b`:

```console
git checkout -b ramo-3
```

Que você pode ver o resultado semelhante àquele mostrado no primeiro exemplo dessa colinha:

![imagem mostrando o resultado do comando git checkout -b ramo-3](https://res.cloudinary.com/jesstemporal/image/upload/v1641056638/git-atalhos/criando-e-mudando-de-branch-fig-3_gg7i9l.png)

E se você preferir usar o comando `git switch` temos o seguinte atalho usando a _flag_ `-c`:

```console
git switch -c ramo-4
```

Também com resultado semelhante ao que vimos anteriormente:

![imagem mostrando o resultado do comando git switch -c ramo-4](https://res.cloudinary.com/jesstemporal/image/upload/v1641056638/git-atalhos/criando-e-mudando-de-branch-fig-4_uolxpk.png)

## GitFichas

Abaixo você encontra [duas GitFichas pra te ajudar a lembrar desses atalhos](https://gitfichas.com):

{% assign ficha_url = "https://gitfichas.com/projects/014?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878672/gitfichas/pt/014/full_wkqgez.jpg" %}
{% assign ficha_title = "GitFicha #014" %}
{% assign ficha_description = "git checkout -b nome" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/projects/035?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878677/gitfichas/pt/035/full_uz9o0d.jpg" %}
{% assign ficha_title = "GitFicha #035" %}
{% assign ficha_description = "git switch -c nome" %}
{% include ficha.html %}

Agora você sabe dois atalhos para criar um branch e mudar pra ele. Qual desses você vai adotar?
