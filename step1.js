let cursor = 0;

const scenario = [
    { "character": "???",
      "dialog1": "김눈송 씨!!!",
      "dialog2": "",
      "dialog3": ""},
    { "character" : "김눈송",
      "dialog1": "...?",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "소리가 나는 방향으로 고개를 돌리니, 같은 과 선배가 있었다.",
      "dialog2": "졸던 나를 깨워준 건가...",
      "dialog3": "그런데 책상 위에 내 노트북 대신 처음 보는 데스크탑이 놓여 있었다."},
    { "character": "김눈송",
      "dialog1": "(여기는 어디지?)",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "어리둥절한 채로 주변을 둘러보았다.",
      "dialog2": "",
      "dialog3": ""},
    { "character" : "김눈송",
      "dialog1": "(여기는... 강의실...?",
      "dialog2": "난 분명 방금까지 도서관에서 프로그래밍개론 과제를 하고 있었는데...)",
      "dialog3": ""},
    { "character": "선배",
      "dialog1": "김눈송 씨, 졸린 건 알겠는데... 어제 작성하신 코드 좀 봐주실래요?",
      "dialog2": "1906번째 줄부터 잘못 작성되어 있는 것 같아서요.",
      "dialog3": "수정 좀 해주세요."},
    { "character": "김눈송",
      "dialog1": "네? 1906번째 줄이요...?",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "...이상하다. 나는 그렇게 긴 코드를 쓴 적이 없다.",
      "dialog2": "아니, 쓸 수도 없다.",
      "dialog3": ""},
    { "character" : "선배",
      "dialog1": "네. 아, 마침 작업 중이셨나 봐요.",
      "dialog2": "이 부분 고쳐 주시면 돼요.",
      "dialog3": ""},
    { "dialog1": "선배는 말을 마치자마자 자리를 떠났다.",
      "dialog2": "나는 멍하니 모니터를 바라보았다.",
      "dialog3": "이런 언어는 본 적이 없는데..."},
    { "dialog1": "잠깐, 이 확장자는... java???",
      "dialog2": "나는 단언컨대 한평생 java를 써본 적이 없다.",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "내가 아는 건 파이썬 뿐인데?",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "방금까지 프로그래밍개론 과제로 헤매던 내가 java를 해야 한다니,",
      "dialog2": "말도 안 되는 일이다.",
      "dialog3": "아니, 이 문제는 둘째 치고, 이 상황 자체가 이해되지 않았다."},
    { "dialog1": "다시 주위를 둘러보니, 강의실이 여러 대의 데스크탑으로 가득 차 있었다.",
      "dialog2": "이건 마치 사무실 같은...",
      "dialog3": ""},
    { "dialog1": "어질어질한 정신으로 모니터를 바라봤다.",
      "dialog2": "뛰쳐나가고 싶은 심정이 되었을 때쯤, 창밖에서 목소리가 들려왔다.",
      "dialog3": ""},
    { "character": "???",
      "dialog1": "내가 도와줄까?",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "독수리가 말을 한다...",
      "dialog2": "계속해서 이어지는 충격적인 사건 때문에 정신을 차리기 힘들었다.",
      "dialog3": ""},
    { "character": "???",
      "dialog1": "일단 창문 좀 열어줘!",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "당황스럽긴 했지만, 가만히 둘 수도 없는 노릇이고...",
      "dialog2": "결국 나는 창문을 열어주었다.",
      "dialog3": ""},
    { "character": "???",
      "dialog1": "고마워!",
      "dialog2": "",
      "dialog3": ""},
    { "character" : "김눈송",
      "dialog1": "넌 누구야?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "난 공대생을 수호하고 있는 멋지고 똑똑한 독수리야!",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "뭐?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "사실 널 여기로 데려온 건 나야.",
      "dialog2": "방금까지 전과를 고민하고 있었지? 그건 안 돼.",
      "dialog3": "넌 IT 분야의 길을 걸을 숙명이거든!"},
    { "character" : "김눈송",
      "dialog1": "내가...?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "그럼! 그러니까 지금부터 네가 코딩에 관심을 가질 수 있도록 도와줄게!",
      "dialog2": "그러기 위해서는 간단한 게임을 클리어 해야 해.",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "지금부터 내가 제시한 코드를 시간 내로 그대로 따라 쓰면 돼!",
      "dialog2": "준비됐어?",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "어, 어!? 감자기?",
      "dialog2": "",
      "dialog3": ""},
    { "character" : "도도",
      "dialog1": "하나도 틀리면 안 돼!",
      "dialog2": "다 맞아야 통과!",
      "dialog3": "그럼 시작하자~!"},
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
      location.replace('step1_success.html');
    }
  }

  parse(cursor);
