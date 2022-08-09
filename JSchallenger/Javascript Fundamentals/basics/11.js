// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

function cortaMetadeStr (a) {
    let tamanhoStr = a.length;
    let metadeStr = tamanhoStr/2;
    return a.slice(0, metadeStr);
}

console.log(cortaMetadeStr('abcdefgh'));
console.log(cortaMetadeStr('1234'));
console.log(cortaMetadeStr('gedcba'));


// return a.slice(0, a.length / 2);