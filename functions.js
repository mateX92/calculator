
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
const clearBtn = document.querySelector('#clear'); // C

let displayValue = []; // here all clicked numbers will be added to array
let displayNumbers;  // array to be transformed into one number

let operations = ['a','operator','b']; 
let result = '';

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
                console.log(operations[0]);
                    // when again operator is clicked, the 2nd value is saved
                    button.addEventListener('click', function() {
                        operations[2] = Number(displayNumbers); // not sure why it goes as [0];
                        console.log(operations[2]);
                    });
                displayNumbers = result;
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



// if you already have a, operator, b and then click operator
// a should be operated on b, result saved as a


// now, when you click another OPERATOR
// assign the result value to operators[0]
// save the operator
// clear displayValue, choose another numbers

