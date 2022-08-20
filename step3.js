let cursor = 0;

const scenario = [
    { "character" : "도도",
      "dialog1": " 1부터 100까지의 정수 중 아무 수나 주어질 거야~ 그 숫자를 맞추면 돼!",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "뭐? 그걸 내가 어떻게 맞춰?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "물론, 기회는 7번! 네가 말한 숫자보다 제시한 숫자가 큰지 작은지도 알려줄게! 그럼 시작하자~",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "",
      "dialog2": "",
      "dialog3": ""}
  ]
  const parse = (i = 0) => {

    const {character, dialog1, dialog2, dialog3, image} = scenario[i];

    //화면을 초기화
    document.getElementById('character').style.display = 'none';

    //텍스트 출력
    document.getElementById('dialog1').innerText = dialog1;
    document.getElementById('dialog2').innerText = dialog2;
    document.getElementById('dialog3').innerText = dialog3;

    //이름유무에 따른 출력
    if (!!character) {
      document.getElementById('character').style.display = 'grid';
      document.getElementById('character').innerText = character;
    }


    if (scenario.length-1 === cursor) {
      location.replace('game_number.html');
    }
  }

  parse(cursor);
