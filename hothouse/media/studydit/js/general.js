this.randomtip = function(){
                var length = $("#fact li").length;
                var ran = Math.floor(Math.random()*length) + 1;
                $("#fact li:nth-child(" + ran + ")").show();
};


 
$(document).ready(function(){
                randomtip();
                           
                           
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
 
 
});


$(document).ready(function() { 

 $('#select-anchor').change( function () {
        var targetPosition = $($(this).val()).offset().top;
        $('html,body').animate({ scrollTop: targetPosition}, 'slow');
    });


$('#banner').each(function() {
    var number = 1 + Math.floor(Math.random() * 4);
    $(this).addClass("bannerBackground-" + number.toString());
});




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


$("#overview-links h4").click(function() {
                if($(window).width() <= 767) {
                $(this).next("ul").toggleClass('show');
    }
});
 
$("#cookies-warning a.action").click(function() {
                $("#cookies-warning").hide();
});


function go(){
location=
document.Dropselect.example.
options[document.Dropselect.example.selectedIndex].value
}


var ID = 0;
$('div.answer').each(function() {
    ID++;
    $(this).attr('id', 'faq'+ID);
   
});

var IE = 0;
$('a.question').each(function() {
    IE++;
    $(this).attr('href', '#faq'+IE);
   
});

$( "#sidebar .section #secondary" ).clone().appendTo( "#mobile-section-nav" );
$( "#quicklinks ul li" ).clone().appendTo( "#mobile-global .navlinks-minor" );

});