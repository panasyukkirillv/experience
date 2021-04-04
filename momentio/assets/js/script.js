$(function () {

    $('.menu-button').on('click', function (event) {
        event.preventDefault();
        $('.menu-button, .menu-nav').toggleClass('active');
    });

    $( "a.anchor-link" ).on('click', function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - $('.header').outerHeight() }, 500);
        $('.menu-button, .menu-nav').removeClass('active');
    });

    $('.portfolio .slider .track').slick({
        mobileFirst: true,
        appendArrows: $('.slick-arrows'),
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                    rows: 2,
                    slidesPerRow: 4,
                },
            },
        ],
    });

    $('.team .main-slider .track').slick({
        mobileFirst: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 0,
                settings: 'unslick',
            },
            {
                breakpoint: 576,
                settings: 'slick',
            },
        ],
    });


    $('.main-slider-nav .col').on('click', function (event) {
        event.preventDefault();
        $('.team .main-slider .track').slick('goTo', $(this).attr('data-slick-index'));
    });

});