---
bookbanner: true
comments: true
date: 2022-01-23 11:25:00-02:00
last_modified_at: 2026-06-20
description: Entenda como usar git stash e git stash pop na prática
image: /images/covers/colinha.webp
lang: pt
layout: post
posts_list:
- resolvendo-conflitos
- desfazendo-um-ou-mais-commits
- 5-dicas-para-fazer-o-seu-pull-request-brilhar
related: true
series: "Dicas de Git"
series_order: 8
tags:
- git
- português
- colinha
title: 'Usando git stash: pop, apply e drop'
translations:
- lang: en
  url: /using-git-stash-and-git-stash-pop
type: post
author_note: false
---

Mudar de branches durante o meio de trabalho é algo que acontece com certa frequência, por exemplo, para resolver um bug fazendo um _"hotfix"_ em um outro branch enquanto você está desenvolvendo uma tarefa.

Existem algumas formas de interromper o trabalho, incluindo fazer commits. A minha forma favorita é usando os comandos `git stash` e `git stash pop`. Muitas pessoas confundem o funcionamento desses dois comandos, assim como os relacionados `git stash apply` e `git stash drop`, então vamos esclarecer todos eles. 😉

## O que é o stash

Stash pode ser visto com um empacotamento das mudanças atuais, que ainda não foram feitas o commit, que fica salvo localmente no seu computador numa pilha. Cada pacote de mudanças é chamado de stash.

Quando um stash é criado, o seu diretório volta a um _estado limpo_, ou seja, sem mudanças nos arquivos que são acompanhados pelo Git. Isso também quer dizer que arquivos novos, que ainda não foram adicionados em um commit, não são adicionados em stash.

Cada stash recebe um "nome", um índice, no formato `stash@{<n>}`, onde `"n"` se refere a um número correspondente a localização do stash na pilha de stashes. Esse número sempre se altera se mais stashes forem adicionados a pilha, o stash mais recente sempre é o `stash@{0}`.

Pilhas, são um conceito comum em programação, e isso é importante para entender o comportamento do stash, pois, sem indicar o índice do stash, os comandos vão seguir a ordem LIFO ("last in, first out"), onde o último stash, ou seja, o stash mais recente, a ser adicionado na pilha é removido primeiro.

## Guardando trabalho em progresso com stash

Então vamos dizer que você está trabalhando no branch `tarefa` que corresponde a implementação de uma _feature_ qualquer, mas agora você precisa voltar para o branch `main` e resolver um problema muito importante, por questões de simplicidade não vamos focar na resolução de problemas. Esse é o estado corrente do seu trabalho:

![imagem do terminal mostrando que há modificações em um arquivo](/images/git-stash/git-status-trabalho-em-adamento.webp)

Agora você precisa salvar o trabalho que você já fez antes de retornar ao branch `main`. Para isso use o comando a seguir:

```console
git stash
```

Esse comando é um atalho para o comando completo, o `git stash push`. Agora que o stash foi feito, você vai ver um resultado semelhante ao seguinte:

![imagem mostrando o resultado do git stash](/images/git-stash/resultado-comando-git-stash.webp)

Você também pode ver o stash que acabou de fazer usando o comando `git stash list` para ver a lista de stashes existentes:

![imagem mostrando o resultado do git stash list](/images/git-stash/resultado-comando-git-stash-list.webp)

Note na imagem acima que a listagem de stashes sempre apresenta o índice do stash e uma mensagem. Agora que o trabalho está salvo, você pode trocar de branch tranquilamente e resolver o que precisar. Vale salientar que stashes não são amarrados a um branch, então você ainda vai poder ver o seu stash na lista mesmo depois de trocar de branches.

## Voltando a trabalhar com o pop

Depois de terminar os ajustes no branch `main`, você finalmente pode voltar a trabalhar naquela _feature_ do branch `tarefa`. Para tirar o stash da pilha e aplicar as mudanças que você guardou, use o comando a seguir:

```console
git stash pop
```

O `pop` vai remover o stash mais recente da pilha e aplicar as mudanças que ele contém, e você deve ver um resultado parecido com isso:

![imagem mostrando o resultado do comando git stash pop](/images/git-stash/resutlado-comando-git-stash-pop.webp)

