// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function insereNaStr (a, b) {
   let resultado = [];
   let str = a;
   while (str.length) {
    resultado.push(str.slice(-3));
    str = str.slice(0, -3);
   }
   return resultado.reverse().join(b);
}

console.log(insereNaStr('1234567', '.'));
console.log(insereNaStr('abcde', '$'));
console.log(insereNaStr('zxyzxyzxyzxyzxyz','w'));
