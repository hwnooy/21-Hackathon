function count() {
  var count = null;
  for(i=4; i>=0; i--){
    (function(x){
      count = setTimeout(function(){
        if (x==4) {
          window.location.replace("game_typing_1.html");
        }
        else if (x==3) {
          document.getElementById("question_text").innerHTML = "START!";
          check++;
        } else {
          document.getElementById("question_text").innerHTML = 3 - x;
        }
      }, 1000*x);
    })(i);
  }
}
