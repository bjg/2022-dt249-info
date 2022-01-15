$(document).ready(
				function (){
					$("#pikame").PikaChoose();

					$("#pikame").jcarousel({scroll:4,					
						initCallback: function(carousel) 
						{
					        $(carousel.list).find('img').click(function() {
					        	//console.log($(this).parents('.jcarousel-item').attr('jcarouselindex'));
					            carousel.scroll(parseInt($(this).parents('.jcarousel-item').attr('jcarouselindex')));
					        });
					    }
				    });

				});