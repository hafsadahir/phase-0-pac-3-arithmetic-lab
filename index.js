function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

// increment
function increment(n){
    n++;
    return n;
}

// decrement
function decrement(n){
    n--;
    return n;
}

// parsing takes two arguments:
// the number to be parsed and the base, usually base 10
function makeInt(n){
    return (parseInt(n, 10));
}

//
function preserveDecimal(n){
    return (parseFloat(n, 10));
}