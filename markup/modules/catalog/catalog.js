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
