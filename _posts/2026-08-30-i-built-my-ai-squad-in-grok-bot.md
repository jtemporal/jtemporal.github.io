---
layout: post
type: post
title: "I built my AI squad and I had my most productive Saturday ever"
date: 2026-08-30 00:00:00 -0300
lang: en
image: /images/covers/ai.webp
bookbanner: true
comments: true
tags:
- english
- ai
description: "Is this what the future of building with AI will look like?"
related: true
posts_list:
- starting-a-project-from-zero-with-ai
- ai-powered-development-workflow
- my-yarn-stash-ai-lessons-video
---

Okay, I have a tendency to wait weeks, months even, before I try new AI tools these days. But after watching [this video from Mo](https://x.com/atmoio/status/2092286808440676733) maybe half a dozen times, I just couldn't wait much longer.

![Tweet from Mo showing a Grok Bot video titled I didn't expect to actually use this](/images/ai-squad/mo-grok-bot-tweet.webp){: class="img-post"}

If you've known me for a while, you also know that during the weekdays I'm working on my DevRel tasks at Auth0 while I develop my side projects like My Yarn Stash and GitFichas on weekends.

As you can probably tell, time is always limited. On both sides of the coin, because during the week not only do I work, but I also try to keep up with life. And during the weekend I also want to enjoy my hobbies. Right now I'm into making my own journal folios with leather, but that's a whole other story.

So instead of waiting my usual extra time before trying Grok Bot, I gave in. Installed it Friday night and spent the whole Saturday on it.

Fair warning: this is not a tutorial. But maybe it can help you figure out if you want to dive into the "new trend" or not. Let's talk about Grok Bot.

<center>
<iframe style="max-width:100%; width:560px; aspect-ratio:16/9; height:auto;" src="https://www.youtube.com/embed/jtUmb2atIgM" title="I built my AI squad and I had my most productive Saturday ever" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

## Building the squad in Grok Bot

My Yarn Stash is my new baby, I finally built it into a place I love. I have users, some of them even signed up for the plus plan, and most importantly, it solves a real problem I and many crafters face: *how much yarn do you own?!*

So every weekend I slowly work on building new features, or improve performance, or adjust the UX just so. But I'm only one gal and I haven't quite figured out a fully automated development flow with AI I liked or trusted. Well, that is until Grok Bot came along.

In it I started building the bots I mostly needed to perform the tasks I was doing myself or with some AI assistance. Let me introduce you to the team:

![Grok Bot squad showing Dorothea, Francis, Em, Dottie, Iggy, and Queenie](/images/ai-squad/grok-bot-squad.webp){: class="img-post" style="max-width: 40%;"}

**Dorothea, Chief of Staff**

She keeps everyone in line: every 30 min a routine runs that makes D talk to everyone (including me) to get things moving.

**Francis, Chief Marketing Officer**

Francis does competitor research, creates and adjusts copy, plans out campaigns including email chains.

**Queenie, QA**

Tests everything. Yes, that simple, comes up with test data, runs through things as a user would, adjusts/implements unit and integration testing, and reports back.

**Dottie, Developer**

Does most of the coding, follows closely the development process outlined in the documentation, follows up from GitHub Copilot's automated reviews.

**Iggy, Infrastructure**

Keeps track of all infra for me. All of it, from DNS to the servers. Anything that needs a hand, Iggy takes care of it.

**Em, Engineering Manager**

Manages both Dottie and Queenie prioritizing tasks and assigning issues, keeps track of progress reports, jumps into issues from different projects when needed.

All of these folks work together in order to get things done. While I'm the overseer of all bots, I do final checks, define what gets staged for preview when, and make sure the human on the other side also understands the changes.

## What I shipped to production with Grok Bot

Yes, all the cutesy names are fun, but the final boss is always: what value did you add to your users? Doesn't matter if you have the top-tier machine or the state-of-the-art AI working for you if you don't deliver to your users.

So here's a tally of the weekend's biggest value-add tasks in My Yarn Stash:

- Implemented the CSV/spreadsheet and Ravelry yarn bulk import
- Implemented the "Undo Import" flow
- Migrated production servers from Heroku to FastAPI Cloud
- Migrated the auth domain from the Auth0 default to `auth.myyarnstash.app`
- Updated the whole documentation
- Updated the JSON-LD from the `/pricing`
- Fixed the manual database backup routine

Now that may seem small, but those have a huge impact on the usage. Ravelry is one of the biggest "competitors" I have. All crafters use it or use spreadsheets to control their stash so bringing the ability to easily migrate their stash is huge for the users and for the product as a business.

The domain situation is a branding issue, users tend to trust more brands that continue through the whole workflow with the same branding and that includes the domain. If you want to know more about that setup in Auth0 [there's this blog post I wrote with Shreya on it](https://auth0.com/blog/custom-domains-complete-guide/) over at the Auth0 blog. The only thing is I didn't want to go through the process of setting up the domain and checking whether or not the verification went through. So I gave that task to Iggy and Iggy not only did the setup but put together its own routine in order to verify from time to time.

I needed to fix the database backup bug, even if it only mattered to me. Same goes for the docs and the details like the JSON-LD from pricing.

And this is only talking about My Yarn Stash. I also got a new logo going for the [AC Pocket Field Guide](/ac-pocket-field-guide/):

![App Store listing for AC Pocket Field Guide showing the new logo and three screenshots](/images/ai-squad/ac-pocket-field-guide-app-store.webp){: class="img-post"}

I created the logo for a new app I'm working on, still to be released. And while the bots worked on those tasks, I managed to get my [Videos page](/videos/) in a format that prioritizes long form, draft and publish 2 blog posts including this one you are reading and [this other one](/starting-a-project-from-zero-with-ai/) about where to start new projects in the age of AI, and record and edit the video you saw in the beginning of the post.

## Quota consumption

People say that you gotta spend money to make money. I started using Grok Bot with the cheapest plan from Cursor. But I guess I'm spending money a lot these days. And one thing that I did after realizing the potential for this to help me get through my backlog of issues way faster than my usual AI-assisted development workflow I gave in and just increased my account to the biggest plan.

But even in the biggest plan it felt my quota consumption was moving fast! With a few very talkative bots it was foreseeable that the quota would get used much faster than when I just had the first one. So I asked Dorothea (CoS) to keep communications to a minimum:

![Chat with Dorothea, Em, and Queenie agreeing to keep messages terse to save quota](/images/ai-squad/dorothea-terse-comms.webp){: class="img-post" style="max-width: 50%;"}

That felt like it lowered the quota usage rate enough to make the quota last longer. Another thing that I saw Lauren (`@poteto` on X), one of the main Grok Bot developers, [say is that it is best to keep an eye out on your routines](https://x.com/poteto/status/2091368467060662497):

![Tweet from Lauren saying to avoid frequent Grok Bot routines because they consume tokens](/images/ai-squad/lauren-routines-tweet.webp){: class="img-post"}

And guess what? Bots love to create routines to keep track of work like Dottie, my developer, creates routines to follow up with the CI on a given PR to make sure that the CI went through, or that the review was done.

So I kept a close eye on these automations. My goal here, because I only code on Saturdays and I'm not planning on using Grok Bot outside of that window, is to get as close as possible to 100% usage of my plan every single Saturday, and leave maybe 10 to 5% of the plan for the automations I need to run during the week.

![Grok Bot weekly usage bar showing 92% used](/images/ai-squad/grok-bot-weekly-usage.webp){: class="img-post"}

A side note here: I haven't quite figured out how to make the bots use other models or my other accounts effectively in order to lower the quota usage. But if I do you'll be the first I'll tell, of course I expect the folks from the Grok Bot development team to work on optimizing this as much as possible like Cursor has with composer, but that is still to be seen.

So basically the bots released me to work on the creative side of my writing and video editing skills, which I love to do and no AI, even though it may help me review and automate the boring stuff, will take from me.

## You are never as fast as AI

As the overseer of all bots, I can also become a bottleneck in my own workflow. I also asked Dorothea (CoS) to ping me whenever she needs me to give input, and assign tasks to keep the other bots from sitting idle. That way even if I can't immediately follow up the bots can still get other things done.

---

These are basically what I noticed from one day of using these bots. I expect I'll start noticing a few other quirks I didn't notice this time around as I use them more moving forward. In the meantime I put all my bot descriptions here [in case you want to check them out](https://gist.github.com/jtemporal/2a532f60eafede070c7da20862f2cc43).
