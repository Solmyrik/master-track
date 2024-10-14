const links = document.querySelectorAll('.our__link');

function handleMouseOver(event) {
  const linkElement = event.target.closest('.our__link');

  // Проверяем, найден ли нужный элемент
  if (linkElement) {
    const smailImg = document.querySelector('.our__small-img img');
    const bigImg = document.querySelector('.our__big-img img');

    const dataOurValue = linkElement.dataset.our;
    smailImg.src = `img/our/${dataOurValue}/1.jpg`;
    bigImg.src = `img/our/${dataOurValue}/2.jpg`;
    changeActive(dataOurValue);
  }

  function changeActive(index) {
    links.forEach((link, id) => {
      link.classList.remove('active');
      if (id + 1 == index) {
        link.classList.add('active');
      }
    });
  }
}

if (links && links.length) {
  links.forEach((link) => {
    link.addEventListener('mouseover', handleMouseOver);
  });
}

// инпут файл
const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');

if (fileInput) {
  fileInput.addEventListener('change', function () {
    if (this.files && this.files.length > 0) {
      fileName.textContent = 'Файл загружен';
    } else {
      fileName.textContent = 'Прикрепить файл';
    }
  });
}

// инпут файл end

// главная хедер
document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');
  const introSlider = document.getElementById('intro-slider');

  if (introSlider) {
    window.addEventListener('scroll', (e) => {
      const heightSreen = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY > heightSreen - 70) {
        header.classList.add('black');
      } else {
        header.classList.remove('black');
      }
    });
  }
});
// главная хедер end

// бургер и меню
const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu');
const menuShit = document.querySelector('.menu-shit');
if (iconMenu) {
  const header = document.querySelector('.header');
  iconMenu.addEventListener('click', function (e) {
    if (menuBody.classList.contains('active')) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('is-open');
      menuBody.classList.toggle('active');
      setTimeout(() => {
        menuShit.classList.toggle('active');
      }, 200);
      setTimeout(() => {
        header.classList.toggle('menu-active');
      }, 200);
    } else {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('is-open');
      setTimeout(() => {
        menuBody.classList.toggle('active');
      }, 100);
      menuShit.classList.toggle('active');
      setTimeout(() => {
        header.classList.toggle('menu-active');
      }, 200);
    }
  });
}
// бургер и меню end

// header__search
const headerSearch = document.querySelector('.header__search');
const headerSearchInput = document.querySelector('.header__search-input');
const headerSearchList = document.querySelector('.header__list');

if (headerSearch) {
  headerSearch.addEventListener('click', (e) => {
    headerSearchInput.classList.toggle('active');
    headerSearch.classList.toggle('active');
    headerSearchList.classList.toggle('active');
  });
}

const searchInput = document.querySelector('.header-search-input');
const searchClose = document.querySelector('.header__search-close');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    if (e.target.value && e.target.value.length > 0) {
      searchClose.classList.add('active');
    } else {
      searchClose.classList.remove('active');
    }
  });

  searchClose.addEventListener('click', (e) => {
    searchInput.value = '';
  });
}
// header__search end

// to top

let toTop = document.querySelector('.to-top');
let toTopFooter = document.querySelector('.to-top-footer');

let lastPosition = window.pageYOffset;
let maxPosition = 0;

if (toTop) {
  window.addEventListener('scroll', function () {
    let currentPosition = window.pageYOffset;
    const footer = document.querySelector('footer');
    const footerPosition = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (windowHeight - footerPosition.top <= 65) {
      if (currentPosition > 1500) {
        toTop.classList.add('active');
      } else {
        toTop.classList.remove('active');
      }
      toTopFooter.classList.remove('active');
    } else {
      toTop.classList.remove('active');
      toTopFooter.classList.add('active');
    }
  });

  toTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  toTopFooter.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// to top end

//anime
const animItems = document.querySelectorAll('._anim');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
}

//anime end

// аккордеоны
const faqItem = document.querySelectorAll('.faq__label');

if (faqItem && faqItem.length) {
  faqItem.forEach((e) => {
    e.addEventListener('click', feqHandler);
  });
  function feqHandler(e) {
    e.preventDefault();
    currentContent = e.currentTarget.nextElementSibling;
    e.currentTarget.classList.toggle('active');
    if (e.currentTarget.classList.contains('active')) {
      currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
      currentContent.classList.add('active');
    } else {
      currentContent.style.maxHeight = 0;
      currentContent.classList.remove('active');
    }
  }
}

// аккордеоны end
