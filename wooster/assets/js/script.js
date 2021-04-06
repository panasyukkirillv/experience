$(document).ready(function() {

    function changeHeader () {
        if ( $(window).scrollTop() > 10 ) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    }

    changeHeader();
    $(window).on('scroll', function () {
        changeHeader();
    });

    $('.header .menu .menu-button').on('click', function (event) {
        event.preventDefault();
        $('.header .menu .menu-button').toggleClass('active');
        $('.header .menu .menu-overlay').toggleClass('active');
        $('.body').toggleClass('lock');
    });

    $( "a.anchor-link" ).on('click', function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - $('.header').outerHeight() }, 500);
        $('.header .menu .menu-button').removeClass('active');
        $('.header .menu .menu-overlay').removeClass('active');
        $('.body').removeClass('lock');
    });

	$('.video-preview-popup').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true,
	});

    $('.portfolio .slider').slick({
        mobileFirst: true,
        prevArrow: "<button class='button slick-prev'><svg class='icon'><use xlink:href='assets/images/svg-sprite.svg#left-arrow'></use></svg></button>",
        nextArrow: "<button class='button slick-next'><svg class='icon'><use xlink:href='assets/images/svg-sprite.svg#right-arrow'></use></svg></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },

            },
            {
                breakpoint: 992,
                settings: {
                    rows: 2,
                    infinite: false,
                    slidesPerRow: 3,
                },

            },
        ],
    });

    $('.tabs .tab-buttons .button').on('click', function (event) {
        event.preventDefault();
        $('.tabs .tab-buttons .button').removeClass('active');
        $('.tabs .tab-content-items .tab-content-item').removeClass('active');
        $(this).addClass('active');
        $('.tabs .tab-content-items .tab-content-item[data-tab="' + $(this).attr('data-tab') + '"]').addClass('active');
        $('.portfolio .slider').slick("setPosition");
    });

    $('.tabs .tab-buttons li:first-child .button').click();

    $('.portfolio-gallery').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
    		fixedContentPos: true,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1],
                arrowMarkup: '<button title="%title%" type="button" class="button mfp-arrow mfp-arrow-%dir%"><svg class="icon"><use xlink:href="assets/images/svg-sprite.svg#%dir%-arrow"></use></svg></button>',
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>Read More: <a href="' + item.el.attr('link') + '">' + item.el.attr('link') + '</a></small>';
                }
            }
        });
    });

});