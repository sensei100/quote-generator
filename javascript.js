getQuote();

document.getElementById("tweet-btn").addEventListener("click", tweetQuote);

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

function tweetQuote() {
  var phrase = document.getElementById("quote-display").innerHTML;
    var encodedPhrase = encodeURIComponent(phrase);
    var url = "https://twitter.com/intent/tweet?text=" + encodedPhrase;
    window.open(url, 'tweetPage', 'resizable, scrollbars, height=550, width=500');
  };