function concatenaArray (arrayA, arrayB) {
    let arrayConcatenado = arrayA.concat(arrayB);

    var novoArray = arrayConcatenado.filter(function(este, i) {
        return arrayConcatenado.indexOf(este) === i;
    });
    return novoArray;
}

console.log(concatenaArray([1, 2, 3], [3, 4, 5]));
console.log(concatenaArray([6, 7], [8, 9]));
console.log(concatenaArray([-2, -1, 0, 1, 2], [-1, 1, 2, 3]));