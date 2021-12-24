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

Na imagem abaixo temos um diagrama que eu carinhosamente apelidei de “anatomia de um conflito”. Vou usar essa imagem e o repositório de exemplo disponível aqui tk link do repo para te explicar como um conflito surge.

Tk imagem anatomia de um conflito

**0 -** No nosso projeto temos um README.md que foi adicionado pelo commit inicial no repo. Depois da criação desse arquivo, duas alterações precisam ser feitas para adicionar mais algumas informações ao mesmo arquivo e duas pessoas vão fazer essa alteração;

**1 -** Cada pessoa então criou um branch a partir da main para trabalhar nas suas alterações, esses novos branches foram criados mais ou menos ao mesmo tempo, ou seja, eles possuem um mesmo ponto de partida;

**2 -** Durante algum tempo cada pessoa trabalha na sua branch implementando a sua alteração, que nesse caso é adicionar a linha “pessoa x esteve aqui!” no arquivo de README.md

Então cada pessoa vai criar um branch a partir do branch main,

Para demonstrar como fazer isso eu pro

comandos:

git checkout master

git pull origin develop

dps de resolver

git add

git commit

E aí git push