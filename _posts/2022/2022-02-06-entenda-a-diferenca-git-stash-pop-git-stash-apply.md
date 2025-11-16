---
layout: post
date: 2022-02-06T09:00:00.000-02:00
image: /images/covers/colinha.webp
comments: true
bookbanner: true
title: Entenda a diferença entre git stash pop e git stash apply
description: Apesar de parecidos em funcionamento eles tem uma diferença fundamental
type: post
lang: pt
series: "Dicas de Git"
series_order: 10
tags:
- git
- português
- colinha
related: true
posts_list:
- usando-git-stash-e-git-stash-pop
- para-que-serve-o-git-stash-drop
- resolvendo-conflitos

---
Você pode saber criar seus stashes, listar eles e tudo mais, mas na hora de voltar a usar o trabalho salvo em um stash sempre rola aquela dúvida: “_apply ou pop? Eis a questão_”. E essa dúvida é muito normal já que ambos tem um funcionamento parecido, ambos aplicam as mudanças guardadas em um stash.

Nessa colinha você vai ver quando usar um e quando usar o outro. 😉

## O git stash apply

O `apply` aplica as mudanças de um stash no seu diretório de trabalho e mantém a entrada na lista de stashes. Por exemplo, considere que você tem a seguinte pilha de stashes:

![imagem mostrando a lista de stashes como resultado do comando git stash list com dois stashes na lista](/images/git-stash/listagem-stashes-fig1.webp)

E você quer aplicar as mudanças do primeiro stash o `stash@{0}`. Para isso, rode o comando:

```console
git stash apply
```

O resultado esperado é encontrar as mudanças guardadas naquele stash no seu branch local:

![imagem mostrando o resultado do comando git stash apply com as mudanças presentes](/images/git-stash/resultado-git-stash-apply-fig2.webp)

E também encontrar aquelas mudanças ao listar os stashes:

[imagem mostrando a lista de stashes como resultado do comando git stash list com dois stashes na lista](/images/git-stash/listagem-stashes-fig1.webp)

Note que o `apply` assim como o `drop` e o `pop` sem passar um índice irá usar a stash mais recente da pilha.

## O git stash pop

O `pop` por sua vez, vai aplicar as mudanças de um stash à sua área de trabalho e remover aquele stash da pilha em seguida. O pop nada mais é do que um atalho para `git stash apply` seguido de [`git stash drop`](https://jtemporal.com/para-que-serve-o-git-stash-drop/).

Por exemplo, levando em consideração a mesma lista de stashes anterior, e um ambiente de trabalho sem mudanças, você quer tirar da lista e aplicar as mudanças do primeiro stash o `stash@{0}`. Então você roda o comando:

```console
git stash pop
```

O resultado esperado é encontrar as mudanças guardadas naquele stash no seu branch local, assim como no `apply`:

![imagem mostrando o resultado do comando git stash pop com as mudanças presentes](/images/git-stash/resultado-git-stash-pop-fig3.webp)

E, diferentemente do `apply`, ele já mostra que o stash correspondente foi removido da lista na mensagem de resultado. Se você rodar o `git stash list` não vai encontrar mais aquele stash na lista:

![imagem mostrando a lista de stashes só com um stash como resultado de ter feito o pop do stash mais recente](/images/git-stash/listagem-stashes-pos-dropfig3.webp)

## Quando usar apply e quando usar pop

Digamos que você queira reaproveitar as mudanças que você fez em outro lugar também, ou não tem certeza se você quer usar elas agora, então você pode usar a `apply` e caso não queira continuar com elas, usar o `git reset HEAD` para descartá-las, assim mantendo as mudanças armazenadas num stash para mais tarde.

Caso você tenha certeza que quer aplicar as mudanças use `pop`, assim além de aplicar as mudanças você mantém a lista de stash limpinha. Via de regra, eu prefiro sempre usar o `pop` e refazer o stash caso eu precise guardar as mudanças para mais tarde.

O importante é que agora você entende a diferença entre um e outro e não precisa mais ter medo do `git stash`.

## GitFichas

{% assign ficha_url = "https://gitfichas.com/projects/044?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1644151679/gitfichas/pt/046/full_mutfuw.jpg" %}
{% assign ficha_title = "GitFicha #046" %}
{% assign ficha_description = "git stash drop" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/projects/044?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642964759/gitfichas/pt/044/full_sbhjsb.jpg" %}
{% assign ficha_title = "GitFicha #044" %}
{% assign ficha_description = "git stash pop" %}
{% include ficha.html %}
