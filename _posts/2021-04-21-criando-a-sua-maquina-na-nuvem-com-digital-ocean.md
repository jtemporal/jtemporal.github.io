---
author_note: You can read this article in English too
author_note_link: https://jtemporal.com/creating-vm-droplet-digital-ocean/
comments: true
date: 2021-04-21 19:48:25-03:00
description: Um passo-a-passo de como criar uma instância (Droplet) na Digital Ocean
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png
lang: pt
layout: post
tags:
- droplet
- ssh
- digital ocean
- cloud
- portugues
- tutorial
title: Criando a sua máquina na nuvem com Digital Ocean
translations:
- lang: en
  url: /creating-vm-droplet-digital-ocean
translator: false
type: post
---

Este post é um passo-a-passo sobre como criar uma instância de nuvem na Digital Ocean.

<center> <img alt="video da Michelle Obama dizendo 'Vamos Fazer isso!'" src="https://media.giphy.com/media/lRXMa7BOWsdcF3NxTA/giphy.gif"> <br>

<i>video da Michelle Obama dizendo 'Vamos Fazer isso!'</i>

</center>

## Conheça a Digital Ocean

A Digital Ocean (DO) oferece uma gama de soluções em computação em nuvem e a minha favorita é chamado de *[Droplet](https://www.digitalocean.com/products/droplets/)* (ou gota em Português). Droplet é uma máquina virtual que você pode usar para praticamente qualquer coisa, e adoro usá-las como um computador poderoso quando tenho poder computacional limitado, coisa que falei sobre [nesse outro artigo](https://jtemporal.com/como-ser-cientista-de-dados-usando-um-computador-da-xuxa/). Ainda assim, também é uma escolha muito legal para quem deseja codificar de qualquer lugar, até mesmo de dispositivos móveis como celulares e tablets.

Há uma grande variedade de sistemas operacionais para escolher e é bem simples para começar (apesar dos vários passos), então sempre que preciso de alguma computação em nuvem, penso na DO primeiro.

## Crie uma droplet

A primeira coisa que você precisa fazer é criar sua conta na DO. Para fazer isso, você deve [acessar o site deles](https://digitalocean.com/) e se inscrever por meio do formulário já disponível na página inicial:

![Página de boas-vindas da Digital Ocean](https://i.imgur.com/fMY3yXz.jpg)

Depois disso, a página recarregará e aparecerá o painel de controle onde você pode ver todas as soluções disponíveis. Clique na opção “*Droplets*” no menu à esquerda, e você deve ver na página uma lista de suas droplets atuais:

![Lista de droplets no painel de controle](https://i.imgur.com/fKpV2pK.jpg)

Como você pode ver na imagem acima, eu já tenho uma droplet lá chamada `jtemporal` e também posso criar uma nova clicando no botão “*Create droplet*” (Criar Droplet em tradução livre) que aparece em verde no canto superior esquerdo, e isso vai te levar pra uma página onde você pode escolher a configuração que você deseja para a sua droplet.

A primeira coisa que você precisa escolher é o sistema operacional:

![Opções de sistema operacional](https://i.imgur.com/NsgOBze.jpg)

Em seguida, você deve escolher um plano de pagamento:

![opções de planos de pagamento ](https://i.imgur.com/rgDRnA3.jpg)

Escolher a configuração correta é essencial. Atualmente, eu uso uma droplet principalmente para coisas como escrever e criar exemplos para postagens no blog. O plano básico com uma CPU compartilhada se encaixa perfeitamente para esse tipo de uso, mas talvez você precise de uma CPU dedicada se você precisar rodar algo mais pesado. Portanto, escolha com cuidado. Minha instância atual é do plano básico com uma CPU de 2 GB e disco de 50 GB, o que vai me custar dez dólares por mês.

O dólar tá caro eu sei, mas eu não vivo com uma droplet o tempo todo, eu sempre apago ela depois que termino a tarefa que tinha para fazer e crio uma nova quando eu precisar, com isso o custo fica em questão de centavos de dólares.

Depois de escolher a melhor configuração para o seu uso, você deve escolher se deseja "adicionar armazenamento em bloco" na seção *Add block storage*, imagine que este é o HD externo que você pode levar com você sempre que quiser. O armazenamento em bloco salva dados e é compartilhado entre as instâncias, mas observe que o armazenamento em bloco tem um custo extra, então você está com um orçamento apertado, tenha isso em mente. 😉

![seção de escolha de block storage](https://i.imgur.com/T9ajYfH.jpg)

Depois de decidir qual plano usar e se deseja ou não ter armazenamento em bloco, você deve escolher uma região para sua instância. Isso significa que você deve decidir em qual lugar do mundo o data center que hospedará a sua máquina virtual está fisicamente localizado. Quanto mais próximos estiverem de você geograficamente, menor será o atraso na comunicação com a máquina. Escolhi a região de Nova York por ser a mais próxima de mim.

![opções de escolha de região do datacenter](https://i.imgur.com/FMYxQYU.jpg)

Cada região vem com uma rede VPC configurada para que você possa transferir facilmente dados e informações de uma instância para outra na mesma região. Você também pode adicionar redes VPC personalizadas, mas por enquanto, a que vem por padrão será suficiente.

![opções adicionais](https://i.imgur.com/ouc22ui.jpg)

Você também pode adicionar alguns complementos extras aos seus droplets, como monitoramento e disponibilidade de conexões IPv6. Eu não escolhi nenhum complemento, pois não preciso deles agora, mas escolha o que melhor se adaptar às suas necessidades.

Agora que você tem todas as configurações básicas para a sua instância configurada, você precisará definir uma maneira de acessá-la. É aqui que entram as chaves SSH. Já tenho minhas chaves SSH configuradas em minha conta e você pode ver na imagem abaixo que tenho algumas, então, para esta instância, escolhi a que estou usando atualmente que é a chave chamada `textastic`. Se preferir você pode também definir uma senha para o usuário `root` se selecionar Password, mas lembre-se de não repetir senhas e usar sempre um gerenciador de senhas para gerar senhas longas e randômicas (eu uso o LastPass).

![SSH keys configuration](https://i.imgur.com/n4FyN4T.jpg)

Para finalizar, você precisa dar um nome à sua instância. Se você não quiser escolher um nome, a Digital Ocean gera um nome aleatório, como você pode ver abaixo:

![hostname](https://i.imgur.com/gsAWQ0E.jpg)

Para a instância que vou usar diariamente, escolhi o “jtemporal” - o nome que normalmente uso para os “arrobas” nas redes sociais 🤣.

Existem mais 3 coisas que você terá de decidir: pode adicionar etiquetas (tags) à sua instância; isto pode ser uma ferramenta de organização útil se tiver muitos projetos em andamento e quiser agrupar instâncias com base em tópicos. Também pode criar projetos diferentes e selecionar o projeto que deseja aqui, e finalmente, é possível ativar backups. Eu não fiz nada disso, mas recomendo estudar cada um desses com base no seu caso de uso. Agora você está quase lá. Só precisa de clicar no grande botão verde que diz “*Create Droplet*":

![create droplet](https://i.imgur.com/i3F6S0A.jpg)

E sua instância será criada e começará a inicializar.

![instance booting up](https://i.imgur.com/LKMzsga.jpg)

Quando você clicar no botão “*Create Droplet*", verá a sua nova droplet na lista de droplets vinculadas à sua conta e pode ser necessário esperar alguns minutos enquanto ela termina de ser configurada. Quando a droplet estiver pronta, terá um ponto verde ao lado do nome, como a minha instância `jtemporal` tem na imagem acima, e então você pode acessá-la.

<div style="width:100%;height:0;padding-bottom:53%;position:relative;"><iframe src="https://giphy.com/embed/ijGS9TME6iN7W" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

Parabéns! Você conseguiu! Você criou sua droplet com sucesso!

******

[Neste próximo post, falo sobre como configurar a Droplet para que você possa realmente usá-la com SSH e tudo.](https://jtemporal.com/configurar-e-acessar-sua-droplet-via-ssh/), depois da uma conferida 😉
