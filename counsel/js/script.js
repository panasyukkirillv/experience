$(function () {

    var menuBtn = $('.header .menu .btn');
    var menuContent = $('.header .menu .content');

    menuBtn.click(function (e) {
        e.preventDefault();
        menuBtn.toggleClass('active');
        menuContent.toggleClass('active');
        $('body').toggleClass('lock');
    });

    var anchorLinks = $('a[class*="anchor"]');

    anchorLinks.click(function(e) {
        e.preventDefault();
        menuBtn.removeClass('active');
        menuContent.removeClass('active');
        $('body').removeClass('lock');
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 58 }, 500, 'linear');
    });
    
    $('.to-top-btn').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500,'linear');
    });

    // Show & Hide

    function changeClassIfScrolled (htmlElement, cssClass, scrolled) {
        $(htmlElement).toggleClass(cssClass, $(window).scrollTop() > scrolled);
    };

    changeClassIfScrolled('.header', 'scrolled', 50);

    $(window).scroll(function () {
        changeClassIfScrolled('.header', 'scrolled', 50);
    });

    changeClassIfScrolled('.to-top-btn', 'active', 500);

    $(window).scroll(function () {
        changeClassIfScrolled('.to-top-btn', 'active', 500);
    });

    // Hero

    $('.hero .slick-slider').slick({
        mobileFirst: true,
        fade: true,
        autoplay: true,
        appendArrows: '.hero .slick-arrows',
        prevArrow: '<li><span class="slick-prev">Previous</span></li>',
        nextArrow: '<li><span class="slick-next">Next</span></li>',
        waitForAnimate: false,
    });

    // Video Popup

    $('.video').magnificPopup({
        disableOn: 768,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,
    });

});