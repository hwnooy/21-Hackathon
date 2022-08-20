    function count() {
      var count = null;
      for(i=26; i>=0; i--){
        (function(x){
          count = setTimeout(function() {
            if (x==26) {
              alert("시간 초과!");
              window.location.replace("#");
            }
              document.getElementById("question_text").innerHTML = 26 - x;
          }, 1000*x);
        })(i);
      }
    }
    function typing() {
      document.getElementById("text_balloon").innerHTML = "byte n1 = 5;<br>byte n2 = 3;<br>byte r = (byte)(n1 & n2);<br>System.out.println(r);";
    }
    function tof() {
      if (document.getElementById("answer").value == "byte n1 = 5;\nbyte n2 = 3;\nbyte r = (byte)(n1 & n2);\nSystem.out.println(r);") {
        alert("1");
        alert("정답이야!");
        window.location.replace("game_typing_5.html");
      }
      else {
        alert("ERROR");
        alert("아깝다, 틀렸어!");
        window.location.replace("#");
      }
    }
