jQuery(document).ready(function ($) {
	"use strict";

	$(window).load(function () {
		var $el, leftPos, newWidth,
			$mainNav = $(".top_nav .top_nav_wrapper > ul, .top_nav .main_menu_nav > ul"),
			$otherNav = $("body.header_style_transparent .top_nav .top_nav_wrapper > ul, body.header_style_transparent .top_nav .main_menu_nav > ul, body.header_style_dark .top_nav .top_nav_wrapper > ul, body.header_style_dark .top_nav .main_menu_nav > ul, body.header_style_white .top_nav .top_nav_wrapper > ul, body.header_style_white .top_nav .main_menu_nav > ul");

		if( $mainNav.length > 0 && $otherNav.length == 0 ){
			$mainNav.append("<li id='magic-line'></li>");
			var $magicLine = $("#magic-line");
			var $magicLineWidth = 0;
			var $magicLineLeft = 0;
			if( $mainNav.find(".current_page_item").length || $mainNav.find(".current-menu-parent").length ){
				$magicLineWidth = $(".current_page_item, .current-menu-parent").width();
				$magicLineLeft = $(".current_page_item, .current-menu-parent").position().left;
			}
			$magicLine.width($magicLineWidth)
				.css("left", $magicLineLeft)
				.data("origLeft", $magicLine.position().left)
				.data("origWidth", $magicLine.width());

			$mainNav.find(' > li').hover(function () {
				$el = $(this);
				leftPos = $el.position().left;
				newWidth = $el.width();
				$magicLine.stop().animate({
					left: leftPos,
					width: newWidth
				}, 200);
			}, function () {
				$magicLine.stop().animate({
					left: $magicLine.data("origLeft"),
					width: $magicLine.data("origWidth")
				}, 200);
			});
		}
	});

	$.fn.is_on_screen = function(){
		var win = $(window);
		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	};

	$("body .wpb_video_widget .wpb_wrapper .wpb_video_wrapper .play_video").on('click', function () {
		$(this).parent().find('iframe').attr( 'src', $(this).parent().find('iframe').attr( 'src' ) + '?autoplay=1').delay();
		$(this).hide();
		$(this).parent().find('img').hide();
		$(this).parent().find('.video').show();
		return false;
	});

	$(".staff_read_more").on('click', function () {
		$(this).closest('.stm_staff_2').find('.full_description').slideToggle(150);
		return false;
	});

	// $('select').select2({ width: '100%' });

	$('#menu_toggle').on('click', function () {
		$(this).toggleClass('open');
		$('.mobile_header .top_nav_mobile').slideToggle(300);
		return false;
	});

	$(".mobile_header .top_nav_mobile .main_menu_nav > li.menu-item-has-children > a").after('<span class="arrow"><i class="fa fa-chevron-down"></i></span>');

	$(".mobile_header .top_nav_mobile .main_menu_nav > li.menu-item-has-children .arrow").on('click', function () {
		$(this).toggleClass('active');
		$(this).closest('li').find('> ul').slideToggle(300);
	});

	$(".mobile_header .top_nav_mobile .main_menu_nav > li.menu-item-has-children > a").on('click', function () {
		if( $(this).attr('href') == '#' ){
			$(this).closest('li').find('ul').slideToggle(300);
			$(this).closest('li').find('.arrow').toggleClass('active');
		}
	});

	// Quantity actions
	$('.quantity_actions span').on('click', function() {
		var quantityContainer = $(this).closest('.quantity'),
			quantityInput = quantityContainer.find('.qty'),
			quantityVal = quantityInput.attr('value');

		if( $(this).hasClass('plus') ) {
			quantityInput.attr('value', parseInt(quantityVal) + 1);
		} else if( $(this).hasClass('minus') ) {
			if( quantityVal > 1 ) {
				quantityInput.attr('value', parseInt(quantityVal) - 1);
			}
		}
	});

	// $('#header div.top_nav').affix({
	// 	offset: {
	// 		top: $("#header div.header_top").innerHeight()
	// 	}
	// });

	$(window).on('load', function () {
		$('#wrapper').css({'padding-bottom' : $('#footer').height()});
	});

});