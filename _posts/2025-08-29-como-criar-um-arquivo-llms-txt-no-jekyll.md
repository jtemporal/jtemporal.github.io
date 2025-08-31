---
title: 'Como criar um arquivo llms.txt no Jekyll e GitHub Pages'
layout: post
date: 2025-08-31T10:00:00.000+00:00
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png"
type: post
lang: pt
tags:
- ia
- agentes de ia
- jekyll
- blog
- português
comments: true
bookbanner: true
description: 'Aprenda como gerar automaticamente um arquivo llms.txt no Jekyll'
related: true
posts_list:
- do-tema-ao-ar
- temas-jekyll
- force-rebuild-jekyll
translations:
- lang: en
  url: /how-to-create-llms-txt-in-jekyll
author_note: false
---

Você já quis deixar o conteúdo do seu blog mais acessível para sistemas de IA e LLMs (large language models)? Ou talvez você tenha se perguntado como fornecer uma versão "limpa" dos seus posts sem todos as tags do HTML?

O arquivo `llms.txt` é a solução. Ele fornece uma forma padronizada para sites exporem seu conteúdo para sistemas de IA. E se você está usando Jekyll com GitHub Pages, pode criar esse arquivo automaticamente com apenas algumas linhas e um template Liquid.

Se você acabou de começar a usar o Jekyll: ele é um gerador de sites estáticos escrito em Ruby que é perfeito para blogs especialmente quando usado no GitHub Pages. Você pode aprender mais sobre Jekyll e como começar a usa-lo neste outro post: [Colocando um site no ar com Jekyll](https://jtemporal.com/do-tema-ao-ar/).

## O que é o llms.txt

O arquivo `llms.txt` é um formato de texto simples projetado para tornar sites mais acessíveis para sistemas de IA e LLMs. Baseado na especificação do [llmstxt.org](http://llmstxt.org/), ele fornece uma forma padronizada de expor o conteúdo do seu site em um formato legível pelas IAs que tanto usamos hoje em dia.

A estrutura básica inclui:
- Uma breve descrição do seu site
- Informações importantes sobre seus projetos, serviços ou conteúdo
- Links para páginas ou conteúdo importantes
- Qualquer outra informação que você gostaria que sistemas de IA soubessem sobre seu site

Para um blog em Jekyll armazenado num repositório do GitHub, o `llms.txt` é perfeito para fornecer aos LLMs acesso direto aos seus posts em seu formato Markdown original, tornando mais fácil para a IA entender e referenciar seu conteúdo com precisão.

## Criando um arquivo llms.txt

Criar um arquivo `llms.txt` para seu site Jekyll é relativamente simples. Você criará um novo arquivo na raiz do seu projeto Jekyll e usar Liquid para gerar automaticamente o conteúdo.

Esse é o passo a passo:

1. **Criar o arquivo**: No diretório raiz do seu repositóeion, crie um novo arquivo chamado `llms.txt`
2. **Adicionar o template**: Use o seguinte template como ponto de partida:

{% raw %}
```liquid
---
layout: null
---

# Feed LLM para jtemporal.com
_Gerado em: {{ site.time | date_to_rfc822 }}_


## Todos os posts
Os links abaixo levam você ao conteúdo Markdown original.

{% for post in site.posts %}- [{{ post.title }}](https://raw.githubusercontent.com/jtemporal/jtemporal.github.io/refs/heads/main/{{ post.path }})
{% endfor %}
```
{% endraw %}

Algumas coisas para prestar atenção:

- `layout: null` garante que o arquivo seja gerado como texto puro, não HTML
- {% raw %}`{{ site.time | date_to_rfc822 }}`{% endraw %} adiciona um timestamp mostrando quando o arquivo foi gerado pela última vez
- O loop {% raw %}`{% for post in site.posts %}`{% endraw %} cria automaticamente uma lista de todos os seus posts do blog
- {% raw %}`{{ post.path }}`{% endraw %} dá o caminho relativo para o arquivo Markdown de cada post
- O formato de URL do GitHub raw permite acesso direto ao Markdown fonte

O resultado gerado deve ser algo assim:

![Screenshot da saída do llms.txt mostrando a lista gerada de posts do blog com links para arquivos Markdown raw](https://res.cloudinary.com/jesstemporal/image/upload/v1756477506/llms-txt-jtemporal.png)

## Adicionar llms.txt ao _config.yml

Na lista de `includes` no seu arquivo `_config.yml` adicione o `llms.txt`. Essa lista tem todos os arquivos que devem ser servidos com seu site uma vez que o build seja feito. A minha ficava assim antes:

```ini
# Include list
include: [.well-known, EnJtResume.pdf, folium]
```

E agora também tem o `llms.txt` no final do array:
```ini
# Include list
include: [.well-known, EnJtResume.pdf, folium, llms.txt]
```

## Testando suas alterações

Antes de fazer o deploy das suas alterações, é uma boa ideia testá-las localmente:

1. **Faça o build do seu site localmente**:
   ```bash
   bundle exec jekyll build
   ```

2. **Sirva seu site**:
   ```bash
   bundle exec jekyll serve
   ```

3. **Verifique seu arquivo llms.txt**: Uma vez que seu site esteja rodando (geralmente em `http://localhost:4000`), navegue para `http://localhost:4000/llms.txt` para ver seu arquivo gerado.

Você deve ver um arquivo de texto puro com as informações do seu site e uma lista de todos os seus posts do blog com links para seu conteúdo Markdown raw no GitHub. Se tudo estiver funcionando, chegou a hora de fazer o deploy!

## Recapitulando

Criar um arquivo `llms.txt` para seu site Jekyll é um processo simples de três passos:

1. **Criar o arquivo**: Adicione `llms.txt` ao diretório raiz do seu Jekyll com o template Liquid
2. **Configurar o Jekyll**: Adicione `llms.txt` à lista `include` no seu `_config.yml`
3. **Buildar e fazer deploy**: Seu arquivo estará disponível em `seusite.com/llms.txt`

Essa abordagem mantém automaticamente seu arquivo `llms.txt` atualizado conforme você adiciona novos posts do blog, e fornece aos sistemas de IA acesso direto ao seu conteúdo em seu formato Markdown original. É uma ótima forma de tornar seu blog Jekyll mais acessível para o ecossistema crescente de ferramentas e serviços de IA.

A melhor parte? Uma vez configurado, não requer manutenção alguma: o Jekyll cuida de tudo automaticamente quando você fizer um novo build do seu site!
