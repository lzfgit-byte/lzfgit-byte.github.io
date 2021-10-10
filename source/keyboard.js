/*
JSNES, based on Jamie Sanders' vNES
Copyright (C) 2010 Ben Firshman

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// Keyboard events are bound in the UI
JSNES.Keyboard = function() {
    var i;
    
    this.keys = {
        KEY_A: 0,
        KEY_B: 1,
        KEY_SELECT: 2,
        KEY_START: 3,
        KEY_UP: 4,
        KEY_DOWN: 5,
        KEY_LEFT: 6,
        KEY_RIGHT: 7
    };

    this.state1 = new Array(8);
    for (i = 0; i < this.state1.length; i++) {
        this.state1[i] = 0x40;
    }
    this.state2 = new Array(8);
    for (i = 0; i < this.state2.length; i++) {
        this.state2[i] = 0x40;
    }
};

JSNES.Keyboard.prototype = {
    setKey: function(key, value) {
        switch (key) {
            case 222: this.state1[this.keys.KEY_A] = value; break;      // '
            case 186: this.state1[this.keys.KEY_B] = value; break;      // ; (Central European keyboard) 89
            case 32: this.state1[this.keys.KEY_SELECT] = value; break; // Spacebar Ctrl
            case 13: this.state1[this.keys.KEY_START] = value; break;  // Enter
            case 87: this.state1[this.keys.KEY_UP] = value; break;     // W 38
            case 83: this.state1[this.keys.KEY_DOWN] = value; break;   // S 40
            case 65: this.state1[this.keys.KEY_LEFT] = value; break;   // A 37
            case 68: this.state1[this.keys.KEY_RIGHT] = value; break;  // D 39

            case 97: this.state2[this.keys.KEY_A] = value; break;     // Num-1
            case 98: this.state2[this.keys.KEY_B] = value; break;     // Num-2
            case 100: this.state2[this.keys.KEY_SELECT] = value; break; // Num-4
            case 101: this.state2[this.keys.KEY_START] = value; break;  // Num-5
            case 38: this.state2[this.keys.KEY_UP] = value; break;    // Up 38
            case 40: this.state2[this.keys.KEY_DOWN] = value; break;   // Down 40
            case 37: this.state2[this.keys.KEY_LEFT] = value; break;  // Left 37
            case 39: this.state2[this.keys.KEY_RIGHT] = value; break; // Right 39

            case 80:if(nes.isRunning){nes.reloadRom();nes.start();}break; // p 重启
            case 86:if(nes.isRunning !== undefined &&nes.isRunning && value === 0x41){nes.opts.emulateSound = !nes.opts.emulateSound}break; // V 开启关闭声音
            case 82:if (nes.isRunning && nes.isRunning && value === 0x41) {nes.stop();} else if(nes.isRunning !== undefined && !nes.isRunning && value === 0x41) {nes.start();}break; // r 暂停，继续


            default: return true;
        }
        return false; // preventDefault
    },

    keyDown: function(evt) {
        if (!this.setKey(evt.keyCode, 0x41) && evt.preventDefault) {
            evt.preventDefault();
        }
    },
    
    keyUp: function(evt) {
        if (!this.setKey(evt.keyCode, 0x40) && evt.preventDefault) {
            evt.preventDefault();
        }
    },

    setNESKeyBord:function (key,value) {
        if(key >= 0 && key <= 7){
            this.state1[key] = value;
        }
    },
    
    keyPress: function(evt) {
        evt.preventDefault();
    },

    gamePadNes:function () {

    }
};
