// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

function arredondaNumero (a) {
    return a.toFixed(2)
}

console.log(arredondaNumero(2.12397));
console.log(arredondaNumero(3.136));
console.log(arredondaNumero(1.12397));
console.log(arredondaNumero(26.1379));