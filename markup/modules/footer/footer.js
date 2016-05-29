// function up() {
// 	window.scrollBy(0, -40); // чем меньше значение (цифра -10), тем выше скорость перемещения
// 	if (window.pageYOffset > 0) {
// 		requestAnimationFrame(up);
// 	} // если значение прокрутки больше нуля, то функция повториться
// };
// document.getElementById('btn-up').addEventListener('click', function (e) {
// 	e.preventDefault(); // запрет перехода по ссылке, вместо него скрипт
// 	up();
// }, false);

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
