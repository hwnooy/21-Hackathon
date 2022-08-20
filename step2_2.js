let cursor = 0;

const scenario = [
    { "character" : "선배",
      "dialog1": " 아, 김눈송 씨 오셨어요? 이 의사코드대로 코드 작성해주시면 돼요. 지금 깃허브에 올려놓을게요.",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "java 마스터가 되어서 그런지, 내 머리는 빠르게 코드를 작성해나갔다",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "(이 능력 괜찮은데?)",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": " 그러던 그때, 선배 컴퓨터의 전원이 꺼졌다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "태평이",
      "dialog1": "야옹~",
      "dialog2": "",
      "dialog3": ""},
    {"character": "김눈송",
    "dialog1": "아무래도 태평이가 멀티탭 전원을 꺼버린 듯했다. 태평이는 아무 일도 없었다는 듯 태연하게 내 다리에 머리를 부비기 시작했다.",
      "dialog2": "나는 급히 선배의 눈치를 보기 시작했다. 그때, 선배에게 전화가 걸려왔다.",
      "dialog3": ""},
    { "character" : "선배",
      "dialog1": "아, 사장님. 네, 네. 네, 알겠습니다. 바로 가겠습니다. ",
      "dialog2": "",
      "dialog3": ""},
    { "character" : "김눈송",
      "dialog1": "(이 목소리는… 교수님 목소리인데?) ",
      "dialog2": "아무래도 여기서는 교수님이 사장님이 되어버린 모양이다.",
      "dialog3": ""},
    { "character": "선배",
      "dialog1": "김눈송 씨, 미안해요. 혹시 깃허브에 파일이 잘 올라갔는지 확인 좀 해줄 수 있을까요?",
      "dialog2": "오늘 안으로 끝내야 하는데… 그럼 저는 일이 있어서 잠시 가볼게요, 미안해요!",
      "dialog3": ""},
    { "dialog1": "나는 침착하게 컴퓨터를 다시 켜서 깃허브를 확인했다. ",
      "dialog2": "허브에 올라온 파일을 확인한 나는 내 눈을 의심했다. ",
      "dialog3": "의사코드 뿐만이 아니라, 여태 열심히 만든 작업물들이 모두 날아가버린 것이었다!"},
    { "character": "눈송이",
      "dialog1": "아… 어떡하지…?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "내가 도와줄까?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "어떻게?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "이번에도 간단한 게임을 하나 클리어하면 돼! ",
      "dialog2": "그러면 작업물들을 복원할 수 있는 능력을 줄게! 이번엔 기억력이 좀 좋아야 할 거야!",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "이번에도 단순한 게임 하나만 하면, java 마스터 같은 능력을 얻는 건가?)",
      "dialog2": "(나쁠 것이 없는 제안이었다.)",
      "dialog3": "좋아, 바로 시작하자!"},
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
      location.replace('game_card.html');
    }
  }

  parse(cursor);
