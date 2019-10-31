new WOW().init();
$(document).ready(function() {
	var button = document.querySelector('#button');
	var button2 = document.querySelector('#button2');
	var modalForm = document.querySelector('#modal');
	var modalThanks = document.querySelector('#modal-thanks');
	var close = document.querySelector('#close');
	var closeThanks = document.querySelector('#close-thanks');

	button.addEventListener('click', function() {
		modalForm.classList.add('modal_active');
	});
	button2.addEventListener('click', function() {
		modalForm.classList.add('modal_active');
	});
	close.addEventListener('click', function() {
		modalForm.classList.remove('modal_active');
	});
	closeThanks.addEventListener('click', function() {
		modalThanks.classList.remove('modal_active');
	});
	$('.burger-button').on('click', function(){
		$(this).toggleClass('burger-button_dissabled');
		$('.burger-menu__wrapper').toggleClass('burger-menu__wrapper_enabled');
		$('.navbar__logo').toggleClass('navbar__logo_margin');
	});
	$('.burger-button__close').on('click', function(){
		$('.burger-menu__wrapper').removeClass('burger-menu__wrapper_enabled');	
		$('.navbar__logo').removeClass('navbar__logo_margin');
		$('.burger-button').removeClass('burger-button_dissabled');
	});
	$(".navbar-menu__item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
	var mySwiper = new Swiper ('.hero__swiper-container', {
		autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	var reviewsSwiper = new Swiper ('.reviews__swiper-container', {
  	slidesPerView: 1,
  	spaceBetween: 30,
  	loop: true,
    breakpoints: {
    	992: {
    		slidesPerView: 2,
    		spaceBetween: 120,
    	},
    	1200: {
    		slidesPerView: 2,
    		spaceBetween: 226,
    	},
    },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	var reviews = $('.section__news');
	var reviewsTop = reviews.offset().top;
	$(window).bind('scroll', function () {
		var windowTop = $(this).scrollTop();
		if (windowTop > reviewsTop) {
			$('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d947.7596356944331!2d37.20127076998803!3d55.59914190404965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b556e8ba6e1b69%3A0x4d7d28a0763eecc5!2z0KHQvtCy0LXRgtGB0LrQsNGPINGD0LsuLCA0OCwg0JzQsNGA0YPRiNC60LjQvdC-LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDE0MzM1MA!5e0!3m2!1sru!2sby!4v1572194966744!5m2!1sru!2sby" width="100%" height="666" frameborder="0" style="border:0;" allowfullscreen=""></iframe>');
			$(window).unbind('scroll');
		}
	});
	$('#footer__form').validate({
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15,
			},
			phone: {
				required: true,
			},
		},
		messages: {
			username: {
				required: "Укажите имя",
				minlength: jQuery.validator.format("Осталось {0} буквы"),
				maxlength: jQuery.validator.format("Не длинее 15-ти букв"),
			}, 
			phone: {
				required: "Введите номер телефона",
			},
			
		},
		errorClass: "invalid",
		errorElement: "div",
	});
	$('#modal__form').validate({
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15,
			},
			phone: {
				required: true,
			},
		},
		messages: {
			username: {
				required: "Укажите имя",
				minlength: jQuery.validator.format("Осталось {0} буквы"),
				maxlength: jQuery.validator.format("Не длинее 15-ти букв"),
			}, 
			phone: {
				required: "Введите номер телефона",
			},
		},
		errorClass: "invalid",
		errorElement: "div",
	});
	$('.phone').mask('+7 (999) 999-99-99');

	$('#footer__form').on('submit', function name(event) {
		event.preventDefault();

		const offerName = document.getElementById('footerName'),
		offerPhone = document.getElementById('footerPhone');

			if (footerName.value !== '' && footerPhone.value !== '') {

				$.ajax({
					type: "POST",
					url: "mail2.php",
					data: $(this).serialize(),
					success: function (response) {
						console.log('Прибыли данные: ' + response);
						$('#footer__form')[0].reset();
						modalThanks.classList.add('modal_active');

					},
					error: function(jqXHR, textStatus, errorThrown) {
						console.error(jqXHR + " " + textStatus);
					},
				});

			}	else {
				console.log('Введите данные');
			}
	});

	$('#modal__form').on('submit', function name(event) {
		event.preventDefault();

		const modalName = document.getElementById('modalName'),
			modalPhone = document.getElementById('modalPhone');

		if (modalName.value !== '' && modalPhone.value !== '') {

			$.ajax({
				type: "POST",
				url: "mail1.php",
				data: $(this).serialize(),
				success: function (response) {
					console.log('Прибыли данные: ' + response);
					$('#modal__form')[0].reset();
					modalThanks.classList.add('modal_active');
					modalForm.classList.remove('modal_active');
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.error(jqXHR + " " + textStatus);
				},
			});

		}	else {
			console.log('Введите данные');
		}
	});
});