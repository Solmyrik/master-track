const dashboardTriggers = document.querySelectorAll('.dashboard__link-trigger');
const dashboardItems = document.querySelectorAll('.dashboard__item');

const counters = document.querySelectorAll('.counter');

if (dashboardTriggers && dashboardTriggers.length) {
  dashboardTriggers.forEach((trigger, i) => {
    trigger.addEventListener('click', (e) => {
      closeActiveTrigger();
      trigger.classList.add('active');
      dashboardItems[i].classList.add('active');
    });
  });

  function closeActiveTrigger() {
    dashboardTriggers.forEach((trigger, i) => {
      trigger.classList.remove('active');
    });
    dashboardItems.forEach((item, i) => {
      item.classList.remove('active');
    });
  }
}

const changeCounter = (e) => {
  console.log('click');
  if (e.target.classList.contains('decrement')) {
    const parrent = e.target.closest('.counter');
    const valueEl = parrent.querySelector('.counter__value');
    const targetValue = valueEl.getAttribute('data-counter-value');
    const elementsWithSameValue = document.querySelectorAll(
      '[data-counter-value="' + targetValue + '"]',
    );
    const value = Number(valueEl.textContent);
    if (value > 0) {
      elementsWithSameValue.forEach((item) => {
        item.textContent = value - 1;
      });
    }
  }

  if (e.target.classList.contains('increment')) {
    console.log('click');
    const parrent = e.target.closest('.counter');
    const valueEl = parrent.querySelector('.counter__value');
    const targetValue = valueEl.getAttribute('data-counter-value');
    const elementsWithSameValue = document.querySelectorAll(
      '[data-counter-value="' + targetValue + '"]',
    );
    const value = Number(valueEl.textContent);
    if (value > -1) {
      elementsWithSameValue.forEach((item) => {
        item.textContent = value + 1;
      });
    }
  }
};

if (counters && counters.length) {
  counters.forEach((counter) => {
    counter.addEventListener('click', changeCounter);
  });
}
