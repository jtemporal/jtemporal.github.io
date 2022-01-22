---
layout: post
date: 2022-01-14T22:00:00.000-02:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png
comments: true
title: Desfazendo os últimos commits usando git reset
description: Veja como usar o comando git reset para desfazer os commits recentes
type: post
tags:
- git
- português
- colinha
related: true
posts_list:
- resolvendo-conflitos
- desfazendo-o-ultimo-commit-e-reaproveitando-a-mensagem
- 5-dicas-para-fazer-o-seu-pull-request-brilhar

---

Como tudo que fazemos em git pode ser feito de inúmeras formas diferentes, existem alguns jeitos de se livrar de commits, a forma mais comum de desfazer um ou mais commits recentes é usando o comando `git reset` que vou te mostrar nessa colinha.

## O que é o HEAD?

O `HEAD` é um ponteiro que indica qual branch e commit você está. Ele é usado com frequência e muitas vezes sem você mesmo saber que ele é acessado para trocar de branches por exemplo. 

## O que é o git reset?

O `git reset` por sua vez é um comando que restaura um estado anterior do `HEAD`, por isso que usamos o `HEAD` ao desfazer commits, para indicar qual o estado anterior que você quer voltar.

Por exemplo suponha que você tem um estado como o a seguir:

![figura mostrando o ramo main com dois commits A e B](https://res.cloudinary.com/jesstemporal/image/upload/v1642207791/main-with-2-commits_gfyez0.jpg)

Se você quer desfazer o último _commit_ `B` você quer voltar ao estado do _commit_ `A`.

## Desfazendo o último commit

Para desfazer o último _commit_ feito você deve usar o comando a seguir:

```console
git reset HEAD~1
```

Ou o comando a seguir, que é um atalho para o comando acima:

```console
git reset HEAD^
```

Ou até mesmo o atalho a seguir:

```console
git reset HEAD~
```

Esses três comandos querem dizer o seguinte:

> Volte ao estado anterior ao último commit.

Note que ao executar esses comandos, você não verá mensagem informando que o _commit_ foi desfeito, mas se você rodar o comando `git status` após fazer algum desses três comandos verá que arquivos adicionados e/ou alterações feitas voltam a serem marcados como alterações a serem commitadas (adicionas à um *commit*).

Veja, suponha que você tenha um histórico como o da imagem a seguir, onde o último *commit* (`48ccb8`) adiciona o arquivo chamado `arquivo-4.txt`: ![captura de tela mostrando o histórico de commits contendo 5 commits no terminal](https://res.cloudinary.com/jesstemporal/image/upload/v1642202652/git-reset/git-reset-fig-2_jwpjuz.png)

E se você executar algum dos comandos acima seguido de um `git status` você verá um resultado assim:

![captura de tela mostrando o resultado de desfazer um commit e fazer o git status em seguida](https://res.cloudinary.com/jesstemporal/image/upload/v1642202651/git-reset/git-reset-fig-3_pjexyo.png)

E pode ver que o `arquivo-4.txt` voltou ao seu estado anterior que era esperando ser feito o *commit*. E se investigar o histórico novamente verá que o commit `48ccb8` não aparece mais.

![captura de tela mostrando o detalhe do histórico de commits sem a presença do commit desfeito](https://res.cloudinary.com/jesstemporal/image/upload/v1642202651/git-reset/git-reset-fig-4_wv1m7u.png)

Agora você pode descartar as alterações ou continuar com elas e fazer um novo *commit*.

## Desfazendo os três últimos commits

Agora que você sabe desfazer um commit, você pode usar o primeiro comando que acabou de ver e adpatá-lo para desfazer mais commits, para isso basta adicionar a quantidade de commits que você quer desfazer depois do `~`. Vamos olhar novamente o nosso histórico que agora contém apenas quatro os commits (pois já desfiz um):

![captura de tela mostrando o histórico de commits contendo 4 commits no terminal](https://res.cloudinary.com/jesstemporal/image/upload/v1642202652/git-reset/git-reset-fig-5_qlmf7l.png)

Agora vamos supor que eu quero voltar ao estado do commit `d815be` que é o commit inicial que adicionou o arquivo `README.md`. Para isso é necessário desfazer três *commits*, então para isso o comando indicado é este:

```console
git reset HEAD~3
```

Ao executá-lo e rodar mais uma vez o `git status` temos os três arquivos que foram adicionados pelos commits desfeitos:

![captura de tela mostrado o resultado de desfazer 3 commits e executar o git status novamente](https://res.cloudinary.com/jesstemporal/image/upload/v1642202650/git-reset/git-reset-fig-6_jia6mq.png)

Note que antes de executar esses comandos eu removi o `arquivo-4.txt` já que não vou precisar mais dele. E investigando novamente o histórico vemos apenas o commit inicial:

![captura de tela mostrando o histórico de commits mostrando apenas o commit inicial já que os outros foram desfeitos](https://res.cloudinary.com/jesstemporal/image/upload/v1642202652/git-reset/git-reset-fig-7_ymvagr.png)

Antes de terminar a colinha eu quero deixar uma recomendação: é uma boa prática evitar desfazer commits que você já tenha feito _push_ para evitar de causar problemas de _detached_ `HEAD` para outras pessoas trabalhando junto com você.

## GitFichas

Abaixo você encontra [GitFichas pra te ajudar a lembrar desses comandos e atalhos](https://gitfichas.com):

{% assign ficha_url = "https://gitfichas.com/projects/013?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878672/gitfichas/pt/013/full_tznrem.jpg" %}
{% assign ficha_title = "GitFicha #013" %}
{% assign ficha_description = "O que é o HEAD" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/projects/036?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878677/gitfichas/pt/036/full_mstasz.jpg" %}
{% assign ficha_title = "GitFicha #036" %}
{% assign ficha_description = "git reset HEAD~3" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/projects/037?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878677/gitfichas/pt/037/full_uakvoe.jpg" %}
{% assign ficha_title = "GitFicha #036" %}
{% assign ficha_description = "git reset HEAD^" %}
{% include ficha.html %}

Espero que essa colinha te ajude a desfazer commits. 😉