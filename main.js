$(function() {

  $('#chat-messagge').keypress(function(e){
      var messaggio = $('#chat-messagge').val()
      $('#chat-message').val("")
      if(e.which == 13) {
          $('.chat-sfondo').append('<div class="inviato">'+messaggio+'</div>')
          setTimeout(function() {
            $('.chat-sfondo').append('<div class="ricevuto">'+'<div class="square"></div>' + 'ciao' + '</div>')
          },1000);
      }
  });

  $('#filter').keyup(function() {
    var search = $('#filter').val();
    console.log(search);
    search = search.toLowerCase();
    var users = $('.users')
    users.each(function() {
      var conctatName = $(this).children('.users_text').children('h4')
      if (conctatName.text().toLowerCase().includes(search)){
        $(this).show()
      }
      else {
        $(this).hide()
      }
    })
  })
});
