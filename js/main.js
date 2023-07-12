import {player} from "./player.js";


document.body.addEventListener('click', ()=> document.body.requestFullscreen());

let run = false;
const player1=new player();



document.body.addEventListener('keydown', (eventData)=> {
    if (eventData.code === 'Space'){
        player1.jump = true;
    }else if (eventData.code === 'ArrowRight'){
        player1.boxElm.style.transform = 'rotateY(0deg)'
        run = true;
        player1.dx =2;
    }else if (eventData.code === 'ArrowLeft'){
        player1.boxElm.style.transform = 'rotateY(180deg)';
        run = true;
        player1.dx =-2;
    }
});

document.body.addEventListener('keyup', (eventData) => {
    if (eventData.code === 'ArrowRight'){
        run = false;
        player1.dx = 0;
    }else if (eventData.code === 'ArrowLeft'){
        run = false;
        player1.dx = 0;
    }
});

setInterval(()=> {
    if (player1.jump){
        player1.doJump();
    }
    if (run){
        player1.doRun();
    }
}, 4);
``
setInterval(()=> {
    if (!player1.jump && !run){
        player1.drawIdle();
    }else if (player1.jump){
        player1.drawJump();
    }else if (!player1.jump && run){
        player1.drawRun();
    }
} , (1000/20));