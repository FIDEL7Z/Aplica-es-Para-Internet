# CSS — Tools

O arquivo `src/css/tools/tools.css` contém utilitários globais e pequenos recursos que ajudam a interface sem serem componentes específicos.

## O que ele faz?

### 1. Transição global

```css
* {
  transition-timing-function: ease;
}
```

Isso faz com que transições usem uma curva suave por padrão.

### 2. Skip link

A classe `.skip-link` permite que usuários de teclado e leitores de tela pulem diretamente para o conteúdo principal:

- fixo no topo da página
- escondido visualmente até receber foco
- torna a navegação mais acessível

```css
.skip-link {
  position: fixed;
  transform: translateY(-160%);
}

.skip-link:focus {
  transform: translateY(0);
}
```

## Por que esse arquivo existe?

Ele agrupa regras de apoio que não pertencem a um componente específico, como foco e transições. Assim, a interface mantém consistência sem misturar esses pequenos utilitários com regras maiores de layout ou componentes.
