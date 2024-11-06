const dashboardTriggers = document.querySelectorAll('.dashboard__link-trigger');
const dashboardItems = document.querySelectorAll('.dashboard__item');

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
