# CSS — Base

A base do CSS cuida da normalização do browser e dos estilos globais do projeto.

## `src/css/base/reset.css`

Esse arquivo remove diferenças entre navegadores:

- zera `margin` e `padding`
- define `box-sizing: border-box` para todos os elementos
- mantém imagens e vídeos responsivos com `max-width: 100%`
- garante que botões, inputs e textareas usem a mesma fonte do corpo
- remove borda padrão de botões

Exemplos:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button,
input,
textarea {
  font: inherit;
}
```

## `src/css/base/base.css`

Define os estilos globais da página:

- `body` com `min-height: 100vh` e `overflow-x: hidden`
- cor de fundo e cor de texto usando tokens semânticos
- fonte padrão do corpo e `line-height`
- links herdam a cor do texto
- seleção de texto com cor personalizada
- foco visível acessível com `outline`

Exemplo:

```css
body {
  background-color: var(--color-page-bg);
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
}

:focus-visible {
  outline: 3px solid var(--color-focus-ring);
}
```

## Por que essa camada importa?

Sem essa base, o layout poderia renderizar diferente em cada navegador. A camada base garante que todos os estilos comecem a partir de uma mesma referência e melhora a experiência geral do site.
