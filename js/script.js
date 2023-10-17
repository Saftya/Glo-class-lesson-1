'use strict'

const title1 = document.getElementsByTagName('h1');
const buttons = document.getElementsByClassName('handler_btn');
const plus = document.querySelector('.screen-btn');
const percentage = document.querySelectorAll('.other-items.percent');
const numbers = document.querySelectorAll('.other-items.number');
const input = document.querySelector('.rollback input[type="range"]');
const span = document.querySelector('.rollback span[class ="range-value"]');
const totalInputs = document.getElementsByClassName('total-input');
const eachInputs = function(){
    for (let i = 0; i < totalInputs.length; i++)
    console.log(totalInputs[i]);
}
const screen = document.querySelectorAll('.screen');


console.log(title1[0]);
console.log(buttons);
console.log(plus);
console.log (percentage);
console.log (numbers);
console.log (input);
console.log(span);
console.log (totalInputs);
eachInputs()
console.log (screen);

