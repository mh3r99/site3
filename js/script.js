$(function () {
  $('.toggles button').click(function () {
    var get_id = this.id;
    var get_current = $('.posts .' + get_id);
    $('.post').not(get_current).hide(500);
    get_current.show(500);
  });
  $('#showall').click(function () {
    $('.post').show(500);
  });
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    dots: false
    , loop: true
    , margin: 42
    , items: 8
    , nav: true
      //    , autoplay: true

    , navText: ["<i class='fas fa-caret-square-left'></i>", "<i class='fas fa-caret-square-right'></i>"]
  });
});
if ($(window).width() < 765) {
  $(".owl-carousel").owlCarousel({
    items: 3
    , loop: true
      //    , nav: true

    , dots: true
    , margin: 35
  , });
}
