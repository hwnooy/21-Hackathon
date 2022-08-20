    function count() {
      var count = null;
      for(i=28; i>=0; i--){
        (function(x){
          count = setTimeout(function() {
            if (x==28) {
              alert("시간 초과!");
              window.location.replace("#");
            }
              document.getElementById("question_text").innerHTML = 28 - x;
          }, 1000*x);
        })(i);
      }
    }
    function typing() {
      document.getElementById("text_balloon").innerHTML = "int num = 0;<br>while (num < 1) {<br>System.out.println(\"I like Java \" + num);<br>num++;<br>}";
    }
    function tof() {
      if (document.getElementById("answer").value == "int num = 0;\nwhile (num < 1) {\nSystem.out.println(\"I like Java \" + num);\nnum++;\n}") {
        alert("I like Java 0\nI like Java 1");
        alert("정답이야!");
        window.location.replace("game_typing_6.html");
      }
      else {
        alert("ERROR");
        alert("아깝다, 틀렸어!");
        window.location.replace("#");
      }
    }
