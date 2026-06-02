# CSS — Arquivo principal

## `src/css/main.css`

Este é o ponto de entrada do CSS do projeto. Ele importa os módulos em uma ordem lógica usando CSS Cascade Layers:

- `@layer tokens`: define variáveis de design (cores, tipografia, espaçamento)
- `@layer reset`: normaliza o comportamento dos elementos em todos os navegadores
- `@layer base`: define estilos globais de corpo, links, seleção e foco
- `@layer layout`: organiza a estrutura da página com grids e containers
- `@layer components`: estiliza elementos reutilizáveis como navbar, hero, botões e cards
- `@layer utilities`: inclui classes de apoio, títulos e estilos acessíveis

## Por que usar layers?

1. maior previsibilidade na cascade
2. facilita a manutenção e a leitura do código
3. permite que os arquivos de estilo dependam de tokens abaixo deles
4. evita que regras de componentes sobrescrevam tokens sem intenção

## O que está sendo importado

- `tokens/primitives.css`
- `tokens/semantic.css`
- `tokens/spacing.css`
- `tokens/typography.css`
- `themes/dark.css`
- `base/reset.css`
- `base/base.css`
- `tools/tools.css`
- `layout/layout.css`
- `components/navbar.css`
- `components/hero.css`
- `components/btn.css`
- `components/badge.css`
- `components/card.css`
- `components/form.css`
- `components/footer.css`
- `utilities/utilities.css`

## Resumo

O `main.css` não contém regras de estilo próprias além das importações: ele garante que o CSS seja carregado em camadas definidas e que todas as dependências estejam disponíveis.
