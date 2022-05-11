
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

let operation1 = "empty"; // value that shows if 1st num has already been selected

numButtons.forEach((button) => {
    button.addEventListener('click', function() {
        displayValue.push(this.innerText); // adds to array (end), takes value from html
        displayNumbers = displayValue.join("");
        display.textContent = displayNumbers;

        operateButtons.forEach((button) => {
            button.addEventListener('click', function() {
                if(operation1 === "empty") {
                    console.log(operation1);
                    operations[0] = Number(displayNumbers);
                    operations[1] = this.innerText;
                    displayValue = [];
                    operation1 = "inserted";
                    console.log(operation1);
                    console.log(operations); // console log po pierwszym kliknieciu operatora
                } else if(operation1 === "inserted") {
                    operateButtons.forEach((button) => {
                        button.addEventListener('click', function() {
                            // problem: za pierwszym kliknieciem mamy "a", "operator" ("inserted"),
                            // "inserted" sie updejtuje tylko po kliknieciu operatora, wiec zanim
                            // klikniemy go drugi raz, mamy juz nr 2 "b". Wiec wychodzi ok
                            // potem mamy trzecie klikniecie, ale displayValue jest wyzerowane
                            // wiec druga liczba zamienia sie console.log(operations);w 0, pierwsza to result
                            // i tak leci w kolko (dodawanie do 0 czy odejmowanie dalej daje nam result)
                            // dzielenie i mnozenie wywala error no bo juz nie bedzie to result

                            // czyli problemem sa te zera

                            displayNumbers = displayValue.join("");
                            operations[2] = Number(displayNumbers);
                            // result is produced anyway
                            result = operate(operations[1],operations[0],operations[2]);
                            display.textContent = result;
                            // result is being assigned as the 1st value
                            operations[0] = result;
                            operations[1] = this.innerText;
                            displayValue = [];
                            console.log(operations); // console log po drugim i kazdym kolejnym kliknieciu operatora
                        })
                    })
                };
                    // when equals operator is clicked, the 2nd value is saved and result produced
                    equals.addEventListener('click', function() {
                        operations[2] = Number(displayNumbers); // 
                        result = operate(operations[1],operations[0],operations[2]);
                        display.textContent = result;
                    });
               // displayNumbers = result;
            });
        })
            // when other operator is clicked instead, the 2nd value is saved
           // if(operation1 === "inserted") {
            //    button.addEventListener('click', function() {
            //        displayNumbers = displayValue.join("");
            //        operations[2] = Number(displayNumbers);console.log(operations);
                    // result is produced anyway
           //         result = operate(operations[1],operations[0],operations[2]);
           //         display.textContent = result;
                    // result is being assigned as the 1st value
           //         operations[0] = result;
          //          operations[1] = this.innerText;
          //          displayValue = [];
                    
          //          console.log(operations);
          //      });
           // };
        
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

