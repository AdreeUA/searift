// ПОПАП

$(document).ready(function () {

	$('.pop-up').hide();

	var optionFancybox = {
		wrapCSS: 'pop-up',
		padding: ['33px', '33px', '0', '33px'],
		scrollOutside: false,
		keys: {
			close: [27]
		},
		fitToView: false,
		autoSize: false,
		width: '100%',
		maxWidth: 360,
		autoHeight: true
	};

	$('.header__phone-coll').fancybox(optionFancybox);
	$('.product__btn-question_popup').fancybox(optionFancybox);

	var optionValidationForm = {
		rules: {

			name: {
				required: true,
			},

			question: {
				required: true,
			},

			telRequired: {
				required: true,
			},

			mail: {
				required: true,
			}
		},

		messages: {
			name: {
				required: false
			},
			question: {
				required: false,
			},

			telRequired: {
				required: false,
			},

			mail: {
				required: false,
			}
		}
	}

	var headerPopup = $("#headerPopup").validate(optionValidationForm);
	var productPopup = $("#productPopup").validate(optionValidationForm);

});
