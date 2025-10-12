---
comments: true
date: 2024-01-19 10:00:00-05:00
description: Aprenda as diferenças entre Flask e FastAPI ao lidar com templates, routers
  e arquivos estáticos
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png
lang: pt
last_updated: 2025-05-16 19:00:00-05:00
layout: post
tags:
- python
- portugues
- tutorial
title: Dicas para migrar uma aplicação de Flask para FastAPI e vice-versa
translations:
- lang: en
  url: /tips-on-migrating-from-flask-to-fastapi-and-vice-versa
author_note: false
type: post
---


Você está migrando do Flask para o FastAPI e enfrentando problemas? Neste post do blog, você aprenderá sobre alguns dos problemas que pode encontrar ao migrar uma aplicação web de Flask para FastAPI, e também como resolver tais problemas.

## A aplicação web que deu início a tudo

Como devrel na Auth0, eu crio aplicações de exemplo que podem ser usadas para mostrar nosso produto. Por exemplo, eu utilizei uma [aplicação de amostra construída com Flask, Jinja e Auth0](https://developer.auth0.com/resources/guides/web-app/flask/basic-authentication) para criar uma demonstração para estandes patrocinados. Essa aplicação demonstra como Flask e Auth0 podem ser usados em conjunto para desenvolver aplicações web.

Essa aplicação é uma aplicação web típica, composta por um backend construído com [Flask](http://flask.palletsprojects.com/), um frontend feito com modelos [Jinja](https://jinja.palletsprojects.com/en/3.1.x/) e um pouco de CSS. Ela também é protegida com Auth0 para simplificar os processos de autenticação e autorização.

Enquanto eu estava codificando uma amostra de código para responder uma pergunta de uma pessoa desenvolvedora na web, surgiu um pensamento na minha cabeça: "*Já que a Auth0 pode ser usada com qualquer framework, por que não criar uma versão da aplicação de exemplo usando FastAPI no backend em vez de Flask?"*

Pensando no trabalho que eu faço, eu poderia usar a nova versão construída com [FastAPI](https://fastapi.tiangolo.com/) para escrever um guia que ajudaria pessoas desenvolvedoras a entender como proteger suas aplicações construídas em FastAPI usando o Auth0. Então, decidi usar o exemplo construído em Flask e migrar as coisas para uma aplicação feita em FastAPI. Para facilitar as coisas para mim, meu plano era:

1. Reutilizar o máximo possível da aplicação original construída com Flask:
    1. Copiar templates e stylesheets como também qualquer JavaScript.
2. Ajustar qualquer coisa necessária do código em Flask para funcionar com FastAPI.

Esse era um plano simples. Apenas dois passos. "*Quão difícil poderia ser?"* Eu sei, eu sei, famosas últimas palavras. Então, assim que comecei a fazer a migração, percebi que haveria algumas coisas que eu precisaria ajustar para que a aplicação FastAPI funcionasse corretamente.

Abaixo você pode ver o que é necessário ajustar se você tiver uma aplicação semelhante que queira migrar de Flask para FastAPI.

Disclaimer: Since the authentication guide in FastAPI is not public yet, I have created two sample applications with all the code shown in the examples of this blog post. If you are interested in reviewing the code, both applications are available on GitHub. You can follow the links below:

Pequeno aviso: Como o guia de autenticação no FastAPI ainda não é público, criei dois exemplos de aplicações com todo o código mostrado nos exemplos deste post do blog. Se você quiser revisar o código, ambas aplicações estão disponíveis no GitHub. Você pode seguir os links abaixo:

- [Flask Minimal WebApp with Auth0](https://github.com/jtemporal/minimal-flask-webapp-auth0)
- [FastAPI Minimal WebApp with Auth0](https://github.com/jtemporal/minimal-fastapi-webapp-auth0)

## Templates

Ambos Flask e FastAPI suportam templates usando Jinja, mas existem algumas diferenças em como usar templates.

O Flask identificará automaticamente os templates em seu projeto para que você possa usar o método `render_template` e o Flask procurará templates na pasta do seu projeto. [Você até pode ter dois formatos](https://flask.palletsprojects.com/en/1.1.x/quickstart/#rendering-templates): seja como um módulo onde o modelo está na sua pasta raiz ou como um pacote onde o modelo está dentro da pasta da sua aplicação.

Desde que você use uma pasta `templates/`, o Flask automaticamente irá reconhecê-la. Isso só varia se você estiver usando Blueprints, pois será necessário passar o caminho para as templates no blueprint que você criar.

No FastAPI, por outro lado, não só é necessário garantir a instalação do Jinja2 em seu ambiente, mas também é preciso informar ao FastAPI onde encontrar os templates. Dito isso, você pode colocar a pasta de templates em qualquer lugar, mas precisará instanciar uma variável de templates para que o FastAPI a reconheça, desta forma:

```python
from fastapi.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates")
```

Depois disso, você pode usar essa variável para renderizar o template para um determinado endpoint assim:

```python
@app.get("/")
def home(request: Request):
    """
    Home endpoint
    """
    return templates.TemplateResponse("home.html")
```

#### Filtros no Jinja

Para modificar variáveis dentro de uma página você pode usar filtros no Jinja. Nas aplicações de exemplo, criei um filtro `to_pretty_json` para fazer o print “bonito” de um objeto JSON no na página de `/profile`. Essa função existe do mesmo jeito em ambos os projetos, porém a forma de disponibilizá-la para páginas é um pouco diferente em cada framework.

*Nota:* você vai perceber que ambos frameworks funcionarão de forma semelhante, mas os nomes das propriedades serão diferentes.

Já que o Flask automaticamente reconhece os templates, a aplicação Flask possui uma propriedade chamada `jinja_env` que corresponde ao ambiente do Jinja e que você pode editar usando o dicionário de filtros para criar novos filtros dessa forma:

```python
app.jinja_env.filters['to_pretty_json'] = to_pretty_json
```

Você também pode usar o [decorador de filtro para templates](https://flask.palletsprojects.com/en/2.3.x/templating/#registering-filters).

Como no FastAPI você precisa criar a variável de templates, você também usará essa variável para passar um novo filtro. A variável `templates` possui a propriedade `env`, que permite acessar o dicionário de `filters`, como você pode ver abaixo:

```python
templates.env.filters['to_pretty_json'] = to_pretty_json
```

## Pasta de arquivos estáticos

Assim como no caso dos templates, tanto Flask quanto FastAPI permitem agrupar os arquivos estáticos (CSS, JavaScript e imagens) na mesma pasta, mas mais uma vez existem algumas diferenças.

Flask suporta arquivos estáticos "de cara", sem necessidade de configuração, você só precisa adicionar a pasta `static/` ao seu projeto, e é isso, não é necessário nenhuma configuração extra para acessar arquivos estáticos a partir dos seus templates e páginas.

Para o FastAPI, assim como a pasta de templates, você precisa definir a localização dos arquivos estáticos usando a propriedade `mount`, que “acopla” a pasta de arquivos estáticos à sua aplicação, e a classe `StaticFiles` para inicializar local do diretório.

```python
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static"
)
```

Observe que essa forma de acoplar a pasta de arquivos estáticos à sua aplicação web cria uma aplicação independente e ela não será detectada pelo OpenAPI ou pela documentação, mas você ainda poderá usar coisas como a função `url_for` em seus templates.

### Usando a função url_for nos templates

Templates em ambos Flask e FastAPI permitem que você defina programaticamente URLs para arquivos e endpoints usando a função `url_for`, mas como você pode esperar, os parâmetros diferem em cada framework.

Por exemplo, no Flask, para adicionar CSS em `base.html`, você passa o nome da pasta `static`, seguido do parâmetro chamado `filename`, contendo o nome do seu arquivo CSS.

{% raw %}
```html
<link href="{{ url_for('static', filename='style.css') }}" rel="stylesheet" />
```
{% endraw %}

Para o FastAPI, a funcionalidade da função `url_for` será a mesma, mas o parâmetro para o nome do arquivo é chamado de `path`.

{% raw %}
```html
<link href="{{ url_for('static', path='style.css') }}" rel="stylesheet" />
```
{% endraw %}

## Sessões

Para aplicações web, normalmente se define uma forma de gerenciar sessões. Abaixo você pode ver como você pode interagir com uma sessão em cada framework. O exemplo mostrará como limpar uma sessão ao fazer logout.

No Flask, você pode acessar a sessão a partir do objeto `session` que pode ser importado do módulo `flask`, como você pode ver abaixo:

```python
from flask import session

# ... blueprint definition

@webapp_bp.route("clear-session-example")
def session_clearing():
    """
    example on how to clear a session, often used in logout endpoints
    """
    session.clear()
    # ... continuação da lógica
```

Enquanto isso, no FastAPI, a sessão faz parte do objeto `Request`, você pode acessá-la passando a requisição como parte da função de endpoint e, em seguida, usando `request.session`, assim:

```python
from fastapi import Request

# ... definição do router

@webapp_router.get("/profile")
def profile(request: Request):
    user_info = request.session['userinfo']
    # ... continução da lógica
```

## Aplicações modulares: Blueprint e APIRouter

Para aplicações mais complexas, que normalmente incluem vários módulos dentro de uma aplicação, você precisará usar um roteador para poder ter uma separação entre as responsabilidades de endpoints. Para isso, você terá um `Blueprint` no Flask e um `APIRouter` no FastAPI.

Depois de criar o Blueprint ou APIRouter, você precisará registrá-los em na sua aplicação. Veja como fazer isso para ambos os frameworks a seguir.

O Blueprint precisará de mais algumas configurações, como o nome desse blueprint (`'webapp'`), bem como o nome de importação (`__name__`) e qualquer outra configuração necessária. Neste exemplo, passamos a pasta de templates para o webapp:

```python
from flask import Flask, Blueprint

webapp_bp = Blueprint(
    'webapp', __name__, template_folder="templates"
)

app = Flask(__name__)
```

Uma vez que o blueprint é criado, você pode registrá-lo na aplicação. Isso ajuda a disponibilizar qualquer visualização/rota dentro do seu blueprint para o app. O registro é feito chamando o método `register_blueprint` do seu `app` e passando o blueprint da seguinte forma:

```python
from flask import Flask

app = Flask(__name__)

app.register_blueprint(webapp_bp, url_prefix='/')
```

Para o FastAPI, o `APIRouter` funcionará de forma semelhante ao `Blueprint` no Flask, a diferença é que você não precisa passar nenhum nome, dê uma olhada:

```python
from fastapi import APIRouter

webapp_router = APIRouter()
```

Em seguida, para registrar o roteador, você deve usar o método `include_router` do aplicação FastAPI `app` e passar o `webapp_router` da seguinte forma:

```python
from fastapi import FastAPI

app = FastAPI()

app.include_router(webapp_router)
```

### Usando url_for nos endpoints

Além dos templates, você pode usar o `url_for` em um endpoint para definir programaticamente o caminho para um determinado endpoint ou rota.

Para usar `url_for` no Flask, você precisa importar a função da biblioteca `flask` e, em seguida, passar o nome do endpoint. Se o seu endpoint estiver em outro módulo, lembre-se de passar também o nome desse módulo, assim:

```python
from flask import redirect, url_for

# ... definição da blueprint

@webapp_bp.route("/redirect-example")
def redirect_example():

    return redirect(url_for("webapp.home"))
```

Enquanto isso, no FastAPI, o `url_for` é um método e vem da classe `Request`. Você precisa passar o nome do endpoint, se esse endpoint fizer parte da aplicação, mesmo que esteja em outro módulo, tudo funcionará a partir daí e não há necessidade de passar o nome do módulo como no Flask.

```python
from fastapi import Request
from fastapi.responses import RedirectResponse

# ... router definition

@webapp_router.get("/redirect-example", dependencies=[Depends(ProtectedEndpoint)])
def redirect_example(request: Request):

    return RedirectResponse(url=request.url_for("profile"))
```

## Recapitulando

Migrar frameworks em uma aplicação pode ser uma tarefa assustadora, especialmente se você não souber onde as coisas podem dar errado após copiar e colar o código. Mas se você souber onde as coisas serão diferentes, a migração será muito mais tranquila.

Aqui está uma versão resumida das coisas a serem observadas se você pretende migrar do Flask para o FastAPI e vice-versa:

- O Flask irá detectar automaticamente os templates, mas o FastAPI precisa ser informado onde encontrar os templates usando a classe `Jinja2Templates` e passando o diretório dos templates.
- O Flask utilizará a função `render_template` para renderizar páginas, enquanto o FastAPI utilizará `TemplateResponse` que vem da classe `Jinja2Templates`.
- Para criar novos filtros no Flask, você usa a propriedade `jinja_env`, o FastAPI usará a propriedade `env`.
- O Flask irá reconhecer automaticamente a pasta com arquivos estáticos, para o FastAPI você precisa "montar" a pasta e usar a classe `StaticFiles`.
- As sessões são tratadas de forma diferente, para o Flask existe um objeto `session`, para o FastAPI o objeto `session` faz parte da classe `Request`.
- Para aplicações mais complexas, você usa `Blueprint` no Flask para definir novas rotas, enquanto no FastAPI você terá uma estrutura semelhante chamada `APIRouter`. Lembre-se de registrar seu blueprint ou seu router com a aplicação.
- Por fim, lembre-se de usar a função `url_for` com o parâmetro correto `filename` para o Flask e `path` para o FastAPI, lembre-se também que nos seus endpoints `url_for` existe como uma função autônoma no Flask, enquanto é um método da classe `Request` no FastAPI.

Caso você queira ver as aplicações em cada framework e comparar as diferenças por conta própria, aqui estão os repositórios no GitHub:

- [Flask Minimal WebApp with Auth0](https://github.com/jtemporal/minimal-flask-webapp-auth0)
- [FastAPI Minimal WebApp with Auth0](https://github.com/jtemporal/minimal-fastapi-webapp-auth0)

Finalmente, se você passou por um processo semelhante, quais outros problemas você enfrentou e como os resolveu? Eu adoraria saber mais sobre sua experiência, me envie uma [mensagem em qualquer uma das minhas redes sociais](https://jtemporal.com/socials).