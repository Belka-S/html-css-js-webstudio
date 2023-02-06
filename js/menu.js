(() => {
  const menuBtnOpen = document.querySelector('[data-menu-open]');
  const menuBtnClose = document.querySelector('[data-menu-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnOpen.addEventListener('click', () => {
    const expanded = menuBtnOpen.getAttribute('aria-expanded') === 'true' || false;

    mobileMenuRef.classList.toggle('is-open');

    menuBtnOpen.setAttribute('aria-expanded', !expanded);
  });

  menuBtnClose.addEventListener('click', () => {
    const expanded = menuBtnOpen.getAttribute('aria-expanded') === 'true' || false;

    mobileMenuRef.classList.toggle('is-open');

    menuBtnOpen.setAttribute('aria-expanded', !expanded);
  });
})();
