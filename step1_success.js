let cursor = 0;

const scenario = [
    { "character": "도도",
      "dialog1": "축하해! 선물로 능력을 줄게!",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "능력? 무슨 능력?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "너는 이제... java 마스터야!",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "내가... java 마스터?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "후후, 어서 1906번째 코드를 수정해봐!",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "모니터로 시선을 돌렸다.",
      "dialog2": "...이럴 수가, 방금까지만 해도 하나도 알아볼 수 없던 외계어들을 분석할 수 있게 되었다!",
      "dialog3": ""},
    { "dialog1": "나는 무의식적으로 자판을 향해 손을 뻗었다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "...됐다.",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "코드를 수정하고, 침을 꿀꺽 삼키며 F5 키를 눌렀다.",
      "dialog2": "",
      "dialog3": ""},
    { "character" : "김눈송",
      "dialog1": "제발......!",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "아무런 오류 없이, 원하는 결과를 얻었다!",
      "dialog2": "나는 깜짝 놀라 자리에서 벌떡 일어났다.",
      "dialog3": ""},
    { "character": "???",
      "dialog1": "해결 했습니까?",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "익숙한 목소리가 들려왔다.",
      "dialog2": "반색하며 돌아보니, 교수님이 만족스럽다는 듯 고개를 끄덕이고 계셨다.",
      "dialog3": ""},
    { "character" : "교수님",
      "dialog1": "잘 해결됐군요. 수고하셨습니다.",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "교수님은 짧은 말 한마디만을 남기고는 사라지셨다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "휴... 잘 해결된 것 같네.",
      "dialog2": "진정 좀 할 겸 산책이나 하고 올까?",
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
      location.replace('step2_1.html');
    }
  }

  parse(cursor);
