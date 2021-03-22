$(document).ready(function () {

    $('.header .menu-opn-button, .header .menu-cls-button').click(function () {
        $('.header .menu-opn-button').toggleClass('active');
        $('.header .menu').toggleClass('active');
    });

});