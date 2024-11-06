window.onload = function () {
  const priceText = document.querySelector('.tsHeadline400Small');
  console.log('ок');

  if (!priceText) {
    location.reload();
  }

  const price = priceText.textContent.replace(/\D/g, '');
  const button = document.querySelector('.b2117-a4');

  console.log(price);

  if (button && Number(price) < 10500 && Number(price) > 9500) {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    button.dispatchEvent(event);
  } else {
    console.log('не ок');
    location.reload();
  }
};

window.onload = function () {
  const priceText = document.querySelector('.tsHeadline400Small');
  console.log(priceText);
};
