---
title: 'Fazendo pull requests com GitHub Codespaces e contribuindo com um projeto open source'
layout: post
date: 2024-10-29T05:00:00.000+00:00
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png"
type: post
lang: pt
tags:
- opensource
- GitHub
- Git
- pull request
- portugues
comments: true
bookbanner: true
description: 'Fork, branch, pull request. Veja como usar GitHub Codespaces para fazer suas contribuições.'
related: true
posts_list:
- resolvendo-conflitos
- 5-dicas-para-fazer-o-seu-pull-request-brilhar
- gitfichas-agora-e-open-source

---

Existem diversas formas de fazer pull requests. Nesse blog post você vai aprender a fazer um pull request na prática usando GitHub Codespaces e fazendo um pull request pro GitFichas.

## O GitFichas

[O GitFichas agora é um projeto open source](https://jtemporal.com/gitfichas-agora-e-open-source/) e nesse momento está passando por uma migração que vai trazer várias melhorias. Para isso, toda ficha existente hoje precisa ser migrada para o novo formato usando [Mermaid](https://mermaid.js.org/). Como o melhor jeito de aprender é praticando esse blog post vai te mostrar como fazer tudo na prática.

Vale lembrar que os passos daqui são apenas um jeito de fazer pull requests e na verdade a única recomendação é seguir o guia de contribuição de cada projeto geralmente encontrado no arquivo `CONTRIBUTING.md`, presente na maioria dos projetos de código aberto, [o guia de contribuição do GitFichas pode ser encontrado aqui](https://github.com/jtemporal/gitfichas/blob/main/CONTRIBUTING.md).

## GitFichas e sua estrutura

Um pouco de contexto. Pra começar a contribuir é importante aprender sobre o projeto e a sua estrutura. No caso do GitFichas, existem dois tipos de fichas: fichas de *comando* ou fichas de *conceito*.

1. **Comando**: explica um comando como "`git add -p`" ou "`git commit --allow-empty`";
2. **Conceito**: explica conceitos relacionados ao git, versionamento e assuntos correlatos, como "pull requests" e "conflitos";

Cada tipo de ficha tem uma coleção de campos similar, mas com campos específicos de cada tipo. Esses campos que vão ser usados pelo mermaid para gerar a visualização. Todos os campos a serem usados para fichas [estão no guia de contribuição](https://github.com/jtemporal/gitfichas/blob/main/CONTRIBUTING.md#cards-types).

Falando na estrutura de pastas e arquivos do repositório, fichas em português estão na pasta `_posts/` e fichas em inglês elas ficam na pasta `en/_posts`.

Tanto as fichas em português quanto as fichas em inglês seguem o mesmo padrão de nomes `<YYYY-MM-DD>-<NUMERO>.md` e a data é usada para ordenação das fichas no site enquanto o número corresponde ao número da ficha.

De resto, os arquivos seguem o padrão de blogs escritos usando [Jekyll, um gerador de site estáticos](http://jekyllrb.com/) feito em Ruby. Sim, o GitFichas é em essência um blog, ele usa [Liquid para fazer os templates](https://shopify.github.io/liquid/) que viram as páginas que você vê no site.

Além disso vale mencionar que o site é construído e servido pelo GitHub e você consegue ver uma pré-visualização das mudanças graças ao Netlify.

## Requisitos

Você vai precisar de:

- Uma conta no GitHub.

Sim, só isso. Se você souber git seguir o passo a passo vai ficar mais fácil, mas se você ainda está aprendendo git você ainda vai conseguir acompanhar o passo a passo.

## Por onde começar

O projeto para contribuir você já tem e você já deu uma olhada no guia de contribuição. Agora você precisa escolher uma [issue no repositório do GitFichas](https://github.com/jtemporal/gitfichas/issues). Escolher uma issue vai te ajudar a identificar fichas que ainda não foram migradas para o novo formato além de saber qual nome dar para o seu branch.

Aqui vou usar a ficha `#050` em inglês. A migração dessa ficha está anotada [na issue #116](https://github.com/jtemporal/gitfichas/issues/116). 

![IMG_0415.jpeg](https://res.cloudinary.com/jesstemporal/image/upload/v1730124452/images/contributing-to-gitfichas/issue-116-gitfichas-repo.jpg)

Com a issue escolhida podemos começar a trabalhar. Os passos são:

1. Fazer um fork;
2. Criar um novo branch;
3. Iniciar o Codespace;
4. Fazer as alterações;
5. Conferir as mudanças rodando o site;
6. Submeter o pull request.

## 1. Faça um fork

Crie um fork do repositório na sua conta, [você pode clicar nesse link aqui](https://github.com/jtemporal/gitfichas/fork) ou na interface do GitHub no repositório clique no botão “Fork”.

![IMG_0416.jpeg](https://res.cloudinary.com/jesstemporal/image/upload/v1730124453/images/contributing-to-gitfichas/fork-button.jpg)

Lembre-se de clicar em “Create” na página seguinte para criar o seu fork.

![IMG_0419.jpeg](https://res.cloudinary.com/jesstemporal/image/upload/v1730124453/images/contributing-to-gitfichas/create-fork-form.jpg)

Isso vai criar uma cópia do repositório original na sua conta o que vai te permitir fazer as suas contribuições já que um fork na usa conta vai te dar plenos poderes de edição.

## 2. Crie um novo branch

Depois de ter um fork é sempre importante criar novos branches, um para cada contribuição. Usar branches ao invés de trabalhar direto na `main` vai te permitir fazer múltiplas contribuições ao mesmo tempo.

O nome do seu branch deverá seguir aquilo descrito no [guia de contribuição do repositório](https://github.com/jtemporal/gitfichas/blob/main/CONTRIBUTING.md). No caso do GitFichas o padrão a ser seguido é `<nome de usuário>-<issue ou descrição>`.

![IMG_0423.jpeg](https://res.cloudinary.com/jesstemporal/image/upload/v1730124452/images/contributing-to-gitfichas/create-branch.jpg)

Como a nossa issue é a `#116` e o nome do meu usuário é `jesstemporal` o nome do branch ficou `jesstemporal-fix-116`.

Para criar o branch com esse nom, você clica no seletor de branches que indica o branch atual o  `main` e deve digitar o nome do novo branch na caixa de pesquisa, isso irá mostrar o botão de criação com o nome que você digitou como mostrado na imagem acima.

## 3. Inicie o seu GitHub Codespace

Codespaces são ótimos pois você consegue um ambiente completo de desenvolvimento em poucos minutos, basta ter uma conexão com a internet. Outra vantagem é que Codespaces são efêmeros e te permite ter um ambiente completamente isolado sem você precisar instalar nada na sua máquina.

Clique em `<> Code` e na aba `Codespaces` clique no botão de criação como mostrado na imagem abaixo.

![IMG_0424.jpeg](https://res.cloudinary.com/jesstemporal/image/upload/v1730124453/images/contributing-to-gitfichas/window-create-new-codespaces.jpg)

Isso deve abrir uma nova aba no seu navegador. Criar um novo Codespaces pode demorar alguns segundos, mas uma vez que esteja pronto para uso você deve ver algo similar a tela abaixo.

![IMG_0426.jpeg](https://res.cloudinary.com/jesstemporal/image/upload/v1730129546/images/contributing-to-gitfichas/new-github-codespaces-on-gitfichas-fork.jpg)

Chegou a hora de fazer as alterações.

## 4. Faça as alterações

Como vamos editar a ficha `#050` em inglês ela se encontra em `en/_posts/2023-08-04-050.md`. Ao abrir o arquivo você conseguirá ver o conteúdo atual da ficha e começar a fazer as alreações.

![IMG_0428.jpeg](https://res.cloudinary.com/jesstemporal/image/upload/v1730124452/images/contributing-to-gitfichas/github-codespaces-ficha-050-open.jpg)

O jeito mais fácil para saber que alterações fazer é olhar o que existe na ficha atual e copiar o conteúdo da página aos poucos seguindo os exemplos no guia de contribuição.

A ficha `#050` desenhada aparece dessa forma na página:

![IMG_0429.jpeg](https://res.cloudinary.com/jesstemporal/image/upload/v1730124452/images/contributing-to-gitfichas/gitficha-050.jpg)

### Composição de uma ficha

Vamos entender o que compõe uma ficha:

1. Titulo: Part superior da ficha. Nesse caso “Pulling changes” títulos são compostos de 3 partes:
    1. Pre-título: tudo escrito antes das letras quadradas, nesse caso não existe pre-título;
    2. Principal: a parte principal do título, na ficha 50 é o “Pulling”;
    3. Sub-título: tudo que vem depois da parte principal nesse caso “changes”;
2. Comando: O comando escrito em uma fonte cursiva, (essa parte só aparece em fichas do tipo comando);
3. Partes: as informações que explicam cada parte do comando. As partes são divididas em dois tipos:
    1. Comando: Que é o comando em si, nesse caso `pull`;
    2. Partes: Todas as informações depois do comando nesse caso `remote` e `branch`;
4. Informação: parte final que adiciona mais informações sobre um comando.

![https://res.cloudinary.com/jesstemporal/image/upload/v1730124453/images/contributing-to-gitfichas/anatomia-de-uma-ficha.jpg](https://res.cloudinary.com/jesstemporal/image/upload/v1730124453/images/contributing-to-gitfichas/anatomia-de-uma-ficha.jpg)

## Preenchendo o novo conteúdo

Como essa ficha apresenta um comando, você precisa usar o [exemplo de ficha de comando do `CONTRIBUTING.md`](https://github.com/jtemporal/gitfichas/blob/main/CONTRIBUTING.md#command-cards-example) e preencher as informações de acordo como mostrado abaixo:

```yaml
---
layout: post
pretitle:
title: Pulling
subtitle: changes
command: git pull remote branch
descriptors:
  - command: command to \ndowload changes
  - part1: repository from where\n to download changes
  - part2: branch to download\n changes from
info: usually both the remote and the branch can be omitted
author: "@jtemporal"
number: "050"
mermaid: true
translated: "/projects/050"
permalink: "/en/050"
lang: "en"
pv:
  url: "/en/049"
  title: "#049 git merge source target"
nt:
  url: "/en/051"
  title: "#051 git commit --allow-empty"
---

{% raw %}{% include mermaid-graphs.html %}{% endraw %}
```

Note que foi necessário alterar as variáveis `title`, `subtitle`, `command`, `descriptors` e suas sub-variáveis, `info`, `number`. E adicionar `mermaid: true`.

As demais variáveis `layout`, `translated`, `permalink`, `lang`, `pv` e sub-variáveis, `nt` e sub-variáveis, vão ser as existentes no arquivo original e não precisam de alteração.

Por fim, é necessário substituir o conteúdo da ficha que vem depois do front-matter e colocar {% raw %}`{% include mermaid-graphs.html %}`{% endraw %}. Essa linha vai garantir a apresentação da renderização do conteúdo que você acabou de preencher.

Dicas na migração de fichas:

1. Atente para quebras de linha, para que uma ficha fique legível talvez seja necessário fazer quebras de linha diferentes daquelas vistas nas fichas originais. Você vai poder conferir isso na próxima seção.
2. Cada ficha tem uma tabela com a descrição das partes, use essa tabela para facilitar a sua contribuição.

## 5. Rode o site e confira as mudanças

Como você está usando um novo Codespace você vai precisar instalar as dependências para então rodar o site. Comece instalando as dependências:

```bash
bundle install
```

Em seguida rode o site:

```bash
bundle exec jekyll s
```

Esse comando acima vai montar o site e te permitir conferir os ajustes que você acabou de fazer. 

Quando o site estiver rodando, uma pop-up vai aparecer no canto inferior esquerdo do seu Codespaces perguntando se você quer abrir a visualização do site.

![https://res.cloudinary.com/jesstemporal/image/upload/v1730124453/images/contributing-to-gitfichas/open-in-browser-pop-up.jpg](https://res.cloudinary.com/jesstemporal/image/upload/v1730124453/images/contributing-to-gitfichas/open-in-browser-pop-up.jpg)

Clique `Open in Browser` isso vai abrir uma nova aba com o site que está rodando no seu Codespace. Navegue até a ficha que você alterou para ver as mudanças.

![https://res.cloudinary.com/jesstemporal/image/upload/v1730124452/images/contributing-to-gitfichas/after-changes-build.jpg](https://res.cloudinary.com/jesstemporal/image/upload/v1730124452/images/contributing-to-gitfichas/after-changes-build.jpg)

Depois de conferir que a ficha está renderizando corretamente e que as informações estão legíveis você pode fazer o seu pull request.

Note caso você tenha dificuldades em fazer a renderização da ficha e precisar de ajuda você sempre pode abrir uma issue para pedir ajuda ou um pull request com status “WIP” e descrever o problema que está encontrando. Isso segue a boa prática de receber feedback cedo e assim ajustar as suas contribuições de acordo.

## 6. Faça o pull request

Agora que está tudo nos conformes chegou a hora de mandar a contribuição.

### Faça o commit das mudanças

Primeiro adicione as alterações em staging:

```bash
git add en/_posts/2023-08-04-050.md
```

Aqui é importante adicionar apenas o arquivo alterado. E agora faça o commit:

```bash
git commit -m "Migrates card 050"
```

Lembre-se de alterar a mensagem entre aspas para descrever as alterações que você está fazendo.

### Faça o push do branch

Com o commit feito é necessário publicar as mudanças com o push, como é a primeira vez que estamos publicando mudanças precisamos fazer o setup do branch no upstream usando a opção `-u` :

```bash
git push -u origin jtemporal-fix-116
```

Quando o push for concluído, vai aparecer um link para fazer o pull request no próprio terminal.

![https://res.cloudinary.com/jesstemporal/image/upload/v1730152601/images/contributing-to-gitfichas/result-of-git-push.jpg](https://res.cloudinary.com/jesstemporal/image/upload/v1730152601/images/contributing-to-gitfichas/result-of-git-push.jpg)

Clique nele e, em seguida, clique no “Yes” no pop-up que pergunta se você quer abrir o pull request dentro do Codespaces usando a extensão para pull requests e issues.

![https://res.cloudinary.com/jesstemporal/image/upload/v1730152755/images/contributing-to-gitfichas/pull-request-pop-up-using-the-extension-in-codespaces.jpg](https://res.cloudinary.com/jesstemporal/image/upload/v1730152755/images/contributing-to-gitfichas/pull-request-pop-up-using-the-extension-in-codespaces.jpg)

### Abra o pull request e aguarde

Isso vai abrir um menu lateral esquerdo onde você pode ajustar as informações do pull request como mostrado na imagem abaixo.

![https://res.cloudinary.com/jesstemporal/image/upload/v1730153285/images/contributing-to-gitfichas/opening-pull-request-from-codespaces.jpg](https://res.cloudinary.com/jesstemporal/image/upload/v1730153285/images/contributing-to-gitfichas/opening-pull-request-from-codespaces.jpg)

Você pode por exemplo adicionar uma descrição das mudanças e [conectar o seu pull request à issue que ele resolve usando as palavras mágicas](https://docs.github.com/pt/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue). Agora é a aguardar a revisão e merge. 🎉 🎉 🎉

## Revisão de pull requests

Agora essa parte não depende só de você. Depois de submeter o seu pull request a pessoa ou pessoas que mantêm o projeto precisam revisar a sua contribuição. A partir de agora as coisas acontecem na página do repositório original onde o pull request existe.

![https://res.cloudinary.com/jesstemporal/image/upload/v1730153494/images/contributing-to-gitfichas/pull-request-187-on-gitfichas.jpg](https://res.cloudinary.com/jesstemporal/image/upload/v1730153494/images/contributing-to-gitfichas/pull-request-187-on-gitfichas.jpg)

Como uma útima checagem você pode utilizar o “Deploy Preview” para ver as alterações que fez dessa vez na pre-visualização gerada pelo Netlify. Ela não deve ser diferente daquela que você viu ao rodar o site mais cedo, mas é sempre bom dar uma conferida.

Outros projetos podem ou não ter ambientes de visualização semelhantes a esse. E agora entram as pessoas que mantém o projeto para fazer a revisão da sua contribuição.

Depois de revisar, mantenedores podem pedir alterações pra você ou fazer as alterações no seu pull request para poder fazer o merge. *Fica com você a responsabilidade de conferir e fazer as alterações pedidas*.

Uma vez que o pull request esteja de acordo com o esperado, mantenedores vão aprovar e fazer o merge e então as alterações devem ir ao ar no próximo build do site. No caso do GitFichas isso vai acontecer de forma automática pelo GitHub.

E é isso, parabéns você acabou de fazer a sua contribuição.

## Recapitulando

Na maioria dos casos seguir o conjunto de passos descrito nesse blog post vai te ajudar a fazer contribuições de qualidade, então relembrando: Depois de escolher uma issue para trabalhar e se familiarizar com o guia de contribuição do projeto você precisa seguir os passos abaixo.

1. Fazer um fork;
2. Criar um novo branch;
3. Iniciar o Codespace;
4. Fazer as alterações;
5. Conferir as mudanças rodando o site;
6. Submeter o pull request.

Então é aguardar a revisão e aprovação do pull request. Vale lembrar que com grandes poderes vêm grandes responsabilidades e qualidade é mais importante que quantidade e embora esse pull request não tenha sido com código você agora tem as ferramentas para fazer contribuições de código ou não.

Agora que você já sabe contribuir aproveita pra dar uma lida neste outro post com “[5 Dicas Para Fazer o Seu Pull Request Brilhar ✨](https://jtemporal.com/5-dicas-para-fazer-o-seu-pull-request-brilhar/)”.