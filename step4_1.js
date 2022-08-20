let cursor = 0;


const scenario = [
    { "character" : "교수님",
      "dialog1": "잘 들었습니다. 지난 회의에서 문제 삼았던 부분을 잘 해결했네요.",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "보안 마스터가 된 나에게 이 정도는 껌이다. 괜히 어깨가 으쓱거렸다.",
      "dialog2": "그때, 선배가 문을 벌컥 열고 들어왔다.",
      "dialog3": ""},
    { "character": "선배",
      "dialog1": "사장님, 보안 시스템에 문제가 생겼습니다!",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "선배가 급하게 교수님께 상황 설명을 하는 모습이 보였다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "교수님",
      "dialog1": "다들 들었죠? 빨리 해결해야 하니까 서둘러 신경 써서 봐줘요.",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "그러던 도중, 교수님과 눈이 마주쳤다.",
      "dialog2": "교수님은 나를 빤히 바라보다 입을 열었다.",
      "dialog3": ""},
    { "character": "교수님",
      "dialog1": "김눈송 씨, 아까 회의 때 보니까 잘 하던데, 어때, 뭐 좀 알겠나요? 막아볼 수 있겠습니까?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "...네, 네...!? 한 번 보겠습니다!",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "갑작스런 상황에 큰 소리로 대답해버렸지만, 곧바로 후회했다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "(이제 이론은 알겠어. 그런데 적용은 어떻게 해야 하지?)",
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
      location.replace('step4_2.html');
    }

  }

  parse(cursor);
