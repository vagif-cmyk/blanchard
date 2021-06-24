
document.querySelectorAll('.dropbtn').forEach((e, i) => {
  e.addEventListener('click', () => hideShowBlock(e, i));
});

// функция которая при клике на кнопку показывает или скрывает выподающий список.
function hideShowBlock(e, i) {
  switch (i + 1) {
    case 1:
      e.classList.toggle('is-open');
      document.getElementById('1').classList.toggle('display-b');
      break;
    case 2:
      e.classList.toggle('is-open');
      document.getElementById('2').classList.toggle('display-b');
      break;
    case 3:
      e.classList.toggle('is-open');
      document.getElementById('3').classList.toggle('display-b');
      break;
    case 4:
      e.classList.toggle('is-open');
      document.getElementById('4').classList.toggle('display-b');
      break;
    case 5:
      e.classList.toggle('is-open');
      document.getElementById('5').classList.toggle('display-b');
      break;
    default:
      alert('WTF ?');
  }
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

// swiper
const swiper = new Swiper('.hero__bg-img', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1800,
  // autoplay
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// селект
const element = document.querySelector('select');

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom'
});
