let cursor = 0;

const scenario = [
    { "character" : "???",
      "dialog1": "저기, 학생, 일어나 봐요.",
      "dialog2": "",
      "dialog3": ""},
    { "character" : "김눈송",
      "dialog1": "...어, 어?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도서관 관리인",
      "dialog1": "시간이 많이 늦었어요.",
      "dialog2": "이제 폐관해야 해요.",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "...네!?",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "창밖을 바라보았다. 이미 밖은 어두워져 있었다.",
      "dialog2": "나는 눈을 부비며 정신을 차리려 노력했다.",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "(그럼 이게 다 꿈이었다는 거야...?)",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "어느새 익숙해져버린 데스크탑 대신, 내 노트북이 눈에 들어왔다.",
      "dialog2": "하다 만 과제가 켜져 있었다.",
      "dialog3": ""},
    { "dialog1": "하지만 왠지 더 이상 지긋지긋하다는 생각은 들지 않았다.",
      "dialog2": "이제는 풀 수 있을 것 같다는 자신감에 미소가 지어졌다.",
      "dialog3": ""},
    { "dialog1": "가방을 챙기고 도서관 밖으로 나선 순간,",
      "dialog2": "동아리 단톡방에 공지가 하나 올라왔다.",
      "dialog3": ""},
    { "dialog1": "제1회 SMSWHackathon",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "[제1회 SMSWHackathon 신청]",
      "dialog2": "소프트웨어 해커톤 실신청이 오늘부터 시작됩니다!",
      "dialog3": "..."},
    { "character": "김눈송",
      "dialog1": "오... 재밌겠는데? 한 번 경험 삼아 해볼까?",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "나는 고민조차 하지 않고 바로 신청 폼을 작성하기 시작했다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "...♬",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "신청이 완료된 것을 확인한 뒤, 나는 콧노래를 부르며 가벼운 발걸음으로 집으로 향했다.",
      "dialog2": "",
      "dialog3": ""},,
    { "dialog1": "[ ENDING : 전진숙명 ]",
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
