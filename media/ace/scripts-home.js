var oldWrapper = null;
var oldCode;

$(document).ready(function(){ 
simpleSlide({'move':'fade'});
$('.auto-slider').each( function() {
    var related_group = $(this).attr('rel');
    autoslideinterval = window.setInterval("simpleSlideAction('.right-button', " + related_group + ");", 4000);
});

$('.image').each(function(){
	$this = $(this);
	if(!$this.find('img').length) $this.remove(); 
})

//$('#tabMenu > li a').click(function(event){event.preventDefault();})
$('#tabMenu > li').stop().hover(function(){
    //if(playing==true) jwplayer(currentplayer).stop();
    //perform the actions when it's not selected
    if (!$(this).hasClass('selected')) {    
           
    //remove the selected class from all LI    
    $('#tabMenu > li').removeClass('selected');
    
    //Reassign the LI
    $(this).addClass('selected');
    
    //Hide all the DIV in .boxBody
    $('.boxBody div.tab').stop().hide();
	if($(this).find('a').attr('rev').length){
	var createPlayerFunctionParams = $(this).find('a').attr('rev').split(',');
	
	theWrapper =  '#'+createPlayerFunctionParams[0];
	thePlaceholder = createPlayerFunctionParams[1];
	thePlayer = createPlayerFunctionParams[2];
	theFile = createPlayerFunctionParams[3];
	
	if (oldWrapper != null) { removeOldPlayer(oldWrapper, oldCode); }
 
	oldWrapper = theWrapper; 
	oldCode = $(oldWrapper).html();
 
	var flashvars = {
		file:theFile
		,autostart:false
		,provider: 'youtube'
	}
 
	var params = {
		allowfullscreen:"true", 
		allowscriptaccess:"always"
	}
 
	var attributes = {
		id:thePlayer,  
		name:thePlayer
	}
    swfobject.embedSWF('http://dit.ie/media/ace/player.swf',thePlaceholder,'352','202','9.0.115',true,flashvars, params, attributes);

	}
	
    //Look for the right DIV in boxBody according to the Navigation UL index, therefore, the arrangement is very important.
    //$('.boxBody div.tab:eq(' + $('#tabMenu > li').index(this) + ')').stop().fadeIn('1500');
    $('.boxBody div.tab:eq(' + $('#tabMenu > li').index(this) + ')').stop().show();
    
  }
    
  })

	$('#slide1').addClass('show');
});

 
 
function removeOldPlayer(theOldWrapper, theOldCode) { 
	$(oldWrapper).html(theOldCode);
}


var playing=false;
var currentplayer=0;
function flashLoaded(e) {
    // e.ref is a reference to the Flash object.  We'll pass it to jwplayer() so the API knows where the player is.
    // Add event listeners
    jwplayer(e.ref).onPlay(function() {currentplayer=e.ref; playing=true;});
}

// top navigation
sfHover = function() {
	var sfEls = document.getElementById("topnavigation").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" over";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" over\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);