---
bookbanner: true
comments: true
date: 2023-09-09 09:01:00+00:00
description: Usando o Heroku CLI no GitHub Codespaces e fazendo login sem navegador
  e com MFA ativado
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png
lang: pt
layout: post
tags:
- github codespaces
- codespaces
- git
- github
- heroku
- authorização
- portugues
title: Login no Heroku via linha de comando com MFA ativado
translations:
- lang: en
  url: /login-on-heroku-via-cli-with-mfa
translator: false
type: post
---


Digamos que você já sabe usar [a forma iterativa para fazer login no Heroku pelo terminal](https://jtemporal.com/login-no-heroku-do-github-codespaces), mas agora você ativou a autenticação multi fator (MFA) no seu perfil e um simples usuário e senha não vai ser o suficiente para login.

Nessa colinha você vai aprender a usar o modo iterativo com MFA.

## **Fazendo o login no Heroku usando o terminal**

Só para revisar, se você usar o comando a seguir

```bash
heroku login -i
```

Você poderá informar o seu usuário e senha diretamente no terminal para executar o login no Heroku sem precisar usar um navegador.

Essa funcionalidade é extremamente util quando você está tentado fazer login no Heroku por uma instancia remota como o GitHub Codespaces por exemplo.

Com a MFA (autenticação multifator) ativada, só usuário e senha não vai bastar como pode ser visto na imagem acima. 

![Resultado de fazer login interativo e falhar por conta do MFA ativado](https://res.cloudinary.com/jesstemporal/image/upload/v1694306510/heroku-login-cli-credentials-not-enough-mfa-enabled_aye1lw.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 80%;"}

Para dar continuidade ao processo de login nesses casos, é preciso gerar um token de autorização.

## Configurando um token de autorização para fazer login no terminal **com MFA ativado**

Faça login no seu dashboard do Heroku e clique na sua foto, então selecione "*Account Settings*", quando a página carregar escolha a aba "*Applications*" ou [clique nesse link para ir diretamente ao dashboard de aplicações](https://dashboard.heroku.com/account/applications). Em seguida, desça a página até a seção chamada *Authorizations*.

Se você nunca usou tokens de autorização do Heroku antes, essa seção estará vazia, eu já tenho alguns tokens como pode ver na imagem abaixo.

![Tokens listados na seção Authorizations](https://res.cloudinary.com/jesstemporal/image/upload/v1694307511/heroku-lists-of-authorization-tokens_tli8dd.png)


Então clique em *Create Authorization*. Um menu lateral aparecerá como pode ver na imagem abaixo.

![Menu lateral para criar um novo token de autorização](https://res.cloudinary.com/jesstemporal/image/upload/v1694307588/lateral-menu-for-creating-new-authorization-token.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 50%;"}

Para criar novo token basta dar uma descrição e clicar no botão *Create*, no meu caso, pretendo usar esse token para um GitHub Codespaces por isso dei o nome de "Codespaces"*.*

![Menu lateral após a criação do token novo mostrando esse token](https://res.cloudinary.com/jesstemporal/image/upload/v1694307686/heroku-authorization-token-created-successfully.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 50%;"}

Depois de criado, o token será mostrado na tela para que você possa copiá-lo. Ah e não se preocupe, embora eu esteja mostrando esse token aqui (coisa que você nunca deve fazer) ele já não existe mais então ninguém poderá se passar por mim.

Note que, opcionalmente, é possível dar uma “data de validade” ou melhor dizendo, um prazo de tempo para que esse token vença, inclusive é recomendado fazê-lo.

## Usando um token de autorização para fazer o login

Lembre-se de copiar o token, agora para fazer o login basta o token no lugar da sua senha ao fazer login. Rode novamente o comando  `heroku login -i` e passar o seu usuário e o token como pode ser observado 

![Imagem mostrando o login bem sucedido usando o token de autorização](https://res.cloudinary.com/jesstemporal/image/upload/v1694308188/successful-login-with-authorization-token-heroku.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 80%;"}

Agora basta seguir com o fluxo tradicional de uso do Heroku.

## Recapitulando

Neste post, você aprendeu:

- Como fazer login no Heroku via linha de comando com autenticação multifator (MFA) ativada usando um token de autorização.
- Como criar um token de autorização no Heroku.
- Que para fazer login com MFA ativado, é preciso copiar o token gerado e usar ele no lugar da senha ao fazer login via linha de comando.

Agora você pode seguir fazendo login no Heroku pela linha de comando mesmo com MFA ativado!