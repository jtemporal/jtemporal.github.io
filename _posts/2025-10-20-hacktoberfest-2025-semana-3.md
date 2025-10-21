---
bookbanner: true
comments: true
date: 2025-10-20T04:00:00+00:00
description: Pra hoje novas features no blog e GitFichas que agora tem uma barra de busca!
image: https://res.cloudinary.com/jesstemporal/image/upload/v1760705452/covers/hacktoberfest.jpg
lang: pt
layout: post
type: post
series: "Hacktoberfest 2025"
series_order: 3
related: true
posts_list:
- resolvendo-conflitos
- 5-dicas-para-fazer-o-seu-pull-request-brilhar
- gitfichas-agora-e-open-source
tags:
- hacktoberfest
- ai
- git
- opensource
- pull request
- pull requests
title: "Hacktoberfest 2025: Diário de Campo, Semana 3"
translations:
- url: "/hacktoberfest-2025-week-3"
  lang: "en"
---

Passamos da metade da Hacktoberfest 2025 e bora falar do que aconteceu por aqui no meu cantinho do mundo open source.

Nessa semana, mais uma vez com tempo limitado, foquei no GitFichas mas também implementei algumas funcionalidades novas no meu blog, então bora falar de contribuições.

## GitFichas

Como sempre, a terceira semana do Hacktoberfest simboliza a grande "*desaceleração*", onde o volume de contribuições das primeiras semanas diminui já que muitas pessoas já completaram seus 4 ou 6 pull requests. Então depois do pico da semana passada, esta semana tivemos 30 pull requests:

- 23 PRs da comunidade:
    - 17 merged
    - 5 fechados
    - 1 aberto

Curiosamente eu coloquei o Copilot escrever um PR e ele até que fez um bom trabalho. Eu também fiz merge de 6 PRs meus: 2 com documentação, 2 com correções, e 2 com melhorias.

