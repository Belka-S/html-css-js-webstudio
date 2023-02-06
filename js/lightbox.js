const listEl = document.querySelector('ul.occupation__list');
const itemEl = document.querySelector('li.occupation__item');

const markup = src => `<img src="${src}" style="width: 600px;">`;

const onClick = e => {
  if (!e.target.hasAttribute('alt')) {
    return;
  }
  const instance = basicLightbox.create(markup(e.target.src));

  instance.show();

  const onEsc = e => {
    removeEventListener('keydown', onEsc);
    if (e.code !== 'Escape') {
      return;
    }
    instance.close();
  };
  addEventListener('keydown', onEsc);
};

listEl.addEventListener('click', onClick);
