---
layout: post
title: "Contando carácteres de uma propriedade no Notion usando fórmulas"
date: 2023-09-10T09:01:00.000+00:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png
comments: true
type: post
lang: pt
tags:
- Notion
- Notion Databases
- portugues
description: "Uma introdução sobre os superpoderes das propriedades das Databases"
translator: false
author_note_link: "https://jtemporal.com/2023-09-10-counting-characters-of-a-notion-property-using-formulas"
author_note: "You can read this blog post in English"
translated: "/counting-characters-of-a-notion-property-using-formulas"
---

Nessa colinha eu vou te mostrar umas das funcionalidades que acabei de aprender: o uso de fórmulas nas propriedades de um documento do Notion.

## O que são fórmulas no Notion

Além dos diversos tipos mais tradicionais de propriedades do Notion como um seletor de opções ou uma lista de categorias (*tags*), também possível extender as funcionalidades das propriedades usando fórmulas.

![Imagem mostrando propriedades de um documento no Notion](https://res.cloudinary.com/jesstemporal/image/upload/v1668779237/notion/properties-blog-post-notion_z7mluh.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 50%;"}

[As fórmulas do Notion](https://www.notion.so/help/formulas) te permite fazer cálculos ou executar funções com base em outras propriedades daquele documento.

A parte mais legal dessas fórmulas é que depois de implementada, o resultado será automaticamente atualizado caso você faça alguma alteração na propriedade usada na fórmula.

## Para que usar fórmulas no Notion

Eu passei a usar o Notion a algum tempo atras como um sistema de organização de tarefas para o GitFichas com o uso das Databases.

Como cada ficha é acompanhada de um tweet eu gosto também de rascunhar os tweets na mesma interface para conseguir deixar a divulgação de fichas novas pré-agendadas. Um dos problemas de usar o Notion para isso, é que falta a contagem de carácteres presente na  interface do Twitter, é aí que as fórmulas do Notion entraram na minha vida.

## Como criar uma propriedade baseada em fórmula

Eu tenho uma propriedade chamada *“Tweet”* na base de dados que uso para fazer o acompanhamento do [GitFichas](https://gitfichas.com/?utm_source=blog). É nessa propriedade que rascunho o tweet de cada nova ficha.

![Imagem mostrando o documento contendo o rascunho de uma gitficha com a propriedade tweet](https://res.cloudinary.com/jesstemporal/image/upload/v1671234408/notion/document-properties-notion_rihyt1.jpg){: style="display: block; margin-left: auto; margin-right: auto; max-width: 80%;"}

Note na imagem acima que falta a contagem de carácteres então vamos adicioná-la. Primeiro clique em “*Add a property*” para adicionar uma propriedade nova e escolha o tipo “*∑ Formula*” no menu. Então você verá o menu de edição da propriedade, assim:

![Imagem mostrando o menu de edição de uma propriedade](https://res.cloudinary.com/jesstemporal/image/upload/v1671234549/notion/notion-formula-property-edit-menu_fcvz52.jpg){: style="display: block; margin-left: auto; margin-right: auto; max-width: 50%;"}

Você pode dar um nome pra a propriedade, algo como *“Tweet Size”* editando o campo com o valor padrão “*Formula*”. Depois clique em “*Edit*” para ver o modo de escrita da fórmula em si.

![Menu de escrita da fórmula](https://res.cloudinary.com/jesstemporal/image/upload/v1671234769/notion/notion-formula-property-function-length_ou0m3i.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 50%;"}

Nesse menu você pode tanto compor a sua fórmula escrevendo quanto selecionando entre funções, constantes, operadores e propriedades. Para fazer a contagem de carácteres você pode escrever:

```bash
length(prop("Tweet"))
```

Clique em Save e saia do menu então você verá a sua nova propriedade com a contagem de carácteres correspondente.

![Imagem mostrando o documento contendo o rascunho de uma gitficha com a propriedade tweet e a propriedade de fórmula](https://res.cloudinary.com/jesstemporal/image/upload/v1671236101/notion/documento-ficha-properties-notion-with-formula_tfznyg.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 80%;"}

Eu vou deixar para você brincar de alterar o texto e ver o valor resultante da fórmula atualizar automaticamente. 😉

## Recapitulando

Fórmulas no Notion são uma funcionalidade poderosa de extensibilidade. Você pode usar fórmulas em documentos das Databases. Aqui está o passo-a-passo de como criar uma fórmula em um documento:

1. Clique em “*Add property*”;
2. Escolha a opção “*∑ Formula*”;
3. Dê um nome para sua fórmula no campo “*Formula*”;
4. Clique em “*Edit”* para escrever a fórmula;
5. Escreva `length(prop("Tweet"))` no campo “*Type a formula*” (lembre-se de ajustar o nome do campo)*;*
6. Clique em “*Save*”.

E pronto, agora é se divertir editando o campo corresponde e ver o valor alterar automaticamente.