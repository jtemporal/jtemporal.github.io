---
title: 'Configurando um servidor MCP Python local no VS Code'
layout: post
date: 2025-09-07T04:00:00.000+00:00
image: "https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png"
type: post
lang: pt
tags:
- ai
- ai agents
- jekyll
- blog
- vs code
- português
comments: true
bookbanner: true
description: 'Integre um servidor MCP Python customizado com o VS Code para usar no seu ambiente de desenvolvimento.'
related: true
posts_list:
- publicando-seu-site-no-ar
- escolhendo-um-tema-para-seu-blog-jekyll
- resolvendo-conflitos
author_note: false
translations:
- url: "/configure-local-python-mcp-server-in-vscode"
  lang: "en"
---

Servidores MCP (Model Context Protocol) estendem assistentes de IA com capacidades customizadas e acesso a recursos. Embora usar um servidor MCP no Claude Desktop seja fantástico para pesquisa geral e descoberta de conteúdo, há ainda mais valor em integrar essas mesmas ferramentas diretamente no seu ambiente de desenvolvimento.

Como escrevo meus posts de blog em Markdown e os gerencio através do GitHub, ter o servidor MCP disponível direto no VS Code significa que posso buscar por conteúdo relacionado, verificar referências e manter consistência sem sair do meu editor.

