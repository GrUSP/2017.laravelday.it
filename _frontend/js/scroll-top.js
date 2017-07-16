$(function () {
  $('#scroll-top').on('click', function (e) {
    e.preventDefault();
    var $body = $("html, body");
    $body.stop().animate({scrollTop:0}, '500', 'swing');
  });
});
