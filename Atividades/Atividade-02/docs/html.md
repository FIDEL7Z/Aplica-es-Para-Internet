# HTML — Estrutura e Significado

## O que é este HTML?

O arquivo `src/index.html` é a página principal do portfólio. Ele foi construído como uma single page responsiva com seções claras para apresentar a dupla, experiência, projetos e contato.

## Estrutura semântica

O HTML usa tags semânticas para organizar o conteúdo e facilitar a leitura do navegador e de leitores de tela:

- `header`: contém a navegação principal e o logotipo
- `nav`: agrupa links para cada seção da página
- `main`: envolve todo o conteúdo principal
- `section`: cria blocos distintos, como `hero`, `sobre`, `experiência`, `projetos` e `contato`
- `article`: representa unidades independentes, como perfis, experiências, cards de projeto e contatos
- `footer`: exibe informações finais, navegação secundária e créditos

## Acessibilidade no HTML

O projeto inclui práticas importantes de acessibilidade:

- `skip-link` permite pular direto para o conteúdo principal
- `aria-label` descreve ações de botões e links para leitores de tela
- `aria-expanded` e `aria-controls` no menu mobile para indicar estado
- `aria-live="polite"` no status do formulário para avisar alterações a leitores de tela
- `role="list"` em listas que são estilizadas como interface gráfica

## Navegação e seções

O menu principal usa links de âncora com `href="#id"`. Cada link leva o usuário à seção correspondente:

- `#sobre` — apresenta a dupla
- `#experiencia` — lista experiências de trabalho
- `#projetos` — mostra projetos com mídia e links
- `#contato` — exibe contatos e formulário de mensagem

Esse padrão cria uma experiência de navegação rápida dentro da mesma página.

## Seções principais

### Hero

- mostra o título do portfólio
- destaca os nomes Jefferson e Hugo com classes específicas
- usa texto curto e chamativo para explicar o projeto

### Sobre

- dois perfis individuais com foto, nome, função e descrição
- listas de habilidades em `ul` com `role="list"`
- cards separados para cada autor

### Experiência

- duas colunas para Jefferson e Hugo
- cada experiência é um `article` com data, título, empresa e descrição
- estrutura clara para leitura de histórico profissional

### Projetos

- cada projeto é um card com título, descrição, tags e botão de link
- há suporte a mídia com `video` e `audio`
- um projeto colaborativo descreve o trabalho em dupla

### Contato

- dois cards de contato com links externos
- formulário de contato com campos de nome, e-mail, telefone e mensagem
- validação nativa do HTML para garantir dados mínimos

## Formulário de contato

O formulário usa estes recursos:

- `required` para campos obrigatórios
- `type="email"` para validar endereço de e-mail
- `minlength` para texto mínimo em nome e mensagem
- `pattern` para validar telefone no formato brasileiro
- `autocomplete` para melhorar a experiência do usuário
- `aria-describedby` para fornecer ajuda contextual

## Boas práticas no HTML

- organizado em blocos lógicos
- evita divs desnecessárias quando há tags semânticas
- combina acessibilidade e estrutura clara
- facilita manutenção e compreensão do código

## Guia de perguntas

Veja também: [Perguntas sobre HTML](qa/html-questions.md)

