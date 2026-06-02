# JavaScript — Interatividade e Comportamento

## Arquivo principal

O JavaScript está em `src/js/script.js`. Ele adiciona três comportamentos principais ao site:

1. menu mobile
2. cabeçalho em estado de rolagem
3. validação e retorno do formulário

## Quando o script roda

O código é executado após o evento `DOMContentLoaded`, garantindo que o HTML esteja totalmente carregado antes de buscar elementos na página.

```js
document.addEventListener('DOMContentLoaded', () => {
  // ...
});
```

## Menu mobile

### Elementos envolvidos

- `.navbar__toggle` — botão de hambúrguer
- `.navbar__menu` — lista de links do menu
- links dentro de `.navbar__menu`

### Como funciona

Ao clicar no botão toggle, o script:

- alterna a classe `navbar__menu--open`
- ajusta `aria-expanded` para `true` ou `false`
- muda `aria-label` entre "Abrir menu de navegação" e "Fechar menu de navegação"

Isso permite ao CSS exibir ou ocultar o menu em telas pequenas e informa leitores de tela sobre o estado.

### Fechamento automático

O menu também fecha quando:

- qualquer link do menu é clicado
- a tecla `Escape` é pressionada

Isso melhora a experiência mobile e evita que o menu fique aberto indevidamente.

## Cabeçalho com sombra de rolagem

### Elemento envolvido

- `.header`

### Comportamento

O script monitora a posição de rolagem e adiciona a classe `.header--scrolled` quando `window.scrollY > 80`.

Esse efeito altera o estilo do cabeçalho, normalmente adicionando sombra e borda mais forte, para indicar que a página já foi rolada.

## Validação e feedback do formulário

### Elementos envolvidos

- `.contact-form`
- `#form-status`

### Como funciona

Quando o formulário é enviado:

- `form.checkValidity()` verifica se os campos são válidos
- se for válido, `event.preventDefault()` impede o envio real
- a mensagem de sucesso é exibida em `#form-status`
- o formulário é resetado com `form.reset()`

### Observação

O formulário não envia dados para um servidor real. Ele simula o envio para demonstrar a validação e o feedback para o usuário.

## Boas práticas usadas

- espera o DOM estar pronto antes de acessar elementos
- evita erros se algum elemento não existir
- separa lógica em funções pequenas e reutilizáveis
- usa atributos ARIA para melhorar acessibilidade
- adiciona comportamento apenas quando necessário

## Possíveis perguntas para apresentação

- Por que usar `DOMContentLoaded`?
  - para garantir que o HTML esteja carregado antes de selecionar elementos.

- Como o botão de menu informa leitores de tela?
  - atualiza `aria-expanded` e `aria-label` para indicar o estado aberto/fechado.

- O que acontece se o formulário for inválido?
  - o script apenas permite que a validação nativa mostre erros; não faz ação adicional.

- Por que o menu fecha no `Escape`?
  - para melhorar usabilidade especialmente em mobile e para acessibilidade.

## Guia de perguntas

Veja também: [Perguntas sobre JavaScript](qa/javascript-questions.md)

