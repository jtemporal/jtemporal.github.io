---
layout: post
type: post
bookbanner: true
comments: true
date: 2026-06-28T11:55:00+00:00
description: Aprenda como reverter um intervalo de commits em um único comando com git revert, incluindo a notação A..B e quando usar --no-commit.
image: /images/covers/colinha.webp
lang: pt
related: true
posts_list:
- desfazendo-um-ou-mais-commits
- recuperando-commits-perdidos-com-git-reflog
- usando-git-stash-e-git-stash-pop
series: "Dicas de Git"
series_order: 13
tags:
- git
- português
- colinha
title: "Desfazendo mais de um commit de uma vez com git revert"
translations:
- lang: en
  url: /undoing-more-than-one-commit-at-once-with-git-revert
---

Você talvez já saiba como usar `git revert` para reverter um único commit, mas você também pode reverter um intervalo de commits com um único comando. Nesta dica rápida, você vai aprender como.

## Revertendo um commit

Você pode desfazer as mudanças de um commit específico criando um novo commit com `git revert`, passando o hash do commit:

```bash
git revert c37fb73
```

O comando é direto. Ele funciona assim:

1. Cria as mudanças que desfazem o que aquele commit introduziu
2. Abre seu editor com uma mensagem de commit pré-preenchida, que você pode editar e salvar

Depois de finalizar a mensagem do commit, você vai ver um novo commit com as novas mudanças, como na imagem abaixo:

![git revert criando um novo commit com as mudanças revertidas](/images/git-revert/git-revert-single-commit.webp)

Você também pode desfazer o commit mais recente usando o comando `git reset`, sobre o qual eu escrevi [neste outro post](/desfazendo-um-ou-mais-commits/).

## Usando revert com um intervalo de commits

Listar cada commit e rodar o revert várias vezes pode ser um pouco chato, além de ser mais sujeito a erros. Por isso, você pode usar um intervalo de commits e executar o comando apenas uma vez.

![git log mostrando um intervalo de commits para reverter](/images/git-revert/git-revert-commit-range.webp)

Digamos que, olhando o histórico na imagem acima, você queira reverter os commits do commit `c37fb73` até o commit `59b322a`. Você pode passar esse intervalo para o comando revert usando a notação `..`, que significa "até", assim:

```bash
git revert c37fb73..59b322a
```

Ou, se você quiser pré-visualizar as mudanças antes de aplicar o revert, você também pode usar a flag `-n`, assim:

```bash
git revert -n c37fb73..59b322a
```

A flag `-n` significa "no commit" (o mesmo que `--no-commit`). O Git vai aplicar cada revert na sua working tree, mas ainda não vai criar os commits de revert. Isso ajuda quando você também precisa resolver conflitos antes de criar um único commit de revert no final.

### Entendendo a notação A..B no git revert

A sintaxe `A..B` é fácil de errar um pouco. Em termos do Git, `A..B` significa "commits alcançáveis a partir de `B` mas não a partir de `A`". Isso quer dizer que o commit `A` em si não é incluído.

Se você quiser incluir o commit mais antigo também, use `A^..B` (o circunflexo significa "o pai de A"):

```bash
git revert -n c37fb73^..59b322a
```

É aqui que intervalos brilham: dá para mirar em um trecho específico do histórico sem reescrever nada.

E como esses commits não são os mais recentes (eu tenho outros commits depois deles), eu também não posso simplesmente desfazer "os últimos 4 commits" [com `git reset`](/desfazendo-um-ou-mais-commits/).

## Recapitulando

Quando você precisa desfazer um conjunto de commits em uma branch compartilhada, `git revert` mantém seu histórico intacto, por isso ele costuma ser uma escolha mais segura do que `git reset`.

Aqui vai uma "receita" prática para reverter um conjunto de commits no meio do histórico:

1. Encontre o intervalo de commits que você quer reverter: Use `git log --oneline` para identificar o commit mais antigo e o mais novo do conjunto.
2. Inicie o revert usando um intervalo e sem commitar:
    - Inclua o commit mais antigo também:

        ```bash
        git revert -n <oldest>^..<newest>
        ```

    - Ou exclua (se for isso que você quer):

        ```bash
        git revert -n <oldest>..<newest>
        ```

3. Se houver conflitos, resolva-os e depois faça staging dos arquivos:

    ```bash
    git add .
    ```

4. Crie um único commit com todas as mudanças revertidas:

    ```bash
    git commit -m "Revert changes from <oldest> to <newest>"
    ```

5. Faça push como de costume:

    ```bash
    git push
    ```