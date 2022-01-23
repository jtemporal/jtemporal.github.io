---
layout: post
date: 2022-01-23T11:25:00.000-02:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png
comments: true
title: Usando git stash e git stash pop
description: Entenda como usar git stash e git stash pop na prática
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

---
Mudar de branches durante o meio de trabalho é algo que acontece com certa frequência, por exemplo, para resolver um bug fazendo um _"hotfix"_ em um outro branch enquanto você está desenvolvendo uma tarefa.

Existem algumas formas de interromper o trabalho, incluindo fazer commits. A minha forma favorita é usando os comandos `git stash` e `git stash pop`. Muitas pessoas confundem o funcionamento desses dois comandos, então vamos resolver isso. 😉

## O que é o stash

Stash pode ser visto com um empacotamento das mudanças atuais, que ainda não foram feitas o commit, que fica salva localmente no seu computador numa pilha. Cada pacote de mudanças é chamado de stash.

Quando um stash é criado, o seu diretório volta a um _estado limpo_, ou seja, sem mudanças nos arquivos que são acompanhados pelo Git. Isso também quer dizer que arquivos novos, que ainda não foram adicionados em um commit, não são adicionados em stash.

Cada stash recebe um "nome", um índice, no formato `stash@{<n>}`, onde `"n"` se refere a um número correspondente a localização do stash na pilha de stashes. Esse número sempre se altera se mais stashes forem adicionados a pilha, o stash mais recente sempre é o `stash@{0}`.

Pilhas, são um conceito comum em programação, e isso é importante para entender o comportamento do stash, pois, sem indicar o índice do stash, os comandos vão seguir a ordem LIFO ("last in, first out"), onde o último stash, ou seja, o stash mais recente, a ser adicionado na pilha é removido primeiro.

## Guardando trabalho em progresso com stash

Então vamos dizer que você está trabalhando no branch `tarefa` que corresponde a implementação de uma _feature_ qualquer, mas agora você precisa voltar para o branch `main` e resolver um problema muito importante, por questões de simplicidade não vamos focar na resolução de problemas. Esse é o estador corrente do seu trabalho:

![imagem do terminal mostrando que há modificações em um arquivo]()

Agora você precisa salvar o trabalho que você já fez antes de retornar ao branch `main`. Para isso use o comando a seguir:

```console
git stash
```

Esse comando é um atalho para o comando completo, o `git stash push`. Agora que o stash foi feito, você vai ver um resultado semelhante ao seguinte:

![imagem mostrando o resultado do git stash]()

Você também pode ver o stash que acabou de fazer usando o comando `git stash list` para ver a lista de stashes existentes:

![imagem mostrando o resultado do git stash list]()

Note na imagem acima que a listagem de stashes sempre apresenta o índice do stash e uma mensagem. Agora que o trabalho está salvo, você pode trocar de branch tranquilamente e resolver o que precisar. Vale salientar que stashes não são amarrados a um branch, então você ainda vai poder ver o seu stash na lista mesmo depois de trocar de branches.

## Voltando a trabalhar com o pop

Depois de terminar os ajustes no branch `main`, você finalmente pode voltar a trabalhar naquela _feature_ do branch `tarefa`. Para tirar o stash da pilha e aplicar as mudanças que você guardou, use o comando a seguir:

```console
git stash pop
```

O `pop` vai remover o stash mais recente da pilha e aplicar as mudanças que ele contém, e você deve ver um resultado parecido com isso:

![imagem mostrando o resultado do comando git stash pop]()

Agora você tem tudo que precisa pra continuar seu trabalho.

## Como adicionar um arquivo novo à um stash

 Para forçar 

Para

## GitFichas

{% assign ficha_url = "https://gitfichas.com/projects/041" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642964758/gitfichas/pt/041/full_m1zqzv.jpg" %}
{% assign ficha_title = "GitFicha #041" %}
{% assign ficha_description = "git stash push" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/projects/044" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642964759/gitfichas/pt/044/full_sbhjsb.jpg" %}
{% assign ficha_title = "GitFicha #044" %}
{% assign ficha_description = "git stash pop" %}
{% include ficha.html %}

Espero que esses comandos te ajudem a interromper o trabalho feito e voltar a trabalhar nas mudanças.
