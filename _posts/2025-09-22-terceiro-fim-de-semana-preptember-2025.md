---
bookbanner: true
comments: true
date: 2025-09-22T05:00:00+00:00
description: Fim de semana corrido mas agora temos 6 esquemas de cores diferentes no GitFichas 🎨
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/miscellaneous_ld0l6r.png
lang: pt
layout: post
posts_list:
- segundo-fim-de-semana-2-preptember-2025
- primeiro-fim-de-semana-de-preptember-2025
- resolvendo-conflitos
related: true
tags:
- open source
- hacktoberfest
- pull request
- pull requests
- contribuições
- open-source
- GitHub
- Git
- português
- preptember
title: "Terceiro fim de semana de preptember 2025: Esquemas de cores e melhorias para Copilot no GitFichas"
author_note: false
type: post
translations:
  - url: "/preptember-week-3-gitfichas-color-schemes"
    lang: "en"
---

Fim de semana três de preptember chegou, mas este foi um pouco diferente dos finais de semana anteriores...

**TLDR:** Um PR implementando os 6 esquemas de cores que apareciam nas fichas originais, além de algumas melhorias nas instruções do Copilot para melhores contribuições assistidas por IA.

Este fim de semana foi cheio de preparação para o [Oktane](https://www.okta.com/oktane/) onde vou apresentar um workshop, então meu tempo foi mais limitado que o normal. Mas ainda consegui fechar uma issue que estava na lista. 🎉🎉

## Recapitulando

No fim de semana passado implementei suporte a multiplos idiomas para o GitFichas com a ajuda do GitHub Copilot. O sistema agora suporta qualquer número de idiomas ao invés de apenas português e inglês, o que foi uma grande vitória para localização. Também tive o Copilot revisando seu próprio trabalho pela primeira vez, o que foi uma experiência no mínimo curiosa - ele até apontou documentação que precisava ser atualizada 👀

## O que foi feito neste fim de semana

Apesar da agenda mais corrida que o normal, consegui trabalhar em uma funcionalidade importante.

### Implementando os 6 esquemas de cores

**[PR #209](https://github.com/jtemporal/gitfichas/pull/209)** fechou múltiplas issues de uma vez:

- [Issue #63](https://github.com/jtemporal/gitfichas/issues/63): A issue principal para implementar diferentes esquemas de cores como eu costumava ter quando desenhava as fichas à mão;
- [Issues #115](https://github.com/jtemporal/gitfichas/issues/115), [#114](https://github.com/jtemporal/gitfichas/issues/114), [#113](https://github.com/jtemporal/gitfichas/issues/113), [#112](https://github.com/jtemporal/gitfichas/issues/112), [#110](https://github.com/jtemporal/gitfichas/issues/110): Migração de fichas em português para formato Mermaid;
- [Issues #162](https://github.com/jtemporal/gitfichas/issues/162), [#161](https://github.com/jtemporal/gitfichas/issues/161), [#160](https://github.com/jtemporal/gitfichas/issues/160), [#158](https://github.com/jtemporal/gitfichas/issues/158): Migração adicional de fichas em inglês.

A implementação dos esquemas de cores traz de volta a variedade visual que tornava as fichas originais desenhadas à mão especiais. Agora cada ficha cicla terá um dos 6 temas de cores diferentes:

1. Azul claro
2. Verde escuro
3. Roxo claro
4. Rosa
5. Roxo e rosa
6. Verde claro

As cores são automaticamente atribuídas baseadas no número da ficha usando a operação módulo, então cada ficha tem uma aparência consistente mas ao mesmo tempo variada quando olhdas como um todo.

### Preparando para a Hacktoberfest assistida por IA

Enquanto migrava as fichas, também aproveitei a oportunidade para melhorar as [instruções do GitHub Copilot](https://github.com/jtemporal/gitfichas/blob/main/.github/copilot-instructions.md). Com ferramentas de IA se tornando parte de todos fluxos de desenvolvimento, quero ter certeza de que as pessoas contribuidoras tenham a melhor experiência possível ao usar essas ferramentas para também tornar seus PRs mais rápidos de serem feitos e melhores.

As melhorias focam em:
- Melhor orientação para geração de diagramas Mermaid
- Instruções mais claras para a migração de fichas desenhadas à mão para Mermaid
- Exemplos mais específicos de como lidar com casos extremos

Eu acredito que haverá um uso massivo de ferramentas de IA durante este Hacktoberfest, então acertar essas instruções agora vai ajudar todo mundo a ter sucesso, incluindo eu mesma já que vou estar do lado recebendo as contribuições e reviso cada PR pessoalmente.

## O que vem por aí

Com apenas mais um fim de semana até outubro chegar, estou chegando perto dos preparativos finais do preptember. No próximo fim de semana vou focar em:

- [Issue #173 no GitFichas](https://github.com/jtemporal/gitfichas/issues/173): Gerar uma imagem de preview para cada uma das fichas para torná-las fáceis de compartilhar;
- [PR #166 no repositório PyLadiesCon](https://github.com/pyladies/pyladiescon-portal);
- Abrir novas issues para traduções em espanhol e talvez até francês;
- E finalmente, revisar e criar a lista de projetos open source brasileiros que faço todo ano.

GitFichas está quase pronto para a chegada do Hacktoberfest!

## Preparação para o workshop do Oktane

Falando em estar ocupada, a maior parte deste fim de semana foi investida me preparando para minha viagem ao Oktane, não só fazendo uma revisão final e ensaios do workshop que vou apresentar mas também garantindo que as roupas estejam prontas para fazer as malas e sim [ainda sigo minhas próprias dicas de viagem](https://jtemporal.com/sete-dicas-para-viajar-com-tranquilidade/).

É sempre empolgante compartilhar conhecimento com a comunidade, mesmo quando isso significa menos tempo para projetos pessoais. Como developer advocate eu amo encontrar pessoas desenvolvedoras onde elas estão e tanto palestras quanto trabalho open source, ao meu ver, são partes importantes de retribuir para a comunidade tech.

## Bora lá

Como sempre, se você está planejando contribuir durante o Hacktoberfest, agora é a hora de começar a explorar projetos e se familiarizar com seus processos de contribuição.

E vale o lembrete que a inscrição para o Hacktoberfest 2025 já está aberta!

<center>
<img alt="perfil do hacktoberfest da jtemporal criado" src="https://res.cloudinary.com/jesstemporal/image/upload/v1758493970/jtemporal-hacktoberfest-profile-created.png"  style="max-width: 60%" />
</center>

E eu já me inscrevi. 👆

> [Então vai se inscrever também!](https://hacktoberfest.com/)

[GitFichas](https://github.com/jtemporal/gitfichas) está esperando suas contribuições! E se você precisar de ajuda para começar sua jornada nesse Hacktoberfest, [entre em contato através de qualquer um das redes sociais](http://jtemporal.com/sociais/)! 🎉