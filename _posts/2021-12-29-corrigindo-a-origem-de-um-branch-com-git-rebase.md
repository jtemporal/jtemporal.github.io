---
layout: post
date: 2021-12-29T12:34:20.000-02:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png
comments: true
title: Corrigindo a origem de um branch com git rebase
description: Veja como usar git rebase para corrigir a origem de um branch
tags:
- git
- português
- colinha
related: true
posts_list:
- resolvendo-conflitos
- conheca-o-gitfichas
- 5-dicas-para-fazer-o-seu-pull-request-brilhar

---
O comando `git rebase` pode se usado para fazer vários ajustes de histórico, desde reescrever a árvore de commits, reescrevendo assim o histórico, até mesmo empurrar commits para um ponto mais a frente como se o branch fosse criado no futuro.

Nesse blog post vou te mostrar como usar `git rebase` pra corrigir a origem de um determinado branch.

## Criando uma branch a partir de um branch incorreto

Suponha que você tem duas tarefas para fazer nas próximas semanas e que você quer trabalhar em cada tarefa em uma branch diferente.

Então para trabalhar na tarefa 1 você cria uma branch com esse nome a partir da main.

![imagem mostrando o resultado de criar o ramo tarefa-1](https://res.cloudinary.com/jesstemporal/image/upload/v1640805545/git-rebase-ajustar-origem/git-rebase-origem-fig-1_lidxjj.png)

Digamos, que durante a sua implementação você cansou de mexer com aquele problema e decidiu que seria uma boa ideia mudar um pouco de contexto e iniciar a tarefa 2.

Para isso você precisa criar um novo branch também a partir da `main`, no entanto, sem se dar conta você acabou criando o seu branch a partir do branch `tarefa-1`:

![imagem mostrando o resultado de criar o ramo tarefa-2 a partir do ramo tarefa-1](https://res.cloudinary.com/jesstemporal/image/upload/v1640805545/git-rebase-ajustar-origem/git-rebase-origem-fig-2_p7p989.png)

E aí, começou a trabalhar e só se deu conta do erro mais tarde. Depois de fazer um commit no `tarefa-2` o seu histórico parece algo assim:

![desenho mostrando o ramo tarefa-2 com dependente do ramo tarefa-1](https://res.cloudinary.com/jesstemporal/image/upload/v1640805546/git-rebase-ajustar-origem/git-rebase-origem-fig-3_pmml6j.jpg)

Se você analisar o grafo do seu histórico pode ver que ele mostra que o commit mais recente (`99247c`) no branch `tarefa-2` depende do commit feito no branch `tarefa-1` (`5873c2`):

![imagem mostrando o resultado do comando git log --graph em tarefa-2 mostrando o histórico dependente do ramo tarefa-1](https://res.cloudinary.com/jesstemporal/image/upload/v1640805546/git-rebase-ajustar-origem/git-rebase-origem-fig-4_cokmgg.png)

Então precisamos corrigir isso.

## Corrigindo a origem do branch

Com esse erro nas mãos e como as implementações de cada tarefa é independente uma da outra você quer fazer essa correção.

Para isso você deve usar o `git rebase` seguido da *flag* `--onto` e o nome **dos três** branches, o comando por completo fica assim:

```console
git rebase --onto main tarefa-1 tarefa-2
```

O resultado deverá ser semelhante a imagem abaixo:

![resultado do comando git rebase --onto main tarefa-1 tarefa-2](https://res.cloudinary.com/jesstemporal/image/upload/v1640805545/git-rebase-ajustar-origem/git-rebase-origem-fig-5_h8fq1z.png)

Agora, tendo executado o comando acima, o seu histórico passa a ser o que deveria ser desde o princípio:

![desenho mostrando o ramo tarefa-2 com dependente do ramo main](https://res.cloudinary.com/jesstemporal/image/upload/v1640805545/git-rebase-ajustar-origem/git-rebase-origem-fig-6_dgwv21.jpg)

E se você conferir novamente o grafo do histórico, verá que apenas vemos os commits referentes a tarefa 2 no branch correspondente:

![imagem com o resultado do comando git log --graph mostrando o ramo tarefa-2 com histórico corrigido](https://res.cloudinary.com/jesstemporal/image/upload/v1640805545/git-rebase-ajustar-origem/git-rebase-origem-fig-7_feft7i.png)

Três coisas são importantes de notar:

1. Primeiro, que é sempre necessário dar os nomes dos três branches envolvidos para evitar perder commits;
1. Segundo, que o agora o branch `tarefa-2` tem sua origem no branch `main`;
1. E terceiro, que o hash do commit no branch `tarefa-2` não é mais `99247c` e sim `952dc3` já que o commit mudou.

Com isso agora você sabe alterar ou corrigir a origem de um branch, caso queira mais detalhes sobre o comando `git rebase`, recomendo a leitura da [documentação do comando em português](https://git-scm.com/docs/git-rebase/pt_BR).

Abaixo você pode ver uma ficha que pode te ajudar a lembrar do comando `git rebase --onto`:

{% assign ficha_url = "https://gitfichas.com/projects/028" %}
{% assign ficha_img = "https://gitfichas.com/assets/img/projects/028/full.jpg" %}
{% assign ficha_title = "GitFicha #028" %}
{% assign ficha_description = "git rebase --onto" %}
{% include ficha.html %}