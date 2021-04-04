$(function () {

    $('.menu-button').click(function () {
        $('.menu').toggleClass('active');
    });

        // Anchor Links

        $( "a.anchor-link" ).on('click', function (event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
            $('.menu').removeClass('active');
        });
    
})