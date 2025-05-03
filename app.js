/*-------------------------------- Variables --------------------------------*/

let firstValue = null;
let secondValue = null;
let operation = null;

/*------------------------ Cached Element References ------------------------*/

const numbers = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const totalDisplay = document.querySelector('.display');
totalDisplay.innerText = 0;

/*-------------------------------- Functions --------------------------------*/
const add = () => {
    return firstValue + secondValue;
};
const subtract = () => {
    return firstValue - secondValue;
};
const multiply = () => {
    return firstValue * secondValue;
};
const divide = () => {
    if (secondValue === 0) {
        console.log("Error");
    }
};

const renderCalculation = () => {
    let total;
    if (operation === 'add') {
        total = add();
    } else if (operation === 'subtract') {
        total = subtract();
    } else if (operation === 'multiply') {
        total = multiply();
    } else if (operation === 'divide') {
        total = divide();
    }
    totalDisplay.innerText = total;
};

const handleEqual = () => {
    secondValue = parseFloat(totalDisplay.innerText); 
    console.log(firstValue, secondValue);
    renderCalculation();
    firstValue = totalDisplay.innerText; 
    secondValue = null; 
    operation = null; 
};

const handleOperator = (event) => {
    firstValue = parseFloat(totalDisplay.innerText); 
    operation = event.target.id; 
    totalDisplay.innerText = 0; 
};

const handleNumber = (event) => {
    if (totalDisplay.innerText === '0') {
        totalDisplay.innerText = event.target.innerText;
    } else {
        totalDisplay.innerText += event.target.innerText; 
    }
};

const clear = () => {
    totalDisplay.innerText = 0;
    firstValue = null;
    secondValue = null;
    operation = null;
};




/*----------------------------- Event Listeners -----------------------------*/

equalsButton.addEventListener('click', handleEqual);
clearButton.addEventListener('click', clear);
numbers.forEach((number) => {
    number.addEventListener('click', handleNumber);
});
operationButtons.forEach((operation) => {
    operation.addEventListener('click', handleOperator);
});