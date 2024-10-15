function decorAnimation(scrollingText) {
  if (!scrollingText) return;
  let leftPosition = 0;
  let isInViewport = false;
  let lastScrollTop = 0;

  function scrollText(scrollingDown) {
    if (isInViewport) {
      if (scrollingDown) {
        leftPosition -= 5; // Устанавливаем скорость перемещения при прокрутке вниз
      } else {
        leftPosition += 5; // Устанавливаем скорость перемещения при прокрутке вверх
      }
      scrollingText.style.transform = `translateX(${leftPosition}px)`;
    }
  }

  function checkVisibility() {
    let rect = scrollingText.getBoundingClientRect();
    isInViewport =
      rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

    return isInViewport;
  }

  window.addEventListener('scroll', function () {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollingDown = currentScrollTop > lastScrollTop;
    lastScrollTop = currentScrollTop;

    const isScroll = checkVisibility();
    if (isScroll) {
      scrollText(scrollingDown);
    }
  });

  checkVisibility();
}

const scrollingText = document.querySelector('.scrolling-text');
const scrollingTextAbout = document.querySelector('.scrolling-text-about');
decorAnimation(scrollingText);
decorAnimation(scrollingTextAbout);
