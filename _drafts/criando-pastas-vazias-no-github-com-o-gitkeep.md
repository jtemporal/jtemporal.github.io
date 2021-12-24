---
layout: post
date: 2021-12-24 12:34:20 -0200
image: "/images/colinha.png"
comments: true
title: Criando pastas vazias no GitHub com o .gitkeep
description: Entenda pra que serve e como usar o arquivo .gitkeep
tags:
- git
- português
- colinha

---
Ás vezes você precisa colocar uma pasta vazia no seu projeto no GitHub, mas tradicionalmente o git não faz acompanhamento de pastas vazias, e aí cai a dúvida: _"como fazer uma pasta vazia aparecer no GitHub se o git não deixa?"_

Não se preocupe nessa colinha você vai ver como fazer isso usando um arquivo especial chamado `.gitkeep`.

Isso aconteceu comigo à alguns anos no projeto que eu trabalhava, uma das ferramentas _open-source_ dependia da existência de uma pasta e nós decidimos que colocar uma conferência da existência da pasta ou criação dela no nosso código decidimos resolver isso 