$(document).ready(function() {
	$('.home-blog__list').slick({
		dots: true,
		infinite: true,
		arrows: false,
	});

	$('.testimonials__list').slick({
		dots: false,
		infinite: true,
		adaptiveHeight: true,
		nextArrow: $('.testimonials-next'),
		prevArrow: $('.testimonials-prev'),
	});

	$('.partners__list').slick({
		dots: true,
		infinite: true,
		arrows: false,
	});

	$('.sidebar__menu > .menu-item-has-children > a ').click(function(event) {
		event.preventDefault();
		$(this).parent('li').toggleClass('active');
	});

	$('.sub-menu > .menu-item-has-children').prepend('<div class="submenu-arr-wrap"><span class="submenu-arr"></span></div>');

	$('.submenu-arr-wrap').on('click', function(event) {
		$(this).parent('li').toggleClass('active');
	});

	$('.order-service').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});