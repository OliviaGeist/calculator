function addition(a, b) {
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

let numA = 0;
let operator = "";
let numB = 0;

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