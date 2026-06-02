# CSS — Componentes

O arquivo `src/css/components` contém os estilos dos elementos reutilizáveis da interface.

## `navbar.css`

Cuida da navegação e do menu mobile:

- `.header`: área fixa no topo com fundo translúcido e borda
- `.header--scrolled`: aplica sombra e borda mais forte ao rolar
- `.navbar`: layout flex entre marca e menu
- `.navbar__link`: estilo dos links de navegação
- `.navbar__toggle`: botão hamburger para mobile
- `.navbar__menu--open`: mostra o menu em telas pequenas

### Responsividade

Para larguras menores que 768px:

- o botão hamburger aparece
- o menu muda para coluna e é posicionado como dropdown
- os links ocupam toda a largura disponível

## `hero.css`

Estiliza a seção inicial:

- fundo com camadas de gradientes e cores de ação
- título grande e responsivo
- `.hero-label`: selo de seção
- cores especiais para `.jeff` e `.hugo`

## `btn.css`

Define botões básicos e variantes:

- `.btn` base com padding, borda arredondada e animação
- `.btn--primary`: botão principal em verde menta
- `.btn--outline`: botão com borda e fundo transparente
- `.btn--ghost`: botão leve sem fundo

## `badge.css`

Estiliza listas de skills e tags de projeto:

- `.skills-list` e `.project-tags` usam `display: flex` e `flex-wrap`
- `.skill-tag` usa bordas e fundo translúcido para destaque
- `.project-tag` usa fundo neutro e borda suave

## `card.css`

Controla vários cards do site:

- perfil, experiência, projeto e contato
- bordas, cores e espaçamento uniforme
- cards de projeto usam grid e suporte a mídia (`video`, `audio`)
- efeitos hover apenas em dispositivos com ponteiro (melhora a usabilidade em mobile)

## `form.css`

Estiliza o formulário de contato:

- `fieldset` com fundo e borda arredondada
- labels, inputs e textarea consistentes
- foco visível e transição de borda
- mensagens de dica e status

## `footer.css`

Estiliza o rodapé com:

- fundo escuro e texto secundário
- grid de três colunas
- links com hover e foco suaves
- responsividade para telas menores
