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



//
// (function () {
// 	var mySwiper = new Swiper('.index-slider__container', {
// 		slidesPerView: 1,
// 		paginationClickable: true,
// 		loop: true,
// 		nextButton: '.swiper-button-next',
// 		prevButton: '.swiper-button-prev',
// 		paginationType: 'bullets',
// 		pagination: '.index-slider__pagination'
// 	});
//
// })();
