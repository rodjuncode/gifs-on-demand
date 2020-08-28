class Timer {
    
    constructor() {
        this.t = 0;
    }

    forward() {
        this.t++;
    }

    getTime() {
        return this.t;
    }

}