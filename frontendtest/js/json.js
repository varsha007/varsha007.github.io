

$(document).ready(function() {

  function driver_table(data) {

  $('table tbody').append(
    '<tr>' + '<td class="td_box">' +
      "<h1>"+data['position']+'&#176;'+"</h1>" +
      '<h5>Puntos</h5>' +
      '<h2>'+data['points']+'</h2>' + '</td>' +
    '<td class="flag">'+'<img src='+data['driver']+'></td>' +
    '<td class="flag">'+'<img src='+data['flag']+'></td>' +
    '<td class="name">' +
      '<h5>'+data['country']+'</h5>'+
      '<h1>'+data['name']+ '</h1>'+
      '<h2>'+data['team']+'</h2>'+
    '</td>'+
    '<td class="td_color">' +
      '<h5>ULTIMO GP</h5>'+
      '<h1>'+data['last_year']+'&#176;'+'</h1>'+
    '</td>'+
    '<td class="td_color">' +
      '<h5>VICTORIAS</h5>'+
      '<h1>'+data['victories']+'</h1>'+
    '</td>'+
    '<td class="td_color">' +
      '<h5>POLES</h5>'+
      '<h1>'+data['poles']+'</h1>'+
    '</td>'+
    '<td class="td_color">' +
      '<h5>MEJOR PUESTO</h5>'+
      '<h1>'+data['bpos']+'&#176;'+data['bposmult']+'</h1>'+
    '</td>'+
    +'</tr>'
  )
}

 $.getJSON('js/ranking.json', function(data) {
    $.each(data, function(){
      driver_table(this);
    })
  });

  $('#navigation ul a').click(function(){
    $('#navigation ul a').removeClass('selected');
    $(this).addClass('selected');
  });

  $('#navigation li a#tab2').click(function(){
    console.log('test');
    $("#content_changer").hide();
  });

  $('#navigation li a#tab1').click(function(){
    console.log('test');
    $("#content_changer").show();
  });

/************Server Provides Sorted Json Data****************/
  $('#content li button').click(function(){
    $('#content li button').removeClass('selected');
    $(this).addClass('selected');
  });

  $('#content li .clasification').click(function() {
    $('table tbody').empty();
    $('table tbody').replaceWith('<tbody>');
   $.getJSON('js/ranking.json', function(data) {
      $.each(data, function(){
        driver_table(this);
      })
    });
  });

 $('#content li .nombre').click(function() {
  $('table tbody').empty();
    $.getJSON('js/names.json', function(data) {
      $.each(data, function(){
        driver_table(this);
      })
    });
  });

  $('#content li .nationality').click(function() {
  $('table tbody').empty();
    $.getJSON('js/nationality.json', function(data) {
      $.each(data, function(){
        driver_table(this);
      })
    });
  });

});
