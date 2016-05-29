// var burger = document.getElementById('catalogBurger');
// var nav = document.getElementById('catalogList');
//
// burger.addEventListener('click', e => {
// 	e.preventDefault();
// 	nav.classList.toggle('catalog__list_open');
// 	burger.classList.toggle('burger_open');
//
// });

(function () {

	jQuery(function ($) {

		$(document).mouseup(function (e) {

			var list = $('.catalog__list');
			var button = $('.catalog__burger');

			button.click(function () {
				list.toggleClass('catalog__list_open');
				button.toggleClass('burger_open');
			});

			if (!list.is(e.target) && list.has(e.target).length === 0 && button.has(e.target).length === 0) {
				list.removeClass('catalog__list_open');
				button.removeClass('burger_open');
			}
		});
	});

})();
