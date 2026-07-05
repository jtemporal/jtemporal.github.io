---
title: "Docker commands"
layout: post
date: '2018-01-14 08:00:00'
last_modified_at: 2026-07-04
image: "/images/covers/pro_tip.webp"
type: post
tags:
- english
- cheatsheet
- docker
- container
- containers
- pro tip
lang: en
comments: true
description: A cheat sheet of Docker commands for listing, removing, and killing containers and images
translations:
- lang: pt
  url: /comandos-docker
author_note: false
related: true
posts_list:
- playing-with-dockers-container-listing
- python-and-its-versions-pyenv-part-2
- python-virtual-environments-venv
---

If you deal with Docker on a daily basis, you need to know a few commands. If you're like me and forget these things, here's a cheat sheet to help ;)

## Summary
<!--toc-->
1. [Listing](#listing)
1. [Removing](#removing)
1. [Killing](#killing)
1. [Some useful options to know](#options)
<!--end toc-->

---

<h2 id="listing">Listing</h2>

### Images on your machine

Lists all the images on your machine, including the dangling ones

~~~ console
$ docker images -a
~~~

### Running containers

~~~ console
$ docker ps
~~~

### All containers

And their info

~~~ console
$ docker ps -a
~~~

### Only the IDs of all containers

~~~ console
$ docker ps -qa
~~~

---

<h2 id="removing">Removing</h2>

### A container that was stopped

~~~ console
$ docker rm ID
~~~

### All containers that were stopped

~~~ console
$ docker rm $(docker ps -qa)
~~~

### An image from the system

If the image isn't in use, you can remove it using the command below along with the image ID

~~~ console
$ docker rmi ID
~~~

### All images from the system

Removes **ALL** Docker images that aren't in use from your machine. Use with care!

It'll show an error if any image is in use.

~~~ console
$ docker rmi $(docker images -qa)
~~~

### All images from the system

Removes **ALL** Docker images that aren't in use from your machine. Use with care!

It'll ignore images in use.

~~~ console
$ docker system prune --all
~~~

![removal result](/images/docker/system-prune-result.webp)

---

<h2 id="killing">Killing</h2>

### One or more containers

Just pass a list of IDs to kill more than one container

~~~ console
$ docker kill ID
~~~

---

<h2 id="options">Some useful options to know</h2>

### -a

Most, if not all, Docker commands and subcommands have an `-a` option which comes from `all`.

### --rm

Same thing happens with the `--rm` option. When used, it indicates that the container should be removed after its execution.

### -q

Most, if not all, Docker commands and subcommands have a `-q` option that lists only the IDs.