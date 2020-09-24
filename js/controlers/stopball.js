import {App, start} from "../main.js";

export let stopBall=function (){document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if (App.stateApp=="run"){
            App.stateApp="stop";
            clearInterval(App.myApp);
        }else{            
            start();
        }
    }
}};
