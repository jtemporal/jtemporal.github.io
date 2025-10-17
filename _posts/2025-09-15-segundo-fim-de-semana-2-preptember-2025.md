---
bookbanner: true
comments: true
date: 2025-09-15T05:00:00+00:00
description: Uma grande vitória para localização 🚀
image: https://res.cloudinary.com/jesstemporal/image/upload/v1760705452/covers/preptember.jpg
lang: pt
layout: post
posts_list:
- resolvendo-conflitos
- 5-dicas-para-fazer-o-seu-pull-request-brilhar
- gitfichas-agora-e-open-source
related: true
series: "Preptember 2025"
series_order: 2
tags:
- pull request
- pull requests
- contribuições
- open-source
- hacktoberfest
- GitHub
- Git
- código aberto
- português
- preptember
title: "Segundo fim de semana de Preptember 2025: GitFichas trilingüe"
author_note: false
type: post
translations:
  - url: "/preptember-week-2-gitfichas-multi-language-support"
    lang: "en"
---

Pois é, já estamos no meio de setembro e aqui está meu relatório da segunda semana do _preptember_! 

**TLDR:** PR grande para fechar a issue de suporte a idiomas no GitFichas e mais alguns PRs menores.

Finalmente atualizei o suporte a idiomas com a ajuda do GitHub Copilot em modo Agent e agora o GitFichas é capaz de suportar múltiplos idiomas ao invés de apenas português e inglês, então uma grande vitória para localização.

_Si hablas español..._ estamos procurando contribuições em traduções para espanhol. Se você fala outros idiomas eles também são bem-vindos!

## Recapitulando

Na semana passada comecei o preptember corrigindo um problema grande no GitFichas onde os gráficos Mermaid não estavam renderizando corretamente no navegador. A solução foi mudar de renderização no lado do cliente para pré-gerar arquivos SVG usando a CLI do Mermaid.

Também adicionei várias funcionalidades novas incluindo um script de configuração com um comando só, instruções do GitHub Copilot para contribuidores, geração automática de SVG e documentação melhorada. O objetivo era preparar o GitFichas para o influxo de contribuições do Hacktoberfest tornando-o mais acolhedor e fácil de contribuir.

## Issues fechadas e pull requests feitos

Esta é a lista do trabalho feito nesse final de semana:

- [Issue #204](https://github.com/jtemporal/gitfichas/issues/204): Atualizar a seleção de idioma;
- [PR #205](https://github.com/jtemporal/gitfichas/pull/205): Este PR implementou o suporte a múltiplos idiomas e fechou a issue acima 🎉
- [PR #207](https://github.com/jtemporal/gitfichas/pull/207): que atualizou o conteúdo da página de contato em português e inglês;
- [PR #206](https://github.com/jtemporal/gitfichas/pull/206): Corrigiu um pequeno erro de lógica introduzido em um PR de fim de semana anterior para a renderização mermaid no navegador.
- [PR #208](https://github.com/jtemporal/gitfichas/pull/208): Ajustes de renderização de fichas

Senta que lá vem história...

### Usando Copilot em modo Agent e vibe coding

Pela primeira vez eu fiz o Copilot não apenas fazer a maior parte do trabalho mas também revisando seu próprio trabalho em um PR.

Não sou muito fã de _vibe coding_, não consigo simplesmente apertar "Keep" para todas as mudanças que a IA faz e não pensar duas vezes antes de fazer commit. Minha cabeça não aceita isso.

Mas o mais próximo que chego de _vibe coding_ é pedir para a IA fazer algo e depois revisar, dar feedback específico sobre o que não está funcionando e pedir para corrigir o que está quebrado. Esse tipo de processo funciona bem mas definitivamente não é tão rápido quanto aceitar cegamente qualquer output que eu receba.

Mesmo assim, os PRs que coloquei no ar esse final de semana me tomaram cerca de 6 horas de trabalho sem foco. Se eu tivesse sido mais focada, provavelmente teria levado 4 horas, mas é fim de semana né?!

Posso dizer com certeza absoluta que sem nenhuma ajuda de IA, entre escrever código novo, refatorar código pré-existente, testar, fazer preview de deployments, ajustes e casos de borda esquecidos, isso provavelmente me tomaria cerca de dois dias para finalizar.

Não só isso, provavelmente significaria que o deploy pra produção teria que esperar até o próximo fim de semana para ir ao ar já que eu gostaria de ter mais tempo para revisar meu próprio trabalho antes de fazer o merge do pull request.

### Usando Copilot como revisor de pull requests

E falando de revisão, esta foi a primeira vez que tive o Copilot fazendo a revisão para mim e foi _interessante_ para dizer o mínimo.

Ele chamou minha atenção para a documentação que esqueci de atualizar, assim como para o fato de que meu PR não seguia as diretrizes do projeto. 😂

Deixa eu explicar. Até agora o GitFichas tinha suporte apenas para duas linguagens faladas: português e inglês. E a forma como a localização estava implementada não permitia que outras traduções fossem facilmente adicionadas. Então parte da documentação do projeto deixava claro que o conteúdo do site estava apenas nessas duas linguagens iniciais.

Então definitivamente _sorri_ quando o [Copilot apontou que meu PR](https://github.com/jtemporal/gitfichas/pull/205#discussion_r2347005159) estava indo contra as próprias diretrizes do projeto de suportar apenas português e inglês.

![Screenshot of GitHub Copilot review comment identifying that the PR goes against project guidelines by adding support for languages other than Portuguese and English](https://res.cloudinary.com/jesstemporal/image/upload/v1757816734/copilot-review-identifies-pr-going-against-the-projects-guidelines_x0vmbw.png){: style="box-shadow: 4px 4px 4px rgba(51, 51, 51, 0.57); border-radius: 8px; border: 1px solid #b6b6b6ff;"}

Esse comentário serviu como um lembrete bem colocado para não apenas atualizar a documentação (o que fiz [motivada por outro comentário similar](https://github.com/jtemporal/gitfichas/pull/205#discussion_r2347005149)) mas também as instruções do Copilot já que elas são usadas nas revisões além do chat no VS Code.

## Próximos passos

A lista de issues para os próximos fins de semana é a seguinte:

- [Issue #173 no GitFichas](https://github.com/jtemporal/gitfichas/issues/173): Gerar uma imagem de preview para cada um dos cards para facilitar o compartilhamento
- [Issue #63 no GitFichas](https://github.com/jtemporal/gitfichas/issues/63): Criar temas diferentes para que cada card pareça um pouco diferente dos outros

Também planejo voltar aos pull requests que deixei de lado durante o ano.

Em particular o [#166 no repositório do PyLadiesCon](https://github.com/pyladies/pyladiescon-portal). [Mariatta](https://mariatta.ca/) se você estiver lendo isso: _sinto muito a demora para voltar a ele_, no próximo fim de semana vou resolver os conflitos para podermos fazer o merge.

Nota à parte: Você viu [sua lista de pull requests ultimamente](https://github.com/pulls)? A minha parece que nunca chega a zero. 😂

## Vamos juntos

Se você está pensando em contribuir para open source durante o Hacktoberfest, comece a procurar possíveis projetos para os quais quer contribuir. Faça uma lista de projetos, fork e clone os repos, confira os guias de contribuição e comece a se preparar porque outubro está quase aqui.

Como sempre, [confira o GitFichas no GitHub](https://github.com/jtemporal/gitfichas) e se precisar de ajuda com suas contribuições [me mande uma mensagem em um dos muitos lugares sociais por aí](http://jtemporal.com/sociais/)! 🎉