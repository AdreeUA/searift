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