![Uma captura de tela mostrando estatísticas do repositório GitFichas com contagens de pull request e métricas de contribuição](https://res.cloudinary.com/jesstemporal/image/upload/v1760926901/images/hacktoberfest-2025-w3/IMG_0873_qxa065.jpg){: class="img-post"}

A parte mais empolgante da semana para mim pelo menos, foi que no dia 15 de outubro chegamos à marca de mais de 100 issues fechadas. O que marca o momento em que temos mais issues fechadas do que abertas no GitFichas. 🎉

![Repositório GitFichas mostrando milestone de 100+ issues fechadas, demonstrando progresso do projeto](https://res.cloudinary.com/jesstemporal/image/upload/v1760926936/images/hacktoberfest-2025-w3/IMG_0862_ozkatg.jpg){: class="img-post" style="max-width: 45%;"}

Eu também trabalhei em melhorar descrições para algumas issues que estavam abertas há muito tempo.

![Captura de tela do trabalho de melhoria de issues do GitHub mostrando melhores descrições e títulos para issues do GitFichas](https://res.cloudinary.com/jesstemporal/image/upload/v1760970097/images/hacktoberfest-2025-w3/IMG_6050_zs206y.jpg){: class="img-post"}

Falando de convidar pessoas para contribuir com o seu projeto, é fundamental que você tenha tanto boas descrições *quanto* bons títulos, já que na lista de issues pessoas vêem principalmente os títulos e tags de cada issue. 

Fiz também algumas automações para identificar essas issues que precisavam de ajuste mais facilmente e outras automações para me ajudar com tarefas de manutenção, mas vou escrever sobre isso em um post separado mais pra frente. 👀

Ainda no assunto das issues, aqui em baixo temos o gráfico burn up desde 1º de setembro ainda há um vão, mas a tendência é clara: a abertura de issues está desacelerando, e o fechamento delas está quase fechando o vão.

![Gráfico burn up mostrando tendências de issues do GitFichas desde 1º de setembro, com linhas indicando issues abertas vs fechadas ao longo do tempo](https://res.cloudinary.com/jesstemporal/image/upload/v1760926900/images/hacktoberfest-2025-w3/IMG_0880_zxjg9i.jpg){: class="img-post"}

Uma última coisa: [alguém decidiu implementar uma barra de pesquisa no GitFichas](https://github.com/jtemporal/gitfichas/pull/418), não havia uma issue para isso mas é algo que eu definitivamente pensei em ter no site.

![Homepage do site GitFichas mostrando o novo recurso de barra de pesquisa implementado por um contribuidor da comunidade](https://res.cloudinary.com/jesstemporal/image/upload/v1760970631/images/hacktoberfest-2025-w3/Screenshot_2025-10-20_at_10.30.05_AM_zlxymj.png){: class="img-post"}

Uma função de busca não é uma coisa pequena, especialmente se você não tem um banco de dados para indexar o conteúdo. Mesmo assim alguém implementou uma forma de pesquisar fichas e eu acredito que vai ajudar outras pessoas a encontrarem fichas mais facilmente! Mais uma grande vitória do open source! 🎉

## O blog

[No lado do blog](http://github.com/jtemporal/jtemporal.github.io), trabalhei principalmente em três coisas:

- Séries de posts
- Subtítulos para posts
- Novas capas

Bora lá.

### Séries de posts no blog

Duas semanas atrás implementei um widget de séries para que alguém lendo os posts possa pular rapidamente para outros posts na mesma coleção, muito parecido com os widgets de "_Artigos Relacionados_" ou de "_Artigos Recentes_" que eu já tenho.

![Post do blog mostrando o novo widget de séries que permite aos leitores navegar entre posts da mesma série](https://res.cloudinary.com/jesstemporal/image/upload/v1760926901/images/hacktoberfest-2025-w3/IMG_0876_abrmg8.jpg){: class="img-post"}

Até sábado era impossível linkar para uma série, então esse final de semana eu disse que estava na hora de corrigir isso. Principalmente para que eu pudesse compartilhar uma série sem linkar para um post específico que fizesse parte da série.

Eu queria ter uma página por série, e eu consegui pensar em algumas formas de implementar isso:

1. **Separar séries em _collections_**: Já criei coleções antes, mas neste caso _collections_ não é uma boa solução pois separaria os posts do resto dos posts;
2. **Criar manualmente uma página para cada série**: não escalável, isso criaria um monte de outros arquivos para eu manter fora que toda nova série eu precisaria uma página nova, apenas não;
3. **Plugins**: veja bem, plugins pareciam o caminho certo a seguir dado o fato de que eu poderia escrever um script ruby para gerar páginas automaticamente, mas se o seu site é deployado pelo GitHub Pages, tenho más notícias: não se pode usar _custom plugins_ no GitHub Pages.

Depois de algumas considerações, e conversando com o Copilot, me senti confiante de que escrever um plugin customizado era o caminho certo, mas como meu blog era servido através do GitHub Pages eu precisava encontrar uma forma diferente de fazer o deploy do blog, e eu não estava disposta a fazer commit do site buildado no GitHub.

Como eu já uso Netlify para preview dos pull requests tanto do blog quanto do GitFichas, pareceu um passo natural migrar o deployment de produção para o Netlify também. Então gostaria de informar vocês, senhoras e senhores, que agora eu sou uma dev que saiu do GitHub Pages para o Netlify para servir prod do meu site e eu me sinto como uma dev premium. 🤣

Com a ajuda do Copilot eu [implementei o plugin](https://github.com/jtemporal/jtemporal.github.io/pull/354/commits/db2e1e94f49bb3a7c134c35cad37b0b40b0f2bda) e migrei com sucesso prod para  Netlify, provavelmente vou escrever um post sobre isso em breve.

Aqui estão algumas das séries:

* **[Dicas de Git](https://jtemporal.com/series-pt/dicas-de-git/):** Tudo sobre Git cobrindo: conflitos, branches, rebase e fluxos GitHub.
* **[Hacktoberfest 2025](https://jtemporal.com/series-pt/hacktoberfest-2025/):** Atualizações semanais sobre Hacktoberfest 2025 no GitFichas e outros projetos.
* **[Dominando MCP](https://jtemporal.com/series-pt/dominando-mcp/):** Tudo o que você precisa saber sobre Model Context Protocol (MCP).

Essas e todas as outras estão disponíveis [na página de séries](https://jtemporal.com/series-pt).

### Subtítulos para posts

Outra coisa que sempre quis fazer: ter subtítulos em alguns posts. Este fim de semana decidi que era hora, e então depois de um pouco de [magia Liquid e alguns ajustes CSS](https://github.com/jtemporal/jtemporal.github.io/pull/352) estou feliz em informar que agora posso ter posts com título e subtítulos.

![Layout de post do blog mostrando a implementação do novo recurso de subtítulo com estilo de título e subtítulo](https://res.cloudinary.com/jesstemporal/image/upload/v1760926901/images/hacktoberfest-2025-w3/IMG_0877_yuj1jb.jpg){: class="img-post"}

Bem na hora para o meu post com um conto de fadas.

### Novas capas

Se você está se perguntando "*que post de conto de fadas?*" bem, eu também comecei a ficar um pouco incomodada com o fato de que as capas no blog estavam muito repetitivas ultimamente, já que os últimos 14 posts tinham **todos** a **mesma** capa.

[![Ilustração de uma escritora olhando pergaminhos, representando a capa do post do conto de fadas](https://res.cloudinary.com/jesstemporal/image/upload/v1760853062/images/fairy-tale/writer-looking-at-scrolls_rh5z7c.png){: class="img-post"}](https://jtemporal.com/a-escritora-e-o-bot-conto-de-fadas/)

Então chegou a hora de criar algumas capas a mais e colocá-las em bom uso, [eu conto a história aqui neste outro post](https://jtemporal.com/a-escritora-e-o-bot-conto-de-fadas/), que eu encorajo fortemente você a ler porque está na forma de um conto de fadas, mas aqui está o TL;DR: notei as capas repetidas, [abri uma issue, fiz o copilot fazer os ajustes de código](https://github.com/jtemporal/jtemporal.github.io/pull/351) e agora temos novas capas no ar.

## Medalha de _supercontributor_

Finalmente esta semana atualizei meu perfil Holopin para mostrar minha badge de "supercontribuidora" do Hacktoberfest.

![Uma imagem das badges Holopin de @jesstemporal, que é um link para visualizar o perfil completo Holopin dela](https://res.cloudinary.com/jesstemporal/image/upload/v1760926900/images/hacktoberfest-2025-w3/IMG_0883_immvdj.png){: class="img-post"}

E a camiseta já chegou também!

![Camiseta de supercontribuidora Hacktoberfest 2025 em cor clara, representando a recompensa de edição limitada para os principais contribuidores](https://res.cloudinary.com/jesstemporal/image/upload/v1760926902/images/hacktoberfest-2025-w3/IMG_5971_wqmhfe.jpg){: class="img-post" style="max-width: 50%;"}

Prefiro camisetas com cores escuras, mas tem um toque especial, já que apenas 10.000 serão distribuídas e essa em particular foi conquistada a base do GitFichas. 😊

---

Por hoje é só! Te vejo no próximo relatório semanal do Hacktoberfest 2025. 👻