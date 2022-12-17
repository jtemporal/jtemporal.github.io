---
layout: post
title: A ciência de dados pode salvar um país
date: 2019-11-23T13:11:42.000+00:00
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png"
comments: true
description: Mas só se você levantar o bumbum do sofá e começar a fazer sua parte
type: post
tags:
- português
- serenata
- data science
- ciencia de dados
lang: pt

---
Mas só se você levantar o bumbum do sofá e começar a fazer sua parte

---

Usualmente cientistas de dados querem resolver problemas ou responder perguntas. Seja para encontrar a cura do câncer ou para combater a corrupção, dados passam por uma sequência parecida de passos antes de se tornarem parte da solução.

A ideia desse texto é explicar mostrando um caso prático (e famosinho) do uso da ciência de dados. Então, se você já manja de ciência de dados e tá precisando de inspiração pra projetos de estimação, se prepare para aprender coisas novas que você pode não saber sobre leis e dados. Esse texto também é pra você que ainda tá aprendendo e quer conhecer a dinâmica de um projeto de ciência de dados.

<center>
<img src="https://66.media.tumblr.com/tumblr_marfocdntZ1qcnyloo2_r2_500.gif"><br>
<small><a href="https://66.media.tumblr.com/tumblr_marfocdntZ1qcnyloo2_r2_500.gif">Fonte</a>
</small>
</center>

#### O domínio

O começo de toda investigação de dados é sempre entender o domínio. Conhecer as “regras” que regem os dados. Conhecer também o dado e como ele se apresenta, ajuda os cientistas a saber que perguntas podem ser respondidas e as melhores formas de obter respostas.

> Art. 5o É dever do Estado garantir o direito de acesso à informação, que será franqueada, mediante procedimentos objetivos e ágeis, de forma transparente, clara e em linguagem de fácil compreensão.

Existe uma lei que define que todos órgãos públicos brasileiros devem disponibilizar seus dados desde que isso não interfira na segurança nacional (e outras regrinhas mais). Mas de um modo geral, a [_Lei de Acesso à Informação_](http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/Decreto/D7724.htm) ou LAI como é conhecida, foi um marco para a disponibilização de dados da administração pública e aumento do controle social.

