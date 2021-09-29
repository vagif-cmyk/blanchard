document.addEventListener('DOMContentLoaded', () => {

const btns = document.querySelectorAll('.accor__btn');

btns.forEach((element) => {

    element.addEventListener('click', (event) => {

      const path = event.currentTarget.dataset.path;
      console.log(path);

      const artist = document.querySelector(`[class^="catalog__artist"][data-path="${path}"]`);
      console.log(artist);

      window.scroll( {
        left: 0,
        top: artist.offsetTop,
        behavior: 'smooth',
      });
    });
  });
});