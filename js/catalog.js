const checkboxProducts = document.querySelectorAll('.checkbox-product');

const onChangeSize = (e) => {
  const isChecked = e.target.checked;
  const parrent = e.target.closest('.products');
  const images = parrent.querySelectorAll('.catalog-products__img');
  const text = parrent.querySelector('.products__left p');

  if (isChecked) {
    text.textContent = 'Показать изображения';
  } else {
    text.textContent = 'Показать размеры';
  }

  images.forEach((img) => {
    if (isChecked) {
      img.classList.add('size');
    } else {
      img.classList.remove('size');
    }
  });
};

if (checkboxProducts && checkboxProducts.length) {
  checkboxProducts.forEach((item) => {
    item.addEventListener('change', onChangeSize);
  });
}

// фильтры
const productsButton = document.querySelector('.products__button-1');
const productsFilters1 = document.querySelector('.filters-1');
const productsButton2 = document.querySelector('.products__button-2');
const productsFilters2 = document.querySelector('.filters-2');

function filtersChange(button, filter) {
  if (!button || !filter) return;

  button.addEventListener('click', (e) => {
    button.classList.toggle('active');
    const text = button.querySelector('p');

    if (button.classList.contains('active')) {
      text.textContent = 'Закрыть';
      filter.style.maxHeight = filter.scrollHeight + 'px';
      filter.classList.add('active');
    } else {
      text.textContent = 'Фильтры';
      filter.style.maxHeight = 0 + 'px';
      filter.classList.remove('active');
    }
  });
}
filtersChange(productsButton, productsFilters1);
filtersChange(productsButton2, productsFilters2);
// фильтры end
