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
    Filter select js
==========================*/
$('.filter-row li, .filter-color li, .size-select li').on('click', function (e) {
  $(this).addClass('active').siblings('.active').removeClass('active');
});


/*=====================
 Quantity js
==========================*/

$('.qty-counter .quantity-right-plus').on('click', function () {
  var $qty = $(this).parents(".qty-counter").find(".input-number");
  var currentVal = parseInt($qty.val(), 10);
  if (!isNaN(currentVal)) {
    $qty.val(currentVal + 1);
  }
});
$('.qty-counter .quantity-left-minus').on('click', function () {
  var $qty = $(this).parents(".qty-counter").find(".input-number");
  var currentVal = parseInt($qty.val(), 10);
  if (!isNaN(currentVal) && currentVal > 1) {
    $qty.val(currentVal - 1);
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

$('.brand-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '30px',
  dots: false,
  arrows: false,
});


$('.product-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '60px',
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 360,
      settings: {
        centerPadding: '20px',
      }
    }
  ]
});


$('.payment-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '40px',
  dots: false,
  arrows: false,
});


$('.onboarding-slider').slick({
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 1,
  infinite: false,
  arrows: false,
  dots: true
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


/*=====================
 radio checkbox js
 ==========================*/
$('.delivery-option-section li .check-box').on('click', function (e) {
  $(this).addClass('active').parents("li").siblings().find(".check-box").removeClass('active');
});


/*========================
 Payment show more js
 ==========================*/
$('.show-more').on('click', function (e) {
  $('.offer-listing').toggleClass("maximized");
  $(this).text(function(i, text){
      return text === "Show Less" ? "Show More" : "Show Less";
  })
});



