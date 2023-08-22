const play = document.getElementById("play");
const pause = document.getElementById("pause");

let current = 1;

function startAudio() {
    const audio = new Audio(`library/${current}.mp3`);
    audio.play();
    play.style.display = "none";
    pause.style.display = "inline-block";
    pause.classList.add("anim")
    pause.addEventListener("click", () => {
        audio.pause();
        play.style.display = "inline-block";
        pause.style.display = "none";
    })

    audio.addEventListener("ended", updateCurrent)
}

function updateCurrent() {
    current += 1;
    startAudio();
}

play.addEventListener("click", startAudio)