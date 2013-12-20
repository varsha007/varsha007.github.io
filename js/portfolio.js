
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
      maxSize : '75%',
      behavior: 'menu'
  });
});

$(document).ready(function() {
  $(".btn").click(function(){
    $(".kwicks p").show();
  });
});