head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });


	$("#layerslider").layerSlider({
		responsive: true,
		responsiveUnder: 1170,
		layersContainer: 1170,
		skin: 'construct',
		navStartStop: false,
		navButtons: false,
		showCircleTimer: false,
		skinsPath: 'layerslider/ls-skins/'
	});

	$(".fancybox").fancybox();

});