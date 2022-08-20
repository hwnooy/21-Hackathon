let cursor = 0;

const scenario = [
    { "dialog1": "나는 곧바로 자리로 돌아가 상황을 살피기 시작했다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "이거 생각보다 심각한데...?",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "무슨 목적인지는 아직 모르겠으나, 해커들이 회사의 보안 시스템을 뚫어버린 모양이었다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "(방금 회의 때의 교수님 표정을 보니 회사 보안 시스템에 엄청난 자부심이 있으신 것 같던데...)",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "나는 머리를 싸매며 차근차근 문제를 해결해 나갔다.",
      "dialog2": "물론 간단한 게임으로 손쉽게 얻은 지식을 활요한 것이었으나,",
      "dialog3": "스스로 문제를 해결하고 있다고 생각하니 가슴이 설레는 것은 어쩔 수 없었다."},
    { "dialog1": "그러나 실전 경험이 전혀 없던 나로서는 이론만으로 이 문제를 해결하기 벅찼다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "방금까지는 계속 날 쳐다보더니, 이제는 스스로 해결해보고 싶은 마음이 든 거야?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "......!",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "조금 놀랐다.",
      "dialog2": "나도 모르게 문제 해결에 빠져들었던 모양이다.",
      "dialog3": ""},
    { "dialog1": "사실, 이번만큼은 도도에게 별로 도움을 요청하고 싶지 않았다.",
      "dialog2": "그러나 이미 상당히 긴 시간이 흐른 상태였다.",
      "dialog3": ""},
    { "dialog1": "사무실에는 타닥거리는 타자 소리와 함께 곳곳에서 앓는 소리가 터져 나왔다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "이건 이론만 알고 해결하기는 쉽지 않을 거야.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "마지막 능력을 줄게!",
      "dialog2": "앞으로도 기회는 많으니까, 다음부터 혼자 해결해보기로 하자!",
      "dialog3": ""},
    { "dialog1": "잠시 고민하던 나는 결정을 내렸다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "이번 게임은 뭐야?",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "<네 번째 게임 : 뱀 게임>",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "마지막 게임은 뱀 게임이야!",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "뱀 게임?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "랜덤으로 아무 위치에 생성되는 먹이를 쫓아가서 먹으면 돼!",
      "dialog2": "그러면 뱀처럼 몸이 점점 길어질 거야.",
      "dialog3": "먹이 10개 이상 먹으면 클리어! 할 수 있겠어?"},
    { "dialog1": "게임 속 먹이가 망할 해커들처럼 보였다.",
      "dialog2": "입꼬리가 삐뚜름하게 올라갔다.",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "모두 해치워버리자!",
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
