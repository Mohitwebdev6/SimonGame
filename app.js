let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let hScore = 0;
let h2 = document.querySelector('h2');
let high = document.querySelector('h3');
let startBtn = document.querySelector('.start-btn');

startBtn.addEventListener("click", function () {
    if (started == false) {
        started = true;
        setTimeout(levelUp, 1000);
    }

})
function btnUserFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 200);
}
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnflash(randBtn);
}
function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = `Game Over! <br> Your Score is ${level}<br> press Restart `;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = "white";
        }, 100);
        if (level > hScore) {
            hScore = level;
            localStorage.setItem('hScore', hScore);
        }
        startBtn.innerText = "RESTART";

        reset();
    }
}

function btnPress() {
    let btn = this;
    btnUserFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);

}
let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    high.innerText = `High Score- ${localStorage.getItem('hScore')}`;
}
high.innerText = `High Score- ${localStorage.getItem('hScore')}`;


