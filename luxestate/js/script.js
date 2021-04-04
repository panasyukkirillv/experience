$(document).ready(function () {

    $('.header .menu-opn-button, .header .menu-cls-button').click(function () {
        $('.header .menu-opn-button').toggleClass('active');
        $('.header .menu').toggleClass('active');
    });

    $( "a.anchor-link" ).on('click', function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

});