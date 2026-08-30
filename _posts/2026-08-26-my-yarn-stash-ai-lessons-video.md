---
layout: post
type: video
title: "What building My Yarn Stash taught me about working with AI"
date: 2026-08-26 00:00:00 -0300
last_modified_at: 2026-08-26
hidden: true
lang: en
image: /images/covers/miscellaneous.webp
tags:
- english
- ai
- miscellaneous
description: "AI deleted my database, and I let it. Here's what building a real app taught me about guardrails, context, taste, and judgment."
related: true
posts_list:
- ai-powered-development-workflow
- automating-css-versioning-and-staging-through-github-actions
- the-writer-and-the-bot-fairy-tale
---

AI told me it was going to delete my database, and I let it. Every little bit of my data, gone with a single command. So I'm going to share what building a real application with AI taught me as a software engineer.

I built [My Yarn Stash](https://myyarnstash.app): a real app with real users, auth, a database, billing, and all the unglamorous stuff that shows up when you want software to last. Most of it happened during my winter break last December, with a little more in January.

Fair warning: AI tooling has evolved a lot since then, and my workflow is different now. Focus on the lessons, not the tool names. Those lessons are what make you a better software engineer.

I wanted the final product, of course. I'm also one of the users. But I wanted to answer one question: **what actually changes when you use AI as a long-term collaborator**, across planning, design, building, and shipping?

<center>
<iframe style="max-width:100%; width:560px; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/5MX3sMo8H-Q" title="What building My Yarn Stash taught me about working with AI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

## The database

I asked the AI agent to make a schema change. It suggested removing the file and recreating it with a new schema. I said yes.

All of the test data I had built to stress-test edge cases, hours of manual entries, deleted in one command because AI treated my database like a throwaway file.

Technically, AI didn't do anything wrong. It did exactly what made sense if you assume a database is disposable. The problem was me. I hadn't put any guardrails in place.

**If you don't watch anything else, keep this: put guardrails in your AI workflow.** In one line: AI amplified my clarity and punished me for ambiguity.

After I calmed down and recreated the database, I did what any developer should do in the first place. I put rules in my Copilot instructions: never delete a database, do migrations instead, and back up before anything destructive.

Ever since then, none of my AI assistants have tried deleting databases. The AI didn't change its behavior. I changed mine. Vague instructions give you unpredictable results, and that has shaped how I work with AI ever since.

## Context boundaries

I got more deliberate about context. Each request got its own chat. Billing in one thread, AI extraction in another, launch strategy in its own chat.

It wasn't about being tidy. It was context management. When everything lives in one single chat, AI gets slow, confused, hallucinates, and starts compacting the context window. That's a waste of your time and your tokens.

Separate chats had a side effect I wasn't expecting: they made AI a better thinking partner. Every important decision went into a markdown file in my own words. Sometimes I asked AI to verify it matched what we'd agreed. That lived next to the code as documentation. It forced me to understand how my application worked, and it gave both of us a source of reference.

## Decisions I already owned

Some of My Yarn Stash I had strong opinions about. Language and framework for the backend. Auth0 for auth, FastAPI, minimal JavaScript and CSS. Those weren't up for debate, so I told AI up front. Handing those to AI would have added noise.

For the parts I didn't have strong opinions on, like which payment gateway to use or where to deploy, I still didn't ask "what should I use?" That's too vague. I gave it my constraints. The conversation became trade-offs, the way it would with a colleague.

AI didn't say "you should use this." It helped me think through the decision, understand the pros and cons, and come up with something I felt confident about.

## Different tools, different jobs

Planning conversations usually happened with ChatGPT on my phone, over coffee, before I even opened my computer. By the time I sat down, I had already gone through the hard parts.

The boring, well-defined tasks went to GitHub Copilot as issues, so I could focus on what actually needed me. For the ones I handled myself, I switched models on purpose: a lighter one for quick interactions, a heavier one when precision mattered more than speed and money.

Looking back at the database deletion, I think it happened because I got comfortable and stopped pushing back on suggestions. Picking a good model for a given task is still a skill. Understanding the decision and applying constraints matter more. That judgment comes from testing different approaches. There is no documentation if you're building something new, and AI doesn't remove your responsibility. It makes it matter more.

## Design still needs taste

I'm not a designer. CSS and JavaScript are not my strong suit. I'm a Python person. I built everything functional first, then tried to make it pretty once the foundation was solid.

To improve that bare-bones design, I used Stitch by Google, which turns descriptions into UI. For the first pass I dropped the app URL and said "give me a design." It made something pretty. It was not what I wanted.

So I went back to my planning partner and asked it to write a document: tone, color, the vibe I wanted to convey. Then I went back to Stitch with screenshots, that branding document, and the same specific constraints. That worked way better.

That's my definition of taste: the tools work better once you define what you want. Even if you don't have the words for it, you can ask AI to help you find the words.

## What I'm carrying forward

- AI doesn't replace judgment. It makes your judgment matter more.
- Context boundaries, even separate chats, keep the work focused.
- Knowing which model to use is a skill you learn by trying different ones.
- Design still needs taste. "Make it pretty" is too generic and gives you generic answers. "Make it cozy and trustworthy," with real examples you like, gives you something you can actually judge and improve.

If you're trying to find your footing with AI, build something real. Step away from the tutorials and the pre-made prompts. Build something with users, data you can't lose, and decisions that pile up over time. You will hit the boundaries yourself, and those difficulties will teach you more than anything else.

I wrote this up in more depth here: [AI-powered software development flow: lessons from shipping My Yarn Stash](/ai-powered-development-workflow/).

If this helped, tell me in the comments: what's the scariest thing an AI tool did to your codebase?
