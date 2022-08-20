let cursor = 0;

const scenario = [
    { "dialog1": "사무실 안에는 암울한 분위기가 맴돌았다.",
      "dialog2": "허망한 표정의 직원들이 멍하니 허공을 바라보았다.",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "망했다...",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "...",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "그렇게 나는 일자리를 잃었다.",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "[Bad Ending : 실직]",
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
      location.replace('game_snake.html');
    }
  }

  parse(cursor);