![Fluxograma do servidor MCP para busca no blog](https://res.cloudinary.com/jesstemporal/image/upload/v1756653714/mcp/flowchart-mcp-server-blog-search_jgthx2.png){: style="max-width:80%;display: block; margin-left: auto; margin-right: auto;"}

Então vamos também configurar nosso MCP em uma IDE para melhorar nosso processo de escrita e edição.

## Recapitulando

Em [um post anterior](https://auth0.com/blog/build-python-mcp-server-for-blog-search/) criamos um servidor MCP com duas ferramentas:

1. **`search_posts`**: busca através de posts do blog usando SerpApi para encontrar conteúdo que corresponde a uma consulta específica
2. **`get_post_content`**: recupera o conteúdo completo em markdown de um post específico pelo título

Este MCP de busca e recuperação de conteúdo do blog nos permite usar nosso assistente de IA para rapidamente encontrar e acessar informações do nosso blog, facilitando referenciar trabalhos anteriores e manter consistência entre posts.

Naquele post anterior, construímos um servidor MCP Python que aproveita o SerpApi para buscas específicas no site e usa o padrão `llms.txt` para indexar e recuperar conteúdo completo dos posts. O servidor permite integração perfeita entre assistentes de IA e conteúdo do blog, transformando seu blog em uma base de conhecimento pesquisável.

Se você quer aprender mais sobre tool calling confira o vídeo abaixo ou [este post no blog do trabalho](https://auth0.com/blog/genai-tool-calling-intro/) (ambos em inglês).

<center><iframe width="100%" height="420" src="https://www.youtube.com/embed/r7wEinUG0ns" title="Empowering AI Automation Securely - Tool Calling in AI Agents" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>

## Servidores MCP no VS Code

Se você navegar até a aba Extensions no VS Code, verá uma seção dedicada para servidores MCP. Esta integração traz o poder do Model Context Protocol diretamente para seu ambiente de desenvolvimento, permitindo que você aproveite ferramentas e capacidades customizadas enquanto programa, escreve ou gerencia seus projetos.

A extensão MCP para VS Code detecta automaticamente servidores configurados e fornece uma interface perfeita para interagir com eles através do GitHub Copilot Chat. Isso significa que você pode acessar suas ferramentas customizadas sem sair do seu editor, tornando seu fluxo de trabalho mais eficiente e integrado.

![Seção de servidores MCP na aba Extensions do VS Code](https://res.cloudinary.com/jesstemporal/image/upload/v1756654100/mcp/local-mcp-in-vscode/00-mcp-servers-list_iaj2yl.png)

## Pré-requisitos

Antes de começarmos, certifique-se de ter:

- **Python 3.8+** instalado no seu sistema
- **uv** package manager ([guia de instalação](https://docs.astral.sh/uv/getting-started/installation/))
- **VS Code** com a extensão GitHub Copilot habilitada
- **Uma chave SerpApi** para funcionalidade de busca ([obtenha uma aqui](https://serpapi.com/))

## Configurar seu servidor local

Antes de configurar o servidor MCP no VS Code, você precisará configurar o projeto localmente. Aqui estão os passos:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/jtemporal/blog-search-mcp-in-python.git
   cd blog-search-mcp-in-python
   ```

2. **Instale as dependências usando uv:**
   ```bash
   uv sync
   ```

3. **Configure seu ambiente:**
   Crie um arquivo `.config` baseado no `.config.example` com sua chave SerpAPI e URL do blog.

4. **Teste o servidor:**
   ```bash
   uv run src/server.py
   ```

Uma vez que seu servidor esteja funcionando localmente, você tem tudo que precisa para integrá-lo com o VS Code.

## Adicionando a configuração MCP

Para adicionar seu servidor MCP ao VS Code, pressione `Cmd+Shift+P` (Mac) ou `Ctrl+Shift+P` (Windows/Linux) para abrir a paleta de comandos, então digite "MCP" e selecione "MCP: Add Server" da lista. Isso abrirá o assistente de configuração MCP.

![Iniciando configuração do servidor MCP no VS Code](https://res.cloudinary.com/jesstemporal/image/upload/v1756654101/mcp/local-mcp-in-vscode/01-mcp-install-in-vscode_wrf88n.png)

O primeiro passo é escolher a camada de transporte. Para nosso servidor Python local, selecione "stdio" como método de transporte. Isso permite que o VS Code se comunique com seu servidor através de fluxos de entrada/saída padrão.

![Selecionando a camada de transporte stdio](https://res.cloudinary.com/jesstemporal/image/upload/v1756654101/mcp/local-mcp-in-vscode/02-pick-the-transport-layer_ki7uyb.png)

## Adicionando o comando para executar seu MCP

Em seguida, você precisará especificar o comando que o VS Code deve usar para iniciar seu servidor MCP. Como nosso servidor tem dependências externas (SerpAPI), precisamos incluí-las no comando.

**Nota:** O caminho exato para `uv` pode variar dependendo do seu método de instalação. Se você instalou via `pip`, pode estar em uma localização diferente. Você pode encontrar o caminho do seu uv executando `which uv` no seu terminal.

```shell
~/.local/bin/uv run --with google-search-results --with mcp[cli] mcp run ~/caminho/para/repositorio/blog-search-mcp-in-python/src/server.py
```

Certifique-se de substituir `~/caminho/para/repositorio/blog-search-mcp-in-python/` pelo caminho real para seu repositório clonado.

![Inserindo o comando para executar seu servidor MCP](https://res.cloudinary.com/jesstemporal/image/upload/v1756654102/mcp/local-mcp-in-vscode/03-command-to-run-your-mcp_vebdjp.png)

Após inserir o comando, dê ao seu servidor MCP um nome descritivo que ajudará você a identificá-lo na interface do VS Code.

![Fornecendo um nome para seu servidor MCP](https://res.cloudinary.com/jesstemporal/image/upload/v1756654103/mcp/local-mcp-in-vscode/04-give-the-name-to-your-mcp_a5bfor.png)

## Definir onde a configuração deve ser aplicada

O VS Code perguntará onde salvar a configuração MCP. Você pode escolher entre aplicá-la globalmente (para todos os workspaces) ou apenas para o workspace atual.

![Escolhendo entre configuração workspace e global](https://res.cloudinary.com/jesstemporal/image/upload/v1756654103/mcp/local-mcp-in-vscode/05-choose-workspace_o8l1fd.png)

Seguindo o princípio do menor privilégio, é recomendado escolher "Workspace" ao invés de "Global". Isso mantém a configuração limitada ao seu projeto atual e previne potenciais conflitos com outros projetos.

![Confiando nos autores do servidor MCP](https://res.cloudinary.com/jesstemporal/image/upload/v1756654104/mcp/local-mcp-in-vscode/06-trust-the-authors_wjchkw.png)

Isso criará uma pasta `.vscode/` se ela não existir no seu repositório, e criará um arquivo `mcp.json` correspondente com a configuração. Deve ficar parecido com isso:

```json
{
	"servers": {
		"jtemporal-blog-search": {
			"type": "stdio",
			"command": "~/.local/bin/uv",
			"args": [
				"run",
				"--with",
				"google-search-results",
				"--with",
				"mcp[cli]",
				"mcp",
				"run",
				"~/projects/blog-search-mcp-in-python/src/server.py"
			]
		}
	},
	"inputs": []
}
```

## Executando ações MCP diretamente do mcp.json

Uma vez configurado, você não apenas verá o arquivo de configuração, mas o VS Code também mostrará um menu inline dentro do arquivo. Isso fornece acesso rápido às operações comuns do servidor MCP.

![Ações do servidor MCP disponíveis no arquivo de configuração](https://res.cloudinary.com/jesstemporal/image/upload/v1756654106/mcp/local-mcp-in-vscode/08-mcp-server-actions_tlsnad.png)

Se você selecionar o botão `More...` no menu inline, verá opções adicionais em um menu de diálogo que fornece operações mais avançadas para gerenciar seu servidor MCP.

![Opções adicionais do servidor MCP no menu de diálogo](https://res.cloudinary.com/jesstemporal/image/upload/v1756654106/mcp/local-mcp-in-vscode/09-mcp-server-more-options_o3bfyk.png)

## Dicas de debugging

Se você selecionar "Show output" do menu do servidor MCP, será levado para a saída de log no painel inferior da janela do VS Code. Isso é inestimável para fazer debugging de problemas com seu servidor MCP.

![Saída de log do servidor MCP para debugging](https://res.cloudinary.com/jesstemporal/image/upload/v1756654107/mcp/local-mcp-in-vscode/10-mcp-server-log_kmlbwf.png)

Os logs mostrarão informações detalhadas sobre inicialização do servidor, chamadas de ferramentas e quaisquer erros que ocorram. Isso é particularmente útil quando desenvolvendo ou fazendo troubleshooting do seu servidor MCP.

Se você configurar seu servidor incorretamente (por exemplo, se esquecer parte das flags `--with` no comando), verá uma mensagem de erro diretamente na interface do arquivo de configuração:

![Mensagem de erro quando servidor MCP está mal configurado](https://res.cloudinary.com/jesstemporal/image/upload/v1756654109/mcp/local-mcp-in-vscode/11-mcp-error-menu_aig1ea.png)

Essas mensagens de erro inline facilitam identificar e corrigir problemas de configuração sem ter que procurar através de arquivos de log.

Dito isso, se você não souber qual é o erro, também pode acessar os arquivos de log indo para o painel inferior na aba Output e selecionando o nome do servidor no menu dropdown:

![Acessando logs do servidor MCP através do painel de output](https://res.cloudinary.com/jesstemporal/image/upload/v1756654110/mcp/local-mcp-in-vscode/12-mcp-log-through-lower-panel_jhnole.png)


## Encontrando seu servidor MCP

Agora volte para a aba Extensions e você deve ver seu servidor MCP listado na seção de servidores MCP assim:

![Seu servidor MCP listado na aba Extensions](https://res.cloudinary.com/jesstemporal/image/upload/v1756654112/mcp/local-mcp-in-vscode/13-list-of-mcp-servers_gc2dc3.png)

A partir daqui, você pode investigar os detalhes do servidor, ver suas ferramentas disponíveis e até ajustar sua configuração se necessário. Isso fornece uma localização centralizada para gerenciar todos os seus servidores MCP dentro do VS Code.

## Usando seu servidor MCP

Todo esse trabalho de configuração é ótimo, mas o objetivo real é poder buscar conteúdo do seu blog em um cenário de chat direto no VS Code. Vamos colocar nosso servidor MCP para trabalhar fazendo uma busca através do GitHub Copilot Chat:

![Primeira chamada de ferramenta mostrando intenção de busca](https://res.cloudinary.com/jesstemporal/image/upload/v1756654112/mcp/local-mcp-in-vscode/14-tool-call_zxqe2n.png)

A interface mostra a ferramenta que está pretendendo chamar (`search_posts`) bem como os parâmetros de entrada—neste caso, o tópico sobre o qual queremos encontrar posts do blog. Essa transparência ajuda você a entender exatamente o que a IA está fazendo em seu nome.

Agora tem um truque legal: normalmente você teria que pedir pelo conteúdo depois de obter os resultados da primeira chamada de ferramenta, mas se você estiver usando o GitHub Copilot no [modo agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode), o agente é realmente inteligente o suficiente para oferecer a execução de ferramentas adicionais para obter o conteúdo completo:

![Chamada de ferramenta secundária para obter conteúdo completo](https://res.cloudinary.com/jesstemporal/image/upload/v1756654115/mcp/local-mcp-in-vscode/15-secondary-tool-call_a7yfxf.png)

Desta vez mostra a função `get_post_content` sendo chamada, com a descrição docstring e os parâmetros de entrada para recuperar o conteúdo específico.

Finalmente, os resultados são exibidos no chat como qualquer outra interação de ferramenta seria:

![Resultado MCP final exibido no chat do VS Code](https://res.cloudinary.com/jesstemporal/image/upload/v1756654115/mcp/local-mcp-in-vscode/16-mcp-result-in-vscode_xqxubw.png)

Essa integração perfeita significa que você pode buscar seu blog, recuperar conteúdo e incorporá-lo ao seu trabalho atual sem nunca sair do VS Code.

## Considerações de segurança

Ao executar servidores MCP locais, mantenha essas melhores práticas de segurança em mente:

- **Configuração a nível de workspace**: Sempre escolha nível de workspace sobre configuração global para limitar exposição
- **Revise dependências**: Certifique-se de confiar em todos os pacotes e dependências que seu servidor MCP usa
- **Acesso à rede**: Esteja ciente de que servidores MCP podem fazer requisições de rede (como nossas chamadas SerpApi)
- **Acesso a arquivos**: Servidores MCP têm acesso a arquivos dentro do seu escopo configurado

## Aprendizados

Ter seu servidor MCP integrado diretamente no seu ambiente de desenvolvimento cria um fluxo de trabalho simplificado onde você pode buscar, referenciar e incorporar seu conteúdo existente sem mudança de contexto. Isso é particularmente valioso para criadores de conteúdo, escritores técnicos e pessoas desenvolvedoras que precisam manter consistência ao longo do seu trabalho.

Não importa qual IDE você está usando, lembre-se desses passos:

1. **Configuração local**: clone o repositório do seu servidor MCP e certifique-se de que todas as dependências estão propriamente instaladas usando `uv sync`
2. **Configuração**: use a extensão MCP do VS Code para configurar seu servidor com o comando apropriado, incluindo todas as flags e dependências necessárias
3. **Gerenciamento de escopo**: escolha configuração a nível de workspace sobre global para seguir melhores práticas de segurança
4. **Debugging**: aproveite os recursos de logging e relatório de erro integrados para fazer troubleshooting de problemas

A combinação de servidor MCP customizado com GitHub Copilot no modo agente ajudará você a manter seu estado de flow que como pessoas escrevem código é tudo que realmente queremos.

Agora só preciso descobrir a melhor abordagem para ter esse servidor sem ter que clonar um repositório e configurá-lo manualmente, 🤔 mas isso acontecerá em um post futuro.
