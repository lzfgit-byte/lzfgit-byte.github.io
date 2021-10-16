
var gamepadInfo = {}
var start;

import {holdNes} from "./initnes.js";

var rAF = window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.requestAnimationFrame;

var rAFStop = window.mozCancelRequestAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.cancelRequestAnimationFrame;

window.addEventListener("gamepadconnected", function () {
    var gp = navigator.getGamepads()[0];
    gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";

    gameLoop();
});

window.addEventListener("gamepaddisconnected", function () {
    gamepadInfo.innerHTML = "Waiting for gamepad.";

    rAFStop(start);
});

if (!('GamepadEvent' in window)) {
    // No gamepad events available, poll instead.
    var interval = setInterval(pollGamepads, 100);
}

function pollGamepads() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    for (var i = 0; i < gamepads.length; i++) {
        var gp = gamepads[i];
        if (gp) {
            gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";
            gameLoop();
            clearInterval(interval);
        }
    }
}

function buttonPressed(b) {
    if (typeof (b) == "object") {
        return b.pressed && b.touched;
    }
    return b == 1.0;
}


let keys = {
    KEY_A: 0,
    KEY_B: 1,
    KEY_SELECT: 2,
    KEY_START: 3,
    KEY_UP: 4,
    KEY_DOWN: 5,
    KEY_LEFT: 6,
    KEY_RIGHT: 7
};
// 0A 1B 2X 3Y
let _keyA = 0,_keyB = 2,_tubA = 1,_tubB = 3;
let kesA = {
    12: "KEY_UP",
    13: "KEY_DOWN",
    14: "KEY_LEFT",
    15: "KEY_RIGHT",
    8: "KEY_SELECT",
    9: "KEY_START",
}
kesA[_keyA] = "KEY_A"
kesA[_keyB] = "KEY_B"
kesA[_tubA] = "KEY_AA"
kesA[_tubB] = "KEY_BB"
!function(){
    let temp3 = localStorage.getItem("kesPad");
    kesA = temp3 != null && temp3 ? JSON.parse(temp3):kesA;
}()
let pressKey = [];
let keyPress;
window.canSet = undefined;
window.canSetValue = undefined;

function gameLoop() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    if (!gamepads) return;
    var gp = gamepads[0];
    for (var i = 0; i < gp.axes.length; i++) {
        let temp = gp.axes[i];
        if (temp === -1) {
            console.log(`-1位于${i}`)
        }
        if (temp === 1) {
            console.log(`1位于${i}`)
        }
    }

    for (var i = 0; i < gp.buttons.length; i++) {
        if (buttonPressed(gp.buttons[i])) {
            if (pressKey.indexOf(i) === -1) {
                //触发按下
                console.log(`按下了${kesA[i]}`)
                keyPress = i;
                if(canSet !== undefined){
                    gamePadApi.setGamePad(canSetValue)
                    window.setGamePadCall(keyPress);
                }
                // nes.keyboard.setNESKeyBord(keys[kesA[i]],0x41)
                holdNes.nes.buttonDown(1,keys[kesA[i]])
                pressKey[pressKey.length] = i;
            }
            if(i === _tubA){
                //A键连发
                tubrro(0)
            }
            if(i === _tubB){
                //B键连发
                tubrro(1)
            }
        } else {
            //未按下
            let idnex = pressKey.indexOf(i);
            if (idnex > -1) {
                //触发按键抬起
                console.log(`抬起了${kesA[i]}`)
                // nes.keyboard.setNESKeyBord(keys[kesA[i]],0x40)
                holdNes.nes.buttonUp(1,keys[kesA[i]])
                if(i === _tubA){
                    //A键连发
                    // nes.keyboard.setNESKeyBord(0,0x40)
                    holdNes.nes.buttonUp(1,0)

                }
                if(i === _tubB){
                    //B键连发
                    // nes.keyboard.setNESKeyBord(1,0x40)
                    holdNes.nes.buttonUp(1,1)

                }

                delete pressKey[idnex];
            }
        }

    }
    var start = rAF(gameLoop);
};


async function tubrro(key) {
    // nes.keyboard.setNESKeyBord(key,0x41);
    holdNes.nes.buttonDown(1,key)
    setTimeout(()=>{
        // nes.keyboard.setNESKeyBord(key,0x40)
        holdNes.nes.buttonUp(1,key)
    },10)

}
let gamePadApi = {
    kesPad:kesA,
    saveKesPadSet:function () {
        localStorage.setItem("kesPad",JSON.stringify(kesA))
    },
    setGamePad:function (value,callback) {
        kesA[keyPress] = value;
    }
}

export {gamePadApi};