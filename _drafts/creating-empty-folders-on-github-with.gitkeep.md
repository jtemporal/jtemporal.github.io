---
layout: post
date: 2021-12-24T12:34:20.000-02:00
image: ''
comments: true
title: Creating empty folders on GitHub with .gitkeep
description: Understand how to use .gitkeep
type: post
tags:
- git
- english
- pro tip
related: false
posts_list:
- 5-dicas-para-fazer-o-seu-pull-request-brilhar
- resolvendo-conflitos
- conheca-o-gitfichas
lang: en
translated: ''

---
Sometimes you need to put an empty folder in your project on GitHub, but traditionally git doesn't track empty folders, and then the question pops up: _“how to make an empty folder appear on GitHub if git doesn't allow it?”_

Don't worry about it, you'll see on this pro tip how to do it using a special file called `.gitkeep`.

Isso aconteceu comigo à alguns anos no projeto que eu trabalhava: uma das ferramentas _open-source_ dependia da existência de uma pasta para fazer o download de dados de exemplo e o time decidiu que colocar uma conferência da existência da pasta ou criação dela no nosso código seria um exagero. Uma forma que vimos para garantir a existência da pasta foi usando o `.gitkeep`.

Ao colocar este arquivo numa pasta vazia, ele garante que o git vá adicionar essa pasta no seu sistema de versionamento e por ser um arquivo oculto, ele facilita a manutenção da estrutura de pastas sem atrapalhar o uso da pasta para outros fins.

Na imagem a baixo você um projeto chamado `exemplo-pastas` que já possui um arquivo `README.md` que já foi commitado e sem alterações acompanhadas pelo git, em seguida eu crio uma nova pasta chamada `diretorio1` e ao fazer novamente o `git status` o git segue informando que não há mudanças no projeto.

![exemplo 1](https://res.cloudinary.com/jesstemporal/image/upload/v1640360211/gitkeep-exemplo-fig-1_tsvwqh.png)

Agora se criarmos o arquivo `.gitkeep` dentro do `diretorio1` o git mostra que há a existência de um diretório a ser adicionado, veja:

![exemplo 2](https://res.cloudinary.com/jesstemporal/image/upload/v1640360212/gitkeep-exemplo-fig-2_etwfco.png)

Com isso você consegue ver o funcionamento do `.gitkeep` e caso queira ver na prática esse exemplo está disponível [nesse repositório do GitHub](https://github.com/jtemporal/exemplo-pastas).