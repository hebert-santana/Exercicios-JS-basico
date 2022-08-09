// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

function quantasVezes (a, b) {
    let contador = 0;
    for (var i = 0; i < b.length; i++) {

        if (b[i] === a) {
            contador++;
        }
    }
    return contador;
}

console.log(quantasVezes('m', 'how many times does the character occur in this sentence?'));
console.log(quantasVezes('h', 'how many times does the character occur in this sentence?'));
console.log(quantasVezes('?', 'how many times does the character occur in this sentence?'));
console.log(quantasVezes('z', 'how many times does the character occur in this sentence?'));
console.log(quantasVezes('o', 'o galo é doido'));

// return b.split(a).length - 1