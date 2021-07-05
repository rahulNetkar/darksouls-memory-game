let cards = document.querySelectorAll(".card");
let timePara = document.querySelector(".timer p");
let time = 0;
let min = 0;
let sec = 0;
let flips = 0;

function win() {
    let matched = document.querySelectorAll(".matched");
    if (matched.length == 12) {
        alert(
            `You completed in ${min}:${sec}.`
        );
    }
}

function shuffle() {
    cards.forEach((card) => {
        let ran = Math.floor(Math.random() * 10);
        card.style.order = ran;
    });
}

shuffle();

cards.forEach((card) => {
    card.addEventListener("click", () => {
        if (!card.classList.contains("flip") && flips < 2) {
            card.classList.add("flip");
            flips++;
        }
        if (flips == 2) {
            let flipped = document.querySelectorAll(".flip");
            setTimeout(() => {
                flips = 0;
                var s1 = flipped[0].childNodes[3].src;
                var s2 = flipped[1].childNodes[3].src;
                if (s1 == s2) {
                    flipped.forEach((card) => {
                        card.classList.add("matched");
                        win();
                    })
                }
                flipped.forEach((card) => card.classList.remove("flip"));
            }, 1000);
        }
    })
})

setInterval(() => {
    time++;
    min = Math.floor(time / 60);
    sec = time % 60;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    timePara.innerHTML = `${min}:${sec}`;
}, 1000);

