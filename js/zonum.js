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
});

(function($) {

    var resizeTimer; // Set resizeTimer to empty so it resets on page load

    function resizeFunction() {
        //
        var animHomeLogoWrapHeight = $('.ani-h-logo-wrap').height();
        var animHomeLogoWrapTopPadding = (screenHeight - animHomeLogoWrapHeight) / 2;
        $('.ani-h-logo-wrap').css('paddingTop', animHomeLogoWrapTopPadding + 'px');
        setBackgroundSizes();
    };

    // On resize, run the function and reset the timeout
    // 250 is the delay in milliseconds. Change as you see fit.
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeFunction, 250);
        
    });

})(jQuery);