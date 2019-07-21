$(document).ready(function() {
    $(".design").click(function() {
      $("#design").show();
      $(".img-hidden").toggle();
      $("img-showing").toggle();
    });

    $(".development").click(function() {
        $("#development").show();
        $(".hide").toggle();
        $("show").toggle();
      });

      $(".product").click(function() {
        $("#product").show();
        $(".hidden").toggle();
        $("showing").toggle();
      }); 
      
      $(".img1").hover (function() {
        $(this).stop().animate({opacity:.2},50);
    $('.hover1').fadeIn();

    }, function() {
      $(this).stop().animate({opacity:1},500)
      $('.hover1').fadeOut();
});
    
  });