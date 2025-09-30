---
title: 'Projetos Brasileiros para fazer pull requests nesse #Hacktoberfest o retorno'
layout: post
date: 2019-09-25T09:00:00.000+00:00
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1640370040/covers/variados_aanizj.png"
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
description: 'Versão 2019 da lista de projetos brasileiros para contribuir no #Hacktoberfest'

---

[Edição atual da lista disponível aqui](https://jtemporal.com/projetos-br-hacktoberfest-2025/).

---

Depois dos sucessos das listas [de 2017](https://medium.com/nossa-coletividad/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-4dc9b9b576c0) e [de 2018](https://medium.com/@jessicatemporal/projetos-brasileiros-para-contribuir-nesse-hacktoberfest-vers%C3%A3o-2018-4925959b9411), esse é o terceiro ano que estou fazendo a lista/curadoria de projetos brasileiros para contribuir no #Hacktoberfest.

Então a pedidos aqui vai! Uma lista toda repleta de projetos pra você contribuir nesse mês de Outubro!

Novamente temos regrinhas:

1. Ser um projeto criado/desenvolvido/mantido por brasileiras(os);
2. Ter pelo menos uma _issue_ aberta.

## Avisos para 2019

Pra começar, diferentemente do ano passado, Essa lista agora não está mais no Medium! Isso quer dizer que para ajudar ela a crescer você pode mandar o link do repositório ali nos comentários que eu coloco o projeto na lista oooouuu você pode aproveitar o espírito de contribuição e mandar um PR para essa página! O artigo [com as instruções de como adicionar projetos tá aqui](https://jtemporal.com/adicionando-um-novo-projeto-na-lista-da-hacktoberfest-2019/). Todo mundo ganha <3.

Os projetos continuam separados pela linguagem principal pra facilitar as buscas pra quem lê e também em ordem alfabética pela linguagem. 😉

Happy Hacking!

---

{% assign grouped = site.hacktoberfest_projects | group_by: "principal_language" %}
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
