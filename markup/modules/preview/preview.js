// Слайдер на странице ПРОДУКТА

$('.preview__full').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	adaptiveHeight: true,
	// appendDots: $(".preview__min"),
	customPaging: function (slider, i) {
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
			customPaging: function (slider, i) {
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
