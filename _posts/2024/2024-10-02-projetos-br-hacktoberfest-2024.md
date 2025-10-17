---
title: 'Projetos Brasileiros para contribuir nesse #Hacktoberfest 2024'
layout: post
date: 2024-10-02T05:00:00.000+00:00
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1760702982/covers/opensource_p4btht.png"
type: post
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
description: 'Versão 2024 da lista de projetos brasileiros para fazer pull requests no #Hacktoberfest'
related: true
posts_list:
- adicionando-um-novo-projeto-na-lista-da-hacktoberfest-2019
- resolvendo-conflitos
- 5-dicas-para-fazer-o-seu-pull-request-brilhar

---

[Edição atual da lista disponível aqui](https://jtemporal.com/projetos-br-hacktoberfest-2025/).

---

Ontem começou Outubro e mais uma vez o mês inteirinho de celebração de open source! A festa que todo entusiasta e pessoas mantenedoras de open source espera está aqui é hora de  #Hacktoberfest.

Por aqui você confere desde 2017 essa lista curada especialmente para te ajudar a encontrar projetos brasileiros para contribuir!

## Regras para entrar nessa lista

As regras para adicionar projetos nessa lista:

1. Ser um projeto criado/desenvolvido/mantido por pessoas brasileiras;
2. Precisa ser um **projeto**, não pode ser uma organização, caso tenha mais de um projeto da organização precisa ser um PR por projeto com uma entrada por projeto;
3. Ter pelo menos uma *issue* aberta;
4. Ser um repositório válido, ou seja, não arquivado.

## Avisos para 2024

## Prêmios

Esse ano a Hacktoberfest **não** terá camiseta, se o seu objetivo é ganhar camisetas esse evento não é para você. Os prêmios serão virtuais no formato de badges Holopin.

## Adicionando projetos nessa lista

Esse ano vamos manter a mesma forma de aumentar essa lista com mais projetos, como sempre, apenas abrindo um PR com o projeto. [As instruções de como adicionar projetos tão aqui](https://jtemporal.com/adicionando-um-novo-projeto-na-lista-da-hacktoberfest-2019/). Todo mundo segue ganhando <3.

Os projetos continuam separados pela linguagem principal pra facilitar as buscas pra quem lê e também em ordem alfabética pela linguagem. 😉

## Qualidade > Quantidade

Assim como em anos anteriores, qualidade é o mais importante então se liga que dois PRs inválidos resultará em **desqualificação por período indeterminado**!

Para um PR ser considerado inválido, ele deve ser marcado com as *tags* **spam** ou **invalid**. Então é bom tentar fazer PRs de qualidade!

Relembrando que para tornar seu PR válido para a hacktoberfest você precisa ter algumas coisas. PRs apenas contarão se:

1. O PR precisa ser aberto em Outubro (entre os dias 1 e 31);
2. O PR precisa acontecer num projeto que tem o tópico `hacktoberfest` **ou** ser marcado com o rótulo (*label*) `hacktoberfest-accepted` por um mantenedor **ou** ser aceito (*merged*) **ou** ser aprovado pelo processo de revisão (*review*).

## Mais informações

Mais informações no [site oficial (em inglês)](https://hacktoberfest.com/).

Meu livro [“O grande Microlivro de Git” está com desconto 30% na Gumroad](https://jessicatemporal.gumroad.com/l/microlivrodegit/hacktoberfest) tanto em português quanto inglês. Se você preferir, [ele também está disponível na Amazon (sem desconto)](https://amzn.to/4erFcLU).

Por último, nesse outro artigo tem [5 Dicas Para Fazer o Seu Pull Request Brilhar ✨](https://jtemporal.com/5-dicas-para-fazer-o-seu-pull-request-brilhar/) e pode ser útil.

Happy Hacking! 🎉

---

{% assign grouped = site.hacktoberfest_projects_2024 | group_by: "principal_language" %}

## Acesso rápido por linguagem

<ul>
{% for group in grouped %}
  {% if group.name == "Variados" %}
    <li><a href="#{{ group.name }}">{{ group.name }}</a> - Repositórios sem linguagem específica ex.: blogs, documentações e dicionários</li>
  {% else %}
    <li><a href="#{{ group.name }}">{{ group.name }}</a></li>
  {% endif %}
{% endfor %}
</ul>

---

{% for group in grouped %}
<h2 id="{{ group.name }}">{{ group.name }}</h2>
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