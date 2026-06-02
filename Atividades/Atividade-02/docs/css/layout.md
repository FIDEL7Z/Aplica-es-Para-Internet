# CSS — Layout

O arquivo `src/css/layout/layout.css` define a estrutura geral da página e as grades usadas nas seções.

## O que está definido aqui?

### `.main`

Garante que a área principal ocupe pelo menos a altura total da tela:

```css
.main {
  min-height: 100vh;
}
```

### `.container`

Centraliza o conteúdo e controla o espaçamento lateral:

```css
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}
```

### `.section`

Cria divisão visual entre as áreas com padding e borda inferior:

```css
.section {
  padding: var(--space-18) 0;
  border-bottom: 1px solid var(--color-border-default);
}
```

### Grades e colunas

Define grids para diferentes áreas do site:

- `.profiles-grid`: perfis do "Sobre"
- `.experience-columns`: experiência profissional
- `.contact-grid`: cards de contato
- `.projects-shared`: cards de projeto

Todas usam `display: grid` e `gap` para espaçamento consistente.

### Tipografia de textos corridos

Limita a largura de leitura para melhor experiência:

```css
.profile-bio,
.exp-desc,
.project-desc {
  max-width: 65ch;
}
```

### Responsividade

Quando a largura fica menor que 768px, as estruturas mudam para uma coluna:

- `.container` reduz padding
- `.profiles-grid`, `.experience-columns`, `.contact-grid` viram colunas únicas
- `.hero` e `.section` ajustam padding vertical

## Por que essa camada é importante?

Ela mantém a ordem do layout separada do estilo dos componentes. Assim, o design responde a diferentes larguras de tela sem precisar alterar cada componente individualmente.
