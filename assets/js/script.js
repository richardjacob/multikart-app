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
    Header sidebar 
==========================*/
$(".nav-bar").click(function () {
  $(".header-sidebar").addClass("show");
  $(".overlay-sidebar").addClass("show");
  $('body').css({
    'overflow': 'hidden'
  });
});
$(".overlay-sidebar").click(function () {
  $(".header-sidebar").removeClass("show");
  $(".overlay-sidebar").removeClass("show");
  $('body').css({
    'overflow': 'auto'
  });
});


/*=====================
    Header scroll js
==========================*/
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 15) {
    $("header").addClass("darkHeader");
  } else {
    $("header").removeClass("darkHeader");
  }
});

/*=====================
    wishlist added start
==========================*/
$(".wishlist-btn").click(function () {
  if ($(this).hasClass("deactivate")) {
    $(this).removeClass("deactivate")
  }
  if ($(this).hasClass("active")) {
    $(this).addClass("deactivate")
  }
  $(this).toggleClass("animate");
  $(this).toggleClass("active");
  $(this).toggleClass("inactive");
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
  dots: true,
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