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


      // jquery hovering effects on the portfolio images
      $(".img1").hover (function() {
        $(this).stop().show();
        $('.hover1').fadeIn();

      }, function() {
        $(this).stop().show();
        $('.hover1').fadeOut();
      });
      
      $(".img2").hover (function() {
        $(this).stop().animate();
        $('.hover2').fadeIn();

      }, function() {
        $(this).stop().animate()
        $('.hover2').fadeOut();
      });

      $(".img3").hover (function() {
        $(this).stop().animate();
        $('.hover3').fadeIn();

      }, function() {
        $(this).stop().animate();
        $('.hover3').fadeOut();
      });

      $(".img4").hover (function() {
        $(this).stop().animate();
        $('.hover4').fadeIn();

      }, function() {
        $(this).stop().animate()
        $('.hover4').fadeOut();
      });

      $(".img5").hover (function() {
        $(this).stop().animate();
        $('.hover5').fadeIn();

      }, function() {
        $(this).stop().animate()
        $('.hover5').fadeOut();
      });

      $(".img6").hover (function() {
        $(this).stop().animate();
        $('.hover6').fadeIn();

      }, function() {
        $(this).stop().animate()
        $('.hover6').fadeOut();
      });

      $(".img7").hover (function() {
        $(this).stop().animate();
        $('.hover7').fadeIn();

      }, function() {
        $(this).stop().animate()
        $('.hover7').fadeOut();
      });

      $(".img8").hover (function() {
        $(this).stop().animate();
        $('.hover8').fadeIn();

      }, function() {
        $(this).stop().animate()
        $('.hover8').fadeOut();
      });
  });