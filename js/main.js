"use strict";

import {docReady} from "./core/core.js";
import {stopBall} from "./controlers/stopball.js";

export let App={stateApp:"stop"}
let inicia = function(ball, CX, CY) {
    // DOM is loaded and ready for manipulation here
    let speed = 1; //1 to 100
    let incX = speed * (Math.round(Math.random())?1:-1);
    let incY = speed * (Math.round(Math.random())?1:-1);
    //let ball=document.getballementById("ball");

    let dw=function danceWorld(){
    
        let x =  ball.style.left?parseInt(ball.style.left,10):350;
        let y =  ball.style.top?parseInt(ball.style.top,10):400;

        ball.style.left =  x + incX +"px";
        ball.style.top = y + incY+"px";
    
        //Detect if we reach X coordinates limits
        if (((x+incX) > (window.innerWidth-40)) || ((x+incX)<=0)){
            incX = (-1)*incX;
            CX.innerHTML = x - incX;
            CY.innerHTML = y - incY;
        //Detect if we reach Y coordinates limits
        }if (((y+incY) > (window.innerHeight-40)) || ((y+incY) <= 0)){
            incY = (-1)*incY;
            CX.innerHTML = x - incX;
            CY.innerHTML = y - incY;
        }
    }
    return dw;    
};

let dw=inicia(document.getElementById("ball"), document.getElementById("placeX"), document.getElementById("placeY"));

export let start =function start(){
    App.stateApp ="run";
    App.myApp=setInterval(dw,5);
    stopBall();
}
docReady(start);

