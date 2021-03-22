const menu = document.querySelector('.header .menu');
const menuBtn = document.querySelector('.header .button');


menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');    
});