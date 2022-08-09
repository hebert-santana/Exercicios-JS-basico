// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function formaPalavra(str) {
    let palavra = str;
    let palavraConstruida = '';
    let numeroCharCode = 0;
    let letra = '';

    for (var i = 0; i < palavra.length; i++) {
        numeroCharCode = (palavra[i].charCodeAt(0) + 1);
        letra = String.fromCharCode(numeroCharCode);
        palavraConstruida += letra;
    }
    return (palavraConstruida);
}

console.log(formaPalavra('bnchmf'));
console.log(formaPalavra('bgddrd'));
console.log(formaPalavra('sdrshmf'));

/*  const arr = [...str];
  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  return correctedArray.join(''); */