// module.exports = {
//   Controller: require("./controller"),
//   NES: require("./nes"),
// };
import {Controller} from './controller.js'
import {NES} from './nes.js'
let jsnes = {Controller,NES};
export {jsnes}