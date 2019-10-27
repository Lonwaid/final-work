$(document).ready(function() {
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
	var mySwiper = new Swiper ('.swiper-container', {
		autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	var reviewsSwiper = new Swiper ('.reviews__swiper-container', {
  	
  	slidesPerView: 1,
  	spaceBetween: 30,
    breakpoints: {
    	992: {
    		slidesPerView: 2,
    		spaceBetween: 120,
    	},
    	1200: {
    		spaceBetween: 229,
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
});