Agora você tem tudo que precisa pra continuar seu trabalho.

## Mantendo o stash com apply

E se você quiser suas mudanças de volta, mas prefere manter o stash por aí, talvez para aplicar em mais de um branch? É para isso que serve o `git stash apply`. Ele funciona como o pop, só que não remove o stash da pilha:

```console
git stash apply
```

Na versão curta: `pop` aplica o stash e remove ele, `apply` aplica e mantém. Use o apply quando você ainda não tem certeza de que terminou com aquelas mudanças.

## Limpando com drop

Como o `apply` deixa o stash na pilha, em algum momento você vai querer limpar isso. Use `git stash drop` para remover o stash mais recente sem aplicá-lo:

```console
git stash drop
```

Você também pode remover um stash específico passando o índice dele, por exemplo `git stash drop stash@{2}` para remover o que está no índice dois. E se quiser apagar todos os stashes de uma vez, `git stash clear` faz isso.

## Como adicionar um arquivo novo à um stash

Como falei anteriormente, arquivos novos não entram num stash, isso acontece por que eles não possuem rastreamento anterior. Por exemplo, digamos que enquanto estivesse trabalhando no branch `tarefa`, você, além de modificar o arquivo `arquivo-tarefa.txt`, você tenha criado o arquivo `arquivo-2.txt`, de deixando com o resultado a seguir no seu diretório de trabalho:

![resultado do git status mostrando um arquivo modificado e um arquivo novo](/images/git-stash/git-status-trabalho-em-adamento-arquivo-novo.webp)

Se você tentar fazer o stash dessas alterações, vai ver que o arquivo novo continua lá firme e forte:

![resultado dos comandos git stash e git status mostrando que o arquivo novo não entrou no stash](/images/git-stash/git-stash-falha-adiocionar-arquivo-novo.webp)

E aí você deve estar se perguntando, já que o stash não leva em consideração arquivos novos, como a gente burla esse comportamento? E a boa notícia é que existe um truque para adicionar arquivos novos à um stash: você precisa adicionar eles em staging!

Então adicione o arquivo novo com `git add` e você terá uma situação assim:

![imagem mostrando o ambiente de staging com o arquivo novo](/images/git-stash/resultado-adicionar-o-arquivo-novo-em-staging.webp)

E se você fizer novamente o `git stash` verá que agora seu stash guarda também o arquivo novo e como resultado você tem o seu diretório de trabalho limpo:

![imagem mostrando o resultado de fazer o stash com o arquivo novo em staging](/images/git-stash/resultado-stash-salvando-tambem-o-arquivo-novo.webp)

E já que você sabe aplicar um stash e remover ele da lista com o `git stash pop`, você vai ver que o arquivo novo também volta do stash em staging:

![imagem mostrando o resultado de git stash pop depois do ultimo stash](/images/git-stash/resultado-git-stash-pop-com-arquivo-novo-em-staging.webp)

E agora você já sabe usar `git stash`. 🎉

Se um stash parecer ter sumido, ou você perder trabalho por causa de um `reset` ou `rebase`, o [git reflog](/recuperando-commits-perdidos-com-git-reflog/) pode te ajudar a recuperar.

## GitFichas

{% assign ficha_url = "https://gitfichas.com/projects/041?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642964758/gitfichas/pt/041/full_m1zqzv.jpg" %}
{% assign ficha_title = "GitFicha #041" %}
{% assign ficha_description = "git stash push" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/projects/043?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642964759/gitfichas/pt/043/full_uuuiaz.jpg" %}
{% assign ficha_title = "GitFicha #043" %}
{% assign ficha_description = "git stash list" %}
{% include ficha.html %}

{% assign ficha_url = "https://gitfichas.com/projects/044?utm_source=blog" %}
{% assign ficha_img = "https://res.cloudinary.com/jesstemporal/image/upload/v1642964759/gitfichas/pt/044/full_sbhjsb.jpg" %}
{% assign ficha_title = "GitFicha #044" %}
{% assign ficha_description = "git stash pop" %}
{% include ficha.html %}

Espero que esses comandos te ajudem a interromper o trabalho feito e voltar a trabalhar nas mudanças.