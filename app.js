let gameSeq = [];
let userSeq = [];
let btns = ["green", "red", "yellow", "blue"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if( started === false) {
        console.log("Game Started");
        started = true;
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    }, 500);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 500);
}
function levelup() {
    level++;
    h2.innerText=`level ${level}`;
    let randIndex = Math.floor(Math.random() * 4);
    let randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameflash( randBtn);
    userSeq = [];
}

function btnPress(){
    console.log(this);
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for ( let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function checkAns() {
    let currentLevel = userSeq.length - 1;

    if (gameSeq[currentLevel] === userSeq[currentLevel]) {
        if (gameSeq.length === userSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over ! your score was <b> ${level} </b> Press any key to restart`;
        reset();
    }
}
    function reset() {
        gameSeq = [];
        userSeq = [];
        started = false;
        level = 0;
    }
