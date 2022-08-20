let cursor = 0;

const scenario = [
    { "character" : "김눈송",
      "dialog1": " 이게 대체 무슨 일이지? 꿈인가?",
      "dialog2": "",
      "dialog3": ""},
    { "character" : "김눈송",
      "dialog1": "아무리 생각해봐도 이상했다. 난 분명 도서관에서 프로그래밍개론 과제를 하던 중이었는데…",
      "dialog2": "C언어 기초에도 쩔쩔매던 내가 단순한 타자 게임 후 java 마스터가 되어버렸다.",
      "dialog3": "…뭐, 싫지는 않은데"},
    { "character": "???",
      "dialog1": "야옹~",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "그 소리의 주인공은 태평이었다. 태평이는 내 다리에 제 머리를 부비며 계속 야옹거렸다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "(배가 고픈가…?)",
      "dialog2": "나는 도도를 빤히 바라보았다.",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "왜?",
      "dialog2": "",
      "dialog3": ""},
    { "character" : "김눈송",
      "dialog1": " 도도야, 태평이가 배고파 보이는데, 혹시 줄 만한 거 있니? ",
      "dialog2": "",
      "dialog3": ""},
    { "character" : "도도",
      "dialog1": "…난 독수리인데 고양이 밥을 가지고 다닐 리가 없잖아! ",
      "dialog2": "그리고 챙길 거면 나부터 챙겨줘야하는 거 아니야? 내가 널 java 마스터로 만들어줬는데!",
        "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "방금 게임할 때 내 간식 훔쳐 먹는 거 다 봤거든?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "방금 게임할 때 내 간식 훔쳐 먹는 거 다 봤거든?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "....어서 밥 구해올게!",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "몇 분 뒤, 도도가 사료를 가져왔다.",
      "dialog2": "그릇에 사료를 조금 담아주니, 태평이가 사료를 허겁지겁 먹기 시작했다.",
      "dialog3": "그때, 전화가 왔다."},
    { "character": "선배",
      "dialog1": "김눈송 씨, 지금 어디예요? 지금 작성해주셔야 하는 코드가 있는데…",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "나는 태평이를 흐뭇하게 바라보다 명신관으로 향했다",
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
      location.replace('step2_2.html');
    }
  }

  parse(cursor);
