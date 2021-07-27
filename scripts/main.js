document.querySelector('.burger').addEventListener('click', () => openMenu());
document.querySelector('.header-nav__close').addEventListener('click', () => closeMenu());

document.querySelectorAll('.dropbtn').forEach((e, i) => {
  e.addEventListener('click', () => hideShowBlock(e, i));
});

document.querySelectorAll('[class^="countries__btn"]').forEach((e) => {
  showTab(e);
});
document.querySelectorAll('.accor__btn').forEach((e) => {
  showTabArtist(e);
});
document.querySelector('.events__btn').addEventListener('click', (e) => {
  e.currentTarget.classList.add('d-none');
document.querySelectorAll('.events__card').forEach( e => { e.classList.remove('d-none') }) ;
});

//  init select
const element = document.querySelector('select');

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom'
});

// init swiper hero
const swiperHero = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 2000,
  effect: 'fade',
  slideClass: 'hero__slide',
  wrapperClass: 'hero__wrapper',
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});

// init accordions
$(function () {
  $(".accor").accordion({
    active: false,
    collapsible: true,
    heightStyle: 'content',
  });
});

// init swiper gallery
const sliderGallery = new Swiper('.gallery__slider', {
  direction: 'horizontal',
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  wrapperClass: 'gallery__wrapper',
  slideClass: 'gallery__slide',
  autoHeight: false,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1025: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 50,
    },
    670: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
    },
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 0,
    },
  },
});

// init swiper events
// const swiper = new Swiper('.events__slider', {
//   direction: 'horizontal',
//   loop: true,
//   wrapperClass: 'events__wrapper',
//   slideClass: 'events__slide',

//   pagination: {
//     el: '.events-pagination',
//   },
// });

// функция которая откроет меню.
function openMenu() {
  document.body.style.overflow = 'hidden';
  document.querySelector('.header-nav').classList.add('is-open');
  document.querySelector('.comein').classList.add('is-open');
}

// функция которая закроет меню.
function closeMenu() {
  document.body.style.overflow = 'initial';
  document.querySelector('.header-nav').classList.remove('is-open');
  document.querySelector('.comein').classList.remove('is-open');
}

// функция которая показывает или скрывает выподающий список.
function hideShowBlock(e, i) {
  hideBlocks('.dropdown__content-box.display-b', i);

  switch (i + 1) {
    case 1:
      e.classList.toggle('is-open');
      document.querySelector(".dropdown__content-box[data-path='1']").classList.toggle('display-b');
      break;
    case 2:
      e.classList.toggle('is-open');
      document.querySelector(".dropdown__content-box[data-path='2']").classList.toggle('display-b');
      break;
    case 3:
      e.classList.toggle('is-open');
      document.querySelector(".dropdown__content-box[data-path='3']").classList.toggle('display-b');
      break;
    case 4:
      e.classList.toggle('is-open');
      document.querySelector(".dropdown__content-box[data-path='4']").classList.toggle('display-b');
      break;
    case 5:
      e.classList.toggle('is-open');
      document.querySelector(".dropdown__content-box[data-path='5']").classList.toggle('display-b');
      break;
    default:
      alert('WTF ?');
  }
}
// функция которая закроет все открытые dropdown-ы.
function hideBlocks(str, i) {
  document.querySelectorAll('.is-open').forEach((e) => {
    if (!(e.dataset.path === String(i + 1)))
      e.classList.remove('is-open');
  });
  document.querySelectorAll(str).forEach((e) => {
    if (!(e.dataset.path === String(i + 1)))
      e.classList.remove('display-b');
  });
}
// функция которая закроет все выподающие списки(если они открыты) в header при клике в любом месте документа кроме кнопок 'dropbtn' .
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown__content-box');
    const buttons = document.querySelectorAll('.dropbtn');

    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('display-b')) {
        dropdowns[i].classList.remove('display-b');
      }
      if (buttons[i].classList.contains('is-open')) {
        buttons[i].classList.remove('is-open');
      }
    }
  }
}

function showTab(e) {
  e.addEventListener('click', (el) => {
    const path = el.currentTarget.dataset.path;

    document.querySelectorAll('[class^="catalog__tab-"]').forEach((elem) => {
      elem.classList.remove('is-active');
    });

    document.querySelectorAll('.countries__item').forEach((e) => {
      e.classList.remove('is-clicked');
    });

    document.querySelector(`[class^="catalog__tab-"][data-path="${path}"]`).classList.add('is-active');
    document.querySelector(`[data-path="${path}"]`).closest('.countries__item').classList.add('is-clicked');
  });
}

function showTabArtist(e) {

  e.addEventListener('click', (el) => {

    const path = el.currentTarget.dataset.path;
    const dataAtr = document.querySelector(`[data-path="${path}"]`);

    document.querySelectorAll('.catalog__content').forEach(elem => {
      if (elem.contains(dataAtr)) {
        elem.querySelectorAll('.accor__btn').forEach((elem) => { elem.classList.remove('c-violet'); });
        el.target.classList.add('c-violet');

        elem.querySelectorAll('.catalog__artist').forEach((elem) => { elem.classList.remove('is-active'); });
        elem.querySelector(`[class^="catalog__artist"][data-path="${path}"]`).classList.add('is-active');
      }
    });
  });
}
