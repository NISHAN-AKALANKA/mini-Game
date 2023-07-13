export class player {
    jump = false;
    run  = false;
    dx   = 0;
    angle = 0;
    j=1;
    k=1;
    l=1;
    boxElm;
    constructor() {
        this.loadImages();
        this.addPlayer();
    }

    doJump(){
        let y  = Math.cos(this.angle * (Math.PI / 180));
        y *= 4 ;
        console.log(y,(this.boxElm.offsetTop - y),this.boxElm.style.top);
        this.boxElm.style.top = (this.boxElm.offsetTop - y) + "px";
        this.angle++;
        if (this.angle >  180 ){
            this.jump = false;
            this.angle = 0;
        }
    }
    doRun(){
        let x = this.boxElm.offsetLeft + this.dx;
        if ((x + this.boxElm.offsetWidth)> innerWidth) {
            x = innerWidth - this.boxElm.offsetWidth;
        }else if (x <= 0) x = 0;
        this.boxElm.style.left = `${x}px`;
    }

    drawIdle(){
        this.boxElm.style.backgroundImage = `url('img/Idle (${this.j++}).png')`;
        if(this.j === 10)this.j = 1;
    }


    drawJump(){
        this.boxElm.style.backgroundImage = `url('img/Jump (${this.k++}).png')`;
        if(this.k === 12) this.k = 1;
    }

    drawRun(){
        this.boxElm.style.backgroundImage = `url('img/Walk (${this.l++}).png')`;
        if(this.l === 10) this.l = 1;
    }

    addPlayer() {
        this.boxElm = document.createElement('div');
        this.boxElm.classList.add('box');
        document.getElementById('background').append(this.boxElm);
    }
    loadImages() {
        for (this.i = 1; this.i <= 10; this.i++) {
            const image = new Image();
            image.src = `img/Idle (${this.i}).png`;
        }
        for ( this.i = 1; this.i <= 10; this.i++) {
            const image = new Image();
            image.src = `img/Walk (${this.i}).png`;
        }


    }

}









