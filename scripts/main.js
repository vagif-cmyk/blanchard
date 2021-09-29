const windowWidth = Math.max(
  document.body.scrollWidth,
  document.documentElement.scrollWidth,
  document.body.offsetWidth,
  document.documentElement.offsetWidth,
  document.body.clientWidth,
  document.documentElement.clientWidth
);
document.querySelector('.burger').addEventListener('click', () => openMenu());
document.querySelector('.header-nav__close').addEventListener('click', () => closeMenu());

document.querySelectorAll('.dropbtn').forEach((e, i) => {
  e.addEventListener('click', () => hideShowBlock(e, i));
});

document.querySelector('.header__search-mob').addEventListener('click', () => {
  document.querySelector('.bgd-png').classList.toggle('show-mob-form');
  document.querySelector('.header__search').focus();
});

document.querySelector('.header__mob-form-cross').addEventListener('pointerdown', () => {
  document.querySelector('.bgd-png').classList.toggle('show-mob-form');
});


document.querySelectorAll('[class^="countries__btn"]').forEach((e) => {
  showTab(e);
});
document.querySelectorAll('.accor__btn').forEach((e) => {
  e.addEventListener('click', () => {
          const artist = document.querySelector('.artist');
          window.scroll( {
            left: 0,
            top: artist.offsetTop,
            behavior: 'smooth',
          });
        });
  showTabArtist(e);
});
document.querySelector('.events__btn').addEventListener('click', (e) => {
  e.currentTarget.classList.add('d-none');
  document.querySelectorAll('.events__card').forEach(e => { e.classList.remove('d-none') });
});
document.querySelector('.editions__block-left-btn').addEventListener('click', (elem) => {
  elem.currentTarget.classList.toggle('editions__block-left-btn-checked');
  document.querySelectorAll('.editions__item').forEach(e => {
    e.classList.toggle('editions__item-active');
    if (e.children[0].checked) {
      e.classList.add('editions__item-active');
    }
  });
});
document.querySelectorAll('.editions__item').forEach(elem => {
  elem.children[3].addEventListener('click', () => {
    elem.children[0].checked = false;
    elem.classList.remove('editions__item-active');
  });
});



(function () {

  const breakpointSliderEditions = window.matchMedia('(min-width:670px)');
  let editionsSlider;

  const breakpointChecker = function () {

    if (breakpointSliderEditions.matches === true) {

      return enableSwiperEditions();

    } else if (breakpointSliderEditions.matches === false) {

      if (editionsSlider !== undefined) editionsSlider.destroy(true, true);

      return;
    }
  };

  const enableSwiperEditions = function () {

    editionsSlider = new Swiper('.editions__slider', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 2,
      spaceBetween: 50,
      wrapperClass: 'editions__wrapper',
      slideClass: 'editions__slide',

      pagination: {
        el: '.editions__swiper-pagination',
        type: 'fraction',
        clickable: true,
      },

      navigation: {
        nextEl: '.editions__swiper-button-next',
        prevEl: '.editions__swiper-button-prev',
      },
      breakpoints: {
        1300: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1000: {
          spaceBetween: 50,
        },
        568: {
          spaceBetween: 34,
        },
      },
    });
  };

  breakpointSliderEditions.addListener(breakpointChecker);

  breakpointChecker();
})();

(function () {

  const breakpointSliderEvents = window.matchMedia('(min-width:670px)');
  let eventsSwiper;

  const breakpointChecker = function () {

    if (breakpointSliderEvents.matches === true) {

      if (eventsSwiper !== undefined) eventsSwiper.destroy(true, true);

      return;

    } else if (breakpointSliderEvents.matches === false) {

      return enableSwiperEvents();
    }
  };

  const enableSwiperEvents = function () {

    eventsSwiper = new Swiper('.events__slider', {
      direction: 'horizontal',
      loop: true,
      wrapperClass: 'events__wrapper',
      slideClass: 'events__slide',

      pagination: {
        el: '.events__pagination',
      },
    });
  };

  breakpointSliderEvents.addListener(breakpointChecker);

  breakpointChecker();
})();

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
      spaceBetween: 34,
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

// init swiper section projects
const swiperProjects = new Swiper('.projects__container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  wrapperClass: 'projects__wrapper',
  slideClass: 'projects__slide',

  navigation: {
    nextEl: '.projects__button-next',
    prevEl: '.projects__button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    670: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});

// init tippy in section projects
tippy('.projects__tyl-1', {
  content: "Пример современных тенденций - современная методология разработки",
  theme: 'violet',
});
tippy('.projects__tyl-2', {
  content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
  theme: 'violet',
});
tippy('.projects__tyl-3', {
  content: "В стремлении повысить качество",
  theme: 'violet',
});

// функция которая откроет поиск в header-е.
// function toogleClass(elem, styles) {
  // document.querySelector(elem).classList.toggle(styles);
// }
// функция которая откроет меню в header-е.
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

ymaps.ready(init);

function init() {

  var myMap = new ymaps.Map("map", {

    center: [55.733835, 37.588227],
    zoom: 10,
    controls: ['geolocationControl', 'zoomControl']
  },
    {
      geolocationControlPosition: { top: "290px", right: "20px" },
      zoomControlSize: "small",
      zoomControlPosition: { top: "230px", right: "20px" },
    });

  var myPlacemark = new ymaps.Placemark([55.733835, 37.588227], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/contacts/map-mark.svg',
    iconImageSize: [20, 20]
  });

  myMap.geoObjects.add(myPlacemark);
}

// валидатор формы
new JustValidate('.contacts__form', {

  colorWrong: 'red',
  messages: {
    name: {
      minLength: 'Имя должно содержать минимум 2 символа',
      maxLength: 'Имя не должно содержать больше 10 символов',
      required: 'Недопустимый формат',
      function: 'Имя не должно содержать цифры',
    },
    phone: {
      required: 'Недопустимый формат',
      function: 'Введите 10 цифр'
    },
  },
  rules: {

    name: {
      required: true,
      minLength: 2,
      maxLength: 10,

      function: (name, value) => {
        return value.search(/\d/) === -1;
      },
    },
    phone: {
      required: true,

      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();

        return Number(phone) && phone.length === 10;
      }
    },
  }
});

// маскирование
var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999)-999-99-99");
im.mask(selector);