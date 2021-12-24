---
layout: post
title: Resolvendo conflitos
date: 2021-12-24 18:55:59 -0200
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png
comments: true
description: Uma receita infalível para você entender e resolver conflitos sem medo
tags:
- tutorial
- git
- português
- portugues

---
Resolver conflitos pode ser uma tarefa árdua e complicada quando se trata de projetos git. Nesse artigo você vai aprender um passo-a-passo infalível para resolver conflitos.

## O que é um conflito em git

Quando um projeto tem várias pessoas trabalhando ao mesmo tempo, é possível que duas pessoas pessoas precisem fazer alterações no mesmo pedaço de um arquivo. Quando mais de uma pessoa alteram o mesmo pedaço de um arquivo em branches diferentes é nesse momento que os conflitos aparecem.

O conflito simboliza que duas ou mais alterações aconteceram no mesmo pedaço de um arquivo e o git não sabe qual das alterações manter.

## Como um conflito se forma

Na imagem abaixo temos um diagrama que eu carinhosamente apelidei de “anatomia de um conflito” que mostra os passos até um que um conflito se forme. Vale salientar que normalmente, durante o ciclo de desenvolvimento de projetos, as alterações são maiores a por vezes em maior quantidade.

![anatomia de um conflito](https://res.cloudinary.com/jesstemporal/image/upload/v1640379728/anatomia-de-um-conflito_ixpolc.png)

**0 -** No nosso projeto temos um `README.md` que foi adicionado pelo commit inicial no repositório. Depois da criação desse arquivo, duas alterações precisam ser feitas para adicionar mais algumas informações ao mesmo arquivo e duas pessoas vão fazer essa alteração;

**1 -** Cada pessoa então criou um branch a partir da `main` para trabalhar nas suas alterações, esses novos branches foram criados mais ou menos ao mesmo tempo, ou seja, eles possuem um mesmo ponto de partida;

**2 -** Durante algum tempo cada pessoa trabalha na sua branch implementando a sua alteração, que nesse caso é adicionar a linha _"pessoa x esteve aqui!"_ no arquivo de `README.md` sendo x o identificador da pessoa;

**3 -** A pessoa 1 faz um pull request e tem esse pull request aprovado e seu merge na `main`;

**4 -** A pessoa 2 por sua vez, faz o seu pull request para `main`, só que esse pull request **não** pode ser feito merge pois apresenta conflitos.

## Formando um conflito na prática

Para demonstrar como isso se apresenta, eu criei um repositório com um cenário parecido ao descrito na sessão anterior [que você pode encontrar aqui](https://github.com/jtemporal/exemplo-conflito/branches). O arquivo inicial foi criado e as duas branches, uma para cada pessoa, também já foram criadas a partir da `main`, veja:

tk resolucao-de-conflito-fig-1

Em seguida fiz as alterações para cada pessoa, no branch `pessoa1` adicionei a descrição _"Pessoa 1 esteve aqui!"_ na última linha do `README.md` e de forma similar fiz o mesmo processo para o branch `pessoa2`. Então, abri os dois pull requests:

tk resolucao-de-conflito-fig-2

Revisei o merge no pull request `pessoa1`:

tk resolucao-de-conflito-fig-3

E então voltei para o PR da `pessoa2` e pude notar a indicação de que o pull request contém um conflito, veja:

tk resolucao-de-conflito-fig-4

E agora com o conflito quentinho em mãos é hora de resolvê-lo.

## Resolvendo um conflito no Git

Antes de começar é importante notar que este tipo de conflito é possível resolver também pela interface do GitHub, mas o foco aqui são os comandos, então vamos lá!

A primeira coisa importante é decidir em qual branch resolver o conflito, uma regra que geralmente funciona é resolver os conflitos no branch que apresenta as alterações, neste caso, o branch em questão é o `pessoa2`, com isso você deve atualizar o seu repositório local, e este branch em particular com os ajustes da main, para isso faça:

    git checkout pessoa2
    git pull origin main

Isso irá trazer o conflito para a sua máquina te dando um aviso informando que existem conflitos, que você deve resolver o conflito e fazer um commit:

tk resolucao-de-conflito-fig-5

Se você abrir o `README.md` num editor de código irá notar

tk resolucao-de-conflito-fig-6

comandos:

git checkout master

git pull origin develop

dps de resolver

git add

git commit

E aí git push

***

## Leitura extra

Seguem mais umas dicas de documentações em português para você aprender sobre resolução de conflitos no git

* [A documentação do GitHub sobre resolução de conflitos](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts);
* [O tutorial da Atlassian também sobre resolução de conflitos](https://www.atlassian.com/br/git/tutorials/using-branches/merge-conflicts).