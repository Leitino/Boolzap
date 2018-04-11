$(function() {

  $('#chat-messagge').keypress(function(e){
      var messaggio = $('#chat-messagge').val()
      $('#chat-message').val("")
      if(e.which == 13) {
          $('.chat-sfondo').append('<div class="inviato">'+messaggio+'</div>')
          setTimeout(function() {
            $('.chat-sfondo').append('<div class="ricevuto">'+ 'ciao' + '</div>')

          },1000);
      }
  });
});
