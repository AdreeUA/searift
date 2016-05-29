(function () {

	jQuery(function ($) {

		$(document).mouseup(function (e) {

			var search = $('.nav-top__search');
			var searchWrap = $('.search-wrap');

			search.click(function () {
				searchWrap.toggleClass('search-wrap_open');
			});

			if (!searchWrap.is(e.target) && searchWrap.has(e.target).length === 0 && search.has(e.target).length === 0) {
				searchWrap.removeClass('search-wrap_open');
				search.removeClass('search-wrap_open');
			}
		});
	});

})();
