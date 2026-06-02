# Perguntas sobre JavaScript

## Questões que podem aparecer

- Por que o JavaScript espera pelo `DOMContentLoaded`?
- Como o menu mobile abre e fecha?
- O que o `aria-expanded` faz no menu?
- Por que o script fecha o menu ao clicar em um link?
- Para que serve o tratamento da tecla `Escape`?
- O que o script faz quando o formulário é enviado?
- Por que o formulário não envia para um servidor real?
- Como `form.checkValidity()` funciona?
- O que é `event.preventDefault()` e por que ele é usado?
- Como o script entra em modo acessível?

## Respostas rápidas

- `DOMContentLoaded` garante que o HTML esteja carregado antes de selecionar elementos.
- O menu mobile alterna a classe `navbar__menu--open` e atualiza atributos ARIA.
- `aria-expanded` informa se o menu está aberto ou fechado para leitores de tela.
- Fechar o menu ao clicar em um link melhora a experiência mobile e evita deixar o menu aberto.
- `Escape` permite fechar o menu com o teclado, o que é útil para acessibilidade.
- Ao enviar o formulário, o script valida os dados, mostra mensagem de sucesso e reseta o formulário.
- O formulário usa simulação para demonstrar validação; não há backend configurado.
- `form.checkValidity()` retorna `true` se todos os campos cumprirem as regras HTML.
- `event.preventDefault()` impede o envio padrão, permitindo controlar o comportamento com JavaScript.
- O script atualiza atributos ARIA e usa eventos de teclado, melhorando a acessibilidade.
