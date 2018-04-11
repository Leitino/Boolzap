$(function() {

  $('#chat-messagge').keypress(function(e){
      var messaggio = $('#chat-messagge').val()
      $('#chat-message').val("")
      if(e.which == 13) {
          $('.chat-sfondo').append('<div class="inviato">'+messaggio+'</div>')
      }
  });
  //realizzo metodo di ricerca//
  $('#filter').keypress(function(e){
    if (e.which == 13) {
      $('.users')


    }

  })
});
