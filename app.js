let h2 = document.querySelector('h2');
let btn = document.querySelectorAll('.btn');
console.dir(btn);
let c=0;
window.addEventListener("keydown", function run() {
    function apply(bt) {
        bt.style.animation = "change";
        bt.style.animationDuration = "1s";
        setTimeout(() => {
            bt.style.animation = "none";
        }, 300)
    }
    let count = "";
    let change = () => {
        let x = Math.floor((Math.random() * 4));
        console.log(x);
        if (x == 0) {
            let btn0 = document.querySelector('.red');
            apply(btn0);
        }
        else if (x == 1) {
            let btn1 = document.querySelector('.green');
            apply(btn1);
        }
        else if (x == 2) {
            let btn2 = document.querySelector('.yellow');
            apply(btn2);
    
        }
        else if (x == 3) {
            let btn3 = document.querySelector('.purple');
            apply(btn3);
        }
        count = count + `${x}`;
    }
    
    setTimeout(change);
    setTimeout(change, 1000);
    setTimeout(change, 2000);
    setTimeout(() => {
        console.log(count);
    
    }, 2000);
    let userI = "";
    function user() {
        userI = prompt("ENter:");
    }
    setTimeout(user, 2500);
    c=c+1;
    setTimeout(() => {
        if (count == userI) {
            h2.innerText = `level ${c}`;
            run();
        }
        else {
            h2.innerHTML=`Better luck next time<br>Your score is ${c}`
        }
    }, 2500);
})





