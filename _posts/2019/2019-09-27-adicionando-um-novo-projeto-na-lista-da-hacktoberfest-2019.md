---
layout: post
title: 'Adicionando um novo projeto na lista da #Hacktoberfest'
date: 2019-09-29T11:00:00.000+00:00
last_modified_at: 2025-09-30T03:00:00.000+00:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png
type: post
bookbanner: true
lang: pt
tags:
- pull request
- open source
- contribuition
- contribuição
- hacktoberfest
- git
- github
- tutorial
comments: true
description: Vou te mostrar o passo a passo pra colocar um repo na lista de projetos
related: true
posts_list:
- dicas-para-fazer-o-seu-pull-request-brilhar
- conheca-o-gitfichas
- resolvendo-conflitos

---

---

Nota da autora: As instruções a seguir foram criadas em 2019, mas a forma de atualizar a lista de projetos se manteve desde então. Então mesmo que você queira atualizar a lista desse ano os passos são os mesmos 😉

Vale salientar que esse ano a lista agora tem uma pasta dedicada chamada `_hacktoberfest_projects_2025/`. O blog post foi atualizado para usar a nova pasta.

---

A lista de projetos brasileiros para contribuir nesse Hacktoberfest de 2025 é gerada automaticamente usando algumas mágicas do Liquid <!--como eu explico nesse outro artigo-->. Então, vamos ver como podemos adicionar um novo projeto nessa lista por meio de um _pull request_?

<center>
<img src="/images/showtime.gif" alt="Gif com o genio do alladin live action falando 'É hora do show!'"/>
<br>
<small><i>É hora do show!</i></small>
</center>

## Materiais

1. Um navegador (eu vou usar o Firefox, mas você pode usar o que preferir);
2. Uma conta no GitHub;
3. Disposição.

_Nota da autora_: existem inúmeras formas de fazer esse _pull request_ (PR), aqui eu vou ensinar um formato usando o navegador para que você possa fazer sua contribuição mesmo que você não tenha conhecimentos profundos de git. Se você já tem prática em contribuir com projetos no GitHub, pula direto para <a href="#revisao">essa seção</a> que tem uma lista de passos menos detalhada do PR que deve ser o suficiente pra você fazer a sua contribuição.

## Abrindo o repositório do PR

