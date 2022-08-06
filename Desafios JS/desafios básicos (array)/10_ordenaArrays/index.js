function ordenaArray(meuArray, ordem = 'asc') {
    let diferenteDeNumero = meuArray.every(function (elem) { return typeof elem !== 'number';});

    if (ordem === 'asc') {
        if (diferenteDeNumero === true ) {
            return meuArray.sort();
        } else if (diferenteDeNumero === false) {
            return meuArray.sort(comparaNumeros);
        }
    } else if (ordem === 'desc') {
        if (diferenteDeNumero === true ) {
            meuArray.sort();
            return meuArray.reverse();
        } else if (diferenteDeNumero === false) {
            meuArray.sort(comparaNumeros);
            return meuArray.reverse();
        }
    }    
}

function comparaNumeros(a, b) {
    return a - b;
}

console.log(ordenaArray([2, 3, 1], 'asc'));
console.log(ordenaArray([6, 2, 8, 1, 5], 'desc'));
console.log(ordenaArray(['uva', 'maçã', 'laranja'], 'asc'));
console.log(ordenaArray(['t', 'a', 's', 'z', 'm']));
console.log(ordenaArray(['galo', 'doido', 'hebert santana'], 'desc'));
