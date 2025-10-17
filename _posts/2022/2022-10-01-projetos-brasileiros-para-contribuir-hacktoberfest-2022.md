---
title: 'Projetos Brasileiros para contribuir nesse #Hacktoberfest 2022'
layout: post
date: 2022-10-01T05:00:00.000+00:00
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1760705452/covers/hacktoberfest.jpg"
type: post
bookbanner: true
lang: pt
tags:
- pull request
- pull requests
- contribuitions
- open-source
- hacktoberfest
- GitHub
- Git
- open source
- português
comments: true
bookbanner: true
description: 'Versão 2022 da lista de projetos brasileiros para fazer pull requests no #Hacktoberfest'
related: true
posts_list:
- adicionando-um-novo-projeto-na-lista-da-hacktoberfest-2019
- resolvendo-conflitos
- 5-dicas-para-fazer-o-seu-pull-request-brilhar

---
Parece que esse ano passou num passe de mágica, Outubro já está aqui de novo e mais uma vez o evento mais esperado mundo *open source*: #Hacktoberfest.

Desde 2017 essa lista aqui acontece para te ajudar a fazer os seus pull requests/merge requests e participar dessa festa que dura um mes todo. Então aqui vai! Uma lista toda repleta de projetos brazileiros pra você contribuir nesse mês de Outubro!

## Edições anteriores

[2017](https://medium.com/nossa-coletividad/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-4dc9b9b576c0), [2018](https://medium.com/@jessicatemporal/projetos-brasileiros-para-contribuir-nesse-hacktoberfest-vers%C3%A3o-2018-4925959b9411), [2019](https://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-o-retorno/), [2020](https://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-2020/), [2021](https://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-2021/).

## Regras para entrar nessa lista

As regrinhas do ano passado se repetem:

1. Ser um projeto criado/desenvolvido/mantido por brasileiras(os);
2. Precisa ser um **projeto**, não pode ser uma organização, caso tenha mais de um projeto da organização precisa ser um PR por projeto com uma entrada por projeto
3. Ter pelo menos uma _issue_ aberta.

## Avisos para 2022

Esse ano vamos manter a mesma forma de aumentar essa lista com mais projetos, como sempre, apenas abrindo um PR com o projeto. [As instruções de como adicionar projetos tão aqui](https://jtemporal.com/adicionando-um-novo-projeto-na-lista-da-hacktoberfest-2019/). Todo mundo segue apenas ganhando <3.

Os projetos continuam separados pela linguagem principal pra facilitar as buscas pra quem lê e também em ordem alfabética pela linguagem. 😉

Assim como em 2021, qualidade é o mais importante então se liga que dois PRs inválidos resultará em **desqualificação por período indeterminado**!

Para um PR ser considerado inválido, ele deve ser marcado com as _tags_ **spam** ou **invalid**. Então é bom tentar fazer PRs de qualidade!

Relembrando que para tornar seu PR válido para a hacktoberfest você precisa ter algumas coisas. PRs apenas contarão se:

1. O PR precisa ser aberto em Outubro (entre os dias 1 e 31);
2. O PR preicisa acontecer num projeto que tem o tópico `hacktoberfest` **ou** ser marcado com o rótulo (*label*) `hacktoberfest-accepted` por um mantenedor **ou** ser aceito (*merged*) **ou** ser aprovado pelo processo de revisão (*review*).

Mais informações no [site oficial (em inglês)](https://hacktoberfest.com).

Por último, nesse outro artigo tem [5 Dicas Para Fazer o Seu Pull Request Brilhar ✨](https://jtemporal.com/5-dicas-para-fazer-o-seu-pull-request-brilhar/) e pode ser útil.

Happy Hacking! 🎉

---

{% assign grouped = site.hacktoberfest_projects_2022 | group_by: "principal_language" %}
{% for group in grouped %}
<h2> {{ group.name }} </h2>
{% for item in group.items %}
<div class="github-project-share">
<a style="text-decoration: none;" href="{{ item.repo }}">
{% assign project_info = item.relative_path |  remove: ".md" | remove: ".yml" | split: "/"  %}
{% assign project = project_info[2] | replace: "+", "/" %}
<div class="github-project-share-card ">
<img src="{{ item.image }}" alt="" />
<h4>{{ project }}</h4>
<br/>
<p>{{ item.description }}</p><br>
<p><small>github.com</small></p>
</div>
</a>
</div>
{%endfor%}

---

{%endfor%}