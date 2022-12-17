---
layout: post
title: Estou usando um CMS e você deveria usar um também!
date: 2019-10-06 00:00:00 -0300
img: "/colinha.png"
type: post
lang: pt
comments: true
tags:
- português
- content management
- blog
- blogging
- cms
- colinha
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png"
description: Com um gerenciador de conteúdo para sites estáticos tem me ajudado a
  escrever mais

---
Essa colinha é mais um dica pra você que tem um site estático ou que está querendo migrar seu blog de ferramentas como medium.

Há alguns meses eu descobri um negócio chamado CMS, a sigla para _Content Management System_ (_sistema de gerenciamento de conteúdo_ em português), era algo que eu estava procurando a muito tempo e não sabia.

Vamos lá, se você já me conhece sabe que eu passei um tempo postando coisas no medium.com e hoje só faço isso quando estou escrevendo para publicações como a do [Code Like a Girl](https://code.likeagirl.io/), [Data Bootcamp](https://medium.com/databootcamp) ou para a [revista do Pizza de Dados](https://medium.com/pizzadedados). Fora esses casos que envolvem publicações, meus artigos, tutoriais e colinhas sempre estão em blogs estáticos como esse aqui que você está acessando.

Eu até ensinei como colocar sites [no ar usando o GitHub Pages e o Jekyll nesse tutorial](jtemporal.com/do-tema-ao-ar/). Mas confesso que, se como eu, você não está perto do seu computador 100% das vezes que começa a escrever um novo artigo, visualizar seu site pode ser complicado. Quando não estou no computador, acabo editando muitos dos meus textos no _tablet_ ou no celular e, por mais que eu adore editores de texto simples, ainda não dá pra fazer _build_ de site estático pelo Android ou iOS.

E aí que entra [o Forestry](https://forestry.io/). É uma ferramenta para te ajudar a transpor essas barreiras mais técnicas. Então vamos ver isso com calma.

## Problemas de hoje

Como falei existem uma série de fatores que atrapalham a publicação de novos artigos quando se tem um blog como o meu: um site estático, baseado em Markdown e que está hospedado no GitHub.

### Escrever textos em Markdown

Eu passei muito tempo procurando um aplicativo que tivesse o mínimo de funcionalidades para escrever textos em markdown que tivesse duas _features_ principais:

1. visualização desses textos num formato bonitinho como o pré-visualizar do GitHub por exemplo;
2. e, sincronização desses textos com algum serviço de nuvem para que eu pudesse acessar eles de qualquer lugar independentemente se estivesse com o aplicativo perto de mim ou não.

Até agora eu não encontrei um aplicativo gratuito para isso. E considerando que eu gosto de rascunhar meus textos no celular e _tablet_, a falta de uma ferramenta com essas características é bem limitante.

### Pré-visualização do site

Quando estou escrevendo no meu computador eu já tenho os processos prontos, eu consigo escrever os artigos num editor de texto como o [Remarkable](https://remarkableapp.github.io/) direto na pasta do meu site e fazer um _build_ do site na minha máquina para ver como ficará o artigo quando for publicado. No entanto, qualquer outro dispositivo que eu esteja usando como meu celular, torna impossível a tarefa de pré-visualização do site já que não tenho um ambiente de desenvolvimento nesse dispositivo.

Com as configurações que eu tinha até então, eu também não tinha um ambiente de _staging_, se você não sabe o que é isso, imagine que você tenha uma cópia do seu site no ar, essa cópia é separada do site real e serve para você fazer testes de alterações no seu site, desde alterações estruturais como mudanças de tema, até mesmo como um ambiente onde você pode ter uma pré-visualização online do seus artigos.

A falta do ambiente de _staging_ me causa um trabalho a mais frequentemente. Depois de prontos, eu geralmente mando meus textos para amigos e amigas revisarem, para fazer isso eu acabo usando ferramentas de compartilhamento de documentos como o Google Drive ou até mesmo o medium com o texto em formato de rascunho o que não é ruim, mas é um passo a mais que inclui colocar o texto em mais uma plataforma para que possa ser visto.

### Colocar novos textos no GitHub

Além de uma dificuldade em pré-visualizar e também de compartilhar rascunhos. Por fim, chega a pior de todas: fazer _commits_ pelo celular. Embora eu já tenha feito isso, é uma experiência bem desagradável, o que por sua vez me impede de publicar novos textos se eu só tiver acesso ao meu celular. Entende o dilema?

## Como o Forestry  resolve tudo isso

Longe de ser uma bala de prata, a plataforma oferece um editor de textos amigável que mostra as formatações básicas elementares como títulos, hyperlinks, itálico e afins. Ainda te permite criar listas, inserir blocos de códigos e imagens no seu texto. É amigável para pequenas telas e aceita colar textos com formatação então, eu consigo escrever meus textos offline em um aplicativo de notas e depois criar o arquivo pelo navegador do próprio celular, da mesma forma ainda é possível publicar o texto depois de pronto.

O Forestry também te dá um ambiente de _staging_ tornando possível fazer a pré-visualização dos textos em tempo real. Você consegue configurar a ferramenta para fazer o _build_ do site com os textos em rascunho e também fazer a pré-visualização de cada texto individualmente.

Uma funcionalidade que eu uso bastante é a criação de _templates_ para os tipos de artigo, onde você pode definir os campos do front-matter de cada tipo de texto que você normalmente escreve e assim evitar retrabalho. Essa funcionalidade me ajuda definindo campos obrigatórios como Título e subtítulo, dessa forma, eu não esqueço de nada importante e também definindo valores padrão para cada campo, como por exemplo a capa do artigo.

A funcionalidade de templates foi particularmente útil para criar os arquivos dos projetos da lista de hacktoberfest. Eu criei um _template_ com os campos que precisava preencher de cada projeto e era só uma questão de copiar e colar cada informação no campo correspondente e salvar o arquivo.

Por fim, a propaganda do Forestry é que nem você nem sua equipe precisam saber fazer _commits_ ou saber como funciona o git para gerenciar o conteúdo de um blog ou site. Isso mesmo, os _commits_ acontecem atrás da ferramenta então, você pode desapegar das questões de desenvolvimento de focar em escrever. E sim, é possível ter equipes de até 4 pessoas para cada site, permitindo que pequenos times trabalhem colaborativamente num seu site.

## Nem tudo são flores

Apesar de resolver meus problemas e me dar um lugar legal para trabalhar nos meus artigos, o Forestry ainda é uma ferramenta nova e em constante desenvolvimento. Por isso, algumas funcionalidades ainda possuem espaços para melhorias. Por exemplo, se você usa [_collections_](https://jekyllrb.com/docs/collections/) no Jekyll pode ter dificuldades de visualizar novas adições às suas coleções sem antes reiniciar o servidor de pré-visualizações.

Fazer a integração com um site já existente pode ser um pouco assustador principalmente se você nunca se aventurou com algo similar antes. Todas as documentações são em inglês e o editor de texto não possui suporte a alguns tipos de arquivos como por exemplo `.scss`. Eu descobri isso pedindo ajuda ao suporte já que a plataforma não importava esses arquivos e não aparecia um notificação clara do motivo.

## Concluindo

Se você gosta de escrever em sites como o medium.com ou tem costume de usar algo como o wordpress e quer sair dessas plataformas, unir um gerador de sites estáticos como o [Jekyll](https://jekyllrb.com/) ou [Hugo](https://gohugo.io/) (as opções vão muito além dessas), com uma plataforma como Forestry pode ser o caminho mais suave para fazer essa transição.

Espero que esse relato te ajude a melhorar sua experiência de escrever.