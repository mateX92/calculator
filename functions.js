
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
    } else {
        return divide(a, b); 
    };
}

// Display
const display = document.querySelector("h1"); // display

// Buttons
const numButtons = document.querySelectorAll(".num"); // 0 - 9
const operateButtons = document.querySelectorAll(".operator"); // +, -, *, /, =
const equals = document.querySelector('#equals') // =
const clearBtn = document.querySelector('#clear'); // AC
const percent = document.querySelector('#percent'); // %
const reverse = document.querySelector('#reverse'); // reverse number
const coma = document.querySelector('#coma');
const backBtn = document.querySelector('#back');

// Initial Values
let displayValue = []; // add clicked numbers to array
let displayNumbers;  // joined array
let operations = ['a','operator','b']; 
let click = 0;
let result = 0;
let comaInput = 0; // no decimals
let numberReversed = 0; // number is positive
let percentage = 0; // percentage disabled


// Numbers
numButtons.forEach((button) => {
    button.addEventListener('click', function() {
        insertNumbers(button);
    });
});

//Keyboard

document.addEventListener('keydown', function(event) {
    if(event.key === "0" || event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5"||
    event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9") {
        displayValue.push(event.key);
        displayNumbers = displayValue.join("");
        display.textContent = displayNumbers;
    } else if(event.key === "Backspace") {
        displayValue.pop();
        displayNumbers = displayValue.join("");
        display.textContent = displayNumbers;
        if(displayValue.length === 0) {
            display.textContent = "0";
        }
    }
})


// Decimals
coma.addEventListener('click', inputDecimals);

// Operators
operateButtons.forEach((button) => {
    button.addEventListener('click', function() {
        insertOperand(button);
    });
})

equals.addEventListener('click', function() {
    insertEqual();
});

// CLEAR ALL DATA
clearBtn.addEventListener('click', function clear() {
    result = 0;
    displayValue = [];
    operations = ['a','operator','b'];
    displayNumbers = 0;
    display.textContent = 0;
    click = 0;
    comaInput = 0;
    numberReversed = 0;
    percentage = 0;
});

// Clear last only
backBtn.addEventListener('click', function() {
    displayValue.pop();
    displayNumbers = displayValue.join("");
    display.textContent = displayNumbers;
    if(displayValue.length === 0) {
        display.textContent = "0";
    }
})

// CHANGE POSITIVE NUMBER TO A NEGATIVE ONE
reverse.addEventListener('click', function reverseNumber() { 
    if(numberReversed === 0) {
        displayValue.unshift('-');
        numberReversed = 1;
    } else if(numberReversed === 1) {
        displayValue.shift('-');
        reverse.removeEventListener('click',reverseNumber,true);
        numberReversed = 0;
    }
    displayNumbers = displayValue.join("");
    display.textContent = displayNumbers;
});

// PERCENT BUTTON
percent.addEventListener('click', function changeToPercent() {
    if(percentage === 0) {
        displayNumbers = Number(displayNumbers) / 100;
        percentage = 1;
    } else if(percentage === 1) {
        displayNumbers = Number(displayNumbers) * 100;
        percentage = 0;
    };
    display.textContent = displayNumbers;
});

function insertNumbers(button) {
    displayValue.push(button.innerText);
    displayNumbers = displayValue.join("");
    display.textContent = displayNumbers;
};

function inputDecimals() {
    if(comaInput === 0) {
        displayValue.push(coma.innerText); 
        displayNumbers = displayValue.join("");
        display.textContent = displayNumbers;
        comaInput++;
    } else {
        coma.removeEventListener('click',inputDecimals,true);
    }
}

function insertOperand(button) {
    if(click < 1) {
        operations[0] = Number(displayNumbers);
        operations[1] = button.textContent;
        displayValue = [];
        click++;
    } else if(click >= 1) {
        operations[2] = Number(displayNumbers);
        result = Math.round((operate(operations[1],operations[0],operations[2])) * 100) / 100;
        if (operations[2] === 0) {
            display.textContent = "0? Really?";
            result = 0;
            displayValue = [];
            operations = ['a','operator','b'];
            displayNumbers = 0;
            click = 0;
        } else {
            display.textContent = result;
            };
        displayValue = [];

        // the below we will have for any further clicks
        operations[0] = result;
        operations[1] = button.textContent;
    }
}

function insertEqual() {
    if(click === 0) {
        display.textContent = displayNumbers;
    } else {
        operations[2] = Number(displayNumbers);
        result = Math.round((operate(operations[1],operations[0],operations[2])) * 100) / 100;

        if (operations[2] === 0) {
            display.textContent = "0? Really?";
        } else {
        display.textContent = result;
        };
    }
}



