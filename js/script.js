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
    // Функция, которая сработает, когда хедер выйдет за пределы intro-slider
    function handleHeaderExit(entry) {
      if (entry[0].intersectionRatio === 0) {
        console.log('Header вышел за пределы intro-slider');

        header.classList.add('black');
      } else {
        console.log('Header внутри intro-slider');
        header.classList.remove('black');
      }
    }

    // Наблюдатель за пересечением
    const observer = new IntersectionObserver(handleHeaderExit, {
      root: null, // Это окно просмотра (viewport)
      threshold: 0, // Срабатывает, когда элемент полностью выйдет за пределы
      rootMargin: `-${header.offsetHeight}px 0px 0px 0px`, // Отступ сверху, равный высоте хедера
    });

    // Наблюдаем за intro-slider
    observer.observe(introSlider);
  }
});
// главная хедер end

// бургер и меню
const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('is-open');
    menuBody.classList.toggle('active');
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

// function checkFooterPosition() {
//   const footer = document.querySelector('footer');
//   const footerPosition = footer.getBoundingClientRect();
//   const windowHeight = window.innerHeight;

//   if (windowHeight - footerPosition.top <= 55) {
//     // Выполнить вашу функцию здесь
//   } else {
//     toTop.classList.remove('active');
//   }
// }

// // Обработчик события прокрутки страницы
// window.addEventListener('scroll', checkFooterPosition);

// // Вызвать функцию при загрузке страницы для начальной проверки
// window.addEventListener('load', checkFooterPosition);
// // to top end
