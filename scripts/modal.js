
const btns = document.querySelectorAll('.gallery__slide');
const modalsOverlay = document.querySelector('.modals__overlay');
const modal = document.querySelectorAll('.modal');
const btnsClose = document.querySelectorAll('.modal__close');

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        const path = e.currentTarget.getAttribute('data-path');

        modal.forEach((e) => {
            e.classList.remove('modal__visible');
        });

        modalsOverlay.classList.add('modals-overlay-visible');
        document.querySelector(`[data-target="${path}"]`).classList.add('modal__visible');
    });
});

btnsClose.forEach((e) => {
    e.addEventListener('click', () => {
        modalsOverlay.classList.remove('modals-overlay-visible');
    });
});
