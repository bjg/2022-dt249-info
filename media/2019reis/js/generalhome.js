this.randomtip = function(){
                var length = $("#fact li").length;
                var ran = Math.floor(Math.random()*length) + 1;
                $("#fact li:nth-child(" + ran + ")").show();
};

$(document).ready(function() { 
  randomtip();
  
var checkExist = setInterval(function() {
   if ($('.twitter-timeline').length) {

$('.twitter-timeline').css('height','250px');

   

   }
}, 20000);  
  
                
$('.equal-height').matchHeight();
$('.equal-column').matchHeight();
$('.equal-height-row').matchHeight(true);

$('#primary a').click(function() {

  if ($(this).hasClass("active")) {
	  $('#primary a').removeClass("active");
  } else {
	  $('#primary a').removeClass("active");
	  $(this).addClass("active");
  }

  // get chosen panel id
  var idPanel = $(this).data( "target" );
  // hide all other panels
  $('.panel').not(idPanel).hide();
  // show/hide chosen panel
  var elemPanel = $(idPanel);
  elemPanel.slideToggle();
});


// Filter links
$('.filter-links').bind('change', function () {
  var url = $(this).val(); 
  if (url) {
      window.location = url; // redirect
  }
  return false;
});


// Homepage random fact
//if ($('#fact').length > 0) {

//	var r = Math.floor(Math.random()*3) + 1;
//	$('#fact').html(facts[r]);
// 	$('#fact li:nth-child(r)').css('display','block');
  
//  	$('#fact li:nth-child(r)').css('display','block');
//}
  
  
$(".action").click(function() {

$.cookie('ditcookie', 'clicked', {expires : 30, domain: '.dit.ie' });

});

if ($.cookie('ditcookie') == null) {
  $('#cookies-warning').show();
}
                
$('.equal-height').matchHeight();
$('.equal-column').matchHeight();


$('.action').click(function(){
    

$.cookie('cookie_notification', 'yes', { expires: 30, path: '/', domain: '.dit.ie' });

if ($.cookie('cookie_notification') == null) {
           $('#cookies-warning').show();
	}

});


$("#cookies-warning a.action").click(function() {
                $("#cookies-warning").hide();
});  
  

/*
if ($('#banner').length > 0) {
  
	var images = ['/media/reis2015/img/slide_01.jpg', '/media/reis2015/img/slide_02.jpg', '/media/reis2015/img/slide_03.jpg', '/media/reis2015/img/slide_04.jpg', '/media/reis2015/img/slide_05.jpg', '/media/reis2015/img/slide_06.jpg', '/media/reis2015/img/slide_07.jpg', '/media/reis2015/img/slide_08.jpg'];
  
	var randomImage = images[Math.floor(Math.random() * images.length)];
	$('#banner').css('background', 'url(' + randomImage + ')');
	$('#banner figure img').attr('src',randomImage);
}*/



$("#overview-links h4").click(function() {
	if($(window).width() <= 767) {
    	$(this).next("ul").toggleClass('show');
    }
});

$("#cookies-warning a.action").click(function() {
	$("#cookies-warning").hide();
});

$('.contacts .details').hide();

$(".contacts h3").click(function() {
    $(this).next(".details").slideToggle('hide');
});



$( "#secondary .level-1" ).clone().appendTo( "#mobile-section-nav" );
$( "#quicklinks ul li" ).clone().appendTo( "#mobile-global .navlinks-minor" );
  

  
  // rc: jQuery for Meet The Team > Contact pages
if ($("#main.wraphereforcontacts section").contents().length != 0 ) {
	$("#main.wraphereforcontacts section").addClass("wrapper contacts");
}
  
  $("#main.wraphereforcontacts section.wrapper.contacts h3").click(function(){
    	$(this).next().slideToggle(400);
  })

});

if ($.isFunction($.fn.fitVids)) {
    $("#video-slideshow").fitVids();
}


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
			window.setInterval(function () { $this.waitUntilExists(handler, shouldRunHandlerOnce, true); }, 3000)
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
  $("iframe.twitter-timeline").css("height","210px");
  $("iframe.twitter-timeline").contents().find("head").append("<style>iframe.twitter-timeline{margin-bottom:-200px;!important;}.customisable, .customisable:link, .customisable:visited, .customisable:hover, .customisable:focus, .customisable:active, .customisable-highlight:hover, .customisable-highlight:focus, a:hover .customisable-highlight, a:focus .customisable-highlight{color:#0066cc!important;}.h-entry.tweet{padding:0 0 10px 0!important;}.dt-updated{display:none!important;}img.autosized-media{display:none!important;}img.u-photo.avatar{display:none !important;}div.footer.customisable-border{display:none!important;border-top:none!important;border-right:none!important;border-left:none!important;border-bottom:none!important;} .h-entry.tweet.customisable-border,.root.timeline.customisable-border{border:none!important;} .var-narrow .tweet .header {padding-left:0 !important;}.custom-timeline-owner-profile, .timeline .e-entry-title, .p-author .p-name, .cards-base h3, .new-tweets-bar button, .load-tweets, .no-more-pane{font-family:arial,sans-serif!important;font-size:16px!important;line-height:18px!important;}.p-name.customisable-highlight{display:none!important;}.p-nickname{color:#333!important;font-size:16px!important;}.env-narrow .tweet .header{padding:0!important;min-height:20px!important;}</style>")
});

// rc
$(document).ready(function() {
  
  //rc: fix banner image wrapping problem
	$('#banner').css('background-size','cover');
  
  // rc: replace default Google Custom Search submit button with Font Awesome button
  /*$('td.gsc-search-button').waitUntilExists(function(){
	$('td.gsc-search-button').html('<button value="Search" name="sa" type="submit"><i class="fa fa-search"></i></button>');
  });*/
  
});

$( "#keywords" ).focus(function() {
 if($("#keywords").val()==="Search")
 {
   $("#keywords").val("");
 }
});

$( "#search-mobile input" ).focus(function() {
 if($("#search-mobile input").val()==="Search")
 {
   $("#search-mobile input").val("");
 }
});
$(document).ready(function () {
    if(window.location.href.indexOf("/studyatdit/") > -1) {      
      $(".list-inline li::nth-child(1) a").addClass("active");
    }
    if(window.location.href.indexOf("/researchenterprise/") > -1) {       
      $(".list-inline li::nth-child(2) a").addClass('active');
    }
    if(window.location.href.indexOf("/dsadasda/") > -1) {
      $(".list-inline li::nth-child(3) a").addClass('active');
    }
    if(window.location.href.indexOf("/about/") > -1) {     
      $(".list-inline li::nth-child(4) a").addClass('active');
    }
    if(window.location.href.indexOf("/newsandevents/") > -1) {     
      $(".list-inline li::nth-child(5) a").addClass('active');
    }  
}); 
