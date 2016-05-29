(function () {
	var closeItemBasket = $('.product-basket__item-close');

	closeItemBasket.click(function () {
		// closeItemBasket.unwrap();
		$(this).closest('.product-basket__item').remove();
	});
})();
