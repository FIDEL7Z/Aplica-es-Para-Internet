document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');
  const form = document.querySelector('.contact-form');
  const status = document.querySelector('#form-status');

  const closeMenu = () => {
    if (!menu || !toggle) return;
    menu.classList.remove('navbar__menu--open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu de navegação');
  };

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('navbar__menu--open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute(
        'aria-label',
        isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação',
      );
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  if (header) {
    const updateHeaderState = () => {
      header.classList.toggle('header--scrolled', window.scrollY > 80);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }

  if (form && status) {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) return;

      event.preventDefault();
      status.textContent = 'Mensagem validada com sucesso.';
      status.classList.add('form-status--success');
      form.reset();
    });
  }
});
