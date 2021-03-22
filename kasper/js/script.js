$(document).ready(function () {

    // Header Menu Button

    $('.header .menu-button').click(function () {
        $('.header .menu-button').toggleClass('active');
        $('.header .menu-box').toggleClass('active');
    });

    // Hero Slider

    $('.hero').slick({
        arrows: false,
        dots: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: true,
                },
            },
        ],
    });

    // Testimonials Slider

    $('.testimonials .slider').slick({
        arrows: false,
        dots: true,
    });

});