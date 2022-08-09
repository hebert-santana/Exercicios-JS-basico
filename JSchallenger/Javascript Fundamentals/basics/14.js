// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function contemStr (a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            b = b.concat(a);
            return b
        }
    }
    return a + b;
}

console.log(contemStr('cheese', 'cake'));
console.log(contemStr('lips', 's'));
console.log(contemStr('Java', 'script'));
console.log(contemStr(' think, therefore I am', 'I'));

//  return a.indexOf(b) === -1 ? a + b : b + a