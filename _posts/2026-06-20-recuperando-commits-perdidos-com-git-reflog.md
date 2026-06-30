---
layout: post
type: post
bookbanner: true
comments: true
date: 2026-06-20T12:00:00+00:00
last_modified_at: 2026-06-20
description: Aprenda como o git reflog registra seus movimentos no Git, como ler as entradas e como restaurar um estado anterior.
image: /images/covers/colinha.webp
lang: pt
related: true
posts_list:
- desfazendo-um-ou-mais-commits
- usando-git-stash-e-git-stash-pop
- desfazendo-o-ultimo-commit-e-reaproveitando-a-mensagem
series: "Dicas de Git"
series_order: 12
tags:
- git
- português
- colinha
title: "Recuperando commits perdidos com git reflog"
translations:
- lang: en
  url: /recovering-lost-commits-with-git-reflog
---

Tem um tipo específico de pânico que bate quando parece que um commit simplesmente sumiu. Talvez você tenha rodado um hard reset, ou um rebase deu errado, e o trabalho que estava aí um minuto atrás não aparece em lugar nenhum do seu histórico. Antes de assumir que ele foi embora para sempre, tem um comando que pode te ajudar a trazer isso de volta: `git reflog`.

## O que é o reflog?

O Git mantém um registro privado de todos os lugares por onde o HEAD passou. Tudo o que você faz no Git que move [o ponteiro HEAD](/desfazendo-um-ou-mais-commits/) fica registrado, seja porque você fez um commit, deu um checkout, rodou um reset, ou porque um rebase ou merge mexeu nele.

Esse registro de movimento fica no log de referência (do inglês *reference log* ou reflog, para encurtar) e ele é local na sua máquina. Então, mesmo quando um commit não aparece mais no `git log`, a referência para ele geralmente ainda está no reflog.

## Encontrando o commit que você perdeu

Para ver o reference log, você pode rodar o comando abaixo:

```bash
git reflog
```

Você vai ver uma lista de movimentos recentes, com a entrada mais recente no topo, como na imagem abaixo.

![saída do git reflog mostrando movimentos recentes do HEAD](/images/git-reflog/Screenshot_2026-06-20_at_10.26.55_AM.webp)

Cada linha tem um hash curto, uma referência como `HEAD@{2}`, e uma descrição do que aconteceu, coisas como "commit", "reset: moving to" ou "checkout".

Mesmo que seja difícil se acostumar a ler esse novo formato de log, a descrição e a ordem geralmente deixam claro onde você estava e podem ser a indicação que você precisa para saber para onde quer voltar.

## Voltando para lá

Quando você encontrar a entrada certa, copie o *hash*. Depois, mova o seu branch de volta para aquele ponto:

```bash
git reset --hard <hash>
```

Substitua `<hash>` pelo hash que você encontrou no reflog.

Por exemplo, pensando na imagem acima, se você quiser voltar para o estado antes do reset, você precisaria rodar o seguinte:

```bash
git reset --hard a68cffa
```

Depois disso, o seu estado de trabalho volta a bater com o momento antes do erro, como se nada tivesse acontecido.

Uma observação rápida: `git reset --hard` descarta as suas mudanças não commitadas. Então tenha certeza de que você realmente quer cair nesse estado anterior antes de rodar o comando. Se você não tiver certeza, você pode usar `git switch` para ir até o hash primeiro e dar uma olhada sem mover o seu branch.

## Recapitulando

A maioria das pessoas aprende sobre o reflog do jeito difícil, depois de perder trabalho por causa de um reset ou de um rebase. Então saber que ele existe pode ser uma mão na roda numa emergência.

Recapitulando os passos para restaurar um estado anterior perdido com o reflog:

1. Encontre o estado para o qual você quer voltar e copie o hash.
2. Confira se esse é mesmo o estado que você quer restaurar com `git switch <hash>`. Se não for, repita os passos 1 e 2 até encontrar o estado certo.
3. Rode `git reset --hard <hash>` para voltar para ele.


O reflog combina bem com os outros comandos que movem o HEAD: [desfazendo o último commit e reaproveitando a mensagem](https://jtemporal.com/desfazendo-o-ultimo-commit-e-reaproveitando-a-mensagem/), [atualizando um branch com git rebase](https://jtemporal.com/atualizando-um-branch-com-git-rebase/), e [usando git stash](https://jtemporal.com/usando-git-stash-e-git-stash-pop/). Se algum deles te fizer perder trabalho, o reflog é a sua rede de segurança.