Pra começar abra [o repositório desse site aqui](https://github.com/jtemporal/jtemporal.github.io) numa página do seu navegador.

<center>
<img src="/images/repo-jtemporal.png" alt="Imagem mostrando o repositório deste site"/>
<br>
<small><i>Imagem mostrando o repositório deste site</i></small>
</center>

## Copiando o template

No repositório desse site, que você acabou de abrir, navegue até a pasta `.github/` e copie o conteúdo do arquivo `repo-owner+repo-name.md` (eu recomendo que você use o modo Raw do arquivo para fazer essa cópia). Veja o gif a seguir com esse processo:

<center>
<img src="https://raw.githubusercontent.com/jtemporal/jtemporal.github.io/main/images/hacktober_2019/hacktober_2019_passo_2.gif" alt="Gif mostrando o passo a passo descrito acima"/>
</center>

Esse arquivo é o template de informações necessárias para mostrar corretamente um projeto na lista.

## Onde moram os projetos

Ainda no repositório desse site, vá até a pasta `_hacktoberfest_projects_2025/`, lá é onde moram os dados de todos os projetos que estão sendo mostrados na lista de 2025.

Na pasta `_hacktoberfest_projects_2025/` temos muitas pastas, elas existem apenas por questões organizacionais, cada pasta tem o nome de uma linguagem, e o projeto que você quer adicionar deve ser acrescentado na pasta correspondente à linguagem principal do projeto.

## Escolhendo um projeto para adicionar

Agora, numa nova página, abra o repositório que você quer adicionar na lista. Aqui vamos usar de exemplo o [Guia do Cientista de Dados das Galáxias](https://github.com/PizzaDeDados/datascience-pizza) (Guia).

<center>
<img src="/images/repo-guia-github.png" alt="Imagem mostrando o repositório Guia do Cientista de Dados das Galáxias"/>
<br>
<small><i>Imagem mostrando o repositório Guia do Cientista de Dados das Galáxias</i></small>
</center>

## Criando um arquivo para o projeto

O Guia é um projeto agnóstico de linguagem, afinal é apenas um grande conjunto de arquivos em markdown, sendo assim, vamos criar o arquivo do Guia na pasta  `Variados`. Novamente na página do site, navegue até pasta  `_hacktoberfest_projects_2025/` e em seguida entre na pasta `Variados`. Para criar o arquivo clique em `Create new file`, em seguida cole o conteúdo que copiamos do arquivo `repo-owner+repo-name.md` no espaço de conteúdo, dê o nome do arquivo seguindo o padrão `<nome-do-dono-do-repo>+<nome-nome-do-repo>.md`.

## Preenchendo as informações

Agora você pode preencher os dados do projeto no nosso arquivo, só precisamos de quatro informções:

1. O link do repositório (campo `repo`);
2. O link pra imagem de perfil da pessoa dona do repositório (campo `image`);
3. A descrição do repositório (campo `description`);
4. E a linguagem principal do repositório (campo `principal_language`).

Para tudo isso basta copiar essas informações na página do repositório e colar na linha de campo correspondente no nosso arquivo.

<center>
<img src="https://raw.githubusercontent.com/jtemporal/jtemporal.github.io/main/images/hacktober_2019/hacktober_2019_passo_6.gif" alt="Gif mostrando o passo a passo descrito acima. Na parte superior o repositório do Guia de onde copiei as informações e na parte inferior o repositório deste site onde colei as informações"/>
</center>

## Abrindo o PR

Depois de preencher todos os campos necessários presentes no nosso arquivo, basta abrir o PR. Então apenas desça até a área de detalhes do _commit_, escreva uma mensagem descrevendo qual projeto você está adicionando, clique em `Propose new file` e siga para propor o PR clicando em `Create Pull Request`.

<center>
<img src="https://raw.githubusercontent.com/jtemporal/jtemporal.github.io/main/images/hacktober_2019/hacktober_2019_passo_7.gif" alt="Gif mostrando o passo a passo descrito acima"/>
</center>

---

## Possíveis problemas

Existem principalmente dois casos em que esse fluxo que eu descrevi até agora vai precisar de ajustes, mas não precisa se desesperar, eu explico eles abaixo.

### Caso 1: quero adicionar uma linguagem nova

Caso o projeto que você queira adicionar na lista tenha uma linguagem principal diferente daquelas já disponíveis, você deverá criar uma nova pasta. Para fazer isso pela interface do GitHub no navegador, basta você escrever o nome da pasta no campo onde escrevemos o nome do arquivo seguido de uma barra (`/`), ao digitar a barra, o GitHub se encarregará de criar a pasta, veja:

<center>
<img src="https://raw.githubusercontent.com/jtemporal/jtemporal.github.io/main/images/hacktober_2019/hacktober_2019_criando_pasta.gif" alt="Gif mostrando o passo a passo descrito acima num repositorio de teste"/>
</center>

No gif, eu crio a pasta chamada `pasta2` e dentro dela crio o arquivo chamado `meu-arquivo.md`.

### Caso 2: o projeto que eu quero adicionar não tem descrição

Nesse caso é mais fácil de resolver, basta colocar no campo `description` o conteudo `No description` assim como coloquei nesse projeto aqui:

<center>
<img src="https://raw.githubusercontent.com/jtemporal/jtemporal.github.io/main/images/hacktober_2019/hacktober_2019_no_description.gif" alt="Gif mostrando o passo a passo descrito acima num repositorio de teste"/>
</center>

---

<h2 id="revisao">Revisão dos passos</h2>

Então pra aquela galera que só precisa de uma explicação mais concisa aqui vai! São só três passos!

1. Crie um arquivo na pasta correspondente à linguagem principal do projeto que você quer adicionar, use o [template disponível aqui](https://github.com/jtemporal/jtemporal.github.io/blob/main/.github/repo-owner%2Brepo-name.md) e não se esqueça de nomear o arquivo seguindo a convenção `<nome-perfil>+<nome-nome-do-repo>.md`;
2. Preencha os campos com as informações do projeto que você quer adicionar;
3. Abra o PR.

Aguarde a revisão e aprovação!

---

Se você quiser fazer um PR e não tem projeto em mente, [dá uma olhada nessa lista aqui](https://github.com/jtemporal/jtemporal.github.io/labels/hacktoberfest).