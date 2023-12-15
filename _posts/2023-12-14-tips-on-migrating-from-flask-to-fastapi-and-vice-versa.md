---
layout: post
date: 2023-12-13T10:00:00.000-05:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png
comments: true
title: Tips on migrating from Flask to FastAPI and vice-versa
description: Learn the differences between Flask and FastAPI when dealing with templates, routers, and static files
type: post
tags:
- python
- english
- tutorial
lang: en

---

Are you migrating from Flask to FastAPI and facing problems? In this blog post, you will learn about some of the issues that you may encounter when migrating a web application from Flask to FastAPI, as well as how to solve them.

## The web app that started it all

As a developer advocate at Auth0, I build sample applications that can be used to showcase our product. For example, I used a [sample app built with Flask, Jinja, and Auth0](https://developer.auth0.com/resources/guides/web-app/flask/basic-authentication) to build a demo for sponsored booths. This demo application showcases how Flask and Auth0 can be used together to develop web applications.

This app is a typical web app, consisting of a backend built in [Flask](http://flask.palletsprojects.com), a frontend made with [Jinja](https://jinja.palletsprojects.com/en/3.1.x/) templates, and some CSS. It is secured with Auth0 to simplify the authentication and authorization processes.

While writing some code to answer a question from a developer a thought popped into my mind: “*Since Auth0 can be used with any framework, why not create a version of the sample app using FastAPI in the backend instead of Flask?”*

Thinking of the work that I do, I could use the new version built with [FastAPI](https://fastapi.tiangolo.com) to write a guide that would help developers understand how to protect their applications built in FastAPI using Auth0. So I decided to use the sample built in Flask and migrate things over to a FastAPI-powered app. To make things easier on me, my plan was:

1. Reuse as much as possible of the original app built with Flask:
    1. Copy templates and styling as well as any JavaScript.
2. Adjust anything necessary for the Flask code to work the “FastAPI way”.

That was a simple plan. Only two steps. “*How hard could it be?”* I know, I know, famous last words. So once I started migrating things over, I realized there were a few things that I would need to adjust for the app in FastAPI to function properly.

Below you can see what you’ll also need to adjust if you have a similar application you want to migrate over from Flask to FastAPI.

**Disclaimer**: Since the authentication guide in FastAPI is not public yet, I have created two sample applications with all the code shown in the examples of this blog post. If you are interested in reviewing the code, both applications are available on GitHub. You can follow the links below:

- [Flask Minimal WebApp with Auth0](https://github.com/jtemporal/minimal-flask-webapp-auth0)
- [FastAPI Minimal WebApp with Auth0](https://github.com/jtemporal/minimal-fastapi-webapp-auth0)

## Templates

Both Flask and FastAPI support templating using Jinja, but there are a few differences.

Flask will automatically identify templates in your project so you can use the `render_template` method and Flask will look for the template in your project folder. [You can even have two formats](https://flask.palletsprojects.com/en/1.1.x/quickstart/#rendering-templates): either as a module where the template is on your root folder or as a package where the template lives inside your application folder.

As long as you use a `templates/` folder Flask will automatically pick up on it. This will only vary if you are using Blueprints because you will need to pass the path for the templates to the blueprint you create.

FastAPI on the other hand, not only you do have to make sure to install Jinja2 on your environment, but you also need to tell FastAPI where to find the templates. With that said you can put the templates folder anywhere, but you’ll need to instantiate a templates variable for FastAPI to pick up on it like so:

```python
from fastapi.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates")
```

After that, you can use that variable to render the template for a given endpoint like this:

```python
@app.get("/")
def home(request: Request):
    """
    Home endpoint
    """
    return templates.TemplateResponse("home.html")
```

### Jinja Filters

Filters in Jinja serve as a way to modify variables. In this sample app, we created a filter `to_pretty_json` to “pretty print” a JSON object into the  `/profile` endpoint. Even though the function is the same on both projects, the way to pass it along to the templates is a little bit different in each framework.

*Note:* you are going to notice that both frameworks will work similarly but the property names will be different.

Since Flask automatically picks up the templates, the Flask instance has a property called `jinja_env` that corresponds to the Jinja environment and that you can edit using the filters dictionary to register new filter like so:

```python
app.jinja_env.filters['to_pretty_json'] = to_pretty_json
```

You can also use the [template filter decorator](https://flask.palletsprojects.com/en/2.3.x/templating/#registering-filters).

Since in FastAPI you had to instantiate the templates variable, you’ll also use that variable to pass along the new filter. The `templates` variable has the `env` property allowing you to access the `filters` dictionary as you can see below:

```python
templates.env.filters['to_pretty_json'] = to_pretty_json
```

## Static files folder

Much like templates, both Flask and FastAPI, allow you to bundle the static files (CSS, JavaScript, and images) under the same folder, but once again there are a few differences.

Flask supports static files out of the gate with no configuration needed, you only need to add the `static/` folder to your project, and that’s it, you don’t need any extra configuration to access static files from your templates.

For FastAPI, much like the template folder, you need to set the location of the static file by using the `mount` property, which is also known as “*mounting”* the static files, and the `StaticFiles` class to instantiate the directory.

```python
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static"
)
```

Note that this way of creating the static files folder within the app creates an independent application and won’t be picked up by the OpenAPI or the docs but you’ll still be able to use things like the `url_for` function on your templates.

### Using url_for function on the templates

Both templates on Flask and FastAPI will allow you to programmatically define URLs for files and endpoints using the `url_for` function, but as you can expect the parameters differ on each framework.

For example, in Flask, to add the style sheet on your `base.html`, you pass along the folder name `static` followed by the parameter named `filename` containing the name of your CSS file.

{% raw %}
```html
<link href="{{ url_for('static', filename='style.css') }}" rel="stylesheet" />
```
{% endraw %}

For FastAPI the functionality of the `url_for` function will be the same, but the parameter for the filename is called `path`:

{% raw %}
```html
<link href="{{ url_for('static', path='style.css') }}" rel="stylesheet" />
```
{% endraw %}

## Sessions

For web applications, you usually have a way to manage sessions. Below you can see how you can interact with a session in each framework. The example will show how to clear a session when logging out.

In Flask, you can access the session from the `session` object that can be imported from the `flask` module as you can see below:

```python
from flask import session

# ... blueprint definition

@auth_bp.route("/logout")
def logout():
    """
    Logs the user out of the session
    """
    session.clear()
    # ... rest of your logout code
```

Meanwhile, in FastAPI the session is part of the `Request` object, you can access it by passing the request as part of the endpoint function, and then using it `request.session`, like so:

```python
from fastapi import Request

# ... router definition

@auth_router.get("/logout")
def logout(request: Request):
    """
    Logs the user out of the session
    """
    request.session.clear()
    # ... rest of your logout code
```

## Modular applications: Blueprint and APIRouter

For more complex applications, which usually include multiple modules inside of an app, you’ll need to use a  router so you can have some separation between responsibilities. For this, you will have a `Blueprint` in Flask and an `APIRouter` in FastAPI.

After creating the Blueprint or APIRouter you’ll need to register them with your app. Here’s what that looks like for both frameworks.

The Blueprint will need some more configuration like the name of that blueprint (`’webapp’`) as well as the import name (`__name__`) and any other configuration necessary, in this example, we passed along the template folder for the webapp:

```python
from flask import Flask, Blueprint

webapp_bp = Blueprint(
    'webapp', __name__, template_folder="templates"
)

app = Flask(__name__)
```

Once the blueprint is created you can register it to your app. This helps make available any views/routes within your blueprint for your application. The registration occurs by calling the `register_blueprint` method from your `app`, and passing along the blueprint like so:

```python
from flask import Flask

app = Flask(__name__)

app.register_blueprint(webapp_bp, url_prefix='/')
```

For FastAPI the `APIRouter` will function similarly to the `Blueprint` in Flask, the difference is that you don’t need to pass any names, take a look:

```python
from fastapi import APIRouter

webapp_router = APIRouter()
```

Then to register the router you can use the method `include_router` from your FastAPI `app`, and pass along the `webapp_router` like this:

```python
from fastapi import FastAPI

app = FastAPI()

app.include_router(webapp_router)
```

### Using url_for in the endpoints

Other than in templates, you can use the `url_for` in an endpoint to programmatically define the path for a given endpoint/route.

For using `url_for` in Flask you gotta import the function from the `flask` library and then pass the name of the endpoint. If your endpoint is in another module, remember to pass along the name of that module as well like so:

```python
from flask import redirect, url_for

# ... blueprint definition

@auth_bp.route("/logout")
def logout():
    # ... your code
    return redirect(url_for("webapp.home")
```

Meanwhile, in FastAPI the `url_for` is a method and comes from the `Request` class. You need to pass along the endpoint name, if that endpoint is part of your app, even if it is in another module, everything will work from there and there’s no need to pass the module name as well.

```python
from fastapi import Request
from fastapi import RedirectResponse

# ... router definition

@auth_router.get("/logout")
def logout(request: Request):
    # ... your logout code
    return RedirectResponse(url=request.url_for("home"))
```

## Recap

Migrating frameworks in an application can be a daunting task especially if you don’t know where things might go wrong after copying and pasting code. But if you know where things will differ the migration will go much more smoothly.

Here’s a short version of the things to keep an eye out for if you are going to migrate from Flask to FastAPI and vice-versa:

- Flask will pick up templates automatically, but FastAPI needs to be told where to find the templates using the `Jinja2Templates` class and passing along the templates directory.
- Flask will use the `render_template` function to render pages, whereas FastAPI will use `TemplateResponse` which comes from `Jinja2Templates` class.
- To create new filters in Flask you use the `jinja_env` property, FastAPI will use the `env` property.
- Flask will pick up the static folder automatically, for FastAPI you need to “mount” the folder and use the `StaticFiles` class.
- Sessions are handled differently, for Flask there’s a `session` object, for FastAPI the `session` object is part of the `Request` class.
- For more complex applications you use `Blueprint` in Flask to define new routes whereas in FastAPI you’ll have a similar structure called `APIRouter`. Remember to register your blueprint or your router with your app.
- Finally, remember to use the `url_for` function with the correct parameter `filename` for Flask and `path` for FastAPI, and that in your endpoints `url_for` exists as a standalone function in Flask whereas it is a method from the `Request` class in FastAPI.

In case you want to see apps in each framework and compare the differences for yourself here are the repositories on GitHub:

- [Flask Minimal WebApp with Auth0](https://github.com/jtemporal/minimal-flask-webapp-auth0)
- [FastAPI Minimal WebApp with Auth0](https://github.com/jtemporal/minimal-fastapi-webapp-auth0)

Finally, if you went through a similar process what other problems did you face and how did you solve them? I’d love to know more about your experience, send me a [message on any of my social profiles](https://jtemporal.com/socials).