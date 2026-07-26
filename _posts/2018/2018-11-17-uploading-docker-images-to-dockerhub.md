---
title: "Uploading Docker images to Docker Hub"
layout: post
image: "/images/covers/tutorial.webp"
date: '2018-11-17 08:00:00'
last_modified_at: 2026-07-26
type: post
lang: en
tags:
- tutorial
- docker hub
- automation
- docker
- english
- container
- containers
comments: true
description: Learn how to build, tag, and push Docker images to Docker Hub — manually and with a shell script.
translations:
- lang: pt
  url: /subindo-imagens-docker-pro-dockerhub
---

Ever thought those Docker container images that anyone can use are magical, and thought about making one but don't know how? Come along, I'll teach you 😉

To start, you'll need a [Docker Hub](https://hub.docker.com/) account. That's where all Docker container images live. Once you've got your account there, we can move to the command line and start using the Docker CLI.

Before we do anything, we need a project right? The project we're going to use here [is in this GitHub repo](https://github.com/jtemporal/autom-dockerhub-example). It's just a Python script that adds two numbers passed on the command line.

Now that we have a project let's start with the *login*. Even though you don't need to *login* to build your images, once you're *logged in* you can forget it exists:

![login](https://raw.githubusercontent.com/jtemporal/autom-dockerhub-example/master/gifs/docker-login.gif)
<center>
<i>docker login</i>
</center>

Now let's build our image:

![docker image build](https://raw.githubusercontent.com/jtemporal/autom-dockerhub-example/master/gifs/docker-build-sum.gif)
<center>
<i>docker build -t sum .</i>
</center>

Here we used the `-t` parameter to name our image. After building we can check the image in our list of locally available images:

![image listing before tag](https://raw.githubusercontent.com/jtemporal/autom-dockerhub-example/master/gifs/docker-images-before-tag.gif)
<center>
<i>docker images | grep sum</i>
</center>

Now that we have an image ready, let's tag it and check that it was tagged correctly:

![docker tag and image listing after tag](https://raw.githubusercontent.com/jtemporal/autom-dockerhub-example/master/gifs/docker-tag-sum.gif)
<center>
<i>docker tag sum $(echo DOCKER_USERNAME)/sum</i>
</center>

This step is basically what lets us distribute our images. So after tagging your image, it's time to push (send the image to Docker Hub):

![manual push of docker image](https://raw.githubusercontent.com/jtemporal/autom-dockerhub-example/master/gifs/docker-push-sum.gif)
<center>
<i>docker push $(echo DOCKER_USERNAME)/sum</i>
</center>

And done. Now the [image has been sent to Docker Hub](https://hub.docker.com/r/jtemporal/sum/), making it possible for anyone to use `docker pull` to download and use the image:

![docker pull and image usage](https://raw.githubusercontent.com/jtemporal/autom-dockerhub-example/master/gifs/docker-pull.gif)
<center>
<i>docker pull jtemporal/sum && docker run --rm jtemporal/sum 4 2</i>
</center>

## Something extra

Doing all these steps manually can get tiring if you need to push a lot of images, and beyond that, anything we do by hand can be prone to errors. So the natural path would be to automate these tasks.

There are several ways to do this, but let's use a *shell script* I called `push.sh` for it:

```bash
#!/bin/bash

if [ -z ${DOCKER_USERNAME} ]; then
    echo "Missing DOCKER_USERNAME variable!"
    exit 1
fi

error() {
    if [ $? != 0 ]; then
        echo "Error!"
        exit 122
    fi
}

build() {
    echo "=> Building ${1}"
    docker build -t ${1} .
    echo "=> Built ${1}"
}

tag() {
    echo "=> Tagging ${1}"
    docker tag ${1} $(echo $DOCKER_USERNAME)/${1}
    echo "=> Tagged ${1}"
}

push() {
    echo "=> Pushing ${1}"
    docker push $(echo $DOCKER_USERNAME)/${1}
    echo "=> Pushed ${1}"
}

build ${1}
error
tag ${1}
error
push ${1}
error
echo

exit 0
```

In it I reproduced all the steps we did up to here, and to use it just do:

![automated push gif](https://raw.githubusercontent.com/jtemporal/autom-dockerhub-example/master/gifs/docker-automated-push.gif)
<center>
<i>./push.sh sum</i>
</center>

You can even put this script in a continuous delivery tool and let the magic happen.

---

## Links

The code and steps demonstrated here [are in this GitHub repo](https://github.com/jtemporal/autom-dockerhub-example), go there and leave a ⭐️
