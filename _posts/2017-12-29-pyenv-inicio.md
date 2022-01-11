---
title: 'Python e suas versões: pyenv'
layout: post
date: 2017-12-29T10:00:00.000+00:00
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png"
lang: "pt"
translated: "/python-and-its-versions"
tags:
- colinha
- python
- pyenv
- versoes
- português
comments: true
description: Aprenda a instalar e gerenciar versões do Python usando pyenv

---
***

Author note: You can [read this post in English here](https://jtemporal.com/python-and-its-versions/).

***

Uma das primeiras coisas que aprendemos sobre [Python](https://www.python.org/) é que existem mais de uma versão da mesma linguagem funcionando a todo vapor. Isso traz alguns problemas e a inevitável pergunta _"Qual versão eu devo usar?"_. A colinha de hoje mostra uma forma de instalar e manter o controle de várias versões do Python na sua máquina usando o [pyenv](https://github.com/pyenv/pyenv) 😉.

Entre outras coisas, as duas melhores features _pyenv_ na minha humilde opinião são:

1. instalar novas versões do Python facilmente;
2. escolher a versão global do Python.

<center> <img src="https://media.giphy.com/media/10lqVdCCc9812M/giphy.gif"/></center>

Pra começar você precisa instalar o pyenv, aqui eu vou mostrar um dos métodos de instalação, mas [lá no _readme_ do projeto tem outras](https://github.com/pyenv/pyenv#installation) (e também detalhes específicos de cada sistema operacional):

``` console
$ git clone https://github.com/pyenv/pyenv.git ~/.pyenv
$ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
$ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
$ exec "$SHELL"
```

Depois desse passo é bem facinho, as outras versões do Python estão a um _install_ de distância:

``` console
$ pyenv install 3.6.4
```

Se estiver em dúvida quais versões você pode instalar só usar a flag `-l` do _install_ que ele vai listar todas as disponíveis:

``` console
$ pyenv install -l
```

Massa né? Agora é só sair instalando versão adoidado 😂

E agora o momento da verdade, para configurar a versão global do Python, isto é, definir que versão do Python você vai usar quando colocar o Python pra rodar, use o seguinte comando:

    $ pyenv global 3.6.4

Assim independente de qual lugar você navegar no seu terminal o Python que estará rodando será o `3.6.4`. Isso é muito útil se todos os seus projetos estiverem na mesma versão. Outra funcionalidade legal do _pyenv_ é definir um Python local, vamos supor que um determinado projeto só rode no Python `3.5.3` então basta você instalar essa versão (como você aprendeu ali em cima) e em seguida ir até a pasta desse projeto e usar este comando:

    $ pyenv local 3.5.3

Assim sempre que você entrar nessa pasta o pyenv vai "ativar" o Python correto para o seu projeto.  
  
Chega de sofrer com versões do Python! 🎉

***

Links

* [Você pode continuar a ler sobre o pyenv na Parte 2 desse texto](https://jtemporal.com/pyenv-parte2/).