---
author_note: false
comments: true
date: 2018-04-15 01:00:00 +0000
description: Learn how to deploy a Flask API to Heroku, using Heroku CLI and Git
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png
lang: en
layout: post
tags:
- tutorial
- python
- flask
- deploy
- heroku
- api
- web
- server
- english
title: Deploying an API to Heroku
translations:
- lang: pt
  url: /deploy-flask-heroku
type: post
---

Deploys, where do they live? What do they eat? If you want to learn how to deploy something to Heroku you came to the right place!

## What you will learn in this tutorial

* How to create a Flask application to run on Heroku
* How to deploy said app
* A little bit of Git
* A little bit of API consumption

**Warnings:** Of the two posts I used as a base to write this one, one of them was very outdated and the other, although recent, did not have instructions that correspond to the most recent version of Heroku, they are in the links section in case you want to read them.

## Heroku who?

If you've made it this far, you probably already know what Heroku is, but for those who don't know it, [Heroku](https://www.heroku.com) is a cloud platform that gives people "the fastest way to go from idea to URL" and without having headaches with the infrastructure part.

This platform provides a service that, based on a predefined structure of an application, manages to package that application and put it to run on a server in one of their data centers. Heroku accepts applications written in several languages, but today we are going to use Python.

<div style="width:100%;height:0;padding-bottom:80%;position:relative;"><iframe src="https://giphy.com/embed/UZQQ0yZtq5Ihq" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

## Let's code!

For this tutorial I made an API with the Python microframework called [Flask](https://flask.palletsprojects.com/en/1.1.x/). I won't get into the details on how Flask works, but you can refer to the oficial documentation or look for one of the many tutorials available out there.

### Our API

The API will only have one endpoint defined by `/` route. This endpoint can give two responses depending on the request you make. They are as follows:

---

| Request | Response |
| :---: | :---: |
| GET without extra headers | Don't panic! |
| GET with Authorization 42 | the answer to life, the universe and everything |

---

The code to do this is short and straight forward, take a look:

```python
import os
from flask import Flask, jsonify, request


app = Flask(__name__)


@app.route('/')
def dont_panic():
    if request.headers.get('Authorization') == '42':
        return jsonify({"42": "The answer to life the universe and everything"})
    return jsonify({"message": "Don't panic!"})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
```

This code lives inside a file called `dont_panic.py` in my project codebase, but you can name it as you see fit. In addition, this code has a peculiarity: _the last three lines_, they are the configuration used when the Flask server is running on Heroku.

### Pipfile

I mentioned at the beginning of this post that the base posts I used were somewhat outdated? Well, nowadays Heroku requires a `Pipfile` to prepare the environment in which our application will run. Pipfile will serve to install the Python libraries needed to run our application. And if like me, you don't like using [Pipenv](https://docs.pipenv.org/) you can create the file by hand, as I created mine below:

```yml
[[source]]

url = "https://pypi.python.org/simple"
verify_ssl = true


[packages]

Flask = "*"

[requires]

python_version = "3.6"
```

For the development enviroment, I like to use the [good old `requirements.txt`](https://jtemporal.com/requirements-txt-en/) which looks like this:

```plaintext
click == 6.7
Flask == 0.12.2
itsdangerous == 0.24
Jinja2 == 2.10
MarkupSafe == 1.0
Werkzeug == 0.14.1
```

### Procfile

To run the API locally the command is as follows:

```console
FLASK_APP=dont_panic.py flask run
```

As you won't be inside the Heroku environment to input the command yourself to get your API up and running, you'll need some sort of configuration to tell Heroku how to run your application. The file that holds the command that runs your app is called Procfile.

One important detail is that this file does **not** have an extension, depending on your operational system and your text editor, you need to be careful when saving this file to avoid some extention like `.txt` from appearing. Saving this file with an extention **will cause a failure in your deployment**.

For this application, Procfile will have only one line, which is the following:

```plaintext
web: python dont_panic.py
```

Okay, now what else?

## Versioning

Since Heroku works with the Git versioning system, regardless of whether you host the code on GitHub or not, you'll need to define a code versioning history.

So, after creating all these files, you need to add all of that to your Git tree. If you're not a big fan of Git, you can do the following:

```console
$ git init
$ git add .
$ git commit -m "creating the application"
```

This commands above will gather all files in the same commit, this is not a good practice and if you are interested in good practices and learning more about Git, there will extra links for that in the links session at the end of the post.

## 3, 2, 1... Deploy \\o/

Now you have a choice: there are a few ways to send your code to Heroku. You can connect with GitHub or Dropbox or use the Heroku CLI. In this post I'll will show you how to do it using the Heroku command line.

First of all you need to [install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

### Logging in

After installing the CLI, you'll need to login to your account

```console
$ heroku login
```

This command will ask you to enter your Heroku account email and password:

<center>
<img alt="login heroku" src="https://i.imgur.com/QEooPqg.jpg">
<br>
<i>Heroku CLI login screen</i>
</center>

_Note:_ I used the `-i` here because I'm running on a remote server, this will request user and password on the terminal instead of openning up a browser for the login

Next you need to create an app within Heroku to upload your code to.

### Creating an application

#### Using the interface

It is possible to create an application through the [website interface](https://dashboard.heroku.com/new-app), where you will see the following screen:

![app creation screen on heroku website](https://i.imgur.com/AyJqSmC.png)

You just need to input an unique name and then click the `Create app` button, that will take you directly to the deploy tab of the app especific page. I created the app called `dontpanicapi`, and if you scroll down you'll see steps to upload and deploy your app:

![deploy using heroku git section image](https://i.imgur.com/8PCzkHX.jpg)

As you can see the last command displays the `remote` we need to add to our repo, and basically you just have to run it, and you'll be able to publish the code:

```console
heroku git:remote -a dontpanicapi
```

The output for the command above show be something like this:

![adding Heroku remote](https://i.imgur.com/UApLTDr.jpg)

#### Using the terminal

But we can also create the application using the Heroku CLI. The good thing about using the CLI is that when creating the application, `remote` is created automatically:

```console
heroku apps:create dontpanicapi
```

And that should output something like this:

![creating an app named using heroku cli](https://i.imgur.com/FLlhj90.jpg)

One important thing here is that the name you choose for your application must be unique in Heroku, using the interface you'll get imiate feedback whether the name you chose is available or not. This is important because the name of your application is used to create the Heroku subdomain. If you try to create an application with a name that is  already being used, you see an output to the command above like this this:

![failed to create app using heroku cli](https://i.imgur.com/w2bKUn0.jpg)

If you don't care about the name of your application, you can run the following command:

```console
heroku create
```

And it will create an app with a random name:

![creating an app using heroku cli](https://i.imgur.com/lSdiAD0.jpg)

After creating the application, you can take a peek [at the Heroku dashboard in the applications area](https://dashboard.heroku.com/apps) to see the list of your applications:

![list of apps on heroku dashboard](https://i.imgur.com/TG03C9A.jpg)

### And finally deploy time!

After committing everything, logging in and creating your application on Heroku it's _deploy_ time!! 🎉🎉🎉

Deploying here means sending the application code to the server and running the process to get our API up on the Heroku instance.

Other contexts may bring variations and intermediate steps of the one I am presenting here, since as our application is simple and Heroku is made to help us get our applications up and running, the biggest job becomes the creation of the configuration files (which you know how to do now) 😉

Then, the command that will actually send the code to the server is:

```console
git push heroku master
```

If command is successful you should see something like this outputed to the terminal:

![Terminal showing the successfull deployment](https://i.imgur.com/KLXcAhj.jpg)

One last though, you may need to ensure that your application has at least one _dyno_ running with the following command:

```console
heroku ps: scale web = 1
```

### Dynos

<div style="width:100%;height:0;padding-bottom:80%;position:relative;"><iframe src="https://giphy.com/embed/xTk9ZY0C9ZWM2NgmCA" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><br>

Now you maybe asking yourself, what is a _dyno_? A _dyno_ is a Linux Container, Heroku uses a container model that isolates your application and allows for easy scalability of the system. In other, less technical words: Take all the code and configuration files we've written so far and put them in a box and put them to run, that is a _dyno_.

Now to see if your API is actually working we can (in this case) open a browser and access `https://dontpanicapi.herokuapp.com/` or use the command line to open app URL in the browser:

```console
heroku open
```

If everything went well you will see something like this:

![Get without authorization header in browser](https://i.imgur.com/YhkblPE.jpg)

What happened was the following: when accessing the URL of the application in Heroku, the browser does a GET request for API with the standard header, that is, without an `Authorization` field.

We could achieve the same result by running the following command on the terminal:

```console
curl -X GET -k -i 'https://dontpanicapi.herokuapp.com/'
```

That gives me this result:

![Get without authorization header on the terminal with cURL](https://i.imgur.com/fK6LERi.jpg)

Now as we know, this API of ours will have a different response if you pass the `Authorization` header with the value of `42`, so let's make the request:

```console
curl -X GET -k -H 'Authorization: 42' \
    -i 'https://dontpanicapi.herokuapp.com/'
```

And checking out the result:

![Get with authorization header on the terminal with cURL](https://i.imgur.com/54vBZJy.jpg)

Can you pass the authorization header on the browser? You totally can! But I'll explain how to do this that in another post/tutorial that I promise to link here when finish writing.

## Pro tip: Log files

Let's say that you have made a mistake in the process of configuring your application and, when deploying, Heroku warns you that it was unsuccessful attempt. In this case the first place to look for information about what went wrong is the logs.

A good system logs all actions performed. In this case, Heroku takes care of logging all the details for us, so let's ask for the logs using the CLI. Here I still write the logs in a file to facilitate inspection, see:

```console
heroku logs > out.log
```

Examples of lines you will find in one of these logs:

```plaintext
2021-02-15T00:56:46.708128+00:00 heroku[web.1]: Starting process with command `python dont_panic.py`
2021-02-15T00:56:50.825880+00:00 app[web.1]: * Serving Flask app "dont_panic" (lazy loading)
2021-02-15T00:56:50.825954+00:00 app[web.1]: * Environment: production
2021-02-15T00:56:50.826115+00:00 app[web.1]: WARNING: This is a development server. Do not use it in a production deployment.
2021-02-15T00:56:50.826237+00:00 app[web.1]: Use a production WSGI server instead.
2021-02-15T00:56:50.826326+00:00 app[web.1]: * Debug mode: off
2021-02-15T00:56:50.831184+00:00 app[web.1]: * Running on http://0.0.0.0:13487/ (Press CTRL+C to quit)
2021-02-15T00:56:51.000000+00:00 app[api]: Build succeeded
2021-02-15T00:56:51.851660+00:00 heroku[web.1]: State changed from starting to up
2021-02-15T00:58:45.102206+00:00 app[web.1]: 10.47.180.171 - - [15/Feb/2021 00:58:45] "GET / HTTP/1.1" 200 -
2021-02-15T00:58:45.103509+00:00 heroku[router]: at=info method=GET path="/" host=dontpanicapi.herokuapp.com request_id=9df2f453-77e4-4b63-94
30-c88e0a27206b fwd="186.209.20.97" dyno=web.1 connect=0ms service=7ms status=200 bytes=173 protocol=https
```

Now if someone says _"Deploy the API!"_ you already know how to do it 😉

_PS.: If you have questions or comments, leave them below or send me a message I promise to try to answer, the DMs that are always open_

---

## Links

* [Code I used in this post is available here](https://github.com/jtemporal/api-example-flask-heroku-en)
* Post by Diego Garcia: [Publishing your Hello World on Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html) in Portuguese
* Text by John Kagga: [Deploying a Python Flask app on Heroku](https://medium.com/@johnkagga/deploying-a-python-flask-app-to-heroku-41250bda27d0)
* [What the Flask](http://pythonclub.com.br/what-the-flask-pt-1-introducao-ao-desenvolvimento-web-com-python.html) by Bruno Rocha in Portuguese
* [Git for beginners](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)
* [Discussion on good Git practices on Stackoverflow](https://en.stackoverflow.com/questions/60729/quais-seriam-as-pr%C3%A1ticas-recomendadas-para-commits-no-git)
* The site [Oh shit, git!](http://ohshitgit.com/) with a few more top tips in Git