# Perguntas sobre HTML

## Questões que podem aparecer

- Por que usamos tags semânticas como `section`, `article` e `footer`?
- Para que serve o `skip-link`?
- Como o menu navega entre as seções?
- Por que há `aria-expanded` e `aria-controls` no botão do menu?
- Qual a importância de `aria-live="polite"` no formulário?
- Como funciona a validação do formulário usando apenas HTML?
- Por que usamos `role="list"` em algumas listas?
- O que significa `aria-describedby` nos campos do formulário?
- Qual é o propósito das seções `hero`, `sobre`, `experiência`, `projetos` e `contato`?
- Por que o formulário usa `inputmode="tel"` no campo de telefone?

## Respostas rápidas

- Tags semânticas ajudam a organizar o conteúdo para navegadores, leitores de tela e SEO.
- O `skip-link` permite pular diretamente para o conteúdo principal, melhorando acessibilidade por teclado.
- O menu usa links com `href="#id"` para ir às seções dentro da mesma página.
- `aria-expanded` informa se o menu está aberto ou fechado; `aria-controls` indica qual elemento é controlado.
- `aria-live="polite"` avisa leitores de tela quando a mensagem de status do formulário muda.
- A validação HTML usa `required`, `type="email"`, `minlength` e `pattern` para garantir dados corretos.
- `role="list"` reforça que listas estilizadas ainda são listas semânticas.
- `aria-describedby` conecta um campo a uma mensagem explicativa ou dica.
- Cada seção apresenta um bloco do portfólio: apresentação, perfis, experiência, projetos e contato.
- `inputmode="tel"` sugere ao celular o teclado numérico, facilitando a digitação.
