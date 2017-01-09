// Кнопка для плавного прокручивания ВВЕРХ
(function ($) {
	$(function () {

		$('#btn-up').click(function () {
			$('html, body').animate({
				scrollTop: 0
			}, 500);
			return false;
		})

	})
})(jQuery)
