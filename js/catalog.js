const checkboxProducts = document.querySelectorAll('.checkbox-product');

const onChangeSize = (e) => {
  const isChecked = e.target.checked;
  const parrent = e.target.closest('.products');
  const images = parrent.querySelectorAll('.catalog-products__img');

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
