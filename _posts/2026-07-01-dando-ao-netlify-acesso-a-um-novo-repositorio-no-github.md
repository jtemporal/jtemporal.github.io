---
bookbanner: true
comments: true
date: 2026-07-01 08:00:00+00:00
description: Quando um repositório novo no GitHub não aparece na Netlify, a correção está nas permissões do app no GitHub—não no dashboard da Netlify.
image: /images/covers/tutorial.webp
lang: pt
layout: post
posts_list:
- fazendo-pull-requests-com-github-codespaces
- login-no-heroku-do-github-codespaces
- 3-dicas-que-voce-deveria-saber-sobre-github-codespaces
related: true
tags:
- geral
- github
- netlify
- tutorial
- portugues
title: Dando ao Netlify acesso a um novo repositório no GitHub
translations:
- lang: en
  url: /giving-netlify-access-to-a-new-github-repo
author_note: false
type: post
---

Migrar meu site para um design novo significou trabalhar em um repo separado por um tempo. Quando as coisas ficaram boas o suficiente para publicar, pensei que era só apontar a Netlify para o repo novo e usar previews em vez de configurar um projeto inteiro do zero. Fácil, né? 😅 Só que o repo não aparecia na lista da Netlify.

## O problema

Quando fui conectar o repo novo ao meu projeto existente, ele não estava na lista de repositórios disponíveis no Netlify.

![Configurações de Build & deploy da Netlify com o menu Manage repository aberto para vincular outro repositório](/images/netlify-github-repo-access/netlify-repo-not-in-list.png)

No fim, percebi que configurei todos os meus projetos anos atrás e esqueci completamente que tinha dado acesso à Netlify a uma lista pequena de repos.

![Tela da Netlify Link your project to a Git repository sem o repositório novo na lista](/images/netlify-github-repo-access/netlify-filtered-repos.png)

Então lá fui eu descobrir isso de novo.

## App da Netlify no GitHub

A configuração que diz quais repos do GitHub a Netlify consegue acessar fica no GitHub, não na Netlify. E obviamente eu tinha esquecido completamente disso. Depois de cinco minutos clicando pelo dashboard da Netlify sem sucesso, desisti e perguntei ao Google:

```
netlify access to all repos
```

A resposta foi: "*To grant Netlify access to all repositories, you need to update the repository permissions in your Git provider settings*". E aí caiu a ficha:

> Preciso atualizar as coisas no GitHub

## A lista de repos que a Netlify pode acessar é definida no GitHub

Para atualizar quais repos a Netlify pode acessar, você precisa encontrar o app da Netlify que você autorizou quando conectou as contas pela primeira vez. Lembra dessa página?

![Tela do GitHub Install Netlify perguntando onde instalar o app](/images/netlify-github-repo-access/netlify-github-authorize.png)

Para chegar ao app da Netlify que você já tem: abra as configurações do GitHub e vá em [**Applications**](https://github.com/settings/installations), na parte de **Integrations**, na barra lateral esquerda. Você deve ver a Netlify listada:

![Página Applications nas configurações do GitHub com a Netlify em Installed GitHub Apps](/images/netlify-github-repo-access/netlify-github-applications.png)

Clique no botão Configure e role até a seção **Repository access**:

![Repository access no GitHub com Only select repositories e três repos listados](/images/netlify-github-repo-access/netlify-repository-access.png)

Agora você deve procurar o repo que precisa. Não esqueça de clicar em Save depois de adicioná-lo.

![Configurações de Repository access no GitHub com o repo new-blog selecionado na busca](/images/netlify-github-repo-access/netlify-save-repo-access.png)

O GitHub vai te mandar de volta para o dashboard da Netlify para você continuar o trabalho.

## Recapitulando

Se um repo não aparece quando você tenta conectá-lo à Netlify, provavelmente a correção não fica na Netlify, fica no GitHub. A Netlify só consegue ver os repos que você permitiu quando conectou o app pela primeira vez. Para atualizar essa lista:

1. Abra as configurações do GitHub.
2. Vá em **Applications**, dentro de **Integrations**.
3. Encontre o app da Netlify e clique em **Configure**.
4. Role até **Repository access**.
5. Adicione o repo que você precisa e salve.

É isso, bora publicar 🚀