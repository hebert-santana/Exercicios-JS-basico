// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

function operacao (a, b, c, d, e, f) {
   let conta = (((((a+b)-c)*d)/e)**f);
   return conta;
}

console.log(operacao(6, 5, 4, 3, 2, 1));
console.log(operacao(6, 2, 1, 4, 2, 3));
console.log(operacao(2, 3, 6, 4, 2, 3));