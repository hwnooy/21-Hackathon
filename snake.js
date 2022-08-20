var y, x; // player
var ey, ex; //
var MY = 24, MX=  30;
var score; // 획득한 코인 개수
var keepMove;
var direction;
var speed;
var snakeQueue = new Array();

setting();

document.onkeydown = keyDownEventHandler;
function keyDownEventHandler(e){
    if(e.keyCode == 38 && direction != 1) direction = 0; // 상
    else if(e.keyCode == 40 && direction != 0) direction = 1; // 하
    else if(e.keyCode == 37 && direction != 3) direction = 2; // 좌
    else if(e.keyCode == 39 && direction != 2) direction = 3; // 우
}

function setting(){
    drawBoard();
    drawWall();
    y = parseInt(MY / 2);
    x = parseInt(MX / 2);
    setSnake(y, x);
    setEnemy();
    score = 0;
    direction = -1;
    speed = 75;
    keepMove = setInterval("move(direction)", speed);
}

function drawBoard(){
    var boardTag = "<table border = 0";
    for(var i = 0; i < MY; i++){
        boardTag += "<tr>";
        for(var j = 0; j < MX; j++)
            boardTag += "<td id=\""+String(i)+" "+String(j)+"\"></td>";
        boardTag += "</tr>";
    }
    boardTag += "</table>"
    document.write(boardTag);
}

function drawWall(){
    var wallCell = new Array();
    for(var i = 0; i < MY; i++) wallCell.push(new Array(i, 0));
    for(var i = 0; i < MY; i++) wallCell.push(new Array(i, MX-1));
    for(var i = 0; i < MX; i++) wallCell.push(new Array(0, i));
    for(var i = 0; i < MX; i++) wallCell.push(new Array(MY-1, i));
    for(var i = 0; i < wallCell.length; i++){
        var wy = wallCell[i][0];
        var wx = wallCell[i][1];
    }
}

function setSnake(y,x){
    snakeQueue.push(new Array(y,x));
    document.getElementById(String(y)+" "+String(x)).style.background = "#3060A5";
}

function removeSnake(){
    var ty = snakeQueue[0][0];
    var tx = snakeQueue[0][1];
    snakeQueue.shift();
    document.getElementById(String(ty)+" "+String(tx)).style.background = "#FFFFFF";
}


function move(direction){
    switch(direction){
        case 0: y -= 1; break;
        case 1: y += 1; break;
        case 2: x -= 1; break;
        case 3: x += 1; break;
        default: return;
    }
    if(isInvalidMove(y, x)) game_end();
    setSnake(y, x);
    meetEnemy();
    scoring();
}

function meetEnemy(){
    if(isCoin()){
        score+=100*(snakeQueue.length-1);
        setEnemy();
        showPlus();
        document.getElementById(String(y)+" "+String(x)).style.borderRadius = "3px";
    }
    else{
        removeSnake(y,x);
    }
}

function showPlus(){
    var plusedScore=100*(snakeQueue.length-1);
    document.getElementById("plus").innerHTML = "     +" + plusedScore;
    setTimeout("document.getElementById(\"plus\").innerHTML=\"\"", 500);
}

function isInvalidMove(y, x){
    return (y == 0 || y == MY-1 || x == 0 || x == MX-1) || isCollapsed(y, x);
}

function isCollapsed(y, x){
    if(isInQueue(y, x)) return true;
    return false;
}

function isInQueue(y, x){
    var p = new Array(y, x);
    for(var i = 0; i < snakeQueue.length; i++)
        if(snakeQueue[i][0] == p[0] && snakeQueue[i][1] == p[1])
            return true;
    return false;
}


function setEnemy(){
    do{
        var rand = parseInt(Math.random() * ((MY-2) * (MX-2)));
        ey = parseInt(rand / (MX-2)) + 1;
        ex = rand % (MX-2) + 1;
    } while(isInQueue(ey,ex))
    document.getElementById(String(ey) + " " + String(ex)).style.background = "#FF1D48";
    document.getElementById(String(ey) + " " + String(ex)).style.borderRadius = "6px";
}

function isCoin(){
    return (y == ey && x == ex);
}


function scoring(){
    document.getElementById("score").innerHTML = score;
}

function game_end(){
    alert("Score : " + score);
    if (score >= 5500) {
       alert("[Game Clear!]");
       location.replace('step4_success.html');
    }
    else {
       alert("[Game Over]");
       location.replace('step4_fail.html');
    }

}
