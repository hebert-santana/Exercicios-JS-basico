function filtraArray (meuArray, b) {
    var buscar = b;
    var indice = meuArray.indexOf(buscar);

    while (indice >= 0) {
        meuArray.splice(indice, 1)
        indice = meuArray.indexOf(buscar);
    }

    return meuArray;
}

console.log(filtraArray([1, 2, 3], 2));
console.log(filtraArray([1, 2, '3'], '3'));
console.log(filtraArray(['1', false, 2, '3'], false));
console.log(filtraArray([5, 1, 2, 5, 3, 5], 5));