class Gif {

    constructor(id,x,y,timer) {
        this.id = id;
        this.position = createVector(x,y);
        this.file = ceil(random(6));
        this.timer = timer;
        this.zero = this.timer.getTime();
        this.loadingSize = 20;
        this.loading = true;
        this.gif = createImg('assets/' + this.file + '.gif', 'Gifs by AXEL_DE_STAMPA', '', callback(this.id));  
        console.log('Loading ' + this.id + '...');
        this.gif.hide();
    }

    show() {
        if (this.loading) {
            push();
            noFill();
            rectMode(CENTER);
            let loading = this.loadingSize*sin((this.zero+timer.getTime())*0.1);
            rect(this.position.x,this.position.y,loading,loading);
            pop();
        } 
    }

    loaded() {
        this.gif.size(100,AUTO);    
        this.gif.position(this.position.x,this.position.y);
        this.gif.show();
        this.loading = false;
    }

    kill() {
        this.gif.remove();
    }




}