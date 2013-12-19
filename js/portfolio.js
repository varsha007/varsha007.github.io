$(document).ready(function(){
  $(".scroll").click(function(){
    console.log("test");
    $('html, body').animate({scrollTop: '400px'}, 300);
  });
});

$(document).ready(function(){
  $("content .scroll").click(function(){
    console.log("test");
    $('html, body').animate({scrollTop: '0'}, 300);
  });
});


$(document).ready(function() {
  $('.kwicks').kwicks({
      maxSize : '75%',
      behavior: 'menu'
  });
});

$(document).ready(function() {
  $(".btn").click(function(){
    $(".kwicks h2").show();
  });
});