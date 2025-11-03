function troca(cor){
    document.body.style.background = cor;
}

let imagens = [
    './src/assets/foto1.jpg',
    './src/assets/foto2.jpg',
    './src/assets/foto3.jpg',
    './src/assets/foto4.jpg',
]

let i = 0;
let tempo = 5000;
function slideShow(){
    
    document.getElementById('img').src = images[i]
    i++;
    if (i = imagens.length ){ i = 0;}
    setTimeout("slideShow()", tempo);
}
slideShow();