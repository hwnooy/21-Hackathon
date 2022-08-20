let cursor = 0;

const scenario = [
    { "character": "도도",
      "dialog1": "좋았어! 지금 바로 너에게 보안 지식들을 줄게!",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "나는 서류를 힐끗 바라보았다.",
      "dialog2": "",
      "dialog3": ""},
    {"character": "김눈송",
    "dialog1": "좋아, 이제 다 아는 내용이 됐어!",
      "dialog2": "나는 남은 시간 동안 회의 자료들을 살피고 ppt 제작, 발표 준비까지 완벽하게 마쳤다.",
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
