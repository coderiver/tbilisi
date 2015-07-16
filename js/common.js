head.ready(function() {

    // $(document).on("click", function(){
    // 	$(".js-popup").hide();
    // });

    $(".fancybox").fancybox();

    $('.js-slick').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    $('.js-carousel').slick({
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

    $(".js-scroll").mCustomScrollbar({
        scrollInertia: 300
    });

    if ($(".js-scroll-to").length) {
        $('.js-click').click(function(e) {

            e.preventDefault();

            $('html, body').animate({
                scrollTop: $(".js-scroll-to").offset().top - 65
            }, 1000);
        });
    }
    //accordion
    $(".js-accordion-title").on("click", function() {
        if ($(this).parents(".js-accordion").hasClass("is-active")) {
            $(this).parents(".js-accordion").stop(true, true).removeClass("is-active").find(".js-accordion-body").slideUp();
        } else {
            $(".js-accordion").removeClass("is-active");
            $(".js-accordion-body").slideUp();
            $(this).parents(".js-accordion").stop(true, true).toggleClass("is-active").find(".js-accordion-body").slideDown()
        }

        return false;
    });
    $(function() {
        if ($('.floor-map img').length) {
            $('.floor-map img').maphilight();
        };
    });
    $(document).ready(function() {
        if ($("[rel=example_group]").length) {
            $("[rel=example_group]").fancybox({
                'transitionIn': 'fade',
                'transitionOut': 'fade',
                'autoScale': false,
                'cyclic': true,
                'overlayOpacity': '0',
                padding: 20

            });
        }
    });
    $(".floor-map map area").each(function() {
        var tip = $('.tip');
        var text = $(this).attr('title');
        $(this).attr('title', '');
        if (text.length == 0) {
            var text = $(this).attr('alt');
        }
        $(this).hover(function() {
            tip.html(text);
            tip.show();
        }, function() {
            tip.hide();
        }).mousemove(function(e) {
            tip.html(text);
            var mousex = e.pageX - 53;
            var mousey = e.pageY - 70;
            //console.log(mousex);
            var tipWidth = tip.width();
            var tipHeight = tip.height();
            var tipVisX = $(window).width() - (mousex + tipWidth);
            var tipVisY = $(window).height() - (mousey + tipHeight);
            if (tipVisX < 20) {
                mousex = e.pageX - tipWidth - 15;
            }
            if (tipVisY < 20) {
                mousey = e.pageY - tipHeight - 40;
            }
            tip.css({
                top: mousey,
                left: mousex
            });
        });
    });

});
