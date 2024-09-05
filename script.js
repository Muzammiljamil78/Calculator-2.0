let display = document.getElementById('display');
let previousOperator = null;
let previousOperand = null;

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (previousOperator) {
        calculate();
    }
    previousOperator = operator;
    previousOperand = parseFloat(display.value);
    display.value += operator;
}

function calculate() {
    let currentOperand = parseFloat(display.value.substring(display.value.lastIndexOf(previousOperator) + 1));
    let result = 0;
    switch (previousOperator) {
        case '+':
            result = previousOperand + currentOperand;
            break;
        case '-':
            result = previousOperand - currentOperand;
            break;
        case '*':
            result = previousOperand * currentOperand;
            break;
        case '/':
            result = previousOperand / currentOperand;
            break;
        case '%':
            result = previousOperand % currentOperand;
            break;
        case '^':
            result = Math.pow(previousOperand, currentOperand);
            break;
        case 'sqrt(':
            result = Math.sqrt(currentOperand);
            break;
    }
    display.value = result;
    previousOperator = null;
    previousOperand = null;
}

function clearDisplay() {
    display.value = '';
    previousOperator = null;
    previousOperand = null;
}