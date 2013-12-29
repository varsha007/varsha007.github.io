
$(document).ready(function() {
  $("body").iealert({
    support: "ie7"
  });
});

 $(document).ready(function() {
  // Show or hide the sticky footer button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
    $('.top').fadeIn(200);
    } else {
    $('.top').fadeOut(200);}
  });

 // Animate the scroll to top
  $('.top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
  })
});


$(document).ready(function() {
  $('.kwicks').kwicks({
      maxSize : '55%',
      behavior: 'menu'
  });
});

function isBreakPoint(bp) {
  // The breakpoints that you set in your css
  var bps = [320, 480, 768, 1024];
  var w = $(window).width(); // or window.innerWidth with plain JS
  var min, max;
  for (var i = 0, l = bps.length; i < l; i++) {
    if (bps[i] === bp) {
      min = bps[i-1] || 0;
      max = bps[i];
      break;
    }
  }
  return w > min && w <= max;
}

if ( isBreakPoint(480) ) {
   $(document).ready(function() {
  // Show or hide the sticky footer button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 400) {
      $('.top').fadeIn(200);
      } else {
      $('.top').fadeOut(200);}
    });

   // Animate the scroll to top
    $('.top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
    })

    $('#mobile-container').show();

    $(".mobile li").hover(
    //on mouseover
      function() {
        $(this).animate({
          height: '+=50' //adds 250px
          }, 'slow' //sets animation speed to slow
        );
      },
      //on mouseout
      function() {
        $(this).animate({
          height: '-=50px' //substracts 250px
          }, 'slow'
        );
      }
    );
  });

}