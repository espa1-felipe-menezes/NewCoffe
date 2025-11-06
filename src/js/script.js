function troca(cor){
    document.body.style.background = cor;
}

let imagens = ["./src/assets/banner.png", "./src/assets/banner2.png", "./src/assets/banner3.png", "./src/assets/banner4.png"];

let i = 0;
let tempo = 3000;
let timer;

function slideShow(direction) {
  if (direction === 'left') {
    i--;
  } else if (direction === 'right') {
    i++;
  } else {
    i++; // autoplay
  }

  if (i < 0) i = imagens.length - 1;
  if (i >= imagens.length) i = 0;

  document.getElementById('banner').src = imagens[i];

  clearTimeout(timer);
  timer = setTimeout(slideShow, tempo); // autoplay loop
}


timer = setTimeout(slideShow, tempo);
slideShow()