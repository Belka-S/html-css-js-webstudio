const ref = {
  menuEl: document.querySelector('div[data-menu]'),
  openBtnEl: document.querySelector('button[data-menu-open]'),
  closeBtnEl: document.querySelector('button[data-menu-close]'),
};
// Object.values(ref).forEach(el => console.log(el));
const onClick = e => ref.menuEl.classList.toggle('is-open');

ref.openBtnEl.addEventListener('click', onClick);
ref.closeBtnEl.addEventListener('click', onClick);
