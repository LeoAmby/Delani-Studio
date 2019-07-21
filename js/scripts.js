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
  });