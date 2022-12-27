---
layout: post
date: 2021-10-05T22:15:06.000-03:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640370040/covers/variados_aanizj.png
comments: true
lang: pt
title: 5 Dicas Para Fazer o Seu Pull Request Brilhar ✨
description: Dicas de ouro para fazer uma contribuição open-source de sucesso
type: post
tags:
- pull request
- git
- open source
- open-source
- contribuição
- hacktoberfest2021
- hacktoberfest
- portugues
- português
related: true
posts_list:
- criando-pastas-vazias-no-github-com-o-gitkeep
- resolvendo-conflitos
- conheca-o-gitfichas
translated: "/5-tips-to-make-your-pull-request-shine"
translator: false
author_note: "You can read this article in English"
author_note_link: "https://jtemporal.com/5-tips-to-make-your-pull-request-shine"

---
Outubro é mês de hacktoberfest e esse deve ser o mês em que nós nos esforçamos mais para contribuir com _open-source_ e ajudar a mais pessoas contribuírem. Então nesse artigo você vai aprender cinco 5 dicas de ouro para fazer o seu _pull request_ ✨ brilhar ✨. Vamos lá!

## Siga o guia de contribuição do projeto

A maioria dos projetos _open-source_ tem um conjunto de regras ou padrões que você deve seguir para contribuir, coisas como manter cobertura de testes, criar _branches_ seguindo um certo padrão de nomeação, qual a língua oficial do projeto e de seus _commits_ e até mesmo regras sobre intervalo de tempo com inatividade no qual passado esse períodos o _pull requests_ sem atividade será fechado.

Seguir o guia do projeto vai garantir um bom caminho para ter um _pull request_ bem sucedido logo do começo, esse guia é geralmente encontrado no arquivo `CONTRIBUTING.md` nos projetos do GitHub mas por vezes as regras também podem estar descritas no arquivo `README.md`.

Agora você pode estar se perguntando _“O que eu faço se o projeto não tiver um guia de contribuição?”_ e essa situação é bem comum. Então caso não exista um guia de contribuição o que eu faço geralmente é olhar alguns commits do histórico de commits para ver como eles são feitos e outros pull requests que foram feitos antes do meu para tentar seguir o mesmo formato.

## Use branches no seu fork

Ao fazer um _fork_ de um projeto para contribuir, é muito comum cairmos no erro de fazer alterações no _branch_ principal e submeter o _pull request_.

Evite.

Por mais que você só planeje fazer apenas um _pull request_, pode ser que a inspiração role e você queira fazer um segundo _pull request_ e aí você já comprometeu o seu branch principal com alterações do primeiro _pull request_ e, qualquer contribuição a partir desse ponto vai conter as alterações do primeiro _pull request_.

Então o ideal é manter o branch principal limpo de alterações até para que você possa mantê-lo atualizado com o _branch_ principal do repositório de origem. Então crie o bom hábito de separar suas contribuições em branches novas.

## Relacione o pull request com uma issue

Existem hoje 9 palavras-chave para relacionar o seu _pull request_ com uma _issue_ (se ela existir). Isso mesmo, nove! Usar essas palavras ao fazer o _pull request_ vai facilitar a vida de quem mantém o projeto, pois essas palavras fecham a issue correspondente ao rolar o merge do _pull request_, e também vai ajudar pessoas que estejam interessadas em contribuir pois elas podem ver o _pull request_ em andamento evitando que duas pessoas façam trabalho duplicado.

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

1. No **título** do _pull request_;
2. Ou na **descrição** do _pull request_.

Você deve usá-las da seguinte forma para resolver uma _issue_:

```txt
fixes #42
```

Ou da forma a seguir para resolver mais de um _issue_:

```txt
fixes #42, fixes #44
```

Caso o seu _pull request_, não resolva uma issue por completo, você ainda deve mencionar o número da issue que tem relação com o seu _pull request_ pois isso vai fazer que o seu _pull request_ apareça na issue como uma menção, mas nesse caso não deve usar as palavras acima.

Como uma pessoa que mantem alguns projetos, me faz muito feliz ver essas palavras sendo usadas nos _pull requests_. Você pode ler mais sobre isso [nessa documentação do próprio GitHub sobre o assunto](https://docs.github.com/pt/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#about-linked-issues-and-pull-requests0).

## Dê contexto para quem vai revisar

Muitas vezes as pessoas que mantêm projetos, assim como as pessoas que contribuem com projetos, fazem isso no seu tempo livre, ou seja, esse não é o trabalho delas. Então é nosso dever facilitar a contribuição, tanto ao escrever issues bem descritas se você estiver relatando um _bug_ por exemplo, como descrever bem o _pull request_ que você está fazendo. Vamos focar no _pull request_ que é o foco deste artigo.

Hoje em dia é muito comum encontrar projetos que tenham um [template/modelo de _pull request_](https://docs.github.com/pt/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository), esse template busca padronizar as perguntas necessárias para a revisão daquele _pull request_ e a geração de _changelogs_. Então foque no que você precisa preencher e lembre-se que é possível usar o _markdown_ para estilizar o conteúdo da descrição e facilitar a leitura das pessoas que revisam as contribuições.

Embora hoje em dia vários repositórios tenham templates de _pull request_, pode ser que você está contribuindo para um projeto que não tem um desses, então aqui vai um lista de tópicos para você incluir na descrição do seu _pull request:_

1. **Qual o objetivo desse pull request?**

   Aqui coloque aquela informação de qual _issue_ (se ela existir) se relaciona com esse _pull request_.
2. **Quais alterações foram feitas para atingir esse objetivo?**

   Alterações de código, documentação, mudanças de fluxo de dados e afins devem vir aqui. Use os seus _commits_ para relembrar o que você mudou.
3. **Como testar se essas mudanças realmente funcionam?**

   Aqui pode usar prints se for algo visual, por exemplo, ou exemplos de uso do pedaço de código novo.
4. **Possíveis melhorias e outras anotações**

   Uma lista de coisas que poderiam ser melhoradas, mas que não são o foco do _pull request_, ou que você não sabe como resolver e precisa de ajuda.

Esses quatro pontos, vão garantir que a pessoa revisando vai ter todas informações que ela precisa para revisar o _pull request_ no momento que a revisão for acontecer.

## Aguarde as sugestões

Depois de fazer a sua contribuição a pessoa revisora pode ter sugestões de melhoria ou ajustes necessários para garantir a padronização da base de código. Essas sugestões podem pedir que você mude parte de código, implemente testes ou ajuste a documentação.

De um modo geral elas vêm para ajudar o seu _pull request_ melhorar e para que a sua contribuição seja aceita. O processo de revisão é sempre um momento de aprendizado então é importante ter a mente aberta para receber sugestões e caso necessário acatá-las.

## Recapitulando

Contribuir com _open-source_ é ótimo pois pode ajudar todas as pessoas que usam aquele projeto. E durante o hacktoberfest, por exemplo, é um ótimo momento para exercitar essa habilidade, então não deixe de seguir as dicas que você viu aqui para ter ainda mais sucesso no seus _pull requests._

Ah e último recadinho, se você estiver procurando por [projetos brasileiros para contribuir aqui está a lista de 2021](https://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-2021/).