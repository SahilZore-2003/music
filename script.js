const play = document.getElementById("play");

let current = 1;

function startAudio(){
    const audio = new Audio(`library/${current}.mp3`);
    audio.play();
    play.classList.add("anim")

   audio.addEventListener("ended",updateCurrent)
}

function updateCurrent(){
    current+=1;
    startAudio();
}

play.addEventListener("click",startAudio)