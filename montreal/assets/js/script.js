// script.js

$(document).ready(function () {

    // Open & Close Menu

    $('.header .menu-button').on('click', function (event) {
        event.preventDefault();
        $('.header .menu-button, .header .menu-overlay, .header .menu-overlay-box').toggleClass('active');
        $('.body').toggleClass('lock');
    });

    // Anchor Links

    $( "a.anchor-link" ).on('click', function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - $('.header').outerHeight() }, 500);
        $('.header .menu-button, .header .menu-overlay, .header .menu-overlay-box').removeClass('active');
        $('.body').removeClass('lock');
    });

    // Portfolio Slider

    $('.portfolio .slider').slick({
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="assets/images/svg-sprite.svg#l-arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="assets/images/svg-sprite.svg#r-arrow"></use></svg></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1199,
                settings: 'unslick',
            },
        ],
        infinite: false,
    });

    // Tabs

    $('.tab-button').on('click', function (event) {
        event.preventDefault();
        $('.tab-button').removeClass('active');
        $('.tab-content').removeClass('active');
        $(this).addClass('active');
        $('.tab-content[data-tab-index="' + $(this).attr('data-tab-index') + '"]').addClass('active');
        $('.portfolio .slider').slick("setPosition");
    });
    $('.tab-buttons li:first-child .tab-button').click();

    // Clients Sidebar

    $('.clients .slider').slick({
        mobileFirst: true,
        arrows: false,
        dots: true,
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
                    slidesToShow: 4,
                },
            },
        ],
    });

    // To Top Button

    $('.to-top-button').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate( {scrollTop: 0} , 500);
    })

});