let play = document.getElementById('play');
let progressBar = document.getElementById('progressBar');
let audio = new Audio('1.mp3');

play.addEventListener('click' , () => {
    if(audio.paused || audio.currentTime == 0){
        audio.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    } else{
        audio.pause();
         play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
    }
});
  audio.addEventListener('timeupdate', () =>{
    if(audio.duration){
    let progress = (audio.currentTime / audio.duration) * 100;
     progressBar.style.background = `linear-gradient(to right, #88dfa9 ${progress}%, #333 ${progress}%)`;
    progressBar.value = progress;
}
  });

progressBar.addEventListener('input', function() {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #88dfa9 ${value}%, #333 ${value}%)`;
    audio.currentTime = (value/100) * audio.duration;
    audio.currentTime = (progressBar.value * audio.duration) /100;
});
let playMusic = Array.from(document.getElementsByClassName('playMusic'));
makeAllPlay = () => {
    playMusic.forEach((element) => {
      element.classList.remove('fa-pause');
      element.classList.add('fa-play');
    })
}
playMusic.forEach((element) => {
    element.addEventListener('click', (e) => {

        if (e.target.classList.contains('fa-pause')) {
            audio.pause();
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
        } else {
            makeAllPlay();
            audio.play();
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
        }
     index = e.target.id;
     audio.src = `Audio/${index}.mp3`;
     audio.currentTime = 0;
     audio.play();
    });
});
const searchInput = document.querySelector('.input-box');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('keyup', () => {
    const searchValue = searchInput.value.toLowerCase();

    cards.forEach((card) => {
        const title = card.querySelector('.img-title h3')
                          .innerText
                          .toLowerCase();

        if (title.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

