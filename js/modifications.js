const modificationItems = document.querySelectorAll('.modifications__item');
const listItems = document.querySelectorAll('.list-item-m');
const listMore = document.querySelector('.list__more');

const activeFilterElements = [];
let listActiveItems = 0;
const allItemsList = listItems.length;
let isHiddenButton = false;

// if (allItemsList > listActiveItems) {
//   listItems.forEach((item, e) => {
//     if (6 > e + 1) {
//       item.classList.add('hidden');
//       listActiveItems++;
//     }
//   });
// }

// listMore.addEventListener('click', (e) => {
//   console.log(listActiveItems);
//   if (!isHiddenButton) {
//     for (let i = listActiveItems - 1; i++; listActiveItems + 5) {
//       if (!listItems[i]) {
//         listMore.textContent = 'свернуть список';
//         break;
//       }
//       listItems[i].classList.add('hidden');
//       isHiddenButton = true;
//     }
//   } else {
//     for (let i = listActiveItems - 1; i++; listActiveItems + 5) {
//       if (!listItems[i]) {
//         listMore.textContent = 'показать еще';
//         break;
//       }
//       console.log(listItems[i]);
//       listItems[i].classList.remove('hidden');
//       isHiddenButton = false;
//     }
//   }
// });

console.log(modificationItems);
if (modificationItems && modificationItems.length) {
  modificationItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      console.log(item.classList.contains('active'));
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        const index = activeFilterElements.indexOf(item.textContent);
        activeFilterElements.splice(index, 1);
      } else {
        item.classList.add('active');
        activeFilterElements.push(item.textContent);
        console.log(activeFilterElements);
      }
    });
  });
}

const range = (item) => {
  const lowerSlider = item.querySelector('.lower');
  const upperSlider = item.querySelector('.upper');

  const oneTextInput = item.querySelector('.one-text-range-value');
  const twoTextInput = item.querySelector('.two-text-range-value');

  const parrent = item.closest('.modifications');
  const reset = parrent.querySelector('.modifications__reset');

  const track = item.querySelector('.price-track');

  const rangeValue = item.querySelector('.price-field-label-lower');
  const rangeValueUpper = item.querySelector('.price-field-label-upper');
  const thumbWidth = 32;
  let rangeWidth = item.offsetWidth - thumbWidth;

  console.log(track);

  function updateTrack() {
    const lowerValue = parseInt(lowerSlider.value);
    const upperValue = parseInt(upperSlider.value);

    if (lowerValue == lowerSlider.min && upperValue == lowerSlider.max) {
      console.log(track, 'track');
      track.classList.add('invalid');
    } else {
      track.classList.remove('invalid');
    }

    // Для отображения состояния ползунков можно добавить логику изменения ширины полоски
    const percentLower =
      ((lowerValue - lowerSlider.min) / (lowerSlider.max - lowerSlider.min)) * 100;
    const percentUpper =
      ((upperValue - lowerSlider.min) / (lowerSlider.max - lowerSlider.min)) * 100;

    track.style.left = `${percentLower}%`;
    track.style.width = `${percentUpper - percentLower}%`;
  }

  function updateRangeWidth() {
    rangeWidth = item.offsetWidth - thumbWidth;

    updateTrack();

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

  oneTextInput.placeholder = `макс. ${upperSlider.max}`;
  twoTextInput.placeholder = `мин. ${lowerSlider.min}`;

  rangeValue.textContent = upperSlider.value;
  rangeValue.style.left = `calc(${
    (rangeWidth / (upperSlider.max - upperSlider.min)) * (upperSlider.value - upperSlider.min)
  }px)`;

  rangeValueUpper.style.left = `calc(${
    (rangeWidth / (upperSlider.max - upperSlider.min)) * (lowerSlider.value - upperSlider.min)
  }px)`;
  rangeValueUpper.textContent = lowerSlider.value;

  updateTrack();

  upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    updateTrack();

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

    updateTrack();

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
    if (!/^[0-9]*$/.test(e.target.value)) {
      e.target.value = upperSlider.max;
    }

    const value = Number(e.target.value);

    if (value > upperSlider.max || value < lowerSlider.value) {
      upperSlider.value = upperSlider.max;
      console.log('ok');
    } else if (value < upperSlider.min) {
      upperSlider.value = upperSlider.min;
    } else {
      upperSlider.value = value;
    }

    rangeValue.textContent = upperSlider.value;
    rangeValue.style.left = `calc(${
      (rangeWidth / (upperSlider.max - upperSlider.min)) * (upperSlider.value - upperSlider.min)
    }px)`;
    updateTrack();
  });

  twoTextInput.addEventListener('input', (e) => {
    if (!/^[0-9]*$/.test(e.target.value)) {
      e.target.value = upperSlider.min;
    }

    const value = Number(e.target.value);

    if (value < lowerSlider.min || value > upperSlider.value) {
      lowerSlider.value = lowerSlider.min;
    } else if (value < lowerSlider.min) {
      lowerSlider.value = lowerSlider.min;
    } else {
      lowerSlider.value = value;
    }

    if (value < lowerSlider.min) {
    }

    rangeValueUpper.textContent = lowerSlider.value;
    rangeValueUpper.style.left = `calc(${
      (rangeWidth / (lowerSlider.max - lowerSlider.min)) * (lowerSlider.value - lowerSlider.min)
    }px)`;
    updateTrack();
  });

  reset.addEventListener('click', (e) => {
    console.log('reset');
    upperSlider.value = upperSlider.max;
    rangeValue.textContent = upperSlider.max;
    oneTextInput.value = '';
    rangeValue.style.left = `calc(${
      (rangeWidth / (upperSlider.max - upperSlider.min)) * (upperSlider.value - upperSlider.min)
    }px)`;

    lowerSlider.value = lowerSlider.min;
    rangeValueUpper.textContent = lowerSlider.min;
    twoTextInput.value = '';
    rangeValueUpper.style.left = `calc(${
      (rangeWidth / (lowerSlider.max - lowerSlider.min)) * (lowerSlider.min - lowerSlider.min)
    }px)`;

    const inputCheckboxes = parrent.querySelectorAll('._checkbox-wallet');
    console.log(inputCheckboxes);

    modificationItems.forEach((item) => {
      item.classList.remove('active');
    });
    activeFilterElements.length = 0;
    updateTrack();
  });
};

