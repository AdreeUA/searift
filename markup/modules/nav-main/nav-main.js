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
