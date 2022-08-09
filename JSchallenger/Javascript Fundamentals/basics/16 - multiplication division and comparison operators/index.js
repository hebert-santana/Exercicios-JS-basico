// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function operacao (a, b) {
    let conta = 0;
    if (a < b) {
        conta = a/b;
    } else {
        conta = a*b;
    }
    return conta;
}

console.log(operacao(10, 100));
console.log(operacao(90, 45));
console.log(operacao(8, 20));
console.log(operacao(2, 0.5));

//  return a < b ? a / b : a * b