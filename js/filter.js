const filterEl = document.querySelector('ul.portfolio__filter');
const itemEl = document.querySelectorAll('li.portfolio__item');

filterEl.addEventListener('click', onCheck);

function onCheck(e) {
  if (e.target.type !== 'radio') {
    return;
  }
  const tags = new Set();

  itemEl.forEach(el => {
    const filterTag = el.querySelector('a[data-filter]').dataset.filter;
    tags.add(filterTag);

    if (filterTag !== e.target.id) {
      el.classList.add('visually-hidden');
    } else {
      el.classList.remove('visually-hidden');
    }
  });

  if (!tags.has(e.target.id)) {
    itemEl.forEach(el => el.classList.remove('visually-hidden'));
  }
}
