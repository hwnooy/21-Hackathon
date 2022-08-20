let cursor = 0;

const scenario = [
    { "dialog1": "게임을 마치자마자, 나는 급하게 도도를 바라보았다.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "좋아, 마지막 선물이야!",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "...!",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "나는 급하게 손가락을 놀리기 시작했다.",
      "dialog2": "게임을 하느라 시간이 꽤나 많이 지체됐다.",
      "dialog3": "더 이상 여유부리고 있을 틈이 없었다."},
    { "dialog1": "심장이 쿵쿵 뛰었다.",
      "dialog2": "끝이 보였다.",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "성공했다...!",
      "dialog2": "",
      "dialog3": ""},
    { "dialog1": "사무실은 직원들이 환호하는 소리로 가득 찼다.",
      "dialog2": "나도 뿌듯함에 웃음이 절로 나왔다.",
      "dialog3": "그런데 그때, 도도가 말을 걸어왔다."},
    { "character": "도도",
      "dialog1": "음... 기뻐하는 와중에 미안하지만, 시간이 다 됐어!",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "뭐?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "알고 있었겠지만, 이건 네가 코딩에 관심을 가질 수 있도록 내가 만들어낸 꿈이야.",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "잠깐, 뭔가 이상하긴 했었지만... 꿈이었다고?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "응! 몇 시간 전에 전과 고민하고 있었지? 지금은 어때?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "...글쎄, 생각보다 꽤 재밌었어.",
      "dialog2": "이런 실력만 있다면 계속 즐겁게 할 수 있을 것 같아.",
      "dialog3": ""},
    { "character": "도도",
      "dialog1": "꿈에서 깨어나면 지금의 능력들을 전부 잃어버린다고 해도?",
      "dialog2": "",
      "dialog3": ""},
    { "character": "김눈송",
      "dialog1": "괜찮아! 덕분에 코딩에 관심이 생겼거든.",
      "dialog2": "이제는 나 스스로 노력해서 실력을 쌓아서 성과를 내고 싶어!",
      "dialog3": ""},
    { "dialog1": "수고했다고, 앞으로도 응원하겠다는 말이 들린 것도 같다.",
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
      location.replace('end.html');
    }
  }

  parse(cursor);
