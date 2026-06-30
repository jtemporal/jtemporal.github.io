---
author_note: false
bookbanner: true
comments: true
date: 2022-01-15 11:25:00-02:00
last_modified_at: 2026-06-20
description: Desfaça o último commit com git reset usando --soft e reutilize a mensagem
  com o ORIG_HEAD
image: /images/covers/colinha.webp
lang: pt
layout: post
series: "Dicas de Git"
series_order: 7
posts_list:
- resolvendo-conflitos
- desfazendo-um-ou-mais-commits
- 5-dicas-para-fazer-o-seu-pull-request-brilhar
related: true
tags:
- git
- português
- colinha
title: Desfazendo o último commit e mantendo as alterações para um próximo commit
translations:
- lang: en
  url: /undoing-the-last-commit-and-reusing-the-message
type: post
---

Desfazer e refazer commits faz parte do dia a dia, então é importante entender os comandos que podem ajudar a gente nesse caminho. Às vezes isso é chamado de "descommitar": você quer desfazer o último commit mas manter suas alterações para commitar de novo em outro lugar. Nessa colinha eu vou te ensinar a fazer duas coisas:

1. Desfazer o último commit de forma que você possa manter as alterações em _staging_;
2. Reaproveitar o conteúdo do commit desfeito para fazer um novo commit.

Com esses dois comandos no seu repertório de comandos Git você será muito mais feliz. 😉

## Criando o cenário

Eu falei sobre o comando [`git reset` nesta outra colinha](https://jtemporal.com/desfazendo-um-ou-mais-commits), em resumo ele é um comando que permite retornar à um estado anterior. O uso mais básico deste comando é usá-lo para desfazer um ou mais commits dos mais recentes. Com isso, vamos supor que você está na seguinte situação (curiosamente eu passei por isso na última sexta):

1. Você fez um commit no branch incorreto;
2. Ainda não enviou esse novo commit para o _remote;_
3. Você quer desfazer esse commit e refazer-lo no branch correto.

Para exemplificar eu tenho aqui um histórico de um projeto em que temos dois commits: o commit inicial no branch `main` (`d815be`) e o segundo commit (`5e8ae2`) adicionando o `arquivo-1.txt` que deveria ser em outro branch, veja:

![captura de tela mostrando o histórico do git no terminal com dois commits](/images/git-reset/git-reset-fig-8.webp)

Agora chegou a hora de desfazer o nosso commit incorreto.

## Desfazendo o último commit mantendo as alterações (git reset --soft)

Dado esse cenário, o primeiro passo é usar o comando `git reset`. Talvez você não saiba que existe uma _flag_ que ao desfazer um commit com o `git reset` permite que você mantenha as alterações do commit em staging e a mensagem de commit guardada numa variável especial que vou te mostrar jájá, essa _flag_ é a `--soft`.

Então podemos montar o nosso comando assim:

```console
git reset HEAD^ --soft
```

A flag `--soft` indica que você quer desfazer o commit de forma mais sutil, ou seja, mantendo as alterações. Ao executar esse comando, você não receberá nenhuma mensagem, mas as alterações estão em _staging_, o que você pode conferir com o comando `git status`  e o resultado é o seguinte:

![captura de tela mostrando o resultado do comando git reset HEAD^ --soft](/images/git-reset/git-reset-fig-9.webp)

Agora vamos refazer o commit no lugar certo e reaproveitar a mensagem.

Se você for além de um reset soft, digamos um `git reset --hard`, e perder trabalho no processo, não entre em pânico: o [git reflog](/recuperando-commits-perdidos-com-git-reflog/) geralmente consegue trazer de volta.

## Reaproveitando a mensagem de commit

Agora que você já desfez o commit e tem as alterações em staging, pode criar o novo branch e mudar pra ele, eu falei do [comando anterior nesta outra colinha](https://jtemporal.com/criando-um-novo-branch-e-mudando-pra-ele-com-um-comando/) caso você queira conferir:

```console
git switch -c add-arquivos-novos
```

Com isso, chega o momento tão esperado, provavelmente você já sabe que para fazer commits, precisa usar o comando `git commit` . Como nosso `reset` foi do tipo `soft`  a mensagem do commit ficou armazenada na variável `ORIG_HEAD`, então para reaproveitá-la você deve usar a flag `-C` seguida da variável, assim:

```console
git commit -C ORIG_HEAD
```

Essa flag `-C`  quer dizer literalmente "reutilizar mensagem", e esse é o resultado:

![captura de tela mostrando o resultado dos comandos git switch -c add-arquivos-novos seguido de git commit -C ORIG_HEAD](/images/git-reset/git-reset-fig-10.webp)

Por fim, se você quiser editar a mensagem, você deve usar a flag `-c` no lugar da flag atual, isso vai te dar a oportunidade de ajustar a mensagem anterior antes de terminar o commit.

## GitFichas

{% assign ficha_url = "https://gitfichas.com/projects/038?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642881912/gitfichas/pt/038/full_rpeam6.jpg" %}
{% assign ficha_title = "GitFicha #038" %}
{% assign ficha_description = "git reset HEAD^ --soft" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/projects/039?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878678/gitfichas/pt/039/full_y7qwus.jpg" %}
{% assign ficha_title = "GitFicha #039" %}
{% assign ficha_description = "git commit -C ORIG_HEAD" %}
{% include ficha.html %}

Espero que esses comandos te ajudem a reaproveitar o trabalho feito.