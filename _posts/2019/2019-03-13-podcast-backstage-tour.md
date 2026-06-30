---
layout: post
title: Podcast backstage tour
date: 2019-03-13T12:00:00.000+00:00
image: "/images/covers/miscellaneous.webp"
comments: true
type: post
lang: en
tags:
- tools
- english
- podcast
- pizza de dados
- podcasting
description: See how Pizza was born and get inspired to create your podcast

---
---

Se preferir [leia esse artigo em português](https://medium.com/pizzadedados/backstage-de-um-podcast-465f02c2a7e5).

---

After a year of [Pizza de Dados](https://pizzadedados.com/en/), I'll tell you what it's like to have a podcast.

I had a few conversations where people share the following:

> I've always wanted to create a podcast about insert-here-your-favorite-subject, but I don't even know where to start…

To which my reply is always the same: _I'll tell you how we started doing Pizza de Dados, and maybe the process will help you get started_. 😉

It's such a recurring subject that I decided to write about it and inspire you to make your podcast dream a reality \\o/

<br>
<center>
<img src="https://media.giphy.com/media/es4W3DeganNXa/source.gif">
<br>
<a href="https://media.giphy.com/media/es4W3DeganNXa/source.gif">Source</a>
</center>
<br>

## The beginning

Assuming you already have an idea of ​​what you want to talk about, the first question I would ask you would be: _Do you have money to maintain infrastructure or, like us, want something that can be kept free of charge?_ This is one of the first questions because there are a lot of platforms for podcasters, and most of them are paid, or those with a free account are very limited.

If you're looking for something 100% free and without limitation - at least for the first few episodes, here's the pizza recipe (from bum tsss) we use:

\* Archive.org: You'll need to **store your podcast audios** somewhere that generates a direct download link. In our case [archive.org](http://archive.org/) was chosen since there are no storage limitations;

\* A _feed.xml_: You see, one thing you'll need to learn to have a podcast is that you need to have a file in XML format. This file is what we call the feed, and it will pose as a communication channel to let platforms and aggregators know that a new episode has come out, so you will need to host this file somewhere. In the case of Pizza, we created a site using a [Jekyll template](http://jekyllthemes.org/) and hosted it on GitHub.

## A website

We wanted to show the world what was being discussed and who was participating in each episode. To accomplish that, we made a site that would have a post for each episode and hosted it on GitHub. GitHub has a tool called GitHub Pages that is for anyone to put websites online ([I made a post - in portuguese - on how to do it that you can check out](https://jtemporal.com/do-tema-ao-ar/)).

Basically, the most widely used way to distribute podcasts today is by using Apple. Other than showing information from each episode, our website also had a crucial role in serving our feed.xml. Most Jekyll templates come with a standard feed, but you may need to make some adjustments.

For Apple to know that your podcast exists, you need to [create an account on Podcasts Connect](https://help.apple.com/itc/podcasts_connect/#/itc97d9d1513) and [submit the feed with the standards that Apple specifies](https://help.apple.com/itc/podcasts_connect/#/itc4f0f5ac7d). In our case, this submission process was a bit boring, as we need some interaction until the feed is 100% up to standard, but once the feed was ready and [validated to Apple podcast specifications](https://github.com/PizzaDeDados/pizzadedadosantigo/blob/master/feed.xml), we were prepared to distribute Pizza through there.

## Before recording

Before we get to \~put the pizza in the oven\~ we have to plan. Our podcast is mainly made of interviews in a friendly chat environment, but for that to happen, we prepare a lot.

The first step then is to choose a guest or guests to chat with us. We have a giant spreadsheet with names of people we want to bring to Pizza on a wide range of subjects within data science. It is from this spreadsheet that we mainly chose the people who come to talk to us. Next to each person's name, we have a list of subjects that led to her/him being on the list.

Based on the person chosen and the subject in which she or he specializes in [Leticia Portella](http://leportella.com/), [Gustavo Coelho](http://www.gusrabbit.com/), and I share several posts and articles internally until the recording date. We use this as a way to prepare and write “the agenda” of the day. The agenda itself is a relatively simple file with topics and questions of interest to us. We send it to our guests at least a week in advance so that 1) he or she can contribute with issues to be discussed and 2) can prepare on what is coming and feel as comfortable as possible while recording.

The agenda is **not** a rigid set of topics, we will not talk precisely about what is written on it, but it serves to prevent us from getting caught in moments of "we have nothing to talk about". In most cases, the conversation flows naturally, and the agenda is hardly ever used.

An important point of preparation is also the alignment of schedules. Matching the busy schedule of 4 or 5 people is sometimes complicated, so we are prepared to record more than one episode a month. This ensures we have material to publish if none of the guests we had in mind can record with us on the date we had in mind.

## Recordings

In the beginning, we tested two ways to record, the first was using a video conferencing program called Zoom, but Zoom's free account limits conference time when you have more than 2 people in the room (one of the reasons for the first episode being one of the shortest). With time limitation being the screaming factor, we switched to YouTube. That's right, the Pizza episodes are recorded on YouTube.

<br>
<center>
<img src="https://media.giphy.com/media/1yTcE7OlChz4qU0ehj/source.gif">
<br>
<a href="https://media.giphy.com/media/1yTcE7OlChz4qU0ehj/source.gif">Source</a>
</center>
<br>

Google used to have a tool called Hangouts On Air, which is now part of YouTube. Basically, it allows you to make a Hangouts call and (amazingly!) record it! These calls are associated with your YouTube channel, so we kinda became YouTubers.

<br>
<center>
<img src="https://media.giphy.com/media/cD7PLGE1KWOhG/source.gif">
<br>
<a href="https://media.giphy.com/media/cD7PLGE1KWOhG/source.gif">Source</a>
</center>
<br>

There are several types of calls on YouTube: public calls, which everyone subscribed to your channel will receive a notification when they start and can watch live; unlisted ones that people with a link can follow live if they wish, but channel subscribers will not receive notification (imagine a secret live conference); and private ones, which can be viewed by invitation only.

![tela de criacao de evento no youtube](/images/yt_call_creation.png)
<br>
<center><i><small>
YouTube call creation screen
</small></i></center>
<br>

Today is exactly what we do, we create the private call on YouTube and send the call link to the guests, so we can record without anyone watching. 😋

After we finish recording, we use youtube-dl to download only call audio with the highest quality available. A word of caution: There are a few things that influence audio quality 1) microphones and 2) audio transmission. Audio that is transmitted via the internet, for example, as is our case, naturally loses some of its quality. That's why we always download with the best quality possible. Microphones, on the other hand, can only be improved by buying high-quality microphones, often more expensive, so try to do your best to mitigate the lack of a good microphone by recording in a quiet place without echoes and background noise.

## Edition

If you [follow Pizza from the beginning](https://podcast.pizzadedados.com/e/episodio-001-hello-world), you know that we have evolved a lot in the last year, right? Today we have our own audio magician: Johnny (we love you Johnny ❤), but at first, it wasn't always like this…

In the beginning, we did the editing ourselves. That consisted of cutting silences and language vices using a program called [Audacity](https://www.audacityteam.org/). It caters to many audio things from recording to editing and supports all operating systems we use.

Editing was by far the most massive task for us since we had zero knowledge of how to do it. This step took the time that we didn't have to give, it was the task that most prevented the episode from being released at regular intervals. But we made it work. Finally, a few months into the podcast, we partnered with [Data Bootcamp](https://www.databootcamp.com.br/ "Data Bootcamp"), and that allowed us to pay Johnny and free up our time to focus on other activities.

## Making the post

Apart from editing, we still have to write the episode post. This is the second most massive task. We listen to the audio and write down every technical term and concept we mention, then look for reference links on said subject to add to the post.

After doing this task sometimes, we created a template that has the skeleton of a post, so we avoid rewriting the repeating sections like _“Listen Now”_ and _“People in this episode”_, this template also helps us not to forget any parts that should appear on a typical post. 😉

## YouTube episode

Did you know that in addition to using YouTube for recording, we also release Pizza episodes on YouTube? Each one is also rendered as a video. To do that we use two tools:

1. [kdenlive](https://kdenlive.org/en/): The most straightforward video editor I've found for Linux;
2. [Canva](https://www.canva.com/): An online platform for making designs. You may have noticed that the Pizza arts have the "same face", this happens because we use Canva to standardize our brand, there we save in our primary colors, the font we use, the Pizza icon and the images we use as templates for YouTube and other social networks.

Usually, the video rendering happens alongside posts write-ups since every post comes with an embed of the video uploaded to YouTube as an alternative platform for people to listen.

## Uploading the material

Audio: Ready. Video: ready. Post: done. It's time to put all of this on the platforms. Then we upload the audio to archive.org and the rendered video to YouTube and schedule it to the episode's release date.

## Pizza delivered

After all of this process is done, finally comes new episode release day. Remember, I said we created a page on GitHub? This page is like a blog, and each episode is a blog post.

So on the agreed release date, one of the 3 pizzaiolos would go to GitHub and create a pull request on the website project to finally air the new chapter. Pull request accepted, GitHub takes care of updating the site and officializing the release of the latest episode.

---

## Final considerations

Of course, not every podcast is like this, and this is a dynamic that worked for us, recently we went through some changes, and you may have noticed that the new Pizza landing page no longer has the episodes posts. And that may also happen to you after the podcast takes flight, you will notice a natural evolution.

Oh, and one last thing, during this natural evolution process, we also launched a recurrent funding campaign that helps us pay for Johnny's work, so if you like what we do, [support our work](https://apoia.se/pizzadedados) (and Johnny's 😜).

<center> <a href="https://apoia.se/pizzadedados"> <img src="/images/pizza-apoie-200.png" atl="botao com a logo do pizza e a palavra apoie escrita logo abaixo"/> </a> </center>

I would also like to thank all the listeners and friends who have been following and supporting Pizza. And for you who want to start your own podcast: I hope this post helps to clarify some of the ideas and how-tos.

---

Hugs and welcome to the podsphere.