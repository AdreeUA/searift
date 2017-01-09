'use strict';

// Событие для клика по копке КОРЗИНА
jQuery(function ($) {
	var basketButton = $('.basket');
	var basketList = $('.product-basket');
	var basketItem = $('.product-basket__item');

	basketButton.click(function () {
		basketList.toggleClass('product-basket_open');
		basketButton.toggleClass('basket_open');
	});

	$(document).mouseup(function (e) {

		if (!basketButton.is(e.target) && !basketList.is(e.target) && basketList.has(e.target).length === 0 && basketButton.has(e.target).length === 0) {
			basketList.removeClass('product-basket_open');
			basketButton.removeClass('basket_open');
		}
	});
});
'use strict';

// Открытие и закрытие КАТАЛОГА ТОВАРОВ
(function () {

	jQuery(function ($) {

		var list = $('.catalog__list');
		var button = $('.catalog__burger');

		button.click(function () {
			list.toggleClass('catalog__list_open');
			button.toggleClass('burger_open');
		});

		$(document).mouseup(function (e) {
			if (!list.is(e.target) && list.has(e.target).length === 0 && button.has(e.target).length === 0 && !button.is(e.target)) {
				list.removeClass('catalog__list_open');
				button.removeClass('burger_open');
			}
		});
	});
})();
"use strict";

// Инициализация Google Maps

var map;

function initMap() {
	var myLatlng = new google.maps.LatLng(55.7266365, 37.5838476);
	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatlng,
		zoom: 15,
		scrollwheel: false,
		styles: [{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#444444"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [{
				"color": "#f2f2f2"
			}]
		}, {
			"featureType": "poi",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "all",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 45
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "transit",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"color": "#273f5a"
			}, {
				"visibility": "on"
			}]
		}]
	});

	var image = {
		url: 'static/img/content/map-mark.png',
		// This marker is 20 pixels wide by 32 pixels high.
		size: new google.maps.Size(33, 43),
		// The origin for this image is (0, 0).
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at (0, 32).
		anchor: new google.maps.Point(0, 32)
	};

	var marker = new google.maps.Marker({
		position: myLatlng,
		title: "Мокской Риф",
		icon: image
	});

	marker.setMap(map);

	// var content = document.createElement('div');
	// content.innerHTML = "Мокской Риф";
	// var infowindow = new google.maps.InfoWindow({
	// 	content: content,
	// 	maxWidth: 800
	// });
	//
	// google.maps.event.addListener(marker, 'click', function () {
	// 	infowindow.open(map, marker);
	// });
}
'use strict';

// Кнопка для плавного прокручивания ВВЕРХ
(function ($) {
	$(function () {

		$('#btn-up').click(function () {
			$('html, body').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	});
})(jQuery);
'use strict';

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
'use strict';

// Первый слайдер на главной станице
$('.index-slider__controlls').detach();
$('.shares__list').slick({
	// dots: true,
	responsive: [{
		breakpoint: 996,
		settings: {
			dots: true,
			arrows: false
		}
	}]
});
'use strict';

// Открытие и закрытие НАВИГАЦИИ САЙТА

(function () {

	jQuery(function ($) {

		var burger = $('.nav-top__burger');
		var nav = $('.nav-main');

		burger.click(function () {
			nav.toggleClass('nav-main_open');
			burger.toggleClass('burger_open');
		});

		$(document).mouseup(function (e) {
			if (!nav.is(e.target) && nav.has(e.target).length === 0 && burger.has(e.target).length === 0 && !burger.is(e.target)) {
				nav.removeClass('nav-main_open');
				burger.removeClass('burger_open');
			}
		});
	});
})();
'use strict';

// Открытие и закрытие КНОПКИ ПОИСКА

(function () {

	jQuery(function ($) {

		$(document).mouseup(function (e) {

			var search = $('.nav-top__search');
			var searchWrap = $('.search-wrap');

			search.click(function () {
				searchWrap.toggleClass('search-wrap_open');
			});

			if (!searchWrap.is(e.target) && searchWrap.has(e.target).length === 0 && search.has(e.target).length === 0) {
				searchWrap.removeClass('search-wrap_open');
				search.removeClass('search-wrap_open');
			}
		});
	});
})();
'use strict';

// ПОПАП

$(document).ready(function () {

	$('.pop-up').hide();

	var optionFancybox = {
		wrapCSS: 'pop-up',
		padding: ['33px', '33px', '0', '33px'],
		scrollOutside: false,
		keys: {
			close: [27]
		},
		fitToView: false,
		autoSize: false,
		width: '100%',
		maxWidth: 360,
		autoHeight: true
	};

	$('.header__phone-coll').fancybox(optionFancybox);
	$('.product__btn-question_popup').fancybox(optionFancybox);

	var optionValidationForm = {
		rules: {

			name: {
				required: true
			},

			question: {
				required: true
			},

			telRequired: {
				required: true
			},

			mail: {
				required: true
			}
		},

		messages: {
			name: {
				required: false
			},
			question: {
				required: false
			},

			telRequired: {
				required: false
			},

			mail: {
				required: false
			}
		}
	};

	var headerPopup = $("#headerPopup").validate(optionValidationForm);
	var productPopup = $("#productPopup").validate(optionValidationForm);
});
'use strict';

// Слайдер на странице ПРОДУКТА

$('.preview__full').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	adaptiveHeight: true,
	// appendDots: $(".preview__min"),
	customPaging: function customPaging(slider, i) {
		// генерируються изображения preview на основе full image

		var src = []; // переменная, которая будет хранить src картинки

		$(".preview__image-big").each(function (indx, element) {
			src.push($(element).attr('src'));
		});

		return $('<img src="' + src[i] + ' " class="preview__image-min" alt="" role="presentation">');
	},
	dots: true,
	responsive: [{
		breakpoint: 992,
		settings: {
			slidesToShow: 1,
			fade: false,
			dots: true,
			arrows: false,
			asNavFor: null,
			variableWidth: false,
			dotsClass: 'slick-dots',
			customPaging: function customPaging(slider, i) {
				return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
			}
			// appendDots: $(element)
		}
	}]
});

$(document).ready(function () {
	$(".preview__full a").fancybox({
		openEffect: 'none',
		closeEffect: 'none'
	});
});
'use strict';

// Кнопка удаление товаров в корзине

(function () {
	var closeItemBasket = $('.product-basket__item-close');

	closeItemBasket.click(function () {
		$(this).closest('.product-basket__item').remove();
	});
})();
"use strict";