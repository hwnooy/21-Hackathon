let cursor = 0;

const scenario = [
    { "dialog1": "김눈송(21학번)에게 도서관은 코딩 작업실이다.",
      "dialog2": "",
      "dialog3": ""},
    { "character" : "노트북",
      "dialog1": "(ERROR!!)",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "$^%%ᅣ&(*@(&(*&)*@)*#)(@*)#!!!!!!!!!!",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "(오늘 같이 화창한 날에 도서관에 앉아 코딩이나 하고 있어야 한다니...",
      "dialog2": "하... 대체 나한테 왜 이러는 거야...)",
      "dialog3": ""},
    { "dialog1": "아무리 코드를 수정해도 계속 발생하는 에러에 나는 머리를 싸맸다.",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "설레는 마음으로 입학한지 9개월째, 이제 설레는 마음은 온데간데 없다.",
      "dialog2": "코딩노예가 되어 퀭한 눈으로 하루종일 노트북을 붙들고 있을 뿐...",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "(단순히 프로그래밍 언어만 공부하는 건데도 이 정도라니...",
      "dialog2": "내가 코딩에 재능이 없는 걸까? 전과할까...)",
      "dialog3": ""},
    { "dialog1": "검은 화면에 쓰여진 영문자들을 뚫어져라 보다 보니 점점 눈이 감겨왔다.",
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
      location.replace('step1.html');
    }
  }

  parse(cursor);
