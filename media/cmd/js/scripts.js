$(document).ready(function() {
  	
// tweet/share links
  
  $('.shareBtn').click(function(){
    	var link = $(location).attr('href');
    	var share = $(this).attr('data-share');
    	window.location= share + link;
  });


  
  // RC ACTIVATE FIRST CAROUSEL BUTTON //
  		$(".carousel-indicators li:nth-child(1)").addClass("active");
  	
  		// RC ADD ATTRIBUTES TO CAROUSEL BUTTONS //
  		var	n = $('.carousel-indicators li').length;
  
  for(i=1; i<=n; i++){
    $(".carousel-indicators li:nth-child(" + i + ")").attr("data-slide-to", i-1);
  }
  
// RC VARIABLE IMAGES FOR COURSE CAROUSELS
  
  var num_inner_slides = $('div.carousel-inner div.item img').length;
  
  for (i-1; i<=num_inner_slides; i++) {
   	$('ol.carousel-indicators').append('<li data-target="#Slider" data-slide-to="' + (i-1) + '"></li>');
  }
  		
	    
		$(".img100").imgLiquid({
	        fill: true,
	        horizontalAlign: "center",
	        verticalAlign: "center"
	    });
		
		$(".img200").imgLiquid({
	        fill: true,
	        horizontalAlign: "center",
	        verticalAlign: "center"
	    });
		
		$(".img400").imgLiquid({
	        fill: true,
	        horizontalAlign: "center",
	        verticalAlign: "center"
	    });
		
		$('.coursepage').hover(function(){ $(this).popover('show'); }, function(){ $(this).popover('hide'); });
		
		$( "#datepicker" ).datepicker({
			changeMonth: true,
			changeYear: true,
			showAnim: 'slideDown'
		});
		$( "#anim" ).change(function() {
		  $( "#datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
		});
		
		$profileBody = $('.peoplepage').height()+88;
		$profileBlurb = $('#sideProfile').find('.dark-grey').height();
		$columnFull = $profileBody - $profileBlurb;
		$('.columnFull').height($columnFull);
  
	
	});

(function ($) {
 
/**
* @function
* @property {object} jQuery plugin which runs handler function once specified element is inserted into the DOM
* @param {function} handler A function to execute at the time when the element is inserted
* @param {bool} shouldRunHandlerOnce Optional: if true, handler is unbound after its first invocation
* @example $(selector).waitUntilExists(function);
*/
 
$.fn.waitUntilExists	= function (handler, shouldRunHandlerOnce, isChild) {
	var found	= 'found';
	var $this	= $(this.selector);
	var $elements	= $this.not(function () { return $(this).data(found); }).each(handler).data(found, true);
	
	if (!isChild)
	{
		(window.waitUntilExists_Intervals = window.waitUntilExists_Intervals || {})[this.selector] =
			window.setInterval(function () { $this.waitUntilExists(handler, shouldRunHandlerOnce, true); }, 500)
		;
	}
	else if (shouldRunHandlerOnce && $elements.length)
	{
		window.clearInterval(window.waitUntilExists_Intervals[this.selector]);
	}
	
	return $this;
}
 
}(jQuery));

$("iframe.twitter-timeline").waitUntilExists(function(){
  $("iframe.twitter-timeline").contents().find("head").append("<style>img.u-photo.avatar{display:none !important;}div.footer.customisable-border{border-top:none!important;border-right:none!important;border-left:none!important;border-bottom:solid 1px #8c878a !important;} .h-entry.tweet.customisable-border,.root.timeline.customisable-border{border:none!important;} .var-narrow .tweet .header {padding-left:0 !important;}</style>")
});


$(".col-md-10 .fb-page.fb_iframe_widget iframe").waitUntilExists(function(){
  console.log('facebook exists');
  $(".col-md-10 .fb-page.fb_iframe_widget iframe").contents().find("head").append("<style>div._h7r._5ip3{display:none!important;}</style>");
});