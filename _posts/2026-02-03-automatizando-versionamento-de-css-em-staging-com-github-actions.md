---
bookbanner: true
comments: true
date: 2026-02-03T06:00:00+00:00
description: Aprenda como contornar cache agressivo versionando arquivos CSS com deploys automatizados de staging via GitHub Actions.
image: /images/covers/tutorial.webp
lang: pt
layout: post
type: post
related: false
tags:
- github actions
- git
- deployments
- css caching invalidation
- pull request
- pull requests
- português
title: "Automatizando versionamento de CSS em staging com GitHub Actions"
translations:
- lang: en
  url: /automating-css-versioning-and-staging-through-github-actions
author_note: false

---

Enquanto eu configurava um ambiente de staging em uma nova plataforma de hospedagem, eu me deparei com um problema onde arquivos estáticos eram agressivamente mantidos em cache sem uma forma direta de invalidá-los. Isso tornava os deploys de staging pouco confiáveis e validar mudanças demorado.

Eu poderia ter passado horas brigando com cache headers e purge APIs, mas existe uma abordagem mais simples. Ao invés de brigar com o cache, eu abracei padrões que evitam invalidação completamente e tornam o comportamento do staging explícito e previsível.

## O problema

Esse ambiente de staging estava se comportando mal:

- Arquivos estáticos eram mantidos em cache de forma agressiva
- Limpeza de cache não está disponível
- Deploys aparecem como "bem-sucedidos" mas as mudanças não eram visíveis

Então eu estava presa com um cache que eu não conseguia limpar e mudanças que eu precisava validar em algum lugar além da minha máquina local. Foi aí que eu percebi que era hora de versionar os scripts de estilo.

## Arquivos estáticos versionados

Uma forma confiável de contornar cache agressivo é mudar a URL do arquivo em cada deploy.

Arquivos estáticos são referenciados com uma versão específica do deploy, no meu caso eu escolhi o SHA curto do git.

```html
<link rel="stylesheet" href="/static/css/base.css?v=6ea4bbe">
```

Isso foi o suficiente para resolver o problema:

- CDNs fazem cache por URL.
- Uma nova URL garante um cache miss.
- Sem dependência de purge APIs ou cache headers.
- Comportamento simples e determinístico.

Essa abordagem funciona bem para staging, onde correção importa mais do que eficiência de cache. Então meu próximo desafio foi: *como colocar isso no meu deployment sem eu ter que editar as URLs manualmente toda vez?*

## Deploys de staging com controle por label

Eu não consigo lembrar de atualizar URLs manualmente toda vez, então ao invés de sofrer cada vez que meu CSS não atualizava de acordo, eu ajustei meu código e adicionei um passo nas minhas GitHub Actions para cuidar disso para mim.

Já que eu sou a única pessoa desenvolvendo nesse projeto, meus deploys de staging são explicitamente controlados usando labels de pull request.

![Pull request com a label preview aplicada para habilitar o deployment de staging](/images/css-caching-github-actions/01-preview-label-in-pr.webp){: class="img-post" style="max-width: 40%;"}

Um pull request é colocado em staging apenas quando a label `preview` é aplicada.

## GitHub Actions

Caso você queira replicar isso para você, aqui está como fazer. Os passos são bem simples:

1. Rode seus testes;
2. Se os testes passarem faça o deploy da aplicação para o ambiente de staging
3. Faça um comentário no seu PR para que você saiba a versão do CSS que deveria estar no ar
4. Aproveite o QA do seu deployment em staging

Primeiro a configuração para sua action:

```yaml
name: Run tests and stage changes

on:
  pull_request:
    types:
      - opened
      - synchronize
      - reopened
      - labeled
      - unlabeled

jobs:
# ...
```

Isso nomeia a action e diz a ela quais Pull Requests observar, no meu caso todos eles.

### 1. Rodando os testes

Eu quero ter certeza que todos os pull requests passam na minha suíte de testes, então o primeiro job faz checkout do pull request, instala as dependências e cria os arquivos necessários, e então roda os testes:

```yaml
# ...

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout PR branch
        uses: actions/checkout@v4

      - name: Install uv
        uses: astral-sh/setup-uv@v7

      - name: Install dependencies
        run: uv sync --extra dev

      - name: Setup test environment
        run: cp .env.example .env

      - name: Run tests
        run: uv run pytest

  deploy-staging:
  # ...
```

Isso garante qualidade de código em todos os pull requests antes mesmo de eu considerar deployment.

Com um teste bem-sucedido podemos seguir para o deployment.

### 2. Deploy em staging

O job de deployment só precisa rodar quando a label `preview` está incluída.

E aí vem um truque legal: você pode pegar o SHA para o deployment com `github.sha` e escrever isso para um arquivo, nesse caso `.deploy_sha` e uma vez que o código é enviado para a nuvem ele pode usar esse arquivo para ler a informação.

