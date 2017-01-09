// Кнопка удаление товаров в корзине

(function () {
	var closeItemBasket = $('.product-basket__item-close');

	closeItemBasket.click(function () {
		$(this).closest('.product-basket__item').remove();
	});
})();
