
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
      maxSize : '70%',
      behavior: 'menu'
  });
});

$(document).ready(function() {
  $(".kwicks a").hover(function(){
  console.log('test');
    $(this).find('li a').css( "display", "none" );

  });
});