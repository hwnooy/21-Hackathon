    function count() {
      var count = null;
      for(i=32; i>=0; i--){
        (function(x){
          count = setTimeout(function() {
            if (x==32) {
              alert("시간 초과!");
              window.location.replace("#");             // 임의 링크 삽입
            }
              document.getElementById("question_text").innerHTML = 32 - x;
          }, 1000*x);
        })(i);
      }
    }
    function typing() {
      document.getElementById("text_balloon").innerHTML = "if (3 < 5)<br>System.out.println(\"3 < 5 is true\");<br>else<br>System.out.println(\"3 < 5 is false\");";
    }
    function tof() {
      if (document.getElementById("answer").value == "if (3 < 5)\nSystem.out.println(\"3 < 5 is true\");\nelse\nSystem.out.println(\"3 < 5 is false\");") {
        alert("3 < 5 is true");
        alert("정답이야! 수고했어~");
        window.location.replace("#");                         // 임의 링크 삽입 (진엔딩 루트)
      }
      else {
        alert("ERROR");
        alert("아깝다, 틀렸어!");
        window.location.replace("#");                         // 임의 링크 삽입
      }
    }
