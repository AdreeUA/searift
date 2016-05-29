// $(window).width() < 768)
jQuery(function ($) {

	$(document).mouseup(function (e) {

		var basketButton = $('.basket');
		var basketList = $('.product-basket');

		// var list = $('.catalog__list');
		// var button = $('.catalog__burger');

		basketButton.click(function () {
			basketList.toggleClass('product-basket_open');
		});

		if (!basketList.is(e.target) && basketList.has(e.target).length === 0) {
			basketList.removeClass('product-basket_open');
		}
	});
});
// && basketButton.has(e.target).length === 0
