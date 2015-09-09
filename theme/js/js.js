(function ($) {

  $(window).load(function () {
    $('#slider-1').flexslider({
      //animation: "fade",
      prevText: "",           //String: Set the text for the "previous" directionNav item
      nextText: ""
    });
  });

  $(window).load(function () {
    $('#slider-2').flexslider({
      animation: "slide",
      prevText: "",           //String: Set the text for the "previous" directionNav item
      nextText: ""
    });
  });

  $(window).load(function () {

    $(".Vwidget  .VjCarouselLite").jCarouselLite({
      btnNext: ".Vwidget .down",
      btnPrev: ".Vwidget .up",
      vertical: true,
      visible: 3,
      auto: 5000,
      speed: 500,
      circular: true
    });
  })

})(jQuery);

