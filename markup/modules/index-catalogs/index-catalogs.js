// Инициализация слайдера блока .index-catalogs__list

function updateItem() {
	var maxHeight = 0;
	$('.index-catalogs__item').each(function () {
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height();
		};
		$(this).height(maxHeight);
		console.log(maxHeight);
	});
};

$(document).ready(function () {

	// var maxHeight = 0;
	// $('.index-catalogs__item').each(function () {
	// 	if ($(this).height() > maxHeight)
	// 		maxHeight = $(this).height();
	// 	$('.index-catalogs__item').height(maxHeight);
	// });
	// $(window).resize(function () {
	// 	var maxHeight = 0;
	// 	$('.index-catalogs__item').each(function () {
	// 		if ($(this).height() > maxHeight)
	// 			maxHeight = $(this).height();
	// 		$(this).height(maxHeight);
	// 	});
	// $('.index-catalogs__list').each(function () {
	// 	var maxHeight = 0;
	// 	$(this).children('.index-catalogs__item').each(function () {
	// 		if ($(this).height() > maxHeight)
	// 			maxHeight = $(this).height();
	// 	});
	// 	// $('.viewport').height(maxHeight);
	// 	$('.product-cart').height(maxHeight);
	// });
	// });


	// var maxHeight = 0;
	// $('.product-cart').each(function () {
	// 	if ($(this).height() > maxHeight)
	// 		maxHeight = $(this).height();
	// 	$(this).height(maxHeight);
	// });

	updateItem();



	$('.product-cart').css('display', 'block');
	$('.viewport').removeClass();
	$('.overview').removeClass('overview');
	$('.scrollbar').remove();
	$('.index-catalogs__list').slick({
		// arrows: false,
		slidesToShow: 4,
		dots: false,
		infinite: true,
		slidesToScroll: 4,
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 1201,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true,
				arrows: false
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
				dots: true
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				// fade: true,
				arrows: false,
				dots: true
			}
		}]
	});


	// if ($(window).width() < 998) {
	// 	$('.product-cart').css('display', 'block');
	// 	$('.viewport').removeClass();
	// 	$('.overview').removeClass('overview');
	// 	$('.scrollbar').remove();
	// 	$('.index-catalogs__list').slick({
	// 		arrows: false,
	// 		slidesToShow: 4,
	// 		dots: true,
	// 		infinite: true,
	// 		responsive: [{
	// 			breakpoint: 1200,
	// 			settings: {
	// 				slidesToShow: 3
	// 			}
	// 		}, {
	// 			breakpoint: 992,
	// 			settings: {
	// 				slidesToShow: 2
	// 			}
	// 		}, {
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 1
	// 			}
	// 		}]
	// 	});
	//
	// }
	// if ($(window).width() > 998) {
	// 	scrollbar.tinyscrollbar(scrollOption);
	// 	// $(".index-catalogs__list").each(function () {
	// 	// 	var h_block = $('.index-catalogs__item').height();
	// 	// 	if (h_block > viewportHeight) {
	// 	// 		viewportHeight = h_block + 30;
	// 	// 	};
	// 	// });
	// 	// $(".viewport").height(viewportHeight);
	// 	$(".overview").width(countItem * (itemWidth + 5));
	//
	// 	$(function () {
	// 		$('.index-catalogs__list').each(function () {
	// 			var maxHeight = 0;
	// 			$(this).children('.index-catalogs__item').each(function () {
	// 				if ($(this).outerHeight() > maxHeight)
	// 					maxHeight = $(this).outerHeight();
	// 			});
	// 			$('.viewport').outerHeight(maxHeight);
	// 			$('.product-cart').outerHeight(maxHeight);
	// 		});
	// 	});
	//
	// }

});

$(window).resize(function () {
	updateItem();
});
