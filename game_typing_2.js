    function count() {
      var count = null;
      for(i=36; i>=0; i--){
        (function(x){
          count = setTimeout(function() {
            if (x==36) {
              alert("시간 초과!");
              window.location.replace("#");
            }
              document.getElementById("question_text").innerHTML = 36 - x;
          }, 1000*x);
        })(i);
      }
    }
    function typing() {
      document.getElementById("text_balloon").innerHTML = "int num1 = 10;<br>int num2 = 20;<br>int num3 = num1 + num2;<br>System.out.println(num3);";
    }
    function tof() {
      if (document.getElementById("answer").value == "int num1 = 10;\nint num2 = 20;\nint num3 = num1 + num2;\nSystem.out.println(num3);") {
        alert("30");
        alert("정답이야!");
        window.location.replace("game_typing_3.html");
      }
      else {
        alert("ERROR");
        alert("아깝다, 틀렸어!");
        window.location.replace("#");
      }
    }
