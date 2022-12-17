---
layout: post
date: 2021-12-24T12:34:20.000-02:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png
comments: true
title: Criando pastas vazias no GitHub com o .gitkeep
description: Entenda pra que serve e como usar o arquivo .gitkeep
type: post
tags:
- git
- português
- colinha
related: true
posts_list:
- 5-dicas-para-fazer-o-seu-pull-request-brilhar
- resolvendo-conflitos
- conheca-o-gitfichas
lang: pt
translated: "/creating-empty-folders-on-github-with-gitkeep"
translator: false

---
Às vezes você precisa colocar uma pasta vazia no seu projeto no GitHub, mas tradicionalmente o git não faz acompanhamento de pastas vazias, e aí cai a dúvida: _"como fazer uma pasta vazia aparecer no GitHub se o git não deixa?"_

Não se preocupe, nessa colinha você vai ver como fazer isso usando um arquivo especial chamado `.gitkeep`.

Isso aconteceu comigo há alguns anos no projeto que eu trabalhava: uma das ferramentas _open-source_ dependia da existência de uma pasta para fazer o download de dados de exemplo e o time decidiu que colocar uma conferência da existência da pasta ou criação dela no nosso código seria um exagero. Uma forma que vimos para garantir a existência da pasta foi usando o `.gitkeep`.

Ao colocar este arquivo numa pasta vazia, ele garante que o git vá adicionar essa pasta no seu sistema de versionamento e por ser um arquivo oculto, ele facilita a manutenção da estrutura de pastas sem atrapalhar o uso da pasta para outros fins.

Na imagem abaixo você vê um projeto chamado `exemplo-pastas` que já possui um arquivo `README.md` que já foi commitado e sem alterações acompanhadas pelo git, em seguida eu crio uma nova pasta chamada `diretorio1` e ao fazer novamente o `git status` o git segue informando que não há mudanças no projeto.

![exemplo 1](https://res.cloudinary.com/jesstemporal/image/upload/v1640360211/gitkeep-exemplo-fig-1_tsvwqh.png)

Agora se criarmos o arquivo `.gitkeep` dentro do `diretorio1` o git mostra que há a existência de um diretório a ser adicionado, veja:

![exemplo 2](https://res.cloudinary.com/jesstemporal/image/upload/v1640360212/gitkeep-exemplo-fig-2_etwfco.png)

Com isso você consegue ver o funcionamento do `.gitkeep` e caso queira ver na prática esse exemplo está disponível [nesse repositório do GitHub](https://github.com/jtemporal/exemplo-pastas).