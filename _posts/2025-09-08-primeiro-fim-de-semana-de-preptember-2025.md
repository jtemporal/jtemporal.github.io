---
bookbanner: true
comments: true
date: 2025-09-08T05:00:00+00:00
description: Neste fim de semana o GitFichas ganhou uma reforma e alguns bugs foram corrigidos 🚀
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640370040/covers/variados_aanizj.png
lang: pt
layout: post
posts_list:
- resolvendo-conflitos
- conheca-o-gitfichas
- gitfichas-agora-e-open-source
related: true
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
title: "Primeiro fim de semana de preptember 2025"
author_note: false
type: post
translations:
  en: "preptember-week-1-getting-ready-for-hacktoberfest-2025"
---

O Hacktoberfest está chegando, e durante este fim de semana decidi começar minhas tarefas de _preptember_. Então essa é a história da semana 1 do preptember.

## O que é Preptember?

Para quem não conhece o termo, "Preptember" é o mês antes do Hacktoberfest onde quem mantém projetos preparam seus repositórios para as contribuições que outubro traz. É sobre configurar seus projetos para serem mais acolhedores e mais fáceis de contribuir.

## GitFichas e Preptember

Desde que eu [abri o código do GitFichas](https://jtemporal.com/gitfichas-agora-e-open-source/) comecei a usar [Mermaid](https://mermaid.js.org/) para criar novas fichas de estudo, ele tinha um problema com a renderização adequada do conteúdo: os gráficos Mermaid às vezes falhavam ao renderizar corretamente no navegador no primeiro load da página, causando problemas de layout e tornando as fichas difíceis de ler. Então neste fim de semana o desafio foi corrigir esse problema.

Não importava o que eu fizesse no CSS da geração das fichas, por algum motivo o problema não deixava de existir. Então pareceu natural começar a gerar SVGs ao invés de renderizar gráficos Mermaid no carregamento da página. Essa abordagem gera os diagramas como arquivos SVG estáticos, eliminando completamente os problemas de renderização no lado do cliente.

Para gerar SVGs precisávamos de algumas atualizações na dinâmica de como geramos cada ficha de estudo usando o [Mermaid CLI](https://github.com/mermaid-js/mermaid-cli).

## Novas funcionalidades

Como minha expectativa é usar esse hacktoberfest para terminar de migrar todas as fichas para a configuração Mermaid, algumas atualizações foram necessárias no repositório.

- **🚀 Configuração com Um Comando:** Script de configuração para instalar todas as dependências necessárias, incluindo pacotes Node.js para o Mermaid CLI e Puppeteer para renderização de navegador headless.
- **🤖 Instruções do GitHub Copilot:** Estamos afinal de contas na era da IA e espero que o Copilot nos ajude a fechar a maioria das issues abertas.
- **🎨 Geração de SVG Mermaid:** Script para gerar SVG usando o Mermaid CLI para que possamos fazer tudo isso automaticamente.
- **📚 Documentação Melhorada:** Atualizações nas diretrizes de contribuição e documentação para todas as novas partes móveis.

## O que vem por aí

Com essa base sólida, estou animada para ver o que a comunidade vai construir durante o Hacktoberfest. As [mais de 90 issues abertas](https://github.com/jtemporal/gitfichas/issues) ainda estão disponíveis e pessoalmente vou trabalhar em algumas das melhorias durante este mês para que o GitFichas esteja ainda melhor quando o Hacktoberfest chegar.

Algumas das issues que vou atacar nos próximos finais de semana são:

- [Issue #173](https://github.com/jtemporal/gitfichas/issues/173): Gerar uma imagem de preview para cada ficha para facilitar o compartilhamento
- [Issue #63](https://github.com/jtemporal/gitfichas/issues/63): Criar diferentes temas para que cada ficha pareça um pouco diferente um da outra
- [Issue #204](https://github.com/jtemporal/gitfichas/issues/204): Atualizar a seleção de idioma

Espero conseguir trabalhar nessas issues durante os fins de semana daqui para frente. Elas serão desafiadoras mas estou confiante de que vão melhorar o GitFichas _muito_. E para ser honesta, talvez eu comece com o seletor de idioma primeiro já que fiz parte desse refactor no meu site. 😂

## Vem comigo

O GitFichas sempre foi sobre aprendizado em comunidade, e agora o processo de contribuição combina ainda mais com esse espírito. Se você estava esperando o momento certo para contribuir com um projeto open source, ele chegou.

[Confira o GitFichas no GitHub](https://github.com/jtemporal/gitfichas) e vamos criar a melhor coleção de fichas de estudo sobre Git! 🎉