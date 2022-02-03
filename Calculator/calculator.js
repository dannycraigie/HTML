`use strict`
import * as DOM from './dom.js';

let x = number(DOM.inputOne);
let y = number(DOM.inputTwo);

DOM.buttAdd.onclick= () =>add(DOM.inputOne.value, DOM.inputTwo.value);

DOM.buttDiv.onclick= () => divi(DOM.inputOne.value, DOM.inputTwo.value);

DOM.buttSub.onclick= () => sub(DOM.inputOne.value, DOM.inputTwo.value);

DOM.buttMul.onclick= () => mult(DOM.inputOne.value, DOM.inputTwo.value);

function add (x,y) {
    x + y;
}

function divi (x,y) {
    x / y;
}

function sub (x, y) {
    x - y;
}

function mult (inputOne, inputTwo) {
    inputOne * inputTwo;
}