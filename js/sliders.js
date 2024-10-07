// слайдер на главной
const levelSliderContainer = document.querySelector('.level__body');
if (levelSliderContainer) {
  const levelSlider = new Swiper('.level__body', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    breakpoints: {
      320: { spaceBetween: 16 },
      767: { spaceBetween: 20 },
      992: {
        spaceBetween: 30,
      },
    },
  });
}

// главный слайдер
const introSliderContainer = document.querySelector('.intro-slider__block');
if (introSliderContainer) {
  const introSlider = new Swiper('.intro-slider__block', {
    effect: 'fade',
    allowTouchMove: false,
    // loop: 'infinite',
    pagination: {
      el: '.intro-slider-padingation',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
  });
}