const filterPrices = document.querySelectorAll('.filter-price');

if (filterPrices && filterPrices.length) {
  filterPrices.forEach((filterPrice) => {
    range(filterPrice);
  });
}

// reset
const reset = document.querySelector('.modifications__reset_2');

if (reset) {
  reset.addEventListener('click', (e) => {
    modificationItems.forEach((item) => {
      item.classList.remove('active');
    });
    activeFilterElements.length = 0;
  });
}

// reset end

//list
const lists = document.querySelectorAll('.list');

const onChangeList = (item) => {
  const listItems = item.querySelectorAll('.list-item-m');
  const button = item.querySelector('.list__more ');

  let listActiveItems = 0;
  const allItemsList = listItems.length;
  let isHiddenButton = false;

  for (let i = 0; i < 5; i++) {
    if (i >= allItemsList) break;
    listItems[i].classList.add('hidden');
    listActiveItems++;
  }

  button.addEventListener('click', (e) => {
    const currentActive = listActiveItems;

    if (!isHiddenButton) {
      for (let i = currentActive; i < currentActive + 4; i++) {
        if (i >= allItemsList) {
          button.textContent = 'свернуть список';
          isHiddenButton = true;
          break;
        }
        listItems[i].classList.add('hidden');
        listActiveItems++;
      }
    } else {
      for (let i = 5; i < currentActive; i++) {
        button.textContent = 'показать еще';
        isHiddenButton = false;

        listItems[i].classList.remove('hidden');
        listActiveItems = 5;
      }
    }
  });

  console.log(button, 'list__more ');
};

if (lists && lists.length) {
  lists.forEach((item) => {
    onChangeList(item);
  });
}
//list end

// баяны в персональной

const dopLabels = document.querySelectorAll('.dop__label');

if (dopLabels && dopLabels.length) {
  dopLabels.forEach((item) => {
    item.addEventListener('click', (e) => {
      item.classList.toggle('active');
      item.nextElementSibling.classList.toggle('active');
    });
  });
}
// баяны в персональной end