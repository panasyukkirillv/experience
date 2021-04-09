// script.js

$(function () {

    // Open & Close Menu
    $('.header .menu-button').on('click', function (event) {
        $('.header .menu-button, .header .menu-nav').toggleClass('active');
        $('.body').toggleClass('lock');
    });

    // Anchor Links
    $( "a.anchor-link" ).on('click', function (event) {
        event.preventDefault();
        $('.header .menu-button, .header .menu-nav').removeClass('active');
        $('.body').removeClass('lock');
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - $('.header').outerHeight() }, 1000);
    });

    // Hero Slider
    $('.hero').slick({
        mobileFirst: true,
        arrows: false,
        dots: true,
    });

    // Portfolio Slider Parameters
    var portfolioSliderParameters = {
        mobileFirst: true,
        infinite: false,
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
                settings: 'unslick',
            },
        ],
    }

    // Portfolio Tab Content Item
    $('.portfolio .tab-nav-button').on('click', function (event) {
        event.preventDefault();
        $('.portfolio .tab-nav-button, .portfolio .tab-content-item').removeClass('active');
        $(this).addClass('active');
        $('.portfolio .tab-content-item[data-tab-index="' + $(this).attr('data-tab-index') + '"]').addClass('active');
        if(!$('.portfolio .tab-content-item.active').hasClass('slick-slider')) {
            $('.portfolio .tab-content-item.active').slick(portfolioSliderParameters);
            $('.portfolio .tab-content-item.active').slick('setPosition');
        }
    });

    $('.portfolio .tab-nav li:first-child .tab-nav-button').click();

    // About Us
    $('.about-us .slider').slick({
        mobileFirst: true,
        infinite: false,
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
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    variableWidth: true,
                },
            },
        ],
    });

});