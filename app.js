let gameSeq = [];
let userSeq = [];

let btns = ["'yellow'", "red" , "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() *4);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);

    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        h2.innerHTML = `Game Over! Your SCORE was <b>${level}</b> <br> Press any Key to start.`;
        document.querySelector("body").style.backgroundcolor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundcolor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}