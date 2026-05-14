function addition(a, b) {
    console.log("add");
    return a + b;
};

function subtraction(a, b) {
    return a - b;
};

function multiplication(a, b) {
    return a * b;
};

function division(a, b) {
    return a / b;
};

let numA = "";
let operator = "";
let numB = "";

let numAOpen = true;
let operatorOpen = false;
let numBOpen = false;

const digitButtons = document.querySelectorAll(".digit-button");
const operatorButtons = document.querySelectorAll(".operator-button");
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
    if (numAOpen) {
        numA = +(numA + e.target.id);
        display.textContent = numA;
        operatorOpen = true;
        console.log(`numA is ${numA}`);
        console.log(`operator is ${operator}`);
        console.log(`numB is ${numB}`);
    };
};

function getFirstNumber() {
    digitButtons.forEach((digitButton) => {
        digitButton.addEventListener("click", event => updateFirstNumber(event));
    });
};

function updateOperator(e) {
    if (operatorOpen) {
        if (numA && operator && numB) {
            const answer = operate(numA, operator, numB);
            console.log(answer);
            display.textContent = answer;
            numA = answer;
        };
        numB = "";
        numAOpen = false;
        numBOpen = false;
        if (e.target.id !== "=") {
            operator = e.target.id;
            operatorOpen = false;
            numBOpen = true;
        }
        console.log(`numA is ${numA}`);
        console.log(`operator is ${operator}`);
        console.log(`numB is ${numB}`);

    };
};

function getOperator() {
    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener("click", event => updateOperator(event));
    });
};

function updateSecondNumber(e) {
    if (numBOpen) {
        numB = +(numB + e.target.id);
        display.textContent = numB;
        operatorOpen = true;
        getOperator();
        console.log(`numA is ${numA}`);
        console.log(`operator is ${operator}`);
        console.log(`numB is ${numB}`);
    };
};

function getSecondNumber() {
    digitButtons.forEach((digitButton) => {
        digitButton.addEventListener("click", event => updateSecondNumber(event));
    });
};

getFirstNumber();
getSecondNumber();
getOperator();