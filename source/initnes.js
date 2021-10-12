import {jsnes} from "./index.js";

let holdNes = {};
var SCREEN_WIDTH = 256;
var SCREEN_HEIGHT = 240;
var FRAMEBUFFER_SIZE = SCREEN_WIDTH * SCREEN_HEIGHT;

var canvas_ctx, image;
var framebuffer_u8, framebuffer_u32;

var AUDIO_BUFFERING = 512;
var SAMPLE_COUNT = 4 * 1024;
var SAMPLE_MASK = SAMPLE_COUNT - 1;
var audio_samples_L = new Float32Array(SAMPLE_COUNT);
var audio_samples_R = new Float32Array(SAMPLE_COUNT);
var audio_write_cursor = 0, audio_read_cursor = 0;

var nes = new jsnes.NES({
    onFrame: function (framebuffer_24) {
        for (var i = 0; i < FRAMEBUFFER_SIZE; i++) framebuffer_u32[i] = 0xFF000000 | framebuffer_24[i];
    },
    onAudioSample: function (l, r) {
        audio_samples_L[audio_write_cursor] = l;
        audio_samples_R[audio_write_cursor] = r;
        audio_write_cursor = (audio_write_cursor + 1) & SAMPLE_MASK;
    },
});

holdNes.nes = nes;

//浏览器更新页面时的回调
function onAnimationFrame() {
    window.requestAnimationFrame(onAnimationFrame);

    image.data.set(framebuffer_u8);
    canvas_ctx.putImageData(image, 0, 0);
}

function audio_remain() {
    return (audio_write_cursor - audio_read_cursor) & SAMPLE_MASK;
}

function audio_callback(event) {
    var dst = event.outputBuffer;
    var len = dst.length;

    // Attempt to avoid buffer underruns.
    if (audio_remain() < AUDIO_BUFFERING) nes.frame();

    var dst_l = dst.getChannelData(0);
    var dst_r = dst.getChannelData(1);
    for (var i = 0; i < len; i++) {
        var src_idx = (audio_read_cursor + i) & SAMPLE_MASK;
        dst_l[i] = audio_samples_L[src_idx];
        dst_r[i] = audio_samples_R[src_idx];
    }

    audio_read_cursor = (audio_read_cursor + len) & SAMPLE_MASK;
}

function keyboard(callback, event) {
    var player1 = 1;
    var player2 = 2;

    switch (event.keyCode) {
        case 222: callback(player1, jsnes.Controller.BUTTON_A); break;      // '
        case 186: callback(player1, jsnes.Controller.BUTTON_B); break;      // ; (Central European keyboard) 89
        case 32: callback(player1, jsnes.Controller.BUTTON_SELECT); break; // Spacebar Ctrl
        case 13: callback(player1, jsnes.Controller.BUTTON_START); break;  // Enter
        case 87: callback(player1, jsnes.Controller.BUTTON_UP); break;     // W 38
        case 83: callback(player1, jsnes.Controller.BUTTON_DOWN); break;   // S 40
        case 65: callback(player1, jsnes.Controller.BUTTON_LEFT); break;   // A 37
        case 68: callback(player1, jsnes.Controller.BUTTON_RIGHT); break;  // D 39

        case 97: callback(player2, jsnes.Controller.BUTTON_A); break;     // Num-1
        case 98: callback(player2, jsnes.Controller.BUTTON_B); break;     // Num-2
        case 100: callback(player2, jsnes.Controller.BUTTON_SELECT); break; // Num-4
        case 101: callback(player2, jsnes.Controller.BUTTON_START); break;  // Num-5
        case 38: callback(player2, jsnes.Controller.BUTTON_UP); break;    // Up 38
        case 40: callback(player2, jsnes.Controller.BUTTON_DOWN); break;   // Down 40
        case 37: callback(player2, jsnes.Controller.BUTTON_LEFT); break;  // Left 37
        case 39: callback(player2, jsnes.Controller.BUTTON_RIGHT);break; // Right 39

        case 80:if(event.type === "keydown"){reStart();}break; // p 重启
        case 86:if(event.type === "keydown"){toggleVoice();}break; // V 开启关闭声音
        case 82:if(event.type === "keydown"){toggleRunAndStart();}break; // r 暂停，继续


        default: return true;
    }
}

function nes_init(canvas_id) {
    var canvas = document.getElementById(canvas_id);

    canvas_ctx = canvas.getContext("2d");
    image = canvas_ctx.getImageData(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    canvas_ctx.fillStyle = "black";
    canvas_ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    // Allocate framebuffer array.
    var buffer = new ArrayBuffer(image.data.length);
    framebuffer_u8 = new Uint8ClampedArray(buffer);
    framebuffer_u32 = new Uint32Array(buffer);

    // Setup audio.
    var AudioContext = window.AudioContext || window.webkitAudioContext || false;
    var audio_ctx;
    if (AudioContext) {
        audio_ctx = new AudioContext({sampleRate: nes.papu.sampleRate});
    }else {
        Utils.layuiError("load err")
    }
    audio_ctx.resume();
    var script_processor = audio_ctx.createScriptProcessor(AUDIO_BUFFERING, 0, 2);
    script_processor["onaudioprocess"] = audio_callback;
    script_processor.connect(audio_ctx.destination);

    holdNes.audio_ctx = audio_ctx;
    holdNes.screen = $(canvas);
    // document.documentElement.addEventListener(
    //     "mousedown", function () {
    //         if (audio_ctx.state !== 'running') {
    //             audio_ctx.resume();
    //         }
    //     });
    //
    // document.documentElement.addEventListener(
    //     "keydown", function () {
    //         if (audio_ctx.state !== 'running') {
    //             audio_ctx.resume();
    //         }
    //     });
}

function nes_boot(rom_data) {
    nes.loadROM(rom_data);
    window.requestAnimationFrame(onAnimationFrame);
}

function nes_load_data(canvas_id, rom_data) {
    nes_init(canvas_id);
    nes_boot(rom_data);
}

function nes_load_url(canvas_id, path) {
    nes_init(canvas_id);

    var req = new XMLHttpRequest();
    req.open("GET", path);
    req.overrideMimeType("text/plain; charset=x-user-defined");
    req.onerror = () => console.log(`Error loading ${path}: ${req.statusText}`);

    req.onload = function () {
        if (this.status === 200) {
            nes_boot(this.responseText);
        } else if (this.status === 0) {
            // Aborted, so ignore error
        } else {
            req.onerror();
        }
    };
    req.send();
}
holdNes.nes_load_url = nes_load_url;
holdNes.alerdSet = false;

function toggleVoice(){//holdNes.nes.opts.

}
function toggleRunAndStart(){
    if(holdNes.audio_ctx.state === "running"){
        holdNes.audio_ctx.suspend();
    }else if(holdNes.audio_ctx.state === 'suspended'){
        holdNes.audio_ctx.resume();
    }
}

function reStart(){
    holdNes.nes.reloadROM()
}

document.addEventListener('keydown', (event) => {
    keyboard(nes.buttonDown, event)
});
document.addEventListener('keyup', (event) => {
    keyboard(nes.buttonUp, event)
});


export {holdNes};