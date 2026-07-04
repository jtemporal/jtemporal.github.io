---
layout: post
type: post
bookbanner: true
comments: true
date: 2026-07-04T05:55:00+00:00
description: Um script Python prático com Pillow para remover o fundo branco de um GIF quadro por quadro e conectar uma assinatura transparente no blog Jekyll.
image: /images/covers/tutorial.webp
lang: pt
related: true
posts_list:
- como-criar-um-arquivo-llms-txt-no-jekyll
- do-tema-ao-ar
- configurando-servidor-mcp-python-local-no-vscode
tags:
- python
- pillow
- jekyll
- ai
- português
- tutorial
title: "Como removi o fundo branco da minha assinatura em GIF usando Python"
translations:
- lang: en
  url: /remove-gif-signature-white-background-with-python
---

Há anos meus posts terminam com uma pequena assinatura: um GIF que eu desenhei e hospedei no Cloudinary. Ela aparecia no final de cada post.

Esse GIF tinha uma premissa: assumia um **fundo puramente branco** no blog. Porém quando redesenhei o site, essa premissa deixou de ser verdade. O fundo não é mais branco, e eu também adicionei **dark mode**, onde o fundo da página parece preto, mas não é um `#000` de verdade.

Eu não queria redesenhar a animação, trocar o GIF por uma imagem, ou pior, remover a assinatura por completo. Então pedi ajuda para a AI.

## Como a assinatura era

Peço desculpas desde já, especialmente se você estiver lendo isso em dark mode, mas era assim que minha assinatura aparecia originalmente:

