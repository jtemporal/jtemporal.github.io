---
layout: post
type: post
bookbanner: true
comments: true
date: 2025-10-18T14:00:00+00:00
description: Como usei o Copilot para ajustar as capas do blog durante o café da manhã
image: https://res.cloudinary.com/jesstemporal/image/upload/v1760702982/covers/opensource_p4btht.png
lang: pt
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
title: "A escritora e o robô"
subtitle: "Um conto de fadas sobre pull requests na era da IA"
translations:
  - url: "/the-writer-and-the-bot-fairy-tale"
    lang: "en"
---

Era uma vez numa manhã de sexta-feira que com café na mão a escritora olhou para o seu blog e encontrou um pequeno bug escondido entre os posts.

<img alt="a escritora e o robô" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760846392/images/writer-finds-a-bug_ezpypk.png" class="img-post">

Entre misturar posts e capturar PRs, um bug havia sido criado sem a escritora perceber.

Mas este não é o conto daquele bug, este conto é sobre uma mudança feita depois que o bug foi resolvido quando a escritora e seu fiel ajudante robô começaram sua missão...

## Algo acordou o monstro do *rancinho*

Nos últimos oito posts, a escritora havia esquecido de definir uma variável que direciona os artigos para suas páginas específicas de idioma.

Esse bug não era grande, mas mesmo assim incomodou a escritora: novos posts apareciam no feed principal que é bilíngue, mas não nas páginas espeçifícas de inglês ou de português.

