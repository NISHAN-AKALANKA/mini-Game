import {player} from "./player.js";
import {enemy} from "./enemy.js";


document.body.addEventListener('click', ()=> document.body.requestFullscreen());

let run = false;
const player1=new player();
player1.run =false;
const enemy1=new enemy();
enemy1.run=true;
enemy1.dx=2;



document.body.addEventListener('keydown', (eventData)=> {
    if (eventData.code === 'Space'){
        player1.jump = true;
    }else if (eventData.code === 'ArrowRight'){
        player1.boxElm.style.transform = 'rotateY(0deg)'
        player1.run = true;
        player1.dx =2;
    }else if (eventData.code === 'ArrowLeft'){
        player1.boxElm.style.transform = 'rotateY(180deg)';
        player1.run = true;
        player1.dx =-2;
    }
});

document.body.addEventListener('keyup', (eventData) => {
    if (eventData.code === 'ArrowRight'){
        player1.run = false;
        player1.dx = 0;
    }else if (eventData.code === 'ArrowLeft'){
        player1.run = false;
        player1.dx = 0;
    }
});

setInterval(()=> {
console.log(enemy1.boxElm.offsetWidth);
console.log("working");
    if (player1.jump){
        player1.doJump();
    }
    if (player1.run){
        player1.doRun();
    }
    if (player1.died){
        // player1.doDie();
    }
}, 4);
setInterval(()=> {
    if ((((player1.offSetX-enemy1.offSetX)<=(enemy1.boxElm.offsetWidth+player1.boxElm.offsetWidth))&&((player1.offSetX-enemy1.offSetX)>=0))&&
        (((player1.offSetY-enemy1.offSetY)<=(enemy1.boxElm.offsetWidth+player1.boxElm.offsetWidth))&&((player1.offSetY-enemy1  .offSetY)>=0))){
        player1.drawDie();
        enemy1.run=false;
        enemy1.dx=0;
        player1.died=true;
        console.log(player1.offSetX-enemy1.offSetX);
        console.log(player1.offSetY-enemy1.offSetX);
    }else {
        if(player1.died){
            player1.drawDie();
            console.log("player 1 m = "+player1.m);
        }
        if (!player1.jump && !player1.run && !player1.died){
            player1.drawIdle();
        }else if (player1.jump){
            player1.drawJump();
        }else if (!player1.jump && player1.run){
            player1.drawRun();
        }
    }


} , (1000/10));

setInterval(()=>{
    enemy1.doRun();
},2);

setInterval(()=> {
    if (enemy1.run){
        enemy1.drawRun();
    }
} , (1000/10));
