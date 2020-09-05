// gifs by https://giphy.com/AXEL_DE_STAMPA

let g;
let gif;
let loading = false;
let splash = true;
let timer;
let loadingIconSize = 20;
let gifs = [];
let idCounter = 0;

function setup() {
    createCanvas(1000, 400);
    timer = new Timer();

}

function draw() {
    background(147,181,213); 

    if (splash) {
        textFont('Courier New');
        textAlign(CENTER,CENTER);
        text('Keep clicking...',width/2,height/2);
    } 
    if (loading) {
        // show loading icon
        rectMode(CENTER);
        rect(width/2,height/2,loadingIconSize*sin(timer),loadingIconSize*sin(timer));
    }
    timer.forward();

    for (let i = 0; i < gifs.length; i++) {
        gifs[i].show();        
    }

}

function mouseClicked() {
    splash = false;
    if (gifs.length >= 50) {
        let oldGif = gifs.shift();
        oldGif.kill();
        oldGif = null;
    }
    idCounter++;
    let newGif = new Gif(idCounter,constrain(mouseX,0,width-135),height-100,timer);
    gifs.push(newGif);    
}

function callback(loadedId) {
    return function() {
        for (let i = 0; i < gifs.length; i++) {
            if (gifs[i].id == loadedId) {
                gifs[i].loaded();
            }
        }
        console.log('Loaded ' + loadedId);
    }
}
