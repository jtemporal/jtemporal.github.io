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

This happened to me a few years ago on the project I was working on: one of the open-source tools depended on the existence of a folder to download sample data and the team decided that putting a check on the folder's existence or its creation in our code would be an overkill. One way we found to ensure the folder's existence was using `.gitkeep`.

By placing this file in an empty folder, it ensures that git will add this folder to your versioning system and because it is a hidden file, it makes it easier to maintain the folder structure without getting in the way of using the folder for other purposes.

Na imagem a baixo você um projeto chamado `exemplo-pastas` que já possui um arquivo `README.md` que já foi commitado e sem alterações acompanhadas pelo git, em seguida eu crio uma nova pasta chamada `diretorio1` e ao fazer novamente o `git status` o git segue informando que não há mudanças no projeto.

![exemplo 1](https://res.cloudinary.com/jesstemporal/image/upload/v1640360211/gitkeep-exemplo-fig-1_tsvwqh.png)

Agora se criarmos o arquivo `.gitkeep` dentro do `diretorio1` o git mostra que há a existência de um diretório a ser adicionado, veja:

![exemplo 2](https://res.cloudinary.com/jesstemporal/image/upload/v1640360212/gitkeep-exemplo-fig-2_etwfco.png)

Com isso você consegue ver o funcionamento do `.gitkeep` e caso queira ver na prática esse exemplo está disponível [nesse repositório do GitHub](https://github.com/jtemporal/exemplo-pastas).