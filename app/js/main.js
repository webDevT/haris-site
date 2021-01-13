$(function(){

$('.menu-btn').click(function(){
	$(this).toggleClass('active');
	$('.menu ul').toggleClass('active');
})

$('.submit-btn').click(function(){
	$(this).hide();
	$('.footer__form input').hide();
	$('.form-prompt').show();
})

$(document).on('click', '.play-btn', function() {
  var $video = $('#video'),
    src = $video.attr('src');
 
  $video.attr('src', src + '?autoplay=1');

$('.video-owerlay').hide();

});


$('.next--1').click(function(){
	$('.step1').hide();
	$('.step2').show();
})

$('.prev--2').click(function(){
	$(this).parent().parent().hide();
	$('.step1').show();
})

$('.next--2').click(function(){
	$('.step2').hide();
	$('.step3').show();
})

$('.prev--3').click(function(){
	$(this).parent().parent().hide();
	$('.step2').show();
})

$('.next--3').click(function(){
	$('.step3').hide();
	$('.step4').show();
})

$('.prev--4').click(function(){
	$(this).parent().parent().hide();
	$('.step3').show();
})

$('.next--4').click(function(){
	$('.step4').hide();
	$('.step6').show();
})

$('.prev--5').click(function(){
	$(this).parent().parent().hide();
	$('.step4').show();
})

$('.next--5').click(function(){
	$('.step5').hide();
	$('.step6').show();
})

$('.prev--6').click(function(){
	$(this).parent().parent().hide();
	$('.step4').show();
})

$('.main-screen__button--4').click(function(){
	$('.step4').hide();
	$('.step5').show();
})

$('.demo-btn').click(function(){
	$('.step4').hide();
	$('.step6').show();
})


$('.popup-btn').click(function(){
	$('.popup').fadeIn();
})

$('.close').click(function(){
	$('.popup').fadeOut();
})

$.lazyLoadXT.onload.addClass = "animated fadeIn";
});