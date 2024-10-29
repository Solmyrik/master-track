const range = (item) => {
  const lowerSlider = item.querySelector('.lower');
  const upperSlider = item.querySelector('.upper');

  const oneTextInput = item.querySelector('.one-text-range-value');
  const twoTextInput = item.querySelector('.two-text-range-value');

  const parrent = item.closest('.filters');
  const reset = parrent.querySelector('.filters__reset');

  const rangeValue = item.querySelector('.price-field-label-lower');
  const rangeValueUpper = item.querySelector('.price-field-label-upper');
  const thumbWidth = 32;
  let rangeWidth = item.offsetWidth - thumbWidth;

  function updateRangeWidth() {
    rangeWidth = item.offsetWidth - thumbWidth;

    rangeValue.textContent = upperSlider.value;
    rangeValue.style.left = `calc(${
      (rangeWidth / (upperSlider.max - upperSlider.min)) * (upperSlider.value - upperSlider.min)
    }px)`;

    rangeValueUpper.style.left = `calc(${
      (rangeWidth / (upperSlider.max - upperSlider.min)) * (lowerSlider.value - upperSlider.min)
    }px)`;
    rangeValueUpper.textContent = lowerSlider.value;
  }

  window.addEventListener('resize', updateRangeWidth);

  let lowerVal = parseInt(lowerSlider.value);
  let upperVal = parseInt(upperSlider.value);

  oneTextInput.value = upperSlider.value;
  twoTextInput.value = lowerSlider.value;

  rangeValue.textContent = upperSlider.value;
  rangeValue.style.left = `calc(${
    (rangeWidth / (upperSlider.max - upperSlider.min)) * (upperSlider.value - upperSlider.min)
  }px)`;

  rangeValueUpper.style.left = `calc(${
    (rangeWidth / (upperSlider.max - upperSlider.min)) * (lowerSlider.value - upperSlider.min)
  }px)`;
  rangeValueUpper.textContent = lowerSlider.value;

  upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    rangeValue.style.left = `calc(${
      (rangeWidth / (upperSlider.max - upperSlider.min)) * (upperVal - upperSlider.min)
    }px)`;
    rangeValue.textContent = upperSlider.value;

    if (upperVal < lowerVal + 2) {
      lowerSlider.value = upperVal - 1 > lowerSlider.min ? upperVal - 1 : lowerSlider.min;
      twoTextInput.value = upperVal - 1 > lowerSlider.min ? upperVal - 1 : lowerSlider.min;

      rangeValueUpper.style.left = `calc(${
        (rangeWidth / (upperSlider.max - upperSlider.min)) * (lowerSlider.value - upperSlider.min)
      }px)`;
      rangeValueUpper.textContent = lowerSlider.value;

      if (upperSlider.value == lowerSlider.min) {
        upperSlider.value = Number(lowerSlider.min) + 1;

        rangeValue.style.left = `calc(${
          (rangeWidth / (upperSlider.max - upperSlider.min)) * (upperSlider.value - upperSlider.min)
        }px)`;
        rangeValue.textContent = upperSlider.value;
      }
    }
    oneTextInput.value = this.value;
  };

  lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    rangeValueUpper.style.left = `calc(${
      (rangeWidth / (upperSlider.max - upperSlider.min)) * (lowerVal - upperSlider.min)
    }px)`;
    rangeValueUpper.textContent = lowerSlider.value;

    if (lowerVal > upperVal - 2) {
      upperSlider.value = lowerVal + 1 < upperSlider.max ? lowerVal + 1 : upperSlider.max;
      oneTextInput.value = lowerVal + 1 < upperSlider.max ? lowerVal + 1 : upperSlider.max;

      rangeValue.textContent = upperSlider.value;
      rangeValue.style.left = `calc(${
        (rangeWidth / (upperSlider.max - upperSlider.min)) * (upperSlider.value - upperSlider.min)
      }px)`;

      if (lowerSlider.value == upperSlider.max) {
        lowerSlider.value = Number(upperSlider.max) - 1;

        rangeValueUpper.style.left = `calc(${
          (rangeWidth / (upperSlider.max - upperSlider.min)) * (lowerSlider.value - upperSlider.min)
        }px)`;
        rangeValueUpper.textContent = lowerSlider.value;
      }
    }
    twoTextInput.value = this.value;
  };

  oneTextInput.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value > upperSlider.max) {
      e.target.value = upperSlider.max;
      upperSlider.value = upperSlider.max;
    }

    if (value < upperSlider.min) {
      e.target.value = upperSlider.min;
      upperSlider.value = upperSlider.min;
    }

    upperSlider.value = value;
    rangeValue.textContent = upperSlider.value;
    rangeValue.style.left = `calc(${
      (rangeWidth / (upperSlider.max - upperSlider.min)) * (upperSlider.value - upperSlider.min)
    }px)`;
  });

  twoTextInput.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value > lowerSlider.max) {
      e.target.value = lowerSlider.max;
      lowerSlider.value = lowerSlider.max;
    }

    if (value < lowerSlider.min) {
      e.target.value = lowerSlider.min;
      lowerSlider.value = lowerSlider.min;
    }

    lowerSlider.value = value;
    rangeValueUpper.textContent = lowerSlider.value;
    rangeValueUpper.style.left = `calc(${
      (rangeWidth / (lowerSlider.max - lowerSlider.min)) * (lowerSlider.value - lowerSlider.min)
    }px)`;
  });

  reset.addEventListener('click', (e) => {
    upperSlider.value = upperSlider.max;
    rangeValue.textContent = upperSlider.max;
    oneTextInput.value = upperSlider.max;
    rangeValue.style.left = `calc(${
      (rangeWidth / (upperSlider.max - upperSlider.min)) * (upperSlider.value - upperSlider.min)
    }px)`;

    lowerSlider.value = lowerSlider.min;
    rangeValueUpper.textContent = lowerSlider.min;
    twoTextInput.value = lowerSlider.min;
    rangeValueUpper.style.left = `calc(${
      (rangeWidth / (lowerSlider.max - lowerSlider.min)) * (lowerSlider.min - lowerSlider.min)
    }px)`;

    const inputCheckboxes = parrent.querySelectorAll('._checkbox-wallet');
    console.log(inputCheckboxes);

    inputCheckboxes.forEach((input) => {
      input.checked = false;
    });
  });
};

const filterPrices = document.querySelectorAll('.filter-price');

if (filterPrices && filterPrices.length) {
  filterPrices.forEach((filterPrice) => {
    range(filterPrice);
  });
}
