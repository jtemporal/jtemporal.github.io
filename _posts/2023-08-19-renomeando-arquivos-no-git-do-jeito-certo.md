---
layout: post
date: 2023-08-19T11:25:00.000+00:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png
comments: true
bookbanner: true
title: Renomeando arquivos no Git do jeito certo
description: Chega de confusão na hora de ajustar o nome de um arquivo em projetos git
type: post
tags:
- git
- português
- colinha
related: true
posts_list:
- resolvendo-conflitos
- desfazendo-um-ou-mais-commits
- 5-dicas-para-fazer-o-seu-pull-request-brilhar
lang: pt

---

Você já tentou renomear um arquivo nos seus projetos e teve dificuldade adicionar o ajuste em um commit? Isso não acontece só com você. Nessa colinha você vai aprender a renomear os seus arquivos em projetos git da forma correta para evitar dores de cabeça.

## O problema de renomear um arquivo sem usar o git

Vamos dizer que você decidiu renomear um arquivo e, por questão de simplicidade você decide fazer isso na interface de pasta mesmo (ou usando o comando `mv` no terminal). Depois disso você quer fazer o commit da alteração de nomes e ao rodar o `git status` você se depara com essa situação:

![imagem mostrando o arquivo deletado e um arquivo novo criado](https://res.cloudinary.com/jesstemporal/image/upload/v1692470010/images/git-mv/001-renamed-file-deleted-git-status_shmq3h.png)

Se você renomeia o arquivo sem usar o Git, o Git “se perde” e acha que o arquivo original foi apagado e um arquivo novo foi criado como mostrado na imagem acima. Por causa desse comportamento, você acaba tendo que obrigatoriamente fazer dois passos para commitar a alteração no nome:

1. Adicionar o arquivo deletado;
2. Adicionar o arquivo novo.

Para piorar, não é possível adicionar um arquivo “deletado” sem usar explicitamente o nome desse arquivo, o que torna esse processo todo ainda mais tedioso, pra não mencionar a esquisitice da frase “adicionar um arquivo deletado”.

Vamos dizer que você perseverou, adicionou o arquivo deletado e adicionou o arquivo novo e mais uma vez você roda um `git status`, e ai o git entende que foi uma alteração no nome do arquivo, veja:

![imagem mostrando o resultado de git status após adicionar o arquivo e o git entendendo que o arquivo foi nomeado](https://res.cloudinary.com/jesstemporal/image/upload/v1692470010/images/git-mv/002-renamed-file-git-status_lley9v.png)

Essa é uma solução relativamente tranquila se você não precisa fazer isso com frequência, mas existe uma solução melhor.

## Renomeando um arquivo no git do jeito certo

Para começar é necessário resistir ao impulso de renomear o arquivo usando a interface e passar a usar o comando `git mv`. Usando o mesmo exemplo do caso acima, onde renomeamos o arquivo `books.md` para `book.md`, o comando fica assim:

```bash
git mv books.md book.md
```

O resultado de usar apenas um comando é o seguinte:

1. Renomear o arquivo;
2. Adicionar a mudança de nome em staging.

Depois disso você pode seguir o fluxo normal de commits e fazer o commit dessa alteração.

## Recapitulando

Não use a interface para renomear os arquivos nos seus projetos Git, use o comando `git mv` para fazer isso e já adicionar essa mudança em staging para um commit.


## GitFichas

{% assign ficha_url = "https://gitfichas.com/projects/052?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1692471498/gitfichas/pt/052/052-full_cu0alv.jpg" %}
{% assign ficha_title = "GitFicha #052" %}
{% assign ficha_description = "git mv origem destino" %}
{% include ficha.html %}
