# CSS — Tokens

Os tokens definem a linguagem visual do projeto. Eles são valores reutilizáveis de cores, tipografia, espaçamento e outros parâmetros de design.

## `src/css/tokens/primitives.css`

Este arquivo guarda `valores brutos` do design, chamados de tokens primitivos:

- `--_neutral-...`: escala de cinza do branco ao preto
- `--_mint-...`, `--_violet-...`: cores principais do tema
- `--_red-400`, `--_green-400`: cores de erro e sucesso
- `--_shadow-color`: cor usada por sombras

Importante: os componentes não consomem diretamente esses tokens. Eles são usados pelos tokens semânticos.

## `src/css/tokens/semantic.css`

Aqui as cores e sombras recebem nomes que fazem sentido para a interface:

- `--color-page-bg`: fundo da página
- `--color-surface`: fundo dos cards e seções
- `--color-surface-raised`: superfícies elevadas como menus e cards
- `--color-border-default` / `--color-border-strong`: bordas sutis e fortes
- `--color-text-primary` / `--color-text-secondary`: texto principal e secundário
- `--color-action-primary` / `--color-action-secondary`: cores de destaque e ações
- `--color-focus-ring`: contorno de foco acessível
- `--color-danger` / `--color-success`: estados de erro e sucesso
- `--shadow-elevated`, `--shadow-header`: sombras usadas em elementos elevados

Esse arquivo faz a ponte entre design e implementação.

## `src/css/tokens/spacing.css`

Define espaçamentos e bordas padronizadas:

- `--space-1` a `--space-18`: espaçamentos incrementais para padding, margin e gaps
- `--radius-xs` a `--radius-lg`: raios de borda para cantos arredondados
- `--radius-pill`: bordas totalmente arredondadas para badges e botões

Isso garante consistência em todo o projeto e evita valores diferentes para espaços semelhantes.

## `src/css/tokens/typography.css`

Define fontes, tamanhos e pesos de texto:

- `--font-family-heading`: fonte usada em títulos (`Syne`)
- `--font-family-body`: fonte usada no corpo (`DM Sans`)
- `--font-size-xs` até `--font-size-display`
- `--font-weight-light` até `--font-weight-extrabold`
- `--leading-tight`, `--leading-base`, `--leading-loose`

Também leva em conta responsividade:

- telas pequenas (`max-width: 480px`) aumentam `xs` e `sm`
- telas grandes (`min-width: 1600px`) aumentam o tamanho base do texto

## `src/css/themes/dark.css`

Ativa o modo escuro com:

```css
html[data-theme='dark'] {
  color-scheme: dark;
}
```

Isso informa ao navegador que o tema é escuro, ajudando em formulários, scrollbars e elementos nativos em alguns navegadores.

## Por que tokens ajudam?

- mantêm a identidade visual uniforme
- facilitam mudanças globais de estilo
- reduzem duplicação de valores no CSS
- deixam o código mais legível para quem estuda o projeto
