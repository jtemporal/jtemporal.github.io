---
bookbanner: true
comments: true
date: 2023-09-07 09:01:00+00:00
description: Usando o Heroku CLI no GitHub Codespaces e fazendo login sem navegador
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
title: Login no Heroku a partir do GitHub Codespaces
translations:
- lang: en
  url: /login-to-heroku-from-github-codespaces
translator: false
type: post
---


Esses dias eu estava usando GitHub CodeSpaces pra fazer o deploy de uma aplicação pro Heroku e me deparei com um problema: Como fazer o login no Heroku dado que eu não tenho acesso a um navegador rodando na mesma máquina em que eu estou usando o terminal?

Se você continuar lendo esse blog post, eu vou te mostrar exatamente como resolver isso.

## IP mismatch ao fazer login

Você acabou de fazer a [instalação do Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli) e chegou a hora de fazer o login. Então você roda a o comando a seguir:

```bash
heroku login
```

Esse comando vai te dar uma página para que você possa abrir no navegador e fazer o login. Normalmente você vê essa página aqui:

![Página de login da heroku](https://res.cloudinary.com/jesstemporal/image/upload/v1694298910/heroku-login-page_sjnn6v.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 60%;"}

Ao clicar em login, você pode entrar na sua conta com o seu método tradicional como usuário e senha por exemplo, e então o seu terminal vai mostrar que você fez login com sucesso.

![Imagem mostrando o login bem sucedido no terminal com ajuda do navegador](https://res.cloudinary.com/jesstemporal/image/upload/v1694298869/heroku-successful-login-in-terminal_re304s.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 60%;"}

Meio mágico como isso acontece né mesmo? Porém se você esta usando o GitHub Codespaces, você não tem um navegador para visualizar essa página de login, e se você tentar abrir aquela mesma página pelo método tradicional de copiar a URL e colocar ela no seu navegador, você vai encontrar uma página dizendo a mensagem de “IP mismatch”.

![Imagem mostrando IP mismatch](https://res.cloudinary.com/jesstemporal/image/upload/v1694297874/ip-mismatch-after-heroku-login_poxcig.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 60%;"}

E agora? O segredo é usar a forma iterativa de login na linha de comando.

## **Fazendo o login no Heroku usando o terminal**

Para casos onde não é possível usar o navegador para ver a familiar tela de login, a solução é usar o login de forma interativa. Basta usar o mesmo comando de antes acompanhado da opção `-i` e então seguir as instruções que vão aparecer.

```bash
heroku login -i
```

Após rodar o comando acima, você vai ver o pedido usuário e senha como pode ser observado na imagem abaixo:

![Imagem mostrando o pedido de usuário e senha](https://res.cloudinary.com/jesstemporal/image/upload/v1694299186/heroku-login-cli-credentials-requested_jfes5u.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 60%;"}

Depois de colocar os seus dados e efetuar o seu login, você poderá seguir com o seu uso do Heroku via CLI.

## Recapitulando

Neste post, você aprendeu:

- Como fazer o login no Heroku a partir do GitHub Codespaces.
- Como resolver o erro de "IP mismatch" usando a opção `-i` ao fazer login no Heroku através da linha de comando.

Espero que este post te ajude a fazer login no Heroku dentro do GitHub Codespaces.