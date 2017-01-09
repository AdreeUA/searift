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
