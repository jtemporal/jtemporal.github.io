---
layout: post
title: Criando a sua máquina na nuvem com Digital Ocean
date: 2021-04-21T19:48:25.000-03:00
image: /images/covers/tutorial.webp
comments: true
description: A step-by-step guide to create an instance (Droplet) at Digital Ocean
tags:
- portugues
- droplet
- ssh
- digital ocean
- cloud
- tutorial
related: true
posts_list:
- usando-um-cms
- como-ser-cientista-de-dados-usando-um-computador-da-xuxa

---
Este post é um passo a passo sobre como criar uma instância de nuvem no Digital Ocean.

<center> <img alt="video da Michelle Obama dizendo 'Vamos Fazer isso!'" src="https://media.giphy.com/media/lRXMa7BOWsdcF3NxTA/giphy.gif"> <br>
<i>video da Michelle Obama dizendo 'Vamos Fazer isso!'</i>
</center>

## **Conheça a Digital Ocean**

A Digital Ocean (DO) oferece uma gama de soluções em computação em nuvem. Minha solução favorita deles é chamada de [Droplets](https://www.digitalocean.com/products/droplets/) (ou gotas em português). As droplets são uma máquina virtual que você pode usar para praticamente qualquer coisa, e adoro usá-las como um computador poderoso [quando tenho uma disponibilidade de poder computacional limitada](https://jtemporal.com/como-ser-cientista-de-dados-usando-um-computador-da-xuxa/). Ainda assim, também é uma escolha muito legal para quem deseja codificar de qualquer lugar, até mesmo de dispositivos móveis.

Há uma grande variedade de sistemas operacionais para escolher, e é bastante simples para começar, então sempre que preciso de alguma computação em nuvem, penso no Digital Ocean como a primeira escolha.

## **Crie uma droplet**

A primeira coisa que você precisa fazer é criar sua conta na DO. Para fazer isso, você deve [acessar o site deles](https://digitalocean.com) e se inscrever por meio do formulário já disponível na página inicial:

![Welcome page from Digital Ocean](https://i.imgur.com/fMY3yXz.jpg)

Depois disso, você será levado ao seu painel de controle, onde verá todas as soluções disponíveis, e deverá clicar na `Droplets` opção do menu à esquerda, e isso o levará para a página onde você pode veja uma lista de suas droplets atuais:

![droplets list on dashboard](https://i.imgur.com/fKpV2pK.jpg)

Como você pode ver na imagem acima, eu já tenho uma droplet chamado lá `jtemporal` e também posso criar uma nova clicando no botão `Create droplet` (Criar Droplet em tradução livre) que aparece em verde no canto superior esquerdo, e isso vai te levar pra uma página onde você pode escolher a configuração que você deseja para a sua droplet.

A primeira coisa que você precisa escolher é o sistema operacional:

![OS options](https://i.imgur.com/NsgOBze.jpg)

Em seguida, você deve escolher um plano de pagamento:

![payment plans for droplets](https://i.imgur.com/rgDRnA3.jpg)

Escolher a configuração correta é essencial. Atualmente, eu uso uma droplet principalmente para coisas como escrever e criar exemplos para postagens no blog. O plano básico com uma CPU compartilhada se encaixa perfeitamente para esse tipo de uso, mas talvez você precise de uma CPU dedicada se você precisar rodar algo mais pesado. Portanto, escolha com cuidado. Minha instância atual é do plano básico com uma CPU de 2 GB e disco de 50 GB, o que vai me custar dez dólares por mês.

O dólar tá caro eu sei, mas eu não vivo com uma droplet o tempo todo, eu sempre apago ela depois que termino a tarefa que tinha para fazer e crio uma nova quando eu precisar, com isso o custo fica em questão de centavos de dólares.

Depois de escolher a melhor configuração para o seu uso, você deve escolher se deseja "adicionar armazenamento em bloco" na seção Add block storage, imagine que este é o HD externo que você pode levar com você sempre que quiser. O armazenamento em bloco salva dados e é compartilhado entre as instâncias. Mas observe que o armazenamento em bloco tem um custo extra, então você está com um orçamento apertado, tenha isso em mente. 😉

![add block storage](https://i.imgur.com/T9ajYfH.jpg)

Depois de decidir qual plano usar e se deseja ou não ter armazenamento em bloco, você deve escolher uma região para sua instância. Isso significa que você deve decidir em qual lugar do mundo o data center que hospedará a sua máquina virtual está fisicamente localizado. Quanto mais próximos estiverem de você geograficamente, menor será o atraso na comunicação com a máquina. Escolhi a região de Nova York por ser a mais próxima de mim.

![região do datacenter](https://i.imgur.com/FMYxQYU.jpg)

Cada região vem com uma rede VPC configurada para que você possa transferir facilmente dados e informações de uma instância para outra na mesma região. Você também pode adicionar redes VPC personalizadas, mas por enquanto, a que vem por padrão será suficiente.

![aditional options](https://i.imgur.com/ouc22ui.jpg)

Você também pode adicionar alguns complementos extras aos seus droplets, como monitoramento e disponibilidade de conexões IPv6. Eu não escolhi nenhum complemento, pois não preciso deles agora, mas escolha o que melhor se adaptar às suas necessidades.

Agora que você tem todas as configurações básicas para a sua instância configurada, você precisará definir uma maneira de acessá-la. É aqui que entram as chaves SSH. Já tenho minhas chaves SSH configuradas em minha conta e você pode ver na imagem abaixo que tenho algumas, então, para esta instância, escolhi a que estou usando atualmente que é a chave chamada `textastic`. Se preferir você pode também definir uma senha para o usuário `root` se selecionar Password, mas lembre-se de não repetir senhas e usar sempre um gerenciador de senhas para gerar senhas longas e randômicas (eu uso o LastPass)

![SSH keys configuration](https://i.imgur.com/n4FyN4T.jpg)

To finalize, you need to give a name to your instance. If you don't want to choose a name Digital Ocean generates a random name, as you can see below:

![hostname](https://i.imgur.com/gsAWQ0E.jpg)

For the instance I'm going to use daily, I gave it a shorter name - jtemporal - the name I usually use for my handles on social media 🤣.

There are 3 more things you'll need to decide on: you can add tags to your instance; this can be a helpful organizational tool if you have many projects going on and you want to group instances based on topics. You can also create different projects and select the project you want here, and finally, you can enable backups. I didn't do any of this, but I truly recommend it. Now you are almost there. You only need to click the big green button that says `Create Droplet`:

![create droplet](https://i.imgur.com/i3F6S0A.jpg)

and your instance will be created and will start to boot up:

![instance booting up](https://i.imgur.com/LKMzsga.jpg)

Once you click the "Create Droplet" button, you'll see your new droplet on the list of droplets linked to your account, and you might need to wait a couple minutes while it finishes booting up. Once the droplet is ready, it will have a green dot by the name like my instance  `jtemporal` has in the above image, and then you can access it.

<div style="width:100%;height:0;padding-bottom:53%;position:relative;"><iframe src="https://giphy.com/embed/ijGS9TME6iN7W" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

Congratulations! You did it! You created your droplet successfully!

***

[In this next post I talk about how to configure the Droplet so you can actually use it with SSH and all](https://jtemporal.com/configuring-and-accessing-your-droplet-via-ssh/), check it out 😉