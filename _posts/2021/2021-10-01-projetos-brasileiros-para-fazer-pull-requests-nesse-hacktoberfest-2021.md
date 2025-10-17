---
title: 'Projetos Brasileiros para fazer pull requests nesse #Hacktoberfest 2021'
layout: post
date: 2021-10-01T09:00:00.000+00:00
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1760702982/covers/opensource_p4btht.png"
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
description: 'Versão 2021 da lista de projetos brasileiros para contribuir no #Hacktoberfest'

---

[Edição atual da lista disponível aqui](https://jtemporal.com/projetos-br-hacktoberfest-2025/).

---

Outubro chegou e com ele chegou o #Hacktoberfest, todo ano tenho feito (às vezes com ajuda das amizades valeu demais [@anaschwendler](https://twitter.com/anaschwendler)) a lista para que você possa contribuir durante o #Hacktoberfest.

E é chegado o momento da lista para esse ano! Então aqui vai! Uma lista toda repleta de projetos pra você contribuir nesse mês de Outubro!

## Edições anteriores

* [2017](https://medium.com/nossa-coletividad/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-4dc9b9b576c0)
* [2018](https://medium.com/@jessicatemporal/projetos-brasileiros-para-contribuir-nesse-hacktoberfest-vers%C3%A3o-2018-4925959b9411)
* [2019](https://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-o-retorno/)
* [2020](https://jtemporal.com/projetos-brasileiros-para-fazer-pull-requests-nesse-hacktoberfest-2020/)

## Regras para entrar nessa lista

As regrinhas do ano passado se repetem:

1. Ser um projeto criado/desenvolvido/mantido por brasileiras(os);
2. Precisa ser um **projeto**, não pode ser uma organização, caso tenha mais de um projeto da organização precisa ser um PR por projeto com uma entrada por projeto
3. Ter pelo menos uma _issue_ aberta.

## Avisos para 2021

Assim como 2020 não foi fácil, 2021 também trouxe seus desafios, então é sempre bom lembrar que para apenas contribuir com o que pode! 😉

Esse ano vamos manter a mesma forma de aumentar essa lista com mais projetos, como sempre, apenas abrindo um PR com o projeto. [As instruções de como adicionar projetos tão aqui](https://jtemporal.com/adicionando-um-novo-projeto-na-lista-da-hacktoberfest-2019/). Todo mundo segue apenas ganhando <3.

Os projetos continuam separados pela linguagem principal pra facilitar as buscas pra quem lê e também em ordem alfabética pela linguagem. 😉

_ATUALIZAÇÃO IMPORTANTE:_

<center>
<img src="https://media.giphy.com/media/26CaM3Ei5kTjWLg9a/giphy.gif" alt="Gif com a Dua Lipa no vídeo de sua música New Rules'"/>
<br>
<small><i>"Acorda menina! Olha as novas regras! New Rules!" - Ana Maria Braga</i></small>
</center>

O mais importante desse ano é que se você submeter dois PRs inválidos você sofrerá uma **desqualificação por período indeterminado**!

Para um PR ser considerado inválido, ele deve ser marcado com as _tags_ **spam** ou **invalid**. Então é bom tentar fazer PRs de qualidade!

Relembrando que para tornar seu PR válido para a hacktoberfest você precisa ter algumas coisas. PRs apenas contarão se:

1. O repositório onde o PR foi aberto tem um tópico chamado `hacktoberfest` (esse site aqui tem esse tópico então qualquer PR não invalido já vai contar para o evento 😉)

<center>
<img src="https://user-images.githubusercontent.com/4131432/94991921-abbd5280-0586-11eb-98a7-5e0c976aeebf.png" alt="Imagem de repositório com o tópico hacktoberfest"/>
<br>
</center>

1. O PR foi aberto em Outubro
2. OU o PR é adicionado (merged) ao projeto OU está com o rótulo (label) `hacktoberfest-accepted` por um mantenedor OU o PR foi aprovado.

Mais informações no [site oficial (em inglês)](https://hacktoberfest.digitalocean.com).

Por último, nesse outro artigo tem [5 Dicas Para Fazer o Seu Pull Request Brilhar ✨](https://jtemporal.com/5-dicas-para-fazer-o-seu-pull-request-brilhar/) e pode ser útil.

Happy Hacking! 🎉

---

{% assign grouped = site.hacktoberfest_projects_2021 | group_by: "principal_language" %}
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