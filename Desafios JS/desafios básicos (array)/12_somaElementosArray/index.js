function somaElementoDoArray (meuArray, numero) {
    let contador = 0;
    for (var i = 0; i < meuArray.length; i++) {
        if (meuArray[i] > numero) {
            contador += meuArray[i];
        }
    }
    return contador;
}

console.log(somaElementoDoArray([1, 2, 3, 4, 5, 6, 7, 8], 3));