
$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $(this).remove();
    });
});

$(document).ready(function () {
    var a = 0;
    new WOW().init();
    $(window).scroll(function () {
        if (a == 0 && $(this).scrollTop() >= ($(".nums-cont").offset().top) - 500) {
            $('.num span.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            console.log($('.num .count'));
            a++
        }
    });
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
    });
    /////////news Slider/////////
    $('.news-slider').owlCarousel({
        items: 3,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: false,
        nav: false,
        dots: true,
        mouseDrag: false,
        touchDrag: false,

        responsive: {
            0: {
                items: 1,
                loop: true,
                mouseDrag: true,
                touchDrag: true,
            },
            500: {
                items: 2,
                mouseDrag: true,
                touchDrag: true,
            },
            1000: {
                items: 3,
            },
        }
    });
    if ($(window).width() <= 767) {
        ////////////////////
        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(300);
            $(".sec-head").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".sec-head").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.sec-head').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".sec-head").removeClass("nav-in");
            $("body").removeClass("overflow");
        });

        $(".projects").addClass("owl-carousel")
        $(".projects").addClass("projects-slider")
        $(".projects-slider").removeClass("projects")
        $('.projects-slider').owlCarousel({
            items: 1,
            margin: 30,
            rtl: document.dir == 'rtl' ? true : false,
            dots: true,
            nav: false,
        });
    }
});