---
layout: post
date: 2021-10-06 06:15:06 -0300
image: "/images/variados.png"
comments: true
lang: en_US
title: 5 Dicas Para Fazer o Seu Pull Request Brilhar ✨
description: Dicas de ouro para fazer uma contribuição open-source de sucesso
tags:
- open source
- open-source
- contribuição
- hacktoberfest2021
- hacktoberfest
- portugues
- português

---
Outubro é mês de hackatoberfest e esse deve ser o mês que nós nos esforçamos mais para contribuir com open-source e ajudar mais pessoas contribuirem. Então nesse artigo você vai aprender cinco 5 dicas de ouro para fazer o seu _pull request_ ✨brilhar ✨. Vamo lá!

## Siga o guia de contribuição do projeto

A maioria dos projetos open-source tem um conjunto de regras ou padrões que você deve seguir para contribuir, coisas como manter cobertura de testes, criar branches seguindo um certo padrão de nomeação, qual a língua oficial do projeto e de seus commits e até mesmo regras sobre intervalo de tempo com inatividade no qual passado esse períodos o pull requests sem atividade será fechado.

Seguir o guia do projeto vai garantir um bom caminho para ter um _pull request_ bem sucedido logo do começo, esse guia é geralmente encontrado no arquivo `CONTRIBUTING.md` nos projetos do GitHub mas por vezes as regras também podem estar descritas no arquivo `README.md`.

Agora você pode estar se perguntando _“O que eu faço se o projeto não tiver um guia de contribuição?”_ e essa situação é bem comum. Então caso  não exista um guia de contribuição o que eu faço geralmente é olhar alguns commits do histórico de commits para ver como eles são feito e outros pull requests que foram feitos antes do meu para tentar seguir o mesmo formato.

## Use branches no seu fork

Ao fazer um fork de um projeto para contribuir, é muito comum cairmos no erro de fazer alterações no branch principal e submeter o pull request.

Evite.

Por mais que você só planeje fazer apenas um pull request, pode ser que a inspiração role e você queira fazer um segundo pull request e aí você já comprometeu o seu branch principal com alterações do primeiro pull request e, qualquer contribuição a partir desse ponto vai conter as alterações do primeiro pull request.

Então o ideal é manter o branch principal limpo de alterações até para que você possa mantê-lo atualizado com o branch principal do repositório de origem. Então crie o bom hábito de separar suas contribuições em branches novas.

## Relacione o pull request com uma issue

Existem hoje 9 palavras-chave para relacionar o seu pull request com uma issue (se ela existir). Isso mesmo, nove! Usar essas palavras ao fazer o _pull request_ vai facilitar a vida de quem mantém o projeto, pois essas palavras fecham a issue correspondente ao rolar o merge do _pull request_, e também vai ajudar pessoas que estejam interessadas em contribuir pois elas podem ver o _pull request_ em andamento evitando que duas pessoas façam trabalho duplicado.

Então essa é a lista de palavras:

1. close
2. closes
3. closed
4. fix
5. fixes
6. fixed
7. resolver
8. resolve
9. resolved

Essas palavras podem ser usadas em dois lugares:

1. No título do _pull request_;
2. Ou na descrição do _pull request_.

Você deve usá-las da seguinte forma para resolver uma issue:

```txt
fixes #42
```

Ou da forma a seguir para resolver mais de um issue:

```txt
fixes #42, fixes #44
```

Caso o seu pull request, não resolva uma issue por completo, você ainda deve mencionar o número da issue que tem relação com o seu _pull request_ pois isso vai fazer que o seu _pull request_ apareça na issue como uma menção, mas nesse caso não deve usar as palavras acima.

Como uma pessoa que mantem alguns projetos, me faz muito feliz ver essas palavras sendo usadas nos _pull requests_. Você pode ler mais sobre isso [nessa documentação do próprio GitHub sobre o assunto](https://docs.github.com/pt/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#about-linked-issues-and-pull-requests0).

## Dê contexto para quem vai revisar

1. De contexto para quem vai revisar
   1. Mencione a issue de referencias se ela existir
   2. se não tiver uma issue de referencia, explique o seu objetivo com o pr e explique o que vocÊ está tentando resolver e/ou melhorar

## Explique como testar o que você fez

1. Fale como testar o que você fez
   1. mesmo que tenha testes unitários/itegracao
   2. principalmente se não tiver testes unitários/integração