export class enemy {
    jump = false;
    run = false;
    dx = 0;
    angle = 0;
    j=1;
    k=1;
    l=1;
    boxElm;
    constructor() {
        this.loadImages();
        this.addPlayer();
    }

    doRun(){
        if (this.boxElm.offsetLeft==-150 ){
            this.boxElm.style.left=`${innerWidth}px`;
            console.log(innerWidth);
        }else{
            this.boxElm.style.left=`${this.boxElm.offsetLeft-this.dx}px`;
            console.log(this.boxElm.offsetLeft);
        }
    }

    drawRun(){
        this.boxElm.style.backgroundImage = `url('img/Walk (${this.l++}).png')`;
        if(this.l === 10) this.l = 1;
    }

    addPlayer() {
        this.boxElm = document.createElement('div');
        this.boxElm.classList.add('boxEnemy');
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









