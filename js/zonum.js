var screenWidth = $(window).width();
var screenHeight = $(window).height();
function setBackgroundSizes(){
	$('.z-background').css({
		'width': screenWidth +'px',
		'height' : screenHeight + 'px'
	});
}

$(document).ready(function(){
	setBackgroundSizes();
	console.log(screenWidth);
});