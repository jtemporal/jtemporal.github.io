---
layout: post
date: 2021-10-05T22:15:06.000-03:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/miscellaneous_ld0l6r.png
comments: true
lang: en
title: 5 Tips to Make Your Pull Request Shine ✨
description: Top tops to make your open-source contribution a success
type: post
tags:
- english
- pull request
- git
- open source
- open-source
- hacktoberfest
related: true
posts_list:
- criando-pastas-vazias-no-github-com-o-gitkeep
- resolvendo-conflitos
- conheca-o-gitfichas
translated: "/5-dicas-para-fazer-o-seu-pull-request-brilhar"
translator: true
author_note_link: professoradeboraazevedo@gmail.com
author_note: This blog post was adapted for English by Débora Azevedo.

---
October is hacktoberfest month and this should be the month where we put the most effort into contributing to open-source and helping more people contribute. So in this article you will learn five 5 golden tips to make your pull request ✨shine ✨. Let’s go!

## Follow the project's contribution guide

A maioria dos projetos _open-source_ tem um conjunto de regras ou padrões que você deve seguir para contribuir, coisas como manter cobertura de testes, criar _branches_ seguindo um certo padrão de nomeação, qual a língua oficial do projeto e de seus _commits_ e até mesmo regras sobre intervalo de tempo com inatividade no qual passado esse períodos o _pull requests_ sem atividade será fechado.

Following the project's contribution guide will ensure a good path to having a successful pull request right from the start. Such guide is usually found in the `CONTRIBUTING.md` file on GitHub projects but sometimes the rules can also be described in the `README.md` file.

Now you might be asking yourself _“What do I do if the project doesn't have a contribution guide?”_ and this situation is quite common. So if there is no contribution guide what I usually do is look at some commits from the commit history to see how they are made and other pull requests that were made before mine to try to follow the same format.

## Use branches in your fork

When forking a project to make a contribution, it is very common to make the mistake of making changes to the main branch and submitting the pull request.

Avoid doing that.

As much as you only plan on making just one pull request, you may be struck by inspiration and you may want to make a second pull request and then you've already compromised your main branch with changes from the first pull request, and any contribution from that point forward will contain the changes from the first pull request.

It is ideal to keep the main branch clean of changes this way you can keep it up to date with the main branch of the source repository. So make a good habit of separating your contributions into new branches.

## Link the pull request to an issue

There are now, 9 keywords to link your pull request to an issue (if one exists). That's right, nine! Using these words when making the pull request will make the life of those who maintain the project easier, since these words close the corresponding issue when the pull request is merged, and will also help people who are interested in contributing as they can see the pull request in progress, preventing two people from doing duplicate work.

This is the list of words:

1. close
2. closes
3. closed
4. fix
5. fixes
6. fixed
7. resolver
8. resolve
9. resolved

Any of these words can be used in two places:

1. In the pull request's **title**;
2. In the pull request's **description**.

You should use them as follows to resolve an issue:

```txt
fixes #42
```

Or as follows to resolve more than one issue:

```txt
fixes #42, fixes #44
```

If your pull request does not _fully_ resolve an issue, you should still _mention_ the issue number (by using the hashtag symbol) that is related to your pull request as this will make your pull request appear in the issue as a mention, but in this case you should not use the words above.

As a person who maintains some projects, it makes me very happy to see these words being used in pull requests. You can read more about all of this [in GitHub's documentation on the subject](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).

## Give context to reviewers

Muitas vezes as pessoas que mantêm projetos, assim como as pessoas que contribuem com projetos, fazem isso no seu tempo livre, ou seja, esse não é o trabalho delas. Então é nosso dever facilitar a contribuição, tanto ao escrever issues bem descritas se você estiver relatando um _bug_ por exemplo, como descrever bem o _pull request_ que você está fazendo. Vamos focar no _pull request_ que é o foco deste artigo.

Hoje em dia é muito comum encontrar projetos que tenham um [template/modelo de _pull request_](https://docs.github.com/pt/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository), esse template busca padronizar as perguntas necessárias para a revisão daquele _pull request_ e a geração de _changelogs_. Então foque no que você precisa preencher e lembre-se que é possível usar o _markdown_ para estilizar o conteúdo da descrição e facilitar a leitura das pessoas que revisam as contribuições.

Embora hoje em dia vários repositórios tenham templates de _pull request_, pode ser que você está contribuindo para um projeto que não tem um desses, então aqui vai um lista de tópicos para você incluir na descrição do seu _pull request:_

1. **Qual o objetivo desse pull request?**

   Aqui coloque aquela informação de qual _issue_ (se ela existir) se relaciona com esse _pull request_.
2. **Quais alterações foram feitas para atingir esse objetivo?**

   Alterações de código, documentação, mudanças de fluxo de dados e afins devem vir aqui. Use os seus _commits_ para relembrar o que você mudou.
3. **Como testar se essas mudanças realmente funcionam?**

   Aqui pode usar prints se for algo visual, por exemplo, ou exemplos de uso do pedaço de código novo.
4. **Possíveis melhorias e outras anotações**

   Uma lista de coisas que poderiam ser melhoradas, mas que não são o foco do _pull request_, ou que você não sabe como resolver e precisa de ajuda.

Esses quatro pontos, vão garantir que a pessoa revisando vai ter todas informações que ela precisa para revisar o _pull request_ no momento que a revisão for acontecer.

## Aguarde as sugestões

Depois de fazer a sua contribuição a pessoa revisora pode ter sugestões de melhoria ou ajustes necessários para garantir a padronização da base de código. Essas sugestões podem pedir que você mude parte de código, implemente testes ou ajuste a documentação.

De um modo geral elas vêm para ajudar o seu _pull request_ melhorar e para que a sua contribuição seja aceita. O processo de revisão é sempre um momento de aprendizado então é importante ter a mente aberta para receber sugestões e caso necessário acatá-las.

## Recapitulando

Contribuir com _open-source_ é ótimo pois pode ajudar todas as pessoas que usam aquele projeto. E durante o hacktoberfest, por exemplo, é um ótimo momento para exercitar essa habilidade, então não deixe de seguir as dicas que você viu aqui para ter ainda mais sucesso no seus _pull requests._

Ah e último recadinho, se você estiver procurando por [projetos brasileiros para contribuir aqui está a lista de 2021](https://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-2021/).