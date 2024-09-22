document.querySelector('.popup__button').addEventListener('click', function() {
    const open = document.querySelector('.popup__menu__wrapper');
    const body = document.body;
    if (!open.classList.contains('active')) {
        open.classList.add('active');
        body.classList.toggle("noscroll");
    } else {
        open.classList.remove('active');
        body.classList.toggle("noscroll");
    }
});
document.querySelector('.popup__close').addEventListener('click', function() {
    const close = document.querySelector('.popup__menu__wrapper');
    const body = document.body;
    if (!close.classList.contains('active')) {
        close.classList.add('active');
        body.classList.toggle("noscroll");
    } else {
        close.classList.remove('active');
        body.classList.toggle("noscroll");
    }
});