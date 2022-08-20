function count() {
  var count = null;
  for(i=17; i>=0; i--){
    (function(x){
      count = setTimeout(function() {
        if (x==17) {
          alert("시간 초과!");
          window.location.replace("#");
        }
          document.getElementById("question_text").innerHTML = 17 - x;
      }, 1000*x);
    })(i);
  }
}
function typing() {
  document.getElementById("text_balloon").innerHTML = "System.out.println(\"Hello world\");";
}
function tof() {
  if (document.getElementById("answer").value == "System.out.println(\"Hello world\");") {
    alert("Hello World");
    alert("정답이야!");
    window.location.replace("game_typing_2.html");
  }
  else {
    alert("ERROR");
    alert("아깝다, 틀렸어!");
    window.location.replace("#");
  }
}
