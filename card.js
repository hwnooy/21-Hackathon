var srcs = [];  //cards는 주소, src는 이미지_console창 확인 가능
var cards;
  window.onload = function() { //반복문 이용해서 이미지 넣기
    var put = '';
    put +=("<br\>");
    var count=0;
    for(var k=0; k<2; k++){
      for(var i=1; i<2; i++){   //i
        for(var j=1; j<13; j++){  //j
          put += '<img src="cardImage//'+i+'_'+j+'.png">';
          count++;
          if(count%6==0) put +=("<br\>");
        }
      }
  }
  var divtag = document.querySelector('div');

  divtag.innerHTML = put;
  //값 불러오기
  var btns = document.querySelectorAll('button');
  cards = document.querySelectorAll('img');
  // '뒤집기' button
  // 0.성공_srcs[](임시배열)사용
  for(var i=0; i<cards.length; i++){
    srcs[i] = cards[i].src;
  }

  btns[0].onclick = function show(){
    for(var i=0; i<cards.length; i++){
        cards[i].src = srcs[i];
     }
 }
  //'감추기'button

  btns[1].onclick = function(){
    for(var i=0; i<cards.length; i++){
       cards[i].src = "cardback.jpg";
    }
}
  //'섞기'button

  // 0.성공_sort.Math.random() 사용

  btns[2].onclick = function(){
    srcs.sort((a, b) => Math.random() -0.5);
    for(var i=0; i<cards.length; i++){
        cards[i].src = srcs[i];
    }
  }
  //'카드 클릭 시 이미지 변경'
  //0. onclick, id(this.id), 외부 function flip(i) 사용
  for(var i=0; i<cards.length; i++){
    cards[i].setAttribute("id", i);
  }

  for(var i=0; i<cards.length; i++){
    cards[i].setAttribute("onclick", "flip(this.id)");
  }
}

var pickarr = [];
var arrnum = 0;
var prenum;
var count = 0;
function flip(i){
  cards[i].src = srcs[i];
  pickarr[arrnum++]= srcs[i];
  //첫번째 카드 id 저장
  if(arrnum == 1){
    prenum = i;
  }


  if(arrnum == 2){
    if(pickarr[0] == pickarr[1]){
        setTimeout(function(){
          alert("정답입니다.");},700);
          count += 2;
      } else{
        setTimeout(function(){
          cards[prenum].src = "cardback.jpg";
          cards[i].src = "cardback.jpg";
          } ,1000);
          setTimeout(function(){
            alert("틀렸습니다.");},700);
      }
      arrnum = 0;
  }

  if(count == 40){
    setTimeout(function(){
      alert("게임 종료!");},700);
  }
}
