---
bookbanner: true
comments: true
date: 2022-02-05 11:25:00-02:00
description: Entenda quando usar o git stash drop e como ele funciona
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png
lang: pt
layout: post
posts_list:
- usando-git-stash-e-git-stash-pop
- resolvendo-conflitos
- desfazendo-um-ou-mais-commits
related: true
tags:
- git
- português
- colinha
title: Aprenda para que serve o comando git stash drop
translations:
- lang: en
  url: /why-the-git-stash-drop-is-useful
type: post
author_note: false
---

Tá precisando limpar a lista de stashes e não sabe como? Não se preocupe, nessa colinha você vai aprender a "jogar fora" stashes que não precisa mais usando o comando `git stash drop`. 😉

## O fluxo comum de uso do git stash

Comumente você provavelmente usa o git stash para armazenar mudanças temporárias e que ainda não estão prontas para um commit. Muitas vezes isso acontece quando você precisa interromper o trabalho para corrigir um bug ou algo similar em outra branch. Então o seu fluxo de trabalho deve ser algo semelhante a esse:

```console
# trabalha trabalha trabalha
git stash
# muda de branch e faz outras entregas
# volta pro branch inicial
git stash pop
```

E até aí tudo bem, mas o que acontece quando você armazena mudanças por outro motivo, por exemplo, limpar o ambiente de trabalho? Eventualmente você vai querer se livrar dessas mudanças para manter a casa limpa não é mesmo? É nessa hora que entra o `git stash drop`.

## Jogando fora um stash

Stashes antigos podem ser fonte de muita dor de cabeça, _sim conflitos, eu estou falando de vocês_, então é importante manter a lista de stashes sempre em dia. Suponha que atualmente você tem a lista a seguir de stashes:

![imagem mostrando a lista de stashes como resultado do comando git stash list com dois stashes na lista](https://res.cloudinary.com/jesstemporal/image/upload/v1644068422/git-stash/listagem-stashes-fig1_uiizzc.png)

Você quer se livrar do stash de número `0` que contém a criação do `arquivo-2.txt`. Para isso rode o comando a seguir:

```console
git stash drop stash@{0}
```

Você deverá ver uma mensagem informando que o stash foi removido:

![imagem mostrando o resultado do comando git stash drop](https://res.cloudinary.com/jesstemporal/image/upload/v1644068420/git-stash/resultado-git-stash-drop-fig2_kzdkkj.png)

Em seguida, você pode conferir novamente a listagem de stashes:

![imagem mostrando a lista de stashes só com um stash como resultado de ter feito o drop de um dos stashes anteriores](https://res.cloudinary.com/jesstemporal/image/upload/v1644068420/git-stash/listagem-stashes-pos-dropfig3_j0h1gp.png)

Vale salientar que assim como o [`git stash pop`](https://jtemporal.com/usando-git-stash-e-git-stash-pop), se você não passar o nome do stash para o comando `git stash drop` ele vai remover o stash mais recente da pilha.

## GitFichas

{% assign ficha_url = "https://gitfichas.com/projects/045?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1644148850/gitfichas/pt/045/full_pketo7.jpg" %}
{% assign ficha_title = "GitFicha #045" %}
{% assign ficha_description = "git stash drop" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/projects/043?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642964759/gitfichas/pt/043/full_uuuiaz.jpg" %}
{% assign ficha_title = "GitFicha #043" %}
{% assign ficha_description = "git stash list" %}
{% include ficha.html %}

Espero que esses comandos te ajudem a remover stashes quando necessário.
