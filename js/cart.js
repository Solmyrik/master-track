const counters = document.querySelectorAll('.counter');
const cartDeletes = document.querySelectorAll('.table-cart__delete');
const cartPopapDelete = document.querySelectorAll('.cart-popap__delete');
const headerQuantity = document.querySelector('.header__cart-quantity');
const cartNoneContainer = document.querySelector('.cart-none');
const cartContainer = document.querySelector('.cart');

const headerCartIcon = document.querySelector('.header__cart');
const cartPopap = document.querySelector('.cart-popap');
const cartPopapClose = document.querySelector('.cart-popap__close');
const cartPopapWrapper = document.querySelector('.cart-popap__wrapper');

const changeCounter = (e) => {
  if (e.target.classList.contains('decrement')) {
    const parrent = e.target.closest('.counter');
    const valueEl = parrent.querySelector('.counter__value');
    const targetValue = valueEl.getAttribute('data-counter-value');
    const elementsWithSameValue = document.querySelectorAll(
      '[data-counter-value="' + targetValue + '"]',
    );
    const value = Number(valueEl.textContent);
    if (value > 1) {
      elementsWithSameValue.forEach((item) => {
        item.textContent = value - 1;
      });
    }
  }

  if (e.target.classList.contains('increment')) {
    const parrent = e.target.closest('.counter');
    const valueEl = parrent.querySelector('.counter__value');
    const targetValue = valueEl.getAttribute('data-counter-value');
    const elementsWithSameValue = document.querySelectorAll(
      '[data-counter-value="' + targetValue + '"]',
    );
    const value = Number(valueEl.textContent);
    if (value) {
      elementsWithSameValue.forEach((item) => {
        item.textContent = value + 1;
      });
    }
  }
};

const onDeleteCartItem = (e) => {
  const cartItem = e.target.closest('.table-cart__item') || e.target.closest('.cart-popap__item');
  const quantity = Number(headerQuantity.textContent) - 1;
  headerQuantity.textContent = quantity;

  const targetValue = cartItem.getAttribute('data-cart-item');
  const elementsWithSameValue = document.querySelectorAll('[data-cart-item="' + targetValue + '"]');

  elementsWithSameValue.forEach((item) => {
    item.remove();
  });

  if (quantity === 0) {
    cartContainer.classList.remove('active');
    cartNoneContainer.classList.add('active');
    headerQuantity.style.display = 'none';
    cartPopap.classList.remove('active');
  }
};

const changeActivePopupCart = (e) => {
  cartPopap.classList.toggle('active');
};
const changeActivePopupCartWraper = (e) => {
  if (e.target.className === 'cart-popap__wrapper') {
    changeActivePopupCart();
  }
};

if (headerCartIcon) {
  headerCartIcon.addEventListener('click', changeActivePopupCart);
}
if (cartPopapClose) {
  cartPopapClose.addEventListener('click', changeActivePopupCart);
}
if (cartPopapWrapper) {
  cartPopapWrapper.addEventListener('click', changeActivePopupCartWraper);
}

if (counters && counters.length) {
  counters.forEach((counter) => {
    counter.addEventListener('click', changeCounter);
  });
}

if (cartDeletes && cartDeletes.length) {
  cartDeletes.forEach((cartDelete) => {
    cartDelete.addEventListener('click', onDeleteCartItem);
  });
}
if (cartPopapDelete && cartPopapDelete.length) {
  cartPopapDelete.forEach((cartDelete) => {
    cartDelete.addEventListener('click', onDeleteCartItem);
  });
}
