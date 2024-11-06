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
    touchEventsTarget: 'container',
    mousewheel: {
      forceToAxis: true,
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

// слайдер на карточки проектов
const projectSliderContainer = document.querySelector('.project__block');
if (projectSliderContainer) {
  const projectSlider = new Swiper('.project__block', {
    spaceBetween: 20,
    slidesPerView: 1,
    allowTouchMove: false,
    mousewheel: false,
    navigation: {
      prevEl: '.pagination-project-prev',
      nextEl: '.pagination-project-next',
    },
    breakpoints: {
      320: { slidesPerView: 'auto' },
      767: { slidesPerView: 1 },
    },
  });
}
// слайдер для ленты проектов
const productFeedSliderContainer = document.querySelector('.product-feed__body');
if (productFeedSliderContainer) {
  const productFeedSSlider = new Swiper('.product-feed__body', {
    slidesPerView: 5,
    spaceBetween: 29,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 29,
      },
      1250: {
        slidesPerView: 5,
      },
    },
  });
}

// двойной слайдер на персональной странице

const mainSwiperContainer = document.querySelector('.main-swiper');

if (mainSwiperContainer) {
  const mainSwiper = new Swiper('.main-swiper', {
    spaceBetween: 10,
    slidesPerView: 1,
    slideToClickedSlide: true,
    navigation: {
      prevEl: '.main-swiper-prev',
      nextEl: '.main-swiper-next',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Initialize the thumbnail Swiper
  const thumbnailSwiper = new Swiper('.thumbnail-swiper', {
    direction: 'vertical',
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });

  mainSwiper.on('slideChange', function () {
    const activeIndex = mainSwiper.realIndex;
    thumbnailSwiper.slides.removeClass('swiper-slide-thumb-active');
    thumbnailSwiper.slides.eq(activeIndex).addClass('swiper-slide-thumb-active');
  });

  // // Добавление обработки клика для миниатюр
  thumbnailSwiper.on('click', function (swiper) {
    const clickedIndex = swiper.clickedIndex;
    if (clickedIndex !== undefined) {
      mainSwiper.slideToLoop(clickedIndex);
    }
  });
}
