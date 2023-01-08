// DOM manipiulation for power, delete and textbox

const powerBtn = document.getElementById('power-toggle');

//DOM manipulation for numbers
//Row 1
let zero = document.querySelector('.num0')
let one = document.querySelector('.num1')
let two = document.querySelector('.num2')
let multiplyBtn = document.querySelector('.multiply-btn')
//Row 2
let three = document.querySelector('.num3')
let four = document.querySelector('.num4')
let five = document.querySelector('.num5')
let divideBtn = document.querySelector('.divide-btn');
//Row 3
let six = document.querySelector('.num6')
let seven = document.querySelector('.num7')
let eight = document.querySelector('.num8')
let addBtn = document.querySelector('.add-btn');
//Row 4
let nine = document.querySelector('.num9')
const deleteBtn = document.querySelector('.delete-button');
let equalBtn = document.querySelector('.equal-btn');
let subtractBtn = document.querySelector('.subtract-btn');

//display reults in h2

let displayResults = document.getElementById('display-results')

powerBtn.addEventListener('click', turnOnAndOff)
/*
one.addEventListener('click',)
two.addEventListener('click',)
multiplyBtn.addEventListener('click',)
three.addEventListener('click',)
four.addEventListener('click',)
five.addEventListener('click',)
divideBtn.addEventListener('click',)
six.addEventListener('click',)
seven.addEventListener('click',)
eight.addEventListener('click',)
addBtn.addEventListener('click',)
nine.addEventListener('click',)
deleteBtn.addEventListener('click',)
equalBtn.addEventListener('click',)
subtractBtn.addEventListener('click',)
*/