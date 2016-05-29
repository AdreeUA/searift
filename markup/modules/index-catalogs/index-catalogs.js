// enquire.register('screen and (min-width: 992px)', {
// 	match: function () {
// 		// Load sidebar content in via AJAX.
// 		// Show sidebar
// 		$('#scrollbar1').tinyscrollbar({
// 			axis: 'x',
// 			thumbSize: 275,
// 			wheelSpeed: 5,
// 			autoUpdate: false
// 		});
// 	},
// 	unmatch: function () {
// 		// Hide the sidebar
// 		$('.index-catalogs__list').slick({
//
// 		});
// 	}
// });
//
// $('.index-catalogs__list').slick({
//
// });

// $(document).ready(function () {
// 	// The axis option is for setting the dimension in
// 	// which the scrollbar should operate.
// 	//
// 	$('#scrollbar1').tinyscrollbar({
// 		axis: 'x',
// 		thumbSize: 275,
// 		wheelSpeed: 5,
// 		autoUpdate: false
// 	});
// });
// $(document).ready(function () {
// 	// The axis option is for setting the dimension in
// 	// which the scrollbar should operate.
//
// 	// 	enquire
// 	// .register("screen and (max-width:50em)", function() {
// 	//     console.log("handler 1 matched");
// 	// })
// 	// .register("screen and (max-width:40em)", function() {
// 	//     console.log("handler 2 matched");
// 	// });
// 	//
// 	// enquire.register('screen and (min-width: 992px)', {
// 	// 	match: function () {
// 	// 		// Load sidebar content in via AJAX.
// 	// 		// Show sidebar
// 	// 		$('#scrollbar1').tinyscrollbar({
// 	// 			axis: 'x',
// 	// 			thumbSize: 275,
// 	// 			wheelSpeed: 5,
// 	// 			autoUpdate: false
// 	// 		});
// 	// 	},
// 	// 	unmatch: function () {
// 	// 		// Hide the sidebar
// 	// 		// $('#scrollbar1').tinyscrollbar(false);
// 	// 		$('.index-catalogs__list').slick({
// 	//
// 	// 		});
// 	// 	}
// 	// });
//
// // });
//

var scrollbar = $('#scrollbar1');
var scrollOption = {
	axis: 'x',
	thumbSize: 275,
	wheelSpeed: 5,
	autoUpdate: false,
	wheel: false
};


if ($(window).width() < 768) {
	$('.viewport').removeClass();
	$('.overview').removeClass('overview');
	$('.scrollbar').remove();
	$('.index-catalogs__list').slick({
		arrows: false,
		slidesToShow: 4,
		dots: true,
		infinite: true,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}]
	});

}
if ($(window).width() > 768) {
	scrollbar.tinyscrollbar(scrollOption);
}
// $('.index-slider__controlls').detach();
// $('.swiper-scrollbar').detach();

// $('.index-catalogs__list').slick({
// 	dots: true,
// 	arrows: false,
// 	slidesToShow: 4,
// 	infinite: true,
// 	responsive: [{
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
// 		}
//
// 	]
// });



// (function () {
// 	var swiper = new Swiper('.index-catalogs__container', {
// 		scrollbar: '.swiper-scrollbar',
// 		scrollbarHide: false,
// 		slidesPerView: 'auto',
// 		spaceBetween: 30,
// 		grabCursor: true,
// 		paginationClickable: true,
// 		paginationType: 'bullets',
// 		pagination: '.index-catalogs__pagination',
// 		breakpoints: {
// 			992: {
// 				// pagination: '.index-catalogs__pagination',
// 				slidesPerView: 2,
// 				// scrollbar: '',
// 				// paginationType: 'bullets',
// 			},
// 			768: {
// 				slidesPerView: 1
// 			}
// 		}
// 	});
//
// })();
