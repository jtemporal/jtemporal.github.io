---
author_note: false
bookbanner: true
comments: true
date: 2022-01-01 12:34:20-02:00
last_modified_at: 2026-06-20
description: Veja como usar git checkout e git switch para criar um branch e automaticamente
  mudar para ele
image: /images/covers/colinha.webp
lang: pt
layout: post
series: "Dicas de Git"
series_order: 5
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

Criar um branch novo no Git é um daqueles comandos do dia a dia que você roda sem pensar, até perceber que está digitando dois comandos quando um bastaria. Toda vez que você cria um branch, também precisa mudar para ele antes de começar a commitar, e existe um atalho que faz as duas coisas de uma vez. Nessa colinha eu vou te mostrar a forma tradicional de criar um branch e depois o meu atalho favorito para criar um e mudar para ele em um único comando.

## Formas tradicionais de criar um branch

No Git é possível criar um branch. E mudar para ele usando a sequência de comandos a seguir:

```console
git branch ramo-1
git checkout ramo-1
```
Como você pode ver na imagem abaixo:

![imagem mostrando o resultado dos comandos git branch e git checkout](/images/git-atalhos/criando-e-mudando-de-branch-fig-1.webp)

Ou até mesmo a sequência a seguir:

```console
git branch ramo-2
git switch ramo-2
```

Também visível na imagem abaixo:

![imagem mostrando o resultado dos comandos git branch e git switch ](/images/git-atalhos/criando-e-mudando-de-branch-fig-2.webp)

## Atalhos para criar branches e trocar de branch ao mesmo tempo

Não tem nada errado com essas duas sequências de comandos mostradas anteriormente, mas existem dois atalhos para obter o mesmo resultado usando apenas um comando. O primeiro usando o `git checkout` seguido da _flag_ `-b`:

```console
git checkout -b ramo-3
```

Que você pode ver o resultado semelhante àquele mostrado no primeiro exemplo dessa colinha:

![imagem mostrando o resultado do comando git checkout -b ramo-3](/images/git-atalhos/criando-e-mudando-de-branch-fig-3.webp)

E se você preferir usar o comando `git switch` temos o seguinte atalho usando a _flag_ `-c`:

```console
git switch -c ramo-4
```

Também com resultado semelhante ao que vimos anteriormente:

![imagem mostrando o resultado do comando git switch -c ramo-4](/images/git-atalhos/criando-e-mudando-de-branch-fig-4.webp)

## Recapitulando

Para criar um branch novo e mudar para ele em um comando, você tem duas opções: `git checkout -b nome-do-branch` ou `git switch -c nome-do-branch`. Os dois criam o branch e te colocam nele na hora, para você começar a commitar. O caminho mais longo, `git branch` seguido de `git checkout` ou `git switch`, continua funcionando, mas o atalho economiza um passo toda vez.

Se você está organizando o seu fluxo no Git, talvez também goste de saber como [atualizar um branch com git rebase](/atualizando-um-branch-com-git-rebase/) e [desfazer o último commit e reaproveitar a mensagem](/desfazendo-o-ultimo-commit-e-reaproveitando-a-mensagem/).

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
