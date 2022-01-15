$(document).ready(function() { 
                
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
	var facts = new Array();
	facts[0] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
	facts[1] = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	facts[1] = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
	var r = Math.floor(Math.random()*facts.length);
	$('#fact').html(facts[r]);
}


if ($('#banner').length > 0) {
	var images = ['slide_01.jpg', 'slide_02.jpg', 'slide_03.jpg', 'slide_04.jpg'];
	var randomImage = images[Math.floor(Math.random() * images.length)];
	$('#banner').css('background', 'url(images/home/' + randomImage + ')');
	$('#banner figure img').attr('src','images/home/' + randomImage);
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
   
	
    

});