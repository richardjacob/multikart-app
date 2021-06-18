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

