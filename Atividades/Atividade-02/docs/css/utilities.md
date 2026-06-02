# CSS — Utilitários

O arquivo `src/css/utilities/utilities.css` contém pequenas classes e padrões usados em várias partes do site.

## `.section-tag`

Usada para mostrar o número e o tipo da seção:

- texto em maiúsculas
- fonte pequena e semibold
- margem inferior para separar do título
- variações de cor para Jeff, Hugo e conteúdo compartilhado

## `.section-title`

Define o estilo dos títulos de seção:

- fonte de heading grande e bold
- espaçamento inferior consistente

## `.sr-only`

Classe acessível para esconder visualmente conteúdo, mas manter disponível para leitores de tela:

- `position: absolute`
- `width: 1px`, `height: 1px`
- `overflow: hidden`
- `clip: rect(0, 0, 0, 0)`

## Por que utilitários?

Eles servem para padrões pequenos que aparecem mais de uma vez e que não pertencem a um único componente.

Exemplo: `.sr-only` pode ser usado em qualquer área acessível do site sem criar uma classe nova em cada componente.
