
const menuBtn = document.querySelector('.header .menu .button');
const menu = document.querySelector('.header .menu');


menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});