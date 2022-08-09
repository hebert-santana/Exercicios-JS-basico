// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function retornaArray (num) {
    let meuArray = [];
    let numeroStr = num.toString();
    for (var i = 0; i < numeroStr.length; i++ ) {
        meuArray[i] = Number(numeroStr[i]);
    }
    return meuArray;
}

console.log(retornaArray(10));
console.log(retornaArray(931));
console.log(retornaArray(193278));

/*  const string = a + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))*/