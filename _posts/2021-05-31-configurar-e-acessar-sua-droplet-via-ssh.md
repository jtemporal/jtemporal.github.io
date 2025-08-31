---
author_note: You can read this article in English too
author_note_link: https://jtemporal.com/configuring-and-accessing-your-droplet-via-ssh/
comments: true
date: 2021-05-31 00:00:00 -0300
description: Um guia passo-a-passo para você configurar o acesso SSH da sua Droplet
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png
lang: pt
layout: post
tags:
- droplet
- digital ocean
- ssh
- cloud computing
- cloud
- tutorial
- portugues
title: Configurar e acessar sua droplet via SSH
translations:
- lang: en
  url: /configuring-and-accessing-your-droplet-via-ssh
translator: false
type: post
---


Se você leu meu tutorial sobre [como criar sua máquina na nuvem com o Digital Ocean](https://jtemporal.com/criando-a-sua-maquina-na-nuvem-com-digital-ocean/), agora você tem uma nova máquina na nuvem, yay você! Mas você ainda precisa configurar a máquina para poder acessaá-la via SSH.

Para configurar o acesso SSH, você precisará fazer o login na sua máquina usando o acesso root pela primeira vez. Isso pode ser um pouco complicado, e para fazer o primeiro acesso, você precisará definir uma nova senha, pois todo sistema vem com um usuário root e senha predefinidos.

A primeira coisa que você precisa fazer é acessar a página da droplet específica clicando na sua droplet na lista de droplets, e você verá algo assim:

![Página específica da Droplet](https://i.imgur.com/ncXphkX.jpg)

Depois disso, você precisará acessar o console para essa droplet. O console é um terminal dentro de uma janela do navegador e para acessá-lo, clique no botão `Console` no cabeçalho:

![Opção console mostrado no dashboard](https://i.imgur.com/myKV9Jy.jpg)

Then you’ll see something like the image below in a new tab of your browser:

![Imagem mostrando o console, terminal no navegador](https://i.imgur.com/t9gNOKU.jpg)

Como eu não consegui encontrar a senha padrão para o meu droplet, aqui está o que eu fiz: cliquei na opção `Acesso` no menu da esquerda:

![Opção de Access no menu a esquerda](https://i.imgur.com/WU01T2H.jpg)

Uma vez que a página carregar, você verá uma opção “*Reset the root password”* para redefinir a senha root e é exatamente o que queremos:

![Página com a seção para resetar a senha root](https://i.imgur.com/xjFOm86.jpg)

Então você deve clicar no botão `Reset Root Password`. Você pode estar se perguntando, "O que acontecerá se você clicar neste botão assustador?" e a primeira coisa que acontecerá é que a droplet será reiniciada. Em segundo lugar, uma nova senha root será criada para você e, por fim, a nova senha será enviada para você por e-mail para que você possa acessar seu droplet via console. Aqui está um exemplo de tal e-mail:

![Nova senha recebida por e-mail](https://i.imgur.com/WJEvlXV.jpg)

Agora, com essa senha, você pode voltar à página da droplet e abrir o console novamente e você deve inserir as informações que você tem. O usuário para root no Ubuntu é `root` e a senha é a que você recebeu por e-mail. Depois disso, você pode configurar a nova senha para o usuário root:

![Nova senha na página com o console.](https://i.imgur.com/U6Tuuj0.jpg)

*Nota:* você precisará encontrar o usuário root padrão para o sistema operacional de sua escolha.

Agora você tem para começar!

![https://media.giphy.com/media/JykvbWfXtAHSM/source.mp4](https://media.giphy.com/media/JykvbWfXtAHSM/source.mp4)

## Criar o seu próprio usuário

Tudo bem, talvez você esteja indo bem usando o usuário root, mas eu gosto do meu tema de terminal colorido. Então é hora de criar um usuário que me permita ter minhas customizações. Para fazer isso, existem alguns comandos.

Primeiro, precisamos escolher o seu nome de usuário. Por falta de criatividade, eu escolhi `jess` para ser meu nome de usuário, e você pode usar o comando `adduser` para criar um novo usuário:

```
adduser jess
```

E depois que você executar o comando, você será solicitado a criar uma senha. Você pode opcionalmente adicionar algumas informações extras para o usuário:

![Adicionando novo usuário](https://i.imgur.com/xtBv9p7.jpg)

Uma vez que você confirme que todas as informações estão corretas, você pode dar ao seu usuário poderes sudo. Os poderes sudo permitirão que você instale coisas sem ter que acessar o usuário root. Então, para fazer isso, você precisa executar o comando seguinte:

```
usermod -aG sudo jess
```

Lembre-se de ajustar o comando para o seu nome de usuário. E agora você terminou de configurar sua conta de usuário. Parabéns!

## Configurando a droplet para acesso via SSH

Outra coisa que podemos querer fazer é acessar o nosso perfil de usuário via SSH. Agora vamos ver o que precisamos configurar para poder acessar o seu usuário.

Meu principal objetivo ao configurar essa instância era para que eu pudesse codificar usando o meu iPad. Comprei um aplicativo chamado [TexTastic](https://www.textasticapp.com/), e é um aplicativo muito completo. O Textastic tem a possibilidade de acessar uma máquina via SSH, e ele cria um terminal para você. Eu estou usando esse app há bastante tempo, e até agora não me decepcionou.

Okay, estou divagando um pouco. Vamos voltar ao ponto em questão, acessar a máquina com SSH. Como eu não queria gerar um novo par de chaves SSH, copiei o SSH que usei para acessar a máquina como root. Quando você adiciona a chave SSH como um método de autenticação ao criar a droplet, ele adiciona a chave pública para o arquivo `authorized_keys` do usuário root. Para usar a mesma chave para acessar seu usuário como usuário root, você deve copiar este arquivo para o diretório `.ssh` do seu usuário e ajustar a propriedade do arquivo (ownership).

Para os próximos comandos, vou alternar entre o meu usuário `jess` e o usuário `root`. Eu indicarei qual usuário deve usar para executar o comando usando parênteses e o nome do usuário dentro, como `(jess)` ou `(root)` antes do próprio comando.

A primeira coisa que você deve fazer é fazer login como seu usuário:

```
(root) $ su jess
```

E você provavelmente precisará a inserir a senha do usuário. Depois disso você pode criar o diretório `.ssh`:

```
(jess) $ mkdir ~/.ssh
```

Depois disso, você deve voltar para o usuário root e copiar o arquivo `authorized_keys`:

```
(jess) $ su root
(root) $ cp ~/.ssh/authorized_keys /home/jess/.ssh/
```

Então, o último passo, você deve alterar a propriedade do arquivo que acabou de copiar. Se você não fizer isso, não será capaz de acessar sua máquina como seu usuário.

```
(root) $ chown jess /home/jess/.ssh/authorized_keys
```

![https://media.giphy.com/media/5hxtIvk6VBzwkVCGN5/giphy.gif](https://media.giphy.com/media/5hxtIvk6VBzwkVCGN5/giphy.gif)

Bora! Pode dar uma descansadinha 😉 Você merece 👏

## Configurando sua máquina para acessar a droplet via SSH

Estamos perto, prometo! Neste ponto, você tem tudo configurado para acessar sua máquina na nuvem. Então, deixe-me ensinar a você a encontrar as informações necessárias para executar seu comando SSH.

Mais uma vez, você precisa ir para a página específica da droplet. Logo abaixo do nome da droplet, você verá uma etiqueta `ipv4` que contém um IP, esse é o seu domínio:

![Encontrando o endereço ipv4](https://i.imgur.com/MKBAZlT.jpg)

E é isso, tudo o que você precisa fazer é abrir o seu terminal preferido e executar o comando assim:

```
$ ssh jess@159.203.72.53
```

E isso vai te permitir acessar diretamente a droplet  porque você configurou as chaves SSH e tudo o mais.

## Próximos passos

Depois que tudo estiver configurado, provavelmente farei alguns ajustes na minha configuração para melhorar a aparência do meu terminal. Aqui estão algumas coisas que você também pode querer de fazer:

- Instalar o zshell
- Ajustar a configuração do VIM/emacs/nano
- Criar um novo par de chaves SSH para usar com o GitHub a partir da instância na nuvem.

É isso por hoje 😉

## Links

Aqui está um link que me ajudou, se você quiser conferir:

- [Post que eu segui para criar um usuário sudo (em inglês)](https://linuxize.com/post/how-to-create-a-sudo-user-on-ubuntu/)

