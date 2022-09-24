---
layout: post
title: How to add an identity proof to your Jekyll blog
date: 2022-05-28T03:00:00.000+00:00
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png"
comments: true
description: Learn how to create an .well-know endpoint with the identity proof for Keybase
lang: en
author_note_link: ""
author_note: ""
translator: false
tags:
- tutorial
- english



---
How to add an identity proof to your Jekyll blog

Learn how to create an .well-know endpoint with the identity proof for Keybase

In this quick tutorial you’ll learn how to add you Keybase identity proof on a Jekyll website.

## What is Keybase

Keybase is a secure messaging and file-sharing app that works across multiple device types.

You can use it to share documents, photos, messages and much more in a secure way. It provides end-to-end encryption and it secures your information using public-key cryptography. In short, each device linked to your account will have it’s own private key, and your public key is made available so anyone can check whether or not that information came from you.

The interesting about Keybase though (other than we being able to geek out about cryptography and so on) is that you can link your Keybase account to your social networks profiles, your websites and so on, as way to say “hey this is me on the internet.”

The way to link your information is by adding to your profile the so called [Keybase proofs](https://book.keybase.io/account#proofs). For example, if you want to add a proof that the profile [@jesstemporal](http://twitter.com/jesstemporal) on twitter is the same as [@temporal](https://keybase.io/temporal) on Keybase, you’ll need to tweet a particular string that Keybase gives you like the one below.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Verifying myself: I am temporal on <a href="https://t.co/nwR6n7BVqk">https://t.co/nwR6n7BVqk</a>. GmhVRqGk2mnY9U13HkI8W9yo7D_1sidwPMOg / <a href="https://t.co/xCV6U3jLx2">https://t.co/xCV6U3jLx2</a></p>&mdash; Jess Temporal (@jesstemporal) <a href="https://twitter.com/jesstemporal/status/1529266346680262659?ref_src=twsrc%5Etfw">May 25, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Then follow a couple of steps on the app which I’m not going to show here for this case, but the thing gets more interesting once you want to add your identity proof to your website.

## Adding the identity proof to your website

Now let’s say you already know Keybase and, like me, you have your own blog or site built with Jekyll and hosted on GitHub, and you want to add Keybase’s identity proof on your website let’s see how to do it in five quick steps, and you’ll won’t have to build your site locally.

### Step 1: Get your identity proof on Keybase

(TK REVIEW for using the site instead of the app and retake the SCREENSHOTS)

Log into your Keybase site and click on your little picture on the top left corner. There you’ll see your profile similar to what other people see when they access it, but you’ll also see the the option to add more identity proofs like so:

TK screenshot of your profile on keybase with the option to add the identity proof

Now you can click on the *“Prove your website”*, and you’ll see two options for you to chose like below:

TK screenshot with the two options for setting the proof

From the image you can see that there are two ways you can set up your identity on your website:

1. By serving a text file on a well known endpoint;
1. Or by providing the proof as a DNS record.

Since, you may not have a custom domain set up for your site that would give you the possibility of setting up te DNS record (TK CHECK THIS PART) as proof, we will set our proof by adding the text file to that endpoint. So click on *“Host a TXT file”* option and you’ll see a screen where you’ll be able to add the domain for your site like shown in the image below:

TK screenshot of the form for providing a website filled with my website domain jtemporal.github.io

There you should fill with the domain for your site, in my case that was the `jtemporal.github.io` like shown in the image above. After that you can click on *“Continue”* button so you can follow along to the screen where you’ll be able to copy your proof.

TK screenshot showing the beginning of an identity proof for the website on Keybase

TK REVIEW FOR THE WEBSITE
If you tap on the text shown it will automatically copy the text to your clipboard. Now is time to go to GitHub and update your code.

### Step 2: Create the proof file and folder

On the GitHub side the first thing you need to do is to create your branch so you can make all your changes on a single pull request and also so you won’t commit directly to main. I’m going to show you the way I do it because I like to create the branch while doing the first alteration so bear with me.

Click on the button that 

To create the branch click on the option menu where you can see the `main` branch on the left-hand side:

TK image 

Then you’ll should see a list of the branches available and a text box where you can type the name e


### Step 4: Add the include list on your site config

Before:
```yaml
...
# Sass style
sass:
style: compressed

# Ruby Gems
plugins: [jekyll-paginate, jekyll-seo-tag, jekyll-sitemap]
```

After:
```yaml
...
# Sass style
sass:
style: compressed

# 👇 update
# Include list
include: [.well-known]
# 👆 update

# Ruby Gems
plugins: [jekyll-paginate, jekyll-seo-tag, jekyll-sitemap]
```

### Step 5: Merge your changes and wait