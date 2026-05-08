/**
 * Lógica do Menu Hamburger
 * Gerencia a abertura/fechamento e acessibilidade (ARIA e Teclado)
 */

const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');

// Alternar menu ao clicar no botão hamburger
toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('navbar__menu--open');
    
    // Atualiza o estado ARIA para leitores de tela
    toggle.setAttribute('aria-expanded', isOpen);
});

// Fechar menu ao pressionar a tecla Escape (Acessibilidade)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('navbar__menu--open')) {
        menu.classList.remove('navbar__menu--open');
        
        // Reseta o estado do botão
        toggle.setAttribute('aria-expanded', 'false');
        
        // Devolve o foco ao botão para navegação por teclado
        toggle.focus();
    }
});