$('.preview__full').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.preview__min',
	responsive: [{
		breakpoint: 992,
		settings: {
			slidesToShow: 1,
			fade: false,
			dots: true,
			arrows: false,
			asNavFor: null,
			variableWidth: false
		}
	}]
});
$('.preview__min').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	asNavFor: '.preview__full',
	variableWidth: true,
	focusOnSelect: true
});

// (function () {
//
// 	var galleryTop = new Swiper('.gallery-top', {
// 		paginationClickable: true,
// 		pagination: '.preview__pagination',
// 		paginationClickable: true,
// 		paginationBulletRender: function (index, className) {
// 			return '<img class="preview__image-min ' + className + '" src="../static/img/assets/preview/product-min-' + (index + 1) + '.jpg">' + '</img>';
// 		},
// 		breakpoints: {
// 			992: {
// 				slidesPerView: 1,
// 				paginationType: 'bullets',
// 				pagination: '.preview__pagination',
// 				paginationBulletRender: null
// 			}
// 		}
// 	});
//
// })();

//
// var galleryTop = new Swiper('.gallery-top', {
// 	pagination: '.preview__min',
// 	paginationClickable: true,
// 	paginationBulletRender: function (index, className) {
// 		return '<img class="preview__image-min ' + className + '" src="../static/img/assets/preview/product-min-' + (index + 1) + '.jpg">' + '</img>';
// 	},
// 	breakpoints: {
// 		992: {
// 			slidesPerView: 1,
// 			paginationType: 'bullets',
// 			pagination: '.preview__pagination',
// 			paginationBulletRender: null
// 		},
// 		778: {
// 			slidesPerView: 1,
// 			paginationType: 'bullets',
// 			pagination: '.preview__pagination',
// 			paginationBulletRender: null
// 		}
// 	}
// });
// swiper.updatePagination(true)
// var galleryThumbs = new Swiper('.gallery-thumbs', {
// 	// spaceBetween: 10,
// 	// centeredSlides: true,
// 	slidesPerView: 2,
// 	// effect: 'fade',
// 	slideToClickedSlide: true,
// 	touchRatio: 0.2,
// 	slideToClickedSlide: true,
// 	// slidesOffsetAfter: 400
// });
// galleryTop.params.control = galleryThumbs;
// galleryThumbs.params.control = galleryTop;
