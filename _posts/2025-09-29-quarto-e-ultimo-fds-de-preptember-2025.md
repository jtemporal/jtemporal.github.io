---
bookbanner: true
comments: true
date: 2025-09-29T06:00:00+00:00
description: Planos mudam e menos trabalho porque descansar também é importante
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640370040/covers/variados_aanizj.png
lang: pt
layout: post
posts_list:
- resolvendo-conflitos
- 5-dicas-para-fazer-o-seu-pull-request-brilhar
- gitfichas-agora-e-open-source
related: true
series: "Preptember 2025"
series_order: 4
tags:
- hacktoberfest
- ai
- git
- opensource
- pull request
- pull requests
- contribuições
- GitHub
- open source
- português
- preptember
title: "Quarto e último fim de semana de Preptember 2025: Planos mudam e tudo bem"
author_note: false
type: post
translations:
  - url: "/preptember-week-4-plans-change-brazilian-projects-list"
    lang: "en"
---

O último fim de semana do preptember chegou! Achei que o fim de semana anterior foi diferente dos dois primeiros, mas este foi diferente de uma forma totalmente nova. Definitivamente superestimei meus níveis de energia voltando do [Oktane](https://www.okta.com/oktane/) e subestimei os efeitos do jet lag.

**Resumo:** Novas issues abertas no GitFichas e dois PRs "fáceis" preparando a curadoria de projetos brasileiros para contribuir na Hacktoberfest 2025. Um dos PRs quebrou produção, o outro consertou o problema.

## Recapitulando

No fim de semana passado implementei 6 esquemas de cores para o GitFichas, trazendo de volta a variedade visual que tornava as fichas originais desenhadas à mão especiais. Também melhorei as instruções do GitHub Copilot para ajudar contribuidores a terem melhores experiências assistidas por IA durante a Hacktoberfest. Apesar de uma agenda mais corrida devido à preparação para o Oktane, consegui fechar múltiplas issues enquanto migrava fichas em português e inglês para o novo formato Mermaid.

## Trabalho da semana passada

Entre trabalhar no estande da Auth0 for AI Agents e apresentar um workshop chamado "Auth-ing your GenAI" no Oktane, viajar cobrou seu preço. E eu nem comecei a falar sobre jet lag.

Viajo para a costa oeste dos Estados Unidos o suficiente para saber que sempre vou acordar muito cedo e ir dormir muito tarde porque é uma conferência e sempre há outra conversa que não quero perder. Resumindo: acabei dormindo menos do que deveria essa semana.

Dito isso, só fazia sentido que os planos para este fim de semana precisassem de algumas mudanças, principalmente porque precisava me recuperar da viagem antes de conseguir fazer algo útil. O único problema é que olhando para trás, percebi que provavelmente não descansei tanto quanto deveria antes de mexer em qualquer repositório. 😅

Para o GitFichas, foquei apenas em criar novas issues. Durante a semana, antes do café da manhã um dia, abri mais de 50 issues para traduções para o espanhol já que agora temos suporte ao idioma. Todas as [issues de tradução têm a tag translation](https://github.com/jtemporal/gitfichas/issues?q=is%3Aissue%20state%3Aopen%20label%3Atranslation).

Com essas issues abertas, considero o GitFichas pronto para a Hacktoberfest. 🎉

Falando em estar pronto para a Hacktoberfest, todos os PRs que fiz esse final de semana foram no [repositório deste blog](https://github.com/jtemporal/jtemporal.github.io):

- **[PR #309](https://github.com/jtemporal/jtemporal.github.io/pull/309):** Moveu os projetos do ano passado para sua própria pasta e criou a pasta 2025;
- **[PR #310](https://github.com/jtemporal/jtemporal.github.io/pull/310):** Contém a lista rascunho já que os repositórios, na hora de escrever isso, ainda precisam de revisão para que a lista possa ser publicada. Vou fazer isso logo depois de publicar este post;
- **[PR #311](https://github.com/jtemporal/jtemporal.github.io/pull/311):** Re-adiciona as versões passadas da lista como suas próprias collections, que por sinal chamei de "groupings" (agrupamentos) em todos os commits que fiz porque não conseguia lembrar da palavra "collections" (coleções)... _Falei que deveria ter descansado mais, num falei?._ 👀

### Como a lista começou

Um pouco de contexto se você que acabou de chegar aqui: desde 2017 com a ajuda da comunidade dev brasileira eu faço a curadoria de uma lista de projetos brasileiros de código aberto.

A lista começou no Medium e ficou lá pelas duas primeiras edições [em 2017](https://medium.com/nossa-coletividad/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-4dc9b9b576c0) e [em 2018](https://medium.com/@jessicatemporal/projetos-brasileiros-para-contribuir-nesse-hacktoberfest-vers%C3%A3o-2018-4925959b9411).

Como eu queria que a comunidade pudesse contribuir com a lista, decidi mover a lista para o GitHub [em 2019](https://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-o-retorno/) no meu próprio blog para facilitar para as pessoas contribuírem.

### Mantendo a história

Uma coisa que me incomodava na forma como eu estava estruturando os dados para a lista do Hacktoberfest entre 2019 e 2024, era que todo ano eu sobrescrevia a lista.

Pra falar a verdade não era nada lá muito grave, o post da lista recebe visualizações principalmente no ano correspondente mesmo, mas ainda assim me incomodava, embora não o suficiente para consertar esse comportamento, pelo menos não até este ano.

Por algum motivo, senti que 2025 merecia uma representação histórica adequada da lista, e agora se você navegar pelas listas dos anos anteriores, vai conseguir ver como a lista mudou. Essas são todas as listas passadas:

- [2017](https://medium.com/nossa-coletividad/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-4dc9b9b576c0)
- [2018](https://medium.com/@jessicatemporal/projetos-brasileiros-para-contribuir-nesse-hacktoberfest-vers%C3%A3o-2018-4925959b9411)
- [2019](https://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-o-retorno)
- [2020](http://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-2020)
- [2021](https://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-2021)
- [2022](https://jtemporal.com/projetos-brasileiros-para-contribuir-hacktoberfest-2022)
- [2023](https://jtemporal.com/projetos-br-hacktoberfest-2023)
- [2024](https://jtemporal.com/projetos-br-hacktoberfest-2024)

### Quebrando produção só um pouquinho

No meu cansaço cometi um pequeno erro.

Veja bem, a lista funcionava baseada em uma única coleção: `_hacktoberfest_projects`. Esta coleção então renderizava a lista no post com um código liquid que começava assim:

{% raw %}
```html
{% assign grouped = site.hacktoberfest_projects | group_by: "principal_language" %}
```
{% endraw %}

Eu copiei a lista original para a pasta `_hacktoberfest_projects_2025` e para evitar confusão renomiei a pasta anterior para `_hacktoberfest_projects_2024`.

O pequeno problema disso: quando a pasta original de projetos não existia mais, o Jekyll não deu nenhum erro porém as versões anteriores da lista começaram a mostrar conteúdo vazio. Deveria haver uma lista de projetos antes da assinatura na imagem abaixo por exemplo.

<center>
<img alt="Screenshot mostrando a página com conteúdo da lista de projetos faltando, mostrando apenas a assinatura na parte inferior" src="https://res.cloudinary.com/jesstemporal/image/upload/v1759181171/broken-build-with-missing-content.png" style="box-shadow: 4px 4px 4px rgba(51,51,51,0.57); border-radius: 8px; max-width: 80%; border: 1px solid #b6b6b6ff;" />
</center>

Então o **[PR #309](https://github.com/jtemporal/jtemporal.github.io/pull/309)** silenciosamente quebrou a produção já que eu, é claro, fiz merge do PR esquecendo dos anos anteriores.

Então comecei a trabalhar neste post que você está lendo agora e queria dar o contexto das listas passadas, então percebi que as páginas não estavam mostrando o conteúdo de forma correta e foi assim que o **[PR #311](https://github.com/jtemporal/jtemporal.github.io/pull/311)** surgiu.

### Consertando produção com um pouco de trabalho

Agora eu precisava escolher um caminho e consertar o problema que a minha eu cansada criou:

1. Pegar o conteúdo de `_hacktoberfest_projects` de antes do PR #309, e aplicar esse conteúdo para todas as listas antes de 2024 o que faria que elas ficassem todas iguais; ou
2. Pegar o conteúdo de cada ano e aplicar isso em um novo PR para que todas as listas tenham dados precisos para mostrar.

Se você leu até aqui, provavelmente já sabe o que eu fiz. 👀

Sim, escolhi a solução número 2.

Na minha cabeça, a forma fácil de fazer isso era:

1. Escolher um commit depois de cada Hacktoberfest para pegar a pasta de projetos;
2. Copiar a pasta e adicionar isso ao meu branch de trabalho.

Fácil né? O desafio se tornou encontrar um commit para cada período no qual eu pudesse "pular" para copiar a pasta. Então entrei na [lista de commits](https://github.com/jtemporal/jtemporal.github.io/commits/main) no GitHub e usei o botão de data para filtrar os commits:

<center>
<img alt="Página de commits do GitHub mostrando interface de filtragem baseada em data para buscar commits dentro de períodos específicos" src="https://res.cloudinary.com/jesstemporal/image/upload/v1759181171/commits-search-based-on-date-on-github.png" style="max-width: 80%;" />
</center>

De lá escolhi um commit e pulei para ele:

```sh
git switch 73fb9b686218251be6f5b1770f0151150a664862 --detach
```

Então copiei a pasta e criei um stash com ela:

```sh
cp -r _hacktoberfest_projects _hacktoberfest_projects_2019
git add _hacktoberfest_projects_2019
git stash
```

Voltei para o branch de trabalho e apliquei as mudanças do stash:

```sh
git switch hacktoberfest-projects-history
git stash pop
```

Depois disso fiz as outras mudanças como atualizar os arquivos de configuração e posts anteriores e então finalmente fiz os commits necessários.

Como não consegui pensar em uma forma melhor de fazer isso, repeti esse mesmo processo mais quatro vezes. Caso você tenha curiosidade, esses são os outros commits para os quais mudei:

```sh
git switch d4550d0c7f7ee492c334706749475d2235caec16 --detach
git switch ad60ba9a1b950d521419e86cf5c7547b9b922827 --detach
git switch 874b8f53cbe52e5c1d3f3832921c5d38b542dda1 --detach
git switch d2fc775c9e02569b78a43391ab49330384ed26ab --detach
```

Provavelmente há uma forma mais fácil ou até mais inteligente de fazer isso, mas funcionou bem para a minha eu cansada de ontem e se tá funcionando você não mexe. Você pode ver todas as mudanças e commits no **[PR #311](https://github.com/jtemporal/jtemporal.github.io/pull/311)**.

## O que vem por aí

Outubro começa esta semana, então no próximo fim de semana vou focar nos meus primeiros PRs para o Hacktoberfest, estes são os que estão na lista de prioridade:

- [Issue #173 no GitFichas](https://github.com/jtemporal/gitfichas/issues/173): Gerar uma imagem de preview para cada um dos cards para facilitar o compartilhamento;
- [PR #166 no repositório do PyLadiesCon](https://github.com/pyladies/pyladiescon-portal/pull/166);

E eu sei que o PR #166 não conta para este Hacktoberfest, mas vai desbloquear outras contribuições, por isso quero dedicar um tempo a ele.

## Junte-se a mim

Espero que este post também te inspire a aprender quando você precisa descansar e ajustar seus planos, mesmo que eu não ache que fiz isso particularmente bem desta vez. 😅

Às vezes fazer uma pausa é tão importante quanto seguir em frente.

Se você está procurando um projeto low-code para contribuir, o [GitFichas](https://github.com/jtemporal/gitfichas) tem mais de 130 issues abertas agora. E se você precisar de ajuda com suas contribuições, [me mande uma mensagem em algum lugar](http://jtemporal.com/sociais/).

> [Não esqueça de se registrar para a Hacktoberfest.](https://hacktoberfest.com/)

Bom código! 🎉