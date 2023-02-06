const ref = {
  modalEl: document.querySelector('div[data-modal]'),
  openBtnEl: document.querySelector('button[data-modal-open]'),
  closeBtnEl: document.querySelector('button[data-modal-close]'),
};
// Object.values(ref).forEach(el => console.log(el));

const onClick = e => ref.modalEl.classList.toggle('is-hidden');

ref.openBtnEl.addEventListener('click', onClick);
ref.closeBtnEl.addEventListener('click', onClick);
