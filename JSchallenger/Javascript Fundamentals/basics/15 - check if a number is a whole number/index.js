// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

function verificaNumeroInteiro (a) {
    if (a === parseInt(a)) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaNumeroInteiro(4));
console.log(verificaNumeroInteiro(1.123));
console.log(verificaNumeroInteiro(1048));
console.log(verificaNumeroInteiro(10.48));

// return a - Math.floor(a) === 0