```yaml
jobs:
  test:
    # ...

  deploy-staging:
    # Only run after tests pass
    needs: test
    if: contains(github.event.pull_request.labels.*.name, 'preview')

    runs-on: ubuntu-latest
    
    permissions:
      contents: read
      pull-requests: write

    steps:
      - name: Checkout PR branch
        uses: actions/checkout@v4

      - name: Install uv
        uses: astral-sh/setup-uv@v7

      - name: Set deploy SHA
        run: echo "${{ github.sha }}" | cut -c1-7 > .deploy_sha

      - name: Deploy to staging
        env:
          CLOUD_TOKEN: ${{ secrets.CLOUD_TOKEN }}
          CLOUD_APP_ID: ${{ secrets.CLOUD_APP_ID }}
        run: # your deploy command here
      
      # ...
```

Meu código também precisou levar isso em conta. Então primeiro eu criei uma função na minha aplicação FastAPI para pegar os primeiros caracteres do SHA da variável de ambiente ou do arquivo `.deploy_sha`. Eu também defini um fallback para `dev`.

```python
# Deploy SHA for cache busting - check env var first, then file, fallback to "dev"
def get_deploy_sha():
    """Get deploy SHA from environment or .deploy_sha file."""
    sha = os.getenv("DEPLOY_SHA")
    if sha:
        return sha[:7]
    
    # Try reading from file (created during CI/CD deploy)
    try:
        with open(".deploy_sha", "r") as f:
            return f.read().strip()
    except FileNotFoundError:
        return "dev"

# Automatically make the deploy_sha available in all templates
templates.env.globals["deploy_sha"] = get_deploy_sha()
```

A variável de ambiente é usada em produção, que normalmente não muda a não ser que eu veja algum cache estranho que eu não esteja esperando. Enquanto isso, quando eu estou desenvolvendo localmente o fallback entra em ação, e em staging nós usamos o arquivo.

Finalmente o template HTML fica assim:

```html
<link rel="stylesheet" href="/static/css/base.css?v={{ deploy_sha }}">
```

Já que passamos o `deploy_sha` automaticamente como parte das variáveis globais para templates, qualquer página vai ter a informação que ela precisa quando a aplicação está sendo construída.

### 3. Receber um comentário

Finalmente, eu queria receber um comentário onde eu pudesse ver ambos:

1. Que o deployment está no ar
2. O hash que eu deveria procurar caso eu perceba algumas discrepâncias entre o que eu estou vendo e o deployment

Para isso eu adicionei um passo final ao job `deploy-staging` com o seguinte código:

```yaml
# ...
jobs:
  test:
    # ...

  deploy-staging:
    # ...
    steps:
      # ...

      - name: Comment staging URL on PR
        uses: actions/github-script@v7
        with:
          script: |
            const sha = '${{ github.sha }}'.substring(0, 7);
            const marker = '<!-- staging-deploy -->';
            const body = `${marker}\n🚀 **Staging deploy complete**\n\nPreview: ${{ secrets.STAGING_DEPLOY_URL }}\n\nCommit: \`${sha}\``;
            
            // Find existing comment
            const { data: comments } = await github.rest.issues.listComments({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
            });
            
            const existing = comments.find(c => c.body.includes(marker));
            
            if (existing) {
              await github.rest.issues.updateComment({
                owner: context.repo.owner,
                repo: context.repo.repo,
                comment_id: existing.id,
                body: body,
              });
            } else {
              await github.rest.issues.createComment({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: context.issue.number,
                body: body,
              });
            }
```

Já que eu também não queria que cada novo commit gerasse um novo comentário, eu usei um comentário HTML para marcar a mensagem:

```jsx
const marker = '<!-- staging-deploy -->';
```

Já que comentários renderizam Markdown, o HTML aparece no modo de edição mas fica escondido quando é exibido.

![Comentário do GitHub Actions mostrando a URL do deployment de staging e o SHA do commit](/images/css-caching-github-actions/02-comment-trick-for-updating.webp){: class="img-post" style="max-width: 80%;"}

E é assim que fica quando o passo final do `deploy-staging` é completado:

![Comentário de deployment de staging no pull request com link e SHA da versão](/images/css-caching-github-actions/03-comment-from-github-actions.webp){: class="img-post" style="max-width: 90%;"}

## Prós e contras dessa abordagem

Isso me deu controle total sobre qual pull request está em staging e meu staging representa "atualmente em revisão" tornando mais fácil até para mim fazer o QA das mudanças.

O único lado negativo dessa abordagem é que eu não posso ter múltiplos ambientes efêmeros por pull request já que eu posso fazer apenas um deployment de PR por vez, mas isso funciona bem para meu fluxo de trabalho de desenvolvimento.

O objetivo é clareza e controle, não automação máxima.

## Conclusão

Arquivos estáticos versionados e deploys com controle por label resolveram meu problema de cache em staging. Agora arquivos CSS recebem um SHA do git na URL, GitHub Actions cuida dos deployments quando eu aplico a label `preview`, e eu sempre sei qual versão está no ar. Sem necessidade de invalidação de cache.