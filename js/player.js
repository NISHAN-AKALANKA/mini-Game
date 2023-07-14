export class player {
    jump = false;
    run  = false;
    dx   = 0;
    angle = 0;
    j=1;
    k=1;
    l=1;
    m=1;
    died=false;
    boxElm;
    offSetX=0;
    offSetY=0;
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
        this.offSetX=this.boxElm.offsetLeft+150;
        if (this.angle >  180 ){
            this.jump = false;
            this.angle = 0;
            this.offSetX=this.boxElm.offsetLeft+150;
        }
        this.offSetY=this.boxElm.offsetTop+150;
    }
    doRun(){
        let x = this.boxElm.offsetLeft + this.dx;
        if ((x + this.boxElm.offsetWidth)> innerWidth) {
            x = innerWidth - this.boxElm.offsetWidth;
            this.offSetX=this.boxElm.offsetLeft+150;
        }else if (x <= 0) x = 0;
        this.boxElm.style.left = `${x}px`;
        this.offSetX=this.boxElm.offsetLeft+150;
        this.offSetY=this.boxElm.offsetTop+150;
    }
    doDie(){
        this.drawDie();
        if (this.m==8)
        this.boxElm.style.backgroundImage = `url('img/Dead (8).png')`;
    }


    drawIdle(){
        this.boxElm.style.width="120px";
        this.boxElm.style.backgroundImage = `url('img/Idle (${this.j++}).png')`;
        if(this.j === 10)this.j = 1;
        this.offSetX=this.boxElm.offsetLeft+this.boxElm.offsetWidth;
        this.offSetY=this.boxElm.offsetTop+this.boxElm.offsetHeight;
    }


    drawJump(){
        this.boxElm.style.width="140px";
        this.boxElm.style.backgroundImage = `url('img/Jump (${this.k++}).png')`;
        if(this.k === 12) this.k = 1;
    }

    drawRun(){
        this.boxElm.style.width="120px";
        this.boxElm.style.backgroundImage = `url('img/Walk (${this.l++}).png')`;
        if(this.l >= 10) this.l = 1;
    }

    drawDie(){
        this.boxElm.style.width="220px";
        this.boxElm.style.rotateX="deg(180)";
        if(this.m>=8) this.boxElm.style.backgroundImage = `url('img/Dead (8).png')`;
        else {
            console.log("m= "+this.m);
            this.boxElm.style.backgroundImage = `url('img/Dead (${this.m++}).png')`;
        }
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
        for ( this.p = 1; this.p <= 8; this.p++) {
            const image = new Image();
            image.src = `img/Dead (${this.p}).png`;
        }



    }

}









