let cards = document.querySelectorAll('.card');
let timePara = document.querySelectorAll('.timer p');
let time = 0;
let min = 0;
let sec = 0;
let flips = 0;

function win() {
    let matched = document.querySelectorAll('.matched');
    if (matched.length == 12) {
        alert(
            `You completed in ${min}:${sec}.`
        );
    }
}

function shuffle() {
    cards.forEach((card) => {
        let ran = Math.floor(Math.random * 10);
        card.style.order = ran;
    })
}

shuffle();

setInterval(() => {
    time++;
    min = Math.floor(time / 60);
    sec = time % 60;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    timePara.innerHTML = `${min}:${sec}`;
}, 1000);