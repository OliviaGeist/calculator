function addition(a, b) {
    return +a + +b;
};

function subtraction(a, b) {
    return +a - +b;
};

function multiplication(a, b) {
    return +a * +b;
};

function division(a, b) {
    return +a / +b;
};

let numA = "";
let operator = "";
let numB = "";

let numAOpen = true;
let operatorOpen = false;
let numBOpen = false;

let fromResult = false;

const docBody = document.querySelector("body");
const digitButtons = document.querySelectorAll(".digit-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const clearButton = document.querySelector("#clear-button");
const display = document.querySelector("#display");

function operate(a, o, b) {
    switch (o) {
        case "+":
            return addition(a, b);
        break;
        case "-":
            return subtraction(a, b);
        break;
        case "*":
            return multiplication(a, b);
        break;
        case "/":
            return division(a, b);
        break;
    };
};

function updateFirstNumber(e) {
    if (fromResult) {
        numA = "";
        fromResult = false;
    };
    if (numAOpen && !(e == "." && numA.indexOf(".") !== -1)) {
        if (e == "Backspace") {
            numA = numA.slice(0, numA.length - 1);
            display.textContent = numA;
        } else {
            numA = (numA + e);
            display.textContent = numA;
            operatorOpen = true;
        };
        console.log("first");
        console.log(`numA is ${numA}`);
        console.log(`operator is ${operator}`);
        console.log(`numB is ${numB}`);
    };
};

function clickFirstNumber() {
    digitButtons.forEach(digitButton => {
        digitButton.addEventListener("click", event => updateFirstNumber(event.target.id));
    });
};

function updateOperator(e) {
    if (operatorOpen) {
        fromResult = false;
        if (numA && operator && numB) {
            const answer = operate(numA, operator, numB);
            display.textContent = answer;
            numA = answer;
        };
        numB = "";
        numAOpen = false;
        numBOpen = false;
        if (e !== "=") {
            operator = e;
            numBOpen = true;
            operatorOpen = false;
        } else {
            numAOpen = true;
            fromResult = true;
        };
        console.log("middle");
        console.log(`numA is ${numA}`);
        console.log(`operator is ${operator}`);
        console.log(`numB is ${numB}`);
    };
};

function clickOperator() {
    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener("click", event => updateOperator(event.target.id));
    });
};

function updateSecondNumber(e) {
    if (numBOpen && !(e == "." && numB.indexOf(".") !== -1)) {
        if (e == "Backspace") {
            numB = numB.slice(0, numB.length - 1);
            display.textContent = numB;
        } else {
            numB = (numB + e);
            display.textContent = numB;
            operatorOpen = true;
        };
        console.log("last");
        console.log(`numA is ${numA}`);
        console.log(`operator is ${operator}`);
        console.log(`numB is ${numB}`);
    };
};

function clickSecondNumber() {
    digitButtons.forEach((digitButton) => {
        digitButton.addEventListener("click", event => updateSecondNumber(event.target.id));
    });
};

function keyManager() {
    const numberList = "0123456789."
    const operatorList = "+-*/="
    docBody.addEventListener("keydown", event => {
        if (numberList.indexOf(event.key) !== -1 || event.key == "Backspace") {
            event.preventDefault();
            updateFirstNumber(event.key);
            updateSecondNumber(event.key);
        } else if (operatorList.indexOf(event.key) !== -1 || event.key == "Enter") {
            event.preventDefault();
            if (event.key == "Enter") {
                updateOperator("=");
            } else updateOperator(event.key);
        }
    });
};

function clearAll() {
    numA = "";
    numB = "";
    operator = "";
    display.textContent = "00000000";

    numAOpen = true;
    numBOpen = false;
    operatorOpen = false;
};

function clickClear() {
    clearButton.addEventListener("click", event => clearAll());
};

clickFirstNumber();
clickSecondNumber();
clickOperator();
clickClear();
keyManager();