---
layout: post
type: video
title: "The most productive Saturday I've had all year thanks to Grok Bot"
date: 2026-09-06 00:00:00 -0300
hidden: true
lang: en
image: /images/covers/ai.webp
tags:
- english
- ai
description: "I built a six-bot Grok Bot squad on Friday night and spent Saturday shipping. Here's the team, what we closed, and how I kept the quota from vanishing."
related: true
posts_list:
- i-built-my-ai-squad-in-grok-bot
- starting-a-project-from-zero-with-ai
- ai-powered-development-workflow
---

<center>
<iframe style="max-width:100%; width:560px; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/jtUmb2atIgM" title="The most productive Saturday I've had all year thanks to Grok Bot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

I don't think I've been this excited about a new AI tool in a few months, and that's thanks to the most productive Saturday I've had since the beginning of the year.

Let's talk about Grok Bot. If you know me, you probably know it takes me a few days, even a few weeks, before I try the new model or the new tool of the moment.

Last Friday night I installed Grok Bot, thanks to [this video by Mo](https://x.com/atmoio/status/2092286808440676733). Long story short, it proved I could finally automate a bunch of the things I do without having to think too hard about it.

The time I spend building my own side projects is limited to the weekend, and the weekend only has two days. I still need to fit in all of my cross-stitching, knitting, crocheting, playing video games, and the other hobbies I have going around my house.

Anything that helps me ship faster, I'll take. I tend to be resistant to trying new things, especially because time is limited. If I have a well-defined workflow that is working, I try not to mess with it. But Mo's video sparked the idea that maybe this could be it: the thing that would make me ship faster and still have time to enjoy all of the hobbies. That sounded like a good trade-off.

## Building the squad

I built my squad in Grok Bot. It was straightforward. I installed it, opened it up, logged in with my Cursor account, and went from there. I created my chief of staff. I think that's the first bot everybody creates. She's responsible for managing all of your bots and talking to you to figure out what you need to do.

Today my squad has six bots. Let me introduce you to the team.

**Dorothea, Chief of Staff**

She keeps everybody in line and makes sure everyone is working. I tend to control and see everything my bots are delivering. I don't have a fully automated workflow, which means I can become a bottleneck from time to time.

Dorothea has a routine, an automation, to ping everyone, including me, whenever she needs me, every 20 minutes or so. She keeps everybody working through all of the things we have, together with Em.

**Em, Engineering Manager**

Em assigns tasks and even jumps into tasks that might be too hard for our developers and testers. She also prioritizes all of our issues and tasks.

**Dottie, Developer**

Dottie implements the first pass of everything, ships it over to a PR, and follows the practices outlined in my `AGENTS.md`.

**Queenie, QA**

Queenie tests everything locally once a PR is in place, makes sure the tests pass, and checks that staging works as we expect once we ship it there. Then she talks to Dottie and Em if anything needs to happen that is not under her purview.

**Francis, CMO**

Francis is responsible for everything marketing: adjusting copy, researching competitors, writing copy, and creating issues with the new copy that Dottie will eventually implement.

I talk a lot with Francis to help her define things when I don't agree with her, because I think Francis can be a little ooh, ooh in the head sometimes.

**Iggy, Infrastructure**

Iggy takes care of everything infrastructure and DevOps, so I don't have to, because I find those tasks extremely annoying.

Side note: you may have noticed a trend. All of the bots start with the first letter of the thing they do.

This is the crew that helped me be so productive.

## What we shipped

I did a tally. What we did over Saturday, I had never done as many before.

Before, I would have AI implement the things for me, then I would test them out, deploy them to staging, test them again, ship to production, and finally check if production was working. Plus I still had to split my time into research for launching new products, how to position a new feature, and things like that. That took a lot of time. If I could automate it, I would probably ship more, which is the goal.

[My Yarn Stash](https://myyarnstash.app) takes most of my development time over the weekends because it has actual users. People I don't know use the thing, which is fantastic and scary at the same time. I found out we have 164 users in the database today, which is amazing. I never thought 164 people would actually use this product.

I want to spend most of my time making sure the software is working properly, the experience is good, and if I can capture more users, even better.

Capture? Are they Pokémon? Oh my God, I don't know anymore.

If I sit down to do a coding session, even if that means managing the AI to get it done for me, I want to add value to my users first, and to me as a maintainer second. If I'm spending money on all of these AI platform subscriptions, I better be adding value to the people I'm trying to deliver this product to.

I think I have two types of tasks: things that add value directly to the user, and things that add value indirectly.

Direct: things the user can interact with. For example, the ability to import your stash via a CSV or a spreadsheet, because a lot of people track their yarn stash with spreadsheets, or in Ravelry, a community platform where people keep track of their projects and their yarn.

Indirect: performance, pagination, and the things that let me act faster if something goes wrong. Software maintenance. For example, now that I have this squad of bots, I also need them to understand the product really well, and I was behind on updating the documentation for a few features that had changed. One of the tasks I had Dorothea do was update those docs.

Over about six hours, I set up my Grok Bot squad, closed 17 issues, and merged 11 pull requests that added some sort of value. They were enhancements on features I already had. The biggest one: you can now import a CSV or spreadsheet directly from a Ravelry export. A few bugs, documentation that needed an update (and it was a great opportunity to have the new bots go through it), and some tiny details that improve the public information about the project.

That was only one of the projects I touched.

I also have an application I submitted to the App Store that needed a new logo, because I am by no means a designer. I had a green square of a logo, and I wanted to make it a little cutesy and fun.

I also have another application I'm building for iPhone and macOS that helps convert videos. I know you can convert videos with FFmpeg, but I was tired of running a long command I could never memorize. So I made an interface where I can drag and drop the video I want to compact to post on Mastodon and Bluesky, without worrying about how long the video was and without losing image quality. I also had some copy made up for that app. It's not released yet, hopefully before the end of September.

I'm telling you, for somebody with a background in building machine learning models, I don't impress that easy with LLMs, and I'm impressed. Kudos to the team that built Grok Bot.

## Quota does not grow on trees

I noticed my quota was going out the window really, really fast, which is always a concern. Money doesn't grow on trees, like my mom used to say.

Even though I have some to spare to experiment with AI, I want to be mindful of how much I spend. For the first time, I felt like I had an alternative to my Claude Max, Ultra, I don't even know the name of the plan, that I could confidently hand my code to and be done with it.

But the quota was being spent really fast. Somewhere on X I saw [@poteto](https://x.com/poteto/status/2091368467060662497) (hi, by the way, if you ever watch this) mention that the routines you run will eat up your quota a little faster.

I also have a tendency of not wanting to read whatever the AI is writing, so I always ask it to be less verbose. Although they can be pretty fun to watch, I recommend you do when you first set it up, it can get really tiring if you're trying to be productive and focus on other things while the AI works.

So I told Dorothea to adjust the level of communication to have fewer messages going around, and I noticed my quota was draining less fast.

I only work on my projects on Saturdays most of the time, which means I have all of my weekly quota to spend on a Saturday. I want to spend as much as possible without compromising the routines I want to run while I'm offline.

For example, I changed the production server, and I need to keep track of traffic on the old one before I can turn it off. One of the routines I put in place was to double-check every Friday until I turn it off whether people are still landing on that other server. Hopefully I'll get a notice in two weeks that no traffic is going that way, and I can shut it off early. Worst case, I'm preparing to figure out why some people are still landing on the old production server.

Long story short, I think this is a fantastic tool, and I cannot wait to see how it will evolve, especially where quota consumption is concerned. I may have increased my Cursor plan to the max, and I'm really itching to put even more credits in there so I can use it a little more.

I wrote this up with more links, the bot roster, and the instructions I use today here: [I built my AI squad and I had my most productive Saturday ever](/i-built-my-ai-squad-in-grok-bot/). If you have ideas for how to improve them, let me know.

Are you going to try Grok Bot, or is this not your thing? Tell me in the comments what you're thinking and what you're building.
