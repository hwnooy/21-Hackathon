let cursor = 0;

const scenario = [
  { "dialog1": " 자신만만하게 시작했지만, 생각보다 게임은 쉽지 않았다.",
    "dialog2": "",
    "dialog3": ""},
  { "character": "김눈송",
    "dialog1": "큰일났네… 도도, 능력 그냥 주면 안 돼?",
    "dialog2": "",
    "dialog3": ""},
  { "dialog1": "멀리서부터 발걸음 소리가 들려왔다. 심장이 쿵쿵 뛰기 시작했다. ",
    "dialog2": "",
    "dialog3": ""},
  { "character": "도도",
    "dialog1": "그럴 수는 없어! 이것도 최대한 쉽게 능력을 주려고 노력한 거란 말이야!",
    "dialog2": "",
    "dialog3": ""},
  { "dialog1": "발걸음 소리가 더욱 가까워졌다. 나는 눈을 질끈 감았다.",
    "dialog2": "",
    "dialog3": ""},
  { "character" : "교수님",
    "dialog1": "김눈송 씨? 이건… 저희가 자료를 공유하던 깃허브 OO 아닌가요?",
    "dialog2": "",
    "dialog3": ""},
  { "character" : "김눈송",
    "dialog1": "....",
    "dialog2": "",
      "dialog3": ""},
  { "character": "교수님",
    "dialog1": "여기 있던 자료는 다 어디 갔죠?",
    "dialog2": "",
    "dialog3": ""},
  { "character": "김눈송",
    "dialog1": "교수님, 아니, 사장님, 그, 그게…",
    "dialog2": "",
    "dialog3": ""},
  { "character": "교수님",
    "dialog1": "내일부터 나오지 마세요. 해고입니다.",
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