![](https://res.cloudinary.com/jesstemporal/image/upload/v1640531276/jess-signature_nhb75h.gif)

Pedi ajuda ao Grok para corrigir isso, e ele sugeriu adicionar uma lógica de inversão via CSS para ficar assim:

{% include signature-invert-failed-demo.html lang='pt' %}

Como dá para ver, o fundo ainda parece um remendo em vez de fazer parte da página nos dois temas. No **light mode**, o `invert` via CSS transforma a caixa branca em uma placa escura em uma página off-white. No **dark mode**, a imagem invertida ainda flutua por cima do fundo em vez de se misturar com ele.

Aí lembrei de uma coisa que aprendi um tempo atrás: GIFs são uma coleção de imagens juntas, geralmente repetidas tão rápido que parecem uma animação ou vídeo.

## O que eu precisava

Então pensei: talvez desse para atualizar as imagens dentro desse GIF? Meu prompt para o Grok foi mais ou menos assim:

```
então o invert não funcionou, o fundo do blog não é mais branco puro e eu também tenho dark mode, que também não é preto puro. já que gifs são uma pilha de imagens, você não consegue baixar o gif, editar as imagens para remover o fundo e depois juntar tudo de novo em um gif transparente?
```

O Grok resolveu isso com um script em Python.

## O script para criar um GIF com fundo transparente

O script fica em `scripts/make_signature_transparent.py` no repositório do meu blog. Ele é relativamente pequeno e consegue:

1. Baixar o GIF original do Cloudinary ou usar uma cópia local.
2. Remover pixels quase brancos quadro por quadro.
3. Exportar um novo GIF animado com transparência de verdade.
4. Colocar o resultado em `images/` para o Jekyll servir.

[Pillow](https://pillow.readthedocs.io/) (PIL) consegue cuidar de fazer tudo isso.

```python
#!/usr/bin/env python3
"""Download the Cloudinary signature GIF and export a transparent version."""

from pathlib import Path
from urllib.request import urlopen

from PIL import Image, ImageChops, ImageSequence

ROOT = Path(__file__).resolve().parents[1]
URL = "https://res.cloudinary.com/jesstemporal/image/upload/v1640531276/jess-signature_nhb75h.gif"
SOURCE = Path("/tmp/jess-signature-source.gif")
GIF_OUT = ROOT / "images/jess-signature-transparent.gif"
THRESHOLD = 235
MAX_WIDTH = 440
```

E você pode rodar isso a partir da raiz do repositório:

```bash
pip install pillow
python scripts/make_signature_transparent.py
```

Ele escreve o arquivo `images/jess-signature-transparent.gif` e mostra no terminal a quantidade de quadros e o tamanho final do arquivo.

## Transformando fundo branco em transparência

A função principal trata pixels "quase brancos" como fundo e deixa esses pixels transparentes:

```python
def knock_out_white(frame: Image.Image) -> Image.Image:
    rgba = frame.convert("RGBA")
    r, g, b, a = rgba.split()
    mr = r.point(lambda value: 255 if value >= THRESHOLD else 0)
    mg = g.point(lambda value: 255 if value >= THRESHOLD else 0)
    mb = b.point(lambda value: 255 if value >= THRESHOLD else 0)
    white = ImageChops.multiply(ImageChops.multiply(mr, mg), mb)
    inv = white.point(lambda value: 0 if value == 255 else 255)
    rgba.putalpha(ImageChops.multiply(a, inv))
    return rgba
```

`THRESHOLD = 235` significa que qualquer pixel em que R, G e B sejam 235 ou mais vira transparente. Isso pega o fundo branco sem comer os traços mais escuros da assinatura.

Se a imagem original tiver antialiasing cinza claro nas bordas, talvez você precise ajustar esse número. Baixo demais, e ele começa a comer o desenho. Alto demais, e sobra um efeito de sombra da assinatura.

## Detalhes específicos de GIF

GIFs animados são mais chatos do que uma única imagem em PNG: Um PNG consegue guardar milhões de cores e transparência em uma imagem. Um GIF é um formato mais antigo e mais limitado. Para parecer uma animação é como se você tivesse um flipbook: várias imagens pequenas tocadas em sequência, cada uma com regras bem restritas de cor e transparência. Então não dá para simplesmente "salvar com transparência" como você faria com um PNG e dar como resolvido.

O GIF original da assinatura era fisicamente maior, ou seja, tinha mais pixels do que eu queria no blog. Quadros maiores significam um arquivo mais pesado e carregamento mais lento. Antes de salvar a nova versão, eu também fiz o redimensionamento de cada quadro para que o lado mais largo tenha no máximo 440 pixels. Para evitar que a imagem fique borrada ou serrilhada, o script usa o método de reamostragem LANCZOS do Pillow para redimensionar o GIF.

GIFs só suportam 256 cores por quadro e um único índice de transparência. Isso significa que GIFs não entendem "este pixel está 47% transparente." Cada quadro recebe uma paleta fixa de até 256 cores, e só um desses espaços pode significar "invisível." Então, depois de remover o fundo branco, o script precisa converter cada quadro para esse formato limitado: escolher as melhores 255 cores da assinatura e reservar um espaço da paleta para os pixels transparentes. É isso que `rgba_to_palette_frame()` faz, ele "traduz" as cores.

Um GIF animado não é só uma pilha de imagens; cada imagem dentro do GIF tem um valor de "mostre isso por X milissegundos." Se você reconstruir o GIF e ignorar esses tempos, a assinatura pode piscar rápido demais ou parecer lenta. O script copia a duração de cada quadro original para manter a sensação da animação da escrita.

Quando um quadro substitui outro em um GIF, o player precisa de instruções sobre o que fazer com os pixels do quadro anterior. Com `disposal=2`, cada novo quadro começa em uma tela limpa em vez de ser pintado por cima do que o quadro anterior deixou. Sem isso, animações em loop podem deixar marcas ou rastros leves, tipo linhas fantasmas.

## Conectando isso no blog

Depois de criar o novo arquivo, eu ainda precisei adicioná-lo ao repositório e apontar o template para ele no lugar do arquivo antigo. Nada demais aqui, basta atualizar o include que adiciona a assinatura para apontar para o novo arquivo:

```html
<img
  class="aspect-video w-1/4 min-w-[120px] max-w-[220px] dark:invert"
  alt="assinatura animada da jess"
  src="{{ '/images/jess-signature-transparent.gif' | relative_url }}"
  width="440"
  height="248"
  loading="lazy"
  decoding="async">
```

A transparência corrigiu a caixa branca no tema claro. Para o dark mode, eu ainda aplico `dark:invert` para que os traços fiquem claros em um fundo escuro, mas agora ele inverte só a assinatura, não uma placa branca atrás dela.

## Recapitulando

O aprendizado aqui é que, entre eu saber um pouco sobre como GIFs funcionam e a AI conseguir escrever o script, eu ainda precisei tomar a decisão final com base no meu conhecimento, porque o Grok queria colocar `invert` no CSS e seguir em frente.

Esse script de 70 linhas com Pillow foi a correção mais prática: sem redesenhar, sem editar quadro por quadro manualmente, e fácil de reproduzir sempre que eu quiser ajustar o limite ou redimensionar o GIF.

Uma execução, um novo arquivo, e a assinatura finalmente parece fazer parte da página em vez de parecer uma pintura mal feita flutuando por cima dela.