this.randomtip = function(){
                var length = $("#fact li").length;
                var ran = Math.floor(Math.random()*length) + 1;
                $("#fact li:nth-child(" + ran + ")").show();
};

$(document).ready(function(){
 
    $('input, textarea').on('focus',function(){
      if ( $(this).attr('placeholder') ) $(this).data('placeholder', $(this).attr('placeholder')).removeAttr('placeholder');
}).on('blur', function(){
        if ( $(this).data('placeholder') ) $(this).attr('placeholder', $(this).data('placeholder')).removeData('placeholder');
    });
  
});

$(document).ready(function() { 
  
  
  randomtip();


// responsive navigation javascript  
$('#siteinfo span.divider').last().remove();
$("nav#secondary span").not(":has(a)").addClass("nolink");
$("span.nolink").closest("li").addClass("current");
$('span.currentbranch0' ).parent().addClass('currentparent');
$('span.currentbranch1' ).parent().addClass('currentparenttwo');
$('span.currentbranch2' ).parent().addClass('currentparentthree');
$('span.currentbranch3' ).parent().addClass('currentparentfour');
$('span.currentbranch4' ).parent().addClass('currentparentfive');
$('#secondary > ul li ul' ).hide();
$('#secondary > ul li.currentparent ul' ).show(); 

  
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
if ($('#fact').length > 0) {
/* 
	var r = Math.floor(Math.random()*4) + 1;
//	$('#fact').html(facts[r]);
// 	$('#fact li:nth-child(r)').css('display','block');

  if (r == 1) {
  	$('#fact li:nth-child(1)').css('display','block');
  }

  if (r == 2) {
  	$('#fact li:nth-child(2)').css('display','block');
  }
  
  if (r == 3) {
  	$('#fact li:nth-child(3)').css('display','block');
  }
  
  if (r == 4) {
  	$('#fact li:nth-child(4)').css('display','block');
  }

*/
}


if ($('#banner').length > 0) {
/*	var images = ['/media/dre/img/slide_01.jpg', '/media/dre/img/slide_02.jpg', '/media/dre/img/slide_03.jpg', '/media/dre/img/slide_04.jpg'];
	var randomImage = images[Math.floor(Math.random() * images.length)];
	$('#banner').css('background', 'url(' + randomImage + ')');
	$('#banner figure img').attr('src',randomImage); */
}



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
  $("iframe.twitter-timeline").css("height","210px");
  $("iframe.twitter-timeline").contents().find("head").append("<style>img.autosized-media{display:none!important;}img.u-photo.avatar{display:none !important;}div.footer.customisable-border{display:none!important;border-top:none!important;border-right:none!important;border-left:none!important;border-bottom:none!important;} .h-entry.tweet.customisable-border,.root.timeline.customisable-border{border:none!important;} .var-narrow .tweet .header {padding-left:0 !important;}</style>")
});

$("#cookies-warning .action").click(function() {

$.cookie('ditcookie', 'clicked', {expires : 30 });

});

if ($.cookie('ditcookie')) {
  $('#cookies-warning').hide();
}

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
  
$( "#sidebar .section #secondary" ).clone().appendTo( "#mobile-section-nav" );
$( "#quicklinks ul li" ).clone().appendTo( "#mobile-global .navlinks-minor" );
  
}); 