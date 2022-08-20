let cursor = 0;

const scenario = [
    { "dialog1": "나는 서류를 힐끗 바라보았다. 여전히 알아볼 수 있는 내용은 없었다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "도도야… 이번 한 번만 그냥 능력 주라. 응?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "미안해 그건 안돼",
      "dialog2": "",
      "dialog3": ""},
    {"character": "김눈송",
    "dialog1": " 이 상태로 회의에 참석할 수는 없었다. …그래서 나는 결심했다.",
      "dialog2": "",
      "dialog3": ""},
    { "character" : "교수님",
      "dialog1": "김눈송 씨? 김눈송 씨 회의 안 왔나?",
      "dialog2": "교수님은 미간을 찌푸렸다",
      "dialog3": "김눈송 씨는 내일부터 볼 일 없겠군."}
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
