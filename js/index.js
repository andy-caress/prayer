$(function() {
  var rotation = 0,
    scrollLoc = $(document).scrollTop();
  $(window).scroll(function() {
    var newLoc = $(document).scrollTop();
    var diff = scrollLoc - newLoc;
    rotation += diff, scrollLoc = newLoc;
    var rotationStr = "rotate(" + rotation + "deg)";
    $("#left").css({
      '-moz-transform': 'rotate(' + offset + 'deg)',
      '-webkit-transform': 'rotate(' + offset + 'deg)',
      '-o-transform': 'rotate(' + offset + 'deg)',
      '-ms-transform': 'rotate(' + offset + 'deg)',
      'transform': 'rotate(' + offset + 'deg)',
    });
  });
})
