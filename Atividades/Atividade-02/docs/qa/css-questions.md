# Perguntas sobre CSS

## Questões que podem aparecer

- O que são design tokens e por que eles foram usados?
- Para que serve o `main.css` no projeto?
- Qual é a diferença entre `tokens`, `base`, `layout`, `components` e `utilities`?
- Por que usamos `box-sizing: border-box` no reset?
- O que faz o `.header--scrolled`?
- Como o CSS trata responsividade?
- Para que serve o arquivo `tools.css`?
- Por que o `.skip-link` fica escondido até ter foco?
- Como as cores e os espaços são padronizados?
- Qual é o papel dos componentes como `hero`, `btn`, `card` e `form`?

## Respostas rápidas

- Design tokens são variáveis CSS que padronizam cores, tipografia e espaçamento para manter consistência.
- `main.css` é a entrada que importa todos os módulos e define a ordem de carregamento.
- `tokens` são valores; `base` normaliza e define estilos globais; `layout` organiza a página; `components` estiliza blocos; `utilities` fornece classes de apoio.
- `box-sizing: border-box` faz com que padding e border sejam incluídos no tamanho total do elemento, evitando cálculos estranhos.
- `.header--scrolled` adiciona sombra e borda mais forte ao cabeçalho quando a página é rolada.
- O CSS usa media queries para mudar grades e espaçamentos em telas menores.
- `tools.css` contém utilitários globais como transições e o skip-link.
- O `.skip-link` só aparece em foco para não atrapalhar a experiência visual, mas permanece disponível para teclado.
- As cores são definidas em `tokens/semantic.css` e os espaços em `tokens/spacing.css`, criando um padrão único.
- Componentes como `hero`, `btn`, `card` e `form` são blocos reutilizáveis do design.
