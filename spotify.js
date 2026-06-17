let play = document.getElementById('play');
let progressBar = getElementById('progressBar');
let audio = new Audio('1.mp3');

play.addEventListener('click' , () =>{
    if(audio.paused || audio.currentTime == 0){
        audio.play();
    }
})