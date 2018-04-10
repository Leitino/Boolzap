$(function() {

  $('#chat-messagge').keypress(function(e) {
      if(e.which == 13) {
          $('.chat-sfondo').append('ciao')
      }
  });
});
