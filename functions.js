
// Main math functions

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else { return divide(a, b); }
}

// Display
const display = document.querySelector("h1"); // display
const numButtons = document.querySelectorAll(".num"); // 0 - 9
const operateButtons = document.querySelectorAll(".operator"); // +, -, *, /
const equals = document.querySelector('#equals') // =
const clearBtn = document.querySelector('#clear'); // AC

let displayValue = []; // add clicked numbers to array
let displayNumbers;  // joined array

let operations = ['a','operator','b']; 

let operand1 = "empty"; // value that shows if 1st num has already been selected
let result = '';

numButtons.forEach((button) => {
    button.addEventListener('click', function() {
        insertNumbers(button);
    });
});

operateButtons.forEach((button) => {
    button.addEventListener('click', function() {
        insertOperand(button);
    });
})

let click = 0;
clearBtn.addEventListener('click', function clear() {
    result = 0;
    displayValue = [];
    operations = [];
    displayNumbers = 0;
    display.textContent = 0;
});

function insertNumbers(button) {
    displayValue.push(button.innerText); 
    displayNumbers = displayValue.join("");
    display.textContent = displayNumbers;
};

function insertOperand(button) {
    if(click < 1) {
        operations[0] = Number(displayNumbers);
        operations[1] = button.textContent;
        displayValue = [];
        click++;
    } else if(click >= 1) {
        operations[2] = Number(displayNumbers);
        result = operate(operations[1],operations[0],operations[2]);
        display.textContent = result;
        displayValue = [];

        // the below we will have for any further clicks
        operations[0] = result;
        operations[1] = button.textContent;
    }
}





