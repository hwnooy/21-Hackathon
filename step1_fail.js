let cursor = 0;

const scenario = [          // 해고 엔딩 루트
    { "character": "도도",
      "dialog1": "이런, 큰일났네...",
      "dialog2": "이러면 능력을 받을 수 없어!",
      "dialog3": ""},
    { "character" : "김눈송",
      "dialog1": "능력? 무슨 능력?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "???",
      "dialog1": "아직도 해결 못했습니까?",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "익숙한 목소리가 들려왔다.",
      "dialog2": "반색하며 돌아보려던 찰나...",
      "dialog3": ""}
    { "character": "교수님",
      "dialog1": "김눈송 씨, 안 되겠네요.",
      "dialog2": "내일부터 나오지 마세요.",
      "dialog3": ""},
    { "dialog1": "[Bad Ending : 해고]",
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
      document.getElementById('next').style.display = 'none';
    }
  }

  parse(cursor);
