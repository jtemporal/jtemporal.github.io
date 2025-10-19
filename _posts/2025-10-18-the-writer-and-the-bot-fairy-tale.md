---
layout: post
type: post
bookbanner: true
comments: true
date: 2025-10-18T13:00:00+00:00
description: How I used Copilot to adjust my blog covers over my morning cup of coffee
image: https://res.cloudinary.com/jesstemporal/image/upload/v1760702982/covers/opensource_p4btht.png
lang: en
related: true
posts_list:
- solving-conflicts
- 5-tips-to-make-your-pull-request-shine
- gitfichas-is-now-open-source
tags:
- hacktoberfest
- ai
- git
- opensource
- pull request
title: "The writer and the bot"
subtitle: "A pull request fairy tale in the age of AI"
translations:
  - url: "/conto-da-escritora-e-do-robo"
    lang: "pt"
---

Once upon a Friday morning, coffee in hand, the writer peered into the blog and found a tiny bug hiding between the posts.

Between mixing posts and capturing PRs, a bug had been created without the writer realizing it.

But this is not the tale of that bug, this tale is about a change made after the bug was dealt with when the writer and her faithful helper bot started their quest...

<img alt="the writer and the robot" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760840438/images/d6c6f5ddfb37b17e9827ab325e47f4232e291922e544a112edb6fa1b695e6b54_ezpypk.png" class="img-post">

## Something woke up the *ick* monster

For the last eight or so posts, the writer forgotten to set a variable that routes articles to their language-specific pages.

This bug wasn't huge, but it still annoyed the writer just the same: new posts appeared on the main mixed-language feed, but not on the English or Portuguese pages.

Noticing the issue the writer quickly casted away this tiny bug with the GitHub Mobile app and [and an equally tiny PR](https://github.com/jtemporal/jtemporal.github.io/pull/349).

While reviewing the preview for the pull request, something else felt off. The cover images had started to feel a bit _too generic_ for what the writer have been publishing recently around Preptember and Hacktoberfest. 

All posts said "miscellaneous" and the result was that the writer found a baby *ick* for the covers I used and loved for such a long time.

The ick is a terrible monster that make every writer (and developer) want to change their website. If left alone, the the ick always grows into a terrible monster that only gets defeated by a complete _website overhaul_.

As the coffee started to wake the writer's brain, an idea popped into her head:

> *it is time to brew a new cover image!*

The writer normally cycles between a few covers, with the color scheme from the use on the blog and a cover saying "open source" felt descriptive and better aligned with the last few posts written.

*Or so the writer thought...*

## Setting GitHub Copilot in motion

After creating, exporting the new cover, and uploading it to the CDN, the writer had all the ingredients to brew a new spell.

The writer [opened an issue with the ingredients and the instructions to defeat _the ick_](https://github.com/jtemporal/jtemporal.github.io/issues/350): Change cover image on open source related posts to the new cover image. And gave everything to the trusty robot by assigning it to GitHub Copilot.

When you assign an issue to your trusty robot, it will start to work right away [creating a draft PR](https://github.com/jtemporal/jtemporal.github.io/pull/351), saying that it is going to work on the issue and that it will update the PR while it progresses.

<img alt="GitHub Copilot's initial pull request description showing it will work on the issue and update the PR with progress" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753384/images/01-initial-pr-description-by-copilot_e129m8.jpg" class="img-post"/>

A few minutes later, Copilot updated the PR with a checklist of the steps it would take to make the proposed changes. It read like a neat spell scroll, with steps listed line by line.

<img alt="GitHub Copilot's updated pull request description with a detailed checklist of steps to implement the changes" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753384/images/02-copilot-update-description-with-checklist_djg4z1.jpg" class="img-post" style="max-width: 50%"/>

The writer was actually surprised by finding out that 27 posts about open source existed. So much so that the writer thought the bot made a mistake and gathered wrong posts to update the cover.

Little did the writer know that the bot found posts from a long time ago...

## Work done but minds changed

With the work actually done the little robot updated the pull request, [put together an overview of the changes](https://github.com/jtemporal/jtemporal.github.io/pull/351), and called the writer in for a review of the spell before it could be cast to production.

<img alt="GitHub Copilot's comprehensive report showing all 27 posts that were updated with the new cover image, organized by category" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753384/images/03-copilot-report-on-all-changes-made_rh2k5y.jpg" class="img-post"/>

That's how the writer confirmed that actually 27 posts were about open source:

- 8 about Preptember
- 4 about GitFichas
- 2 about pull requests
- And incredible 13 about Hacktoberfest

The writer could feel the spell working and got really excited to see the preview of the posts with the new cover!

But the excitement didn't last long...

## The *ick* attacks again

When the page loaded the writer happiness went little bit like this:

> *YAY NEW COVER... wait...*
>
> *awww every single post open source now 😮‍💨*
> 
> *at least the new cover looks great ¯\\\_(ツ)_/¯*

<img alt="Blog homepage showing multiple posts all using the same 'open source' cover image, creating visual monotony" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753420/images/04-all-covers-with-open-source-ick_s0j7pt.jpg" class="img-post"/>

The writer quickly realized that this baby *ick* was strong and ready to fight.

Fearing the ick would get out of control pretty soon, the writer created two new covers to add to the spell: one for Hacktoberfest and one for Preptember posts.

Without delay the two new covers were added and with a comment the writer put the robot to work once again and waited.

<img alt="Comment on the GitHub pull request tagging Copilot with instructions about the new cover images for Hacktoberfest and Preptember posts" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753384/images/05-comment-tag-copilot-to-make-adjustments_qiva0v.jpg" class="img-post"/>

## Watching the work closely

To avoid anymore problems this time around, the writer also looked at the work while it was happening by casting the **View session** spell.

<img alt="GitHub Copilot session view showing the real-time progress as it processes the cover image adjustments task" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753384/images/06-copilot-working-on-the-adjustments_ymbpse.jpg" class="img-post"/>

Viewing a session gives you a window to the little robot's thinking. It let's you observe all the steps the trusty robot is making while they are happening.

## The happy ending

A few minutes later, Copilot finished implementing the changes and writer could look at preview again.

This time around the ick looked far away like it was weak. The variety helped keep the ick way. 😅

<img alt="Blog homepage now showing diverse cover images - Hacktoberfest posts with orange covers, Preptember posts with their own design, and other open source content with the new cover" src="https://res.cloudinary.com/jesstemporal/image/upload/v1760753420/images/07-newcovers-in-place_sy23sg.jpg" class="img-post"/>

Sipping coffee, fixing bugs, and watching Copilot work gave the writer hope for an ick-less future. What started as a simple fix turned into a cover image overhaul.

By the time the coffee cup was empty, the pull request was merged and the spell had taken root. The Hacktoberfest posts now have their own cover, the Preptember ones have theirs, and the rest of the open source content has a fresh new look.

The *ick* is gone, replaced by covers that actually represent the recent posts are about.

Sometimes the smallest changes make the biggest difference. Sometimes, all it takes is a cup of coffee, a robot assistant, and a little bit of magic.

And so, with one cup of coffee and a helpful robot, the writer lived happily ever after, for now.

> The end

---

Tiny side note: I find it extremely amusing when Copilot reacts with 👀 to the comments tagging it.