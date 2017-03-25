getQuote();

function getQuote() { 
  $("#quote").click(function(){
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies',
    type: 'POST',
    data: {},
    dataType:'json',
    success: function(data) {    
      $("#quote-display").text("\"" + data.quote + "\"" + " - " + data.author);  
      },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization",   "bTBF7sHUgOmshLzhmPB4gv4pWealp1zPZBfjsniFXuP9PuGfzx");} 
    });  
  });
}