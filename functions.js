
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

const display = document.querySelector("h1");
const numButtons = document.querySelectorAll(".num");
const operateButtons = document.querySelectorAll(".operator");
const equals = document.querySelector('#equals')

const clearBtn = document.querySelector('#clear');

let displayValue = []; // here all clicked numbers will be added to array
let displayNumbers;  // array to be transformed into one number

let operations = ['a','operator','b']; 
let result;

numButtons.forEach((button) => {
    button.addEventListener('click', function() {
        displayValue.push(this.innerText); // adds to array (end), takes value from html
        displayNumbers = displayValue.join("");
        display.textContent = displayNumbers;

        operateButtons.forEach((button) => {
            button.addEventListener('click', function() {
                    operations[0] = Number(displayNumbers);
                    operations[1] = this.innerText;
                    displayValue = [];
                    // when equals is clicked, the 2nd value is saved
                    equals.addEventListener('click', function() {
                        operations[2] = Number(displayNumbers);
                        result = operate(operations[1], operations[0], operations[2]);
                        display.textContent = result;

                    })
            })
        })
    });
});

clearBtn.addEventListener('click', function clear() {
    result = 0;
    displayValue = [];
    operations = [];
    displayNumbers = 0;
    display.textContent = 0;
});



// when equal is clicked, the result should be the first num in array
//


