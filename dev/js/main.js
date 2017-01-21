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
});