// gifs by https://giphy.com/AXEL_DE_STAMPA

let g;
let mostrarGif = false;
let timer = 0;

function preload() {
  // nada nessa manga  
  // let g1 = loadImage('assets/1.gif');
  // let g2 = loadImage('assets/2.gif');
  // let g3 = loadImage('assets/3.gif');
  // let g4 = loadImage('assets/4.gif');
}

function setup() {
  createCanvas(400, 400);
  frameRate(5); // soh para o 'carregando' ficar menos frenetico
}

function draw() {
  background(255);  
  
  if (!mostrarGif) {
    // interface porca para mostra que estah carregando
    rectMode(CENTER);
    rect(width/2,height/2,20*sin(timer),20*sin(timer));
  }
  
  timer++;
}

function mouseClicked() {
  mostrarGif = false;
  if (g != null) g.remove();
  carregarGif();
}

function carregarGif() {
  let qualGif = ceil(random(3));
  g = createImg('assets/' + qualGif + '.gif', 'Gifs by AXEL_DE_STAMPA', '', carregouGif);  
  console.log('Carregando ' + qualGif + '.gif');
}

function carregouGif() {
  g.position(0,0);
  mostrarGif = true;
  console.log("suavão, gif carregado!");  
}
