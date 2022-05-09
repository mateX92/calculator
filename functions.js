
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(operator, a, b) {
    if (operator === add) {
        return add(a, b);
    } else if (operator === subtract) {
        return subtract(a, b);
    } else if (operator === multiply) {
        return multiply(a, b);
    } else { return divide(a, b); }
}

// Display

const display = document.querySelector("h1");
const numButtons = document.querySelectorAll(".num");

let displayValue = []; // here all clicked numbers will be added to array
let displayNumbers;  // array to be transformed into one number

numButtons.forEach((button) => {
    button.addEventListener('click', function() {
        displayValue.push(this.innerText); // adds to array (end), takes value from html
        displayNumbers = displayValue.join("");
        display.textContent = displayNumbers;
    });
});





