---
author_note: You can read this article in English
author_note_link: https://jtemporal.com/updating-a-branch-with-git-rebase
bookbanner: true
comments: true
date: 2021-12-30 12:34:20-02:00
description: Veja como usar git rebase para trazer commits mais recentes para o branch
  atual
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png
lang: pt
layout: post
posts_list:
- resolvendo-conflitos
- corrigindo-a-origem-de-um-branch-com-git-rebase
- 5-dicas-para-fazer-o-seu-pull-request-brilhar
related: true
tags:
- git
- português
- colinha
title: Atualizando um branch com git rebase
translations:
- lang: en
  url: /updating-a-branch-with-git-rebase
type: post
---

O comando `git rebase` pode ser usado para fazer vários ajustes de histórico, desde reescrever a árvore de commits, reescrevendo assim o histórico, até mesmo empurrar commits para um ponto mais a frente como se o branch fosse criado no futuro.

Nessa colinha vou te mostrar como usar `git rebase` pra atualizar um branch.

## Criando um histórico de exemplo

Suponha que você tem um projeto e estava trabalhando numa tarefa no branch `tarefa-2`, enquanto isso outra pessoa estava trabalhando no branch `tarefa-1` que foi feito o merge para o `main` e assim tornando o branch `main` mais atualizado como mostrado no desenho abaixo:

![desenho mostrando o estado corrente do histórico](https://res.cloudinary.com/jesstemporal/image/upload/v1640897681/git-rebase-ajustar-origem/git-rebase-origem-fig-11_vges0f.jpg)

Similarmente, o grafo do histórico deverá se mostrar como a imagem abaixo:

![imagem mostrando o branch main com o histórico atualizado](https://res.cloudinary.com/jesstemporal/image/upload/v1640876611/git-rebase-ajustar-origem/git-rebase-origem-fig-8_ysghfo.png)

Sabendo que o `main` está mais atualizado que o seu branch `tarefa-2` e seguindo a boa prática de trabalhar sempre com o projeto mais atualizado, você decide que é hora de atualizar o seu branch de trabalho, que tem o histórico corrente assim:

![imagem com o resultado do comando git log --graph mostrando o ramo tarefa-2 com histórico antes da atualização](https://res.cloudinary.com/jesstemporal/image/upload/v1640805545/git-rebase-ajustar-origem/git-rebase-origem-fig-7_feft7i.png)

## Atualizando o branch atual

Existem algumas formas de atualizar o branch atual, uma delas é usando o `git merge` e fazendo o _merge_ do branch mais atualizado, nesse caso o `main`, no branch que você quer atualizar nesse caso o `tarefa-2`. A outra forma é usando o _rebase_ que vou te mostrar agora.

Tem duas formas de usar o rebase para fazer essa atualização, vamos ver a primeira que é **estando no branch que você quer atualizar**, então você precisa ir pro branch a ser atualizado, nesse caso o `tarefa-2` e usar o _rebase_ indicando o branch de origem das mudanças:

```console
git checkout tarefa-2
git rebase main
```
Ao executar esses comandos você verá no seu terminal a mensagem avisando que a atualização foi feita com sucesso *"Successfully rebased and updated refs/heads/tarefa-2."* (ou *"Rebase e atualização das refs/heads/tarefa-2 bem sucedida."* em tradução livre) como você pode ver na imagem a seguir:

![imagem com o resultado dos comandos anteriores](https://res.cloudinary.com/jesstemporal/image/upload/v1640877571/git-rebase-ajustar-origem/git-rebase-origem-fig-9_nvgb57.png)

A segunda forma é **independente do branch corrente**, esse formato é um atalho para os dois comandos anteriores, basta usar o rebase, passar o branch de origem das mudanças seguido do branch de destino:

```console
git rebase main tarefa-2
```

Esse comando também deverá mostrar a mesma mensagem da imagem anterior. Independentemente da forma escolhida para usar o *rebase*, o seu histórico deverá ser algo semelhante ao desenho abaixo:

![desenho do histórico atualizado após o git rebase](https://res.cloudinary.com/jesstemporal/image/upload/v1640897681/git-rebase-ajustar-origem/git-rebase-origem-fig-12_vsuwxf.jpg)

E o grafo de histórico deverá se mostrar assim:

![grafo de histórico após atualizar o ramo tarefa-2 com o rebase](https://res.cloudinary.com/jesstemporal/image/upload/v1640877571/git-rebase-ajustar-origem/git-rebase-origem-fig-10_xpubsn.png)

## Conclusão

Para finalizar temos uma coisa importante de notar agora que nosso branch está atualizado: o rebase só acontecerá sem interrupções, como mostrado nessa colinha, caso não existam conflitos, caso contrário o rebase será suspendido e os [conflitos devem ser resolvidos](https://jtemporal.com/resolvendo-conflitos/) antes de continuar.

Agora você sabe atualizar um branch usando o rebase, caso queira mais detalhes sobre o comando `git rebase`, recomendo a leitura da [documentação do mesmo em português](https://git-scm.com/docs/git-rebase/pt_BR). 

Abaixo você pode ver uma ficha que pode te ajudar a lembrar do comando `git rebase` para atualizar um branch:

{% assign ficha_url = "https://gitfichas.com/projects/027?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642878675/gitfichas/pt/027/full_eqj0ec.jpg" %}
{% assign ficha_title = "GitFicha #027" %}
{% assign ficha_description = "git rebase" %}
{% include ficha.html %}