const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const like = document.getElementById('like');

function Likelike() {
    return like.src.indexOf('like') > -1
}

function likeOn() {
    if (!likenlike()) {
        like.src = "./assets/botaomusica.png";
    }
}

function likeOff() {
    if (!Likelike()) {
        like.src = "./assets/botao-musica.svg";
    }
}

function likenlike() {
    like.src = "./assets/botaomusica.png";
}

turnOn.addEventListener('click', likeOn);
turnOff.addEventListener('click', likeOff);

// AUDIO

const plays = document.getElementById('plays')

plays.addEventListener('click', function(){
    const audio = document.querySelector('audio')
    audio.play()
})
