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

	if($(".js-scroll-to").length){
		$('.js-click').click(function(e){

			e.preventDefault();

			$('html, body').animate({
			    scrollTop: $(".js-scroll-to").offset().top- 65
			}, 1000);
		});
	}

});