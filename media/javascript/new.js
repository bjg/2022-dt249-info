$(document).ready(function() {

    $("#info-links h3").click(function() {
    	if($(window).width() <= 480) {
        	$(this).next("ul").toggleClass('show');
        }
	});
    
});