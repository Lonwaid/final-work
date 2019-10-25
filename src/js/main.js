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
		// autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});