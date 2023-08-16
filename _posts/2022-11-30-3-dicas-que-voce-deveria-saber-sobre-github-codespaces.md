---
layout: post
title: "3 dicas que você precisa saber sobre GitHub Codespaces"
date: 2022-11-30T15:00:00.000+00:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360835/covers/colinha_igmf4s.png
comments: true
type: post
lang: pt
tags:
- github codespaces
- codespaces
- portugues
- pt
description: "Dicas básicas para começar a usar em menos de 5 minutos"
bookbanner: true
lang: pt
author_note_link: "https://jtemporal.com/3-tips-you-should-know-about-github-codespaces"
author_note: "You can read this blog post in English"
translator: false
translated: "/3-tips-you-should-know-about-github-codespaces"
---
GitHub Codespaces é uma ferramenta ótima para quem quer escrever código em qualquer lugar. Recentemente o GitHub anunciou que agora todas as contas tem uma cota gratuita de 60h mensais para usar o GitHub Codespaces, por isso escrevi essa colinha com as 3 dicas de ouro caso você queira passar a usar a ferramenta.

## Configure dotfiles para personalizar a sua experiência

Eu gosto muito de personalizar meu terminal para que ele mostre as coisas que eu preciso/gosto. A maioria dessas configurações mora num conjunto de arquivos popularmente conhecido como `dotfiles` esses são aqueles arquivos que começam com um `.` como `.zshrc` e `.bashrc`.

Também é comum armazenar tais arquivos dentro de um repositório no GitHub com o nome `dotfiles`, por exemplo aqui está a minha [coleção de arquivos dotfiles](http://github.com/jtemporal/dotfiles). Para ativar o uso desses arquivos no seu Codespaces, clique na sua foto no canto superior direito e escolha *Settings* no menu que apareceu.

![Imagem mostrando a seção de Settings no menu do perfil no GitHub](https://res.cloudinary.com/jesstemporal/image/upload/v1669837358/codespaces/github-menu-selected-option-settings_yq0gpb.jpg){: style="display: block; margin-left: auto; margin-right: auto; max-width: 30%;"}

Uma vez no painel de configurações encontre a opção *Codespaces* no menu lateral esquerdo na seção *Code, planning, and automation* e clique nela.

![Imagem mostrando a seção de Codespaces no menu da esquerda na página de Settings](https://res.cloudinary.com/jesstemporal/image/upload/v1669837358/codespaces/codespaces-lefthand-side-menu-in-settings_czk5sy.jpg){: style="display: block; margin-left: auto; margin-right: auto; max-width: 50%;"}

Isso vai te levar para a página de configuração do Codespaces e logo aparece a primeira seção chamada *Dotfiles.*

![Seção de configuração de Dotfiles no Settings antes de usar dotfiles](https://res.cloudinary.com/jesstemporal/image/upload/v1669837358/codespaces/dotfiles-section-on-codespaces-settings_omptlu.jpg)

Agora clique na caixa de seleção para instalar os dotfiles automaticamente nos Codespaces e, caso você tenha um repositório chamado `dotfiles` o GitHub irá identificar o seu repositório correspondente e usá-lo aqui. 

![Seção de configuração de Dotfiles no Settings após ativar o uso de dotfiles](https://res.cloudinary.com/jesstemporal/image/upload/v1669837358/codespaces/dotfiles-section-on-codespaces-settings-configured_mcdp4d.jpg)

Tenha em mente que você pode alterar para um outro repositório caso queira. Por fim, é bom salientar duas coisas:

1. Que mudanças nos arquivos presentes no dotfiles só entrarão em efeito na criação de um novo Codespace;
2. O Codespaces não usa SSH para executar as ações de git então se você tiver configurações em relação a isso no seus [dotfiles como eu tinha](https://github.com/jtemporal/dotfiles/blob/7a79829f40d5c62b261f5ffaaa808df9c12a1144/.gitconfig) você vai ter problemas (a solução é remover isso).

## Use o painel de gerenciamento do Codespaces

Agora que você tem 60h gratuitas por mês para brincar com o Codespaces você sofrer a tentação de criar Codespaces para todos os seus repositório, afinal de contas, em tese, você pode fazer isso, mas é bom aprender a manter a casa limpa também.

![Lista de Codespaces no seu perfil](https://res.cloudinary.com/jesstemporal/image/upload/v1669837358/codespaces/github-codespaces-dashboard_lbbvhv.jpg)

Para facilitar o seu trabalho existe uma página que você consegue ver todos os Codespaces que você tem e o status de cada um como visto na imagem acima, basta acessar [github.com/codespaces](http://github.com/codespaces). Eu ainda recomendo você criar o hábito de fazer isso regularmente para ajudar a manter a sua cota gratuita livre.

## Aprenda a usar o GitHub na interface do VS Code

Por fim a parte que pode demandar mais tempo: usar a integração do GitHub na interface do VS Code. Existe uma extensão do VS Code chamada [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) que te permite basicamente fazer coisas como revisar pull requests e interagir com issues diretamente no VS Code.

![Imagem mostrando a integração de github com codespaces com um pull request de exemplo](https://res.cloudinary.com/jesstemporal/image/upload/v1669838059/codespaces/github-vscode-extension-in-action_wnsiub.jpg)

Isso vai te trazer uma grande agilidade no seu processo de revisão de pull requests por que você nem precisa ficar trocando de aba ou sair do seu Codespace para interagir.

## Recapitulando

Essas são três dicas mais rápidas de implementar que eu consigo pensar, em cerca de 15 minutos você consegue configurar e se familiarizar com cada uma delas. Lembre-se:

- Configure dotfiles para personalizar a sua experiência;
- Conheça o painel de gerenciamento do Codespaces;
- Aprenda a usar a integração do GitHub na interface do VS Code.
