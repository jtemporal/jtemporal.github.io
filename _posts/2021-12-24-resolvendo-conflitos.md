---
layout: post
title: Resolvendo conflitos
date: 2021-12-24 18:55:59 -0200
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png
comments: true
description: Uma receita infalível para você entender e resolver conflitos sem medo
tags:
- tutorial
- git
- português
- portugues

---
Resolver conflitos pode ser uma tarefa árdua e complicada quando se trata de projetos git. Nesse artigo você vai aprender um passo-a-passo infalível para resolver conflitos.

Caso você já saiba o que são conflitos e queira apenas ver a lista de passos e comandos para resolver um conflito sugiro que [pule para a conclusão clicando aqui](#conclusao).

## O que é um conflito em git

Quando um projeto tem várias pessoas trabalhando ao mesmo tempo, é possível que duas pessoas pessoas precisem fazer alterações no mesmo pedaço de um arquivo. Quando mais de uma pessoa alteram o mesmo pedaço de um arquivo em branches diferentes é nesse momento que os conflitos aparecem.

O conflito simboliza que duas ou mais alterações aconteceram no mesmo pedaço de um arquivo e o git não sabe qual das alterações manter.

## Como um conflito se forma

Na imagem abaixo temos um diagrama que eu carinhosamente apelidei de “anatomia de um conflito” que mostra os passos até um que um conflito se forme. Vale salientar que normalmente, durante o ciclo de desenvolvimento de projetos, as alterações são maiores a por vezes em maior quantidade.

![anatomia de um conflito](https://res.cloudinary.com/jesstemporal/image/upload/v1640379728/anatomia-de-um-conflito_ixpolc.png)

**0 -** No nosso projeto temos um `README.md` que foi adicionado pelo commit inicial no repositório. Depois da criação desse arquivo, duas alterações precisam ser feitas para adicionar mais algumas informações ao mesmo arquivo e duas pessoas vão fazer essa alteração;

**1 -** Cada pessoa então criou um branch a partir da `main` para trabalhar nas suas alterações, esses novos branches foram criados mais ou menos ao mesmo tempo, ou seja, eles possuem um mesmo ponto de partida;

**2 -** Durante algum tempo cada pessoa trabalha na sua branch implementando a sua alteração, que nesse caso é adicionar a linha _"pessoa x esteve aqui!"_ no arquivo de `README.md` sendo x o identificador da pessoa;

**3 -** A pessoa 1 faz um pull request e tem esse pull request aprovado e seu merge na `main`;

**4 -** A pessoa 2 por sua vez, faz o seu pull request para `main`, só que esse pull request **não** pode ser feito merge pois apresenta conflitos.

## Formando um conflito na prática

Para demonstrar como isso se apresenta, eu criei um repositório com um cenário parecido ao descrito na sessão anterior [que você pode encontrar aqui](https://github.com/jtemporal/exemplo-conflito/branches). O arquivo inicial foi criado e as duas branches, uma para cada pessoa, também já foram criadas a partir da `main`, veja:

![imagem mostrando o estado inicial do repositório como descrito anteriormente](https://res.cloudinary.com/jesstemporal/image/upload/v1640385396/resolucao-de-conflito-git/resolucao-de-conflito-fig-1_h7tkoc.png)

Em seguida fiz as alterações para cada pessoa, no branch `pessoa1` adicionei a descrição _"Pessoa 1 esteve aqui!"_ na última linha do `README.md` e de forma similar fiz o mesmo processo para o branch `pessoa2`. Então, abri os dois pull requests:

![imagem mostrando os dois pull requests abertos no github](https://res.cloudinary.com/jesstemporal/image/upload/v1640385398/resolucao-de-conflito-git/resolucao-de-conflito-fig-2_bqyfl6.png)

Revisei o merge no pull request `pessoa1`:

![imagem mostrando o pull request feito merge](https://res.cloudinary.com/jesstemporal/image/upload/v1640385397/resolucao-de-conflito-git/resolucao-de-conflito-fig-3_oy9bss.png)

E então voltei para o PR da `pessoa2` e pude notar a indicação de que o pull request contém um conflito, veja:

![imagem mostrando o pull request de pessoa 2 com a mensagem de conflito do github](https://res.cloudinary.com/jesstemporal/image/upload/v1640385397/resolucao-de-conflito-git/resolucao-de-conflito-fig-4_c55lad.png)

E agora com o conflito quentinho em mãos é hora de resolvê-lo.

## Resolvendo um conflito no Git

Antes de começar é importante notar que este tipo de conflito é possível resolver também pela interface do GitHub, mas o foco aqui são os comandos, então vamos lá!

A primeira coisa importante é decidir em qual branch resolver o conflito, uma regra que geralmente funciona é resolver os conflitos no branch que apresenta as alterações, neste caso, o branch em questão é o `pessoa2`, com isso você deve atualizar o seu repositório local, e este branch em particular com os ajustes da main, para isso faça:

    git checkout pessoa2
    git pull origin main

Isso irá trazer o conflito para a sua máquina te dando um aviso informando que existem conflitos, que você deve resolver o conflito e fazer um commit:

![resultado do comando git pull com conflito](https://res.cloudinary.com/jesstemporal/image/upload/v1640385397/resolucao-de-conflito-git/resolucao-de-conflito-fig-5_xjzs8d.png)

Se você abrir o `README.md` num editor de código irá notar a presença de marcadores indicado por sucessivos sinais de maior que (`>`), sinais de menor que (`>`) e sinais de igual (`=`), aqui um exemplo do conflito mostrado no Vim:

![imagem mostrando o conflito no editor vim com as marcações mais simples](https://res.cloudinary.com/jesstemporal/image/upload/v1640385398/resolucao-de-conflito-git/resolucao-de-conflito-fig-6_zqutjm.png)

Também é possível que você use o VS Code que mostra o conflito de uma forma mais amigável já que ele marca visualmente, com cores diferentes, cada mudança de origem diferente e ainda te da opções de como resolver o conflito aceitando parte das mudanças, ou as duas, ou nenhuma delas:

![imagem mostrando o conflito no editor VS Code com as marcações mais bem definidas](https://res.cloudinary.com/jesstemporal/image/upload/v1640385397/resolucao-de-conflito-git/resolucao-de-conflito-fig-7_wesv8q.png)

Para entender o que cada botão apresentado pelo VS Code quer dizer, vamos dissecar um pouco esse formato de representação. Um conflito pode ser dividido em duas partes:

1. **As nossas alterações:** aquelas que estão no branch corrente também chamadas de alterações atuais (_current change_);
2. **As alterações dos outros:** aquelas que trouxemos para a máquina local ao fazer `git pull` também chamadas de alterações que estão chegando ou de entrada (_incoming changes_).

Nesse formato, cada bloco é delimitado por um sinal de maior ou menor até o bloco de sinais de igual repetidos, então por exemplo nesse caso temos os seguintes blocos:

Aquele com as alterações atuais:

    <<<<<<< HEAD
    Pessoa 2 esteve aqui!
    =======

E aquele com as alterações que estão chegando:

    =======
    Pessoa 1 esteve aqui!
    >>>>>>> 3c20251a794ec572e2c3202017d843e2d8769843

Como queremos deixar ambas alterações podemos apenas apagar as linhas com os marcadores salvar o arquivo, se você estiver usando editores mais simples. No VS Code podemos apertar em _"Accept both changes"_ e continuar com os comandos a seguir. Após aceitar todas as mudanças, manualmente ou usando os botões no VS Code, você deve ter um arquivo assim:

![imagem mostrando o resultado esperado de aceitar ambos blocos de alterações](https://res.cloudinary.com/jesstemporal/image/upload/v1640385397/resolucao-de-conflito-git/resolucao-de-conflito-fig-8_ps9lz7.png)

Lembre-se de salvar o arquivo. Em seguida volte para o terminal, se você rodar o comando `git status` vai ver que o arquivo `README.md` se mostra com alterações.

![imagem mostrando resultado do comando git status com o arquivo readme.md apresentando alterações](https://res.cloudinary.com/jesstemporal/image/upload/v1640386495/resolucao-de-conflito-git/resolucao-de-conflito-fig-9_qos2xt.png)

Agora você pode adicionar esse arquivo em staging com o seguinte comando:

    git add README.md

E fazer o commit das alterações da forma que preferir. Note que ao fazer o commit, se você usar editores para escrever a mensagem de commit, é possível que essa mensagem já venha pré-preenchida como na imagem abaixo:

![imagem mostrando a mensagem de commit pré-preenchida pelo editor vim](https://res.cloudinary.com/jesstemporal/image/upload/v1640387040/resolucao-de-conflito-git/resolucao-de-conflito-fig-10_urteae.png)

Você pode personalizar a mensagem ou deixá-la como está e, ao terminar de fazer o commit, enviar essas alterações para o GitHub com um `git push`:

![imagem mostrando o envio das alterações para o github](https://res.cloudinary.com/jesstemporal/image/upload/v1640387040/resolucao-de-conflito-git/resolucao-de-conflito-fig-11_kumo0k.png)

Agora se você recarregar a página do pull request deverá ver que o conflito foi resolvido, observe:

![Imagem mostrando o PR que antes apresentava conflito agora com o conflito resolvido](https://res.cloudinary.com/jesstemporal/image/upload/v1640387041/resolucao-de-conflito-git/resolucao-de-conflito-fig-12_nourxm.png)

E podemos finalmente dar merge neste pull request! Vitória! 🎉🎉

## Conclusão<a name="conclusao"></a>

Você agora entende como os conflitos se formam e também sabe todos os passos envolvidos em resolver conflitos.

Aqui está a lista simples de todos os comandos e passos para resolver conflitos, lembre de substituir as notações `<>` de acordo:

1. `git checkout <nome do branch com conflito>`
1. `git pull origin main`
1. abra o arquivo com conflito e os resolva
1. salve o arquivo
1. `git add <nome do arquivo alterado>`
1. `git commit`
1. `git push`

***

## Leitura extra

Seguem mais umas dicas de documentações em português para você aprender sobre resolução de conflitos no git

* [O diretório de fichas de estudo sobre git GitFichas](https://gitfichas.com)
* [A documentação do GitHub sobre resolução de conflitos](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts);
* [O tutorial da Atlassian também sobre resolução de conflitos](https://www.atlassian.com/br/git/tutorials/using-branches/merge-conflicts).