Foi essa lei que ajudou por exemplo, os dados da [_Cota para exercício da atividade parlamentar_](http://www2.camara.leg.br/transparencia/acesso-a-informacao/copy_of_perguntas-frequentes/cota-para-o-exercicio-da-atividade-parlamentar) (CEAP) a serem disponibilizados. A CEAP, por sua vez, consiste em valor mensal que os nossos deputados dispõem para serem reembolsados com gastos com um conjunto de coisas como alimentação, hotel, combustível, locação de carro, passagem aérea e outras coisas.

[O ato de mesa que define a que se destina a CEAP](http://www2.camara.leg.br/legin/int/atomes/2009/atodamesa-43-21-maio-2009-588364-norma-cd-mesa.html) é o conjunto das regras do jogo, então como parte do processo de compreender bem o seu domínio de trabalho, o time da [Operação Serenata de Amor](https://serenata.ai/) (OSA), projeto de ciência de dados feito por brasileiros para encontrar gastos irregulares nos reembolsos dos deputados, leu todo o ato de mesa em busca de maiores informações sobre como a CEAP funciona. Saber todas essas informações ajudou a construir o que seria o domínio de trabalho da Serenata.

Hoje os dados da CEAP estão sendo disponibilizados em quatro formatos CSV, XML, XLSX e JSON, separados em subconjuntos de anos ([você pode encontrá-los aqui](http://www2.camara.leg.br/transparencia/cota-para-exercicio-da-atividade-parlamentar/dados-abertos-cota-parlamentar)). Cada reembolso homologado pela câmara dos deputados é disponibilizado nesse conjunto de dados. Unir esses dados com o conhecimento das regras foi o que permitiu ao time da OSA conseguir encontrar gastos considerados irregulares que foram reembolsados.

#### Ferramentas

Mas para ser efetivo na nossa busca por irregularidades, precisamos de ferramentas. Uma das premissas da ciência é a reprodutibilidade e no caso da Serenata não é diferente, mas além disso, por se tratar de um projeto sobre [_accountability_](https://www.politize.com.br/accountability-o-que-significa/) e também de auditoria das contas públicas, disponibilizar de forma amigável e transparente nossos achados foi um ponto importantíssimo.

Dessa forma, apenas colocar código no GitHub não era o suficiente e aí que entra nossa primeira ferramenta: Jupyter Notebooks. Com a possibilidade de misturar código e texto, os _notebooks_ se tornam o perfeito caderno de laboratório. O GitHub, por sua vez, renderiza nossos queridos _notebooks_ facilitando ainda mais o nosso trabalho de mostrar pro mundo todos testes de hipótese, todas análises exploratórias e todos treinamentos iniciais de modelos de _machine learning_.

Mas ainda precisamos de mais uma ferramenta para ajudar a preencher as páginas dos nossos _notebooks_, uma linguagem de programação e, nesse caso, a escolhida foi Python. Com uma comunidade cada dia maior, o Python científico vem sendo amplamente utilizado pelo mundo para ciência de dados, ela é também uma linguagem com uma baixa curva de aprendizado o que ajuda ainda mais na ideia de expor os achados.

Então, foi assim que o nosso time multidisciplinar escolheu as duas ferramentas principais de trabalho. Com o Jupyter nosso jornalista [Pedro](http://pedrovilanova.com/) conseguia acompanhar o que time técnico estava fazendo e onde queríamos chegar. E não só ele, outras tantas pessoas interessadas em entender o que estávamos construindo, mas não possuíam o conhecimento técnico, também podiam ficar de olho no nosso trabalho.

#### Investigações preliminares

No dia 8 de setembro, um dia após o lançamento oficial do projeto, o [Irio Musskopf](https://medium.com/u/e74ca8a4c2f4) escreveu [num blog post](https://medium.com/serenata/o-rob%C3%B4-capaz-de-combater-a-corrup%C3%A7%C3%A3o-8f1e70d2c1c1) para explicar a que se destinava a Operação:

> Em pouco tempo, trabalhando em horas vagas … descobrimos mais de 20 casos no mínimo interessantes ... tudo é aberto, tanto código quanto dados.

Todos esses achados começaram com **análises exploratórias** dos dados liberados pela CEAP e alguns cruzamentos iniciais feitos no início do projeto. É aqui que começa de fato a primeira parte de manipulação de dados.

<center>
<img src="https://i.giphy.com/media/DHqth0hVQoIzS/giphy.webp">
<br>
<small>
<a href="https://i.giphy.com/media/DHqth0hVQoIzS/giphy.webp">Fonte</a>
</small>
</center>

Lembra que eu falei que era importante entender os dados? Pois bem, essas análises iniciais ajudam a sedimentar o conhecimento do domínio, mas além disso, essas análises ajudam a mostrar caminhos possíveis de análise. Por exemplo, foi a partir dessas análises que hipóteses como _“Velocidade viajada suspeita”_ e _“Gasto com bebidas alcoólicas”_ surgiram.

> Por exemplo, vocês sabiam que em 2015 um deputado pagou com dinheiro público algumas contas da sua própria campanha? Ou que em 2014 um deputado tomou uma cervejinha em Las Vegas, no restaurante do Gordon Ramsey, e colocou a cerveja na nossa conta? Ou ainda que em 2013 um deputado foi ressarcido depois de alugar um carro em uma empresa que, na verdade, era uma padaria? Isso sem falar que em 2011 um deputado almoçou 13 vezes no mesmo dia, pagando cada uma dessas refeições com dinheiro daquele mesmo bolso… o nosso.

Contou [Eduardo Cuducos](https://medium.com/u/f3796d9a42a9) em um [outro post](https://medium.com/data-science-brigade/tecnologia-transpar%C3%AAncia-e-pol%C3%ADtica-bb1096206af8) sobre o projeto.

#### Limpeza

Além de ajudar a levantar hipóteses e conhecer os seus dados, as análises iniciais também vão servir para mostrar limpezas necessárias. Na maioria das vezes os dados não vem prontinhos, esse papel de preparação de dados, cai na aba do chapéu de engenharia de dados, e com um nome recente essa engenharia ainda está sendo descoberta pelas empresas. Então, cabe ao cientista muitas vezes trocar de chapéu para também preparar o dado para análise.

A limpeza **não** busca remover dados do _dataset_ inicial, mas sim organizar os dados para melhorar o acesso aos mesmos, [já ouviu falar em “_tidy data”_](https://cran.r-project.org/web/packages/tidyr/vignettes/tidy-data.html)? O conceito se baseia no fato que um dado organizado facilita imensamente as análises a serem feitas e implementações de modelos.

No caso da Serenata, nosso _dataset_ já era bem organizado, no entanto algumas melhorias estavam no pedido do dia. Para começar, apesar da CEAP ser idealizada para reembolsos, algumas vezes gastos como compra de passagens podem ser feitos diretamente pela Câmara dos Deputados ao invés do(a) deputado(a) fazer o gasto e pedir o reembolso. Esses gastos precisam ser identificados para que possa ocorrer a contabilidade correta deles.

Além disso, um gasto não precisa ser reembolsado numa parcela única, o que gera mais de um registro para o mesmo recibo, essas parcelas então precisam ser agregadas.

Por fim, com o objetivo de participar do [movimento global que promove o aumento da _accountability_ governamental,](https://www.opengovpartnership.org/about/about-ogp) ficou decidido que todo o código do projeto, assim como análises e demais documentos técnicos iriam ser feitos em inglês. Isso fez com que ainda precisássemos incluir um passo de tradução dos dados para o inglês para que eles pudessem fazer sentindo para quem não fala português também.

#### Enriquecimento

Depois de limpar e organizar os dados, chegou a hora de torna-los ricos. A limpeza muitas vezes não é o suficiente para que possamos extrair informações interessantes dos dados.

Os dados da CEAP só trazem as informações dos reembolsos. Qualquer coisa além disso que você encontra hoje no serenata, foi fruto de um processo de enriquecimento.

A fase de enriquecimento funciona como injetar esteroides no seus dados. O objetivo é trazer informações extras para nosso conjunto de dados de trabalho e assim, agregar mais valor as análises e melhorar as decisões a serem tomadas.

Cada reembolso traz o CNPJ da empresa que emitiu a nota que foi reembolsada no escopo da CEAP. Sabendo disso, um dos primeiros enriquecimentos que pensamos em Serenata foi trazer os dados das empresas para o nosso conjunto de trabalho.

Dados sobre as empresas incluem informações como endereço e o quadro societário delas, ter à mão esses dados permite que façamos investigações sobre possíveis casos de nepotismo e investigar se pessoas estavam “em dois lugares ao mesmo tempo”.

Embora seja possível encontrar o endereço principal das empresas no conjunto dos [dados liberados pela receita](https://www.receita.fazenda.gov.br/pessoajuridica/cnpj/cnpjreva/cnpjreva_solicitacao2.asp), lidar com endereços dentro do código leva a mais um passo de enriquecimento, já que é mais fácil calcular distâncias com latitude e longitude do que endereços como “Rua dos Bobos, n 0”. Foi aí, que com ajuda da [API de Geocodificação do Google](https://developers.google.com/maps/documentation/geocoding/intro), conseguimos trazer a informação de latitude e longitude que alimenta nossos classificadores.

#### Teste de hipótese

Não basta ter dados, eles serem limpos e ricos, é preciso levantar hipóteses e validá-las. E é como dizem, uma hipótese validada vale mais que mil palavras… tá, o ditado não é bem esse, mas o processo de validar (ou não) as hipóteses pinta a imagem.

É importante lembrar que um dos muitos diferenciais da Serenata é que este foi um projeto feito num período de tempo bem curto se comparado com o tempo gasto em projetos mais “tradicionais”:

> Nenhum projeto de data science é feito para durar apenas três meses. Existe um longo processo de análise de dados e estudo de métodos até ser desenvolvido algo concreto. Entretanto, como queríamos fazer o projeto acontecer, usamos nossos conhecimentos em [métodos agéis](http://www.devmedia.com.br/conceitos-basicos-sobre-metodologias-ageis-para-desenvolvimento-de-software-metodologias-classicas-x-extreme-programming/10596) (adquiridos com nossa experiência de desenvolvimento) e descobrimos que a melhor forma de adaptar o tempo que tínhamos era utilizando HDD ([hyphothesis-driven development](https://hackerchick.com/hypothesis-driven-development/)) junto a técnica [timeboxing](https://www.mindtools.com/pages/article/timeboxing.htm). Ou seja, eram levantadas hipóteses para serem desenvolvidas em um espaço de tempo pré-determinado.

Explicou [Ana Schwendler ](https://medium.com/u/a84fab589b6c)num [post sobre a validação de hipóteses da Serenata](https://medium.com/serenata/validando-hip%C3%B3teses-d51ae1f46052).

Depois das análises iniciais surgiram as hipóteses a serem estudadas e validadas, importante lembrar aqui, embora cientistas tenham uma forte indicação de hipóteses válidas com base em suas análises inicias, isso não quer dizer que as hipóteses sempre serão válidas, certo? Ter isso em mente sempre ao trabalhar com dados é importante pois os dados podem provar que estamos errados. É importante ser humilde e reconhecer isso ao invés de manipular os dados para que eles mostrem o que queremos.

---

#### Eu, robô

Finalmente depois de todo esse processo, depois de passar pela limpeza e enriquecimento dos dados, depois de encontrar as hipóteses válidas finalmente chegamos na parte que era o objetivo principal do projeto: uma inteligência artificial, a Rosie.

Ela basicamente condensa e automatiza todo esse processo de pegar os reembolsos e ver se eles se enquadram na definição de um gasto suspeito ou não.

Mas para isso acontecer a gente precisa estruturar todas as análises que foram feitas nos notebooks num formato mais estruturado e é aí que entra o _scikit-learn_, ou pelo menos o padrão que eles seguem 😄

No caso da Rosie, o que fazemos é transformar todo o passo a passo feito no notebook para a mesma estrutura que o scikit segue: implementando os métodos `fit`, `predict`e `transform` e, quando necessário, métodos auxiliares de acordo com a necessidade. A [Ana Schwendler](https://medium.com/u/a84fab589b6c) falou dessa parte mais técnica de [como a Rosie usa aprendizado de máquina aqui nesse post](https://medium.com/data-science-brigade/como-a-rosie-usa-machine-learning-na-serenata-de-amor-9168e0f1909d).

Mas não é só isso, a Rosie também tem uma conta no Twitter, veja o que a Jout Jout fala sobre ela:

<iframe width="100%" height="315" src="https://www.youtube.com/embed/NmbSnopvDNY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<small><i>Video da JoutJout sobre política onde ela apresenta um montão de ferramentas para acompanhar o trabalho dos nossos políticos</i></small>

Até a Rosie existir (e tuitar) muito dos nossos achados ficavam “presos” à pessoas que já estavam interessadas no assunto como jornalistas e pessoas que trabalham com dados abertos. Mas ao chegar no Twitter, a Rosie popularizou os achados que antes estavam nas mãos de poucos.

---

E aí? Bora salvar o mundo? Eu já coloquei minhas braçadeiras!

<center>
<img src="https://media.giphy.com/media/d3YIyzi534G5GRNe/giphy.gif">
<br><small><a href="https://giphy.com/gifs/hbo-wonder-woman-d3YIyzi534G5GRNe">Fonte</a></small>
</center>

Um xêro!