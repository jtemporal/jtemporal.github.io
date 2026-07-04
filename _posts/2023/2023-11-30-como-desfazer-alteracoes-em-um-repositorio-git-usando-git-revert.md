---
layout: post
date: 2023-11-30T19:00:00.000-05:00
image: /images/covers/colinha.webp
comments: true
title: Como desfazer alterações em um repositório Git usando git revert
description: Aprenda como usar git revert para desfazer commits já publicados
type: post
tags:
- git
- português
- colinha
bookbanner: true
series: "Dicas de Git"
series_order: 11
related: true
posts_list:
- usando-git-stash-e-git-stash-pop
- resolvendo-conflitos
- desfazendo-um-ou-mais-commits
lang: pt
translations:
- lang: en
  url: /how-to-undo-changes-in-a-git-repository-using-git-revert
author_note: false

---

Existem várias maneiras de desfazer commits. Nesta colinha, você vai aprender como usar o `git revert` para desfazer commits, especialmente quando eles já foram publicados.

## O que é git revert?

`git revert` é um comando que desfaz uma alteração de um commit executando duas ações:

1. Usará as alterações em um commit (ou em uma coleção de commits) para desfazer essas mesmas alterações;
2. Criará um novo commit com as alterações revertidas.

## Por que usar git revert?

Alterações nos repositórios git são feitas com tanta frequência que às vezes você pode precisar ajustá-las ou até mesmo removê-las completamente da sua base de código.

Dependendo do seu caso, você pode [desfazer commits usando `git reset`](https://jtemporal.com/desfazendo-um-ou-mais-commits/), removendo assim as alterações. Mas `git reset` só deve ser usado se você ainda não publicou os commits com uma determinada alteração. Para os casos em que um commit já é público, uma maneira melhor de desfazer essas alterações é usar `git revert`.

Este comando foi criado especialmente para remover as alterações de um commit ou coleção de commits, criando um novo commit, literalmente desfazendo as alterações.

## Como git revert funciona?

Toda alteração no git é uma coleção de diferenças entre o estado anterior de um dado arquivo e as alterações que você fez, o que também é conhecido como um *patch*. Idealmente, se você seguir as melhores práticas, as alterações que você fez serão feitas de forma atômica e cada alteração atômica será parte de um único commit.

Depois de escolher os commits com as alterações correspondentes que você deseja reverter, você pode fornecer o hash dos commits para a função revert e deixar que a revert faça sua mágica, como pressionar Ctrl+Z ou Cmd+Z no seu computador.

## Usando git revert em um repositório

O último final de semana foi o fim de semana da Black Friday e da Cyber Monday, então eu queria ter um código de desconto para meu livro como parte da página do livro. Para fazer isso, fiz um monte de commits, todos neste [pull request da Black Friday](https://github.com/jtemporal/jtemporal.github.io/pull/249):

![Quatro commits no pull request da Black Friday no GitHub](https://res.cloudinary.com/jesstemporal/image/upload/v1701353823/images/fmfmyqppkh66ftlukpox.png)

Na imagem acima você pode ver os 4 commits que fiz, bem como as quatro versões curtas dos hashes de commit. Para simplificar, posso copiar esses hashes do GitHub. Para desfazer cada um desses commits, posso usar uma sucessão de reversões do git passando cada commit assim:

```bash
git revert 59b322a
git revert 93c1c77
git revert 7f37472
git revert c37fb73
```

Toda vez que você executar um desses comandos, seu editor abrirá com uma mensagem pré-preenchida sobre a reversão do commit, como esta:

![Mensagem de commit pré-preenchida ao reverter um commit no git](https://res.cloudinary.com/jesstemporal/image/upload/v1701356771/images/hv6greepoam9tzpqccst.png)

Você pode alterar esta mensagem se quiser, mas eu costumo mantê-la. Depois de salvar a mensagem de commit, você poderá verificar se o commit feito tem as alterações corretas.

![Commit de reversão criado com as alterações corretas](https://res.cloudinary.com/jesstemporal/image/upload/v1701356918/images/o9hdlhen0ugn17vyzwjv.png)

E pronto, agora você pode enviar suas alterações e fazer um novo pull request desfazendo seu trabalho anterior.

## Recapitulando

Nesta colinha você aprendeu que

- `git revert` é um comando que desfaz alterações em um commit criando um novo commit com as alterações revertidas.
- `git revert` é útil quando você já publicou os commits que deseja desfazer.
- Cada comando revert cria um novo commit que desfaz as alterações feitas no commit especificado.
- Você pode reverter vários commits executando `git revert` para cada commit em sucessão.

Agora vá lá e reverta alterações no seu repo.