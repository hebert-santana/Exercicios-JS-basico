function retornaArray (numMin, numMax) {
    let meuArray = [undefined];
    let numeroMinimo = numMin;
    for (var i = 0; i <= (numMax - numMin); i++) {
        meuArray[i] = numeroMinimo;
        numeroMinimo++;
    }
    return meuArray;
}

console.log(retornaArray(1, 5));
console.log(retornaArray(11, 18));
console.log(retornaArray(-5, 5));
