    function count() {
      var count = null;
      for(i=34; i>=0; i--){
        (function(x){
          count = setTimeout(function() {
            if (x==34) {
              alert("시간 초과!");
              window.location.replace("#");
            }
              document.getElementById("question_text").innerHTML = 34 - x;
          }, 1000*x);
        })(i);
      }
    }
    function typing() {
      document.getElementById("text_balloon").innerHTML = "int num1 = 50;<br>int num2 = 100;<br>int big = (num1 > num2) ? num1 : num2;<br>System.out.println(\"큰 수: \" + big);";
    }
    function tof() {
      if (document.getElementById("answer").value == "int num1 = 50;\nint num2 = 100;\nint big = (num1 > num2) ? num1 : num2;\nSystem.out.println(\"큰 수: \" + big);") {
        alert("큰 수: 100");
        alert("정답이야! 마지막 문제도 파이팅!");
        window.location.replace("game_typing_7.html");
      }
      else {
        alert("ERROR");
        alert("아깝다, 틀렸어!");
        window.location.replace("#");
      }
    }
