// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
$('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(100);
});

// ADD SLIDEUP ANIMATION TO DROPDOWN //
$('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

$('.image-hover-overlay').hover(
      function () {
       $(this).stop().animate({'opacity':'0.0'},500);
      },
      function () {
        $(this).stop().animate({'opacity':'0.9'},500);
      }
);

$('.image-hover-overlay-invert').hover(
      function () {
       $(this).stop().animate({'opacity':'1.0'},500);
      },
      function () {
        $(this).stop().animate({'opacity':'0.0'},500);
      }
);


$('.text-hover-overlay').hover(
      function () {
       $(this).stop().animate({'opacity':'1'},500);
      },
      function () {
        $(this).stop().animate({'opacity':'0.0'},500);
      }
);

//Get height of boxes
$( ".innerBox" ).each(function() {
    if($(this).outerHeight(true) > $textHeight)
    {
        $textHeight = $(this).outerHeight(true)+30;
    }
});
$('.img400').height($textHeight);