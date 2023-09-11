---
layout: post
title: "How to count characters of a property on Notion easily using formulas"
date: 2023-09-10T15:10:00.000+00:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/pro_tip_voc9gk.png
comments: true
type: post
tags:
- Notion
- Notion databases
- Productivity
- english
- en
description: "An introduction to the superpowers of database properties"
lang: en
translator: true
author_note: This blog post was adapted for English by Debora Azevedo.
author_note_link: https://deboraazevedo.github.io/?utm_source=blogdajess
translated: "/contando-caracteres-de-uma-propriedade-no-notion-usando-formulas"
---

In this pro tip I'm going to show you one of the features I've learned and have been using for a while: the use of formulas in the properties of a Notion document.

## What are Notion Formulas?

In addition to the many more traditional types of Notion properties such as an option selector or a list of categories (*tags*), it is also possible to extend properties features using formulas.

![Image showing some properties of a document on Notion](https://res.cloudinary.com/jesstemporal/image/upload/v1668779237/notion/properties-blog-post-notion_z7mluh.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 50%;"}

[Notion's formulas](https://www.notion.so/help/formulas) allow you to make calculations or perform functions based on other properties from that document.

The coolest part of these formulas is that once implemented, the result will be automatically updated if you make any changes to the property used in the formula.

## Why use formulas on Notion?

I recently started using Notion as a task organization system for GitFichas (git study cards) using Databases.

As each card is followed up by a tweet, I also like to draft the tweets in the same interface to be able to pre-schedule the release of new cards. One of the problems of using Notion for this is that it lacks the character count that exists on Twitter interface, that's where Notion's formulas came into my life.

## How to create a formula-based property

I have a property called “Tweet” in the database that I use to keep track of [GitFichas](https://gitfichas.com/?utm_source=blog). It is in this property that I draft the tweet for each new card.

![Image showing the document containing a drafted git study card with the tweet property](https://res.cloudinary.com/jesstemporal/image/upload/v1671234408/notion/document-properties-notion_rihyt1.jpg){: style="display: block; margin-left: auto; margin-right: auto; max-width: 80%;"}

Notice in the image above that the character count is missing so let's add it. First click on “Add a property” to add a new property and choose the type “∑ Formula” from the menu. Then you will see the property edit menu, like this:

![Image showing a property's edit menu](https://res.cloudinary.com/jesstemporal/image/upload/v1671234549/notion/notion-formula-property-edit-menu_fcvz52.jpg){: style="display: block; margin-left: auto; margin-right: auto; max-width: 50%;"}

You can give the property a name, something like “Tweet Size” by editing the field with the default value “Formula”. Then click on “Edit” to see the way of writing the formula itself.

![Formula writing menu](https://res.cloudinary.com/jesstemporal/image/upload/v1671234769/notion/notion-formula-property-function-length_ou0m3i.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 50%;"}

In this menu you can either compose your formula by writing or selecting between functions, constants, operators and properties. To count characters you can write:

```bash
length(prop("Tweet"))
```

Click Save and exit the menu then you will see your new property with the corresponding character count.

![Image showing the document containing the draft of a git study card with the property "tweet” and the formula property](https://res.cloudinary.com/jesstemporal/image/upload/v1671236101/notion/documento-ficha-properties-notion-with-formula_tfznyg.png){: style="display: block; margin-left: auto; margin-right: auto; max-width: 80%;"}

I'll leave it to you to play with changing the text and seeing the resulting value of the formula update automatically. 😉

## Recap

Formulas on Notion are a powerful extensibility feature. You can use formulas in Database documents. Here's a step-by-step guide on how to create a formula in a document:

1. Click on “*Add property*”;
2. Choose the option “*∑ Formula*”;
3. Name your formula in the “*Formula*” field;
4. Click on “*Edit”* to write the formula;
5. Write  `length(prop("Tweet"))` in the field “*Type a formula*” (remember to adjust the field name)*;*
6. Click on “*Save*”.

And that's it, now it's time to have fun editing the corresponding field and see the value change automatically.