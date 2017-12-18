(function($){
	"use strict";

	$('.change-system .change-system__row').click(function() {
		$(this).addClass('change-system__row--active').siblings().removeClass('change-system__row--active');
		changePutValue()
	});
	changePutValue()

	function changePutValue() {
		var changeGivePic = $('.change-system--give .change-system__row--active').find('.change-system__icon').attr('src'),
		changeGetPic = $('.change-system--get .change-system__row--active').find('.change-system__icon').attr('src'),
		changeGiveName = $('.change-system--give .change-system__row--active').find('.change-system__name').text(),
		changeGetName = $('.change-system--get .change-system__row--active').find('.change-system__name').text();
		$('.change__section-give .change__section-pic').attr('src', changeGivePic);
		$('.change__section-get .change__section-pic').attr('src', changeGetPic);
		$('.change__section-give .change__section-input').val(changeGiveName);
		$('.change__section-get .change__section-input').val(changeGetName);
	}

	$('.js-modal').fancybox({
		touch: false,
		lang : 'ru',
		i18n : {
			'ru' : {
				CLOSE: 'Закрыть',
				ERROR: 'Невозможно загрузить данные. Попробуйте еще раз.',
			}
		},
		afterLoad: function() {
			$('.select').trigger('refresh');
		}
	});

	$('.js-creditcard-mask').mask('0000 0000 0000 0000 00');

	$('.faq__item-question').click(function() {
		$(this).closest('.faq__item').toggleClass('faq__item--active').siblings().removeClass('faq__item--active');
	});

	$('.select, .checkbox, .radio').styler();

	$('.promo__tabs').each(function(i) {
		var storage = localStorage.getItem('tab' + i);
		if (storage) {
			$(this).find('div').removeClass('promo__tabs-item--active').eq(storage).addClass('promo__tabs-item--active').closest('.promo__main').find('.promo__content').removeClass('promo__content--active').eq(storage).addClass('promo__content--active');
		}
	});
	$('.promo__tabs').on('click', 'div:not(.promo__tabs-item--active)', function() {
		$(this).addClass('promo__tabs-item--active').siblings().removeClass('promo__tabs-item--active').closest('.promo__main').find('.promo__content').removeClass('promo__content--active').eq($(this).index()).addClass('promo__content--active');
		var ulIndex = $('.promo__tabs').index($(this).parents('.promo__tabs'));
		localStorage.removeItem('tab' + ulIndex);
		localStorage.setItem('tab' + ulIndex, $(this).index());
	});

	$('.input-file').change(function() {
		$('label[for="' + this.id + '"]').text($(this).val()).attr('title',$(this).val());
	});

	$('.exchange-form').validate({
		rules: {
			exchangeValue: {
				required: true,
			},
			exchangeCard: {
				required: true,
				minlength: 19,
				maxlength: 22
			},
		},
		messages: {
			exchangeValue: {
				required: "Введите сумму",
			},
			exchangeCard: {
				required: "Вы ввели не правильный номер карты. Номер карты должен быть 16 или 18 цифр.",
				minlength: "Вы ввели не правильный номер карты. Номер карты должен быть 16 или 18 цифр."
			}
		},
		errorClass: "input-text--error",
		wrapper: "div",
	});

})(jQuery);