const menuBtn = document.querySelector('.header .menu .button');
const menuNav = document.querySelector('.header .menu .nav');

menuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    menuBtn.classList.toggle('active');
    menuNav.classList.toggle('active');
});

