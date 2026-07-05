---
bookbanner: true
comments: true
date: 2026-02-03T05:00:00+00:00
description: "O que aprendi ao criar um produto real com ferramentas de IA como colaboradoras: onde ajudaram, onde falharam e por que clareza importa mais do que as ferramentas em si."
image: /images/covers/miscellaneous.webp
lang: pt
layout: post
type: post
related: false
tags:
- ai
- software development
- chatgpt
- github copilot
- português
- pessoal
title: "Desenvolvimento de software com IA: lições ao lançar My Yarn Stash"
translations:
- lang: en
  url: /ai-powered-development-workflow
author_note: false
mermaid: true

---

Quando comecei a construir o [**My Yarn Stash**](https://myyarnstash.app), eu não estava tentando provar que a IA conseguiria criar um app por mim. Eu queria responder uma pergunta prática:

> O que realmente muda quando você trata ferramentas de IA como colaboradoras de longo prazo, atravessando planejamento, implementação e design?
>

Não com demos ou exemplos de brinquedo, mas com um produto real que tem usuários, dados persistentes, billing, autenticação e migrações: todas as restrições pouco glamourosas que vêm junto de lançar um software que precisa “ficar em pé” por muito tempo.

O que vem a seguir é um detalhamento de como a IA entrou em cada fase, onde ajudou, onde atrapalhou e o que eu aprendi (ou fui lembrada) sobre limites de ferramentas ao construir algo de verdade.

## O dia em que a IA apagou meu banco de dados

No começo do projeto, pedi para um agente de código me ajudar com uma mudança de schema. Ele sugeriu, com toda confiança:

```bash
rm yarn.db
# Then recreate with new schema
```

E eu deixei.

Sumiu. Todos os dados de teste que eu vinha construindo. Horas de entrada manual para estressar edge cases. Apagados em um único comando, porque a IA tratou o banco de dados como um artefato descartável.

A IA não se comportou “errado”. Ela fez exatamente o que fazia sentido se você assume que bancos de dados são efêmeros. O problema foi que **eu** não tinha estabelecido guardrails.

Aquele momento me lembrou de duas coisas: eu precisava prestar mais atenção e ajustar como eu colaborava com ferramentas de IA. Eu precisava ser muito clara sobre restrições.

Mais tarde, eu adicionei regras às minhas instruções do copilot:

- NUNCA deletar arquivos de banco de dados
- SEMPRE rodar migrações
- Antes de qualquer operação destrutiva, fazer backup

E fui lá e recriei o banco de dados.

A IA não mudou o comportamento. Eu mudei o meu.

Esse virou o padrão do projeto inteiro: **a IA amplificou minha clareza e puniu minha ambiguidade e falta de atenção.**

A exclusão do banco de dados me lembrou de algo fundamental: instruções vagas produzem resultados imprevisíveis. Essa lição moldou como eu abordei todas as outras fases do projeto daqui para frente.

## Conversas separadas, contextos separados

Depois do incidente do banco de dados, eu sabia que precisava de uma gestão melhor de restrições. Isso começou por como eu estruturava as conversas.

Eu tratei o ChatGPT como alguém do time com quem eu puxaria uma conversa para discutir um tema específico.

Cada feature ganhou seu próprio thread de conversa:

- Um para billing e entitlements
- Um para o fluxo de extração com IA
- Um para padrões de soft delete
- Um para estratégia de lançamento

Isso não era sobre organização. Era sobre **gestão de contexto**.

<pre class="mermaid">
graph TB
    %% Styles
    classDef orange fill:#FEF3E6,stroke:#F59E0B,stroke-width:2px,color:#7C2D12;
    classDef blue fill:#E8EEF6,stroke:#3C87C9,stroke-width:2px,color:#0f172a;
    classDef green fill:#E6F4F1,stroke:#00B478,stroke-width:2px,color:#064E3B;
    classDef purple fill:#ECE7F8,stroke:#9C8AD9,stroke-width:2px,color:#0f172a;
    classDef note fill:#F3F4F6,stroke:#6B7280,stroke-dasharray: 5 5,color:#111827;

    %% Central collaborator
    AI[ChatGPT<br/>como colaborador]:::purple

    %% Separate conversations
    Billing[Conversa de billing<br/>e entitlements]:::blue
    Extraction[Conversa do fluxo<br/>de extração com IA]:::blue
    SoftDelete[Conversa de<br/>padrões de soft-delete]:::blue
    Launch[Conversa de<br/>estratégia de lançamento]:::blue

    %% Separate outputs
    BillingOut[billing.md]:::green
    ExtractionOut[extraction.md]:::green
    SoftDeleteOut[soft-delete.md]:::green
    LaunchOut[launch.md]:::green

    %% Connections (no cross-links!)
    AI --> Billing
    AI --> Extraction
    AI --> SoftDelete
    AI --> Launch

    Billing --> BillingOut
    Extraction --> ExtractionOut
    SoftDelete --> SoftDeleteOut
    Launch --> LaunchOut

    %% Note
    Note[Cada conversa tem um propósito único e é um contexto delimitado]:::note
    Note -.-> AI
</pre>

Quando tudo vive em um único chat, a IA começa a ficar lenta e confusa. É aí que esse looping constante de “resumir o histórico” aumenta o tempo até uma resposta. Então, como pessoa engenheira usando IA, você precisa gerenciar a janela de contexto de forma diligente.

Uma conversa sobre billing não deveria vazar para discussões de UI. Detalhes de implementação não deveriam poluir threads de planejamento.

Separar chats forçou clareza. Cada conversa tinha um propósito único, o que deixou mais fácil:

- Manter o foco em um único problema
- Avaliar a saída contra objetivos específicos
- Tomar decisões sem ruído

### Como essas conversas eram na prática

**Branding: do vago para o concreto**

Eu comecei com “quero que pareça aconchegante e calmo”. Ao longo da discussão, apareceram edge cases que eu não tinha considerado:

- Texto embutido em imagens ia exigir retrabalho toda vez que o preço mudasse
- Imagens realistas iam parecer stock photos genéricas
- Visuais sobre “organização” passam julgamento. Melhor enquadrar como "controle de inventário"
- Gradientes aplicados de forma inconsistente criariam ruído visual

A conversa forçou especificidade. No final, eu tinha restrições como “sem texto em imagens” e “um sistema único de gradiente vertical” que meu agente de código conseguiria implementar com confiabilidade.

**Página de conta: trazer à tona modos de falha**

Ao planejar a página de conta, o ChatGPT ajudou a identificar problemas não óbvios:

- **Timezone drift**: atualizar timezone automaticamente quando usuários viajam mudaria datas do projeto sem aviso. Solução: só atualizar com uma ação explícita do usuário.
- **Culpa no empty state**: mostrar “0 projetos finalizados” ou incentivar “finalize seu primeiro projeto” cria pressão. Solução: empty state gentil, sem call to action.

Isso não eram detalhes de implementação. Eram riscos de experiência que corroeriam confiança se passassem batido.

**Estratégia de lançamento: reenquadrando o objetivo**

No começo, eu pensava em lançamento como um evento de visibilidade: onde postar, como anunciar.

A conversa reenquadrou como uma **mudança de estado**: de “só eu uso isso” para “outras pessoas podem usar isso com segurança”.

Isso mudou o foco de:

- “Quantas pessoas vão ver?”

Para:

- “O que quebra quando os primeiros usuários reais chegarem?”
- “Essa experiência é consistente por dentro?”
- “Onde alguém pode se confundir ou ter sucesso rapidamente?”

Eu despriorizei anúncios e passei mais tempo melhorando clareza no onboarding.

Todo insight útil era destilado em markdown. Especificações de feature, restrições, decisões arquiteturais: tudo reescrito com minhas próprias palavras (com ajuda do ChatGPT), estruturado para clareza e guardado junto do código.

Isso forçou duas coisas:

1. Eu precisava realmente entender a decisão
2. A saída virava algo durável e revisável

## Decisões de stack: o que eu escolhi vs. o que eu perguntei

Com limites de conversa bem definidos, eu consegui tomar decisões melhores de stack. Eu cheguei no projeto com opiniões fortes sobre algumas partes e nenhuma opinião sobre outras.

<pre class="mermaid">
graph TB
    %% Styles
    classDef orange fill:#FEF3E6,stroke:#F59E0B,stroke-width:2px,color:#7C2D12;
    classDef blue fill:#E8EEF6,stroke:#3C87C9,stroke-width:2px,color:#0f172a;
    classDef green fill:#E6F4F1,stroke:#00B478,stroke-width:2px,color:#064E3B;
    classDef purple fill:#ECE7F8,stroke:#9C8AD9,stroke-width:2px,color:#0f172a;

    %% end
    subgraph ME ["Stack que eu escolhi"]
            Auth0[Auth0 para autenticação]:::blue
            FastAPI[FastAPI]:::blue
            Supabase[Supabase para banco + armazenamento]:::blue
            Frontend[JavaScript e CSS vanilla]:::blue
            Emails[Resend]:::blue
            AIproviders[Replicate]:::blue
        end

        %% Subgraph: What AI helped evaluate
        subgraph AI ["A IA avaliou"]
            Payments[Gateway de pagamento]:::orange
            Deploy[Plataforma de deploy]:::orange
        end
    %% Relationship between the two
    ME:::green
    AI:::purple
</pre>

**O que eu decidi antes de perguntar para a IA:**

- **Auth0** para autenticação (familiar, confiável, escalável)
- **FastAPI** como framework web (Python, async, boa documentação, também familiar e com ótimo suporte para Auth0)
- **Supabase** para banco de dados e storage (Postgres com boas ferramentas e banco de produção a custo 0)
- **JavaScript vanilla** e **CSS escrito à mão** no começo, em vez de um framework (menos abstração, mais fácil de raciocinar com IA e para eu acompanhar)
- **Resend** para envio de emails: um email de boas-vindas para usuários e outro para me notificar quando alguém se cadastrasse
- **Replicate** para fornecer features de IA como a extração de informações de etiquetas

Essas escolhas não eram sobre compatibilidade com IA. Eram sobre reduzir carga cognitiva e manter uma base de código em que eu conseguisse entrar sem precisar da ajuda da IA.

**O que eu pedi para a IA ajudar a avaliar:**

- **Gateway de pagamento**: eu não tinha opinião forte. Discutimos opções e chegamos em **Polar**, pela simplicidade e experiência de desenvolvimento.
- **Plataforma de deploy**: eu queria algo barato e que eu já entendia. Heroku atendia os dois critérios.

O padrão aqui importa: eu levei restrições e contexto para a conversa, em vez de perguntar “o que eu devo usar?” no vácuo.

A IA não me disse com o que construir. Ela me ajudou a pensar nos trade-offs das decisões que eu ainda não tinha tomado.

## Aprendendo qual modelo faz o quê bem

Com as decisões de stack resolvidas, o próximo desafio foi entender qual ferramenta de IA usar em cada momento. Entender os pontos fortes dos modelos veio de experiência repetida, em contextos diferentes.

Eu não usei uma única ferramenta de IA para tudo. Isso foi intencional.

Ao longo do projeto, eu encontrei um fluxo que funcionou para mim:

<pre class="mermaid">
flowchart TB
    %% Styles (modern, readable, low contrast)
    classDef blue fill:#E8EEF6,stroke:#3C87C9,stroke-width:2px,color:#0f172a;
    classDef decision fill:#F3F4F6,stroke:#6B7280,stroke-width:2px,color:#111827;
    classDef simple fill:#E6F4F1,stroke:#00B478,stroke-width:2px,color:#064E3B;
    classDef complex fill:#FEF3E6,stroke:#F59E0B,stroke-width:2px,color:#7C2D12;
    style one fill:#E8E8E8,stroke:#CCCCCC,stroke-width:2px;
    style two fill:#E8E8E8,stroke:#CCCCCC,stroke-width:2px;

    %% Nodes
    A[Chat com ChatGPT:<br/>Mapeie o trabalho<br/>e gere markdown]:::blue
    B[Commit do markdown<br/>no app GitHub Mobile]:::blue

    D[Abrir issue no GitHub<br/>Atribuir para Copilot]:::simple
    H{PR travado?}:::decision
    I[Baixar branch localmente<br/>e destravar com Opus<br/>no modo Agent]:::simple

    F[Revisar markdown <br/>localmente<br/>com Haiku <br/>no modo Plan]:::complex
    G[Implementar com Opus<br/>no modo Agent]:::complex

    E[Revisar e <br/>mergear PRs]:::blue

    EE[Não]:::decision
    II[Sim]:::decision

    subgraph one ["`Para tarefas simples`"]
        direction TB
        D --> H
        H --> EE
        H --> II --> I
    end

    subgraph two ["`Para tarefas complexas`"]
        direction TB
        F --> G
    end
    %% Flow
    A --> B
    B --> one
    B --> two
    G --> E
    EE --> E
    I --> E
</pre>

**ChatGPT para planejamento e exploração**

A maior parte das conversas de planejamento aconteceu no ChatGPT no app mobile. Eu usei no celular durante momentos “mortos” para pensar em features, identificar edge cases e explorar decisões de design antes de escrever qualquer código.

A acessibilidade do mobile importava. Eu conseguia desenhar a lógica de billing enquanto tomava café de manhã ou mapear features futuras durante um deslocamento. Quando eu sentava no computador para codar, os problemas conceituais já estavam mais resolvidos.

**GitHub Copilot Agents para trabalho direto ao ponto**

Features e bugs bem definidos, de baixa complexidade, iam para issues no GitHub e eu deixava o Copilot implementar via PRs de forma assíncrona, atribuindo o Copilot a uma issue. Isso me liberava para trabalhar em coisas mais complexas e de mais valor enquanto o Copilot cuidava das tarefas “sem mistério”.

Quando os agentes travavam online, eu baixava o código e pedia para o Claude Opus destravar.

**VS Code Copilot para desenvolvimento local**

Eu usei o VS Code com Copilot em diferentes modos e com modelos diferentes, dependendo do trabalho:

*Claude Haiku:*

- Principalmente no modo Plan;
- Iterações rápidas ao dar seguimento em features localmente;
- Bom para refatorar e ajustar detalhes de implementação que não exigiam mais escopo do que um arquivo

*Claude Opus:*

- Principalmente no modo Agent;
- Situações complexas com muitas partes móveis
- Usado quando precisão e exatidão importavam mais que velocidade

Mas, independentemente do modelo, eles sempre eram limitados por convenções explícitas em [`copilot-instructions.md`](http://copilot-instructions.md).

A lição não era “use o melhor modelo”. Era saber não só **quando trocar** de modelos e modos, mas também **por que** a troca deveria acontecer.

Esse julgamento é uma habilidade. Ferramentas de IA não removem isso.

A exclusão do banco aconteceu porque eu relaxei. Eu fiquei confortável com desenvolvimento com IA e parei de questionar sugestões. Foi um bom lembrete de que contextos diferentes precisam de restrições diferentes. Nesta fase do projeto, eu já tinha aprendido a combinar as capacidades da ferramenta com os requisitos da tarefa.

## Funcional primeiro, bonito depois (porque eu não sou designer)

Com a implementação fluindo melhor, eu voltei para design. Isso exigia outro tipo de clareza.

Eu adiei intencionalmente trabalho de design visual. Não por causa de IA, mas porque **CSS e JavaScript não são meu ponto forte.**

Eu foquei primeiro em deixar as coisas funcionais: fluxos, modelos de dados, interações. Quando isso estava mais estável, eu consegui atacar design a partir de uma base mais firme.

Não estava feio, mas claramente não estava bonito:

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/UulQpVyeEMs?si=H_U2hXDIpeTHtwo-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

Minha primeira exploração com o [Stitch](https://stitch.withgoogle.com), ferramenta do Gemini da Google que transforma descrições em texto em designs de UI, me mostrou o quão forte ela era. Eu colei o link do app funcionando e pedi um redesign. Ficou bonito, mas não parecia o *meu* produto.

Então eu usei o ChatGPT para montar um documento de branding: tom, direção de cores e quais sensações eu queria que a UI passasse. Quando eu coloquei esse documento no papel, eu voltei para o Stitch com:

- Capturas de tela do app funcional
- O documento de branding
- Restrições específicas como “refaça o design seguindo as diretrizes de marca”

O resultado é o que você vê abaixo:

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/VHyfaJH969o?si=Mf0jGLxjQbp02ngQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

Essa combinação funcionou. O design parecia certo porque eu fiz o trabalho de pensar antes. E, ah, já mencionei que agora ele também tem dark mode?

A lição: **ferramentas funcionam melhor quando você já estabeleceu intenção.** Assim como o banco de dados precisava de restrições, ferramentas de design precisavam de direção.

## O que essa experiência me ensinou sobre construir com IA

Ao passar por todas essas etapas, eu notei alguns padrões que vão além de escolhas individuais de ferramenta. São algumas coisas que eu quero levar comigo:

**1. IA não substitui julgamento. Ela torna o julgamento mais importante**

A exclusão do banco não foi uma falha de IA. Foi uma falha de clareza. Quando eu adicionei restrições explícitas, as ferramentas ficaram mais confiáveis.

**2. Limites de contexto importam**

Conversas separadas para assuntos separados reduziram drift e forçaram foco.

**3. Trocar de modelos é uma habilidade que se aprende**

Entender quando usar um modelo leve versus um pesado veio de fricção repetida, não de documentação.

**4. Design ainda exige gosto**

IA pode acelerar iteração, mas você precisa saber o que está buscando. “Deixa bonito” produz resultado genérico. “Quero que pareça aconchegante e confiável” com exemplos te dá algo para avaliar.

**5. Lançar algo real ensina mais do que qualquer demo**

A maioria dos exemplos de ferramentas de IA vive em um mundo onde você sempre pode recomeçar. Software em produção não é assim. Essa restrição forçou honestidade sobre onde a IA ajuda e onde ela traz risco.

## O que isso significa para aprender ferramentas de IA

Eu sempre acreditei que pessoas desenvolvedoras se saem melhor quando aprendem as limitações das ferramentas que usam ao construir software.

Especialmente porque desenvolvimento deixou de ser meu trabalho do dia a dia, este projeto virou um outlet para experimentar e testar ferramentas novas, e ajudou a moldar como eu avalio e falo sobre ferramentas de IA.

Demos têm seu lugar, mas nada substitui a experiência real de construir e aprender fazendo.

Construir o My Yarn Stash me deu uma noção ainda mais clara de onde a IA acelera trabalho e onde ela introduz risco. Não por ler sobre, mas por bater nos limites.

Se você está tentando achar seu caminho com ferramentas de IA: **construa algo real.** Resolva um problema que você enfrenta com frequência, teste as ferramentas novas e encontre o fluxo que funciona para você.

Se afaste um pouco dos tutoriais e cursos e construa seu próprio projeto, livre das restrições que instrutores colocam de propósito para ensinar e dar uma boa experiência para estudantes.

Algo com usuários, dados que você não pode perder e decisões que se acumulam com o tempo.

Você vai aprender mais com uma migração quebrada do que com cem prompts perfeitos.