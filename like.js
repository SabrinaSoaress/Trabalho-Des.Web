const items = [
    {
        id: 0,
        nome: ' Makgeolli ',
        img: './assets/Makgeolli.jpg',
        Likes: 0
    },

    {
        id: 1,
        nome: ' Soju ',
        img: './assets/soju.jpg',
        Likes: 0
    },

    {
        id: 2,
        nome: ' Kimbap ',
        img: './assets/kimbap.jpg',
        Likes: 0
    },

    {
        id: 3,
        nome: ' Tteokbboki ',
        img: './assets/tteokbokki.jpg',
        Likes: 0
    },
    {
        id: 4,
        nome: ' Jjajangmyoun ',
        img: './assets/jjajangmyoun.jpeg',
        Likes: 0
    },
    {
        id: 5,
        nome: ' Bibimbap ',
        img: './assets/bibimbap.jpg',
        Likes: 0
    },
    {
        id: 6,
        nome: ' Bulgogi ',
        img: './assets/bulgogi.jpg',
        Likes: 0
    },
    {
        id: 7,
        nome: ' Kimchi ',
        img: './assets/kimchi.jpg',
        Likes: 0
    },
]

inicializarLoja = () => {
    var containercomidas = document.getElementById('comidas');
    items.map((val) => {
        containercomidas.innerHTML += `
        <div class="comida-single">
        <img src="`+ val.img + `"/>
        <p>`+ val.nome + `</p>
        <a key="`+ val.id + `" href="#">Gostei!!</a>
        </div>
        `;
    })
}

inicializarLoja();

atualizarlike = () => {
    var containerlike = document.getElementById('like');
    containerlike.innerHTML = "";
    items.map((val) => {
        if(val.Likes > 0){
        containerlike.innerHTML += `
        <div class="checkout">
        <p style="float:left;">Comida: `+val.nome+`</p>
        <p style="float:right;">Likes: `+val.Likes+`</p>
        <div style="clear:both"></div>
        `;
        }
    })
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(){
       let key = this.getAttribute('key');
       items[key].Likes++;
       atualizarlike();
       return false;
    })
}