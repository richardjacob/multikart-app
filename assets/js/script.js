/*=====================
    service worker start
==========================*/
window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
  }
}

/*=====================
    Header sidebar start
==========================*/
$(".nav-bar").click(function () {
  $(".header-sidebar").addClass("show");
  $(".overlay-sidebar").addClass("show");
});
$(".overlay-sidebar").click(function () {
  $(".header-sidebar").removeClass("show");
  $(".overlay-sidebar").removeClass("show");
});


/*=====================
    Slick slider start
==========================*/
$('.category-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  centerMode: true,
  centerPadding: '30px',
  dots: false,
  arrows: false,
});

$('.home-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '30px',
  dots: false,
  arrows: false,
});

/*=====================
 Image to background js
 ==========================*/
$(".bg-top").parent().addClass('b-top');
$(".bg-bottom").parent().addClass('b-bottom');
$(".bg-center").parent().addClass('b-center');
$(".bg_size_content").parent().addClass('b_size_content');
$(".bg-img").parent().addClass('bg-size');
$(".bg-img.blur-up").parent().addClass('blur-up lazyload');

jQuery('.bg-img').each(function () {

  var el = $(this),
    src = el.attr('src'),
    parent = el.parent();

  parent.css({
    'background-image': 'url(' + src + ')',
    'background-size': 'cover',
    'background-position': 'center',
    'display': 'block'
  });

  el.hide();
});