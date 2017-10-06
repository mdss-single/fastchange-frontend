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
				CLOSE       : 'Закрыть',
				ERROR       : 'Невозможно загрузить данные. Попробуйте еще раз.',
			}
        }
	});

	console.log('%c Верстка: mdss@makexhtml.ru ', 'color:#fff;font-size:1.2rem;background-color:#3469c6;')

})(jQuery);