$(document).ready(function() {
  
  var $slider = $(".slider"),
      $slideBGs = $(".slide__bg"),
      curSlide = 0,
      animating = false,
      autoSlideTimeout;
      
  function deslizar1(instant) {
    if (!instant) {
      animating = true;
      $slider.addClass("animating");
      $(".slide").removeClass("active");
      $(".inicial").addClass("active");
    }
    window.clearTimeout(autoSlideTimeout);
    $slider.css("transform", "translateX(0%)");
    $slideBGs.css("transform", "translateX(0%)");
  }
  $(document).on("click", ".inicio", function() {
    curSlide = $(this).data("page");
    deslizar1();
  });

  function deslizar2(instant) {
    if (!instant) {
      animating = true;
      $slider.addClass("animating");
      $(".slide").removeClass("active");
      $(".slide-1").addClass("active");
    }
    window.clearTimeout(autoSlideTimeout);
    $slider.css("transform", "translateX(-100%)");
    $slideBGs.css("transform", "translateX(-100%)");
  }
  $(document).on("click", ".cambio", function() {
    curSlide = $(this).data("page");
    deslizar2();
  });

  function deslizar3(instant) {
    if (!instant) {
      animating = true;
      $slider.addClass("animating");
      $(".slide").removeClass("active");
      $(".slide-2").addClass("active");
    }
    window.clearTimeout(autoSlideTimeout);
    $slider.css("transform", "translateX(-200%)");
    $slideBGs.css("transform", "translateX(-200%)");
  }
  $(document).on("click", ".cambio2", function() {
    curSlide = $(this).data("page");
    deslizar3();
  });

  function deslizar4(instant) {
    if (!instant) {
      animating = true;
      $slider.addClass("animating");
      $(".slide").removeClass("active");
      $(".slide-3").addClass("active");
    }
    window.clearTimeout(autoSlideTimeout);
    $slider.css("transform", "translateX(-300%)");
    $slideBGs.css("transform", "translateX(-300%)");
  }
  $(document).on("click", ".cambio3", function() {
    curSlide = $(this).data("page");
    deslizar4();
  });

  function deslizar5(instant) {
    if (!instant) {
      animating = true;
      $slider.addClass("animating");
      $(".slide").removeClass("active");
      $(".slide-4").addClass("active");
    }
    window.clearTimeout(autoSlideTimeout);
    $slider.css("transform", "translateX(-400%)");
    $slideBGs.css("transform", "translateX(-400%)");
  }
  $(document).on("click", ".cambio4", function() {
    curSlide = $(this).data("page");
    deslizar5();
  });


});
