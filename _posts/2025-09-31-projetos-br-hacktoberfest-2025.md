---
title: 'Projetos Brasileiros para contribuir nesse #Hacktoberfest 2025'
layout: post
date: 2025-09-31T05:00:00.000+00:00
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1640370040/covers/variados_aanizj.png"
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
description: 'Versão 2025 da lista de projetos brasileiros para fazer pull requests na #Hacktoberfest'
related: true
posts_list:
- adicionando-um-novo-projeto-na-lista-da-hacktoberfest-2019
- resolvendo-conflitos
- 5-dicas-para-fazer-o-seu-pull-request-brilhar

---

O mês da festa que celebra open source no mundo todo está chegando e a #Hacktoberfest está chegando.

Por aqui você confere desde 2017 essa lista curada especialmente para te ajudar a encontrar projetos brasileiros para contribuir!

## Regras para entrar nessa lista

As regras para adicionar projetos nessa lista:

1. Ser um projeto criado/desenvolvido/mantido por pessoas brasileiras;
2. Precisa ser um **projeto**, não pode ser uma organização, caso tenha mais de um projeto da organização adicione uma entrada por projeto;
3. Ter pelo menos uma *issue* aberta;
4. Ser um repositório válido, ou seja, não arquivado.

## Avisos para 2025

## Prêmios

Mais uma vez a Hacktoberfest irá premiar seus participantes com prêmios virtuais no formato de badges Holopin. Você consegue ver [as minhas aqui](https://www.holopin.io/@jesstemporal#badges) por exemplo.

Além disso, esse ano pessoas podem fazer de 4 a 6 pull requests, quem completar 6 PRs vai ganhar uma costumização a mais na sua badge.

Camisetas: também teremos camisetas porém serão apenas 10.000 camisetas e para pessoas que completarem 6 PRs em projetos dignos. Também serão plantadas 10.000 árvores juntamente com as camisetas e uma badge correspondente.

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

{% assign grouped = site.hacktoberfest_projects_2025 | group_by: "principal_language" %}

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