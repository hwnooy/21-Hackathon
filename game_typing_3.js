    function count() {
      var count = null;
      for(i=25; i>=0; i--){
        (function(x){
          count = setTimeout(function() {
            if (x==20) {
              alert("시간 초과!");
              window.location.replace("#");
            }
              document.getElementById("question_text").innerHTML = 20 - x;
          }, 1000*x);
        })(i);
      }
    }
    function typing() {
      document.getElementById("text_balloon").innerHTML = "System.out.println(\"3 >= 2: \" + (3 >= 2));";
    }
    function tof() {
      if (document.getElementById("answer").value == "System.out.println(\"3 >= 2: \" + (3 >= 2));") {
        alert("3 >= 2: true");
        alert("정답이야!");
        window.location.replace("game_typing_4.html");
      }
      else {
        alert("ERROR");
        alert("아깝다, 틀렸어!");
        window.location.replace("#");
      }
    }
