---
layout: post
title: Como ser Cientista de Dados usando um computador da Xuxa?
date: 2019-06-03 09:00:00 -0300
image: "/images/covers/tutorial.webp"
type: post
lang: pt
tags:
- tutorial
- jupyter
- jupyter notebooks
- ssh
- cloud
- cloud computing
- data science
- ciencia de dados
- tunel
- portal
- serenata de amor
- open source
- computer power
- vantagens
- desvantagens
comments: true
description: 'A resposta simples: Nuvem! Vamos ver na prática como é viver com seus Jupyter
  Notebooks na nuvem'
last_modified_at: 2026-07-26
translations:
- lang: en
  url: /how-to-be-a-data-scientist-using-less-than-4gb-ram

---
#### A resposta simples: Nuvem! Vamos ver na prática como é viver com seus Jupyter Notebooks na nuvem? Vaaamoooss!!!

Uns dois anos atrás, enquanto eu estava trabalhando na [Operação Serenata de Amor](https://serenata.ai/), meus colegas de trabalho costumavam dizer que eu tinha um computador da Xuxa ou algo tipo assim: <center><img src="https://cdn-images-1.medium.com/max/800/1*iu4Fht5QlGZcO-V30SjzxQ.jpeg"/><a href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Pense_bem.jpg/1200px-Pense_bem.jpg">Fonte</a></center>

Nada contra os computadores da Xuxa ou o Pense Bem, mas se você considerar que no trabalho com ciência de dados, _machine learning_, inteligência artificial e afins, nem o computador da Xuxa, nem o Pense Bem e, nem tão pouco 4GB de RAM, vão ser o suficiente para rodar tarefas que requerem grandes quantidades de dados em memória ao mesmo tempo.

Enquanto cientista de dados, a maior parte do trabalho envolve tarefas “pesadas”. Uma solução para resolver rapidamente a falta de capacidade de processamento do computador é o uso de uma **máquina na nuvem**.

### Vantagens

Mas o que faz a nuvem tão diferente assim? E o que faz dela um lugar tão mágico?

Hoje, um dos maiores desafios de ciência de dados e mais especificamente da área [de _big data_ é conseguir processar uma quantidade enorme de dados em pouco tempo e sem gastar muito](https://podcast.pizzadedados.com/e/episodio-012-big-data/) para isso. E, nessas horas, a nuvem é seu maior aliado.

Hoje, no Brasil, você **não** encontra um Notebook leve com uma configuração robusta, com mais do que 16GB de RAM e um SSD com mais do que 128GB, por menos de 7 mil reais. Desembolsar essa quantidade de dinheiro está além da realidade financeira da maioria das pessoas.

_Data centers_ de gigantes da tecnologia, como[ Digital Ocean](https://www.digitalocean.com) (DO), [Amazon Web Services](https://aws.amazon.com/free/?sc_channel=PS&sc_campaign=acquisition_BR&sc_publisher=google&sc_medium=english_cloud_computing_hv_b&sc_content=aws_core_e&sc_detail=amazon%20web%20services&sc_category=cloud_computing&sc_segment=188845125590&sc_matchtype=e&sc_country=BR&s_kwcid=AL!4422!3!188845125590!e!!g!!amazon%20web%20services&ef_id=WOL2gwAAAOiSCw9m:20170404012731:s) (AWS), [Google Cloud](https://cloud.google.com/compute/docs/instances/?hl=pt-br) e [Azure](https://azure.microsoft.com/pt-br/), têm disponibilizado acesso de baixo custo a máquinas com capacidade de processamento maior que os tais notebooks de 7 mil reais. Além disso, uma conexão com pouca largura de banda é o suficiente para acessar sua máquina na nuvem e colocar os _scripts_ para rodarem.

Essas máquinas disponíveis conseguem, em questão de poucas horas, executar processamentos que levariam dias ou mesmo não iriam rodar em computadores convencionais.

### Desvantagens

Mas a nuvem não é só feita de vantagens, existem alguns pontos que ainda **me** incomodam ao usá-la. Por exemplo, todos as empresas que oferecem esse tipo de serviço com qualidade irrefutável são _gringas_ e cobram em dólares. Ainda falta um serviço brasileiro que seja barato e confiável o suficiente para nos fazer trocar os serviços oferecidos pela DO e pela AWS por exemplo.

Ainda ouso dizer que, por mais que as máquinas sejam _plug-and-play_, é necessário que algumas pequenas configurações sejam realizadas para de fato garantir a usabilidade mínima, obrigando assim ao cientista de dados a ter mais de um chapéu e, nesse caso, assumir o chapéu [_SysAdmin_](https://pt.m.wikipedia.org/wiki/Administrador_de_sistemas) da coisa.

### Jupyter in the cloud with diamonds

Okay, mas vamos supor que você já tem sua máquina maravilha bonitinha lá no _insira-aqui-seu-serviço-de-nuvem-favorito​_. E aí? Como fica o [Jupyter Notebook](https://jupyter.org/)?

A [Ana Schwendler](https://medium.com/u/a84fab589b6c) [já falou aqui sobre como](https://medium.com/data-science-brigade/validando-hip%C3%B3teses-d51ae1f46052) os cientistas do Serenata usam Jupyter Notebooks para explorar os dados e validar ou negar hipóteses. Normalmente, o notebook é rodado localmente na máquina de quem esteja programando, mas quando a pessoa começa a usar uma máquina na nuvem como rola esse processo?

### Vivendo nas nuvens


<center>
  <br>
  <img src="https://cdn-images-1.medium.com/max/800/1*YK0o59-niSDgu_eCBTsECg.gif"/>
  <br>
  <a href="https://media.giphy.com/media/13bGgH9VnEDsuA/giphy.gif">Fonte</a>
</center>

O jeito mais prático de acessar uma máquina na nuvem é via conexão SSH. O SSH é um protocolo que[ permite acessar máquinas remotamente de forma segura](https://pt.wikipedia.org/wiki/Secure_Shell). Existem formas de estabelecer uma conexão SSH usando programas como o [PuTTY](https://www.putty.org/) e o [MobaXterm](https://mobaxterm.mobatek.net/), mas se você tiver acesso a um terminal, você também pode fazer isso usando um comando, passando seu usuário na máquina remota e o endereço (host) dessa máquina, algo assim:

    ssh user@host

_Mas o que é esse SSH finalmente e como ele funciona?_ Na prática, o SSH nada mais é que um jeito seguro de fazer _login_ num computador que **não** está pertinho de você e ele funciona como uma chave e um cadeado. Quando você vai entrar em casa, normalmente você tem que destrancar o cadeado, e o SSH funciona exatamente da mesma forma, você tem um par de arquivos que são chamados de chave e cumprem o papel da chave e o cadeado de casa.

Aí, ao invés de fazer um _login_ tradicional com usuário e senha, você pode usar o SSH para se conectar a sua máquina na nuvem. Basta que no servidor tenha o seu cadeado (chave pública) e que você tenha a chave (chave privada) na sua máquina local. Pra quem usa programas como os que falei anteriormente, esses programas se encarregam de gerenciar essas chaves para você.

Num servidor Linux, o lugar padrão para encontrar os cadeados é o arquivo _authorized_keys_ dentro da pasta `.ssh`. O mais legal é que uma mesma máquina pode ter várias chaves públicas dentro desse arquivo assim, todo o time que precisar acessar aquela máquina consegue. Isso permite por exemplo, o compartilhamento de recursos entre os integrantes do time, barateando ainda mais os custos para rodar tarefas pesadas.

Hoje em dia, por trabalhar de um computador com o Windows, mas tendo familiaridade com o Linux — eu uso o Git Bash, um [terminal Bash](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29) distribuído com a instalação do Git e muito útil ❤. Acessar a máquina na nuvem via linha de comando funciona pra mim, mas se você preferir usar programas, fique à vontade, o gosto é do freguês e você deve escolher aquilo que for mais confortável para você 😉. Daqui pra frente eu vou mostrar como usar o terminal para fazer o que a gente precisa. Então, para acessar uma máquina usando o terminal basta fazer o seguinte:

    $ ssh jessicatemporal@34.66.48.61

e você tá lá nas nuvens 😉

Vamos entender o comando:

* `ssh`: é o programa para estabelecer uma conexão SSH;
* `jessicatemporal`: é o meu usuário de acesso na máquina lá na nuvem;
* `34.66.48.61`: é o endereço de IP da máquina que estou querendo acessar (aqui estou mostrando pra você um IP fictício apenas para exemplificar, tá?).

Agora que você acessou a sua máquina você pode rodar o Jupyter Notebook:

    $ jupyter notebook --no-browser

Note que eu passei um parâmetro a mais ali o`--no-browser` que serve para o Jupyter Notebook rodar sem abrir um navegador.

### Vivendo de portais

Quando rodamos o Jupyter Notebook no nosso computador, um canal de comunicação é escolhido para que a gente possa visualizar nossos notebooks, esse canal é conhecido como _porta_ e, na configuração padrão do Jupyter, é a `8888`. Assim a gente consegue acessar no nosso navegador o caminho `[https://localhost:8888](http://localost:8888)` e rodar nossos notebooks certo?

Mas, agora o Jupyter não está rodando no seu computador local então, vamos usar a nossa conexão SSH para ligar uma das portas do nosso computador com a porta do servidor em que o Jupyter está rodando. Para isso, você usa o argumento `-L` que gera o que é conhecido como _port forwarding_. Seu acesso SSH ficaria mais ou menos assim:

    $ ssh -L 8888:localhost:8080 jessicatemporal@34.66.48.61

Em termos não técnicos, o _port forwarding_ funciona como um portal.

<center>
  <br>
  <img src="https://media.giphy.com/media/12VWf9OaUMlUyc/giphy.gif"/>
  <br><a href="https://media.giphy.com/media/12VWf9OaUMlUyc/giphy.gif">Fonte</a>
</center>

Se você cria um portal para algum lugar consegue ver o que está acontecendo nesse lugar. Também é assim que a gente consegue estabelecer um canal de comunicação e saber o que está rolando no servidor, criando um túnel (portal) que liga a porta `8080` da minha máquina local a porta `8888` do servidor:

![imagem mostrando o tunel no terminal](https://cdn-images-1.medium.com/max/1200/1*J-HKcdqv-XcnH8eit8M7PQ.png)

Com isso você consegue abrir no navegador do seu computador e acessar o `https://localhost:8080` para ver seus notebooks:

![imagem do navegador em local host](https://cdn-images-1.medium.com/max/1200/1*zCgW_BhKtuxDiMNSNPix7A.png)

### Finalmente

Depois de colocar seu Jupyter para rodar na nuvem, e acessá-lo usando o túnel, a construção do notebook em si não muda muita coisa. Você irá continuar a fazer suas análises como normalmente faz, com a pequena diferença que agora você tem o poder da nuvem ao seu alcance.

<center>
  <br><img src="https://cdn-images-1.medium.com/max/800/1*5pXyE0DGdhS9GcefQgiBoQ.gif"/>
  <br><a href="https://media.giphy.com/media/2xFZQFpPwIcs7Rx3ZF/giphy.gif">Fonte</a>
</center>

Agora vai lá e conquiste a nuvem você também! Xêro.

---

### Dicas

Se quiser aprender mais sobre o SSH recomendo:

* [Ler o manual dele](https://www.openssh.com/manual.html) a medida que precisar;
* [Esse post](http://www.alexonlinux.com/ssh-crash-course) que faz um curso rápido de SSH;
* Esse [infográfico de referência](http://www.cheat-sheets.org/saved-copy/OpenSSH_quickref.pdf) sobre o SSH;
* Se você quiser rodar o Jupyter numa instância do Google Cloud [esse post aqui tá guardado no coração](https://medium.com/@kn.maragatham09/installing-jupyter-notebook-on-google-cloud-11979e40cd10).