Percebendo o problema, a escritora rapidamente se desfez desse pequeno bug com o GitHub Mobile e [um PR igualmente pequeno](https://github.com/jtemporal/jtemporal.github.io/pull/349).

Enquanto revisava a prévia do pull request, algo mais pareceu estranho. As imagens de capa tinham começado a parecer _genéricas demais_ para o que a escritora vinha publicando recentemente sobre Preptember e Hacktoberfest.

<img alt="Um pequeno monstro fofo representando o bebê rancinho - uma pequena sensação de insatisfação com o design" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760846473/images/baby-ick_xdh29w.png" class="img-post">

Todos os posts diziam "variados" (_miscellaneous_) e o resultado foi que a escritora encontrou um bebê *rancinho* pelas capas que amou por tanto tempo.

O rancinho é um monstro terrível que faz toda escritora (e desenvolvedora) querer mudar seu site. Se deixado sozinho, o rancinho sempre cresce e se torna um monstro terrível que só é derrotado por uma _refatoração completa do site_.

<img alt="Um monstro grande e intimidador representando o rancinho totalmente crescido que exige refatorações completas do site" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760846545/images/the-ick-fully-grown_c8gvp3.png" class="img-post">

Enquanto o café começava a despertar o cérebro da escritora, uma ideia surgiu:

> *é hora de preparar uma nova imagem de capa!*

A escritora normalmente alterna entre algumas capas e uma capa dizendo "open source" parecia descritiva e mais alinhada com os últimos posts escritos.

*Ou pelo menos, assim pensava a escritora...*

## Colocando o GitHub Copilot em ação

Depois de criar, exportar a nova capa e fazer upload para o CDN, a escritora tinha todos os ingredientes para preparar um novo feitiço.

<img alt="A escritora preparando ingredientes mágicos e componentes do feitiço para derrotar o monstro rancinho" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760846884/images/the-writer-ready-for-the-spell_qrip6v.png" class="img-post">

A escritora [abriu uma issue com os ingredientes e as instruções para derrotar _o rancinho_](https://github.com/jtemporal/jtemporal.github.io/issues/350): Mudar a imagem de capa nos posts relacionados a open source para a nova imagem de capa. E deu tudo para o robô confiável atribuindo ao GitHub Copilot.

<img alt="Descrição inicial do pull request do GitHub Copilot mostrando que vai trabalhar na issue e atualizar o PR com o progresso" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753384/images/01-initial-pr-description-by-copilot_e129m8.jpg" class="img-post"/>

Quando você atribui uma issue ao seu robô, ele vai começar a trabalhar imediatamente [criando um PR em rascunho](https://github.com/jtemporal/jtemporal.github.io/pull/351), dizendo que vai trabalhar na issue e que vai atualizar o PR conforme progridir.

<img alt="A escritora no telefone corrigindo o pequeno bug" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760850297/images/writer-on-the-phone-fixing-the-tiny-bug_qhikku.png" class="img-post">

Alguns minutos depois, o Copilot atualizou o PR com uma lista de verificação dos passos que tomaria para fazer as mudanças propostas. Parecia um pergaminho dos antigos organizado, com os passos listados linha por linha.

<img alt="Descrição atualizada do pull request do GitHub Copilot com uma lista detalhada de verificação dos passos para implementar as mudanças" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753384/images/02-copilot-update-description-with-checklist_djg4z1.jpg" class="img-post" style="max-width: 50%"/>

A escritora ficou realmente surpresa ao descobrir que 27 posts sobre open source existiam. Tanto que a escritora pensou que o robô cometeu um erro e coletou os posts errados para atualizar a capa.

<img alt="O robô prestativo descobrindo e coletando posts antigos do blog do arquivo" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760847177/images/robot-found-posts_awnswf.png" class="img-post">

Mal sabia a escritora, que o robô encontrou posts de muito tempo atrás...

## Trabalho feito mas mentes mudaram

Com o trabalho realmente feito, o pequeno robô atualizou o pull request, [escreveu um relatório das mudanças](https://github.com/jtemporal/jtemporal.github.io/pull/351), e chamou a escritora para uma revisão do feitiço antes que ele pudesse ser lançado para produção.

<img alt="Relatório abrangente do GitHub Copilot mostrando todos os 27 posts que foram atualizados com a nova imagem de capa, organizados por categoria" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753384/images/03-copilot-report-on-all-changes-made_rh2k5y.jpg" class="img-post"/>

Foi assim que a escritora confirmou que realmente 27 posts eram sobre open source:

- 8 sobre Preptember
- 4 sobre GitFichas
- 2 sobre pull requests
- E incríveis 13 sobre Hacktoberfest

A escritora podia sentir o feitiço funcionando e ficou muito animada para ver a prévia dos posts com a nova capa!

<img alt="A escritora mostrando animação e expectativa enquanto espera para ver as capas atualizadas do blog" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760849469/images/the-writer-excited-for-the-updates_swlzvs.png" class="img-post"/>

Mas a animação não durou muito...

## O *rancinho* ataca novamente

Quando a página carregou, a felicidade da escritora durou pouco e foi mais ou menos assim:

> *AEEE CAPA NOVA... espera...*
>
> *afff todo post agora é open source 😮‍💨*
> 
> *pelo menos a nova capa tá massa ¯\\\_(ツ)_/¯*

<img alt="Página inicial do blog mostrando vários posts todos usando a mesma imagem de capa 'open source', criando monotonia visual" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753420/images/04-all-covers-with-open-source-ick_s0j7pt.jpg" class="img-post"/>

A escritora rapidamente percebeu que esse bebê *rancinho* era forte e estava pronto para lutar.

<img alt="O bebê monstro rancinho agora mais forte e pronto para a batalha, mostrando determinação" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760847721/images/tiny-ick-ready-to-fight_hzbfmi.png" class="img-post">

Temendo que o rancinho saísse de controle muito em breve, a escritora criou duas novas capas para adicionar ao feitiço: uma para Hacktoberfest e uma para posts de Preptember.

Sem demora, as duas novas capas foram adicionadas e com um comentário a escritora colocou o robô para trabalhar mais uma vez.

<img alt="Comentário no pull request do GitHub marcando o Copilot com instruções sobre as novas imagens de capa para posts do Hacktoberfest e Preptember" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753384/images/05-comment-tag-copilot-to-make-adjustments_qiva0v.jpg" class="img-post"/>

## Observando o trabalho de perto

Para evitar mais problemas desta vez, a escritora também olhou o trabalho enquanto estava acontecendo lançando o feitiço **View session**.

<img alt="Visualização da sessão do GitHub Copilot mostrando o progresso em tempo real enquanto processa a tarefa de ajustes das imagens de capa" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753384/images/06-copilot-working-on-the-adjustments_ymbpse.jpg" class="img-post"/>

Visualizar uma sessão te dá uma janela para o pensamento do pequeno robô e te permite observar todos os passos que o robôzinho está fazendo enquanto eles estão acontecendo.

<img alt="A escritora verificando o trabalho do Copilot" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760850610/images/writer-checking-on-copilots-work_yg1q6o.png" class="img-post"/>

## O final feliz

Alguns minutos depois, o Copilot terminou de implementar as mudanças e a escritora pôde olhar a prévia novamente.

Desta vez o rancinho parecia distante e fraco. A variedade ajuda a manter o rancinho longe. 😅

<img alt="Página inicial do blog agora mostrando imagens de capa diversas - posts do Hacktoberfest com capas laranja, posts do Preptember com seu próprio design, e outros conteúdos de open source com a nova capa" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753420/images/07-newcovers-in-place_sy23sg.jpg" class="img-post"/>

Tomando café, corrigindo bugs, e vendo o Copilot trabalhar deu à escritora esperança para um futuro sem rancinho.

Quando a xícara de café estava vazia, o pull request havia sido mergeado e o feitiço tinha criado raízes: Os posts do Hacktoberfest agora têm sua própria capa, os de Preptember têm a deles, e o resto do conteúdo de open source tem uma nova cara.

<img alt="A escritora comemorando feliz com o robô após derrotar com sucesso o monstro rancinho" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760848861/images/happy-ending-happy-writer_x6xzud.png" class="img-post">

O *rancinho* se foi, substituído por capas que realmente representam sobre o que os posts recentes falam.

Às vezes as menores mudanças fazem a maior diferença. Às vezes, tudo que é preciso é uma xícara de café, um assistente robô, e um pouco de magia.

E assim, com uma xícara de café e um robô prestativo, a escritora viveu feliz para sempre. Bem pelo menos por enquanto...

> Fim

---

Pequena observação: Acho extremamente divertido quando o Copilot reage com 👀 aos comentários que marcam ele.
